function calcArr(arr) {
    let operation = {
      '+':(a,b)=> a+b,
      '-':(a,b)=> a-b,
      '*':(a,b)=> a*b,
      '/':(a,b)=> a/b
    };

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === "number")
            result.push(arr[i]);
        else {
            [b, a] = [result.pop(), result.pop()];
            result.push(operation[arr[i]](a,b));
        }
    }

    if(result.length > 1)
        result = ['Error: too many operands!'];
    else if (!result[0])
        result = ['Error: not enough operands!'];

    return result[0];
}

console.log(calcArr([3, 4, '+']));
console.log();
console.log(calcArr([5, 3, 4, '*', '-']));
console.log();
console.log(calcArr([7, 33, 8, '-']));
console.log();
console.log(calcArr([15, '/']));
console.log();
console.log(calcArr([31, 2, '+', 11, '/']));
console.log();
console.log(calcArr([-1, 1, '+', 101, '*', 18, '+', 3, '/']));