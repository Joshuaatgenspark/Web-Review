function  reverseString(str) {
    var splitString = str.split("");

    var reverseString = splitString.reverse();

    var combineArray = reverseString.join("");

    return combineArray;
}

console.log(reverseString("howdy"));
