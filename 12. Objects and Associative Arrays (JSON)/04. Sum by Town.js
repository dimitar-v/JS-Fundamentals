function sumByTowns(arr) {
    let towns = {};
    for (let i = 0; i < arr.length; i++) {
        let town = arr[i++];
        if (towns[town] === undefined)
            towns[town] = 0;
        towns[town] += +arr[i];
    }
    return JSON.stringify(towns);
}

console.log(sumByTowns(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']));
console.log();
console.log(sumByTowns(['Sofia', '20', 'Varna', '3', 'sofia', '5', 'varna', '4']));