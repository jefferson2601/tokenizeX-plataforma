
const contractAddress = "0xcE22DeC3101d3Ed8884FFe8971221bae17DAb574";
const contractABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ERC1155InsufficientBalance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "approver",
          "type": "address"
        }
      ],
      "name": "ERC1155InvalidApprover",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "idsLength",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "valuesLength",
          "type": "uint256"
        }
      ],
      "name": "ERC1155InvalidArrayLength",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "ERC1155InvalidOperator",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "ERC1155InvalidReceiver",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "ERC1155InvalidSender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "ERC1155MissingApprovalForAll",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "comprador",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "produtor",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "quantidadeToken",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "valorPago",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "comissao",
          "type": "uint256"
        }
      ],
      "name": "ProdutoComprado",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "produtor",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "nome",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "quantidadeToken",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "precoPorToken",
          "type": "uint256"
        }
      ],
      "name": "ProdutoTokenizado",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "produtor",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "valor",
          "type": "uint256"
        }
      ],
      "name": "SaqueRealizado",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        }
      ],
      "name": "TransferBatch",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "TransferSingle",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "value",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "URI",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "accounts",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        }
      ],
      "name": "balanceOfBatch",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "quantidadeToken",
          "type": "uint256"
        }
      ],
      "name": "comprarAtivo",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getProduto",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "nome",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "tipoProduto",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "precoPorToken",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "marktcap",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "produtor",
              "type": "address"
            }
          ],
          "internalType": "struct TokenizeX1155.Produto",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "produtor",
          "type": "address"
        }
      ],
      "name": "getSaldoProdutor",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTodosProdutos",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "nome",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "tipoProduto",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "precoPorToken",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "marktcap",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "produtor",
              "type": "address"
            }
          ],
          "internalType": "struct TokenizeX1155.Produto[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "plataforma",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "produtos",
      "outputs": [
        {
          "internalType": "string",
          "name": "nome",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "tipoProduto",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "precoPorToken",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "marktcap",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "produtor",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeBatchTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "saldoProdutor",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "saque",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "novaTaxa",
          "type": "uint256"
        }
      ],
      "name": "setTaxaComissao",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "taxaComissao",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_nome",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_tipo",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_marktcap",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_precoPorToken",
          "type": "uint256"
        }
      ],
      "name": "tokenizarAtivo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "uri",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
// Variáveis globais

let provider = null;
let signer = null;
let contract = null;
let walletConnected = false;
let tokenizacaoEmAndamento = false; // Adicione esta linha

// Taxa de conversão USD para ETH (para exemplo, normalmente você usaria uma API)
const USD_TO_ETH_RATE = 0.00033; // 1 USD = 0.00033 ETH (exemplo)

// Função para obter imagem com base no tipo de produto
function getImagemPorTipo(tipo) {
  const imagens = {
    casa: "imagens/featured/casa.jpg",
    fazenda: "imagens/featured/fazenda.jpg",
    condominio: "imagens/featured/condominio.jpg",
    hotel: "imagens/featured/hotel.jpg",
    predio: "imagens/featured/predio.jpg"
  };
  return imagens[tipo.toLowerCase()] || "imagens/featured/generico.jpg";
 
}

// ======================================================
// GERENCIAMENTO DE CARTEIRA
// ======================================================


// Função para verificar se a carteira já está conectada
async function checkWalletStatus() {
    // Verificar se há um estado salvo no localStorage
    const savedState = localStorage.getItem('walletConnected');
    
    if (savedState === 'true' && window.ethereum) {
      try {
        // Tentar restaurar a conexão sem solicitar permissão
        provider = new ethers.providers.Web3Provider(window.ethereum);
        
        // Verificar a rede
        const network = await provider.getNetwork();
        if (network.chainId !== 11155111) {
          console.log("Rede incorreta detectada:", network.chainId);
          localStorage.removeItem('walletConnected');
          return false;
        }
        
        const accounts = await provider.listAccounts();
        
        if (accounts.length > 0) {
          signer = provider.getSigner();
          contract = new ethers.Contract(contractAddress, contractABI, signer);
          walletConnected = true;
          updateWalletUI(true);
          return true;
        }
      } catch (error) {
        console.log("Erro ao restaurar conexão da carteira:", error);
        localStorage.removeItem('walletConnected');
      }
    }
    
    updateWalletUI(false);
    return false;
  }


