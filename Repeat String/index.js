function repeatString(string, num) {
  let outPut = "";

  while (num > 0) {
    outPut += string;
    num--;
  }
  return outPut;
}

console.log(repeatString("codinggod", 4));
console.log(repeatString("google", 3));
