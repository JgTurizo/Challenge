const hashProcessor = require('./HashProcessor');
const primerNumeroNoCero = hashProcessor.getS();

/**
 * Función para procesar una lista de números.
 * @param {number[]} numeros - Lista de números a procesar.
 */
function procesarLista(numeros) {
    // Paso 1: Filtrar dígitos menores que primerNumeroNoCero en cada número de la lista
    const numerosFiltrados = numeros.map(num => {
        // Convertir el número a cadena, filtrar dígitos menores que primerNumeroNoCero y volver a unir
        const digitosFiltrados = num.toString().split('').filter(digito => parseInt(digito) < primerNumeroNoCero).join('');
        // Convertir la cadena filtrada de vuelta a número o NaN si está vacía
        return digitosFiltrados === '' ? NaN : parseInt(digitosFiltrados, 10);
    }).filter(num => !isNaN(num)); // Eliminar valores NaN resultantes de cadenas vacías
    
    // Paso 2: Invertir la lista de números filtrados
    const numerosInvertidos = numerosFiltrados.reverse();
    
    // Paso 3: Imprimir el resultado
    console.log(numerosInvertidos);
}

// Ejemplos de uso
const ejemplos = [
    [1, 2, 3, 4, 5, 6, 8, 9],
    [10, 20, 30, 40, 59],
    [6],
    [66],
    [65],
    [6, 2, 1],
    [60, 6, 5, 4, 3, 2, 7, 7, 29, 1]
];

// Iterar sobre cada ejemplo y procesar la lista
ejemplos.forEach(ejemplo => {
    console.log(`Entrada: ${ejemplo} -> Salida:`);
    procesarLista(ejemplo); // Llamar a la función procesarLista para cada ejemplo
});
