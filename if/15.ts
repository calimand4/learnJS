const a = 9;
const b = 11;
const c = 2;
let x = 0;
let y = 0;
if ((c < a) && (a < b)) {
    x = a;
} else if ((a < b) && (b < c)) {
        x = b;
    } else if ((a < c) && (c < b)) {
            x = c;
        }


        if ((c < a) && (a > b)) {
            y = a;
        } else if ((a < b) && (b > c)) {
            y = b;
        } else if ((a < c) && (c > b)) {
            y = c;
        }

const Z = x + y ;


console.log(Z);