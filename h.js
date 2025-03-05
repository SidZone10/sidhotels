document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your booking request! We will check availability and get back to you shortly.');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
});