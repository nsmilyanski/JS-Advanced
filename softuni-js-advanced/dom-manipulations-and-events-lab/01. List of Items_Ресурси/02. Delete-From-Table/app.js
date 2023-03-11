function deleteByEmail() {
    let input = document.getElementsByName("email")[0].value;
    
    let array = Array.from(document.querySelectorAll("td"));

    let parent = document.querySelectorAll("td")[0].parentElement.parentElement;

    let result = document.getElementById("result");
    result.textContent = '';

    let counter = 0;

    for (const element of array) {
        if(element.textContent.includes("@") && element.textContent === input) {
            parent.removeChild(element.parentElement);
            counter++;
        }
        
    }

    if (counter === 0) {
        result.textContent = "error";
    }else {
        result.textContent = "Deleted.";
    }

}