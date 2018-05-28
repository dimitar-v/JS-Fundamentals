function modifyAverage(num) {
    let numAsStr = '' + num;

    let addNine = (n)=>n+'9';

    function numAvg(str) {
        let sum = 0;
        for (let strElement of str) {
            sum += Number(strElement);
        }
        return sum / str.length;
    }

    while (numAvg(numAsStr) <= 5) {
        numAsStr = addNine(numAsStr);
    }

    console.log(numAsStr);
}

modifyAverage(101);
console.log();
modifyAverage(5835);