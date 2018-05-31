function printArrayWithGivenDelimiter(arr) {
    let delimiter = arr.pop();
    return arr.join(delimiter);
}

console.log(printArrayWithGivenDelimiter(['One', 'Two', 'Three', 'Four', 'Five', '-']));
console.log();
console.log(printArrayWithGivenDelimiter(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']));