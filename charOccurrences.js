function countCharOccurrences(str) {
    let charCount = {};
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    for (let char in charCount) {
        console.log(`"${char}" is repeated ${charCount[char]} times`);
    }
}

// Example usage:
let input = "RAJA";
countCharOccurrences(input);
