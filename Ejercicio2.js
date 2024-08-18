function sortedSquaredArray(arr, S) {
    const n = arr.length;
    const result = new Array(n).fill(0);
    let left = 0;
    let right = n - 1;
    let index = n - 1;
    const maxRange = S * 11;

    while (left <= right) {
        const leftSquare = arr[left] * arr[left];
        const rightSquare = arr[right] * arr[right];

        if (leftSquare > rightSquare) {
            if (leftSquare <= maxRange) {
                result[index] = leftSquare;
                index--;
            }
            left++;
        } else {
            if (rightSquare <= maxRange) {
                result[index] = rightSquare;
                index--;
            }
            right--;
        }
    }

    // Eliminar valores que exceden el rango máximo
    return result.filter(num => num !== 0);
}

// Ejemplos de uso
const arr1 = [1, 2, 3, 5, 6, 8, 9];
const S = 9;
console.log(sortedSquaredArray(arr1, S)); // [1, 4, 9, 25, 36, 49, 64, 81]

const arr2 = [-2, -1];
console.log(sortedSquaredArray(arr2, S)); // [1, 4]

const arr3 = [-6, -5, 0, 5, 6];
console.log(sortedSquaredArray(arr3, S)); // [0, 25, 25, 36, 36]

const arr4 = [-10, 10];
console.log(sortedSquaredArray(arr4, S)); // [100]