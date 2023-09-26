const string = "Un pahar cu vin !";

const cuvinte = string.split(" ");

cuvinte.splice(0 , 1);
cuvinte.splice(cuvinte.length - 1 , 1);
const response = cuvinte.join(" "); 
console.log(response);






