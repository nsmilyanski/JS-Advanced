function lastKNumbers(n, k) {
    let array = [];
    array.push(1);

    let currentValue = 0;
    for (let i = 1; i < n; i++) {
        let l  = (i - k) < 0 ? 0 : i - k; 
      
            for (let j = l ; j < i; j++) {
                currentValue += Number(array[j]);
                
            }
      
        array.push(currentValue);
        currentValue = 0;
       
        
    }

    console.log(array);
}

lastKNumbers(8, 2);