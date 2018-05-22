function triangleOfStars(num) {
    for (let i = 0; i < num;)
        console.log('*'.repeat(++i));

    for (let i = num; i > 0; )
        console.log('*'.repeat(--i));
}

triangleOfStars(1);
console.log();
triangleOfStars(2);
console.log();
triangleOfStars(4);
console.log();
triangleOfStars(5);