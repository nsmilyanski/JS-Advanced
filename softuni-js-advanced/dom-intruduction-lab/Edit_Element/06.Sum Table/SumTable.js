function sumTable() {
    let elements = document.querySelectorAll('table tr');

    console.log(elements);

    let total = 0;

    for (let i = 1; i < elements.length; i++) {
        let cols = elements[i].children;
        let cost = cols[cols.length - 1].textContent;
        total+= Number(cost);
    }

    document.getElementById('sum').textContent = total;
}