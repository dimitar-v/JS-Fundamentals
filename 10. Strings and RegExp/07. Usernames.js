// version 1
let usernameGenarator = (arr) => arr.map(e=>{
        let email = e.split('@');
        return (email[0]+'.'+email[1].split('.').map(e=>e[0]).join(''));
    }).join(', ');

// version 2
function username (arr){
    let user = /(\w+)@(\w)\w+/;
    let dom = /\.(\w)/g;
    let usernames = [];
    for (const a of arr) {
        let result = user.exec(a);
        let username = result[1]+'.'+result[2] + a.match(dom).map(e=>e[1]).join('');
        usernames.push(username);
    }
    return usernames.join(', ');
}

console.log(usernameGenarator(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']));
console.log();
console.log(username(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']));