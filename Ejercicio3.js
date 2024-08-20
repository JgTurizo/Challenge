function cambioMinimo(monedas) {
    // Ordenar el array de monedas
    monedas.sort((a, b) => a - b);

    // Inicializar cambioMinimo en 1
    let cambioMinimo = 1;

    // Iterar a través de cada moneda
    for (let moneda of monedas) {
        // Si la moneda actual es mayor que cambioMinimo, retornar cambioMinimo
        if (moneda > cambioMinimo) {
            return cambioMinimo;
        }
        // Sumar el valor de la moneda a cambioMinimo
        cambioMinimo += moneda;
    }

    // Retornar cambioMinimo al final del bucle
    return cambioMinimo;
}

// Ejemplos
console.log(cambioMinimo([5, 7, 1, 1, 2, 3, 22])); // 20
console.log(cambioMinimo([1, 1, 1, 1, 1])); // 6
console.log(cambioMinimo([1, 5, 1, 1, 1, 10, 15, 20, 100])); // 55
