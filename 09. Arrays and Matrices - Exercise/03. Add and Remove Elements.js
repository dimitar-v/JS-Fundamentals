function addAndRemoveElements(comands) {
    let result = [];
    for (let i = 0; i < comands.length; i++) {
        switch (comands[i]){
            case 'add': result.push(i+1);break;
            case 'remove': result.pop();break;
        }
    }
    return result.length == 0 ? 'Empty': result.join('\n');
}

console.log(addAndRemoveElements(['add', 'add', 'add', 'add']));
console.log();
console.log(addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']));
console.log();
console.log(addAndRemoveElements(['remove', 'remove', 'remove']));
