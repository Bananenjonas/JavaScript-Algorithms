function amendSentence(str) {
    const splittedArray = str.split("");
    let finishedStr = "";

    for (let i = 0; i < splittedArray.length; i++) {
       if (/[A-Z]/.test(splittedArray[i])) {
           finishedStr += " " + splittedArray[i].toLowerCase();
       } else  {
           finishedStr += splittedArray[i];
       } 
    }
    
    return finishedStr;
}

console.log(amendSentence("CodingGodDoesWorkSon"));
/*console.log(amendSentence("Ain'tNoFunIfTheHomieDon'tCodeNone"));*/