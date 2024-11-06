document.addEventListener('DOMContentLoaded', () => {
    console.log("Document loaded and ready!");

    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Show/Hide Contact Info on Hover (example of adding interactivity)
    const contactSection = document.getElementById('contact');
    contactSection.addEventListener('mouseenter', () => {
        contactSection.style.backgroundColor = '#333333';
    });
    contactSection.addEventListener('mouseleave', () => {
        contactSection.style.backgroundColor = '#1f1f1f';
    });
});
