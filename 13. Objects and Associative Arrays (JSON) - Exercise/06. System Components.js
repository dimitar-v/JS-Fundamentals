function systemComponents(arr) {
    let systemComp = new Map();

    arr.forEach(row => {
        [system, comp, subComp] = row.split(/\s*\|\s*/);
        if (!systemComp.has(system))
            systemComp.set(system, new Map());
        if (!systemComp.get(system).has(comp))
            systemComp.get(system).set(comp, []);
        systemComp.get(system).get(comp).push(subComp);
    });
    let systems = Array.from(systemComp.keys())
        .sort((a,b)=> systemComp.get(b).size - systemComp.get(a).size || a.localeCompare(b));

    let result = '';
    systems.forEach(s => {
        result += s + '\n';
        let comps;
        systemComp.get(s).forEach((subComp, comp) => comps = Array.from(systemComp.get(s).keys())
                .sort((a,b) => systemComp.get(s).get(b).length - systemComp.get(s).get(a).length || a.localeCompare(b)));

        comps.forEach(c => {
            result += `|||${c}\n`;
            systemComp.get(s).get(c).forEach(sc => result += `||||||${sc}\n`);
        });
    });

    return result;
}

console.log(systemComponents(['SULS | Main Site | Home Page',
                              'SULS | Main Site | Login Page',
                              'SULS | Main Site | Register Page',
                              'SULS | Judge Site | Login Page',
                              'SULS | Judge Site | Submittion Page',
                              'Lambda | CoreA | A23',
                              'SULS | Digital Site | Login Page',
                              'Lambda | CoreB | B24',
                              'Lambda | CoreA | A24',
                              'Lambda | CoreA | A25',
                              'Lambda | CoreC | C4',
                              'Indice | Session | Default Storage',
                              'Indice | Session | Default Security',]));