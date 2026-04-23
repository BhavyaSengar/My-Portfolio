// Carousel Logic
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;

function updateSlide() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
}

nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    updateSlide();
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
});

// Window resize listener to keep carousel centered
window.addEventListener('resize', updateSlide);

// Simple Form Alert
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Message Sent! Bhavya will reach out to you shortly.");
});