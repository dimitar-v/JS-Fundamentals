function palindrome(str) {
    // return str == str.split('').reverse().join('');

    //=================================

    let len = str.length;
    for (let i = 0; i < len/2; i++)
        if (str[i] !== str[len-1-i])
            return false;
    return true;
}

console.log(palindrome('haha'));
console.log();
console.log(palindrome('racecar'));
console.log();
console.log(palindrome('unitinu'));