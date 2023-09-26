const a = 5;
const b = 9;
const c = 4;

if ((c > a) && (a < b)) {
    x = a;
} else if ((a > b) && (b < c)) {
    x = b;
} else if ((a > c) && (c < b)) {
    x = c;
}


if ((c < a) && (a > b)) {
    y = a;
} else if ((a < b) && (b > c)) {
    y = b;
} else if ((a < c) && (c > b)) {
    y = c;
}



console.log(x, y);