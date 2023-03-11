function radar(speed, zone) {
    let cityLimit = 50;
    let motorwayLimit = 130;
    let interstateLimit = 90;
    let residentialLimit  = 20;

    let currentSpeed = 0;
    let limit = 0;

    let status = '';

    switch(zone) {
        case 'city': currentSpeed = cityLimit - speed; limit = cityLimit; break;
        case 'motorway': currentSpeed = motorwayLimit - speed; limit = motorwayLimit; break;
        case 'interstate': currentSpeed = interstateLimit - speed; limit = interstateLimit; break;
        case 'residential': currentSpeed = residentialLimit - speed; limit = residentialLimit; break;
    }
    let a = Number(Math.abs(currentSpeed));
    
    switch(true) {
        case (a <= 20): status = 'speeding'; break;
        case (a <= 40): status = 'excessive speeding'; break;
        default:  status = 'reckless driving'; break;
    }

    if(currentSpeed > 0 ) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`)
    }else {
        console.log(`The speed is ${Math.abs(currentSpeed)} km/h faster than the allowed speed of ${limit} - ${status}`)
    } 
}

radar(200, 'motorway');

