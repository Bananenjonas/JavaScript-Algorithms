function factorial(number) {
  let returnFactorial = 1;

  for (let i = 1; i <= number; i++) {
    returnFactorial *= i;
  }

  return returnFactorial;
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(10));
