const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) { 
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        hamburger.classList.toggle('active'); 
    });
}

document.addEventListener('click', (event) => {
    if (navLinks && navLinks.classList.contains('show') && !navLinks.contains(event.target) && event.target !== hamburger) {
        navLinks.classList.remove('show');
        hamburger.classList.remove('active');
    }
});
