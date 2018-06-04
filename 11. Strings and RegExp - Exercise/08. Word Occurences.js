let wordOccurences = (str, word) => {
    let result = str.match(new RegExp('\\b'+word+'\\b', 'gi'));
    return result ? result.length : 0;
};

console.log(wordOccurences('The waterfall was so high, that the child couldn’t see its peak.', 'the'));
console.log();
console.log(wordOccurences('How do you plan on achieving that? How? How can you even think of that?', 'how'));
console.log();
console.log(wordOccurences('There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there'));