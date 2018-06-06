function jsonToHtmlTable(arr) {
    String.prototype.htmlEscape = function () {
        return this.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
    };

    let html = '<table>\n';
    arr.forEach(row => {
        row = JSON.parse(row);
        html += `\t<tr>\n\t\t<td>${row['name'].htmlEscape()}</td>
		<td>${row['position'].htmlEscape()}</td>
		<td>${+row['salary']}</td>\n\t<tr>\n`;
    });
    return html + '</table>';
}

console.log(jsonToHtmlTable([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
]));