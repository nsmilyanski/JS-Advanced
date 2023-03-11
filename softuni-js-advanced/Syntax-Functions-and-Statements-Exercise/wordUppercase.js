function wordUppercase(input) {
   let  newString = String(input).replace(',', '')
    newString = newString.replace('?', '')
    newString = newString.replace('!', '')
    newString = newString.split(RegExp(' '));


    let sb = String('');
    for (let i = 0; i < newString.length; i++) {

        if(i < newString.length - 1) {
            sb += newString[i].toUpperCase() + ', ';
        }else {
            sb += newString[i].toUpperCase();
        }
       
    }

    console.log(sb);

}


wordUppercase('hello');
wordUppercase('Hi, how are you?');