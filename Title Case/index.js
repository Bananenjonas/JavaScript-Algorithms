function capitalizeFirstLetter(str) {
  let array = str.split(" ");
  let capitalizedString = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (j === 0) {
        capitalizedString.push(array[i][j].toUpperCase());
      } else {
        capitalizedString.push(array[i][j]);
      }
    }
    capitalizedString.push(" ");
  }
  return capitalizedString.join("");
}

console.log(capitalizeFirstLetter("I am a coding god"));
console.log(capitalizeFirstLetter("I would like to work for Google"));
