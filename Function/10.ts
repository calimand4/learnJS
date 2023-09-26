function IsSquare(K) {
    const sqrt = Math.sqrt(K);
    return Number.isInteger(sqrt);
}
let count = 0;
[1, 4, 9, 16, 25, 36, 49, 64, 81, 100].forEach((numar) => {
    const isSquare = IsSquare(numar)
    if (isSquare === true) {
        count += 1;
    }
})
console.log(count);