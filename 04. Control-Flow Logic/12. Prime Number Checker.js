function isPrime(num) {
    let prime = true;
    let numSqrt = Math.sqrt(num);
    for (let i = 2; i < numSqrt; i++) {
        if (num % i == 0) {
            prime = false;
            break;
        }
    }

    console.log(prime && (num > 1));
}

isPrime(7);
isPrime(8);
isPrime(81);