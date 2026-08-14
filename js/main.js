/* ====================================================================
   FirmGround — Landing page interactions

   1. The "Three Steps" tabs (For founders / For sales executives).
   2. The waitlist modal launched from the pricing buttons.
==================================================================== */

/* ---- Three Steps tabs -------------------------------------------- */
(function () {
  var tabs = document.querySelectorAll('.tab');
  var panels = document.querySelectorAll('.steps__panel');

  function selectTab(name) {
    tabs.forEach(function (tab) {
      var isActive = tab.dataset.tab === name;
      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    panels.forEach(function (panel) {
      panel.classList.toggle('is-hidden', panel.dataset.panel !== name);
    });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      selectTab(tab.dataset.tab);
    });
  });
})();

/* ---- Waitlist modal ---------------------------------------------- */
(function () {
  var modal = document.getElementById('waitlist-modal');
  if (!modal) return;

  var openers = document.querySelectorAll('[data-open-waitlist]');
  var closers = modal.querySelectorAll('[data-close]');
  var rowForm = modal.querySelector('.row-form');
  var rowSuccess = modal.querySelector('.row-success');
  var lastFocused = null;

  function openModal() {
    lastFocused = document.activeElement;

    // Reset to the form view in case a previous submit left the success
    // message showing (MailerLite toggles these with inline display).
    if (rowForm) rowForm.style.display = '';
    if (rowSuccess) rowSuccess.style.display = 'none';
    // Clear any leftover MailerLite validation error styling.
    modal.querySelectorAll('.ml-error').forEach(function (el) {
      el.classList.remove('ml-error');
    });

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeydown);

    var input = modal.querySelector('input[type="email"]');
    if (input) setTimeout(function () { input.focus(); }, 40);
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onKeydown);
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  function onKeydown(e) {
    if (e.key === 'Escape') { closeModal(); return; }
    if (e.key !== 'Tab') return;

    // Keep keyboard focus inside the dialog while it's open.
    var focusable = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    var visible = Array.prototype.filter.call(focusable, function (el) {
      return !el.disabled && el.offsetParent !== null;
    });
    if (!visible.length) return;

    var first = visible[0];
    var last = visible[visible.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  openers.forEach(function (btn) {
    btn.addEventListener('click', openModal);
  });
  closers.forEach(function (btn) {
    btn.addEventListener('click', closeModal);
  });
})();
