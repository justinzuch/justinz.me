document.addEventListener('DOMContentLoaded', () => {
    // Set dynamic copyright year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Handle contact form submission simulation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for reaching out! Your message has been sent.');
            contactForm.reset();
        });
    }
});

// Single Page Application (SPA) navigation router
function showPage(pageId) {
    const pages = ['resume', 'projects', 'contact'];

    // Hide all section views
    pages.forEach(id => {
        const pageEl = document.getElementById(`page-${id}`);
        const navEl = document.getElementById(`nav-${id}`);

        if (pageEl) {
            pageEl.classList.add('d-none');
        }
        if (navEl) {
            navEl.classList.remove('active');
        }
    });

    // Reveal target view
    const selectedPage = document.getElementById(`page-${pageId}`);
    const selectedNav = document.getElementById(`nav-${pageId}`);

    if (selectedPage) {
        selectedPage.classList.remove('d-none');
    }
    if (selectedNav) {
        selectedNav.classList.add('active');
    }

    // Auto-collapse mobile navbar after selection
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
            bsCollapse.hide();
        }
    }

    // Scroll back to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
