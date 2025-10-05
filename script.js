document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Retrieve and trim input values
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        let isValid = true;
        const messages = [];

        // Username Validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email Validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Password Validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Display feedback
        feedbackDiv.style.display = "block";
        feedbackDiv.style.padding = "12px";

        if (isValid) {
            feedbackDiv.textContent = "✅ Registration successful!";
            feedbackDiv.style.color = "#155724";
            feedbackDiv.style.backgroundColor = "#d4edda";
            form.reset();
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#721c24";
            feedbackDiv.style.backgroundColor = "#f8d7da";
        }
    });
});

