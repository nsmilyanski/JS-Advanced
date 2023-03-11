function attachEventsListeners() {
    document.getElementById("convert").addEventListener('click', convert)

 function convert() {
    let value = document.querySelector("#inputUnits").selectedOptions[0].value;

    let input = document.getElementById("inputDistance");

    let toConvertString = document.querySelector("#outputUnits").selectedOptions[0].value;

    let result = document.getElementById("outputDistance");

    let inputValue = Number(input.value);
   
    let toMettersNum = toMetters(value, inputValue);

    let toConvertNumber = toConvert(toMettersNum, toConvertString);

    result.value = toConvertNumber;
   
    function toMetters(value, inputValue) {
        switch(value) {
            case 'km':
                return inputValue * 1000;
            case 'm':
                return inputValue;
            case 'cm':
                return inputValue / 100;
            case 'mm':
                return inputValue / 1000;
            case 'mi':
                return inputValue * 1609.34;
            case 'yrd':
                return inputValue * 0.9144;
            case 'ft':
                return inputValue * 0.3048;
            case 'in':
                return inputValue * 0.0254;
         }
     }

     function toConvert(num, to) {
        switch(to) {
            case 'km':
                return num / 1000;
            case 'm':
                return num;
            case 'cm':
                return num * 100;
            case 'mm':
                return num * 1000;
            case 'mi':
                return num / 1609.34;
            case 'yrd':
                return num / 0.9144;
            case 'ft':
                return num / 0.3048;
            case 'in':
                return num / 0.0254;
         }
     }

 }


}