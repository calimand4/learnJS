const C = "ш";
const response = C.charCodeAt(0);

if (((response >= 65) && (response <= 90)) || (response >= 97) && (response <= 122)) {
    console.log("lat");
}

if ((response >= 48) && (response <= 57)) {
    console.log("digit");
}

if ((response >= 1040) && (response <= 1103)) {
    console.log("rus");
}