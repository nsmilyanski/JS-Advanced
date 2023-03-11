function create(words) {
   let result = document.getElementById("content");
   for (const word of words) {
     let divE = document.createElement("div");
     let p = document.createElement("p");

     p.textContent = word;
     p.style.display = 'none';

     divE.appendChild(p);
     divE.addEventListener('click', onClick);
     result.appendChild(divE);
      
   }

   function onClick(e) {
      e.target.children[0].style.display = 'block';
   }
}