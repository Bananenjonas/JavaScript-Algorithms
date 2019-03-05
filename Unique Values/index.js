function uniqueValue(arr1, arr2) {
  let uniqueValue = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      console.log(arr1[i]);
      uniqueValue.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      console.log(arr2[i]);
      uniqueValue.push(arr2[i]);
    }
  }

  return uniqueValue;
}

console.log(uniqueValue([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(uniqueValue([1, "calf", 3, "piglet"], [7, "filly"]));
console.log(uniqueValue([2, 1, 3], [3, 2, 1]));
