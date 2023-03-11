function addItem() {
    let inputText = document.getElementById("newItemText").value;

    let element = document.getElementById("items");

    let liEl = document.createElement("li");

    liEl.textContent = inputText;

    element.appendChild(liEl);
}