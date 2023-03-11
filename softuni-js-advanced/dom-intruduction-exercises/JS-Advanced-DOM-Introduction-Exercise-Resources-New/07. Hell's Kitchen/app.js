function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
     let arr = Array.from(JSON.parse(document.querySelector("#inputs textarea").value));

     let bestResturant = document.querySelector("#bestRestaurant p");

     let bestResturantWorkers = document.querySelector("#workers p");

     let result = {};

     for (let a of arr) {
      let [resturantName, w] = a.split(" - ");

      let workersArray = w.split(", ");

      workersArray = workersArray.map(e => {
         let [name, salary] = e.split(" ");

         salary = Number(salary);

         return {
            name, 
            salary
         }
      });

      let avSalary = 0;

      let counter = 0;

      workersArray.forEach(element => {
         counter++;
         avSalary += element.salary;
      });

      avSalary = avSalary / counter;


      let bestSalary = workersArray.sort((a, b) => b.salary - a.salary);

     
     
      if (Object.keys(result).length == 0) {
         result = {resturantName, averageSelary: avSalary, bestSalary: Number(bestSalary[0].salary), workers: workersArray};
      } else {
         let as = 0;
         result.workers.forEach(e => {
            as += e.salary;
         });
       
         as = as / result.workers.length;

         if (avSalary > as) {
            result = {resturantName, averageSelary: avSalary, bestSalary: Number(bestSalary[0].salary), workers: workersArray};
         }

      }
     }
     let entrySetOfResult = Object.entries(result);

     bestResturant.textContent = `Name: ${result['resturantName']} Average Salary: ${(result.averageSelary).toFixed(2)} Best Salary: ${(result.bestSalary).toFixed(2)}`

     let sb = '';

     for (const worker of result.workers) {
      let workerObj  = worker;
      sb += `Name: ${workerObj['name']} With Slalary: ${workerObj['salary']} `
     }
     sb.trim();

     bestResturantWorkers.textContent = sb;


   
   }
}