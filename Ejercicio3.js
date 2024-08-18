function minChange(coins) {
    // Ordenar el array de monedas
    coins.sort((a, b) => a - b);

    // Inicializar minChange en 1
    let minChange = 1;

    // Iterar a través de cada moneda
    for (let coin of coins) {
        // Si la moneda actual es mayor que minChange, retornar minChange
        if (coin > minChange) {
            return minChange;
        }
        // Sumar el valor de la moneda a minChange
        minChange += coin;
    }

    // Retornar minChange al final del bucle
    return minChange;
}

// Ejemplos
console.log(minChange([5, 7, 1, 1, 2, 3, 22])); // 20
console.log(minChange([1, 1, 1, 1, 1])); // 6
console.log(minChange([1, 5, 1, 1, 1, 10, 15, 20, 100])); // 55