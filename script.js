// ========================================
// Form Submission Handler
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const formMessage = document.getElementById('formMessage');
    const submitBtn = form.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');

    // Replace this URL with your Google Apps Script Web App URL
    // Instructions to set this up are in the README.md file
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyZn8VwY1inNTSRh8EnCdEKMfehvh-ZzzrfVw_5tf9KAkTDmRP_FFPLtFgia3PArsa36w/exec';

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            firstName: document.getElementById('firstName').value.trim(),
            lastName: document.getElementById('lastName').value.trim(),
            email: document.getElementById('email').value.trim(),
            userType: document.getElementById('userType').value,
            timestamp: new Date().toISOString()
        };

        // Validate form
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.userType) {
            showMessage('Please fill in all fields', 'error');
            return;
        }

        // Show loading state
        setLoadingState(true);
        hideMessage();

        try {
            // Check if Google Script URL is configured
            if (GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_SCRIPT_URL_HERE') {
                // For demo purposes - simulate success
                console.log('Form Data:', formData);
                await simulateDelay(1500);
                showMessage('Thank you for joining our waitlist! We\'ll be in touch soon.', 'success');
                form.reset();
            } else {
                // Send data to Google Sheets
                const response = await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });

                // Note: With 'no-cors' mode, we can't read the response
                // So we assume success if no error is thrown
                showMessage('Thank you for joining our waitlist! We\'ll be in touch soon.', 'success');
                form.reset();
            }
        } catch (error) {
            console.error('Error:', error);
            showMessage('Oops! Something went wrong. Please try again.', 'error');
        } finally {
            setLoadingState(false);
        }
    });

    // Helper Functions
    function setLoadingState(isLoading) {
        submitBtn.disabled = isLoading;
        if (isLoading) {
            btnText.style.display = 'none';
            btnLoader.style.display = 'inline-block';
        } else {
            btnText.style.display = 'inline';
            btnLoader.style.display = 'none';
        }
    }

    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
    }

    function hideMessage() {
        formMessage.className = 'form-message';
        formMessage.textContent = '';
    }

    function simulateDelay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Email validation on blur
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('blur', function() {
        const email = this.value.trim();
        if (email && !isValidEmail(email)) {
            this.style.borderColor = '#ef4444';
        } else {
            this.style.borderColor = '#e5e7eb';
        }
    });

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

// ========================================
// Smooth Scroll Animation for Page Load
// ========================================

window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(function() {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

