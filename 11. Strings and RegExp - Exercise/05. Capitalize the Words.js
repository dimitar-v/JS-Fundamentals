// version 1
//let capitalizeWords = (str) => str.toLowerCase().split(' ').map(e => e[0].toUpperCase()+ e.slice(1) ).join(' ');

// version 2
let capitalizeWords = (str) => str.toLowerCase().replace(/\b([A-z])/g, (all, g1) => g1.toUpperCase());

console.log(capitalizeWords('Capitalize these words'));
console.log();
console.log(capitalizeWords('Was that Easy? tRY thIs onE for SiZe!'));