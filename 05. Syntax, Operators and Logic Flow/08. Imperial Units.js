function inchesToFoot(inches) {
    let foot = Math.floor(inches / 12);
    let inch = inches % 12;
    console.log(`${foot}'-${inch}"`);
}

inchesToFoot(36);
inchesToFoot(55);
inchesToFoot(11);