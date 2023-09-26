const K = 2;
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

for (let i = 0; i < matrix[K].length; i++) {
    for (let j = 0; j < matrix[K].length; j++) {
        if (j === K) {
            console.log(matrix[i][j]);
        }
    }
}