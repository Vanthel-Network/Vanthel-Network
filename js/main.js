// main.js

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Sticky navigation bar
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Hero section animation
const heroContent = document.querySelector('.hero-content');
const heroText = document.querySelector('.hero-content h1');
const heroDesc = document.querySelector('.hero-content p');
const ctaBtn = document.querySelector('.cta-btn');

window.addEventListener('load', () => {
    setTimeout(() => {
        heroContent.style.opacity = 1;
        heroText.classList.add('fade-in');
        heroDesc.classList.add('fade-in');
        ctaBtn.classList.add('fade-in');
    }, 500);
});

// Scroll animations for service cards
const serviceCards = document.querySelectorAll('.service-card');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

serviceCards.forEach(card => {
    observer.observe(card);
});

// Fade-in effect for footer on scroll
const footer = document.querySelector('footer');
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    if (scrollPosition > footer.offsetTop) {
        footer.classList.add('fade-in-footer');
    }
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
});
