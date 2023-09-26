const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

for (let i = 0; i < matrix.length; i += 2) {
    console.log (i + 1);
    for (let j = 0; j < matrix.length; j = j + 1) {
            console.table(matrix[j][i])
        }

    }
