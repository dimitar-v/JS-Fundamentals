function lastKNumSequence(n, k) {
    let arr = [1];
    for (let i = 1; i < n; i++) {
        arr.push(arr.slice(-k).reduce((a,b)=>a+b));
    }
    return arr.join(' ');
}

console.log(lastKNumSequence(6, 3));
console.log();
console.log(lastKNumSequence(8, 2));