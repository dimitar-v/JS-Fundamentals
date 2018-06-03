function matchDate(arr) {
    let regex = /\b(\d{1,2})-([A-Z][a-z]{2})-(\d{4})\b/g;
    let result = [];
    let temp;
    for (const arrElement of arr) {
        while (temp = regex.exec(arrElement))
            result.push(`${temp[0]} (Day: ${temp[1]}, Month: ${temp[2]}, Year: ${temp[3]})`);
    }
    return result.join('\n');
}

console.log(matchDate(['I am born on 30-Dec-1994.',
    'This is not date: 512-Jan-1996.',
    'My father is born on the 29-Jul-1955.']
));
console.log();
console.log(matchDate(['1-Jan-1999 is a valid date.','So is 01-July-2000.','I am an awful liar, by the way – Ivo, 28-Sep-2016.']));