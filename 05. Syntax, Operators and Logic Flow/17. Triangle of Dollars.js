function triangleOfDollars(num) {
    let str = '';
    for (let i = 1; i <= num; i++) {
        str += '$';
        console.log(str);
    }
}

triangleOfDollars(3);
console.log();
triangleOfDollars(2);
console.log();
triangleOfDollars(4);