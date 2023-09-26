const a = 234;
const b = Math.floor(a / 100);
const c = Math.floor(a % 10);
const d = Math.floor (a / 10);
const e = d % 10;
const X =  b + c + e;
const Y =  b * c * e;

console.log(X , Y);