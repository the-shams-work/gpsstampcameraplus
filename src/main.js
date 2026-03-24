// Mapwa Landing Page Interactivity
document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initialize reveal elements
    const revealElements = document.querySelectorAll('.feature-card, .cta-section');
    revealElements.forEach(el => {
        el.classList.add('reveal-on-scroll');
        revealObserver.observe(el);
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '16px 0';
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            navbar.style.padding = '24px 0';
            navbar.style.background = 'rgba(10, 10, 10, 0.8)';
        }
    });

    console.log('Mapwa Modern Website Initialized');
});
