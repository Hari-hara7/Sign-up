
function register() {
    // Add registration logic here (e.g., validation and sending data to the server)
    alert('Registration successful!'); // Replace this with your actual registration logic
}

function login() {
    // Add login logic here (e.g., validation and authentication)
    alert('Login successful!'); // Replace this with your actual login logic
}

function toggleForm(formId) {
    const registrationSection = document.getElementById('registrationSection');
    const loginSection = document.getElementById('loginSection');

    if (formId === 'registrationSection') {
        registrationSection.style.display = 'block';
        loginSection.style.display = 'none';
    } else {
        registrationSection.style.display = 'none';
        loginSection.style.display = 'block';
    }
}