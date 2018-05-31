// v1
function smallestTwoNumbers(arr) {
    return arr
        .sort((a, b) => a-b)
        .slice(0,2)
        .join(' ');
}

// v2
let small2nums = (arr) => arr
    .sort((a, b) => a-b)
    .slice(0,2)
    .join(' ');

console.log(smallestTwoNumbers([30, 15, 50, 5]));
console.log();
console.log(smallestTwoNumbers([3, 0, 10, 4, 7, 3]));
console.log();
console.log();
console.log(small2nums([30, 15, 50, 5]));
console.log();
console.log(small2nums([3, 0, 10, 4, 7, 3]));