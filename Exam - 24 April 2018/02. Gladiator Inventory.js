// version 1
//function gladiatorInventory(arr) {
//    let inventory = arr.shift().split(' ');
//
//    arr.forEach(a => {
//        [command, item, upgrade] = a.split(/ |-/);
//        switch (command) {
//            case 'Buy':
//                if (!inventory.includes(item))
//                    inventory.push(item);
//                break;
//            case 'Trash':{
//                let itemIndex = inventory.indexOf(item);
//                if(itemIndex > -1)
//                    inventory.splice(itemIndex,1);
//                break;}
//            case 'Repair':{
//                let itemIndex = inventory.indexOf(item);
//                if(itemIndex > -1)
//                    inventory.push((inventory.splice(itemIndex,1))[0]);
//                break;}
//            case 'Upgrade':{
//                let itemIndex = inventory.indexOf(item);
//                if(itemIndex > -1)
//                    inventory.splice(itemIndex + 1, 0, item + ':' + upgrade);
//                break;}
//            case 'Fight!':
//                console.log(inventory.join(' '));
//                break;
//        }
//    });
//}

// version 2
function gladiatorInventory(arr) {
    let inventory = arr.shift().split(' ');
    let commands = {
        'Buy': (item) => inventory.includes(item)
            || inventory.push(item),
        'Trash': (item) => {
            let index = inventory.indexOf(item);
            index === -1 || inventory.splice(index,1)
        },
        'Repair': (item) => {
            let index = inventory.indexOf(item);
            index === -1 || inventory.push(inventory.splice(index,1)[0])
        },
        'Upgrade': (item, upgrade) => {
            let index = inventory.indexOf(item);
            index === -1 || inventory.splice(index+1, 0, item +':'+ upgrade)
        },
        'Fight!': () => console.log(inventory.join(' '))
    };

    arr.forEach(a => {
        [command, item, upgrade] = a.split(/ |-/);
        commands[command](item, upgrade);
    });
}

gladiatorInventory([ 'SWORD Shield Spear',
                        'Buy Bag',
                        'Trash Shield',
                        'Repair Spear',
                        'Upgrade SWORD-Steel',
                        'Fight!']);
console.log();
gladiatorInventory([ 'SWORD Shield Spear',
                        'Trash Bow',
                        'Repair Shield',
                        'Upgrade Helmet-V',
                        'Fight!']);