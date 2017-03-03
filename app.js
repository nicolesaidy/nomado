//submit form
var loginForm = document.querySelector("#login-form");
var email = document.querySelector("#email");
var password = document.querySelector("#password");

loginForm.addEventListener('submit', function(event){
  event.preventDefault();

  if (!email.value) {
    alert("Please enter an e-mail");
    return;
  }
  if (!password.value) {
    alert("Please enter a password");
    return;
  }
  if (password.value.length <= 6) {
    alert("Your password should be more than 6 characters");
    return;
  }
})
