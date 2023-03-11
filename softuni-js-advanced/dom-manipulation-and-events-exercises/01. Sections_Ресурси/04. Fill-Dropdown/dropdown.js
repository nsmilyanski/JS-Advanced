function addItem() {
    let menu = document.getElementById("menu");

    let textItem = document.getElementById("newItemText").value;
    let value = document.getElementById("newItemValue").value;

    let option = document.createElement('option');

    option.textContent = textItem;
    option.value = value

    menu.appendChild(option);

    document.getElementById("newItemText").value = '';
    document.getElementById("newItemValue").value = '';

}