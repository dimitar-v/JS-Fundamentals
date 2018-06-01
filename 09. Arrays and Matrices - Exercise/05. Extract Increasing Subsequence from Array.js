function increasinSubsequence(arr) {
    let result =[arr[0]];

    for (let i = 1; i < arr.length; i++)
        if (arr[i] >= result[result.length-1])
            result.push(arr[i]);

    return result.join('\n');
}

console.log(increasinSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log();
console.log(increasinSubsequence([1, 2, 3, 4]));
console.log();
console.log(increasinSubsequence([20, 3, 2, 15, 6, 1]));
