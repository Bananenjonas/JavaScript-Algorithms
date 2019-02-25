function isDuplicateNumber(array) {
    const sortedArray = array.sort();

    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] === sortedArray[i + 1]) {
            return true;
        }
    }
    
    return false;
}

console.log(isDuplicateNumber([1, 2, 3, 1]));
console.log(isDuplicateNumber([3, 1]));
console.log(isDuplicateNumber([0, 4, 5, 0, 3, 6]));