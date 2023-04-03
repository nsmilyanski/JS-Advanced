import { get } from "../api/api.js";
import {html, render} from '../../node_modules/lit-html/lit-html.js'

const innerTemplate = (furniture) => html `
<div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
                <img src="${furniture.img}" />
                <p>${furniture.description}</p>
                <footer>
                    <p>${furniture.price}: <span>235 $</span></p>
                </footer>
                <div>
                    <a href="/catalog/${furniture._id}" class="btn btn-info">Details</a>
                </div>
        </div>
    </div>
</div>`;

const template = (furniture) => html`
<div class="row space-top">
<div class="col-md-12">
    <h1>Welcome to Furniture System</h1>
    <p>Select furniture from the catalog to view details.</p>
</div>
</div>
<div class="row space-top">
${furniture.map(innerTemplate)}
</div>`;

export async function showCatalog(context) {   
    const furniture = await get('/data/catalog');
    console.log(furniture);

    render(template(furniture), document.getElementById('views'));
}