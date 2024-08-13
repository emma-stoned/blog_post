// script.js

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Form validation for create post
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  if (form) {
      form.addEventListener('submit', function(e) {
          const title = form.querySelector('#title').value.trim();
          const content = form.querySelector('#content').value.trim();

          if (title === '' || content === '') {
              e.preventDefault();
              alert('Please fill in both title and content fields.');
          }
      });
  }
});

// Header color change on scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
      header.style.backgroundColor = '#555';
  } else {
      header.style.backgroundColor = 'transparent';
  }
});

// Scroll-to-top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '⬆';
scrollToTopBtn.style.position = 'fixed';
scrollToTopBtn.style.bottom = '30px';
scrollToTopBtn.style.right = '30px';
scrollToTopBtn.style.padding = '10px';
scrollToTopBtn.style.backgroundColor = '#333';
scrollToTopBtn.style.color = '#fff';
scrollToTopBtn.style.border = 'none';
scrollToTopBtn.style.borderRadius = '50%';
scrollToTopBtn.style.cursor = 'pointer';
scrollToTopBtn.style.display = 'none';
scrollToTopBtn.style.zIndex = '1000';
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
      scrollToTopBtn.style.display = 'block';
  } else {
      scrollToTopBtn.style.display = 'none';
  }
});

// Fade-in effect for content on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
      if (!entry.isIntersecting) {
          return;
      } else {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
      }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
