import throttle from 'lodash.throttle';

const formEl = document.querySelector('form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

getInput();

formEl.addEventListener('submit', sendForm);
formEl.addEventListener('input', throttle(setItem, 500));

function setItem(event) {
  let filter = localStorage.getItem(LOCALSTORAGE_KEY);
  filter = filter ? JSON.parse(filter) : {};
  filter[event.target.name] = event.target.value;
  const messege = JSON.stringify(filter);
  localStorage.setItem(LOCALSTORAGE_KEY, messege);
}

function sendForm(event) {
  event.preventDefault();
  if (formEl.elements === '') {
    alert('все поля должны быть заполнены');
  } else {
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
    event.target.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
  }
}

function getInput() {
  let getLocal = localStorage.getItem(LOCALSTORAGE_KEY);

  if (getLocal) {
    getLocal = JSON.parse(getLocal);
    Object.entries(getLocal).forEach(([name, value]) => {
      formEl.elements[name].value = value;
    });
  }
}
