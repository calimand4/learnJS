const M = 3;
const N = 3;
const initialList = [7, 8, 9];
const matrix = [];
 
for (let i = 0; i < M; i++) {
    const list = [];
    for (let j = 0; j < N; j++) {
        list.push(initialList[j]);
    }
    matrix.push(list);
}
console.table(matrix);