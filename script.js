document.addEventListener('DOMContentLoaded', () => {
    const typewriterElement = document.getElementById('typewriter');
    const loginBox = document.getElementById('loginBox');
    const signupBox = document.getElementById('signupBox');
    const showSignupLink = document.getElementById('showSignup');
    const showLoginLink = document.getElementById('showLogin');
    const loginSendOTP = document.getElementById('loginSendOTP');
    const signupSendOTP = document.getElementById('signupSendOTP');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm_password');
    const passwordMessage = document.getElementById('password-message');

    // Typewriter effect
    const text = "Welcome to TYBY";
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            typewriterElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();

    // Form sliding effect
    showSignupLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginBox.style.transform = 'translateX(-100%)';
        signupBox.style.transform = 'translateX(0)';
    });

    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginBox.style.transform = 'translateX(0)';
        signupBox.style.transform = 'translateX(100%)';
    });

    // Password confirmation
    function checkPasswordMatch() {
        if (password.value !== confirmPassword.value) {
            passwordMessage.style.display = 'block';
            signupSendOTP.disabled = true;
        } else {
            passwordMessage.style.display = 'none';
            signupSendOTP.disabled = false;
        }
    }

    password.addEventListener('input', checkPasswordMatch);
    confirmPassword.addEventListener('input', checkPasswordMatch);

    // OTP functionality
    function handleOTP(formId) {
        const form = document.getElementById(formId);
        const otpGroup = form.querySelector('.otp-group');
        const submitBtn = form.querySelector('.submit-btn');
        
        otpGroup.style.display = 'block';
        submitBtn.style.display = 'block';
        this.style.display = 'none';
        
        // Here you would typically send an OTP to the user's email
        console.log('OTP sent for', formId);
    }

    loginSendOTP.addEventListener('click', function() { handleOTP.call(this, 'loginForm'); });
    signupSendOTP.addEventListener('click', function() { handleOTP.call(this, 'signupForm'); });
});