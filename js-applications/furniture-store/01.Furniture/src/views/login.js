import { html, render } from "../../node_modules/lit-html/lit-html.js"
import { post } from "../api/api.js";
import page from "../../node_modules/page/page.mjs";
import { navigate } from "../app.js";

const template = () => html`
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
        <input type="submit" class="btn btn-primary" value="Login" />
    </div>
</div>
</form>`;

export function showLogin() {
    render(template(), document.getElementById('views'));
}

async function onSubmit(e) {
    e.preventDefault();

    const form = document.querySelector('form');
    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');

    const userData = {
        email, password
    }

    const response = await post('/users/login', userData);

    localStorage.setItem('user', JSON.stringify(response));
    navigate();
    page('/catalog');
}