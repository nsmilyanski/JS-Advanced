function lockedProfile() {
   let buttons =  Array.from(document.querySelectorAll("button"));

   for (const b of buttons) {
    b.addEventListener("click", onClick);
   }

   function onClick(e) {
    if(e.target.parentElement.children[2].checked) {
        return;
    }

    let buttonType = e.target.textContent;
    
    if(buttonType === 'Show more') {
        e.target.parentElement.children[9].style.display = 'block';
        e.target.textContent = 'Hide it';
    } else {
        e.target.parentElement.children[9].style.display = 'none';
        e.target.textContent = 'Show more';
    }

 

   }


}