export function iniatializate(links) {
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');
    nav.addEventListener('click', onNavigate);


    const context = {
        showSection,
        goTo,
        updateNav
    }

    return context;

    
    function onNavigate(event) {
        let target = event.target;
        if (target.tagName == 'IMG') {
            target = target.parentElement
        }
        if (target.tagName == 'A') {
            event.preventDefault();
            const url = new URL(target.href);
            goTo(url.pathname);
        }
    }

    function updateNav() {
        debugger;
        let user = localStorage.getItem('user')
        if(user) {
            document.querySelectorAll('.user').forEach(e => e.style.display = 'block');
            document.querySelectorAll('.guest').forEach(e => e.style.display = 'none');
        }else {
            document.querySelectorAll('.user').forEach(e => e.style.display = 'none');
            document.querySelectorAll('.guest').forEach(e => e.style.display = 'block');
        }
    }

    function goTo(name, ...params) {

        const handler = links[name];
        if (typeof handler == 'function') {
            handler(context, ...params);
        }
    }


    function showSection(section) {
        main.replaceChildren(section);
    }
}