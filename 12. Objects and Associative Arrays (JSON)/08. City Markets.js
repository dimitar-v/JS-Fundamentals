function productsByTowns(list) {
    let townsWithProducts = new Map();
    list.forEach(e => {
        [town, product, amount, price] = e.split(/\s*->\s*|\s*:\s*/);
        if (!townsWithProducts.has(town))
            townsWithProducts.set(town, new Map());

        townsWithProducts.get(town).set(product, +amount * +price)
    } );

    let result = '';
    townsWithProducts.forEach((items, town) => {
        result += `Town - ${town}\n`;
        items. forEach((income, name) =>
            result += `$$$${name} : ${income}\n`);
    });

    return result;
}

console.log(productsByTowns(['Sofia -> Laptops HP -> 200 : 2000',
                             'Sofia -> Raspberry -> 200000 : 1500',
                             'Sofia -> Audi Q7 -> 200 : 100000',
                             'Montana -> Portokals -> 200000 : 1',
                             'Montana -> Qgodas -> 20000 : 0.2',
                             'Montana -> Chereshas -> 1000 : 0.3']));