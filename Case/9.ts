let D = 1;
let M = 4;

switch (M) {
    case 1:
        if  ((D === 1) && (M === 1)){
            D = 31;
            M = 12;
        }
        break;
    case 3:
        if  ((D === 1) && (M === 3)){
            D = 29;
            M = M - 1;
        }
        break;
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        if (D === 1) {
            D = 30;
            M = M - 1;
        } else {
            D = D - 1;
        }
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        if (D === 1) {
            D = 30;
            M = M - 1;
        } else {
            D = D - 1;
        }
        break;
    case 2:
        if (D === 1) {
            D = 31;
            M = M - 1;
        } else {
            D = D - 1;
        }
        break;
}
console.log(D, M);