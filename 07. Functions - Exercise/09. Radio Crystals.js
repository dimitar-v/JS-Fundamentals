function radioCrystals(input) {
    let target = input[0];

    for (let i = 1; i < input.length; i++) {
        let newCrystal = input[i];
        console.log(`Processing chunk ${newCrystal} microns`);
        crystalProcessing(newCrystal, target);
    }
    
    function crystalProcessing(crystal, target) {
        let cut ={name:'Cut', value:0};
        let lap = {name:'Lap', value:0};
        let grind = {name:'Grind', value:0};
        let etch = {name:'Etch', value:0};
        let xray = {name:'X-ray', value:0};

        while (crystal !== target){
            if (lap.value === 0 && processing(crystal, cut) >= target-1){
                cut.value++;
                crystal = processing(crystal, cut);
                //console.log(crystal);
                continue;
            }

            if (grind.value ===0 && processing(crystal, lap) >= target-1){
                if (lap.value === 0)
                    crystal = Math.floor(crystal);
                lap.value++;
                crystal = processing(crystal, lap);
                //console.log(crystal);
                continue;
            }
            if (etch.value ===0 && processing(crystal, grind) >= target-1){
                if (grind.value === 0)
                    crystal = Math.floor(crystal);
                grind.value++;
                crystal = processing(crystal, grind);
                //console.log(crystal);
                continue;
            }

            if (processing(crystal, etch) >= target-1){
                if (grind.value === 0 && etch.value ===0)
                    crystal = Math.floor(crystal);
                etch.value++;
                crystal = processing(crystal, etch);
                //console.log(crystal);
                continue
            }

            if (processing(crystal, xray) === target){
                if (grind.value === 0 && etch.value ===0)
                    crystal = Math.floor(crystal);
                xray.value++;
                crystal = processing(crystal, xray);
                //console.log(crystal);
            }
        }

        print(cut);
        print(lap);
        print(grind);
        print(etch);
        if (xray.value != 0)
            console.log('X-ray x' + xray.value);
        console.log(`Finished crystal ${crystal} microns`);

        function print(process) {
            if (process.value != 0)
                console.log(`${process.name} x${process.value}\nTransporting and washing`);
        }

        function processing(crystal, process) {
            switch (process.name) {
                case 'Cut': return crystal*0.25;
                case 'Lap': return crystal*0.8;
                case 'Grind': return crystal-20;
                case 'Etch': return crystal-2;
                case 'X-ray': return crystal+1;
            }
        }
    }
}

radioCrystals([1375, 50000]);
console.log();
radioCrystals([1000, 4000, 8100]);