let printLetters = (str) =>
    str.split('').map((ch,i)=>`str[${i}] -> ${ch}`).join('\n');

console.log(printLetters('Hello, World!'));
console.log();
console.log();
console.log();
console.log(printLetters('SoftUni'));