function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      
      let elements = document.querySelector(".container tbody").children;

      let input = document.getElementById("searchField").value;

      if(input === "") {
         for (const e of elements) {
            e.classList.remove('select');
         }
         return;
      }

      for (let e of elements) {
         e.classList.remove('select');
         for (let a of e.children) {
            if(a.textContent.includes(input)) {
              e.className = 'select';
            }
         }
      }

   }
}