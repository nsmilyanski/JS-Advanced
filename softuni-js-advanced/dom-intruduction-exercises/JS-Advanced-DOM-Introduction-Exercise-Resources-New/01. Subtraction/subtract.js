function subtract() {
   let a = document.getElementById("firstNumber");
   let b = document.getElementById("secondNumber");

   let result = document.getElementById("result");

   result.textContent = Number(a.value) - Number(b.value);
}