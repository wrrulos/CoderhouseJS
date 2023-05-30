const shoppingCart = [];
const categoryList = ['Accesorios', 'Partes y componentes'];
const subCategoryList = [
    ['Monitores', 'MousePad', 'Auriculares', 'Teclados', 'Microfonos'],
    ['Gabinetes', 'Almacenamiento', 'Microprocesadores', 'Motherboards', 'Coolers']
]
const products = [
    { name: 'Monitor Led Viewsonic 20 Va2055sm Full Hd Vga Dvi 60hz', price: 50, category: 'Monitores', subCategory: 'Monitores' },
    { name: 'Monitor Led 19 Pulgadas LG 19m38a-b Pc Hd Wide 60hz Vga Vesa', price: 53, category: 'Accesorios', subCategory: 'Monitores' },
    { name: 'Monitor gamer HP M24f LCD 23.8\' negro y plata 100V/240', price: 60, category: 'Accesorios', subCategory: 'Monitores' },
    { name: 'Monitor Samsung 24 T350 Full Hd Ips 75hz Sin Bordes Freesync', price: 57, category: 'Accesorios', subCategory: 'Monitores' },
    { name: 'Monitor Daewoo DW-MON19 led 19\' negro 100V/240V', price: 56, category: 'Accesorios', subCategory: 'Monitores' },
    { name: 'Pad Grande Xl 90x28cm Bigg Gamer Mouse Y Teclado', price: 6, category: 'Accesorios', subCategory: 'MousePad' },
    { name: 'Mouse Pad Xl Gamer Oficina Antideslizante Negro 80x40 Cm 3mm', price: 5, category: 'Accesorios', subCategory: 'MousePad' },
    { name: 'Mouse Pad De Escritorio Mat Pad Gamer', price: 2.5, category: 'Accesorios', subCategory: 'MousePad' },
    { name: 'Mouse Pad Spider Man Licencia Oficial Original Nuevo', price: 2, category: 'Accesorios', subCategory: 'MousePad' },
    { name: 'Mouse Pad Gamer Grande Gigante 70 X 30cm. P/ Mouse Y Teclado', price: 5.5, category: 'Accesorios', subCategory: 'MousePad' },
    { name: 'Auriculares gamer HyperX Cloud Stinger HX-HSCS negro', price: 24, category: 'Accesorios', subCategory: 'Auriculares' },
    { name: 'Auriculares gamer Kotion Each G9000 black y blue', price: 9, category: 'Accesorios', subCategory: 'Auriculares' },
    { name: 'Auricular Xinua Hs1 Gamermicrofono Mute Luz Led Pc Ps4 Xbox', price: 15, category: 'Accesorios', subCategory: 'Auriculares' },
    { name: 'Vincha Cabezal Vt5009 Unc Usb Call Center Símil Plantronics', price: 19, category: 'Accesorios', subCategory: 'Auriculares' },
    { name: 'Auriculares Gamer Jedel Gh212 Luz Rgb Microfono Pc Headphone', price: 7, category: 'Accesorios', subCategory: 'Auriculares' },
    { name: 'Teclado gamer Redragon Shiva K512 RGB QWERTY español latinoamérica color negro con luz RGB', price: 25, category: 'Accesorios', subCategory: 'Teclados' },
    { name: 'Teclado Mecánico Compacto Noga Ganon 65% Qwerty Negro Rgb', price: 11, category: 'Accesorios', subCategory: 'Teclados' },
    { name: 'Teclado Gamer Pc Usb Retroiluminado Luces Led Noga Nkb-5020', price: 14, category: 'Accesorios', subCategory: 'Teclados' },
    { name: 'Teclado T-dagger T-tgk321-gw-br Arena Green/white Sw Brown F', price: 16, category: 'Accesorios', subCategory: 'Teclados' },
    { name: 'Teclado Mecanico Marvo Kg962 Gaming Rainbow 60% Switch Blue', price: 21, category: 'Accesorios', subCategory: 'Teclados' },
    { name: 'Microfono Condenser Usb Cardioide Calidad Streaming Youtube', price: 16, category: 'Accesorios', subCategory: 'Microfonos' },
    { name: 'Microfono Gamer Pc Gamenote Hv-gk58b Luces Rgb Usb Notebook', price: 6, category: 'Accesorios', subCategory: 'Microfonos' },
    { name: 'Kit Microfono Omnidireccional Soporte Brazo Antipop Araña 2', price: 18, category: 'Accesorios', subCategory: 'Microfonos' },
    { name: 'GABINETE ATX KIT KANJI MASTER 9311 TECLADO / MOUSE / PARLANTES / FUENTE 500W', price: 25, category: 'Partes y componentes', subCategory: 'Gabinetes' },
    { name: 'Gabinete Gamer Andromeda Atx Vidrio Templado X3 Fan Rgb', price: 32, category: 'Partes y componentes', subCategory: 'Gabinetes' },
    { name: 'Gabinete Gamer Cassiopeia Atx Vidrio Templado X1 Fan Rgb', price: 27, category: 'Partes y componentes', subCategory: 'Gabinetes' },
    { name: 'Gabinete Tecware Nexus Air Blanco Mesh Frontal 4 Coolers !!', price: 42, category: 'Partes y componentes', subCategory: 'Gabinetes' },
    { name: 'Gabinete Mid Tower Syx Zp-05b 1 Fan Rgb 2', price: 21, category: 'Partes y componentes', subCategory: 'Gabinetes' },
    { name: 'Disco sólido interno Kingston SA400S37/240G 240GB negro', price: 13, category: 'Partes y componentes', subCategory: 'Almacenamiento' },
    { name: 'Disco duro interno Seagate Laptop Thin HDD ST500LT012 500GB', price: 8, category: 'Partes y componentes', subCategory: 'Almacenamiento' },
    { name: 'Disco Rígido Sólido Kingston 480gb Ssd Now A400 Sata3 2.5', price: 20, category: 'Partes y componentes', subCategory: 'Almacenamiento' },
    { name: 'Procesador AMD Ryzen Threadripper 3970X 100-100000011WOF de 32 núcleos y 4.5GHz de frecuencia', price: 560, category: 'Partes y componentes', subCategory: 'Microprocesadores' },
    { name: 'Procesador Intel Celeron G5905 BX80701G5905 de 2 núcleos y 3.5GHz de frecuencia con gráfica integrada', price: 35, category: 'Partes y componentes', subCategory: 'Microprocesadores' },
    { name: 'Procesador gamer Intel Core i7-11700KF BX8070811700KF de 8 núcleos y 5GHz de frecuencia', price: 183, category: 'Partes y componentes', subCategory: 'Microprocesadores' },
    { name: 'Procesador Intel Core i7-10700 BX8070110700 de 8 núcleos y 4.8GHz de frecuencia con gráfica integrada', price: 201, category: 'Partes y componentes', subCategory: 'Microprocesadores' },
    { name: 'Motherboard ASUS ROG Strix X570-E Gaming', price: 329, category: 'Partes y componentes', subCategory: 'Motherboards' },
    { name: 'Motherboard MSI B450 TOMAHAWK MAX', price: 124, category: 'Partes y componentes', subCategory: 'Motherboards' },
    { name: 'Motherboard Gigabyte Z390 AORUS PRO WIFI', price: 199, category: 'Partes y componentes', subCategory: 'Motherboards' },
    { name: 'Motherboard ASRock B550 Phantom Gaming 4', price: 114, category: 'Partes y componentes', subCategory: 'Motherboards' },
    { name: 'Motherboard ASUS TUF Gaming B550M-PLUS', price: 149, category: 'Partes y componentes', subCategory: 'Motherboards' },
    { name: 'Cooler Master Hyper 212 RGB Black Edition', price: 49, category: 'Partes y componentes', subCategory: 'Coolers' },
    { name: 'NZXT Kraken X63 RGB All-in-One Liquid CPU Cooler', price: 159, category: 'Partes y componentes', subCategory: 'Coolers' },
    { name: 'Corsair iCUE H100i RGB Pro XT Liquid CPU Cooler', price: 129, category: 'Partes y componentes', subCategory: 'Coolers' },
    { name: 'Deepcool Gammaxx 400 V2 Blue CPU Cooler', price: 39, category: 'Partes y componentes', subCategory: 'Coolers' },
    { name: 'Noctua NH-D15 chromax.black Dual Tower CPU Cooler', price: 99, category: 'Partes y componentes', subCategory: 'Coolers' }
];


