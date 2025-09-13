// ========================
// Burger menu toggle
// ========================
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
if (burger) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}

// ========================
// Testimonials slider
// ========================
let testimonials = document.querySelectorAll('.testimonial');
let index = 0;

function showTestimonial(i) {
  testimonials.forEach((t, idx) => {
    t.classList.toggle('active', idx === i);
  });
}

if (testimonials.length > 0) {
  setInterval(() => {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
  }, 4000);
}

// ========================
// Footer year
// ========================
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ========================
// Reveal on scroll
// ========================
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.2 }
);
reveals.forEach((r) => observer.observe(r));

// ========================
// Zoom QR (daftar.html only)
// ========================
const qrImg = document.querySelector('.qr-img');
if (qrImg) {
  qrImg.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.classList.add('qr-overlay');

    const zoomedImg = document.createElement('img');
    zoomedImg.src = qrImg.src;
    zoomedImg.classList.add('qr-zoom');

    overlay.appendChild(zoomedImg);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => {
      overlay.remove();
    });
  });
}
