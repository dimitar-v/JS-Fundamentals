// version 1
//function usernameSort(arr) {
//    let usernames = new Set();
//
//    arr.forEach(a => usernames.add(a));
//
//    return [...usernames].sort((a,b) => a.length - b.length || a.localeCompare(b)).join('\n');
//}

// version 2
//let usernameSort = (arr) => arr.sort((a,b) => a.length - b.length || a.localeCompare(b))
//        .filter((item, pos, ary) => !pos || item != ary[pos-1])
//        .join('\n');

// version 3 this is like version 1 but in one line
let usernameSort = (arr) => [...new Set(arr)].sort((a,b) => a.length - b.length || a.localeCompare(b))
    .join('\n');


console.log(usernameSort(['Ashton',
                           'Kutcher',
                           'Ariel',
                           'Lilly',
                           'Keyden',
                           'Aizen',
                           'Billy',
                           'Braston']));
console.log();
console.log(usernameSort([ 'Denise',
                            'Ignatius',
                            'Iris',
                            'Isacc',
                            'Indie',
                            'Dean',
                            'Donatello',
                            'Enfuego',
                            'Benjamin',
                            'Biser',
                            'Bounty',
                            'Renard',
                            'Rot']));