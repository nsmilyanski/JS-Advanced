import {login} from '../api/users.js';

const loginPage = document.getElementById('loginPage');
const form = loginPage.querySelector('form');
const button = loginPage.querySelector('button');
button.addEventListener('click', onSubmit);

let ctx = null;

export async function showLogin(context) {
    debugger;
    ctx = context;
    context.showSection(loginPage);  
}


async function onSubmit(event) {
    debugger;
    event.preventDefault();
    const formData = new FormData(form);

    const email = formData.get('email');
    const password = formData.get('password');

    await login(email, password);

    form.reset();
    ctx.updateNav();
    ctx.goTo('/');
}