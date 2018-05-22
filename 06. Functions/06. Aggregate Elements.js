function aggregateElements() {
    let sum = (a,b)=>a+b;
    aggregate(arguments[0],0,sum);
    aggregate(arguments[0],0,(a,b)=>a+1/b);
    aggregate(arguments[0],'',sum);

    function aggregate(arr,initValue,func) {
        for (let i = 0; i < arr.length; i++)
            initValue = func(initValue, arr[i]);

        console.log(initValue);
    }
}

aggregateElements([10,20,30]);
console.log();
aggregateElements([2,4,8,16]);