// Função para conectar a carteira MetaMask
async function connectWallet() {
    if (!window.ethereum) {
      alert("MetaMask não encontrada. Por favor, instale a extensão MetaMask.");
      return false;
    }
  
    try {
      // Verificar a rede atual
      provider = new ethers.providers.Web3Provider(window.ethereum);
      const network = await provider.getNetwork();
      
      // Rede Sepolia tem chainId 11155111
      if (network.chainId !== 11155111) {
        alert("Por favor, conecte-se à rede Sepolia na sua MetaMask para usar este aplicativo. Você está atualmente conectado a uma rede diferente.");
        
        // Solicitar troca para Sepolia
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0xaa36a7' }], // 0xaa36a7 é o hexadecimal para 11155111
          });
          console.log("Rede alterada para Sepolia");
        } catch (switchError) {
          // Se a rede não está adicionada, oferecer adicioná-la
          if (switchError.code === 4902) {
            try {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    chainId: '0xaa36a7',
                    chainName: 'Sepolia Test Network',
                    nativeCurrency: {
                      name: 'ETH',
                      symbol: 'ETH',
                      decimals: 18
                    },
                    rpcUrls: ['https://sepolia.infura.io/v3/'],
                    blockExplorerUrls: ['https://sepolia.etherscan.io/'],
                  },
                ],
              });
            } catch (addError) {
              console.error("Erro ao adicionar rede:", addError);
            }
          }
          return false;
        }
      }
      
      // Continuar com o processo de conexão
      await provider.send("eth_requestAccounts", []);
      signer = provider.getSigner();
      contract = new ethers.Contract(contractAddress, contractABI, signer);
      
      const address = await signer.getAddress();
      console.log("Carteira conectada:", address);
      
      // Salvar estado de conexão
      walletConnected = true;
      localStorage.setItem('walletConnected', 'true');
      
      // Atualizar a UI
      updateWalletUI(true);
      
      return true;
    } catch (error) {
      console.error("Erro ao conectar carteira:", error);
      alert("Erro ao conectar à MetaMask. Por favor, tente novamente.");
      walletConnected = false;
      localStorage.removeItem('walletConnected');
      updateWalletUI(false);
      return false;
    }
  }

// Função para desconectar a carteira
function disconnectWallet() {
  provider = null;
  signer = null;
  contract = null;
  walletConnected = false;
  
  // Remover estado de conexão salvo
  localStorage.removeItem('walletConnected');
  
  // Atualizar a UI
  updateWalletUI(false);
  
  console.log("Carteira desconectada");
}

// Função para atualizar a interface baseada no estado da carteira
async function updateWalletUI(isConnected) {
  const connectButton = document.getElementById("connectButton");
  const disconnectButton = document.getElementById("disconnectButton");
  
  if (isConnected && signer) {
    const address = await signer.getAddress();
    
    if (connectButton) {
      connectButton.textContent = `Conectado: ${address.slice(0, 6)}...${address.slice(-4)}`;
      connectButton.disabled = true;
    }
    
    if (disconnectButton) {
      disconnectButton.style.display = "inline-block";
    }
    
    const sacarButton = document.getElementById("sacarButton");
    if (sacarButton) {
      sacarButton.disabled = false;
    }
  } else {
    if (connectButton) {
      connectButton.textContent = "Conectar Carteira";
      connectButton.disabled = false;
    }
    
    if (disconnectButton) {
      disconnectButton.style.display = "none";
    }
    
    const sacarButton = document.getElementById("sacarButton");
    if (sacarButton) {
      sacarButton.disabled = true;
    }
  }
}

