import { html, render } from "../../node_modules/lit-html/lit-html.js"
import { post } from "../api/api.js";
import page from "../../node_modules/page/page.mjs";
import { navigate } from "../app.js";

const template = () => html `
<form @submit=${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control valid" id="new-make" type="text" name="make">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control is-valid" id="new-model" type="text" name="model">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control is-invalid" id="new-year" type="number" name="year">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Create" />
                </div>
            </div>
        </form>`;

export function showCreate() {
    render(template(), document.getElementById('views'));
}

// •	Make and Model must be at least 4 symbols long
// •	Year must be between 1950 and 2050
// •	Description must be more than 10 symbols
// •	Price must be a positive number
// •	Image URL is required
// •	Material is optional
// By valid input you can add the "is-valid" class to the input field, and by invalid the "is-invalid" class.
// If the creation is successful show redirect to dashboard page.



async function onSubmit(e) {
    e.preventDefault();

    const form = document.querySelector('form');
    const formData = new FormData(form);
    const make = formData.get('make');
    const model = formData.get('model');
    const year = formData.get('year');
    const description = formData.get('description');
    const price = formData.get('price');
    const img = formData.get('img');
    const material = formData.get('material');

    const isValid = validate(make, model, year, description, price, img);

    if(isValid) {
        document.querySelectorAll('input').forEach(e => {
            if(e.classList.contains('is-invalid')) {
                e.classList.remove('is-invalid');
            }
                e.classList.add('is-valid');
        })
    } else {
        return;
    }


    const respones = await post('/data/catalog', {make, model, year, description, price, img, material});

    page('/catalog');
}

function validate(make, model, year, description, price, image) {
    let isValid = true;
    if(make.length < 4) {
        document.querySelector('input[name="make"]').classList.add('is-invalid');
        isValid = false;
    }
    if( model.length < 4 ) {
        document.querySelector('input[name="model"]').classList.add('is-invalid');
        isValid = false;
    }

    if(year < 1950 || year > 2050) {
        document.querySelector('input[name="year"]').classList.add('is-invalid');
        isValid = false;
    }

    if(description.length < 10) {
        document.querySelector('input[name="description"]').classList.add('is-invalid');
        isValid = false;
    }

    if(price < 0) {
        document.querySelector('input[name="price"]').classList.add('is-invalid');
        isValid = false;
    }

    if(image == undefined) {
        document.querySelector('input[name="img"]').classList.add('is-invalid');
        isValid = false;
    }
    return isValid;
}

