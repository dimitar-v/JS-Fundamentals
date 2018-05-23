function modifyAverage(num) {
    let numAsStr = '' + num;
    while (numAvg(numAsStr) <= 5) {
        numAsStr += 9;
    }

    console.log(numAsStr);

    function numAvg(str) {
        let sum = 0;
        for (let strElement of str) {
            sum += Number(strElement);
        }
        return sum / str.length;
    }
}

modifyAverage(101);
console.log();
modifyAverage(5835);