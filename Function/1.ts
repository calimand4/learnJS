function sign(X) {
   if (X < 0) {
      return -1;
   }
   if (X === 0) {
      return 0;
   }
   if (X > 0) {
      return 1;
   }
}
console.log(sign(1) + sign(-2))
console.log(sign(1));
console.log(sign(-2));