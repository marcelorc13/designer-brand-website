const produtos = document.querySelectorAll('.product-link')
const categorias = document.querySelectorAll('.categories')

categorias.forEach( (categoria) => {
  categoria.addEventListener('click', () => {
    const nomeCategoria = categoria.querySelector('p')
    window.location.href = 'Catetories-Page.html'
    localStorage.setItem('tituloCategoria', `${nomeCategoria.innerHTML} - LOGO`)
  })
}) 

produtos.forEach( (produto) => {
  produto.addEventListener('click', () => {
    window.location.href = 'Product-Page.html'
    localStorage.setItem('tituloProduto', `${produto.innerHTML} - LOGO`)
  })
})

