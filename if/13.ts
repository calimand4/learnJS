const a = 1;
const b = 2;
const c = 4;

if ((c < a) && (a < b)) {
    x = a;
} else
    if ((a < b) && (b < c)) {
        x = b;
    } else
        if ((a < c) && (c < b)) {
            x = c;
        }
console.log(x);