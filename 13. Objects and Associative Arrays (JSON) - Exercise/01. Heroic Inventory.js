function heroicInventory(arr) {
    let register = [];
    arr.forEach(a =>{
        [hero, level, items] = a.split(' / ');
        items = items !== undefined ? items = items.split(', ') : [];
        register.push({name:hero, level:+level, items:items});
    });
    
    return JSON.stringify(register);
}

console.log(heroicInventory([
    'Isacc / 25 / Apple, GravityGun', 
    'Derek / 12 / BarrelVest, DestructionSword', 
    'Hes / 1 / Desolator, Sentinel, Antara'
]));
console.log();
console.log(heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']));