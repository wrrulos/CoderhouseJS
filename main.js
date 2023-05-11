const consultText = '¿Te gustaria consultar algo más? \n\n 1. Sí \n 2. No'
let availableProductsText = 'Productos disponibles:\n';

function ask(text) {
    answer = prompt(text);
    return answer;
}

// Displays a message to the user when the page is launched.
alert('Bienvenido a RTecno.')

// List of available products.
const products = [
    ['Tarjetas graficas', 'No hay stock actualmente. ¡Volvé a intentarlo más tarde!'],
    ['Procesadores', 'No hay stock actualmente. ¡Volvé a intentarlo más tarde!'],
    ['Mothers', 'No hay stock actualmente. ¡Volvé a intentarlo más tarde!'],
    ['Fuentes', 'No hay stock actualmente. ¡Volvé a intentarlo más tarde!'],
    ['Memorias RAM', 'No hay stock actualmente. ¡Volvé a intentarlo más tarde!'],
    ['Discos', 'No hay stock actualmente. ¡Volvé a intentarlo más tarde!']
]

// Add the list of products to the availableProductsText variable.
for (let i = 0; i < products.length; i++) {
    availableProductsText += `${i+1}. ${products[i][0]}\n`;
}

function showProducts() {
    let answer;

    // We ask the user what product they want to see.
    while (true) {
        // We save the user's answer in the answer variable.
        answer = ask(availableProductsText)

        // We check if the response variable is a string.
        if (isNaN(answer) == true || answer.length == 0) {
            alert('Tenes que ingresar un número válido.')
            continue;
        }

        // We check if the response variable contains a number greater than 6.
        if (parseInt(answer) < 1 || parseInt(answer) > 6) {
            alert('Selecciona una opción valida. (1-6)')
            continue;
        }

        // We break the loop because the user's option is valid.
        break;
    }

    alert(products[answer][1])

    // We ask the user if he wants to consult something else.
    while (true) {
        // We store the user's answer in the answer variable.
        answer = ask(consultText)

        // We check if the response variable is a string.
        if (isNaN(answer) == true || answer.length == 0) {
            alert('Tenes que ingresar un número válido.')
            continue;
        }

        // We check if the response variable contains a number greater than 6.
        if (parseInt(answer) < 1 || parseInt(answer) > 2) {
            alert('Selecciona una opción valida. (1-2)')
            continue;
        }

        if (answer == '1') {
            // We call the showProducts function again, because the user wants to consult again.
            showProducts();
            return;

        } else {
            // We break the loop because the user doesn't want to query anything else.
            break;
        }
    }
}

showProducts();



