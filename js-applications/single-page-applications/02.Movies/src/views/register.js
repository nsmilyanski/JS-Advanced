import { register } from "../api/user.js";

const section = document.getElementById('form-sign-up');
const form = section.querySelector('#register-form');
section.querySelector('button').addEventListener('click', registerUser);

let ctx = null;
export function showRegister(context) {
    ctx = ctx;
    context.showSection(section);
}

async function registerUser() {
    const formData = new FormData(form);

    const email = formData.get('email');
    const password = formData.get('password');
    
    await register(email, password);

    form.reset();
    ctx.updateNav();
    ctx.goTo('/');
    ctx.goTo('/catalog');
}