// version 1
function decoding(arr) {
    arr = arr.join(' ').split('32656 19759 32763 0 ').filter(e => e[0]>0);
    let result = '';

    arr.forEach((a) =>{
        [charCount, str] = a.split(' 0 ');
        str.split(' ').forEach(s => result += String.fromCharCode(s));
        result += '\n';
    });

    return result;
}

// version 2 judge: 80/100
//function decoding(arr) {
//    let result = '';
//    result += arr.join(' ')
//        .replace(/32656 19759 32763 0 (\d) 0 ((\d{1,3} )+)/g,
//            (all, num, str) => str.split(' ')
//                .slice(0, num)
//                .map(e => String.fromCharCode(e))
//                .join('') + '\n')
//        .split(/0| /g).filter(e => e != '');
//    return result;
//}

console.log(decoding(['32656 19759 32763 0 5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 0 0',
                      '0 32656 19759 32763 0 7 0 83 111 102 116 117 110 105 0 0 0 0 0 0 0 0']));
console.log();
console.log(decoding(['0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0',
                      '5 0 71 111 115 104 111 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 4 0',
                      '75 105 114 111 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 8 0 86 101',
                      '114 111 110 105 107 97 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0']));