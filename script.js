document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    
        // Use EmailJS to send the form data
        emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', form)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Thank you for your message! We\'ll get back to you soon.');
                form.reset();
            }, (error) => {
                console.log('FAILED...', error);
                alert('Oops! Something went wrong. Please try again.');
            });
    });
    
    // Initialize EmailJS with your user ID
    (function() {
        emailjs.init('USER_ID');
    })();
    
    // Fade-in animation on scroll
    const fadeInElements = document.querySelectorAll('.fade-in-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});