function producedCars(arr) {
    let carCounter = new Map();
    arr.forEach(row => {
        [brand, model, count] = row.split(' | ');
        if(!carCounter.has(brand))
            carCounter.set(brand,new Map());

        if(!carCounter.get(brand).has(model))
            carCounter.get(brand).set(model, +count);
        else
            carCounter.get(brand).set(model,  carCounter.get(brand).get(model) + +count);
    });

    let result = '';
    carCounter.forEach((modelsCount, brand) => {
       result += brand+'\n';
       modelsCount.forEach((count, model) => result += `###${model} -> ${count}\n`)
    });

    return result;
}

console.log(producedCars(['Audi | Q7 | 1000',
                          'Audi | Q6 | 100',
                          'BMW | X5 | 1000',
                          'BMW | X6 | 100',
                          'Citroen | C4 | 123',
                          'Volga | GAZ-24 | 1000000',
                          'Lada | Niva | 1000000',
                          'Lada | Jigula | 1000000',
                          'Citroen | C4 | 22',
                          'Citroen | C5 | 10']));