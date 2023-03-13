function attachEvents() {
   document.getElementById("refresh").addEventListener('click', loadPosts);
   document.getElementById("submit").addEventListener('click', sendRequest);
   const textArea = document.getElementById("messages");

   async function sendRequest() {
    const nameInput = document.querySelector('[name="author"]');
    const messageInput = document.querySelector('[name="content"]');

    const data = {author: nameInput.value, content: messageInput.value}

    try {
        const responseJson = await fetch('http://localhost:3030/jsonstore/messenger', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(data)
        }, )

    }catch(error) {
        alert("Can not send post request!")
    }
    nameInput.value = '';
    messageInput.value = '';

   }

   async function loadPosts() {
    textArea.textContent = '';
    try {
        const a = await fetch('http://localhost:3030/jsonstore/messenger');
        const messages = await a.json();

        let sb = ''
        for (const m of Object.values(messages)) {
            sb += `${m.author}: ${m.content}\n`;
        }

        textArea.textContent = sb;
    

    }catch(error) {
        alert(error.message);
    }
   
   }
}

attachEvents();