function gradsToRadians(num){
    let grad = num % 400;
    if (grad < 0){
        grad += 400;
    }
    console.log(grad * 0.9);
}

gradsToRadians(100);
gradsToRadians(400);
gradsToRadians(850);
gradsToRadians(-50);