const A = 2;
const D = 5;
const N = 10;
const list = []

for (let i = 0; i < N; i++) {
    const prog = A + i * D ;
    
    if (prog) {
        list.push(prog);
    }
    }
    console.log(list);