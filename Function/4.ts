function RingS(R1, R2) {
    if (R1 <= R2) {
      // Verifica daca R1 e mai mare ca R2
      return "Invalid input: R1 trebuie sa fie mai mare ca R2";
    }
    
    const pi = 3.14;
  
    // Calculeaza aria cercurilor
    const area1 = pi * R1 * R1;
    const area2 = pi * R2 * R2;
  
    // Calculeaza aria inelului din subscragerea cercului mai mic din cercul mai mare
    const ringArea = area1 - area2;
  
    return ringArea;
  }
  console.log(RingS(4, 3));