function encodeAndDecodeMessages() {
    let allButtons = Array.from(document.querySelectorAll("button"));

    allButtons[0].addEventListener('click', encode);
    allButtons[1].addEventListener('click', decode);




    function encode() {
        let input = document.getElementById("main").children[0].children[1];

       let value = input.value;

       let result = '';

       for (let i = 0; i < value.length; i++) {
        let assciCode = String(value).charCodeAt(i);

        result += String.fromCharCode(assciCode + 1);
       }

       input.value = '';

       let input2 = document.getElementById("main").children[1].children[1];

       input2.value = result;

    }

    function decode() {
        let input = document.getElementById("main").children[1].children[1];

        let value = input.value;

        let result = '';

        for (let i = 0; i < value.length; i++) {
            let assciCode = String(value).charCodeAt(i);
    
            result += String.fromCharCode(assciCode  - 1);
           }

           input.value = result;
    
    }
}