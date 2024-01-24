// throttle function
const throttle = require('lodash.throttle');
// form and input elements
const form = document.querySelector('.feedback-form');
const emailInput = form.elements['email'];
const messageInput = form.elements['message'];
// local storage key
const formStateLocalStorageKey = 'feedback-form-state';
const obj = {};

// setting initial values from local storage
const storedFormState = JSON.parse(localStorage.getItem(formStateLocalStorageKey)) || {};
emailInput.value = storedFormState.email || '';
messageInput.value = storedFormState.message || '';

// input event listener with throttle
form.addEventListener(
  'input',
  throttle(e => {
    const formState = {
      ...JSON.parse(localStorage.getItem(formStateLocalStorageKey)) || {},
      [e.target.name]: e.target.value.trim(),
    };
    localStorage.setItem(formStateLocalStorageKey, JSON.stringify(formState));
  }, 500)
);

// form submit event listener
form.addEventListener('submit', e => {
  e.preventDefault();
  const trimmedEmail = emailInput.value.trim();
  const trimmedMessage = messageInput.value.trim();

  if (trimmedEmail === '' || trimmedMessage === '') {
    alert('Fill the textboxes');
  } else {
    obj.email = trimmedEmail;
    obj.message = trimmedMessage;
    console.log(obj);
    localStorage.removeItem(formStateLocalStorageKey);
  }
  form.reset();
});
