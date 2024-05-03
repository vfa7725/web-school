const formData = {};

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        const isEmailValid = validateEmailInput();
        const isPasswordValid = validatePasswordInput();

        if (isEmailValid && isPasswordValid) {
            const inputs = form.querySelectorAll('input, select');
            inputs.forEach(function (input) {
                formData[input.name] = input.value;
            });

            // Redirect to "Home.html" after successful validation
            window.location.href = "index.html";
        }
    });
});

function validateEmailInput() {
    const emailInput = document.getElementById('emailInput').value;
    const feedbackElement = document.getElementById('emailFeedback');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailInput)) {
        feedbackElement.textContent = "";
        return true;
    } else {
        feedbackElement.textContent = "Please enter a valid email address.";
        return false;
    }
}

function validatePasswordInput() {
    const passwordInput = document.getElementById('passwordInput').value;
    const confirmPasswordInput = document.getElementById('confirmpasswordInput').value;
    const feedbackElement = document.getElementById('passwordFeedback');

    if (passwordInput === confirmPasswordInput) {
        feedbackElement.textContent = "";
        return true;
    } else {
        feedbackElement.textContent = "Please make sure that your passwords are the same.";
        return false;
    }
}
