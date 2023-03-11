
document.querySelector("#gradient").addEventListener('mouseover', attachGradientEvents);

function attachGradientEvents(event) {
    if(event == undefined) {
        return;
    }
    let r = document.getElementById("result");
    
    let gradient = document.querySelector("#gradient");

    let width = gradient.offsetWidth;

    let t  =  event.offsetX;

    let result = (t / width) * 100;

    r.textContent =Math.floor(result) + ' %';
}