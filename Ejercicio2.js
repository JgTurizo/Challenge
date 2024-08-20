const hashProcessor = require('./HashProcessor');
const S = hashProcessor.getS();

/**
 * Función para obtener un array de los cuadrados ordenados de los elementos de un array dado.
 * @param {number[]} arr - Array de números.
 * @param {number} S - Valor de S para determinar el rango máximo.
 * @returns {number[]} - Array de cuadrados ordenados dentro del rango.
 */
function arrayCuadradosOrdenados(arr, S) {
    const n = arr.length;
    const resultado = new Array(n);
    let izquierda = 0;
    let derecha = n - 1;
    const rangoMaximo = S * 11;

    for (let i = n - 1; i >= 0; i--) {
        const cuadradoIzquierda = arr[izquierda] * arr[izquierda];
        const cuadradoDerecha = arr[derecha] * arr[derecha];

        if (cuadradoIzquierda > cuadradoDerecha) {
            resultado[i] = cuadradoIzquierda;
            izquierda++;
        } else {
            resultado[i] = cuadradoDerecha;
            derecha--;
        }
    }

    // Eliminar valores que exceden el rango máximo
    return resultado.filter(num => num <= rangoMaximo);
}

// Ejemplos de uso
const arr1 = [1, 2, 3, 5, 6, 8, 9];
console.log(arrayCuadradosOrdenados(arr1, S)); // [1, 4, 9, 25, 36, 64]

const arr2 = [-2, -1];
console.log(arrayCuadradosOrdenados(arr2, S)); // [1, 4]

const arr3 = [-6, -5, 0, 5, 6];
console.log(arrayCuadradosOrdenados(arr3, S)); // [0, 25, 25, 36, 36]

const arr4 = [-10, 10];
console.log(arrayCuadradosOrdenados(arr4, S)); // []