// ======================================================
// FUNCIONALIDADES DE TOKENIZAÇÃO
// ======================================================

// Função para calcular o preço em ETH com base no USD
function calcularPrecoETH() {
  const precoUSD = document.getElementById("precoUSD").value;
  const precoETHInput = document.getElementById("precoETH");
  
  if (precoUSD && !isNaN(precoUSD)) {
    const precoETH = parseFloat(precoUSD) * USD_TO_ETH_RATE;
    precoETHInput.value = precoETH.toFixed(6);
  } else {
    precoETHInput.value = "";
  }
}
// Função para tokenizar um novo ativo

async function tokenizarAtivo() {
    if (tokenizacaoEmAndamento) {
      console.log("Tokenização já em andamento, ignorando chamada duplicada");
      return;
    }
  
    if (!contract || !signer) {
      alert("Carteira não conectada.");
      return;
    }
  
    const nome = document.getElementById("nome").value;
    const pesoKg = parseInt(document.getElementById("peso").value);
    const tipo = document.getElementById("tipo").value;
    const precoETH = document.getElementById("precoETH").value;
  
    if (!nome || !pesoKg || !tipo || !precoETH) {
      alert("Preencha todos os campos.");
      return;
    }
  
    try {
      tokenizacaoEmAndamento = true;
      console.log("Iniciando tokenização para:", nome);
      
      // Verificar se já existe um ativo com esse nome
      const produtos = await carregarTodosProdutos(false);
      
      // Usar uma verificação mais simples
      const produtoExistente = produtos.some(p => 
        p.nome.toLowerCase() === nome.toLowerCase()
      );
  
      if (produtoExistente) {
        alert(`Já existe um ativo com o nome "${nome}". Por favor, use um nome diferente.`);
        tokenizacaoEmAndamento = false;
        return;
      }
      
      // Converter preço para wei
      const precoWei = ethers.utils.parseEther(precoETH);
      
      // Mostrar loading
      const submitButton = document.getElementById("submitButton");
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Processando...";
      }
      
      // IMPORTANTE: Adicionar o parâmetro 'to' como a carteira do usuário
      // em vez do contrato para evitar o erro ERC1155InvalidReceiver
      const myAddress = await signer.getAddress();
      
      console.log("Enviando transação com parâmetros:", {
        nome: nome,
        tipo: tipo,
        pesoKg: pesoKg,
        precoWei: precoWei.toString()
      });
      
      // Verificar se há funções alternativas no contrato
      // que possam ser usadas para tokenização
      let tx;
      try {
        // A função original pode não estar funcionando como esperado
        // Vamos tentar com um gas limit explícito
        tx = await contract.tokenizarAtivo(nome, tipo, pesoKg, precoWei, { 
          gasLimit: 1000000 
        });
      } catch (innerError) {
        console.error("Erro inicial ao tokenizar, tentando com mais detalhes:", innerError);
        alert("Ocorreu um erro ao tentar tokenizar. O contrato parece ter restrições que impedem a criação de novos tokens. Verifique se você é o proprietário do contrato.");
        
        // Não prosseguir com a tentativa de espera pela transação
        tokenizacaoEmAndamento = false;
        
        // Restaurar botão
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = "Tokenizar Ativo";
        }
        
        return;
      }
      
      console.log("Tokenização enviada:", tx.hash);
      
      alert("Transação enviada. Aguardando confirmação...");
      
      // Limpar formulário após envio bem-sucedido
      document.getElementById("tokenForm").reset();
      
      // Tente aguardar a confirmação separadamente para evitar falhas na UI
      try {
        await tx.wait();
        alert("Ativo tokenizado com sucesso!");
      } catch (waitError) {
        console.error("Erro ao aguardar confirmação:", waitError);
        alert("A transação foi enviada mas pode ter falhado durante a execução. Verifique o Etherscan para mais detalhes.");
      }
      
    } catch (error) {
      console.error("Erro ao tokenizar ativo:", error);
      
      // Mensagem de erro específica para o ERC1155InvalidReceiver
      if (error.message.includes("ERC1155InvalidReceiver")) {
        alert("Erro: O contrato não pode receber tokens ERC1155. Este é um problema conhecido do contrato e será necessário reimplementá-lo com a interface correta.");
      } else if (error.message.includes("execution reverted")) {
        alert("A transação foi rejeitada pelo contrato. Isso pode acontecer se você não é o proprietário do contrato ou se há outras restrições.");
      } else {
        alert("Erro ao tokenizar o ativo: " + error.message);
      }
    } finally {
      // Restaurar botão
      const submitButton = document.getElementById("submitButton");
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "Tokenizar Ativo";
      }
      
      // Marcar tokenização como concluída
      tokenizacaoEmAndamento = false;
    }
  }
