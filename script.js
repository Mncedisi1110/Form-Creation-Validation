["DOMContentLoaded"]
const form = document.getElementById('registration-form');
const feedbackDiv = document.getElementById('form-feedback');
form.addEventListener('submit', function(event){
event.preventDefault();

//Username validation
const usernameInput = document.getElementById('username');
const usernameError = document.getElementById('usernameError')

if (usernameInput.ariaValueMax.length<3){
    isValid = false;
    usernameError.textContent = "The length criteria has not been met.";
}else{
    usernameError.textContent="";
}

//Email validation
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailErrror');

isValid = false;
if(!('@' && '.').test(emailInput.value)){
    emailError.textContent = "Please enter a valid email.";
}else{
    emailError.textContent = "";
}

//Password validation
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('passwordError');
isValid = false;
if(passwordInput.value.length < 8){
  passwordError = "Password criteria length not met.";
}else{
    passwordError = "";
}
})
