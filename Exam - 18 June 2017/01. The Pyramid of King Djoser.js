function pyramidCalc(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let steps = Math.ceil(base / 2);
    let height = Math.floor(steps * increment);

    for (let i = 1; i < steps; i++) {
        stone += (base - 2*i)**2;
        if (i%5 ===0)
            lapisLazuli += (base - 2*i + 1)*4;
        else
            marble += (base - 2*i + 1)*4;
    }
    gold = (base - 2*(steps-1))**2;

    stone = Math.ceil(stone * increment);
    marble = Math.ceil(marble * increment);
    lapisLazuli = Math.ceil(lapisLazuli * increment);
    gold = Math.ceil(gold * increment);

    return `Stone required: ${stone}\nMarble required: ${marble}\nLapis Lazuli required: ${lapisLazuli}\nGold required: ${gold}\nFinal pyramid height: ${height}`;
}

console.log(pyramidCalc(11, 1));
console.log();
console.log(pyramidCalc(11, 0.75));
console.log();
console.log(pyramidCalc(12, 1));
console.log();
console.log(pyramidCalc(23, 0.5));