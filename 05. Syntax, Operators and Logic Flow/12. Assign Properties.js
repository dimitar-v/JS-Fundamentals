function assignProperties([firstKey, firstValue, secondKet, secondValue, therdKey, therdValue]){
    let object = new Object();
    object[firstKey] = firstValue;
    object[secondKet] = secondValue;
    object[therdKey] = therdValue;

    console.log(object);
}

assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);
assignProperties(['ssid', '90127461', 'status', 'admin', 'expires', '600']);