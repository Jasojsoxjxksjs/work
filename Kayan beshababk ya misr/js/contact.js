document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset errors
    clearErrors();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    let isValid = true;
    
    // Name validation
    if (name.length < 3) {
        showError('name', 'Name must be at least 3 characters long');
        isValid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Phone validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        showError('phone', 'Please enter a valid 10-digit phone number');
        isValid = false;
    }
    
    // Message validation
    if (message.length < 10) {
        showError('message', 'Message must be at least 10 characters long');
        isValid = false;
    }
    
    if (isValid) {
        // Form is valid, you can submit it
        alert('Form submitted successfully!');
        this.reset();
    }
});

function showError(fieldId, message) {
    const errorElement = document.getElementById(`${fieldId}Error`);
    const formGroup = document.getElementById(fieldId).parentElement;
    errorElement.textContent = message;
    formGroup.classList.add('error');
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    const formGroups = document.querySelectorAll('.form-group');
    
    errorMessages.forEach(error => error.textContent = '');
    formGroups.forEach(group => group.classList.remove('error'));
}
