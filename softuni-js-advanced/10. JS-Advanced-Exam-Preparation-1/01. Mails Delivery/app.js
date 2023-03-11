function solve() {
    let addToListButton = document.getElementById("add");

    let recipient = document.getElementById("recipientName");
    let title = document.getElementById("title");
    let message = document.getElementById("message");
    let listOfMails = document.getElementById("list");

    let resetButton = document.getElementById("reset");

    addToListButton.addEventListener('click', addtoTheLIst);
    resetButton.addEventListener('click', reset);

    function addtoTheLIst(e) {
        e.preventDefault();
        if(isEmpty(recipient.value) || isEmpty(title.value) || isEmpty(message.value)) {
            return;
        }

        

        let li = document.createElement('li');

        li.innerHTML = 
        `<h4>Title: ${title.value}</h4>
        <h4>Recipient Name: ${recipient.value}</h4>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ut recusandae deserunt, debitis perspiciatis praesentium facilis, suscipit adipisci provident, tempora repellat ratione voluptate sit vel animi totam. Quia, qui enim.</span>
        <div id="list-action">
            <button type="submit" id="send">Send</button>
            <button type="submit" id="delete">Delete</button>
        </div>`

        listOfMails.appendChild(li);



    let deleteButton = li.querySelector("#delete");
    deleteButton.addEventListener('click', deleteEmails);

    let sendButton = li.querySelector("#send");
    sendButton.addEventListener('click', sendMessage);

    let listClass = document.querySelector(".sent-list");

    function sendMessage(e) {
        e.target.parentElement.parentElement.remove()
        let li = document.createElement('li');
        li.innerHTML = 
        `<span>To: ${recipient.value}</span>
        <span>Title: ${title.value}</span>
        <div class="btn">
            <button type="submit" class="delete">Delete</button>
        </div>`
        li.addEventListener('click', deleteEmails);

        listClass.appendChild(li);
    }
    let deleteList = document.querySelector(".delete-list")
    

    function deleteEmails(e) {
        e.target.parentElement.parentElement.remove()
        let li = document.createElement('li');
        li.innerHTML = 
        `<span>To: ${recipient.value}</span>
        <span>Title: ${title.value}</span>`

        deleteList.appendChild(li);
    }

    }
  

    function reset(e) {
    e.preventDefault();

    title.value = '';
    message.value = '';
    recipient.value = '';
        

    }

    function isEmpty(value) {
        return value === '';
    }
}
solve()