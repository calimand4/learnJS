const string = "123456";
let sum = 0;
for (let i = 0; i < string.length; i++ ){
    const num = parseInt(string[i], 10);
    sum += num ;
} 

console.log(sum);
