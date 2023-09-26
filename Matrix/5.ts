const M = 3;
const N = 3;
const D = 5;
const initialList = [7, 8, 9];
const matrix = [];

for (let j = 0; j < N; j++){
    const list = [];
    for (let i = 0; i < M; i++){
        list.push(initialList[j] + i * D);
    }
    matrix.push(list);
}
console.table(matrix);