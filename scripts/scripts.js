let firstName = document.querySelector("#fname");
let lastName = document.querySelector("#lname");
let phone = document.querySelector("#phone");
let email = document.querySelector("#email");
let form = document.querySelector("#appointmentForm");

firstName.addEventListener("input", function(e) {
  firstName.setCustomValidity('');
});
firstName.addEventListener("invalid", function(e){
  firstName.setCustomValidity('First name is required');
});

lastName.addEventListener("input", function(e) {
  lastName.setCustomValidity('');
});
lastName.addEventListener("invalid", function(e){
  lastName.setCustomValidity('Last name is required');
});

phone.addEventListener("input", function(e) {
  phone.setCustomValidity('');
});
phone.addEventListener("invalid", function(e){
  phone.setCustomValidity('Phone number must be in the format 123-456-7890');
});

email.addEventListener("input", function(e) {
  email.setCustomValidity('');
});
email.addEventListener("invalid", function(e){
  email.setCustomValidity('Invalid email address');
});
