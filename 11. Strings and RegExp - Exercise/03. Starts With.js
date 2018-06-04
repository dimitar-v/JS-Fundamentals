// version 1
//let startWith = (str, start) => new RegExp('^'+start).test(str);

// version 2
let startWith = (str, start) => start === str.slice(0, start.length);

console.log(startWith('How have you been?', 'how'));
console.log();
console.log(startWith('The quick brown fox…', 'The quick brown fox…'));
console.log();
console.log(startWith('Marketing Fundamentals, starting 19/10/2016', 'Marketing Fundamentals, sta'));