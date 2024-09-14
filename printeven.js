function printEvenLengthSubstrings(str) {
    let words = str.split(" ");
    for (let word of words) {
        if (word.length % 2 === 0) {
            console.log(word);
        }
    }
}

// Example usage:
let input = "sun rises in the east";
printEvenLengthSubstrings(input);