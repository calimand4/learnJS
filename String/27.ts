function String(N1, N2, S1, S2) {
    const result = S1.slice(0, N1) + S2.slice(-N2);
    return result;
  }
  
  const N1 = 3; 
  const N2 = 4; 
  const S1 = "Hello World";
  const S2 = "Hello World"; 
  
  const text = String(N1, N2, S1, S2);
  console.log(text);