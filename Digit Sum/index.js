function addDigitSum(str) {
    const digitArray = str.match(/\d+/g) || [];
    let digitSum = 0;

    for (let i = 0; i < digitArray.length; i++) {
        digitSum += Number(digitArray[i]);
    }
    
    return digitSum;
}

console.log(addDigitSum("2 apples, 12 oranges"));
console.log(addDigitSum("123450"));
console.log(addDigitSum("Your payment method is invalid"));