function Quarter(x, y) {

        if ((x > 0) && (y > 0)) {
            return "x si y se includ in cadranul I";
        }
        if ((x < 0) && (y > 0)) {
            return "x si y se includ in cadranul II";
        }
        if ((x < 0) && (y < 0)) {
            return "x si y se includ in cadranul III";
        }
        if ((x > 0) && (y < 0)) {
            return "x si y se includ in cadranul IV";
        }
}
console.log(Quarter(3, 3));





