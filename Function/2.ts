function RootCount(A, B, C){
    const D = (Math.pow(B , 2) - (4 * A * C)) ;

    if (D > 0) {
        return "Doua radacini";
    }
    if (D === 0) {
        return "O radacina";
    }
    if (D < 0) {
        return "Eroare";
    }
console.log(D);
}
const A = 2;
const B = 4;
const C = 2;


console.log( RootCount(A, B, C));