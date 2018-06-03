let expressionSplit = (str) => str.split(/[\s\(\)\.,;]/).filter(e=> e!='').join('\n');

console.log(expressionSplit('let sum = 4 * 4,b = "wow";'));
console.log();
console.log(expressionSplit('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}'));