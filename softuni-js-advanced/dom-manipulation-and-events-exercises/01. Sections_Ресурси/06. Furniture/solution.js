function solve() {
  let body = document.querySelector('tbody');

  document.querySelectorAll("button")[0].addEventListener('click', generate);
  document.querySelectorAll("button")[1].addEventListener('click', calculate);

  document.querySelectorAll("tbody tr")[0].children[4].children[0].disabled = false;

 

  function generate() {
    let inputArr =  document.getElementById("exercise").children[1].value;

    let json = JSON.parse(inputArr);


    for (const obj of json) {
      let tr = document.createElement('tr');
  
      let tdImg = document.createElement('td');
      let tdName = document.createElement('td');
      let tdPrice = document.createElement('td');
      let tdDecFactor = document.createElement('td');
      let tdInput = document.createElement("td");
  
      let imagElement = document.createElement("img");
  
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      let input = document.createElement("input");
  
  
      let img = obj.img;
      let name = obj.name;
      let price = obj.price;
      let decFactor = obj.decFactor;
  
      imagElement.src = img;
      p1.textContent = name;
      p2.textContent = price;
      p3.textContent = decFactor;
      input.type = 'checkbox';
      input.disabled = false;
  
      tdImg.appendChild(imagElement);
      tdName.appendChild(p1);
      tdPrice.appendChild(p2);
      tdDecFactor.appendChild(p3);
      tdInput.appendChild(input);
  
      tr.appendChild(tdImg);
      tr.appendChild(tdName);
      tr.appendChild(tdPrice);
      tr.appendChild(tdDecFactor);
      tr.appendChild(tdInput);
  
      body.appendChild(tr);

      
    }
  }

  function calculate() {
    let trArray = Array.from(document.querySelector("tbody").children);

    let textArea = document.querySelectorAll("textarea")[1];

    let productList = [];
    let totalPrice = 0;
    let averageDecorationFactor = 0;

    for (const tr of trArray) {
      if(tr.children[4].children[0].checked = true) {
        productList.push(tr.children[1].children[0].textContent);
        totalPrice += Number(tr.children[2].children[0].textContent);
        averageDecorationFactor += Number(tr.children[3].children[0].textContent)
      }
    }

    averageDecorationFactor = Number(averageDecorationFactor / trArray.length).toFixed(2);

    textArea.value = `Bought furniture: ${productList.join(", ")} \n` + `Total price: ${Number(totalPrice).toFixed(2)} \n` + `Average decoration factor: ${averageDecorationFactor}`

   

  }
}