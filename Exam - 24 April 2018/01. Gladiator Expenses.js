function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses =  Math.floor(lostFights/2) * helmetPrice
        + Math.floor(lostFights/3) * swordPrice
        + Math.floor(lostFights/6) * shieldPrice
        + Math.floor(lostFights/12) * armorPrice;

    return `Gladiator expenses: ${expenses.toFixed(2)} aureus`;
}

console.log(gladiatorExpenses(7,2,3,4,5));
console.log();
console.log(gladiatorExpenses(23,12.50,21.50,40,200));