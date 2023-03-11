function length(...input)  {
    let fullLength = 0;

    input.forEach(e => fullLength += e.length)
    console.log(fullLength)
    console.log(Math.floor(fullLength / input.length))
}

length('chocolate', 'ice cream', 'cake');