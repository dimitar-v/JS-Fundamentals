function countWordIn(text) {
    let words = new Map();
    text = text.join(' ').toLowerCase().split(/\W+/).filter(e => e !='');
    for (const w of text) {
        if (!words.has(w))
            words.set(w,0);
        words.set(w, words.get(w)+1);
    }
    let allWords = Array.from(words.keys()).sort();
    let result = '';
    allWords.forEach( w => result+= `'${w}' -> ${words.get(w)} times\n`);
    return result;
}

console.log(countWordIn(["Far too slow, you're far too slow."]));
console.log();
console.log(countWordIn(["JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --"]));