function addUpDigits(num) {
  let stringNum = num.toString();
  let sum = 0;

  for (let i = 0; i < stringNum.length; i++) {
    sum += parseInt(stringNum[i]);
  }

  return sum;
}

console.log(addUpDigits(29));
console.log(addUpDigits(48));
