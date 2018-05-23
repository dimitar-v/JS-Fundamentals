function validityChecker([x1, y1, x2, y2]) {
    console.log(isValid(x1,y1,0,0));
    console.log(isValid(x2,y2,0,0));
    console.log(isValid(x1,y1,x2,y2));

    function isValid(x1, y1, x2, y2) {
        let num = Math.sqrt((x1-x2)**2 + (y1-y2)**2);
        return num == parseInt(num) ? `{${x1}, ${y1}} to {${x2}, ${y2}} is valid` : `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
    }
}

validityChecker([3, 0, 0, 4]);
console.log();
validityChecker([2, 1, 1, 1]);