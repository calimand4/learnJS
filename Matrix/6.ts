const M = 3;
const N = 3;
const Q = 2;
const initialList = [7, 8, 9];
const matrix = [initialList];

for (let j = 1; j < N; j++){
    const list = [];
    for (let i = 0; i < M; i++){
        list.push(matrix[j - 1][i] * Q);
    }
    matrix.push(list);
}
console.table(matrix);