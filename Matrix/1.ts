const M = 3;
const N = 3;

const matrix = [];
for (let i = 0; i < M; i = i + 1) {
  const list = [];

  for (let j = 0; j < N; j = j + 1) {
    if (i === 0) {
      list.push(10 * j);
    } else {
      list.push(1);
    }
  }

  matrix.push(list);
}

console.table((matrix));