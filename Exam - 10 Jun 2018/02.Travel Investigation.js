function travelInvestigation(arr) {
    let companies = arr.shift().split(arr.shift());
    let validSentences = [];
    let invalidSentences = [];

    for (let a of arr) {
        a = a.toLowerCase();
        for (const c of companies) {
            let tempCompanies = companies.slice();
            if (a.indexOf(c) !== -1){
                tempCompanies.splice(tempCompanies.indexOf(c),1);
                for (const tc of tempCompanies) {
                    if (a.indexOf(tc) !== -1){
                        tempCompanies.splice(tempCompanies.indexOf(tc),1);
                        if (a.indexOf(tempCompanies[0]) !== -1) {
                            validSentences.push(a);
                            break;
                        }
                    }
                }
                if (validSentences.indexOf(a) !== -1)
                    break;
            }
        }
        if (validSentences.indexOf(a) === -1)
            invalidSentences.push(a);
    }
    let result = '';
    if (validSentences.length !==0 && invalidSentences.length !==0){
        result = 'ValidSentences\n';
        for (let i = 0; i < validSentences.length; i++) {
            result += `${i+1}. ${validSentences[i]}\n`;
        }
        result += '='.repeat(30) + '\n';
        result += 'InvalidSentences\n';
        for (let i = 0; i < invalidSentences.length; i++) {
            result += `${i+1}. ${invalidSentences[i]}\n`;
        }
    } else if (validSentences.length !==0){
        result = 'ValidSentences\n';
        for (let i = 0; i < validSentences.length; i++) {
            result += `${i+1}. ${validSentences[i]}\n`;
        }
    } else {
        result += 'InvalidSentences\n';
        for (let i = 0; i < invalidSentences.length; i++) {
            result += `${i+1}. ${invalidSentences[i]}\n`;
        }
    }
    return result;
}

//console.log(travelInvestigation(["bulgariatour@, minkatrans@, koftipochivkaltd",
//    "@, ",
//    "Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
//    "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
//    "someone continues as no "]
//));
//console.log();
console.log(travelInvestigation(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@, ",
    "Mincho  e KoftiPockivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
    "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]
));
