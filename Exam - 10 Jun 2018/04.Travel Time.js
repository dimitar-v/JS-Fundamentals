function solve(arr) {
    let travelMap = new Map();
    let countries = [];

    for(let a of arr ){
        [country, town, cost] = a.split(' > ');
        addTravelMap(country, town, cost)
    }
    return printTravelMap();

    function addTravelMap(country, town, cost) {
        cost = +cost;
        let char = town[0].toUpperCase();
        town = town.replace(/\b[a-z]/, char);
        if (!travelMap.has(country)){
            travelMap.set(country, new Map());
            countries.push(country);
        }
        if (!travelMap.get(country).has(town)){
            travelMap.get(country).set(town, cost);
        }else if (travelMap.get(country).get(town) > cost) {
            travelMap.get(country).set(town, cost);
        }
    }

    function printTravelMap() {
        let result = '';

        countries = countries.sort((c1,c2) => c1.localeCompare(c2));

        countries.forEach(c => {
            result += c + ' -> ';

           let sortTown = Array.from(travelMap.get(c)).sort((t1, t2) => t1[1] - t2[1] || t1[0].localeCompare(t2[0]));
            sortTown.forEach(t => result += `${t[0]} -> ${t[1]} `);
            result += '\n';
        });
        return result;
    }
}

//console.log(solve(["Bulgaria > Sofia > 500",
//    "Bulgaria > Sopot > 800",
//    "France > Paris > 2000",
//    "Albania > Tirana > 1000",
//    "Bulgaria > Sofia > 200" ]
//));

console.log(solve([
    'Bulgaria > Sofia > 25000',
    'aaa > Sofia > 1',
    'aa > Orgrimar > 0',
    'Albania > Tirana > 25000',
    'zz > Aarna > 25010',
    'Bulgaria > Lukovit > 10'
]));
