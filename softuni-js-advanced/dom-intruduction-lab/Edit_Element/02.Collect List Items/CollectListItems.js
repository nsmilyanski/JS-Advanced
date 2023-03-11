function extractText() {
   let elements = document.querySelectorAll('ul#items li');

   let selector = document.querySelector('#result');
   
   for (const e of elements) {
    selector.value += e.textContent + '\n';
   }
}