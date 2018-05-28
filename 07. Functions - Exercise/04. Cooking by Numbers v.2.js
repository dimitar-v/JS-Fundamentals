function cookingByNumber([num, op1, op2, op3, op4, op5]) {
    let chop=(num)=>num/2;
    let dice=(num)=>Math.sqrt(num);
    let spice=(num)=>num + 1;
    let bake=(num)=>num * 3;
    let fillet=(num)=>num * 0.8;

    for (const op of [op1, op2, op3, op4, op5]){
        switch (op){
            case 'chop': num=chop(num);break;
            case 'dice': num=dice(num);break;
            case 'spice': num=spice(num);break;
            case 'bake': num=bake(num);break;
            case 'fillet': num=fillet(num);break;

        }
        console.log(num);
    }
}

cookingByNumber([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
console.log();
cookingByNumber([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);