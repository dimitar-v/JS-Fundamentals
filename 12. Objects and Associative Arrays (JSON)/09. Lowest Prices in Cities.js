function lowestPriceInCities(list) {
    let productInCities = new Map();
    list.forEach(row => {
        [city, product, price] = row.split(/\s*\|\s*/);
        if (!productInCities.has(product))
            productInCities.set(product, new Map());
        productInCities.get(product).set(city, +price);
    });

    let result = '';
    productInCities.forEach((citiesWithPrice, product) =>{
        let sortedCities = Array.from(citiesWithPrice.keys())
            .sort((k1, k2) => citiesWithPrice.get(k1) - citiesWithPrice.get(k2));
        result += `${product} -> ${citiesWithPrice.get(sortedCities[0])} (${sortedCities[0]})\n`
    });

    return result;
}

console.log(lowestPriceInCities(['Sample Town | Sample Product | 1000',
                                 'Sample Town | Orange | 2',
                                 'Sample Town | Peach | 3',
                                 'Sofia | Orange | 3',
                                 'Sofia | Peach | 2',
                                 'New York | Sample Product | 1000.1',
                                 'New York | Burger | 10']));