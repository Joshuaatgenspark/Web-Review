let str: string = "dog";

let reversetext: string = "";

for (let char of str) {
    reversetext = char + reversetext;
}

console.log(reversetext);
