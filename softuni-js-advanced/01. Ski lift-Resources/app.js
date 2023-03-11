window.addEventListener('load', solve);
function solve() {
    let firstName = document.getElementById("first-name");
    let lastName = document.getElementById("last-name");
    let peopleCount = document.getElementById("people-count");
    let fromDate = document.getElementById("from-date");
    let daysCount = document.getElementById("days-count");
    let nextButton = document.getElementById("next-btn");
    let ticketInfoList = document.querySelector(".ticket-info-list");
    let confirmTicketList = document.querySelector(".confirm-ticket");
    let mainElement = document.getElementById("main");
    let bodyElement = document.getElementById("body");
    let referenceObj = {};

    nextButton.addEventListener('click', sendToTicketPreview);

    function sendToTicketPreview(e) {
        e.preventDefault();
        if(!firstName.value || !lastName.value || !peopleCount.value || !fromDate.value || !daysCount.value) {
            return;
        }

        referenceObj = {
            firstName: firstName.value,
            lastName: lastName.value,
            peopleCount: peopleCount.value,
            fromDate: fromDate.value,
            daysCount: daysCount.value
        };

        let li = document.createElement('li');
        li.innerHTML = 
        `<article>
        <h3>Name: ${firstName.value} ${lastName.value}</h3>
        <p>From date: ${fromDate.value}</p>
        <p>For ${daysCount.value} days</p>
        <p>For ${peopleCount.value} people</p>
        </article>
        <button class="edit-btn">Edit</button>
        <button class="continue-btn">Continue</button>`;

        li.querySelector(".edit-btn").addEventListener('click',(e) => 
        editInformation(e, referenceObj));
        li.querySelector(".continue-btn").addEventListener('click', sendToConfirmSection);

        ticketInfoList.appendChild(li);

        firstName.value = '';
        lastName.value = '';
        peopleCount.value = '';
        fromDate.value = '';
        daysCount.value = '';
        nextButton.disabled = true;
    }

    function sendToConfirmSection(e) {
        e.preventDefault();

        confirmTicketList.appendChild(ticketInfoList.children[0])

        

        let eButton = confirmTicketList.querySelector(".edit-btn");
        eButton.textContent = "Confirm";
        eButton.classList.remove('edit-btn');
        eButton.classList.add('confirm-btn')

        let cButton = confirmTicketList.querySelector(".continue-btn");
        cButton.textContent = "Cancel";
        cButton.classList.remove('continue-btn');
        cButton.classList.add('cancel-btn')

        cButton.addEventListener('click', cancelEverything);


        eButton.addEventListener('click', confirmAction);
        ticketInfoList.children[0].remove();
    }

    function confirmAction() {
        mainElement.remove();

        let h1 = document.createElement("h1");
        h1.id = "thank-you";
        h1.textContent = "Thank you, have a nice day!";

        let newButton = document.createElement("button");
        newButton.id = "back-btn";
        newButton.textContent = "Back";

        newButton.addEventListener('click', reloadThePage)

        bodyElement.appendChild(h1);
        bodyElement.appendChild(newButton);
    }

    function reloadThePage() {
        window.location.reload();
    }

    function cancelEverything() {
        confirmTicketList.children[0].remove();

        nextButton.disabled = false;
    }

    function editInformation(e, refObj) {
        e.preventDefault();

        firstName.value = refObj.firstName;
        lastName.value = refObj.lastName;
        fromDate.value = refObj.fromDate;
        daysCount.value = refObj.daysCount;
        peopleCount.value = refObj.peopleCount;

        ticketInfoList.children[0].remove();

        nextButton.disabled = false;
    }
}

    
    
