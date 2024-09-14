function findNearestZeroSum(arr) {
    arr.sort((a, b) => a - b);
    let left = 0;
    let right = arr.length - 1;
    let nearestSum = Infinity;
    let nearestPair = [];
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (Math.abs(sum) < Math.abs(nearestSum)) {
            nearestSum = sum;
            nearestPair = [arr[left], arr[right]];
        }
        if (sum < 0) {
            left++;
        } else {
            right--;
        }
    }
    console.log(`The pair with sum nearest to zero is ${nearestPair[0]} and ${nearestPair[1]}`);
}

// Example usage:
let input = [1, 5, 3, 2, 4];
findNearestZeroSum(input);