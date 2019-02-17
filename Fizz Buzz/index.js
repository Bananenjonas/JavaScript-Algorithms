function fizzBuzz(number) {
  if (number >= 3 && number % 3 === 0 && number % 5 === 0) {
    return "fizzbuzz";
  }
  if (number >= 3 && number % 3 === 0) {
    return "fizz";
  } else if (number >= 3 && number % 5 === 0) {
    return "buzz";
  } else {
    return "";
  }
}

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(4));
console.log(fizzBuzz(15));
