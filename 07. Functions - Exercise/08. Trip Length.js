function tripLength([x1, y1, x2, y2, x3, y3]) {
    let point1 = {x:x1, y:y1};
    let point2 = {x:x2, y:y2};
    let point3 = {x:x3, y:y3};

    let dist12 = distance(point1,point2);
    let dist23 = distance(point2,point3);
    let dist13 = distance(point1,point3);

    let minTrip = Math.min(dist12 + dist23, dist23 + dist13, dist13 + dist12);

    if (minTrip == dist12 + dist23)
        return `1->2->3: ${minTrip}`;
    if (minTrip == dist13 + dist23)
        return `1->3->2: ${minTrip}`;
    if (minTrip == dist12 + dist13)
        return `2->1->3: ${minTrip}`;

    function distance(p1, p2){
        return Math.sqrt((p1.x - p2.x)**2 + (p1.y - p2.y)**2)
    }
}

console.log(tripLength([0, 0, 2, 0, 4, 0]));;
console.log();
console.log(tripLength([5, 1, 1, 1, 5, 4]));;
console.log();
console.log(tripLength([-1, -2, 3.5, 0, 0, 2]));;