let endsWith = (str, ends) => new RegExp(ends.replace(/([.?\/\\,!+*])/m, (all, g1) => '\\'+g1)+'$').test(str);
//let endsWith = (str, ends) => new RegExp(ends+'$').test(str); //problem with '?' in ends

console.log(endsWith('This sentence ends with fun?','fun?'));
console.log();
console.log(endsWith('This is Houston, we have…', 'We have…'));
console.log();
console.log(endsWith('The new iPhone has no headphones jack.', 'o headphones jack.'));