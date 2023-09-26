let S = "drive more cars more";
let S1 = "more";
let S2 = "cars";


S = S.split("").reverse().join("");
S1 = S1.split("").reverse().join("");
S2 = S2.split("").reverse().join("");


let response = S.replace(S1, S2);
response = response.split("").reverse().join("");
console.log(response);