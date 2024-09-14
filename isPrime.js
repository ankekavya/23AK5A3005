function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) return false;
    }
    return true;
}

function isPalindrome(num) {
    let str = num.toString();
    let rev = str.split("").reverse().join("");
    return str == rev;
}

function nextPalindrome(num) {
    while (true) {
        num++;
        if (isPalindrome(num)) return num;
    }
}

function checkPrimeAndPrintNextPalindrome(num) {
    if (isPrime(num)) {
        console.log(nextPalindrome(num));
    } else {
        console.log("Not a prime number");
    }
}

// Test the function
checkPrimeAndPrintNextPalindrome(23);  // Output: 121
checkPrimeAndPrintNextPalindrome(37);  // Output: 131
checkPrimeAndPrintNextPalindrome(48);  // Output: Not a prime number


