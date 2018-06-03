let matchAllWords = (str) => str.match(/\w+/g).join('|');

console.log(matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text'));
console.log();
console.log(matchAllWords('_(Underscores) are also word characters'));