// ======================================================
// GERENCIAMENTO DE PRODUTOS
// ======================================================

// Função auxiliar para carregar todos os produtos sem atualizar a UI
async function carregarTodosProdutos(updateUI = true) {
  if (!contract) {
    return [];
  }

  try {
    let produtos = [];
    let tokenId = 1;
    let falhasConsecutivas = 0;
    const MAX_FALHAS_CONSECUTIVAS = 5; // Mais tolerância

    while (falhasConsecutivas < MAX_FALHAS_CONSECUTIVAS && tokenId <= 100) {
      try {
        const produto = await contract.getProduto(tokenId);

        if (produto.nome && produto.nome !== "") {
          produtos.push({
            id: tokenId,
            nome: produto.nome,
            tipoProduto: produto.tipoProduto,
            precoPorKg: produto.precoPorToken, // mesmo nome do seu contrato
            quantidadeKg: produto.marktcap, // mesmo nome do seu contrato
            produtor: produto.produtor
          });

          falhasConsecutivas = 0;
        } else {
          falhasConsecutivas++;
        }

        tokenId++;
      } catch (error) {
        falhasConsecutivas++;
        tokenId++;
      }
    }

    if (!updateUI) return produtos;

    const container = document.getElementById("produtosGrid");
    if (!container) return produtos;

    container.innerHTML = "";

    if (produtos.length === 0) {
      container.innerHTML = "<p class='no-produtos'>Nenhum produto disponível no momento.</p>";
      return produtos;
    }

    produtos.forEach((produto) => {
      const quantidade = formatarQuantidade(produto.quantidadeKg);
      const preco = formatarPreco(produto.precoPorKg);

      if (parseInt(quantidade) > 0) {
        const card = document.createElement("div");
        card.className = "produto-card";

        card.innerHTML = `
          <img src="${getImagemPorTipo(produto.tipoProduto)}" alt="${produto.nome}" class="produto-img" onerror="this.src='imagens/generico.jpg'" />
          <h3>${produto.nome}</h3>
          <p>Tipo: ${produto.tipoProduto}</p>
          <p>Preço por token: ${preco} ETH</p>
          <p>Disponível: ${quantidade} tokens</p>
          <input type="number" min="1" max="${quantidade}" value="1" placeholder="Qtd" class="quantidade-input" id="quantidade-${produto.id}" />
          <button class="botao-comprar" onclick="comprarAtivo(${produto.id}, document.getElementById('quantidade-${produto.id}').value)">Comprar</button>
        `;

        container.appendChild(card);
      }
    });

    return produtos;
  } catch (error) {
    console.error("Erro ao carregar produtos:", error);

    const container = document.getElementById("produtosGrid");
    if (container && updateUI) {
      container.innerHTML = `
        <div class="error-message">
          <p>Ocorreu um erro ao carregar os produtos.</p>
          <button onclick="carregarProdutos()">Tentar Novamente</button>
        </div>
      `;
    }

    return [];
  }
}

