function missingNumber(array) {
    array = array.sort();

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== i) {
            return i;
        }
    }
}

console.log(missingNumber([0, 3, 5, 8, 4, 6, 1, 9, 7]));
console.log(missingNumber([1, 2, 5, 0, 6, 7, 9, 3, 4]));