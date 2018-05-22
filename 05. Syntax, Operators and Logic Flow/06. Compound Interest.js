function compoundInterest([principal, interestPercent, n, t]) {
    let total = principal * (1 + (interestPercent / 100) / (12/n)) ** ((12/n)*t);
    console.log(total.toFixed(2));
}

// principal - сума (главница)
// interestPercent - годишен лихвен процент
// n - падеж в месеци (кога се олихвява)
// t - период на влога

compoundInterest([1500, 4.3, 3, 6]);
compoundInterest([100000, 5, 12, 25]);