 async function solution() {
    let main = document.getElementById("main");

    let  art =  await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
    const articles = await art.json();

    for (const a of articles) {
        let element = document.createElement("div");
        let getR = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${a._id}`)
        let jsonObkect = await getR.json();

        debugger;
        element.innerHTML = `
        <div class="accordion">
        <div class="head">
            <span>${a.title}</span>
            <button class="button" id=${a._id}>More</button>
        </div>
        <div class="extra">
            <p>${jsonObkect.content}</p>
        </div>
    </div>`;

    element.querySelector('button').addEventListener('click', (e) =>  {hideAndShowButton(e, element)})

    main.appendChild(element);
    }

    function hideAndShowButton(e, element) {
        let button = element.querySelector('button')

        if(button.textContent == 'More') {
            element.querySelector('.extra').style.display = 'block';
            button.textContent = 'Less';
        }else {
            element.querySelector('.extra').style.display = 'none';
            button.textContent = 'More';
        }
    }




}


solution();