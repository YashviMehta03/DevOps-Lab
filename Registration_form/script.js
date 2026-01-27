const form = document.querySelector(".registration-form");
const passwordInput = document.querySelector('input[name="psw"]');
const confirmPasswordInput = document.querySelector('input[name="psw-repeat"]');
const togglePassword = document.getElementById("togglePassword");

// Show / Hide Password Logic
togglePassword.addEventListener("change", function () {
  const type = this.checked ? "text" : "password";
  passwordInput.type = type;
  confirmPasswordInput.type = type;
});

// Form Submit Validation
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (passwordInput.value !== confirmPasswordInput.value) {
    alert("Error: Passwords do not match!");
  } else {
    alert("Registration Successful! Password visibility feature added.");
    console.log("Form Data Ready to be sent to a server!");
  }
});
