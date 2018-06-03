// version 1
function aggregateTable(arr) {
    let touns = [];
    let sum = 0;
    arr.forEach(e=> {
        let split = e.split('| ');
        touns.push(split[1].trim());
        sum += +split[2];
    });
    return touns.join(', ') + '\n' + sum;
}
// version 2
function aggregateTable2(arr){
    let regex=/\|\s*(\w+[ ]?\w+)\s+\|\s*(\d+)/;
    let touns = [];
    let sum = 0;
    for (const a of arr) {
        let match = regex.exec(a);
        //console.log(match);
        touns.push(match[1]);
        sum += +match[2];
    }
    return touns.join(', ') + '\n' + sum;
}

console.log(aggregateTable(['| Sofia           | 300',
                            '| Veliko Tarnovo  | 500',
                            '| Yambol          | 275']
));
console.log();
console.log(aggregateTable2(['| Sofia           | 300',
                             '| Veliko Tarnovo  | 500',
                             '| Yambol          | 275']
));