async function carregarProdutos() {
    return await carregarTodosProdutos(true);
  }
// Função para comprar um ativo
async function comprarAtivo(tokenId, quantidadeKg) {
  if (!contract || !signer) {
    alert("Carteira não conectada.");
    return;
  }

  const quantidade = parseInt(quantidadeKg);
  if (!quantidade || quantidade <= 0) {
    alert("Digite uma quantidade válida.");
    return;
  }

  try {
    console.log(`Tentando comprar produto ${tokenId}, quantidade: ${quantidade}`);
    
    // Obter produto para calcular valor total
    const produto = await contract.produtos(tokenId);
    console.log("Produto a ser comprado:", produto);
    
    if (!produto || !produto.precoPorKg) {
      alert("Produto não encontrado.");
      return;
    }
    
    const total = produto.precoPorKg.mul(quantidade);
    console.log("Valor total da compra:", ethers.utils.formatEther(total), "ETH");
    
    // Executar transação de compra
    alert(`Confirmando compra de ${quantidade}kg de ${produto.nome} por ${ethers.utils.formatEther(total)} ETH`);
    const tx = await contract.comprarAtivo(tokenId, quantidade, { value: total });
    
    console.log("Compra enviada:", tx.hash);
    alert("Transação enviada. Aguardando confirmação...");
    
    await tx.wait();
    alert("Compra realizada com sucesso!");
    
    // Atualizar interface
    await carregarProdutos();
    await verificarSaldo();
  } catch (error) {
    console.error("Erro na compra do ativo:", error);
    alert("Erro ao realizar a compra: " + error.message);
  }
}

// Adicione esta função no seu arquivo app.js
async function verificarContrato() {
    try {
      if (!contract) {
        alert("Carteira não conectada.");
        return;
      }
      
      // Obter endereço do proprietário
      const owner = await contract.owner();
      const myAddress = await signer.getAddress();
      
      // Obter contador de tokens
      let nextTokenId;
      try {
        // Tentar ler valor privado _nextTokenId (depende da estrutura do contrato)
        nextTokenId = await contract._nextTokenId();
      } catch (e) {
        nextTokenId = "Não acessível";
      }
      
      // Obter taxa de comissão
      const taxaComissao = await contract.taxaComissao();
      
      // Obter endereço da plataforma
      const plataforma = await contract.plataforma();
      
      const resultado = {
        "Endereço do Contrato": contractAddress,
        "Proprietário": owner,
        "Minha Carteira": myAddress,
        "Sou o Proprietário?": owner.toLowerCase() === myAddress.toLowerCase(),
        "Endereço da Plataforma": plataforma,
        "Taxa de Comissão": taxaComissao.toString(),
        "Próximo Token ID": nextTokenId.toString()
      };
      
      console.log("Estado do Contrato:", resultado);
      alert("Informações do contrato exibidas no console.");
      
      return resultado;
    } catch (error) {
      console.error("Erro ao verificar contrato:", error);
      alert("Erro ao verificar contrato. Veja o console para detalhes.");
    }
  }

// ======================================================
// DASHBOARD DO PRODUTOR
// ======================================================

