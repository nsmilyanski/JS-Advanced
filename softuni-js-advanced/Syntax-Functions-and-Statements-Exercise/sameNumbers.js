function areTheSame(number) {
   let stringValue =  String(number);
    let n = Number(stringValue[0]);

    for (let i = 1; i < stringValue.length; i++) {
        if(n != Number(stringValue[i])) {
            console.log(false);
            return;
        }
        
    }
    console.log(true)
}

areTheSame(123123123);