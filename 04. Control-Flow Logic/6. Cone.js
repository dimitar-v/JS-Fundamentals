function cone(radius, height) {
    console.log('volume = ' + (1 / 3 * Math.PI * radius * radius * height));
    let side = Math.sqrt(radius * radius + height * height);
    console.log('area = ' + (Math.PI * radius * (side + radius)));
}

cone(3, 5);
cone(3.3, 7.8);