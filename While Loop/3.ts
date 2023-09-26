let N = 16;
const K = 3;
let sum = 0;

while (K < N) {
    N = N - K;
    sum = sum + 1;
  }
  console.log(sum , N); 