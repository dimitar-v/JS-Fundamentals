function dnaHelix(len) {
    let seq = 'ATCGTTAGGG';

    for (let i = 0; i < len; i++) {
        let ch1 = seq[i*2%10 ];
        let ch2 = seq[i*2%10 + 1];
        printDNA(ch1,ch2,i%4);
    }

    function printDNA(ch1, ch2, rol) {
        switch (rol){
            case 0: return console.log(`**${ch1}${ch2}**`);
            case 1:
            case 3: return console.log(`*${ch1}--${ch2}*`);
            case 2: return console.log(`${ch1}----${ch2}`);

        }
    }
}

dnaHelix(4);
console.log();
dnaHelix(10);