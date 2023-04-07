import {login} from '../api/user.js'

const section = document.getElementById('form-login');
const form = document.getElementById('login-form')
form.addEventListener('click', loginUser);

let ctx = null;

export function showLogin(context) {
    ctx = context;
    context.showSection(section);
}

async function loginUser(e) {
    e.preventDefault()

    debugger;

    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');

    if(email.length == 0 || password.length == 0) {
        return;
    }

    await login(email, password);
    form.reset();
    ctx.updateNav();
    ctx.goTo('/');
    ctx.goTo('/catalog');
}