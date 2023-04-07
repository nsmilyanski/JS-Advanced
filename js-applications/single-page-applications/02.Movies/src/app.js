import {showHome} from './views/home.js'
import {showCatalog} from './views/catalog.js'
import {showRegister} from './views/register.js'
import {showLogin} from './views/login.js'
import {showCreate} from './views/create.js'
import {showDetails} from './views/details.js'
import { iniatializate} from './router.js'
import {logout} from './api/user.js';


document.getElementById('views').remove();

const links = {
    '/': showHome,
    '/catalog': showCatalog,
    '/login': showLogin,
    '/register': showRegister,
    '/details': showDetails,
    '/create': showCreate,
    '/logout': onLogout
};

const router = iniatializate(links);
router.updateNav();

router.goTo('/');
router.goTo('/catalog')

function onLogout() {
    logout();
    router.updateNav();
    router.goTo('/');
}

