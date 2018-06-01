function diagonalAttack(arr) {
    let matrix = [];
    for (let row = 0; row < arr.length; row++) {
        matrix.push(arr[row].split(' ').map(Number));
    }
    matrix = newMatrix(matrix, isDiagonalsEquals(matrix));

    return matrix.map(a=>a.join(' ')).join('\n');

    function isDiagonalsEquals(matrix) {
        let diagonal1=0, diagonal2=0;
        const len = matrix.length;
        for (let i = 0; i < len; i++) {
            diagonal1+=matrix[i][i];
            diagonal2+=matrix[i][len-i-1];
        }
        return diagonal1===diagonal2 && diagonal1;
    }
    
    function newMatrix(matrix, value) {
        let len = matrix.length;
        if (value){
            for (let row = 0; row < len; row++) {
                for (let col = 0; col < len; col++) {
                    if(row===col || len - row -1 === col )
                        continue;
                    matrix[row][col] = value;
                }
            }
        }
        return matrix;
    }
}

console.log(diagonalAttack(['5 3 12 3 1',
                           '11 4 23 2 5',
                           '101 12 3 21 10',
                           '1 4 5 2 2',
                           '5 22 33 11 1']));
console.log();
console.log(diagonalAttack(['1 1 1',
                           '1 1 1',
                           '1 1 0']));