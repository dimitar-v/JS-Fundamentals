function rotateArray(arr) {
    let rotate = Number(arr.pop()) % arr.length;
    for (let i = 0; i < rotate; i++) {
        arr.unshift(arr.pop());
    }
    return arr.join(' ');
}

console.log(rotateArray(['1','2','3','4','2']));
console.log();
console.log(rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']));
