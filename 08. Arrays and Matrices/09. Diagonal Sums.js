function diagonalSum(matrix) {
    let d1 = 0,
        d2 = 0,
        matrixLen = matrix.length;
    for (let i = 0; i < matrixLen; i++) {
        d1 += matrix[i][i];
        d2 += matrix[i][matrixLen-1-i]
    }
    return d1 + ' ' + d2;
}

console.log(diagonalSum([[20, 40],
                         [10, 60]]));
console.log();
console.log(diagonalSum([[3, 5, 17],
                         [-1, 7, 14],
                         [1, -8, 89]]));
