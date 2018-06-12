function travelPlans(arr) {
    let specialized = ['Programming', 'Hardware maintenance', 'Cooking', 'Translating', 'Designing'];
    let average = ['Driving', 'Managing', 'Fishing', 'Gardening'];
    let clumsy =['Singing', 'Accounting', 'Teaching', 'Exam-Making', 'Acting', 'Writing', 'Lecturing', 'Modeling', 'Nursing'];
    let totalGold = 0;
    let specCounter = 0;
    let clumsyCounter = 0;

    for (let i = 0; i < arr.length; i++) {
        [professions , goldOffert] = arr[i].split(' : ');
        goldOffert = +goldOffert;
        if (specialized.includes(professions)){
            if(goldOffert < 200)
                continue;

            specCounter++;
            goldOffert *= 0.8;
            totalGold += goldOffert;

            if(specCounter%2 ===0)
                totalGold += 200;
        } else  if (average.includes(professions)) {
            totalGold += goldOffert;
        } else  if (clumsy.includes(professions)) {
            clumsyCounter++;
            if (clumsyCounter%2 ===0){
                goldOffert *= 0.95;
                totalGold += goldOffert;
            } else if (clumsyCounter%3 === 0){
                goldOffert *= 0.9;
                totalGold += goldOffert;
            } else
                totalGold += goldOffert;
        }
    }

    let result = `Final sum: ${totalGold.toFixed(2)}\n`;
    if (totalGold >= 1000)
        result += `Mariyka earned ${(totalGold - 1000).toFixed(2)} gold more.`;
    else
        result += `Mariyka need to earn ${(1000 - totalGold).toFixed(2)} gold more to continue in the next task.`;

    return result;
}

console.log(travelPlans(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"]));
console.log();
console.log(travelPlans(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199", "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"]));