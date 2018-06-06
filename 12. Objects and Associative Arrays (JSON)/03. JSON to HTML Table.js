function jsonToHtmlTable(json) {
    String.prototype.htmlEscape = function () {
        return this.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
    };

    let html = '<table>\n   <tr>';
    let arr = JSON.parse(json);
    for (const key in arr[0])
        html += `<th>${(key + '').htmlEscape()}</th>`;

    html += '</tr>\n';

    for (const obj of arr){
        html += '   <tr>';
        for (const objKey in obj)
            html += `<td>${(obj[objKey]+'').htmlEscape()}</td>`;

        html += '</tr>\n';
    }

    return html + '</table>';
}

console.log(jsonToHtmlTable('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'));
console.log();
console.log(jsonToHtmlTable('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]'));