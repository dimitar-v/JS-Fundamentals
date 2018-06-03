function employeeData(arr) {
    let regex = /^([A-Z][A-Za-z]*) - ([1-9][0-9]*) - ([\w -]+)$/;
    let result = [];
    let match;
    for (const a of arr) {
        if (match = regex.exec(a))
            result.push(`Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]}`);
    }
    return result.join('\n')
}

console.log(employeeData(['Isacc - 1000 - CEO',
    'Ivan - 500 - Employee',
    'Peter - 500 - Employee']
));
console.log();
console.log(employeeData(['Jonathan - 2000 - Manager', 'Peter- 1000- Chuck', 'George - 1000 - Team Leader']));