// script.js

// Wait for the DOM to fully load before running any JavaScript
document.addEventListener('DOMContentLoaded', function() {

    // Get the form element
    const form = document.getElementById('contact-form');

    // Add a listener for the form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the values from the form fields
        const name = form.elements['name'].value;
        const email = form.elements['email'].value;
        const message = form.elements['message'].value;

        // You can add validation here if needed

        // Example: Display the form data in the console
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

        // You can add AJAX request or other actions here

        // Optionally, clear the form fields after submission
        form.reset();
    });

});
