function countWordIn(text) {
    let words = {};
    text = text.join(' ').split(/\W+/).filter(e => e !='');
    for (const w of text) {
        if (words[w] == undefined)
            words[w] = 0;
        words[w]++;
    }

    return JSON.stringify(words);
}

console.log(countWordIn(["Far too slow, you're far too slow."]));
console.log();
console.log(countWordIn(["JS devs use Node.js for server-side JS.-- JS for devs"]));