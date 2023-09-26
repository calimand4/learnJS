const simbol = "C";

const response = (simbol.charCodeAt(0) - 1);
const response1 = String.fromCharCode(response);
const response2 = (simbol.charCodeAt(0) + 1);
const response3 = String.fromCharCode(response2);

console.log(response1, ' ' , response3);