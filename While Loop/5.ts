let x = 32;
let sum = 0;

while ((x % 2 === 0) && x >= 2) {
    x = x / 2;
    sum = sum + 1;
}

console.log(sum);
