function rounding([num, precision]) {
    if (precision > 15)
        precision = 15;

    let d = '1';
    for (let i = 0; i < precision; i++) {
        d += 0;
    }
    console.log(Math.round(num * d) / d );

}

rounding([3.14159265387932384626433832795, 2]);
rounding([10.5, 3]);