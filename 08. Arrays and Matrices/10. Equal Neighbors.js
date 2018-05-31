function equalNeighbors(matrix) {
    let result = 0;
    for (let rol = 0; rol < matrix.length; rol++) {
        for (let col = 0; col < matrix[rol].length; col++) {
            if (matrix[rol][col]===matrix[rol][col+1])
                result++;
            if (matrix[rol+1]&&matrix[rol][col]===matrix[rol+1][col])
                result++;
        }
    }
    return result;
}

console.log(equalNeighbors([['2', '3', '4', '7', '0'],
                            ['4', '0', '5', '3', '4'],
                            ['2', '3', '5', '4', '2'],
                            ['9', '8', '7', '5', '4']]));
console.log();
console.log(equalNeighbors([['test', 'yes', 'yo', 'ho'],
                            ['well', 'done', 'yo', '6'],
                            ['not', 'done', 'yet', '5']]));
console.log();
console.log(equalNeighbors([[2, 2, 5, 7, 4],
                            [4, 0, 5, 3, 4],
                            [2, 5, 5, 4, 2]]));
console.log();
//console.log(equalNeighbors());