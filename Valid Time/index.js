function isValidTime(str) {
    const timeArray = str.split(":");
    return timeArray[0] < 24 && timeArray[1] < 60;
}

console.log(isValidTime("24:00"));
console.log(isValidTime("23:31"));
console.log(isValidTime("22:00"));