const n = 10;
let list = [];

for (let i = 1; i <= n; i = i + 1) {
    const estePar = i % 2 === 0;

    if (estePar) {
        list.push(i);
    }
}
list = list.reverse();
console.log(list);