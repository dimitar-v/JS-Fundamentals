function chessboard(num) {
    let html = '<div class="chessboard">\n';
    for (let i = 0; i < num; i++) {
        html += '  <div>\n';
        let color = i % 2 ? 'white' : 'black';
        for (let j = 0; j < num; j++) {
            html += `    <span class="${color}"></span>\n`
            color = color == 'black' ? 'white' : 'black';
        }
        html += '  </div>\n';
    }
    html += '</div>';

    return html;
}

console.log(chessboard(2));