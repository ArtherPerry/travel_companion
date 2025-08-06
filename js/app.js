document.addEventListener('DOMContentLoaded', () => {
  // --- AOS Initialization ---
  AOS.init({
    duration: 800, // Animation duration in milliseconds
    once: true,    // Whether animation should happen only once
  });

  // --- Hamburger Menu Logic ---
  const hamburger = document.getElementById('hamburger-btn');
  const navLinksContainer = document.getElementById('nav-links');
  const allLinks = navLinksContainer.querySelectorAll('a');

  hamburger.addEventListener('click', () => {
    // Toggle the 'active' class on the nav links container and the hamburger button
    navLinksContainer.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // --- Smooth Scrolling & Mobile Menu Closing ---
  allLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Close the mobile menu when a link is clicked
      if (navLinksContainer.classList.contains('active')) {
        navLinksContainer.classList.remove('active');
        hamburger.classList.remove('active');
      }

      // Smooth scroll logic
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href');
      if (targetId === '#') { // Handle logo click
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerOffset = 70; // Height of the fixed header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Contact Form Logic ---
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents the form from actually submitting
    alert('Thank you for your interest! We will be in touch shortly.');
    contactForm.reset(); // Clears the form
  });
});
