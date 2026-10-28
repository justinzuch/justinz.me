document.addEventListener('DOMContentLoaded', () => {
    // Set dynamic copyright year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const formStatus = document.getElementById('formStatus');
    if (formStatus) {
        const statusMessages = {
            sent: ['Thank you for reaching out! Your message has been submitted.', 'success'],
            invalid: ['Please check your name, email, and message, then try again.', 'danger'],
            failed: ['Your message could not be sent right now. Please try again later.', 'danger']
        };
        const [message, style] = statusMessages[new URLSearchParams(window.location.search).get('status')] || [];
        if (message) {
            formStatus.textContent = message;
            formStatus.className = `mb-3 alert alert-${style}`;
        }
    }
});
