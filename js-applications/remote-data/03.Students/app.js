async function solve() {
    document.getElementById("submit").addEventListener('click', createStudent);
    const tbody = document.querySelector("#results tbody");

    tbody.innerHTML = '';

    try {
        const s = await fetch('http://localhost:3030/jsonstore/collections/students');
        const students = await s.json();

        Object.values(students).forEach(e => {
            const tr = document.createElement('tr');

            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            const td3 = document.createElement('td');
            const td4 = document.createElement('td');

            td1.textContent = e.firstName;
            td2.textContent = e.lastName;
            td3.textContent = e.facultyNumber;
            td4.textContent = e.grade;

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);

            tbody.appendChild(tr);
        })
        
    } catch (error) {
        alert(error.message);
    }


    async function createStudent() {
        const firstNameInput = document.querySelector('[name="firstName"]')
        const lastNameInput = document.querySelector('[name="lastName"]')
        const facultyNumberInput = document.querySelector('[name="facultyNumber"]')
        const gradeInput = document.querySelector('[name="grade"]');

        const data = {
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            facultyNumber: facultyNumberInput.value,
            grade: gradeInput.value
        }

        try {
            const response = await fetch('http://localhost:3030/jsonstore/collections/students', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        } catch (error) {
            alert(error.message)
        }

        firstNameInput.value = '';
        lastNameInput.value = '';
        facultyNumberInput.value = '';
        gradeInput.value = '';
    }


}

solve();