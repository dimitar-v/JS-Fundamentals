function distanceBetweenPoints(x1, y1, x2, y2) {
    let point1 = {x:x1, y:y1};
    let point2 = {x:x2, y:y2};
    let distanceX = (point1.x - point2.x)**2;
    let distanceY = (point1.y - point2.y)**2;
    console.log(Math.sqrt(distanceX + distanceY));
}

//distanceBetweenPoints(2, 4, 5, 0);

//distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985)