// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

/**
 * @title TokenizeX1155
 * @dev Contrato para tokenização de ativos agrícolas usando o padrão ERC1155
 */
contract TokenizeX1155 is ERC1155, Ownable {
    using Strings for uint256;

    // Estrutura para armazenar informações do produto
    struct Produto {
        string nome;
        string tipoProduto;
        uint256 precoPorKg;
        uint256 quantidadeKg;
        address produtor;
    }

    // Mapeamento de ID do token para produto
    mapping(uint256 => Produto) public produtos;
    
    // Mapeamento de endereço do produtor para saldo disponível para saque
    mapping(address => uint256) public saldoProdutor;
    
    // Endereço da plataforma que recebe comissão
    address public plataforma;
    
    // Taxa de comissão em pontos percentuais (100 = 1%)
    uint256 public taxaComissao = 250; // 2.5% por padrão
    
    // Contador para o próximo ID de token
    uint256 private _nextTokenId = 1;

    // Eventos
    event ProdutoTokenizado(
        uint256 indexed tokenId,
        address indexed produtor,
        string nome,
        uint256 quantidadeKg,
        uint256 precoPorKg
    );
    
    event ProdutoComprado(
        uint256 indexed tokenId,
        address indexed comprador,
        address indexed produtor,
        uint256 quantidadeKg,
        uint256 valorPago,
        uint256 comissao
    );
    
    event SaqueRealizado(
        address indexed produtor,
        uint256 valor
    );

    constructor() ERC1155("https://tokenizex.example/api/token/{id}.json") {
    _transferOwnership(msg.sender);
    plataforma = msg.sender;
    }

    /**
     * @dev Tokeniza um novo ativo agrícola
     * @param _nome Nome do produto
     * @param _tipo Tipo do produto (ex: soja, milho, café)
     * @param _pesoKg Quantidade total em quilogramas
     * @param _precoPorKg Preço por quilograma em wei
     */
    function tokenizarAtivo(
        string memory _nome,
        string memory _tipo,
        uint256 _pesoKg,
        uint256 _precoPorKg
    ) public {
        require(bytes(_nome).length > 0, "Nome invalido");
        require(_pesoKg > 0, "Quantidade deve ser maior que zero");
        require(_precoPorKg > 0, "Preco deve ser maior que zero");

        uint256 tokenId = _nextTokenId;
        _nextTokenId++;

        // Criar o produto
        produtos[tokenId] = Produto({
            nome: _nome,
            tipoProduto: _tipo,
            precoPorKg: _precoPorKg,
            quantidadeKg: _pesoKg,
            produtor: msg.sender
        });

        // Mintar tokens para o produtor
        _mint(msg.sender, tokenId, _pesoKg, "");

        emit ProdutoTokenizado(tokenId, msg.sender, _nome, _pesoKg, _precoPorKg);
    }

    /**
     * @dev Permite a compra de uma quantidade específica de um ativo tokenizado
     * @param tokenId ID do token a ser comprado
     * @param quantidadeKg Quantidade em quilogramas a ser comprada
     */
    function comprarAtivo(uint256 tokenId, uint256 quantidadeKg) public payable {
        Produto storage produto = produtos[tokenId];
        
        require(produto.produtor != address(0), "Produto nao existe");
        require(quantidadeKg > 0, "Quantidade deve ser maior que zero");
        require(quantidadeKg <= produto.quantidadeKg, "Quantidade insuficiente disponivel");
        
        uint256 valorTotal = produto.precoPorKg * quantidadeKg;
        require(msg.value >= valorTotal, "Valor insuficiente");

        // Calcular comissão
        uint256 comissao = (valorTotal * taxaComissao) / 10000;
        uint256 valorProdutor = valorTotal - comissao;

        // Atualizar saldo do produtor
        saldoProdutor[produto.produtor] += valorProdutor;
        
        // Enviar comissão para a plataforma
        (bool success, ) = plataforma.call{value: comissao}("");
        require(success, "Falha ao enviar comissao");

        // Transferir tokens
        _safeTransferFrom(produto.produtor, msg.sender, tokenId, quantidadeKg, "");
        
        // Atualizar quantidade disponível
        produto.quantidadeKg -= quantidadeKg;

        emit ProdutoComprado(tokenId, msg.sender, produto.produtor, quantidadeKg, valorTotal, comissao);
        
        // Retornar excesso de ETH se houver
        if (msg.value > valorTotal) {
            (bool refundSuccess, ) = msg.sender.call{value: msg.value - valorTotal}("");
            require(refundSuccess, "Falha ao retornar excesso de ETH");
        }
    }

    /**
     * @dev Permite que um produtor saque seu saldo disponível
     */
    function saque() public {
        uint256 valor = saldoProdutor[msg.sender];
        require(valor > 0, "Saldo insuficiente");

        saldoProdutor[msg.sender] = 0;

        (bool success, ) = msg.sender.call{value: valor}("");
        require(success, "Falha ao enviar ETH");

        emit SaqueRealizado(msg.sender, valor);
    }

    /**
     * @dev Obtém o produto pelo ID
     * @param tokenId ID do token
     * @return Informações do produto
     */
    function getProduto(uint256 tokenId) public view returns (Produto memory) {
        require(produtos[tokenId].produtor != address(0), "Produto nao existe");
        return produtos[tokenId];
    }

    /**
     * @dev Obtém o saldo de um produtor
     * @param produtor Endereço do produtor
     * @return Saldo disponível para saque
     */
    function getSaldoProdutor(address produtor) public view returns (uint256) {
        return saldoProdutor[produtor];
    }

    /**
     * @dev Obtém todos os produtos disponíveis
     * @return Array com todos os produtos
     */
    function getTodosProdutos() public view returns (Produto[] memory) {
        uint256 total = _nextTokenId - 1;
        Produto[] memory result = new Produto[](total);
        
        for (uint256 i = 1; i <= total; i++) {
            result[i-1] = produtos[i];
        }
        
        return result;
    }

    /**
     * @dev Permite ao proprietário alterar a taxa de comissão
     * @param novaTaxa Nova taxa de comissão (em pontos percentuais, 100 = 1%)
     */
    function setTaxaComissao(uint256 novaTaxa) public onlyOwner {
        require(novaTaxa <= 1000, "Taxa maxima de 10%");
        taxaComissao = novaTaxa;
    }

    /**
     * @dev Sobrescreve a função URI para fornecer metadados dinâmicos
     */
    function uri(uint256 tokenId) public view override returns (string memory) {
        require(produtos[tokenId].produtor != address(0), "Token inexistente");
        return string(abi.encodePacked(super.uri(tokenId), tokenId.toString()));
    }
}