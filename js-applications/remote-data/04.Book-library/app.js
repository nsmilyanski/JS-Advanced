
function solve() {
    document.getElementById("loadBooks").addEventListener('click', loadAllBooks)
    document.querySelector('form button').addEventListener('click', addBook);
    const tbody = document.querySelector('tbody');


    async function addBook(e) {
        e.preventDefault();
        const titleInput = document.querySelector('[name="title"]');
        const authorInput = document.querySelector('[name="author"]');

        if(titleInput.value == '' || authorInput.value == '') {
            return;
        }

        const data = {
            title: titleInput.value,
            author: authorInput.value
        }

       try {
        const response = await fetch('http://localhost:3030/jsonstore/collections/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
       } catch (error) {
        alert(error.message);
       }
       titleInput.value = '';
       authorInput.value = '';

    }


    async function loadAllBooks() {
        try {
            const b = await fetch('http://localhost:3030/jsonstore/collections/books')
            const books = await b.json();
    
            Object.values(books).forEach(e => {
                const tr = document.createElement('tr');

                const td1 = document.createElement('td');
                td1.textContent = e.title;
    
                const td2 = document.createElement('td');
                td2.textContent = e.author;
    
                const td3 = document.createElement('td');
                
                const buttonEdit = document.createElement('button');
                const buttonDelete = document.createElement('button');

                buttonEdit.addEventListener('click', editBook);
    
                buttonEdit.textContent = 'Edit';
                buttonDelete.textContent = 'Delete';
    
                td3.appendChild(buttonEdit);
                td3.appendChild(buttonDelete);
    
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
    
                tbody.appendChild(tr);
            })
        } catch (error) {
            alert(error.message);
        }
    }

    function editBook(e) {
        const titleInput = document.querySelector('[name="title"]');
        const authorInput = document.querySelector('[name="author"]');
        const tdOfEdit = e.target.parentNode.parentNode;

        const author = tdOfEdit.children[1].textContent;
        const title = tdOfEdit.children[0].textContent;

        titleInput.value = title;
        authorInput.value = author;

        tdOfEdit.remove();
    }

  
}


solve();