 async function lockedProfile() {
   const lock = document.querySelector('.profile');
   const main = document.getElementById("main");

  

   

   const a = await fetch('http://localhost:3030/jsonstore/advanced/profiles');

   const allUsers = await a.json();

   let counter = 0;

   for (const obj of Object.values(allUsers)) {

    const div = lock.cloneNode(true);

    if(counter === 0) {
        fiilUserProfile(lock, obj);
    }else {
        fiilUserProfile(div, obj);
        main.appendChild(div);
    }

    counter++;
   }

   function fiilUserProfile(d, obj) {
     d.querySelectorAll('input')[2].value = obj.username;

     d.querySelectorAll('input')[3].value = obj.email;

     d.querySelectorAll('input')[4].value = obj.age;

     const userNameClass = d.querySelector('.user1Username');

     userNameClass.style.display = 'none';
     debugger

     d.querySelector('button').addEventListener('click', showMoreOrHideIt);
   }

   function showMoreOrHideIt(d) {
    debugger
    const parent =  d.target.parentNode;
    const userNameClass = parent.querySelector('.user1Username');
    if(parent.querySelector('input').checked) {
        return
    }
    if( parent.querySelector('button').textContent === 'Hide it') {
        userNameClass.style.display = 'none';
        parent.querySelector('button').textContent = 'Show more';
    }else {
        parent.querySelector('button').textContent = 'Hide it';
        userNameClass.style.display = 'block';
    }
   }
}