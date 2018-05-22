function isLeapYar(year) {
    if ((year % 4 === 0 && year % 100 !== 0 ) || (year % 400 === 0))
        console.log('yes');
    else
        console.log('no');
}

isLeapYar(1999);
isLeapYar(2000);
isLeapYar(1900);