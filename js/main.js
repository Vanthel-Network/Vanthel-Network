// Smooth scroll with optimized easing and performance
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        window.requestAnimationFrame(() => {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
});

// Sticky navigation bar with background color change on scroll
const header = document.querySelector('header');
const scrollThreshold = 50;
const headerHeight = header.offsetHeight;
window.addEventListener('scroll', debounce(() => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > scrollThreshold) {
        header.classList.add('sticky');
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else {
        header.classList.remove('sticky');
        header.style.backgroundColor = 'transparent';
    }
}, 200)); // Added debounce to limit function calls during scroll

// Hero section animation with a delay and staggered fade-in
const heroContent = document.querySelector('.hero-content');
const fadeInElements = [heroContent.querySelector('h1'), heroContent.querySelector('p'), heroContent.querySelector('.cta-btn')];
const animateHeroContent = () => {
    fadeInElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('fade-in');
        }, index * 300); // Stagger the fade-ins
    });
};
window.addEventListener('load', animateHeroContent);

// Service cards scroll animation with intersection observer for performance
const serviceCards = document.querySelectorAll('.service-card');
const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            serviceObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

serviceCards.forEach((card, index) => {
    setTimeout(() => {
        serviceObserver.observe(card);
    }, index * 200); // Stagger the animation with a delay
});

// Footer fade-in when nearing viewport
const footer = document.querySelector('footer');
window.addEventListener('scroll', debounce(() => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const footerPosition = footer.offsetTop;
    if (scrollPosition > footerPosition - 200) {
        footer.classList.add('fade-in-footer');
    }
}, 100)); // Debounced scroll listener for footer fade-in

// Mobile menu toggle with overlay effect and smooth transitions
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');
const menuOverlay = document.querySelector('.menu-overlay');
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuOverlay.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
        nav.classList.remove('open');
        menuOverlay.classList.remove('active');
    }
});

// Dynamic header resizing with smooth transition
let lastScroll = 0;
window.addEventListener('scroll', debounce(() => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > lastScroll) {
        document.querySelector('header').style.height = '50px'; // Shrink header
    } else {
        document.querySelector('header').style.height = `${headerHeight}px`;
    }
    lastScroll = scrollPosition;
}, 150)); // Debounce for performance optimization

// Parallax effect with enhanced performance
const heroBackground = document.querySelector('.hero-background');
window.addEventListener('scroll', throttle(() => {
    let scrollPosition = window.scrollY;
    heroBackground.style.transform = `translateY(${scrollPosition * 0.4}px)`;
}, 20)); // Throttle for parallax effect to reduce performance impact

// Lazy load images for optimization
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
        }
    });
}, { threshold: 0.1 });

images.forEach(image => {
    imageObserver.observe(image);
});

// Function to debounce scroll events for optimized performance
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Function to throttle scroll events for optimized performance
function throttle(func, delay) {
    let last = 0;
    return function (...args) {
        const now = new Date().getTime();
        if (now - last >= delay) {
            last = now;
            func.apply(this, args);
        }
    };
}

// Add transitions for new elements appearing in viewport
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
