let products = [
  {
      id: 1,
      name: 'Monitor Led Viewsonic 20 Va2055sm Full Hd Vga Dvi 60hz',
      price: 50,
      category: 'Monitores',
      subCategory: 'Monitores',
      image: "./img/accesorios/monitores/1.jpg"
    },
    {
      id: 2,
      name: 'Monitor Led 19 Pulgadas LG 19m38a-b Pc Hd Wide 60hz Vga Vesa',
      price: 53,
      category: 'Accesorios',
      subCategory: 'Monitores',
      image: "./img/accesorios/monitores/2.jpg"
    },
    {
      id: 3,
      name: 'Monitor gamer HP M24f LCD 23.8" negro y plata 100V/240 HD',
      price: 60,
      category: 'Accesorios',
      subCategory: 'Monitores',
      image: "./img/accesorios/monitores/3.jpg"
    },
    {
      id: 4,
      name: 'Monitor Samsung 24 T350 Full Hd Ips 75hz Sin Bordes Freesync',
      price: 57,
      category: 'Accesorios',
      subCategory: 'Monitores',
      image: "./img/accesorios/monitores/4.jpg"
    },
    {
      id: 5,
      name: 'Monitor Daewoo DW-MON19 led 19" negro 100V/240V',
      price: 56,
      category: 'Accesorios',
      subCategory: 'Monitores',
      image: "./img/accesorios/monitores/5.jpg"
    },
    {
      id: 6,
      name: 'Pad Grande Xl 90x28cm Bigg Gamer Mouse Y Teclado',
      price: 6,
      category: 'Accesorios',
      subCategory: 'MousePad',
      image: "./img/accesorios/mousepads/1.jpg"
    },
    {
      id: 7,
      name: 'Mouse Pad Xl Gamer Oficina Antideslizante Negro 80x40',
      price: 5,
      category: 'Accesorios',
      subCategory: 'MousePad',
      image: "./img/accesorios/mousepads/2.jpg"
    },
    {
      id: 8,
      name: 'Mouse Pad De Escritorio Mat Pad Gamer',
      price: 2.5,
      category: 'Accesorios',
      subCategory: 'MousePad',
      image: "./img/accesorios/mousepads/3.jpg"
    },
    {
      id: 9,
      name: 'Mouse Pad Spider Man Licencia Oficial Original Nuevo',
      price: 2,
      category: 'Accesorios',
      subCategory: 'MousePad',
      image: "./img/accesorios/mousepads/4.jpg"
    },
    {
      id: 10,
      name: 'Mouse Pad Gamer Grande Gigante 70 X 30cm.',
      price: 5.5,
      category: 'Accesorios',
      subCategory: 'MousePad',
      image: "./img/accesorios/mousepads/5.jpg"
    },
    {
      id: 11,
      name: 'Auriculares gamer HyperX Cloud Stinger HX-HSCS negro',
      price: 24,
      category: 'Accesorios',
      subCategory: 'Auriculares',
      image: "./img/accesorios/auriculares/1.jpg"
    },
    {
      id: 12,
      name: 'Auriculares gamer Kotion Each G9000 black y blue',
      price: 9,
      category: 'Accesorios',
      subCategory: 'Auriculares',
      image: "./img/accesorios/auriculares/2.jpg"
    },
    {
      id: 13,
      name: 'Auricular Xinua Hs1 Gamermicrofono Mute Luz Led Pc Ps4 Xbox',
      price: 15,
      category: 'Accesorios',
      subCategory: 'Auriculares',
      image: "./img/accesorios/auriculares/3.jpg"
    },
    {
      id: 14,
      name: 'Vincha Cabezal Vt5009 Unc Usb Call Center Símil Plantronics',
      price: 19,
      category: 'Accesorios',
      subCategory: 'Auriculares',
      image: "./img/accesorios/auriculares/4.jpg"
    },
    {
      id: 15,
      name: 'Auriculares Gamer Jedel Gh212 Luz Rgb Microfono Pc Headphone',
      price: 7,
      category: 'Accesorios',
      subCategory: 'Auriculares',
      image: "./img/accesorios/auriculares/5.jpg"
    },
    {
      id: 16,
      name: 'Teclado gamer Redragon Shiva K512 RGB QWERTY español latinoamérica color negro',
      price: 25,
      category: 'Accesorios',
      subCategory: 'Teclados',
      image: "./img/accesorios/teclados/1.jpg"
    },
    {
      id: 17,
      name: 'Teclado Mecánico Compacto Noga Ganon 65% Qwerty Negro Rgb',
      price: 11,
      category: 'Accesorios',
      subCategory: 'Teclados',
      image: "./img/accesorios/teclados/2.jpg"
    },
    {
      id: 18,
      name: 'Teclado Gamer Pc Usb Retroiluminado Luces Led Noga Nkb-5020',
      price: 14,
      category: 'Accesorios',
      subCategory: 'Teclados',
      image: "./img/accesorios/teclados/3.jpg"
    },
    {
      id: 19,
      name: 'Teclado T-dagger T-tgk321-gw-br Arena Green/white Sw Brown F',
      price: 16,
      category: 'Accesorios',
      subCategory: 'Teclados',
      image: "./img/accesorios/teclados/4.jpg"
    },
    {
      id: 20,
      name: 'Teclado Mecanico Marvo Kg962 Gaming Rainbow 60% Switch Blue',
      price: 21,
      category: 'Accesorios',
      subCategory: 'Teclados',
      image: "./img/accesorios/teclados/5.jpg"
    },
    {
      id: 21,
      name: 'Microfono Condenser Usb Cardioide Calidad Streaming Youtube',
      price: 16,
      category: 'Accesorios',
      subCategory: 'Microfonos',
      image: "./img/accesorios/microfonos/1.jpg"
    },
    {
      id: 22,
      name: 'Microfono Gamer Pc Gamenote Hv-gk58b Luces Rgb Usb Notebook',
      price: 6,
      category: 'Accesorios',
      subCategory: 'Microfonos',
      image: "./img/accesorios/microfonos/2.jpg"
    },
    {
      id: 23,
      name: 'Kit Microfono Omnidireccional Soporte Brazo Antipop Araña 2',
      price: 18,
      category: 'Accesorios',
      subCategory: 'Microfonos',
      image: "./img/accesorios/microfonos/3.jpg"
    },
    {
      id: 24,
      name: 'GABINETE ATX KIT KANJI MASTER 9311 TECLADO / MOUSE / PARLANTES',
      price: 25,
      category: 'Partes y componentes',
      subCategory: 'Gabinetes',
      image: "./img/partesycomponentes/gabinetes/1.jpg"
    },
    {
      id: 25,
      name: 'Gabinete Gamer Andromeda Atx Vidrio Templado X3 Fan Rgb',
      price: 32,
      category: 'Partes y componentes',
      subCategory: 'Gabinetes',
      image: "./img/partesycomponentes/gabinetes/2.jpg"
    },
    {
      id: 26,
      name: 'Gabinete Gamer Cassiopeia Atx Vidrio Templado X1 Fan Rgb',
      price: 27,
      category: 'Partes y componentes',
      subCategory: 'Gabinetes',
      image: "./img/partesycomponentes/gabinetes/3.jpg"
    },
    {
      id: 27,
      name: 'Gabinete Tecware Nexus Air Blanco Mesh Frontal 4 Coolers !!',
      price: 42,
      category: 'Partes y componentes',
      subCategory: 'Gabinetes',
      image: "./img/partesycomponentes/gabinetes/4.jpg"
    },
    {
      id: 28,
      name: 'Gabinete Mid Tower Syx Zp-05b 1 Fan Rgb 2 Economico',
      price: 21,
      category: 'Partes y componentes',
      subCategory: 'Gabinetes',
      image: "./img/partesycomponentes/gabinetes/5.jpg"
    },
    {
      id: 29,
      name: 'Disco sólido interno Kingston SA400S37/240G 240GB negro 2.5',
      price: 13,
      category: 'Partes y componentes',
      subCategory: 'Almacenamiento',
      image: "./img/partesycomponentes/almacenamiento/1.jpg"
    },
    {
      id: 30,
      name: 'Disco duro interno Seagate Laptop Thin HDD ST500LT012 500GB',
      price: 8,
      category: 'Partes y componentes',
      subCategory: 'Almacenamiento',
      image: "./img/partesycomponentes/almacenamiento/2.jpg"
    },
    {
      id: 31,
      name: 'Disco Rígido Sólido Kingston 480gb Ssd Now A400 Sata3 2.5',
      price: 20,
      category: 'Partes y componentes',
      subCategory: 'Almacenamiento',
      image: "./img/partesycomponentes/almacenamiento/3.jpg"
    },
    {
      id: 32,
      name: 'AMD Ryzen Threadripper 3970X 100-100000011WOF de 32 núcleos y 4.5GHz',
      price: 560,
      category: 'Partes y componentes',
      subCategory: 'Microprocesadores',
      image: "./img/partesycomponentes/procesadores/1.jpg"
    },
    {
      id: 33,
      name: 'Procesador Intel Celeron G5905 BX80701G5905 de 2 núcleos y 3.5GHz',
      price: 35,
      category: 'Partes y componentes',
      subCategory: 'Microprocesadores',
      image: "./img/partesycomponentes/procesadores/2.jpg"
    },
    {
      id: 34,
      name: 'Procesador gamer Intel Core i7-11700KF BX8070811700KF de 8 núcleos y 5GHz',
      price: 183,
      category: 'Partes y componentes',
      subCategory: 'Microprocesadores',
      image: "./img/partesycomponentes/procesadores/3.jpg"
    },
    {
      id: 35,
      name: 'Procesador Intel Core i7-10700 BX8070110700 de 8 núcleos y 4.8GHz',
      price: 201,
      category: 'Partes y componentes',
      subCategory: 'Microprocesadores',
      image: "./img/partesycomponentes/procesadores/4.jpg"
    },
    {
      id: 36,
      name: 'Motherboard ASUS ROG Strix X570-E Gaming Economico y de calidad',
      price: 329,
      category: 'Partes y componentes',
      subCategory: 'Motherboards',
      image: "./img/partesycomponentes/motherboards/1.jpg"
    },
    {
      id: 37,
      name: 'Motherboard MSI B450 TOMAHAWK MAX',
      price: 124,
      category: 'Partes y componentes',
      subCategory: 'Motherboards',
      image: "./img/partesycomponentes/motherboards/2.jpg"
    },
    {
      id: 38,
      name: 'Motherboard Gigabyte Z390 AORUS PRO WIFI',
      price: 199,
      category: 'Partes y componentes',
      subCategory: 'Motherboards',
      image: "./img/partesycomponentes/motherboards/3.jpg"
    },
    {
      id: 39,
      name: 'Motherboard ASRock B550 Phantom Gaming 4',
      price: 114,
      category: 'Partes y componentes',
      subCategory: 'Motherboards',
      image: "./img/partesycomponentes/motherboards/4.jpg"
    },
    {
      id: 40,
      name: 'Motherboard ASUS TUF Gaming B550M-PLUS',
      price: 149,
      category: 'Partes y componentes',
      subCategory: 'Motherboards',
      image: "./img/partesycomponentes/motherboards/5.jpg"
    },
    {
      id: 41,
      name: 'Cooler Master Hyper 212 RGB Black Edition',
      price: 49,
      category: 'Partes y componentes',
      subCategory: 'Coolers',
      image: "./img/partesycomponentes/coolers/1.jpg"
    },
    {
      id: 42,
      name: 'NZXT Kraken X63 RGB All-in-One Liquid CPU Cooler',
      price: 159,
      category: 'Partes y componentes',
      subCategory: 'Coolers',
      image: "./img/partesycomponentes/coolers/2.jpg"
    },
    {
      id: 43,
      name: 'Corsair iCUE H100i RGB Pro XT Liquid CPU Cooler',
      price: 129,
      category: 'Partes y componentes',
      subCategory: 'Coolers',
      image: "./img/partesycomponentes/coolers/3.jpg"
    },
    {
      id: 44,
      name: 'Deepcool Gammaxx 400 V2 Blue CPU Cooler',
      price: 39,
      category: 'Partes y componentes',
      subCategory: 'Coolers',
      image: "./img/partesycomponentes/coolers/4.jpg"
    },
    {
      id: 45,
      name: 'Noctua NH-D15 chromax.black Dual Tower CPU Cooler',
      price: 99,
      category: 'Partes y componentes',
      subCategory: 'Coolers',
      image: "./img/partesycomponentes/coolers/5.jpg"
    }
];

const productContainer = document.getElementById('product-list');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');

/**
* Renderiza la lista de productos en el contenedor especificado.
*/
function renderProductList() {
    productContainer.innerHTML = '';

    products.forEach((product) => {
        const productCard = createProductCard(product);
        productContainer.appendChild(productCard);
    });

    addAddToCartEventListeners();
}

/**
* Crea y devuelve un elemento de tarjeta de producto basado en los datos del producto.
* @param {object} product - Los datos del producto.
* @returns {HTMLElement} - El elemento de la tarjeta de producto.
*/
function createProductCard(product) {
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

  return productCard;
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
          <span>${item.name} - Quantity: ${item.quantity}</span>
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
}
  
/**
* Manejador para el evento click en los botones de eliminar un producto del carrito.
* @param {Event} event - Objeto de evento generado por el click en el botón.
*/
function removeCartItemHandler(event) {
    const productId = parseInt(event.target.getAttribute('data-product-id'));
    removeCartItem(productId);
}
  
// Inicia el carrito y renderiza la lista de productos
let cartItems = [];
renderProductList();
