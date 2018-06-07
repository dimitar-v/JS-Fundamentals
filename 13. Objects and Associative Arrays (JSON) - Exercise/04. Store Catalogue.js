// varaint 1
function storeCatalogue(arr) {
    let productPrice = new Map();

    arr.sort().forEach(a => {
        [product, price] = a.split(' : ');
        productPrice.set(product, +price);
    });

    let result = '';
    let l = '';
    productPrice.forEach((price, product) => {
        if (l !== product[0]) {
            l = product[0];
            result += `${l}\n  ${product}: ${productPrice.get(product)}\n`
        } else
            result += `  ${product}: ${productPrice.get(product)}\n`
    });
    return result;
}

// variant 2 cheet ;)
//function storeCatalogue(arr) {
//    let leter = '';
//    let result = '';
//    arr = arr.sort().forEach(a=>{
//        a = a.split(' :').join(':');
//        if (leter  !== a[0]){
//            leter = a[0];
//            result += `${leter}\n  ${a}\n`;
//        }else
//            result += `  ${a}\n` ;
//    });
//
//    return result
//}

console.log(storeCatalogue(['Appricot : 20.4',
                            'Fridge : 1500',
                            'TV : 1499',
                            'Deodorant : 10',
                            'Boiler : 300',
                            'Apple : 1.25',
                            'Anti-Bug Spray : 15',
                            'T-Shirt : 10']));
console.log();
console.log(storeCatalogue(["Banana : 2",
                            "Rubic's Cube : 5",
                            "Raspberry P : 4999",
                            "Rolex : 100000",
                            "Rollon : 10",
                            "Rali Car : 2000000",
                            "Pesho : 0.000001",
                            "Barrel : 10"]));