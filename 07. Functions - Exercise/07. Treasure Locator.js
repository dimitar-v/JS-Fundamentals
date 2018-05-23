function treasureLocator() {

    for (let i = 0; i < arguments[0].length; i += 2){
        let treasure = {x:arguments[0][i], y:arguments[0][i+1]};
        treasureOnMap(treasure);
    }

    function treasureOnMap(treasure) {
        let islands = [{name:'Tuvalu', x1:1, y1:1, x2:3, y2:3},
            {name:'Tokelau', x1:8, y1:0, x2:9, y2:1},
            {name:'Samoa', x1:5, y1:3, x2:7, y2:6},
            {name:'Tonga', x1:0, y1:6, x2:2, y2:8},
            {name:'Cook', x1:4, y1:7, x2:9, y2:8}];

        for (let island of islands) {
            let location = onTheIsland(treasure,island);
            if (location)
                return console.log(location);
        }
        console.log('On the bottom of the ocean')
    }

    function onTheIsland(treasure, island) {
        if (treasure.x >= island.x1 && treasure.x <= island.x2
            && treasure.y >= island.y1 && treasure.y <= island.y2)
            return island.name;
        return false;
    }
}

treasureLocator([4, 2, 1.5, 6.5, 1, 3]);
console.log();
treasureLocator([6, 4]);