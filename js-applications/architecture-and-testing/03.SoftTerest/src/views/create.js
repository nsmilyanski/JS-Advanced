import { createIdea } from '../api/data.js'
 
const createPage = document.getElementById('createPage');
const form = createPage.querySelector('form');
const button = createPage.querySelector('button');
button.addEventListener('click', postIdea);

let ctx = null;

export function showCreate(context) {
    ctx = context;
    context.showSection(createPage);
}

async function postIdea(e) {
    e.preventDefault();

    const formdata = new FormData(form);

    const title = formdata.get('title');
    const description = formdata.get('description');
    const img = formdata.get('imageURL');

    await createIdea({title, description, img})

    form.reset();
    ctx.goTo('/catalog');
}