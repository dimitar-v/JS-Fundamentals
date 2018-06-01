//v1
 let sortArray = (arr) => arr
         .sort()
         .sort((a, b) => a.length>b.length)
         .join('\n');


// v2
// function sortArray(arr) {
//     return arr.sort(compare).join('\n');
//
//     function compare(a, b) {
//         if (a.length !== b.length)
//             return a.length - b.length;
//         else {
//             if (a.toLowerCase() < b.toLowerCase())
//                 return -1;
//             if (a.toLowerCase() > b.toLowerCase())
//                 return 1;
//             return 0;
//         }
//     }
// }

console.log(sortArray(['alpha', 'beta', 'gamma']));
console.log();
console.log(sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));
console.log();
console.log(sortArray(['test', 'Deny', 'omen', 'Default']));