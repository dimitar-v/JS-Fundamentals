function dnaHelix(len) {

    let seq = 'ATCGTTAGGG';

    for (let i = 0; i < len; i++) {
        let ch1 = seq[i*2%10 ];
        let ch2 = seq[i*2%10 + 1];
        if (i%2 == 1)
            printDNA(ch1,ch2,2);
        else if (i%4 ==0)
            printDNA(ch1,ch2,1);
        else
            printDNA(ch1,ch2,3);


    }

    function printDNA(ch1, ch2, rol) {
        switch (rol){
            case 1: return console.log(`**${ch1}${ch2}**`);
            case 2: return console.log(`*${ch1}--${ch2}*`);
            case 3: return console.log(`${ch1}----${ch2}`);
        }
    }
}

dnaHelix(4);
console.log();
dnaHelix(10);