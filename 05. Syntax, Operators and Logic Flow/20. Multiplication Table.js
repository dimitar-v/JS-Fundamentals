function multiplicationTable(num) {
    let html = '<table border="1">\n';
    let temp = 'x';
    for (let i = 0; i <= num; i++) {
        html += '  <tr>';
        for (let j = 0; j <= num; j++) {
            if (j == 0)
                html += `<th>${temp}</th>`;
            else if (i == 0)
               html += `<th>${j}</th>`;
            else
                html += `<td>${i * j}</td>`;
        }
        temp = i+1;
        html += '</tr>\n';
    }
    return html + '</table>';
}

multiplicationTable(5);