function cookingByNumber() {
    let num = arguments[0][0];
    for (let i = 1; i < arguments[0].length; i++) {
        num = cookNum(num, arguments[0][i]);
        console.log(num);
    }

    function cookNum(num, operation) {
        switch (operation){
            case 'chop': return num/2;
            case 'dice': return Math.sqrt(num);
            case 'spice': return num + 1;
            case 'bake': return num * 3;
            case 'fillet': return num * 0.8;

        }
    }
}

cookingByNumber([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
console.log();
cookingByNumber([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);