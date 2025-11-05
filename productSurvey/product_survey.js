function submitFeedback() {
    // Read input values after user clicks submit
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    // Simple validation (optional but good)
    if (!username || !email || !feedback) {
        alert('Please fill in all required fields (Name, Email, Feedback).');
        return;
    }

    // Display thank-you message
    alert('Thank you for your valuable feedback!');

    // Show feedback summary on the page
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    // Make the user info visible
    document.getElementById('userInfo').style.display = 'block';
}

// Attach click event to the submit button
const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;

// Also trigger on Enter key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});
