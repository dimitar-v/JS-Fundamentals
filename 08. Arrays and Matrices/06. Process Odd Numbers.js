// version 1
function processOddNumbers(arr) {
    return arr
        .filter((e,i)=>i%2===1)
        .map(e=>e*2)
        .reverse()
        .join(' ');
}

// version 2
let proces = (arr)=>arr
    .filter((e,i)=>i%2===1)
    .map(e=>e*2).reverse()
    .join(' ');

console.log(processOddNumbers([10, 15, 20, 25]));
console.log();
console.log(processOddNumbers([3, 0, 10, 4, 7, 3]));
console.log();
console.log();
console.log(proces([10, 15, 20, 25]));
console.log();
console.log(proces([3, 0, 10, 4, 7, 3]));