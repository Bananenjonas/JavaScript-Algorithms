function reverseString(string) {
  let stringToArray = string.split("");

  let returnArray = [];

  for (let i = 0; i < stringToArray.length; i++) {
    returnArray.unshift(stringToArray[i]);
  }

  return returnArray.join("");
}

console.log(reverseString("codegod"));
console.log(reverseString("javascript"));
