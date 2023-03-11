function getDivisor(a, b) {
    if (!b) {
      return a;
    }
  
    return getDivisor(b, a % b);
  }


getDivisor(2154, 458)



