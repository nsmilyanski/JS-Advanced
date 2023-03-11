function toggle() {
   
    let buttonName = document.querySelector(".button");

    let extra = document.querySelector("#extra");
    
    switch (buttonName.textContent) {
        case 'More': 
        extra.style.display = "block";
        buttonName.textContent = 'Less';
        break;
        case 'Less': 
        buttonName.textContent = 'More';
        extra.style.display = 'none';
        break;
    }
}