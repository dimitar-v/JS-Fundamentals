function calculator(a, b, op) {
    let calc = (a,b,op) => op(a,b);
    let add = (a,b) => a+b;
    let subtract = (a,b) => a-b;
    let multiply = (a,b) => a*b;
    let devide = (a,b) => a/b;

    switch (op){
        case '+': return calc(a,b,add);
        case '-': return calc(a,b,subtract);
        case '*': return calc(a,b,multiply);
        case '/': return calc(a,b,devide);
    }
}

console.log(calculator(2,4,'+'));
console.log(calculator(3,3,'/'));
console.log(calculator(18,-1,'*'));