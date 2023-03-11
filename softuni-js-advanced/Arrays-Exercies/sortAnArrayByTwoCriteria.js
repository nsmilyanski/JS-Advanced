function sort(array) {
    let sortedArray =  array.sort((a, b) => {
        let l = a.length - b.length;
        if(l === 0) {
            let aToLower = String(a).toLowerCase();
            let bToLower = String(b).toLowerCase();

            let asciCideOfA = Number(aToLower.charCodeAt(0));
            let asciCideOfB = Number(bToLower.charCodeAt(0));

            return asciCideOfA - asciCideOfB;
        }
        return l;
    });
    console.log(sortedArray.join("\n"))
}


// sort(['alpha', 
// 'beta', 
// 'gamma']
// );

// console.log("-------------");

// sort(['Isacc', 
// 'Theodor', 
// 'Jack', 
// 'Harrison', 
// 'George']
// );

// console.log("-------------");

sort(['test', 
'Deny', 
'omen', 
'Default']
);