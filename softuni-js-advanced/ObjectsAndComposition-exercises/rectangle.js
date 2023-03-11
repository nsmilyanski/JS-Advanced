function rectangle(w, h, color) {
    let result = {};
    result.width = w;
    result.height = h;
    result.color = color;
    result.calcArea = function() {
        return w * h;
    }

    return result;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
