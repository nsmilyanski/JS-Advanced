function validate() {
    let emailElement = document.getElementById("email");

    emailElement.addEventListener('change', onChange);

    function onChange(e) {
        const inputValue = e.target;

        debugger;

        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/g;

        if(!inputValue.value.match(pattern)) {
            inputValue.classList.add('error');
        }else {
            inputValue.classList.remove("error");
        }
    }
}