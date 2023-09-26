function TriangleP(a, h){
    const b = Math.sqrt((Math.pow((a / 2) , 2) + h * h)) ;
    const P = (a + b + b);
    return P;
}
const a1 = 6;
const h1 = 7;
const P1 = TriangleP(a1, h1);
console.log(P1);

const a2 = 4;
const h2 = 6;
const P2 = TriangleP(a2, h2);
console.log(P2);

const a3 = 3;
const h3 = 9;
const P3 = TriangleP(a3, h3);
console.log(P3);