// Description: This file contains the client-side JavaScript code for the email signup form.
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value;

    // Send email to server using fetch API
    fetch('http://localhost:3000/signup', {  // URL of the server
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ email: email })
    })
    .then(response => response.text())
    .then(data => {
        alert(data);  // Display the response message from the server
        emailInput.value = '';  // Clear the input field
    })
    .catch(error => console.error('Error:', error));
});