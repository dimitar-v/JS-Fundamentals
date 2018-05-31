//v1
function biggestElement(matrix) {
    let max = Number.NEGATIVE_INFINITY;
    for (let rol = 0; rol < matrix.length; rol++) {
        for (let col = 0; col < matrix[rol].length; col++) {
            if(matrix[rol][col] > max)
                max = matrix[rol][col];
        }
    }
    return max;
}

// v2
let biggestE = (matrix)=>Math.max(...[].concat.apply([], matrix));

console.log(biggestElement([[20, 50, 10],
                            [8, 33, 145]]));
console.log();
console.log(biggestElement([[3, 5, 7, 12],
                            [-1, 4, 33, 2],
                            [8, 3, 0, 4]]));
console.log();
console.log();
console.log(biggestE([[20, 50, 10],
    [8, 33, 145]]));
console.log();
console.log(biggestE([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]));