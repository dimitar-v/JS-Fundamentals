function roadRadar([speed, zone]) {
    let speedOver = speedOverLimit(zone, speed);
    console.log(infraction(speedOver));

    function speedOverLimit(zone, speed) {
        switch (zone){
            case 'residential': return speed - 20;
            case 'city': return speed - 50;
            case 'interstate': return speed - 90;
            case 'motorway': return speed - 130;
        }
    }

    function infraction(speedOver) {
        if (speedOver <= 0)
            return '';
        if (speedOver <= 20)
            return 'speeding';
        if (speedOver <= 40)
            return 'excessive speeding ';

        return 'reckless driving';
    }
}

roadRadar([40, 'city']);
console.log();
roadRadar([21, 'residential']);
console.log();
roadRadar([120, 'interstate']);
console.log();
roadRadar([200, 'motorway']);

