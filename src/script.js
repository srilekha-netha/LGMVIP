document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    // Form submission handler
    const handleSubmit = (event) => {
        event.preventDefault();

        // Get form data
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
        };

        // Display data on the page
        displayUserData(formData);
    };

    // Function to display user data on the page
    const displayUserData = (data) => {
        const userDataDiv = document.createElement('div');
        userDataDiv.innerHTML = `
            <h2>Registered User Information</h2>
            <p><strong>First Name:</strong> ${data.firstName}</p>
            <p><strong>Last Name:</strong> ${data.lastName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
        `;
        app.appendChild(userDataDiv);
    };

    // Create the registration form
    const registrationForm = document.createElement('form');
    registrationForm.innerHTML = `
        <h2>Registration Form</h2>
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" required>

        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" required>

        <label for="email">Email:</label>
        <input type="email" id="email" required>

        <button type="submit">Register</button>
    `;

    // Attach form submission handler
    registrationForm.addEventListener('submit', handleSubmit);

    // Append the form to the app container
    app.appendChild(registrationForm);
});
