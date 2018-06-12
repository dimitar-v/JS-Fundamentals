function solve(arr) {
    [startIndex, endIndex, replace, str] = arr;
    let country = /\b[A-Z][a-z]+[A-Z]\b/.exec(str)[0];

    let part = [...country].splice(startIndex,endIndex-startIndex+1,[...replace]).join('');
    country = country.replace(part, replace);
    let char = country[country.length - 1].toLowerCase();
    country = country.replace(/[A-Z]\b/, char);

    let city = str.match(/([0-9.]{3,})/gm).map(e => String.fromCharCode(Math.ceil(+e))).join('');
    char = city[0].toUpperCase();
    city = city.replace(/\b[a-z]/, char);
    return country + ' => ' + city;
}

console.log(solve(["3", "5", "gar","114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"]));
console.log();
console.log(solve(["1", "4","loveni", "SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"]));
