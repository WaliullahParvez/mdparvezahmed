/**
 * main.js — All interactivity for the portfolio.
 * Handles: nav scroll, mobile menu, typewriter, scroll animations,
 *          section reveal, footer year, smooth scrolling.
 */

/* ── SCROLL TO SECTION ─────────────────────────────────────────────────────── */
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const navHeight = document.getElementById('navbar').offsetHeight;
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 10;
  window.scrollTo({ top, behavior: 'smooth' });
}

/* ── NAVBAR SCROLL EFFECT ──────────────────────────────────────────────────── */
function initNav() {
  const navbar  = document.getElementById('navbar');
  const burger  = document.getElementById('navBurger');
  const links   = document.getElementById('navLinks');

  // Scroll shadow
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('nav--scrolled', window.scrollY > 40);
  }, { passive: true });

  // Burger toggle
  burger.addEventListener('click', () => {
    const open = links.classList.toggle('nav__links--open');
    burger.innerHTML = open ? '&#10005;' : '&#9776;';
    burger.setAttribute('aria-expanded', open);
  });

  // Close menu when a nav link is clicked
  links.querySelectorAll('.nav__link').forEach(btn => {
    btn.addEventListener('click', () => {
      links.classList.remove('nav__links--open');
      burger.innerHTML = '&#9776;';
      burger.setAttribute('aria-expanded', false);
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
      links.classList.remove('nav__links--open');
      burger.innerHTML = '&#9776;';
    }
  });
}

/* ── TYPEWRITER ────────────────────────────────────────────────────────────── */
function initTypewriter() {
  const el     = document.getElementById('typewriter');
  if (!el) return;
  const text   = 'I break systems to make them unbreakable.';
  const speed  = 55;
  let   index  = 0;

  function type() {
    if (index < text.length) {
      el.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }

  // Small delay before starting so page has loaded visually
  setTimeout(type, 600);
}

/* ── INTERSECTION OBSERVER — SECTION REVEAL ───────────────────────────────── */
function initSectionReveal() {
  const sections = document.querySelectorAll('.section');
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section--visible');
          observer.unobserve(entry.target); // fire once only
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach(sec => observer.observe(sec));
}

/* ── FOOTER YEAR ───────────────────────────────────────────────────────────── */
function initFooterYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ── ACTIVE NAV LINK HIGHLIGHT ON SCROLL ──────────────────────────────────── */
function initActiveNavHighlight() {
  const sectionIds = ['about', 'skills', 'projects', 'certifications', 'achievements', 'services', 'contact'];
  const navButtons = document.querySelectorAll('.nav__link');

  function updateActive() {
    const scrollY     = window.scrollY;
    const navHeight   = document.getElementById('navbar').offsetHeight;
    let   currentId   = '';

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      if (el.offsetTop - navHeight - 60 <= scrollY) {
        currentId = id;
      }
    });

    navButtons.forEach(btn => {
      const onclick = btn.getAttribute('onclick') || '';
      const match   = onclick.match(/'([^']+)'/);
      if (match) {
        btn.style.color = match[1] === currentId ? 'var(--green)' : '';
      }
    });
  }

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive(); // run once on load
}

/* ── STAGGER ANIMATION DELAYS FOR CARDS ───────────────────────────────────── */
function initStaggerDelays() {
  const grids = [
    '.skills__grid',
    '.projects__grid',
    '.certs__grid',
    '.achievements__grid',
    '.services__grid',
  ];

  grids.forEach(selector => {
    const grid = document.querySelector(selector);
    if (!grid) return;
    Array.from(grid.children).forEach((card, i) => {
      card.style.animationDelay = `${i * 0.1}s`;
    });
  });
}

/* ── KEYBOARD ACCESSIBILITY: CLOSE MENU ON ESC ────────────────────────────── */
function initKeyboard() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const links  = document.getElementById('navLinks');
      const burger = document.getElementById('navBurger');
      if (links.classList.contains('nav__links--open')) {
        links.classList.remove('nav__links--open');
        burger.innerHTML = '&#9776;';
      }
    }
  });
}

/* ── INIT ALL ──────────────────────────────────────────────────────────────── */

/* ── Project viz bar animations ───────────────────── */
function initProjViz() {
  // Store target widths from inline style, zero them out initially
  document.querySelectorAll('.pv-bar, .pass-fill').forEach(el => {
    const w = el.style.width || '0%';
    el.style.setProperty('--w', w);
    el.style.width = '0%';
  });

  const vizObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        // restore widths
        entry.target.querySelectorAll('.pv-bar, .pass-fill').forEach(el => {
          el.style.width = el.style.getPropertyValue('--w');
        });
        vizObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.proj__viz').forEach(el => vizObs.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initTypewriter();
  initSectionReveal();
  initFooterYear();
  initActiveNavHighlight();
  initStaggerDelays();
  initKeyboard();
  initProjViz();
});
