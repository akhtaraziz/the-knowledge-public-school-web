// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Facilities Slider
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const sliderContainer = document.querySelector('.slider-container');

let currentSlide = 0;
const totalSlides = slides.length;

// Initialize slider
function initSlider() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${index * 100}%)`;
    });
    
    updateActiveSlide();
}

// Update active slide and dots
function updateActiveSlide() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
            slide.classList.add('active');
        }
    });
    
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentSlide) {
            dot.classList.add('active');
        }
    });
    
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateActiveSlide();
}

// Previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateActiveSlide();
}

// Event listeners for slider controls
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateActiveSlide();
    });
});

// Auto slide change every 5 seconds
let slideInterval = setInterval(nextSlide, 5000);

// Pause auto slide on hover
const facilitiesSlider = document.querySelector('.facilities-slider');
facilitiesSlider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

facilitiesSlider.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 5000);
});

// Admission Form Submission
const admissionForm = document.getElementById('admissionForm');

admissionForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const parentName = document.getElementById('parentName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const grade = document.getElementById('grade').value;
    const message = document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    // For demo purposes, we'll just show a success message
    const submitBtn = admissionForm.querySelector('.btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;
    
    // Simulate form submission with gold theme styling
    setTimeout(() => {
        // Create a custom alert with gold theme
        const customAlert = document.createElement('div');
        customAlert.className = 'custom-alert';
        customAlert.innerHTML = `
            <div class="alert-content">
                <div class="alert-icon gold-bg">
                    <i class="fas fa-check"></i>
                </div>
                <h3 class="gold-text">Admission Request Submitted!</h3>
                <p>Thank you, <strong>${name}</strong>! Your admission request has been successfully submitted.</p>
                <p>Our admissions office will contact you at <strong>${phone}</strong> within 24 hours.</p>
                <button class="btn btn-gold close-alert">OK</button>
            </div>
        `;
        
        // Add styles for custom alert
        const style = document.createElement('style');
        style.textContent = `
            .custom-alert {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 2000;
                backdrop-filter: blur(5px);
            }
            .alert-content {
                background: var(--medium-gray);
                padding: 40px;
                border-radius: 10px;
                max-width: 500px;
                width: 90%;
                text-align: center;
                border: 2px solid var(--gold);
                box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
            }
            .alert-icon {
                width: 70px;
                height: 70px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 20px;
                font-size: 1.8rem;
            }
            .alert-content h3 {
                margin-bottom: 20px;
                font-family: 'Cinzel', serif;
            }
            .alert-content p {
                margin-bottom: 15px;
                color: var(--text-gray);
            }
            .close-alert {
                margin-top: 20px;
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(customAlert);
        
        // Close alert when OK button is clicked
        document.querySelector('.close-alert').addEventListener('click', () => {
            document.body.removeChild(customAlert);
            document.head.removeChild(style);
        });
        
        // Reset form
        admissionForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
});

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.program-card, .facility-item, .about-image, .admissions-form, .highlight-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initialize the slider when page loads
document.addEventListener('DOMContentLoaded', () => {
    initSlider();
    
    // Set initial state for animation
    const animatedElements = document.querySelectorAll('.program-card, .facility-item, .about-image, .admissions-form, .highlight-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    // Trigger once on load
    setTimeout(animateOnScroll, 300);
    
    // Add gold shimmer effect to gold elements
    const goldElements = document.querySelectorAll('.gold-text, .gold-bg, .gold-icon');
    goldElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.2) drop-shadow(0 0 8px rgba(212, 175, 55, 0.7))';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.filter = 'brightness(1) drop-shadow(0 0 5px rgba(212, 175, 55, 0.5))';
        });
    });
    
    // Instructions for adding actual logo and images
    console.log('%c✨ The Knowledge Public School Website ✨', 'color: #D4AF37; font-size: 18px; font-weight: bold;');
    console.log('%cTo complete your website:', 'color: #FFFFFF; font-size: 14px;');
    console.log('%c1. Replace the logo placeholder with your actual logo:', 'color: #AAAAAA;');
    console.log('   - Find <img> tags with class "school-logo" and "footer-school-logo"');
    console.log('   - Update the "src" attribute with your logo URL');
    console.log('%c2. Replace the school building placeholder:', 'color: #AAAAAA;');
    console.log('   - Find the <img> tag with id "schoolBuilding"');
    console.log('   - Update the "src" attribute with your school building photo URL');
    console.log('%c3. Update the hero background image if needed:', 'color: #AAAAAA;');
    console.log('   - In CSS, find .hero background-image property');
    console.log('%c🎓 Your black & gold theme website is ready! 🎓', 'color: #D4AF37; font-size: 16px; font-weight: bold;');
});
