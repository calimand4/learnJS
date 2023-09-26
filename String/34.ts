let S = "Tractoras";
let S0 = "ra";


if (S.includes(S0)) {
    S = S.split("").reverse().join("");
    S0 = S0.split("").reverse().join("");
    let response = S.replace(S0, "  ");
    
    response = response.split("").reverse().join("");
    console.log(response);
} else {
    console.log(S);
}







