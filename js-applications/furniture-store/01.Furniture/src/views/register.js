import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { post } from "../api/api.js";
import { navigate } from "../app.js";

const template = () => html` 
<div class="row space-top">
<div class="col-md-12">
    <h1>Register New User</h1>
    <p>Please fill all fields.</p>
</div>
</div>
<form @submit=${onSubmit}>
<div class="row space-top">
    <div class="col-md-4">
        <div class="form-group">
            <label class="form-control-label" for="email">Email</label>
            <input class="form-control" id="email" type="text" name="email">
        </div>
        <div class="form-group">
            <label class="form-control-label" for="password">Password</label>
            <input class="form-control" id="password" type="password" name="password">
        </div>
        <div class="form-group">
            <label class="form-control-label" for="rePass">Repeat</label>
            <input class="form-control" id="rePass" type="password" name="rePass">
        </div>
        <input type="submit" class="btn btn-primary" value="Register" />
    </div>
</div>
</form>`;
let ctx = null;

export function showRegister(context) {
    render(template(), document.getElementById('views'));
    ctx = context;

}

async function onSubmit(e) {
    e.preventDefault();
    const form = document.querySelector('form');

    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');
    const repeat = formData.get('rePass');

    if(password !== repeat) {
        alert('Password and repeat password dont match!')
        return;
    } 

    const userData = {
        email,
        password
    }

    const response = await post('/users' + ctx.pathname, userData);
    console.log(response);
    localStorage.setItem('user', JSON.stringify(response));

    page('/catalog');
    navigate();
}