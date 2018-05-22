function wordsUppercase(str) {
    return str.split(/\W+/).filter(w => w !== '').map(w => w.toUpperCase()).join(', ');
}

console.log(wordsUppercase('Hi, how are you?'));
console.log();
console.log(wordsUppercase('hello'));