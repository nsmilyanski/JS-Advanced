function cooking(...elements) {
    let firstElement = Number(elements[0]);

    for (let i = 1; i < elements.length; i++) {
        let current = elements[i];
        switch(current) {
            case 'chop': firstElement /= 2; break;
            case 'dice': firstElement = Math.sqrt(firstElement); break;
            case 'spice': firstElement += 1; break;
            case 'bake': firstElement *= 3; break;
            case 'fillet': firstElement = firstElement - (firstElement * (20 / 100)); break;
        }
        console.log(firstElement);
    }

}


cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');