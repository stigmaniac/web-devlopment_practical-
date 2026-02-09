// Smooth scroll (already had)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Dark mode toggle
const toggle = document.getElementById('theme-toggle');
const body = document.body;

toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  toggle.innerHTML = body.classList.contains('dark') 
    ? '<i class="fas fa-sun"></i>' 
    : '<i class="fas fa-moon"></i>';
});

// Scroll animations for cards/sections
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-card, .project-card, .section').forEach(el => {
  observer.observe(el);
});