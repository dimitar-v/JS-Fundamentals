function templateQA() {
    let html = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n';
    for (let i = 0; i < arguments[0].length; i++) {
        let question = arguments[0][i];
        let answer = arguments[0][++i];
        html += addQuestionAnswer(question,answer);
    }
    html += '</quiz>';
    console.log(html);
    
    function addQuestionAnswer(question, answer) {
        return `  <question>\n    ${question}\n  </question>\n  <answer>\n    ${answer}\n  </answer>\n`
    }
}

templateQA(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]);
console.log();
templateQA(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]);
