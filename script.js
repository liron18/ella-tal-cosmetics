document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const mobilePanel = document.getElementById('mobilePanel');

  menuToggle.addEventListener('click', () => {
    const open = mobilePanel.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open);
  });

  mobilePanel.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobilePanel.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));
});
