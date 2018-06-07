function juiceBottle(arr) {
    let quantityJuice = {};
    let juicesFill = new Set();
    
    arr.forEach(j => {
        [juice, quantity] = j.split(/\s*=>\s*/);
        if (quantityJuice[juice] === undefined)
            quantityJuice[juice] = 0;

        if((quantityJuice[juice] += +quantity) >= 1000)
            juicesFill.add(juice);
    });
    let result = '';
    juicesFill.forEach(j => result += `${j} => ${~~(quantityJuice[j] / 1000)}\n`);

    return result;
}

console.log(juiceBottle(['Orange => 2000', 'Peach => 1432', 'Banana => 450', 'Peach => 600', 'Strawberry => 549']));
console.log();
console.log(juiceBottle(['Kiwi => 234', 'Pear => 2345', 'Watermelon => 3456', 'Kiwi => 4567', 'Pear => 5678', 'Watermelon => 6789']));