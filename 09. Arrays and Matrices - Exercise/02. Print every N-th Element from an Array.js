function printEveryNElement(arr) {
    let step = Number(arr.pop());
    let result = [];
    for (let i = 0; i < arr.length; i+=step) {
        result.push(arr[i]);
    }
    return result.join('\n')
}

console.log(printEveryNElement([
'5',
'20',
'31',
'4',
'20',
'2']));
console.log();
console.log(printEveryNElement(['dsa', 'asd', 'test', 'tset', '2']));
console.log();
console.log(printEveryNElement(['1', '2', '3', '4', '5', '6']));