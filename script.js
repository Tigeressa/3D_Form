const signupBtn = document.querySelector(".signup-btn");
const signinBtn = document.querySelector(".signin-btn");
const formWrapper = document.querySelector('.form-wrap');

signupBtn.addEventListener('click', (e) => {
  e.preventDefault();
  formWrapper.classList.add('change');
});

signinBtn.addEventListener('click', (e) => {
  e.preventDefault();
  formWrapper.classList.remove('change');
});
