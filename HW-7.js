'use strict';

const form = document.getElementById('form');
const input = form.querySelectorAll('.input');
const validation = form.querySelectorAll('.validation');
const password = document.getElementById('password');
const retypePassword = document.getElementById('retypePassword');
const passMatch = document.getElementById('passMatch');
const email = document.getElementById('email');
const emailMatch = document.getElementById('emailMatch');
const pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

const handleCheckValidation = e => {
  e.preventDefault();
  form.dataset.isValid = '1';
  input.forEach(input => {
    if (input.dataset.required === '1' && !input.value) {
      form.dataset.isValid = '0';
      const labelEl = input.parentElement;
      const errorEl = labelEl.childNodes[3];
      errorEl.classList.add('active');
      input.style.border = '1px solid red';
    }

    input.addEventListener('keypress', () => {
      if (input.value) {
        if (input.parentElement.childNodes[3].classList.contains('active')) {
          input.parentElement.childNodes[3].classList.remove('active');
          input.style.border = '1px solid green';
        }
      }
    });
  });

  handleEmailValidation();
  handlePasswordMatch();
  if (form.dataset.isValid === '1') {
    form.reset();
    passMatch.classList.remove('opacity');
    input.forEach(item => (item.style.border = '1px solid transparent'));
  }
};

const handlePasswordMatch = () => {
  if (password.value !== retypePassword.value) {
    passMatch.innerHTML = `Password Not Match`;
    retypePassword.style.border = '1px solid red';
    passMatch.classList.add('opacity');
    passMatch.style.color = 'red';
    form.dataset.isValid === '0';
  } else if (password.value === '') {
    passMatch.innerHTML = 'this field is required!';
    passMatch.style.color = 'red';
  } else {
    passMatch.innerHTML = `Password Matched`;
    passMatch.style.color = 'green';
    passMatch.classList.add('opacity');
    retypePassword.style.border = '1px solid green';
  }
};

const handleEmailValidation = () => {
  if (email.value !== '' && pattern.test(email.value)) {
    emailMatch.innerHTML = 'Example: john@gmail.com';
    email.style.border = '1px solid green';
    emailMatch.style.opacity = '0';
  } else if (email.value !== '' && !pattern.test(email.value)) {
    emailMatch.innerHTML = 'Example: john@gmail.com';
    form.dataset.isValid = '0';
    email.style.border = '1px solid red';
    emailMatch.style.opacity = '1';
  }
};

form.addEventListener('submit', handleCheckValidation);
