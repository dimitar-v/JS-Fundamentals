function negativeBeforePositive(arr) {
    let result = [];
    for (const element of arr) {
       if (element < 0)
           result.unshift(element);
       else
           result.push(element);
    }

    return result.join('\n');
}


console.log(negativeBeforePositive(['7', '-2', '8', '9']));
console.log();
console.log(negativeBeforePositive(['3', '-2', '0', '-1']));
