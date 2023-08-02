const titulo = localStorage.getItem('tituloProduto')
const nome = localStorage.getItem('nomeProduto')
const preco = localStorage.getItem('precoProduto')
const imagem = localStorage.getItem('imagemProduto')

const nomeProduto = document.querySelector('.productName')
const precoProduto = document.querySelector('.productPrice')
const imagemProduto = document.querySelector('.product-image')

const botaoCarrinho = document.querySelector('.shopping-bag')

const iconeCarrinho = document.querySelector('#numero-carrinho')

nomeProduto.innerHTML = nome
precoProduto.innerHTML = preco
imagemProduto.src = imagem

document.title = titulo

botaoCarrinho.addEventListener("click", () => {
    iconeCarrinho.innerHTML ++
})

