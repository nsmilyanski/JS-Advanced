function notify(message) {
  let notifycationElement = document.getElementById("notification");

  notifycationElement.textContent = message;

notifycationElement.style.display = 'block';

notifycationElement.addEventListener('click', onClick);

function onClick (e) {
  e.target.style.display = 'none';
}

}