'use strict';

const form = document.getElementById('form');
const input = form.querySelectorAll('.input');
const validation = form.querySelectorAll('.validation');
const password = document.getElementById('password');
const retypePassword = document.getElementById('retypePassword');
const passMatch = document.getElementById('passMatch');

const handlePasswordMatch = () => {
  if (password.value === retypePassword.value) {
    passMatch.innerHTML = `matched`;
    passMatch.style.color = 'green';
    passMatch.style.opacity = '1';
  } else {
    passMatch.innerHTML = `Password Not Match`;
    passMatch.style.color = 'red';

  }
};

const handleCheckValidation = e => {
  e.preventDefault();
  form.dataset.isValid = '1';
  input.forEach(input => {
    if (input.dataset.required === '1' && !input.value) {
      form.dataset.isValid = '0';
      const inputParent = input.parentElement;
      const lastChildEl = inputParent.childNodes[3];
      lastChildEl.classList.add('active');
    }

    input.addEventListener('keypress', () => {
      if (input.value) {
        // srcElement
        // nextElementSibling
        if (input.parentElement.childNodes[3].classList.contains('active')) {
          input.parentElement.childNodes[3].classList.remove('active');
        }
      }
    });
  });
  if (form.dataset.isValid === '1') {
    form.reset();
  }
  handlePasswordMatch();
};

form.addEventListener('submit', handleCheckValidation);
