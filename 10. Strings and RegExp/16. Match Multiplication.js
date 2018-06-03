let calculaeBill = (str) => str.replace(/(-?\d+)\s*\*\s*(-?\d+[.\d]+)/g, (all, g1, g2) => +g1 * +g2);

console.log(calculaeBill('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).'));