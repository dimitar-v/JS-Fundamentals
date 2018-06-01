function isMagic(matrix) {
    const temp = matrix[0].reduce((a,b)=>a+b);
    for (let i = 0; i < matrix.length; i++) {
        let temp2 = matrix[i].reduce((a,b)=>a+b);
        if (temp !== temp2)
            return false;
        temp2 = 0;
        for (let j = 0; j < matrix.length; j++) {
            temp2 += matrix[j][i];
        }
        if (temp !== temp2)
            return false;
    }
    return true;
}

console.log(isMagic([[4, 5, 6],
                     [6, 5, 4],
                     [5, 5, 5]]));
console.log();
console.log(isMagic([[11, 32, 45],
                     [21, 0, 1],
                     [21, 1, 1]]));
console.log();
console.log(isMagic([[1, 0, 0],
                     [0, 0, 1],
                     [0, 1, 0]]));