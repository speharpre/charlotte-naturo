/* Charlotte Seynhaeve, naturopathe. Interactions légères, sans dépendance. */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Réservation en ligne : coller ici l'URL publique de l'agenda (Thérago).
     Vide : les boutons "Prendre rendez-vous" mènent au formulaire de contact. */
  var BOOKING_URL = "https://therago.be/fr/t/charlotte-seynhaeve/book?serviceId=cmvkv5uqx0003o03wuc7skx90";
  /* Widget Thérago (Réglages > Widget de réservation sur therago.be) :
     token et id de prestation. Vides : la section Réserver reste masquée. */
  var THERAGO = { token: "", service: "", locale: "fr" };
  if (THERAGO.token) {
    document.querySelectorAll("[data-therago-embed]").forEach(function (box) {
      var mount = document.createElement("div");
      mount.className = "therago-embed";
      mount.setAttribute("data-token", THERAGO.token);
      mount.setAttribute("data-locale", THERAGO.locale);
      if (THERAGO.service) mount.setAttribute("data-service", THERAGO.service);
      box.appendChild(mount);
      box.hidden = false;
    });
    document.querySelectorAll("[data-therago-offers]").forEach(function (ul) { ul.hidden = true; });
    var s = document.createElement("script");
    s.src = "https://therago.be/embed.js";
    s.async = true;
    document.body.appendChild(s);
    BOOKING_URL = "#reserver";
  }
  if (BOOKING_URL) {
    document.querySelectorAll("[data-booking]").forEach(function (a) {
      a.href = BOOKING_URL;
      if (BOOKING_URL.charAt(0) !== "#") { a.target = "_blank"; a.rel = "noopener"; }
    });
    document.querySelectorAll("[data-booking-note]").forEach(function (p) { p.hidden = false; });
  }

  /* Nav : trait au scroll, menu mobile, lien actif */
  var nav = document.querySelector(".nav");
  var burger = document.querySelector(".nav__burger");
  var menu = document.getElementById("mobilemenu");

  function onScroll() {
    nav.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function closeMenu() {
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Ouvrir le menu");
    menu.hidden = true;
  }
  if (burger && menu) {
    burger.addEventListener("click", function () {
      var open = burger.getAttribute("aria-expanded") === "true";
      if (open) { closeMenu(); return; }
      burger.setAttribute("aria-expanded", "true");
      burger.setAttribute("aria-label", "Fermer le menu");
      menu.hidden = false;
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !menu.hidden) { closeMenu(); burger.focus(); }
    });
  }

  var links = Array.prototype.slice.call(document.querySelectorAll(".nav__links a"));
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);
  if ("IntersectionObserver" in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle("is-active", a.getAttribute("href") === "#" + entry.target.id);
        });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* Apparition des blocs au scroll */
  var reveals = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* La feuille du hero suit doucement le scroll */
  var leaf = document.querySelector(".hero__leaf");
  if (leaf && !reduceMotion) {
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        var y = Math.min(window.scrollY, 900);
        leaf.style.translate = "0 " + (y * 0.18) + "px";
        leaf.style.rotate = (y * -0.012) + "deg";
        ticking = false;
      });
    }, { passive: true });
  }


  /* Année du pied de page */
  var year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();
