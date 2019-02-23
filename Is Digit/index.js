function isDigit(str) {
  return (str.length === 1) ? /[0-9]/.test(str) : false;
}

console.log(isDigit("1"));
console.log(isDigit("3"));
console.log(isDigit("d"));
