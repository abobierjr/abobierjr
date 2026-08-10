(function () {
  "use strict";

  var root = document.documentElement;
  var toggleBtn = document.getElementById("theme-toggle");
  var toggleKnob = toggleBtn ? toggleBtn.querySelector(".knob") : null;
  var STORAGE_KEY = "resume-theme";

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
    }
    if (toggleBtn) {
      if (toggleKnob) {
        toggleKnob.textContent = theme === "dark" ? "☀️" : "🌙";
      }
      toggleBtn.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
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

  var printBtn = document.getElementById("print-btn");
  if (printBtn) {
    printBtn.addEventListener("click", function () {
      window.print();
    });
  }

  var navResume = document.getElementById("nav-resume");
  if (navResume) {
    navResume.addEventListener("click", function (e) {
      e.preventDefault();
      window.print();
    });
  }
})();
