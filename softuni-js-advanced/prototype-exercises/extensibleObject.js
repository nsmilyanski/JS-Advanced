

function extensibleObject() { 
    let result = {};
    let objProto = Object.getPrototypeOf(result);

    result.extend = function (template) {
        for (const [key, value] of Object.entries(template)) {
            if (typeof value == "function") {
                objProto[key] = value;
            } else {
                result[key] = value;
            }
        }
    }
    return result;
} 
const myObj = extensibleObject(); 
    
const template = { 
    extensionMethod: function () {}, 
    extensionProperty: 'someString' 
} 
myObj.extend(template); 

for (const [key, value] of Object.entries(myObj)) {
    console.log("KEy: " + key + " " + "Value: " + value)
}
  
for (const key in myObj) {
    console.log(key)
}