function findFirstDuplicate(array) {
    let duplicateObject = {};
    for (let i = 0; i < array.length; i++) {
        if (duplicateObject[array[i]] !== 1) {
            duplicateObject[array[i]] = 1;
        } else {
            return array[i]
        }
    }
    return -1;
}

console.log(findFirstDuplicate([2, 3, 3, 1, 5, 2]));
console.log(findFirstDuplicate([2, 2]));
console.log(findFirstDuplicate([2, 1, 3]));