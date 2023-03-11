
function solve() {
    document.querySelector('button').addEventListener('click', onClick);

    function onClick() {

        let number = Number(document.getElementById("input").value);

        let value = document.getElementById("selectMenuTo").value;

        let output = document.getElementById("result");

        let result = '';
        switch(value) {
            case 'hexadecimal' : 
            result = number.toString(16);
            break;
            case 'binary' :
            result = number.toString(2);
            break;
        }

        output.value = result;

    }
}