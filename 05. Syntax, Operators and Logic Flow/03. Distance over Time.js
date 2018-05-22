function distanceOverTime([v1, v2, t]) {
    console.log(Math.abs(v1 - v2) * t / 3.6 );
}

distanceOverTime([0, 60, 3600]);
distanceOverTime([11, 10, 120]);
distanceOverTime([5, -5, 40]);