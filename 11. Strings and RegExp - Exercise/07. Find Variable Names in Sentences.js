let extractVariebleNames = (str) => str.match(/\b_([a-zA-Z0-9]+)\b/g)
    .map(e => e.slice(1))
    .join(',');


console.log(extractVariebleNames('The _id and _age variables are both integers.'));
console.log();
console.log(extractVariebleNames('Calculate the _area of the _perfectRectangle object.'));
console.log();
console.log(extractVariebleNames('__invalidVariable _evenMoreInvalidVariable_ _validVariable'));