'use strict';

const form = document.getElementById('form');
const input = form.querySelectorAll('.input');
const validation = form.querySelectorAll('.validation');
const password = document.getElementById('password');
const retypePassword = document.getElementById('retypePassword');
const passMatch = document.getElementById('passMatch');
const email = document.getElementById('email');
const emailMatch = document.getElementById('emailMatch');
const passPatternValid = document.getElementById('passPatternValid');
const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const passwordPattern =
  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
// ..................................................................................................

const handleCheckValidation = e => {
  e.preventDefault();
  form.dataset.isValid = '1';
  input.forEach(input => {
    if (input.dataset.required === '1' && !input.value) {
      form.dataset.isValid = '0';
      const labelEl = input.parentElement;
      const errorEl = labelEl.childNodes[3];
      errorEl.classList.add('active');
      errorEl.innerHTML = `this field is required!`;
      input.style.border = '1px solid red';

      e.currentTarget.childNodes[3].style.gap = `1.7rem`;
      e.currentTarget.childNodes[5].style.top = `56rem`;
    }

    input.addEventListener('keypress', () => {
      if (input.value) {
        if (input.parentElement.childNodes[3].classList.contains('active')) {
          input.parentElement.childNodes[3].innerHTML = `this field is required!`;
          input.parentElement.childNodes[3].classList.remove('active');
          input.style.border = 'none';
        }
      }
    });
  });
  handleEmailValidation();
  handlePasswordMatch();
  if (form.dataset.isValid === '1') {
    form.reset();
    passMatch.classList.remove('opacity');
    passPatternValid.classList.remove('opacity');
  }
};
// ...........................................................................................

const handlePasswordMatch = () => {
  if (password.value !== '') {
    if (passwordPattern.test(password.value)) {
      passPatternValid.innerHTML = `Password is Strong`;
      passPatternValid.style.color = 'green';
      passPatternValid.classList.add('opacity');
      password.style.border = `none`;
    } else {
      form.dataset.isValid = `0`;
      passPatternValid.innerHTML = `Password is Weak`;
      passPatternValid.style.color = `red`;
      passPatternValid.classList.add('opacity');
      password.style.border = `1px solid red`;
    }
    if (retypePassword.value !== '') {
      if (password.value !== retypePassword.value) {
        form.dataset.isValid = `0`;
        passMatch.innerHTML = `Password Not Match`;
        retypePassword.style.border = '1px solid red';
        passMatch.classList.add('opacity');
        passMatch.style.color = 'red';
        form.dataset.isValid === '0';
      } else {
        passMatch.innerHTML = `Password Matched`;
        passMatch.style.color = 'green';
        passMatch.classList.add('opacity');
        retypePassword.style.border = 'none';
      }
    }
  }
};
// ..................................................................................

const handleEmailValidation = () => {
  if (email.value !== '' && emailPattern.test(email.value)) {
    emailMatch.innerHTML = 'Example: john@gmail.com';
    email.style.border = 'none';
    emailMatch.style.opacity = '0';
  } else if (email.value !== '' && !emailPattern.test(email.value)) {
    form.dataset.isValid = `0`;
    emailMatch.innerHTML = 'Example: john@gmail.com';
    form.dataset.isValid = '0';
    email.style.border = '1px solid red';
    emailMatch.style.opacity = '1';
  }
};
// ......................................................................................

const handleChangeEvent = () => {
  handleEmailValidation();
  handlePasswordMatch();
};
// ..........................................................................................

form.addEventListener('submit', handleCheckValidation);
input.forEach(item => item.addEventListener('change', handleChangeEvent));
