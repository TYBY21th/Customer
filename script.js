document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Add event listener to the form
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Mock form submission
        console.log('Form submitted:', { name, email, message });

        // Display an alert to confirm form submission
        alert('Thank you for your message! We will get back to you shortly.');

        // Optionally, you can clear the form fields after submission
        contactForm.reset();
    });
});
