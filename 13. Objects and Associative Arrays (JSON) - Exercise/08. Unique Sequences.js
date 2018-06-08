function uniqueSequences(arr) {
    let result = [];
    arr.forEach(a =>{
        a = JSON.parse(a)
            .map(Number)
            .sort((a,b)=>b-a);

        let isUnique = true;
        result.forEach(r => !isDiffArr(a,r) ? isUnique = false : '');
        if (isUnique)
            result.push(a);
    });

    let res = '';
    result.sort((a,b)=> a.length - b.length)
        .forEach(a => res += '[' + a.join(', ') + ']\n');

    return res;

    function isDiffArr(arr1, arr2) {
        if (arr1.size!==arr2.size)
            return true;
        for (const i in arr1) {
            if (arr1[i]!==arr2[i])
                return true;
        }
        return false;
    }
}

console.log(uniqueSequences(['[-3, -2, -1, 0, 1, 2, 3, 4]',
                             '[10, 1, -17, 0, 2, 13]',
                             '[4, -3, 3, -2, 2, -1, 1, 0]']));
console.log();
console.log(uniqueSequences(['[7.14, 7.180, 7.339, 80.099]',
                             '[7.339, 80.0990, 7.140000, 7.18]',
                             '[7.339, 7.180, 7.14, 80.099]']));