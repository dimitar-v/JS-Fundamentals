function composerTag([fileLocation, alternateText]) {
    console.log(`<img src="${fileLocation}" alt="${alternateText}">`);
}

composerTag(['smiley.gif', 'Smiley Face']);