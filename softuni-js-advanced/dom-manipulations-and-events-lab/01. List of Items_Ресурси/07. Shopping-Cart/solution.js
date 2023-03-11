function solve() {
  let array = Array.from(document.querySelectorAll(".add-product")).forEach(element => {
   element.addEventListener("click",onClick);
});

let result = [];
let resultString = 'You bought ';
let totalPrice = 0;

function onClick(e) {
   let parent = e.target.parentNode.parentNode;
   let textC = parent.children[1].children[0].textContent
   let price = Number(parent.children[3].textContent);

   totalPrice += price;

   resultString += textC + ' ';

   result.push(`Added ${textC} for ${price} to the cart.`);
}

resultString += 'for ' + totalPrice;

}