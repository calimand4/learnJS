const A = 2;
const D = 2;
const N = 10;
const list = []

for (let i = 0; i < N; i++) {
    const prog = A * (Math.pow(D, i));
    
    if (prog) {
        list.push(prog);
    }
    }
    console.log(list);