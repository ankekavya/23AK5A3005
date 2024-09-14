function addMatrices(A, B) {
  const result = [];
  for (let i = 0; i < A.length; i++) {
    result[i] = [];
    for (let j = 0; j < A[0].length; j++) {
      result[i][j] = A[i][j] + B[i][j];
    }
  }
  return result;
}

function subtractMatrices(A, B) {
  const result = [];
  for (let i = 0; i < A.length; i++) {
    result[i] = [];
    for (let j = 0; j < A[0].length; j++) {
      result[i][j] = A[i][j] - B[i][j];
    }
  }
  return result;
}

function multiplyMatrices(A, B) {
  const result = [];
  for (let i = 0; i < A.length; i++) {
    result[i] = [];
    for (let j = 0; j < B[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < A[0].length; k++) {
        sum += A[i][k] * B[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}

function traceMatrix(A) {
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i][i];
  }
  return sum;
}

function classifyNumber(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  if (sum > n) {
    return "Abundant";
  } else if (sum < n) {
    return "Deficient";
  } else {
    return "Perfect";
  }
}

const matrixA = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const matrixB = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1]
];

console.log(addMatrices(matrixA, matrixB));
console.log(subtractMatrices(matrixA, matrixB));
console.log(multiplyMatrices(matrixA, matrixB));
console.log(traceMatrix(matrixA));

console.log(classifyNumber(6));  // Perfect
console.log(classifyNumber(12)); // Abundant

