let extraxtLinks = (arr) => {
    let result = arr.join(' ').match(/www\.[a-zA-Z0-9-]+(\.[a-z]+)+/g);
    return result ? result.join('\n') : '';
};

console.log(extraxtLinks(['Join WebStars now for free, at www.web-stars.com', 'You can also support our partners:', 'Internet - www.internet.com', 'WebSpiders - www.webspiders101.com', 'Sentinel - www.sentinel.-ko']));
console.log();
console.log(extraxtLinks(['']));
console.log();
console.log(extraxtLinks(['Need information about cheap hotels in London?', 'You can check us at www.london-hotels.co.uk!', 'We provide the best services in London.', 'Here are some reviews in some blogs:', '"London Hotels are awesome!" - www.indigo.bloggers.com', '"I am very satisfied with their services" - ww.ivan.bg', '"Best Hotel Services!" - www.rebel21.sedecrem.moc']));