// Função para verificar saldo do produtor
async function verificarSaldo() {
  if (!contract || !signer) {
    const conectado = await connectWallet();
    if (!conectado) return;
  }

  try {
    const address = await signer.getAddress();
    console.log("Verificando saldo para o endereço:", address);
    
    // Tentar obter o saldo usando a função correta do contrato
    let saldo;
    try {
      // Primeiro, tente getSaldoProdutor(address)
      saldo = await contract.getSaldoProdutor(address);
    } catch (e) {
      console.log("Erro ao usar getSaldoProdutor, tentando saldoProdutor...");
      try {
        // Se falhar, tente saldoProdutor(address)
        saldo = await contract.saldoProdutor(address);
      } catch (e) {
        console.log("Erro ao usar saldoProdutor também, definindo saldo como zero");
        // Se ambos falharem, defina o saldo como zero
        saldo = ethers.BigNumber.from("0");
      }
    }
    
    const saldoDiv = document.getElementById("saldoInfo");
    if (saldoDiv) {
      // Formatar saldo em ETH
      const saldoETH = ethers.utils.formatEther(saldo);
      saldoDiv.innerHTML = `
        <p><strong>Saldo Disponível para Saque:</strong> <span id="saldoValor">${saldoETH} ETH</span></p>
        <button id="sacarButton" ${saldo.eq(0) ? 'disabled' : ''}>Sacar ETH</button>
      `;
      
      // Adicionar event listener ao botão de saque
      const sacarButton = document.getElementById("sacarButton");
      if (sacarButton) {
        sacarButton.addEventListener("click", sacarSaldo);
      }
    }
  } catch (error) {
    console.error("Erro ao obter saldo:", error);
    
    // Mostrar uma mensagem amigável para o usuário
    const saldoDiv = document.getElementById("saldoInfo");
    if (saldoDiv) {
      saldoDiv.innerHTML = `
        <p><strong>Saldo Disponível para Saque:</strong> <span id="saldoValor">0 ETH</span></p>
        <p class="error-message">Não foi possível verificar seu saldo. Verifique se você está conectado à rede correta.</p>
        <button id="sacarButton" disabled>Sacar ETH</button>
      `;
    }
  }
}

// Função para sacar o saldo
async function sacarSaldo() {
  if (!contract || !signer) {
    alert("Carteira não conectada.");
    return;
  }

  try {
    const tx = await contract.saque();
    console.log("Saque solicitado:", tx.hash);
    alert("Transação de saque enviada. Aguardando confirmação...");
    await tx.wait();
    alert("Saque realizado com sucesso!");
    await verificarSaldo();
  } catch (error) {
    console.error("Erro ao sacar:", error);
    alert("Erro ao realizar o saque: " + error.message);
  }
}

// Função para carregar os ativos do produtor atual
async function carregarMeusAtivos() {
  if (!contract || !signer) {
    const conectado = await connectWallet();
    if (!conectado) return;
  }

  try {
    const address = await signer.getAddress();
    console.log("Carregando ativos para o produtor:", address);
    
    // Usar a função auxiliar para obter todos os produtos
    const todosProdutos = await carregarTodosProdutos(false);
    
    // Filtrar apenas os produtos do produtor atual
    const meusAtivos = todosProdutos.filter(produto => {
      return isMatchingAddress(produto.produtor, address);
    });
    
    console.log("Meus ativos encontrados:", meusAtivos);
    
    const meusAtivosElement = document.getElementById('meusAtivos');
    if (!meusAtivosElement) return;

    if (meusAtivos.length === 0) {
      meusAtivosElement.innerHTML = `
        <p>Você ainda não tem ativos tokenizados.</p>
        <a href="tokenizacao.html" class="cta-button">Tokenizar um Ativo</a>
      `;
      return;
    }

    // Criar tabela para exibir os ativos
    let html = `
      <table class="ativos-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Quantidade (kg)</th>
            <th>Preço (ETH/kg)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
    `;

    meusAtivos.forEach(ativo => {
      // Formatar valores
      let quantidadeFormatada = formatarQuantidade(ativo.quantidadeKg);
      let precoFormatado = formatarPreco(ativo.precoPorKg);
      
      const status = parseInt(quantidadeFormatada) > 0 ? 'Disponível' : 'Vendido';
      const statusClass = parseInt(quantidadeFormatada) > 0 ? 'status-available' : 'status-sold';

      html += `
        <tr>
          <td>${ativo.nome}</td>
          <td>${ativo.tipoProduto}</td>
          <td>${quantidadeFormatada}</td>
          <td>${precoFormatado}</td>
          <td class="${statusClass}">${status}</td>
        </tr>
      `;
    });

    html += `
        </tbody>
      </table>
    `;

    meusAtivosElement.innerHTML = html;

    // Adicionar estilos para a tabela se não existirem
    if (!document.getElementById('tabela-style')) {
      const style = document.createElement('style');
      style.id = 'tabela-style';
      style.textContent = `
        .ativos-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 15px;
          background-color: white;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .ativos-table th, .ativos-table td {
          padding: 12px 15px;
          text-align: left;
          border-bottom: 1px solid #eee;
        }
        .ativos-table th {
          background-color: #f8f9fa;
          font-weight: bold;
        }
        .ativos-table tr:hover {
          background-color: #f8f9fa;
        }
        .status-available {
          color: #16a34a;
          font-weight: bold;
        }
        .status-sold {
          color: #dc2626;
        }
        .error-message {
          color: #dc2626;
          background-color: #fee2e2;
          padding: 10px;
          border-radius: 4px;
          margin: 10px 0;
        }
      `;
      document.head.appendChild(style);
    }
  } catch (error) {
    console.error("Erro ao carregar ativos do produtor:", error);
    
    const meusAtivosElement = document.getElementById('meusAtivos');
    if (meusAtivosElement) {
      meusAtivosElement.innerHTML = `
        <p class="error-message">Não foi possível carregar seus ativos. Verifique se você está conectado à rede correta.</p>
        <button onclick="carregarMeusAtivos()" class="retry-button">Tentar Novamente</button>
      `;
    }
  }
}

