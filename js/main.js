const produtos = document.querySelectorAll('.product-link')
const imagensProdutos = document.querySelectorAll('.product-div img')
const categorias = document.querySelectorAll('.categories')
const preco = document.querySelectorAll('.product-price')
const imagem = document.querySelectorAll('.product-div img')



categorias.forEach((categoria) => {
  categoria.addEventListener('click', () => {
    const nomeCategoria = categoria.querySelector('p')
    window.location.href = 'html/Catetories-Page.html'
    localStorage.setItem('tituloCategoria', `${nomeCategoria.innerHTML} - LOGO`)
  })
})

produtos.forEach((produto, index) => {
  produto.addEventListener('click', () => {
    window.location.href = 'html/Product-Page.html'
    localStorage.setItem('tituloProduto', `${produto.innerHTML} - LOGO`)
    localStorage.setItem('nomeProduto', `${produto.innerHTML}`)
    localStorage.setItem('precoProduto', preco[index].innerHTML)
    localStorage.setItem('imagemProduto', imagem[index].src)
  })
})



