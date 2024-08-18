// Extraer el primer número del hash que no sea 0
const hash = "e09f20be37fa2ee74434c7cf5fc981c1";
const S = parseInt(hash.match(/[1-9]/)[0]); // Utiliza match para encontrar el primer dígito no cero y parseInt para convertirlo a número

// Función para procesar la lista
function processList(numbers) {
    // Paso 1: Filtrar dígitos mayores o iguales a S
    var filteredNumbers = numbers.map(function (num) {
        var filteredDigits = num.toString().split('').filter(function (digit) { return parseInt(digit) < S; }).join('');
        return filteredDigits === '' ? NaN : parseInt(filteredDigits, 10); // Convierte la cadena filtrada de vuelta a número o NaN si está vacía
    }).filter(function (num) { return !isNaN(num); }); // Eliminar valores NaN resultantes de cadenas vacías
    
    // Paso 2: Invertir la lista
    var reversedNumbers = filteredNumbers.reverse(); // Invierte el orden de los números filtrados
    
    // Paso 3: Imprimir el resultado
    console.log(reversedNumbers); // Imprime la lista invertida
}

// Ejemplos de uso
var examples = [
    [1, 2, 3, 4, 5, 6, 8, 9],
    [10, 20, 30, 40, 59],
    [6],
    [66],
    [65],
    [6, 2, 1],
    [60, 6, 5, 4, 3, 2, 7, 7, 29, 1]
];

// Itera sobre cada ejemplo y procesa la lista
examples.forEach(function(example) {
    console.log(`Input: ${example} -> Output:`);
    processList(example); // Llama a la función processList para cada ejemplo
});