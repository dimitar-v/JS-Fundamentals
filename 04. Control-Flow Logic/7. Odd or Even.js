function oddOrEven(num) {
    let res = num % 2;
    if (res === 0)
        console.log('even');
    else if (res === 1)
        console.log('odd');
    else
        console.log('invalid');
}

oddOrEven(5);
oddOrEven(8);
oddOrEven(1.5);