// main.js

// Smooth scroll for anchor links with easing effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));
        
        // Using window.scrollTo with behavior smooth and a subtle easing
        window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust for sticky navbar
            behavior: 'smooth'
        });
    });
});

// Sticky navigation bar with a subtle background color change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    // Sticky effect with a background color transition
    if (scrollPosition > 50) {
        header.classList.add('sticky');
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'; // Dark background on scroll
    } else {
        header.classList.remove('sticky');
        header.style.backgroundColor = 'transparent';
    }
});

// Hero section animation with staggered fades for elements
const heroContent = document.querySelector('.hero-content');
const heroText = document.querySelector('.hero-content h1');
const heroDesc = document.querySelector('.hero-content p');
const ctaBtn = document.querySelector('.cta-btn');

window.addEventListener('load', () => {
    setTimeout(() => {
        // Fade-in effect with different delay for each element
        heroContent.style.opacity = 1;
        heroText.classList.add('fade-in');
        heroDesc.classList.add('fade-in');
        ctaBtn.classList.add('fade-in');
    }, 300); // Small delay to let content load before animation starts
});

// Scroll animations for service cards with dynamic staggered animations
const serviceCards = document.querySelectorAll('.service-card');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add 'animate' class to each card with a delay for staggered effect
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Stop observing once the element is animated
        }
    });
}, { threshold: 0.5 });

serviceCards.forEach((card, index) => {
    setTimeout(() => {
        observer.observe(card);
    }, index * 200); // Stagger each card’s animation by 200ms
});

// Fade-in effect for footer on scroll with scroll position tracking
const footer = document.querySelector('footer');
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const footerPosition = footer.offsetTop;

    // Fade-in footer when it’s about to be in view
    if (scrollPosition > footerPosition - 200) {
        footer.classList.add('fade-in-footer');
    }
});

// Mobile menu toggle with smooth transition and overlay background effect
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');
const menuOverlay = document.querySelector('.menu-overlay'); // New overlay background

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuOverlay.classList.toggle('active'); // Show overlay when menu opens
});

// Close the mobile menu when clicking outside of it
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
        nav.classList.remove('open');
        menuOverlay.classList.remove('active');
    }
});

// Detect window resize to improve scroll performance
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    // Only trigger animations if the user is scrolling up or down
    if (currentScroll > lastScroll) {
        // Add custom behavior for scrolling down
    } else {
        // Add custom behavior for scrolling up
    }

    lastScroll = currentScroll;
});

// Implementing parallax effect for the hero background image
const heroBackground = document.querySelector('.hero-background');
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    heroBackground.style.transform = `translateY(${scrollPosition * 0.4}px)`; // Parallax effect
});

// Lazy loading of images for performance optimization
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            entry.target.classList.add('loaded');
            imageObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

images.forEach(image => {
    imageObserver.observe(image);
});

// Dynamic header resizing effect when user scrolls
const headerHeight = document.querySelector('header').offsetHeight;
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Shrink header height as user scrolls down
    if (scrollPosition > 100) {
        document.querySelector('header').style.height = '50px';
    } else {
        document.querySelector('header').style.height = headerHeight + 'px';
    }
});

// Add transitions for all new elements when they appear in the viewport
const allElements = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

allElements.forEach(element => {
    fadeObserver.observe(element);
});
