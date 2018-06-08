function usernamesSort(arr) {
    let usernames = new Set();

    arr.forEach(a => usernames.add(a));

    return [...usernames].sort((a,b) => a.length - b.length || a.localeCompare(b)).join('\n');
}

console.log(usernamesSort(['Ashton',
                           'Kutcher',
                           'Ariel',
                           'Lilly',
                           'Keyden',
                           'Aizen',
                           'Billy',
                           'Braston']));
console.log();
console.log(usernamesSort([ 'Denise',
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