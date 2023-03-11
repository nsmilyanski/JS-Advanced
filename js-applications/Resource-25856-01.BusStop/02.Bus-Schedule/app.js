function solve() {
    let depotId = 'depot';
    const departButton = document.getElementById("depart");
    const arriveButton = document.getElementById("arrive");
    const info = document.getElementById("info");

    let name = '';

    async function depart() {
        const onMove = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${depotId}`);

        let stopId = await onMove.json();

        name = stopId.name;

        info.textContent = `Next stop ${stopId.name}`
        depotId = stopId.next;
        departButton.disabled = true;
        arriveButton.disabled = false;

    }

     function arrive() {
        info.textContent = `Arriving at ${name}`

        departButton.disabled = false;
        arriveButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();