// Função para carregar histórico de vendas (simulado)
async function carregarHistoricoVendas() {
  if (!contract || !signer) return;

  const listaVendas = document.getElementById("listaVendas");
  if (!listaVendas) return;

  listaVendas.innerHTML = "<li>O histórico de vendas será implementado usando eventos do contrato.</li>";
}

// ======================================================
// FUNÇÕES AUXILIARES
// ======================================================

// Função para verificar se dois endereços correspondem, considerando formato com zeros
// Substituir a função existente
function isMatchingAddress(address1, address2) {
    if (!address1 || !address2) return false;
  
    // Log para depuração
    console.log("Comparando endereços:", {
      address1: address1,
      address2: address2
    });
  
    // Normalizar para lowercase
    const addr1 = address1.toLowerCase();
    const addr2 = address2.toLowerCase();
  
    // Verificar correspondência direta
    if (addr1 === addr2) {
      console.log("Endereços correspondem diretamente");
      return true;
    }
  
    // Verificar se é um endereço com zeros à esquerda
    if (addr1.startsWith('0x000000000000000000000000')) {
      const cleanAddress = '0x' + addr1.slice(26);
      console.log("Endereço 1 limpo:", cleanAddress);
      if (cleanAddress.toLowerCase() === addr2) {
        console.log("Endereços correspondem após limpeza do endereço 1");
        return true;
      }
    }
  
    if (addr2.startsWith('0x000000000000000000000000')) {
      const cleanAddress = '0x' + addr2.slice(26);
      console.log("Endereço 2 limpo:", cleanAddress);
      if (addr1 === cleanAddress.toLowerCase()) {
        console.log("Endereços correspondem após limpeza do endereço 2");
        return true;
      }
    }
  
    console.log("Endereços não correspondem");
    return false;
  }


