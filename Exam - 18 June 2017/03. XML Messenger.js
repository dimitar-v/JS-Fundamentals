function convertMessageToHtml(message) {
    let messageRegex = /^<message\s+(([a-z]+=\"[A-Za-z0-9.\s]+\"\s*)+)>((?:.|\n)+?)<\/message>$/gm;
    let matches = messageRegex.exec(message);

    if (matches){
        let recipient = /\bto=\"([A-Za-z0-9.\s]+)\"/.exec(matches[1]);
        let sender = /\bfrom=\"([A-Za-z0-9.\s]+)\"/.exec(matches[1]);

        if (recipient && sender ){
            message = matches[3];
            let result = '<article>\n';
            result +=    `  <div>From: <span class="sender">${sender[1]}</span></div>\n`;
            result +=    `  <div>To: <span class="recipient">${recipient[1]}</span></div>\n`;
            result +=    '  <div>\n';
            result +=    `    <p>${message.replace(/\n/g,'</p>\n    <p>')}</p>\n`;
            return result + '  </div>\n</article>\n';
        }
        else
            return 'Missing attributes';
    }
    else
        return 'Invalid message format';
}

console.log(convertMessageToHtml('<message to="Bob" from="Alice" timestamp="1497254092">Hey man, what\'s up?</message>'));
console.log();
console.log(convertMessageToHtml('<message from="John Doe" to="Alice">Not much, just chillin. How about you?</message>'));
console.log();
console.log(convertMessageToHtml('<message from="Alice" timestamp="1497254112">Same old, same old</message>'));
console.log();
console.log(convertMessageToHtml('<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old\nLet\'s go out for a beer</message>'));
console.log();
console.log(convertMessageToHtml('<message to="Alice" from="Charlie"><img src="fox.jpg"/></message><meta version="2"/>'));
console.log();
console.log(convertMessageToHtml('<message from="Hillary" to="Edward" secret:true>VGhpcyBpcyBhIHRlc3Q</message>'));
console.log();
console.log(convertMessageToHtml('<message from="Pedro" to="Zaira" topic="Prxima Centauri discoveries">We have detected a distortion in the light patterns of Proxima Centauri.\nIt\'s likely this is a new rocky planet of approximately Earth-mass.\nThis is very exciting news!\nSincerely, Pedro Amado</message>'));
