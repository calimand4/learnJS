const n = 7;
const list = [];

for (let i = 1; i <= n; i++) {
const esteExponent = Math.pow(2, i) ;

if (esteExponent) {
    list.push(esteExponent);
}
}
console.log(list);