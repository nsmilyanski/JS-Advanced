function townPopulation(array) {

    let townsObj = {};

    for (const town of array) {
        let currentArr = town.split(" <-> ")
        if( townsObj[currentArr[0]] !== null &&  townsObj[currentArr[0]] !== undefined) {
            townsObj[currentArr[0]] += Number(currentArr[1]);
        }else {
            townsObj[currentArr[0]] = Number(currentArr[1]);
        }
        
    }

    for (const e of Object.entries(townsObj)) {
        console.log(`${e[0]} : ${e[1]}`);
    }
}


townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);

console.log('-------------');

townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);