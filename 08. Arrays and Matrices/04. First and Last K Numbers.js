function firstAndLastKElements(arr) {
    let num = arr.shift();
    return arr.slice(0,num).join(' ') + '\n' + arr.slice(-num).join(' ');
}

console.log(firstAndLastKElements([2, 7, 8, 9]));
console.log();
console.log(firstAndLastKElements([3, 6, 7, 8, 9]));