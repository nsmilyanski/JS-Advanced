import page from '../node_modules/page/page.mjs';
import {showCatalog} from './views/catalog.js'
import { showRegister } from './views/register.js';
import {logoutUser} from './views/logout.js'
import { showLogin } from './views/login.js';
import { showCreate } from './views/create.js';
 



page('/', showCatalog);
page('/catalog', showCatalog);
page('/register', showRegister);
page('/logout', logoutUser), 
page('/login', showLogin),
page('/create', showCreate)

page.start();


export function navigate() {
    const user = localStorage.getItem('user');

    if(user) {
        document.getElementById('guest').style.display = 'none';
        document.getElementById('user').style.display = 'inline-block';
    }else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
}
navigate()
