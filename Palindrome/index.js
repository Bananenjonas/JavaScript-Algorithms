function isPalindrome(string) {
  let array = string
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .split("");
  let newString = array.join("");
  let reversedString = array.reverse().join("");

  return newString === reversedString;
}

console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("My age is 0, 0 si ega ym."));
console.log(isPalindrome("_codegod"));
console.log(isPalindrome("legendary"));
console.log(isPalindrome(".0_0 (:/-/:) 0-0"));
