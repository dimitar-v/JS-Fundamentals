// version 1
//function captureNums(arr){
//    let result = [];
//    let regex = /\d+/g;
//    arr.forEach(a=>{
//        let t;
//        while (t = regex.exec(a))
//            result.push(t);
//    });
//
//    return result.join(' ');
//}

// version 2
let captureNums = (arr) => arr.join(' ').match(/\d+/g).join(' ');

console.log(captureNums(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']));
console.log();
console.log(captureNums(['123a456', '789b987', '654c321', '0']));
console.log();
console.log(captureNums(['Let’s go11!!!11!', 'Okey!1!']));