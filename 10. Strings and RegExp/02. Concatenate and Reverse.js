let concatAndReverce = (arr)=>
    arr.join('').split('').reverse().join('');

console.log(concatAndReverce(['I', 'am', 'student']));
console.log();
console.log(concatAndReverce(['race', 'car']));