function SumRange(A, B){
if (A > B) {
    return 0;
}
}
const A = 30;
const B = 50;
const C = 70;
let S = 0
  for (let i = A; i <= B; i = i + 1 ) {
    S += i;
  }
  console.log(S);

let S1 = 0;
  for (let i = B; i <= C; i = i + 1 ) {
    S1 += i;
  }
  console.log(S1);