import { html, render } from "lit-html";
import { get } from "../api/api";

const template = (furniture) => html `
<div class="row space-top">
<div class="col-md-12">
    <h1>Furniture Details</h1>
</div>
</div>
${furniture.map(innerTemplate)}`;

const innerTemplate = (furniture) => html `
<div class="row space-top">
<div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
            <img src="${furniture.img}" />
        </div>
    </div>
</div>
<div class="col-md-4">
    <p>Make: <span>${furniture.make}</span></p>
    <p>Model: <span>${furniture.model}</span></p>
    <p>Year: <span>${furniture.year}</span></p>
    <p>Description: <span>${furniture.description}</span></p>
    <p>Price: <span>${furniture.price}</span></p>
    ${furniture.material ? html`<p>Material: <span>${furniture.material}</span></p>` : null}
    <div>
        <a href=”/edit/${furniture._id}” class="btn btn-info">Edit</a>
        <a id=${furniture._id} href=”javascript:void(0)” class="btn btn-red">Delete</a>
    </div>
</div>
</div>`;


export async function showDetails(context) {
    const response = await get('/data' + context.pathname);
    console.log(response);

    render(template(furniture), document.getElementById('views'));
}