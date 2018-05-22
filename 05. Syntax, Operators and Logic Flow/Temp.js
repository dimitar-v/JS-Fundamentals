function calendar([day, month, year])
{
    let html = '<table>\n';
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    html += '  <tr>';
    for (let day of daysOfWeek) {
        html += `<th>${day}</th>`;
    }

    let newDay = 1;
    let position = (new Date(year, month-1, 1)).getDay();
    if ( position> 0){
        let firstDayOfPreviousMonth = new Date(year, month-1, 0 - position + 1);
        html += '</tr>\n  <tr>';
        for (firstDayOfPreviousMonth; firstDayOfPreviousMonth <= new Date(year, month-1, 0) ; firstDayOfPreviousMonth.setDate(firstDayOfPreviousMonth.getDate()+1)) {
            html += `<td class="prev-month">${firstDayOfPreviousMonth.getDate()}</td>`
        }
    }

    let lastDayOfMonth = (new Date(year, month, 0));
    for (; newDay <= lastDayOfMonth.getDate() ; newDay++ ) {
        if (position % 7 === 0)
            html += `</tr>\n  <tr>`;

        if (newDay == day)
            html += `<td class="today">${newDay}</td>`;
        else
            html += `<td>${newDay}</td>`;

        position++
    }

    let nextMonthDays = 1;
    lastDayOfMonth = lastDayOfMonth.getDay();
    while( lastDayOfMonth % 6 !== 0){
        html += `<td class="next-month">${nextMonthDays++}</td>`;
        lastDayOfMonth++;
    }

    return html + '</tr>\n </table>';
}

console.log(calendar([4, 9, 2016]));