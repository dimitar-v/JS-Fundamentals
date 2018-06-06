function townsCounter(arr) {
    let townsAndPopulation = new Map();
    for (const a of arr) {
        let [town, count] = a.split(/\s*<->\s*/);
        if (!townsAndPopulation.has(town))
            townsAndPopulation.set(town, +count);
        else
            townsAndPopulation.set(town, townsAndPopulation.get(town) + +count)
    }
    let result = '';
    townsAndPopulation.forEach((c,t) => result+=`${t} : ${c}\n`);

    return result;
}

console.log(townsCounter(['Sofia <-> 1200000',
                          'Montana <-> 20000',
                          'New York <-> 10000000',
                          'Washington <-> 2345000',
                          'Las Vegas <-> 1000000']));
console.log();
console.log(townsCounter(['Istanbul <-> 100000',
                          'Honk Kong <-> 2100004',
                          'Jerusalem <-> 2352344',
                          'Mexico City <-> 23401925',
                          'Istanbul <-> 1000']));