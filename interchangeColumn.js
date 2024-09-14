function interchangeColumns(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    for (let i = 0; i < rows; i++) {
        let temp = matrix[i][0];
        matrix[i][0] = matrix[i][cols - 1];
        matrix[i][cols - 1] = temp;
    }
    return matrix;
}

// Example usage:
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Original Matrix:");
for (let row of matrix) {
    console.log(row);
}

let result = interchangeColumns(matrix);
console.log("\nMatrix after interchanging columns:");
for (let row of result) {
    console.log(row);
}