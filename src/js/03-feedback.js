import throttle from 'lodash.throttle';

const refs = {
  formEl: document.querySelector('form'),
  emailEl: document.querySelector('input'),
  textareaEl: document.querySelector('textarea'),
};

const LOCALSTORAGE_KEY = 'feedback-form-state';

const formData = {};

getInput();

refs.formEl.addEventListener('submit', sendForm);
refs.formEl.addEventListener('input', throttle(setItem, 500));

function setItem(event) {
  formData[event.target.name] = event.target.value;
  const messege = JSON.stringify(formData);
  localStorage.setItem(LOCALSTORAGE_KEY, messege);
}

function sendForm(event) {
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function getInput() {
  const qwer = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (qwer) {
    refs.emailEl.value = qwer.email;
    refs.textareaEl.value = qwer.message;
  }
}
