document.addEventListener('DOMContentLoaded', () => {
    const slideContainer = document.querySelector('.slide-container');
    const showSignup = document.getElementById('showSignup');
    const showLogin = document.getElementById('showLogin');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const tyBar = document.querySelector('.ty-bar');
    const byBar = document.querySelector('.by-bar');

    // Animate logo bars
    setTimeout(() => {
        const logoText = document.querySelector('.logo-text');
        const tyWidth = logoText.offsetWidth / 2; // Width of "TY" (half)
        const byWidth = logoText.offsetWidth / 2; // Width of "BY" (half)
        
        tyBar.style.width = `${tyWidth}px`;
        byBar.style.width = `${byWidth}px`;
    }, 500);

    showSignup.addEventListener('click', (e) => {
        e.preventDefault();
        slideContainer.style.transform = 'translateX(-50%)';
        resetTypingAnimation('#welcome-to-tyby');
    });

    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        slideContainer.style.transform = 'translateX(0)';
        resetTypingAnimation('#welcome-back');
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Implement login logic here
        console.log('Login submitted');
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Implement signup logic here
        console.log('Signup submitted');
    });

    function resetTypingAnimation(selector) {
        const element = document.querySelector(selector);
        element.style.animation = 'none';
        element.offsetHeight; // Trigger reflow
        element.style.animation = null;
    }
});

function handleCredentialResponse(response) {
    // Handle the Google Sign-In response
    console.log('Google Sign-In response:', response);
    // Implement your server-side verification and user authentication here
}