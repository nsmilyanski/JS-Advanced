function search() {
   let arrOfTowns = document.getElementById("towns").children;

   let result = document.getElementById("result");

   let content = document.getElementById("searchText").value;

   let count = 0;
   for (const town of arrOfTowns) {
      town.style.textDecoration = "none";
      town.style['font-weight'] = "normal";
      if(town.textContent.includes(content)) {
         town.style.textDecoration = "underline";
         town.style['font-weight'] = "bold";
         count++;
      } 
   }

   result.textContent = `${count} matches found`;
}
