function register() {
  var fullName = document.getElementById("fullName").value;
  var usn = document.getElementById("usn").value;
  var universityMail = document.getElementById("universityMail").value;
  var mobileNumber = document.getElementById("mobileNumber").value;
  var password = document.getElementById("password").value;

  if (!validateForm(fullName, usn, universityMail, mobileNumber, password)) {
    alert("Please fill in all fields.");
    return;
  }

  if (!validateUSN(usn)) {
    alert("USN must start with 'NNM'");
    return;
  }

  if (!validateUniversityEmail(universityMail)) {
    alert("University email must end with '@nmamit.in'");
    return;
  }

  if (!validatePhoneNumber(mobileNumber)) {
    alert("Mobile number must be 10 digits.");
    return;
  }

  // Registration successful
  alert("Successfully Registered!");
}

function login() {
  var usnLogin = document.getElementById("usnLogin").value;
  var passwordLogin = document.getElementById("passwordLogin").value;

  if (!usnLogin || !passwordLogin) {
    alert("Please fill in all fields.");
    return;
  }

  // Proceed with login logic
}

function validateForm(fullName, usn, universityMail, mobileNumber, password) {
  return fullName && usn && universityMail && mobileNumber && password;
}

function validateUSN(usn) {
  return usn.startsWith("NNM");
}

function validateUniversityEmail(email) {
  return email.endsWith("@nmamit.in") && email.length >= 20;
}

function validatePhoneNumber(number) {
  return /^\d{10}$/.test(number);
}

function toggleForm(section) {
  var registrationSection = document.getElementById("registrationSection");
  var loginSection = document.getElementById("loginSection");

  if (section === "registrationSection") {
    registrationSection.style.display = "block";
    loginSection.style.display = "none";
  } else if (section === "loginSection") {
    registrationSection.style.display = "none";
    loginSection.style.display = "block";
  }
}