// Função para formatar quantidade de produtos
function formatarQuantidade(quantidade) {
    if (typeof quantidade === 'object' && quantidade._isBigNumber) {
      try {
        // Converter o BigNumber para string
        const quantidadeStr = quantidade.toString();
        
        // Verificar se parece ser um número muito grande
        if (quantidadeStr.length > 10) {
          // Pegar apenas os primeiros dígitos e converter para número
          const primeirosDigitos = quantidadeStr.slice(0, Math.min(4, quantidadeStr.length));
          return primeirosDigitos;
        }
        
        // Retornar o número original
        return quantidadeStr;
      } catch (e) {
        console.error("Erro ao formatar quantidade:", e);
        return "1000"; // Valor padrão em caso de erro
      }
    }
    return quantidade ? quantidade.toString() : "0";
  }
  
  // Função para formatar preço
  function formatarPreco(preco) {
    if (typeof preco === 'object' && preco._isBigNumber) {
      try {
        // Converter para ETH
        const precoEth = ethers.utils.formatEther(preco);
        const valorNumerico = parseFloat(precoEth);
        
        // Se for um valor absurdamente grande ou pequeno, usar valor padrão
        if (valorNumerico > 1000 || valorNumerico < 0.000000001) {
          console.log("Valor de preço fora dos limites razoáveis:", valorNumerico);
          return "0.001";
        }
        
        // Limitar a 6 casas decimais para valores normais
        return valorNumerico.toFixed(6);
      } catch (e) {
        console.error("Erro ao formatar preço:", e);
        return "0.001"; // Valor padrão
      }
    }
    return preco ? preco.toString() : "0";
  }

// ======================================================
// INICIALIZAÇÃO DA APLICAÇÃO
// ======================================================
document.addEventListener('DOMContentLoaded', async () => {
  // Verificar status da carteira
  await checkWalletStatus();
  
  // Adicionar listeners para os botões de carteira
  const connectButton = document.getElementById("connectButton");
  if (connectButton) {
    connectButton.addEventListener("click", connectWallet);
  }
  
  const disconnectButton = document.getElementById("disconnectButton");
  if (disconnectButton) {
    disconnectButton.addEventListener("click", disconnectWallet);
  }
  
  // Listener para cálculo de preço em ETH
  const precoUSDInput = document.getElementById("precoUSD");
  if (precoUSDInput) {
    precoUSDInput.addEventListener("input", calcularPrecoETH);
    // Calcular inicialmente se já tiver um valor
    if (precoUSDInput.value) {
      calcularPrecoETH();
    }
  }

 // Listener para o formulário de tokenização
const tokenForm = document.getElementById("tokenForm");
if (tokenForm) {
  // Remover todos os event listeners existentes
  const novoForm = tokenForm.cloneNode(true);
  tokenForm.parentNode.replaceChild(novoForm, tokenForm);
  
  // Adicionar novo event listener
  novoForm.addEventListener("submit", function(e) {
    e.preventDefault();
    tokenizarAtivo();
  });
}
  
  // Verificar mudanças de conta na MetaMask
  if (window.ethereum) {
    window.ethereum.on('accountsChanged', async (accounts) => {
      if (accounts.length === 0) {
        // Usuário desconectou pela MetaMask
        disconnectWallet();
      } else if (walletConnected) {
        // Usuário trocou de conta, mas ainda está conectado
        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        contract = new ethers.Contract(contractAddress, contractABI, signer);
        updateWalletUI(true);
        
        // Recarregar dados para a nova conta
        const currentPage = window.location.pathname;
        if (currentPage.includes('produtor.html')) {
          verificarSaldo();
          carregarMeusAtivos();
        } else if (currentPage.includes('negociacao.html')) {
          carregarProdutos();
        }
      }
    });
  }
  
  // Inicializações específicas para cada página
  const currentPage = window.location.pathname;
  
  if (currentPage.includes('negociacao.html')) {
    // Página de negociação
    carregarProdutos();
  } else if (currentPage.includes('produtor.html')) {
    // Página do produtor
    verificarSaldo();
    carregarMeusAtivos();
    carregarHistoricoVendas();
  } else if (currentPage.includes('tokenizacao.html')) {
    // Página de tokenização
    const precoUSDInput = document.getElementById("precoUSD");
    if (precoUSDInput && precoUSDInput.value) {
      calcularPrecoETH();
    }
  }
});