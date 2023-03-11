function carFactory(carObject) {
    let result = {};
    
    result['model'] = carObject.model;

    let hp = 0;
    let v = 0;

    if(carObject.power <= 90) {
        hp = carObject.power
        v = 1800;
    }
    else if(carObject.power <= 120) {
        hp = carObject.model;
        v = 2400;
    }else {
        hp = carObject.model;
        v = 3500;
    }

    result['engine'] = {power: hp, volume: v}
    result['carriage'] = {type: carObject.carriage, color: carObject.color}

    let wheelsize = carObject.wheelsize % 2 === 0 ? carObject.wheelsize - 1 : carObject.wheelsize;

    result['wheels'] = [wheelsize, wheelsize, wheelsize, wheelsize];

    return result;
}

console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));

console.log('-----------------');

console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
));