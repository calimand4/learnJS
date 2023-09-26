const string = "BIMBIM bambam";
let result = "";

for (let i = 0; i < string.length; i++) {
    const text = string[i];
    if (text === text.toLowerCase()) {
        result += text.toUpperCase();

    } else {
        result += text.toLowerCase();
    }
}

console.log(result);