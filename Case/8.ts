let D = 29;
let M = 2;

switch (M) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        if (31 === D) {
            D = 1;
            M = M + 1;
        } else {
            D = D + 1;
        }
        break;
    case 2:
        if (29 === D) {
            D = 1;
            M = M + 1;
        } else {
            D = D + 1;
        }
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        if (30 === D) {
            D = 1;
            M = M + 1;
        } else {
            D = D + 1;
        }
        break;
}
console.log(D, M);