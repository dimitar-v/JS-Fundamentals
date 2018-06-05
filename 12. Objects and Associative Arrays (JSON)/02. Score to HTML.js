function scoreToHTML(json) {
    String.prototype.htmlEscape = function () {
        return this.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
    };

    let html = '<table>\n  <tr><th>name</th><th>score</th></tr>\n';
    let arr = JSON.parse(json);
    for (const obj of arr) {
        html += `   <tr><td>${obj['name'].htmlEscape()}</td><td>${obj['score']}</td></tr>\n`;
    }
    return html + '</table>'
}

console.log(scoreToHTML('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]'));
console.log();
console.log(scoreToHTML('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]'));