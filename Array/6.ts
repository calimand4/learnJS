const A = 1;
const B = 2;
const N = 10;
const list = [A, B]

function sum(listArray) {
    let respons = 0;
    for (let i = 0; i < listArray.length; i = i + 1) {
        respons = respons + listArray[i];
    }
    return respons;
}

for (let i = 2; i < N; i = i + 1) {
    const prog = sum(list);

    if (prog) {
        list.push(prog);
    }
}
console.log(list);