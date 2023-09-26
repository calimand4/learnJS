const n = 10;
const list = [];

for (let i = 1; i <= n; i = i + 1) {
    const esteImpar = i % 2 === 1;

    if (esteImpar) {
        list.push(i);
    }
}
console.log(list);