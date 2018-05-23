function insideVolume() {
    let arrLen = arguments[0].length;
    if( arrLen % 3 !== 0)
        return console.log('error');

    for (let i = 0; i < arrLen; i += 3){
        let point = {x:arguments[0][i], y:arguments[0][i+1], z:arguments[0][i+2]};
        console.log(inVolume(point.x, point.y, point.z));
    }

    function inVolume(x, y, z) {
        let parallelepiped = {xMin: 10, xMax: 50, yMin: 20, yMax: 80, zMin: 15, zMax: 50};

        if (x >= parallelepiped.xMin && x <= parallelepiped.xMax
            && y >= parallelepiped.yMin && y <= parallelepiped.yMax
            && z >= parallelepiped.zMin && z <= parallelepiped.zMax)
            return 'inside';

        return 'outside';
    }

}

insideVolume([8, 20, 22]);
console.log();
insideVolume([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]);