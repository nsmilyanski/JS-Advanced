function largestNumber(...numbers) {
    numbers = numbers.map(n => n.toString()).sort((a, b) => (b + a) - (a + b));
    console.log(numbers.join(''))
  }


  largestNumber(3, 30, 34, 5, 9)
  