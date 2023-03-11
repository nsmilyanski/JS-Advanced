
function addItem() {
    let inputText = document.getElementById("newItemText").value;

    let element = document.getElementById("items");

    let liEl = document.createElement("li");

    let aRef = document.createElement("a");
    aRef.textContent = "[Delete]";

    liEl.textContent = inputText;
    aRef.addEventListener('click', function () {
        let ul = document.getElementById("items");
        let parent =  aRef.parentElement;

        ul.removeChild(parent);
    });

    liEl.appendChild(aRef);

    element.appendChild(liEl);

}
