// script.js

const products = [
  {
    name: 'El Alquimista',
    price: 15.99,
    stars: 5,
    reviews: 1200,
    seller: 'Amazon',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71l6yUzf7wL.jpg'
  },
  {
    name: 'Cien Años de Soledad',
    price: 20.5,
    stars: 4,
    reviews: 950,
    seller: 'El Corte Inglés',
    image: 'https://m.media-amazon.com/images/I/51gybPqghcL.jpg'
  },
  {
    name: 'La Casa de los Espíritus',
    price: 18.99,
    stars: 5,
    reviews: 1800,
    seller: 'Casa del Libro',
    image: 'https://images.casadellibro.com/a/l/t7/13/9788408151313.jpg'
  },
  {
    name: '1984',
    price: 12.99,
    stars: 5,
    reviews: 1500,
    seller: 'Fnac',
    image: 'https://m.media-amazon.com/images/I/41-IcYz9hxL.jpg'
  },
  {
    name: 'Harry Potter y la Piedra Filosofal',
    price: 9.9,
    stars: 5,
    reviews: 2000,
    seller: 'El Corte Inglés',
    image: 'https://m.media-amazon.com/images/I/91z7XN8Yo4L.jpg'
  },
  {
    name: 'El Gran Gatsby',
    price: 14.99,
    stars: 4,
    reviews: 800,
    seller: 'Amazon',
    image: 'https://images-na.ssl-images-amazon.com/images/I/91YEBqfH9qL.jpg'
  },
  {
    name: 'Crónica de una Muerte Anunciada',
    price: 13.99,
    stars: 4,
    reviews: 1050,
    seller: 'Casa del Libro',
    image: 'https://images.casadellibro.com/a/l/t7/81/9788408151313.jpg'
  },
  {
    name: 'Fahrenheit 451',
    price: 11.5,
    stars: 4,
    reviews: 900,
    seller: 'Fnac',
    image: 'https://m.media-amazon.com/images/I/61bd7BKh-8L.jpg'
  },
  {
    name: 'Orgullo y Prejuicio',
    price: 10.9,
    stars: 5,
    reviews: 2300,
    seller: 'Amazon',
    image: 'https://m.media-amazon.com/images/I/81YhI6j3AyL.jpg'
  },
  {
    name: 'El Retrato de Dorian Gray',
    price: 12.0,
    stars: 5,
    reviews: 1250,
    seller: 'Casa del Libro',
    image: 'https://images.casadellibro.com/a/l/t7/81/9788491040381.jpg'
  },
  {
    name: 'La Metamorfosis',
    price: 7.99,
    stars: 4,
    reviews: 800,
    seller: 'Fnac',
    image: 'https://m.media-amazon.com/images/I/41yIrBxz+fL.jpg'
  },
  {
    name: 'Los Miserables',
    price: 22.0,
    stars: 5,
    reviews: 2100,
    seller: 'El Corte Inglés',
    image: 'https://m.media-amazon.com/images/I/71rsbEftkjL.jpg'
  }
]

// Referencia al contenedor de productos
const productList = document.getElementById('product-list')

// Generación dinámica de los productos
products.forEach((product) => {
  const productCard = document.createElement('div')
  productCard.classList.add('product-card')

  // Crear la tarjeta de producto con imagen y datos
  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <div class="info">
      <h3>${product.name}</h3>
      <p class="price">${product.price}€</p>
      <p class="seller">Vendedor: ${product.seller}</p>
      <p class="reviews">${product.reviews} Reseñas</p>
    </div>
  `

  // Agregar la tarjeta al contenedor de productos
  productList.appendChild(productCard)
})
// Detectar el evento de scroll
window.addEventListener('scroll', function () {
  // Comprobar si hemos hecho scroll más de 100px
  if (window.scrollY > 100) {
    // Si el scroll es mayor a 100px, añadimos la clase 'scroll-changed'
    document.body.classList.add('scroll-changed')
  } else {
    // Si el scroll es menor a 100px, eliminamos la clase 'scroll-changed'
    document.body.classList.remove('scroll-changed')
  }
})
