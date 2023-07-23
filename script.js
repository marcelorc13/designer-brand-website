const produtos = document.querySelectorAll('.product-link')
const nomeProduto = document.querySelectorAll('.product-name')

produtos.forEach( (produto) => {
  produto.addEventListener('click', () => {
    console.log(produto.innerHTML)
    window.location.href = 'Product-Page.html'
  })
})

