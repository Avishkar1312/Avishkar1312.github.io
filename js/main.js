// Avishkar Bahirwar — portfolio site
// Vanilla JS, progressive enhancement only: the page is fully usable with this file absent.

(function () {
  "use strict";

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile sidebar-nav toggle
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("sideNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("open", !open);
    });
    // Close the mobile menu after following a link
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        if (window.matchMedia("(max-width: 900px)").matches) {
          toggle.setAttribute("aria-expanded", "false");
          nav.classList.remove("open");
        }
      });
    });
  }

  // Gentle reveal-on-scroll for section headers, skipped for reduced-motion users
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion && "IntersectionObserver" in window) {
    var targets = document.querySelectorAll(".section");
    targets.forEach(function (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(10px)";
      el.style.transition = "opacity .5s ease, transform .5s ease";
    });
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "none";
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    targets.forEach(function (el) { io.observe(el); });
  }
})();
