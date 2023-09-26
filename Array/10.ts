const n = 10;
let listImpare = [];
let listPare = [];

for (let i = 1; i <= n; i = i + 1) {
    const estePar = i % 2 === 0;

    if (estePar) {
        listPare.push(i);
    } else {
        listImpare.push(i);
    }
}

listImpare = listImpare.reverse();
console.log(listPare.concat(listImpare));