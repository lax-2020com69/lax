document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }

        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        if (phone && !phonePattern.test(phone)) {
            alert('Phone number must be in the format 123-456-7890.');
            return;
        }

        const mailtoLink = `mailto:laxmanlax6400@gmail.com?subject=Contact%20Form%20Submission%20from%20${encodeURIComponent(name)}&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0APhone:%20${encodeURIComponent(phone)}%0AMessage:%0A${encodeURIComponent(message)}`;

        window.location.href = mailtoLink;
    });
});
