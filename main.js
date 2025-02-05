const products = [
  {
    name: 'El Alquimista',
    price: 15.99,
    stars: 5,
    reviews: 1200,
    seller: 'Casa del libro',
    image: 'https://imagessl1.casadellibro.com/a/l/s5/51/9788408130451.webp'
  },
  {
    name: 'Cien Años de Soledad',
    price: 20.5,
    stars: 4,
    reviews: 950,
    seller: 'Casa del libro',
    image: 'https://imagessl1.casadellibro.com/a/l/s5/31/9788466373531.webp'
  },
  {
    name: 'La Casa de los Espíritus',
    price: 18.99,
    stars: 5,
    reviews: 1800,
    seller: 'Fnac',
    image:
      'https://static.fnac-static.com/multimedia/Images/ES/NR/ce/45/78/7882190/1540-1.jpg'
  },
  {
    name: '1984',
    price: 12.99,
    stars: 5,
    reviews: 1500,
    seller: 'Awesome Books',
    image:
      'https://d32vymxhv9fq6b.cloudfront.net/images/books/large/97801/9780141036144.jpg'
  },
  {
    name: 'Harry Potter y la Piedra Filosofal',
    price: 9.9,
    stars: 5,
    reviews: 2000,
    seller: 'Hamelyn',
    image:
      'https://ul2efuvs5p2hmdcb.public.blob.vercel-storage.com/9788478884452.jpg'
  },
  {
    name: 'El Gran Gatsby',
    price: 14.99,
    stars: 4,
    reviews: 800,
    seller: 'Mercado libre',
    image:
      'https://images.cdn2.buscalibre.com/fit-in/360x360/d2/4d/d24dc8e1a4e1f2cddeefca089f91d56e.jpg'
  },
  {
    name: 'Crónica de una Muerte Anunciada',
    price: 13.99,
    stars: 4,
    reviews: 1050,
    seller: 'Libros ECO',
    image:
      'https://libros.eco/wp-content/uploads/9788481302486_cronica-de-una-muerte-anunciada_front-13.jpg'
  },
  {
    name: 'Fahrenheit 451',
    price: 11.5,
    stars: 4,
    reviews: 900,
    seller: 'Casa del libro',
    image: 'https://imagessl8.casadellibro.com/a/l/s5/18/9788466356718.webp'
  },
  {
    name: 'Orgullo y Prejuicio',
    price: 10.9,
    stars: 5,
    reviews: 2300,
    seller: 'Amazon',
    image:
      'https://ul2efuvs5p2hmdcb.public.blob.vercel-storage.com/9788420632902.jpg'
  },
  {
    name: 'El Retrato de Dorian Gray',
    price: 12.0,
    stars: 5,
    reviews: 1250,
    seller: 'Abacus',
    image:
      'https://www.abacus.coop/dw/image/v2/BDLM_PRD/on/demandware.static/-/Sites-AbacusMaster/default/dw3eaea331/images/large/1438233.34.jpg'
  },
  {
    name: 'La Metamorfosis',
    price: 7.99,
    stars: 4,
    reviews: 800,
    seller: 'Casa del libro',
    image: 'https://imagessl5.casadellibro.com/a/l/s5/45/9788491118145.webp'
  },
  {
    name: 'Los Miserables',
    price: 22.0,
    stars: 5,
    reviews: 2100,
    seller: 'Amazon',
    image: 'https://m.media-amazon.com/images/I/51UgJ31Bd6L._SY466_.jpg'
  }
]

const productList = document.getElementById('product-list')

// Generación dinámica de los productos
products.forEach((product) => {
  const productCard = document.createElement('div')
  productCard.classList.add('product-card')

  const imgElement = document.createElement('img')
  imgElement.src = product.image
  imgElement.alt = product.name

  const infoDiv = document.createElement('div')
  infoDiv.classList.add('info')

  const h3Element = document.createElement('h3')
  h3Element.textContent = product.name

  const priceElement = document.createElement('p')
  priceElement.classList.add('price')
  priceElement.textContent = `${product.price}€`

  const sellerElement = document.createElement('p')
  sellerElement.classList.add('seller')
  sellerElement.textContent = `Vendedor: ${product.seller}`

  const reviewsElement = document.createElement('p')
  reviewsElement.classList.add('reviews')
  reviewsElement.textContent = `${product.reviews} Reseñas`

  // Crear el contenedor de estrellas (flores)
  const starsContainer = document.createElement('div')
  starsContainer.classList.add('stars-container')

  for (let i = 0; i < product.stars; i++) {
    const flowerIcon = document.createElement('img')
    flowerIcon.src =
      'https://www.transparenttextures.com/patterns/flower-dots.png'
    flowerIcon.alt = 'estrella'
    flowerIcon.classList.add('star-icon')
    starsContainer.appendChild(flowerIcon)
  }

  infoDiv.appendChild(h3Element)
  infoDiv.appendChild(priceElement)
  infoDiv.appendChild(sellerElement)
  infoDiv.appendChild(reviewsElement)
  infoDiv.appendChild(starsContainer)

  productCard.appendChild(imgElement)
  productCard.appendChild(infoDiv)

  productList.appendChild(productCard)
})
