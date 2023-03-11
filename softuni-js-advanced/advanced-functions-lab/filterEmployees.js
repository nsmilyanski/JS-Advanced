function filterEmployee(jsonArray, criteria) {
    jsonArray = JSON.parse(jsonArray);

    let counter = 0;
    if(criteria === 'all') {
        jsonArray.forEach(e => {
            console.log(`${counter}. ${e.first_name} ${e.last_name} - ${e.email}`);
            counter++;
        });
    } else {
        const arrCriteria = criteria.split("-");
        jsonArray.filter(e => e[`${arrCriteria[0]}`] === arrCriteria[1])
        .forEach(e => {
            console.log(`${counter}. ${e.first_name} ${e.last_name} - ${e.email}`);
            counter++;
        });
    }

}

filterEmployee(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'
);

console.log('-----------');

filterEmployee(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'

);