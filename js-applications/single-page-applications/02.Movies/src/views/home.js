const section = document.getElementById('home-page');
console.log(section);

export function showHome(context) {
    if(!localStorage.getItem('user')) {
        section.querySelector('#add-movie-button').style.display = 'none';
    }else {
        section.querySelector('#add-movie-button').style.display = 'block';
    }
    context.showSection(section);
}
