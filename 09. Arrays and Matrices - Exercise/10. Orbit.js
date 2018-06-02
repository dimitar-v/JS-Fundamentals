function orbit([width, height, x, y]) {
    let matrix =[];
    for (let i = 0; i < height; i++) {
        matrix.push([]);
        for (let j = 0; j < width; j++)
            matrix[i].push(2)
    }
    matrix[x][y]=1;

    let tempX = 2;
    let tempY = 2;

    while (x - tempX >= 0 || x + tempX < width || y - tempY >= 0 || y + tempY < height) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
               if ((row-1 < x - tempX || row+1 > x + tempX) || (col-1 < y - tempY || col+1 > y + tempY))
                matrix[row][col]+=1;
            }
        }
        tempX++;
        tempY++;
    }

    return matrix.map(a=>a.join(' ')).join('\n');
}

console.log(orbit([4,4,0,0]));
console.log();
console.log(orbit([5,5,2,2]));
console.log();
console.log(orbit([3,3,2,2]));


// version2 from https://github.com/SonicTheCat/JS-Fundamentals/blob/master/07.ArraysMatricesExercise/10.Orbit.js
function orbit1([rows,cols,starRow,starCol]) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push([]);
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            matrix[r][c] = Math.max(Math.abs(r - starRow), Math.abs(c - starCol)) + 1;
        }
    }

    console.log(matrix.map(row => row.join(" ")).join("\n"));
}

console.log();
orbit1([9, 9, 2, 3]);