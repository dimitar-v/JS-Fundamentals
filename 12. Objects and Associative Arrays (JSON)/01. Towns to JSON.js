function townsToJSON(arr) {
    let towns = [];
    for (const str of arr.slice(1)) {
        let [e, town, lat, long] = str.split(/\s*\|\s*/);
        towns.push({'Town':town, 'Latitude': +lat, 'Longitude': +long});
    }
    return JSON.stringify(towns);
}

console.log(townsToJSON(['| Town | Latitude | Longitude |',
                         '| Sofia | 42.696552 | 23.32601 |',
                         '| Beijing | 39.913818 | 116.363625 |']));
console.log();
console.log(townsToJSON(['| Town | Latitude | Longitude |',
                         '| Veliko Turnovo | 43.0757 | 25.6172 |',
                         '| Monatevideo | 34.50 | 56.11 |']));