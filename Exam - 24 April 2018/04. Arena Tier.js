// version 1 with Map() judge: 70/100
function arenaTier(arr) {
    let gladiatorPool = new Map();
    let gladiatorTotalSkill = new Map();

    for(let a of arr ){
        [a1, a2, skill] = a.split(/ -> | vs /g);
        if (a.includes(' -> '))
            addGladiatorSkill(a1, a2, skill);
        else if (a.includes(' vs '))
            gladiatorsFight(a1, a2);
        else //if (a === 'Ave Cesar')
            return printArena();
    }

    function addGladiatorSkill(gladiator, technique, skill) {
        skill = +skill;
        if (!gladiatorPool.has(gladiator)){
            gladiatorPool.set(gladiator, new Map());
            gladiatorTotalSkill.set(gladiator, 0);
        }
        if (!gladiatorPool.get(gladiator).has(technique)){
            gladiatorPool.get(gladiator).set(technique, skill);
            gladiatorTotalSkill.set(gladiator, gladiatorTotalSkill.get(gladiator) + skill)
        }else if (gladiatorPool.get(gladiator).get(technique) < skill) {
            gladiatorTotalSkill.set(gladiator, gladiatorTotalSkill.get(gladiator) - gladiatorPool.get(gladiator).get(technique) + skill);
            gladiatorPool.get(gladiator).set(technique, skill);
        }
    }

    function gladiatorsFight(gladiator1, gladiator2) {
        if (gladiatorPool.has(gladiator1) && gladiatorPool.has(gladiator2)){
            for (const [skill, technique] of gladiatorPool.get(gladiator1)) {
                if (gladiatorPool.get(gladiator2).has(technique)){
                   if(gladiatorPool.get(gladiator2).get(technique) > skill){
                       gladiatorPool.delete(gladiator1);
                       gladiatorTotalSkill.delete(gladiator1);
                       return;
                   } else {
                       gladiatorPool.delete(gladiator2);
                       gladiatorTotalSkill.delete(gladiator2);
                       return;
                   }
                }
            }
        }
    }

    function printArena() {
        let result = '';

        let orderGladiators = Array.from(gladiatorTotalSkill).sort((g1, g2) => g2[1] - g1[1] || g1[0].localeCompare(g2[0]));

        orderGladiators.forEach(g => {
            result += `${g[0]}: ${g[1]} skill\n`;
            let sortSkills = Array.from(gladiatorPool.get(g[0])).sort((g1, g2) => g2[1] - g1[1] || g1[0].localeCompare(g2[0]));
            sortSkills.forEach(s => result += `- ${s[0]} <!> ${s[1]}\n`);
        });

        return result;
    }
}


console.log(arenaTier([ 'Pesho -> BattleCry -> 400',
                        'Gosho -> PowerPunch -> 300',
                        'Stamat -> Duck -> 200',
                        'Stamat -> Tiger -> 250',
                        'Ave Cesar']));
console.log();
console.log(arenaTier([ 'Pesho -> Duck -> 400',
                        'Julius -> Shield -> 150',
                        'Gladius -> Heal -> 200',
                        'Gladius -> Support -> 250',
                        'Gladius -> Shield -> 250',
                        'Pesho vs Gladius',
                        'Gladius vs Julius',
                        'Gladius vs Gosho',
                        'Ave Cesar',
    'Julius -> Shield -> 150'
]));