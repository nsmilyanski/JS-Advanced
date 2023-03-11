function addAndRemove(array) {

    let counter = 0;

    let arr = [];

   for (const command of array) {
    counter++;
    if(command === 'add') {
        arr.push(counter);
    }else {
            arr.pop();
    }
   }
   if(arr.length === 0) {
    console.log("Empty")
    return;
   }

   console.log(arr.join("\n"))
}

addAndRemove(['add', 
'add', 
'add', 
'add']
);

console.log("-----------")

addAndRemove(['add', 
'add', 
'remove', 
'add', 
'add']
);

console.log("-----------");

addAndRemove(['remove', 
'remove', 
'remove']
)