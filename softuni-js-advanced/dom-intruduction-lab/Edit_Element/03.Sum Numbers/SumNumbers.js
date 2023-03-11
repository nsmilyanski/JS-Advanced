function calc() {
   let a = document.getElementById('num1');
   let b = document.getElementById('num2');

   a = Number(a.value);
   b = Number(b.value);

   let sum = document.getElementById('sum');

   sum.value = a + b;
}
