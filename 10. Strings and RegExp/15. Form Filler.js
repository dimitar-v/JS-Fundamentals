function formFiller(username,email,phone,arr) {
    arr.map(line => console.log(line.replace(/<![a-zA-Z]+!>/, username)
        .replace(/<@[a-zA-Z]+@>/, email)
        .replace(/<\+[a-zA-Z]+\+>/, phone)));
}

console.log(formFiller('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']));
console.log();
console.log(formFiller());