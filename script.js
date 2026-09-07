(function () {
  "use strict";

  var root = document.documentElement;
  var toggleBtn = document.getElementById("theme-toggle");
  var themeIcon = document.getElementById("theme-icon");
  var STORAGE_KEY = "resume-theme";

  var SUN_PATH = '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>';
  var MOON_PATH = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
    }
    if (toggleBtn) {
      toggleBtn.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
    }
    if (themeIcon) {
      themeIcon.innerHTML = theme === "dark" ? SUN_PATH : MOON_PATH;
    }
  }

  var stored = null;
  try {
    stored = localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    /* localStorage unavailable (e.g. file:// in some browsers) */
  }

  var prefersDark =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  var initialTheme = stored || (prefersDark ? "dark" : "light");
  applyTheme(initialTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
      var next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {
        /* ignore */
      }
    });
  }

  var sidebar = document.getElementById("sidebar");
  var sidebarToggle = document.getElementById("sidebar-toggle");
  var sidebarBackdrop = document.getElementById("sidebar-backdrop");

  function closeSidebar() {
    if (!sidebar) return;
    sidebar.classList.remove("open");
    if (sidebarBackdrop) sidebarBackdrop.classList.remove("open");
    if (sidebarToggle) sidebarToggle.setAttribute("aria-expanded", "false");
  }

  function openSidebar() {
    if (!sidebar) return;
    sidebar.classList.add("open");
    if (sidebarBackdrop) sidebarBackdrop.classList.add("open");
    if (sidebarToggle) sidebarToggle.setAttribute("aria-expanded", "true");
  }

  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", function () {
      if (sidebar && sidebar.classList.contains("open")) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }

  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener("click", closeSidebar);
  }

  var navLinks = document.querySelectorAll("[data-nav]");
  navLinks.forEach(function (link) {
    link.addEventListener("click", closeSidebar);
  });

  var sections = [];
  navLinks.forEach(function (link) {
    var id = link.getAttribute("href");
    if (id && id.charAt(0) === "#") {
      var el = document.querySelector(id);
      if (el) sections.push({ id: id, el: el, link: link });
    }
  });

  function updateActiveNav() {
    var scrollPos = window.scrollY + 140;
    var current = sections[0];
    sections.forEach(function (s) {
      if (s.el.offsetTop <= scrollPos) current = s;
    });
    navLinks.forEach(function (l) {
      l.classList.remove("active");
    });
    if (current) current.link.classList.add("active");
  }

  if (sections.length) {
    window.addEventListener("scroll", updateActiveNav, { passive: true });
    updateActiveNav();
  }
})();
