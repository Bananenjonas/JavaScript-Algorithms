function sumDifference(numArray) {
  const maxValue = Math.max(...numArray);
  const minValue = Math.min(...numArray);
  let sum = 0;

  for (let i = minValue; i <= maxValue; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumDifference([10, 5]));
console.log(sumDifference([3, 7]));
