const M = 3;
const N = 4;

const matrix = [];
for (let i = 0; i < M; i = i + 1) {
    const list = [];

    for (let j = 0; j < N; j = j + 1) {
        list.push(j * 5);
    }
    matrix.push(list);
}

console.table(matrix);