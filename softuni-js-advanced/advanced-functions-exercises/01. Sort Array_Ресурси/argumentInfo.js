function createInfo(...arguments) {
    let result = {};

    for (const element of arguments) {
        let current  = String((typeof element));
        console.log(`${current}: ${element}`);

        if(!result.hasOwnProperty(current)) {
            result[current] = 0;
        }

        result[current] = Number(result[current]) + 1;
    }

    for (const [key, value] of Object.entries(result)) {
        console.log(`${key} = ${value}`)
    }
}

createInfo('cat', 42, function () { console.log('Hello world!'); })