/* ====================================================================
   FirmGround — Landing page interactions

   The "Three Steps" section has two tabs: "For founders" and
   "For sales executives". Clicking a tab shows its panel and hides
   the other. That's the only interactive piece on the page.
==================================================================== */

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
