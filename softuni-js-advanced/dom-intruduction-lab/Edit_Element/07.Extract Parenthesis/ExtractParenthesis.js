function extract(content) {
    console.log(content)
    let element = document.getElementById(content).textContent;
    console.log(element)
    let pattern = /\(([^)]+)\)/g;
    let result = [];

    let match = pattern.exec(element);

    while(match) {
        result.push(match[1]);

        match = pattern.exec(element);
    }

    return result.join('; ');

}