function ask(text, type, correctAnswer) {
    while (true) {
        answer = prompt(text);

        if (!answer) {
            continue;
        }

        if (type === 'number') {
            // We check if the response variable is a string.
            if (isNaN(answer) === true || answer.length === 0) {
                alert('Tenes que ingresar un número válido.')
                continue;
            }

            // We check if the response variable contains a number greater than 6.
            if (parseInt(answer) < 1 || parseInt(answer) > correctAnswer) {
                alert(`Selecciona una opción valida. (1-${correctAnswer})`)
                continue;
            }

            break;
        }
        
        if (type === 'numberAndText') {
            // We check if the response variable is a string.
            if (isNaN(answer) === true || answer.length === 0) {
                alert('Tenes que ingresar un número válido.')
                continue;
            }

            // We check if the response variable contains a number greater than 6.
            if ((parseInt(answer) < 1 || parseInt(answer) > correctAnswer[0]) && answer !== correctAnswer[1].toString()) {
                alert(`Selecciona una opción válida. (1-${correctAnswer[0]} - 99)`);
                continue;
            }
            
            break;
        }
    }
    
    return answer;
}


function seeProducts() {
    let subCategoryNumber = null;
    const categoryNumber = ask('Lista de categorías disponibles: \n\n1. Accesorios. \n2. Partes y componentes.\n3. Volver a la tienda. \n ', 'number', 3);

    if (categoryNumber === '3') {
        return;
    }

    const categoryOptions = ask('Elije una opción, por favor. \n\n1. Mostrar todos los productos de la categoria. \n2. Filtrar por tipo de producto. \n3. Volver a la tienda. \n ', 'number', 3);
    
    if (categoryOptions !== '3') {
        if (categoryOptions === '2') {
            let text = 'Lista de sub categorías disponibles: \n';
            subCategoryList[parseInt(categoryNumber-1)].forEach((item, index) => {
                index += 1;
                text += `\n${index}. ${item}`;
            })
            subCategoryNumber = ask(`${text}\n\n99. Volver a la tienda. \n `, 'numberAndText', [subCategoryList[parseInt(categoryNumber-1)].length, '99']);

        }

        if (subCategoryNumber !== '99') {
            showProducts(categoryNumber, categoryOptions, subCategoryNumber);
            seeProducts();
        }
    }
}


