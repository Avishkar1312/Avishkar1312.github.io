// Avishkar Bahirwar — portfolio site
// Vanilla JS, progressive enhancement only: the page is fully usable with this file absent.

(function () {
  "use strict";

  // Footer year (one span per language, both kept in sync)
  var year = String(new Date().getFullYear());
  ["year-en", "year-ja"].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.textContent = year;
  });

  // ---------------- language toggle (EN default, JA opt-in) ----------------
  var TITLES = {
    en: "Avishkar Bahirwar — Robotics & Autonomous Systems",
    ja: "Avishkar Bahirwar — ロボティクス・自律システム"
  };
  var btnEn = document.getElementById("langEn");
  var btnJa = document.getElementById("langJa");

  function setLang(lang) {
    // Scoped to body's descendants only -- <html lang="en"> itself matches
    // [lang='en'] too, and hiding the document root blanks the entire page.
    document.body.querySelectorAll("[lang='en'], [lang='ja']").forEach(function (el) {
      el.hidden = el.getAttribute("lang") !== lang;
    });
    if (btnEn) btnEn.setAttribute("aria-pressed", String(lang === "en"));
    if (btnJa) btnJa.setAttribute("aria-pressed", String(lang === "ja"));
    document.documentElement.setAttribute("lang", lang);
    document.title = TITLES[lang] || TITLES.en;
    try { localStorage.setItem("site-lang", lang); } catch (e) {}
  }

  if (btnEn && btnJa) {
    btnEn.addEventListener("click", function () { setLang("en"); });
    btnJa.addEventListener("click", function () { setLang("ja"); });
    var saved = null;
    try { saved = localStorage.getItem("site-lang"); } catch (e) {}
    if (saved === "ja") setLang("ja");
  }

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
