let emailValidation = (email) =>
    /^[a-zA-Z\d]+@[a-z]+(\.[a-z]+)+$/g.test(email)? 'Valid' : 'Invalid';

console.log(emailValidation('valid@email.bg'));
console.log();
console.log(emailValidation('invalid@emai1.bg'));