function showProducts(categoryNumber, categoryOptions, subCategoryNumber) {
    let selectedProducts;
    let text = 'Lista de productos disponibles: \n\n';

    if (categoryOptions === '1') {
        selectedProducts = products.filter(product => product.category === categoryList[parseInt(categoryNumber-1)]);
    }

    if (categoryOptions == '2') {
        selectedProducts = products.filter(product => product.subCategory === subCategoryList[parseInt(categoryNumber-1)][parseInt(subCategoryNumber-1)]);
    }

    selectedProducts.forEach((item, index) => {
        index += 1;
        text += `${index}. ${item.name}\n`;
    })

    text += '\n99 Volver al menu principal de la tienda.'
    const selectedProductNumber = ask(`${text}\nElije un producto o vuelve al menu principal.\n `, 'numberAndText', [selectedProducts.length, '99']);
    
    if (selectedProductNumber !== '99') {
        const selectedProduct = selectedProducts[parseInt(selectedProductNumber-1)]
        const productOptions = ask(`Nombre del producto: ${selectedProduct.name}\nPrecio: US$${selectedProduct.price}\n\n1. Agregar al carrito.\n2. Volver\n `, 'number', 2);
        
        if (productOptions === '1') {
            shoppingCart.push(selectedProduct);
            alert(`Se agrego ${selectedProduct.name} al carrito de compras.`);
            const question = ask('¿Qué desea hacer? \n1. Ver más articulos. \n2. Volver al carrito.\n ', 'number', 2);

            if (question === '1') {
                showProducts(categoryNumber, categoryOptions, subCategoryNumber)
            }
            
            if (question === '2') {
                store();
            }
        }
    }
}


function viewShoppingCart() {
    if (shoppingCart.length >= 1) {
        let text = 'Articulos agregados al carrito de compras: \n';
        let priceToPay = 0;

        shoppingCart.forEach((item, index) => {
            index += 1;
            text += `\n#${index}. ${item.name} (US$${item.price})`;
            priceToPay += item.price;
        })

        text += `\n\n[#] Precio a pagar: US$${priceToPay}\n\n1. Realizar compra. \n2. Volver a la tienda.\n `
        const shoppingCartOptions = ask(text, 'number', 2);

        if (shoppingCartOptions === '1') {
            alert('Las compras están desactivadas por el momento. Vuelve a intentarlo más tarde.');
        }
    }

    else {
        alert('No hay articulos en el carrito de compras actualmente.');
    }
}


function store() {
    storeOption = ask('Elije una opción. \n\n1. Ver productos\n2. Ver carrito. \n3. Salir.\n ', 'number', 3);

    if (storeOption === '1') {
        seeProducts();
    }

    if (storeOption === '2') {
        viewShoppingCart();
    }

    if (storeOption === '3') {
        return;
    }

    store();
}


function app() {
    // Displays a message to the user when the page is launched.
    alert('Bienvenido a RTecno.')
    store();
}


app();
