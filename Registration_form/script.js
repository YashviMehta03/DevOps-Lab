document
  .querySelector(".registration-form")
  .addEventListener("submit", function (e) {
    // Prevent the form from actually submitting/refreshing the page
    e.preventDefault();

    // Get the password values
    const password = document.querySelector('input[name="psw"]').value;
    const confirmPassword = document.querySelector(
      'input[name="psw-repeat"]',
    ).value;

    // Simple Validation Logic
    if (password !== confirmPassword) {
      alert("Error: Passwords do not match!");
    } else {
      alert("Registration Successful! Git will now track this logic change.");
      console.log("Form Data Ready to be sent to a server!");
    }
  });
