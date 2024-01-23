// throttle funcion
const throttle = require('lodash.throttle');
// form and input elements
const form = document.querySelector('.feedback-form');
const emailInput = form.elements['email'];
const messageInput = form.elements['message'];
// local storage keys
const emailLocalStorageKey = 'feedback-form-email';
const messageLocalStorageKey = 'feedback-form-message';
const obj = {};

// setting initial values from local storage
emailInput.value = localStorage.getItem(emailLocalStorageKey) ?? '';
messageInput.value = localStorage.getItem(messageLocalStorageKey) ?? '';

//input event listener with throttle
form.addEventListener(
  'input',
  throttle(e => {
    const localStorageKey =
      e.target.name === 'email' ? emailLocalStorageKey : messageLocalStorageKey;
    localStorage.setItem(localStorageKey, e.target.value);
  }, 500)
);

//form submit event listener
form.addEventListener('submit', e => {
  e.preventDefault();
  if (emailInput.value === '' || messageInput.value === '') {
    alert('fill the textboxes');
  } else {
    obj.email = emailInput.value;
    obj.message = messageInput.value;
    console.log(obj);
    localStorage.removeItem(emailLocalStorageKey);
    localStorage.removeItem(messageLocalStorageKey);
  }
  form.reset();
});