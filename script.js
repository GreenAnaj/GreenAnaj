// Small interactive helpers: nav toggle, smooth-scroll, reveal on scroll
document.addEventListener('DOMContentLoaded', function () {
  // Year in footer
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const primaryNav = document.getElementById('primary-nav');
  navToggle && navToggle.addEventListener('click', function () {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    if (primaryNav) primaryNav.style.display = expanded ? 'none' : 'block';
  });

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close mobile nav if open
        if (window.innerWidth < 980 && primaryNav) {
          primaryNav.style.display = 'none';
          navToggle && navToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // Simple reveal on scroll
  const reveals = document.querySelectorAll('.section, .visual-card, .product-card, .about-card, .belief');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('reveal', 'active');
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(r => revealObserver.observe(r));
});