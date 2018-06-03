function restaurantBill(arr) {
    let order = [];
    let total = 0;
    arr.forEach((e,i)=> i%2==0? order.push(e) : total+= +e);
    return `You purchased ${order.join(', ')} for a total sum of ${total}`;
 }

console.log(restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']));
console.log();
console.log(restaurantBill(['Cola', '1.35', 'Pancakes', '2.88']));