function solve(arr, criteria) {
    const result = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for (let a of arr) {
        let b = a.split("|");
        result.push(new Ticket(b[0], b[1], b[2]));
    }

    return result.sort((a, b) => {
        switch(criteria) {
            case 'destination':
                return a.destination.localeCompare(b.destination);
            case 'price':
                return Number(a.price) - Number(b.price);
            case 'status':
            return a.status.localeCompare(b.status);
        }
    })
}


console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
))