function quadraticEquation(a, b, c) {
    if (a === 0)
        return console.log('No');

    let d = b**2 - 4 * a * c;

    if (d > 0){
        let x1 = (-b-Math.sqrt(d))/(a*2);
        let x2 = (-b+Math.sqrt(d))/(a*2);
        console.log(Math.min(x1, x2));
        console.log(Math.max(x1, x2));
    }
    else if (d === 0)
        console.log(-b/(2*a));
    else
        console.log('No');
}

quadraticEquation(6, 11, -35);
quadraticEquation(1, -12, 36);
quadraticEquation(5, 2, 1);
quadraticEquation(0, 11, -35);