function spiralMatrix(x, y) {
    let matrix = [];
    let value = 1;
    let tempX = 0;
    let tempY = 0;

    for (let i = 0; i < x; i++) {
        matrix.push([]);
        for (let j = 0; j < y; j++)
            matrix[i].push(0)
    }

    let fillMatrix = (a,b,v)=> matrix[a][b]=v;
    fillMatrix(tempX,tempY,value++);

    while (value <= x*y) {
        while (tempY < y-1 && matrix[tempX][tempY+1] === 0)
            fillMatrix(tempX,++tempY,value++);

        while (tempX < x-1 && matrix[tempX+1][tempY] === 0)
            fillMatrix(++tempX,tempY,value++);

        while (matrix[tempX][tempY-1] === 0)
            fillMatrix(tempX,--tempY,value++);

        while (matrix[tempX-1][tempY] === 0)
            fillMatrix(--tempX,tempY,value++);
    }
    return matrix.map(a=>a.join(' ')).join('\n');
}

console.log(spiralMatrix(5, 5));
console.log();
console.log(spiralMatrix(3, 3));