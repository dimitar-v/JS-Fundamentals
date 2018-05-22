function figureOf4Squares(num) {
    let strDashes = '-'.repeat(num-2);
    let strSpaces = ' '.repeat(num-2);
    let str1 = '+' + strDashes + '+' + strDashes + '+';
    let str2 = '|' + strSpaces + '|' + strSpaces + '|';

    let rols = num % 2 ? num  : num - 1;
    for (let i = 0; i < rols; i++) {
        if (i === 0 || i === rols - 1 || i === (rols - 1) / 2)
            console.log(str1);
        else
            console.log(str2 );
    }
}

figureOf4Squares(4);
console.log();
figureOf4Squares(5);
console.log();
figureOf4Squares(6);
console.log();
figureOf4Squares(7);
console.log();