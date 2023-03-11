function solve() {
  let text = document.getElementById("text").value;

  let concention = document.getElementById("naming-convention").value;

  let result = document.querySelector(".result-container");

  result.textContent = "Result: ";

  switch (concention) {
    case 'Camel Case':
      let arr = text.split(" ");

      let newArr = arr.reduce((accumulator, current , index) => {
        if(index == 0 ) {
          current = String(current).toLowerCase();
          return[current];
        }else {
          current = String(current)[0].toUpperCase() + String(current).substring(1).toLowerCase();
          return[...accumulator, current];
        }
      }, []);

      result.textContent += newArr.join("");
      break;
      case 'Pascal Case':
        let arr1 = text.split(" ");

        let newArr1 = arr1.reduce((accumulator, current , index) => {
            current = String(current)[0].toUpperCase() + String(current).substring(1).toLowerCase();
            return[...accumulator, current];
        }, []);
  
        result.textContent += newArr1.join("");
        break;

  
    default: result.textContent += 'Error!';
      break;
  }
}