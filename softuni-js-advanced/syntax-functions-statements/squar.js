function square(num) {
    let sb = '';
    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
       sb += ' * ';
      }
      sb += '\n';
        
    }
    console.log(sb)
}

square(10)