/* Minerva Strategies - site interactions. No dependencies. */
(function () {
  'use strict';

  /* ---- mobile navigation ---- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---- mark the active nav item ---- */
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a[href]').forEach(function (a) {
    if (a.getAttribute('href') === here) a.setAttribute('aria-current', 'page');
  });

  /* ---- reveal on scroll ---- */
  var revealables = document.querySelectorAll('.reveal');
  if (revealables.length) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      revealables.forEach(function (el) { io.observe(el); });
    } else {
      revealables.forEach(function (el) { el.classList.add('is-in'); });
    }
  }

  /* ---- pricing page: category jump links ---- */
  var feeNav = document.querySelector('.fee-nav');
  if (feeNav) {
    var buttons = Array.prototype.slice.call(feeNav.querySelectorAll('button'));
    var blocks = Array.prototype.slice.call(document.querySelectorAll('.fee-block'));

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = document.getElementById(btn.dataset.target);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    // Highlight the button for whichever fee block is currently in view.
    if ('IntersectionObserver' in window && blocks.length) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          buttons.forEach(function (b) {
            b.classList.toggle('is-active', b.dataset.target === entry.target.id);
          });
        });
      }, { rootMargin: '-100px 0px -70% 0px' });
      blocks.forEach(function (b) { spy.observe(b); });
    }
  }

  /* ---- contact form ----
     No backend is wired up. Swap the action below for your form endpoint
     (Formspree, Netlify Forms, your own handler) to receive submissions. */
  var form = document.querySelector('.form[data-demo="true"]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = form.querySelector('.form__status');
      if (status) {
        status.textContent =
          'Thanks \u2014 your enquiry has been captured by the demo handler. Connect a form endpoint in assets/js/main.js to receive it by email.';
        status.classList.add('is-visible', 'is-ok');
      }
      form.reset();
    });
  }

  /* ---- footer year ---- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
