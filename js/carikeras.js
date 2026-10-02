(function () {
  "use strict";

  const root = document.documentElement;
  root.classList.add("ck-ui-ready");

  document.querySelectorAll("[data-ck-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  document.querySelectorAll("[data-ck-scroll]").forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      const selector = trigger.getAttribute("data-ck-scroll");
      const target = selector ? document.querySelector(selector) : null;

      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const navbar = document.querySelector("[data-ck-navbar]");

  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle("ck-navbar-scrolled", window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
})();
