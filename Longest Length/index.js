function longestString(str) {
  let array = str.split(" ");
  let longestLength = 0;

  for (let i = 0; i < array.length; i++) {
    if (longestLength < array[i].length) {
      longestLength = array[i].length;
    }
  }

  return longestLength;
}

console.log(longestString("I am a coding god"));
console.log(longestString("I would like to work for Google"));
console.log(longestString("Ain't no fun if the homie don't code none"));
