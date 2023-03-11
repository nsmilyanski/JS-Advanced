async function getInfo() {
    const submitButton = document.getElementById("submit");
    const stopBus = document.getElementById("stopId");
    const stopName = document.getElementById("stopName")
    const bussesList = document.getElementById("buses");

    bussesList.innerHTML = '';


        try{
            let allBusses = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopBus.value}`);

            if(!allBusses.ok) {
                throw new Error();
            }
    
            const busses = await allBusses.json();
    
            stopName.textContent = busses.name;
    
            for (const [key, value] of Object.entries(busses.buses)) {
                const liEl = document.createElement('li');
                liEl.textContent = `Bus ${key} arrives in ${value} minutes`
                bussesList.appendChild(liEl);
            }
        }catch(error) {
            stopName.textContent = 'Error'
        }
}