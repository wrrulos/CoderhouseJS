const productContainer = document.getElementById('product-list');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');

// Inicia el carrito y renderiza la lista de productos
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
let products = [];
renderProductList();

/**
* Renderiza la lista de productos en el contenedor especificado.
*/
async function renderProductList() {
    productContainer.innerHTML = '';

    try {
        const response = await fetch('products.json');
        products = await response.json();

        for (const product of products) {
            const productCard = await createProductCard(product);
            productContainer.appendChild(productCard);
        }

        addAddToCartEventListeners();
    } catch (error) {
        console.log('Error al obtener los productos:', error);
    }
}

/**
* Crea y devuelve un elemento de tarjeta de producto basado en los datos del producto.
* @param {object} product - Los datos del producto.
* @returns {Promise<HTMLElement>} - El elemento de la tarjeta de producto.
*/
async function createProductCard(product) {
    return new Promise((resolve, reject) => {
        const productCard = document.createElement('div');
        productCard.className = 'col-6 col-md-4 col-lg-3 mb-3';
        productCard.innerHTML = `
          <img src="${product.image}" class="card-img-top" alt="Product Image">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">Price: $${product.price}</p>
              <button class="btn btn-primary btn-add-to-cart" data-product-id="${product.id}">Añadir</button>
            </div>
          </div>
        `;
        resolve(productCard);
    });
}

/**
* Agrega eventos click a los botones "Add to Cart" de los productos.
*/
function addAddToCartEventListeners() {
    const addToCartButtons = document.getElementsByClassName('btn-add-to-cart');

    for (let i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].addEventListener('click', addToCart);
    }
}

/**
* Agrega un producto al carrito según el evento de click del botón.
* @param {Event} event - El evento de click del botón "Add to Cart".
*/
function addToCart(event) {
    const productId = parseInt(event.target.getAttribute('data-product-id'));
    const product = findProductById(productId);

    if (product) {
        const existingCartItem = findCartItemById(productId);

        if (existingCartItem) {
            existingCartItem.quantity++;
        } else {
            const newCartItem = createCartItem(product);
            cartItems.push(newCartItem);
        }

        saveCartItemsToLocalStorage();
        renderCart();
    }
}

/**
* Busca y devuelve el objeto de producto por su ID.
* @param {number} productId - El ID del producto.
* @returns {object|null} - El objeto de producto encontrado, o null si no se encontró.
*/
function findProductById(productId) {
    return products.find((product) => product.id === productId) || null;
}

/**
* Busca y devuelve el objeto de artículo del carrito por su ID de producto.
* @param {number} productId - El ID del producto.
* @returns {object|null} - El objeto de artículo del carrito encontrado, o null si no se encontró.
*/
function findCartItemById(productId) {
    return cartItems.find((item) => item.id === productId) || null;
}
  
/**
* Crea y devuelve un objeto de artículo del carrito basado en el objeto de producto.
* @param {object} product - El objeto de producto.
* @returns {object} - El objeto de artículo del carrito creado.
*/
function createCartItem(product) {
    return {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
    };
}
  
/**
* Elimina un producto del carrito según su ID.
* @param {number} productId - El ID del producto a eliminar.
*/
function removeCartItem(productId) {
    cartItems = cartItems.filter((item) => item.id !== productId);
    saveCartItemsToLocalStorage();
    renderCart();
}
  
/**
* Calcula el total del carrito sumando el precio de todos los productos multiplicado por su cantidad.
* @returns {number} - El total del carrito.
*/
function calculateCartTotal() {
    let total = 0;

    cartItems.forEach((item) => {
        total += item.price * item.quantity;
    });
  
    return total;
}
  
/**
* Renderiza el carrito, mostrando los productos agregados, su cantidad, precio y botones de eliminación.
*/
function renderCart() {
  cartItemsContainer.innerHTML = '';
  let totalItems = 0;

  cartItems.forEach((item) => {
      const cartItem = document.createElement('li');
      cartItem.className =
          'list-group-item d-flex justify-content-between align-items-center';
      cartItem.innerHTML = `
          <span>${item.name} - Cantidad: ${item.quantity}</span>
          <span>$${item.price * item.quantity}</span>
          <button class="btn btn-danger btn-remove" data-product-id="${item.id}">Eliminar</button>
      `;

      cartItemsContainer.appendChild(cartItem);
      totalItems += item.quantity;
  });

  cartTotalElement.textContent = `$${calculateCartTotal()}`;
  const cartTotalBadge = document.getElementById('cart-total-badge');
  cartTotalBadge.textContent = totalItems > 0 ? totalItems : '';

  // Agrega el evento click a los botones de eliminar
  const removeButtons = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeButtons.length; i++) {
      removeButtons[i].addEventListener('click', removeCartItemHandler);
  }

  // Verifica si el carrito está vacío y muestra un mensaje si es así
  if (cartItems.length === 0) {
      const emptyCartMessage = document.createElement('p');
      emptyCartMessage.textContent = 'No hay productos en el carrito';
      cartItemsContainer.appendChild(emptyCartMessage);
  } else {
      // Agrega el botón de comprar si hay productos en el carrito
      const buyButton = document.createElement('button');
      buyButton.className = 'btn btn-primary';
      buyButton.textContent = 'Comprar';
      buyButton.addEventListener('click', buyItems);
      cartItemsContainer.appendChild(buyButton);
  }
}

function buyItems() {
  if (cartItems.length === 0) {
    Swal.fire({
      title: 'Carrito Vacío',
      text: 'No hay productos en el carrito.',
      icon: 'info',
      confirmButtonText: 'OK'
    });
  } else {
    Swal.fire({
      title: 'Confirmar Compra',
      text: '¿Deseas confirmar la compra?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Compra Realizada',
          text: 'La compra se ha realizado exitosamente.',
          icon: 'success',
          confirmButtonText: 'OK'
        });

        cartItems = [];
        saveCartItemsToLocalStorage();
        renderCart();
      }
    });
  }
}
  
/**
* Manejador para el evento click en los botones de eliminar un producto del carrito.
* @param {Event} event - Objeto de evento generado por el click en el botón.
*/
function removeCartItemHandler(event) {
    const productId = parseInt(event.target.getAttribute('data-product-id'));
    removeCartItem(productId);
}
  
/**
* Guarda los elementos del carrito en el localStorage.
*/
function saveCartItemsToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
  
Swal.fire({
    title: 'RTecno',
    text: '¡Este es un carrito básico para el curso de Coderhouse!',
    icon: 'info',
    showCancelButton: false,
    confirmButtonText: 'OK',
});



// En el caso que quisiera que el carrito se reinicie al cargar la página:
/*
window.onload = function() {
  // Borra los datos del carrito al cargar la página
  localStorage.removeItem('cartItems');

  // Inicia el carrito y renderiza la lista de productos
  cartItems = [];
  renderProductList();
};*/

// Inicia el carrito y renderiza la lista de productos
renderProductList();
renderCart();