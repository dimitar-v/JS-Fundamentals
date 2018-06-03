function htmlEscape(input) {
    String.prototype.htmlEscape = function () {
        return this.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
    };

    let html = '<ul>\n';
    for (const element of input) {
        html += `  <li>${element.htmlEscape()}</li>\n`
    }
    return html + '</ul>';
}

console.log(htmlEscape(['<b>unescaped text</b>', 'normal text']));
console.log();
console.log(htmlEscape(['<div style=\"color: red;\">Hello, Red!</div>', '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>']));