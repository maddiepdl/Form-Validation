const mainForm = document.getElementById("form"); // Get the form element

// Form submission
mainForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default action

  // Get values from form
  const htmlUsername = document.getElementById("username").value;
  const jsUsername = document.getElementById("Jusername").value;
  const email = document.getElementById("useremail").value;
  const password = document.getElementById("password").value;

  // Clear output
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";

  // Validate form
  const isFormValid = validateForm(htmlUsername, jsUsername, email, password);

  // Error message if validation fails
  if (!isFormValid) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent =
      "Oops, the form is not valid. Usernames need 5+ characters, password needs 6+, and email must be valid.";
    outputDiv.appendChild(errorMessage);
    return; // Prevent the rest of the function from running
  }

  // Message if validation passes
  const successMessage = document.createElement("p");
  successMessage.textContent = `${htmlUsername} and ${jsUsername} (${email})`;
  outputDiv.appendChild(successMessage);
});

// JavaScript validation for each field
function validateForm(htmlUsername, jsUsername, email, password) {
  let isValid = true;

  // Must not be empty and must be at least 5 characters
  if (htmlUsername === "" || htmlUsername.length < 5) {
    isValid = false;
  }

  // Must not be empty and must be at least 5 characters
  if (jsUsername === "" || jsUsername.length < 5) {
    isValid = false;
  }

  // Must not be empty
  if (email === "") {
    isValid = false;
  }

  // Must not be empty and must be at least 6 characters
  if (password === "" || password.length < 6) {
    isValid = false;
  }

  return isValid;
}