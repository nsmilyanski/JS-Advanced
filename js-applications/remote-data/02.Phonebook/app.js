function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', loadPhones);
    document.getElementById('btnCreate').addEventListener('click', createElement);

    const phoneBooksList = document.getElementById("phonebook");


    async function createElement() {
        const personinput = document.getElementById('person');
        const phoneInput = document.getElementById('phone');

        const data = {person: personinput.value, phone: phoneInput.value}

        try {
            const jsonResponse = await fetch('http://localhost:3030/jsonstore/phonebook', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            personinput.value = '';
            phoneInput.value = '';

            loadPhones();

        } catch (error) {
            alert(error.message);
        }

       
    }

    async function loadPhones() {
        phoneBooksList.innerHTML = '';

        try {
            const p  = await fetch('http://localhost:3030/jsonstore/phonebook');
            const phoneBookJson = await p.json();

            Object.values(phoneBookJson).forEach(e => {
                const li = document.createElement('li');
                const button = document.createElement('button');
                button.addEventListener('click', deletePhone);
                button.textContent = 'Delete';
                li.textContent = `${e.person}: ${e.phone}`;
                li.id = `${e._id}`;
                li.appendChild(button);
                phoneBooksList.appendChild(li);
            })

        }catch(errot) {
            alert('Can not load a phonebooks!!!')
        }
        
    }

    async function deletePhone(e) {
        const phoneRecord =  e.target.parentElement;
        const url = `http://localhost:3030/jsonstore/phonebook/${phoneRecord.id}`

        debugger;

        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        } catch (error) {
            alert(error.message);
        }
    
        phoneRecord.remove();
    }
}

attachEvents();