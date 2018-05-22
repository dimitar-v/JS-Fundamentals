function moviePrice([t, d]) {
    let title = t.toLowerCase();
    let day = d.toLowerCase();
    let output = 'error';
    switch (title){
        case 'the godfather':
            switch (day){
                case 'monday':
                    output = 12;
                    break;
                case 'tuesday':
                    output = 10;
                    break;
                case 'wednesday':
                case 'friday':
                    output = 15;
                    break;
                case 'thursday':
                    output = 12.50;
                    break;
                case 'saturday':
                    output = 25;
                    break;
                case 'sunday':
                    output = 30;
                    break;
            }
            break;
        case 'schindler\'s list':
            switch (day){
                case 'monday':
                case 'tuesday':
                case 'wednesday':
                case 'thursday':
                case 'friday':
                    output = 8.50;
                    break;
                case 'saturday':
                case 'sunday':
                    output = 15;
                    break;
            }
            break;
        case 'casablanca':
            switch (day){
                case 'monday':
                case 'tuesday':
                case 'wednesday':
                case 'thursday':
                case 'friday':
                    output = 8;
                    break;
                case 'saturday':
                case 'sunday':
                    output = 10;
                    break;
            }
            break;
        case 'the wizard of oz':
            switch (day){
                case 'monday':
                case 'tuesday':
                case 'wednesday':
                case 'thursday':
                case 'friday':
                    output = 10;
                    break;
                case 'saturday':
                case 'sunday':
                    output = 15;
                    break;
            }
            break;
    }
    console.log(output);
}

moviePrice(['The Godfather', 'Friday']);
moviePrice(['casablanca', 'sunday']);
moviePrice(['Schindler\'s LIST', 'monday']);
moviePrice(['SoftUni', 'Nineday']);