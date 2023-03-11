function calculator() {
    let valu1;
    let valu2;
    let valu3;

    return {
        add: () => valu3.value = Number(valu1.value) + Number(valu2.value),
        subtract: () => valu3.value = Number(valu1.value) - Number(valu2.value),
        init: (a, b, c) => {valu1 =  document.querySelector(a), valu2 = document.querySelector(b), valu3 = document.querySelector(c) }
    }
    
}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 





