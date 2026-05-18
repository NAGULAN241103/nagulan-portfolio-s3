// Smooth scrolling
document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {
    anchor.addEventListener('click', 
    function(e) {
        e.preventDefault();
        document.querySelector(
            this.getAttribute('href')
        ).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = 
            '0 2px 20px rgba(0,212,255,0.3)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Animation on scroll
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 
                    'translateY(0)';
            }
        });
    }
);

document.querySelectorAll(
    '.project-card, .skill-card, .about-card'
).forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});