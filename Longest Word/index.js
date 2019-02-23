function longestWord(str) {
    let wordArray = str.replace(/\W/g ," ").split(" ");
    let longestWord = "";
    for (let i = 0; i < wordArray.length; i++) {
        if (longestWord.length < wordArray[i].length) {
            longestWord = wordArray[i];
        }
    }
    return longestWord;
}

console.log(longestWord("Ready, steady, go!"));
console.log(longestWord("Ready[[[, steady, go!"));
console.log(longestWord("ABCd"));