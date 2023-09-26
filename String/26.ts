const N = 5;
const S = "Motomax";

function text(S, N) {
    if (S.length > N) {
        S = S.slice(S.length - N);
    } else if (S.length < N) {
        const dotsToAdd = N - S.length;
        S = '.'.repeat(dotsToAdd) + S;
    }
    return S;
}


const text1 = text(S, N);
console.log(text1);