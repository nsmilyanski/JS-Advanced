function toJson(array) {
    let [town, latitude, longitude] = array[0].replaceAll("|", ",").split(/[ ,]+/).filter(Boolean);

    let result = [];


    for (let i = 1; i < array.length; i++) {
        let [t, l, l1] = array[i].replaceAll("|", ",").split(/[ ,]+/).filter(Boolean);

        let townObj = {};
        townObj[town] = t;
        townObj[latitude] = Number(l).toFixed(2);
        townObj[longitude] = Number(l1).toFixed(2);;

        result.push(townObj);
    }

    console.log(JSON.stringify(result));
}


toJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)

console.log("-------------");

toJson(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
);