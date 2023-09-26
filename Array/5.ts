const F1 = 1;
const F2 = 1;
const K = 10;
const list = [F1, F2]

// function sum(listArray) {
//     let Fk = 0;
//     for (let i = 0; i < listArray.length; i = i + 1) {
//         Fk = Fk + listArray[i];
//     }
//     return Fk;
// }

for (let i = 3; i < K; i = i + 1) {
    const Fi = F1 * (i - 2) + F2 * (i - 1);

    if (Fi) {
        list.push(Fi);
    }
}
console.log(list);