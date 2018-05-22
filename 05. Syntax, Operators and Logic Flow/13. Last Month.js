function lastDayOfPreviosMonth([day, month, year]) {
    let date = new Date(year, month-1, 0);
    console.log(date.getDate());
}

lastDayOfPreviosMonth([17, 3, 2002]);
lastDayOfPreviosMonth([13, 12, 2004]);