//version 1
function evenPositionElemennts(arr) {
    return arr.filter((a, i)=> i%2 ==0).join(' ');
}

//version 2
let evenPositionsE = (arr)=>arr.filter((a, i)=> i%2 ==0).join(' ');

console.log(evenPositionsE(['20', '30', '40']));
console.log();
console.log(evenPositionsE(['5', '10']));