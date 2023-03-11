function generateReport() {
   let tableHeaders =  Array.from(document.querySelectorAll("th"));

   let rows = Array.from(document.querySelectorAll("tbody tr"));

   let output = document.getElementById("output");

   let checkedIndexes = [];

   let result = [];

   for (let i = 0; i < tableHeaders.length; i++) {
    if(tableHeaders[i].children[0].checked) {
        checkedIndexes.push(i);
    }
   }

   for (let i = 0; i < rows.length; i++) {
    let array = Array.from(rows[i].children);

    let obj = {};
       for (let j = 0; j < array.length; j++) {
        if(checkedIndexes.includes(j)) {
            obj[(tableHeaders[j].children[0].name)] = array[j].textContent;
        }

        
       }
       result.push(obj);
   }

   output.value = JSON.stringify(result);

}