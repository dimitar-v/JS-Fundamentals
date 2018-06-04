let splitString = (str, delimiter) => str.split(delimiter).join('\n');

console.log(splitString('One-Two-Three-Four-Five', '-'));
console.log();
console.log(splitString('http://platform.softuni.bg', '.'));