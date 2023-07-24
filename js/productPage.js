const titulo = localStorage.getItem('tituloProduto')
const nome = localStorage.getItem('nomeProduto')
const preco = localStorage.getItem('precoProduto')
const nomeProduto = document.querySelector('.productName')
const precoProduto = document.querySelector('.productPrice')

nomeProduto.innerHTML = nome


document.title = titulo

console.log(preco.innerHTML)

console.log(precoProduto.innerHTML)
