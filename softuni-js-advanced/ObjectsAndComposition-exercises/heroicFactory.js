function heroicFactory(heroArray) {

    let result = [];

    for (const h of heroArray) {
        let heroes = h.split("/");
        let name = heroes[0];
        let level = heroes[1];
        let items = heroes[2].split(", ");

        result.push({name, level, items});

    }

    console.log(JSON.stringify(result));
}


heroicFactory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);

console.log("-------------");

console.log(heroicFactory(['Jake / 1000 / Gauss, HolidayGrenade']));