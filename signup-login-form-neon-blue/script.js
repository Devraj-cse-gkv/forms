function toggleForms() {
  var signupForm = document.getElementById("signupForm");
  var loginForm = document.getElementById("loginForm");

  // Toggle visibility
  if (signupForm.classList.contains("hidden")) {
      signupForm.classList.remove("hidden");
      loginForm.classList.add("hidden");
      document.querySelector("#toggle").textContent = "Switch to Login";
  } else {
      signupForm.classList.add("hidden");
      loginForm.classList.remove("hidden");
      document.querySelector("#toggle").textContent = "Switch to Signup";
  }
}
function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

// JavaScript function to close modal popup
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// JavaScript function to send reset link
function sendResetLink() {
  // Add code to send reset link
  // For demonstration purpose, alert is used
  var email = document.getElementById("resetEmail").value;
  alert("Reset link sent to " + email);
  closeModal(); // Close modal after sending reset link
}