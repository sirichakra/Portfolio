document.addEventListener("DOMContentLoaded", () => {
  // ========== Scroll Reveal ==========
  const revealElements = document.querySelectorAll(
    "h1, h2, h3, h4, h5, h6, p, li, a, span, img, .skill-category, .experience-item, form, button, .hero-image, .projects-container, .project-card"
  );

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - revealPoint) {
        el.classList.add("active", "reveal");
      } else {
        el.classList.remove("active", "reveal");
      }
    });
  }

  // ========== ScrollSpy ==========
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("header ul li a");

  function updateActiveLink() {
    let currentSection = "";

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;

      if (sectionTop <= 150 && sectionTop + sectionHeight > 150) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  }

  // ========== Throttle Scroll ==========
  let ticking = false;

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        revealOnScroll();
        updateActiveLink();
        ticking = false;
      });
      ticking = true;
    }
  }

  // ========== Mobile Nav Toggle ==========
  const menuToggle = document.getElementById("menu-toggle");
  const navLinksContainer = document.getElementById("nav-links");

  if (menuToggle && navLinksContainer) {
    menuToggle.addEventListener("click", () => {
      navLinksContainer.classList.toggle("show");
    });

    navLinksContainer.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinksContainer.classList.remove("show"); // Auto close on link click
      });
    });
  }

  // ========== Scroll Listeners ==========
  window.addEventListener("scroll", onScroll);
  window.addEventListener("load", () => {
    revealOnScroll();
    updateActiveLink();
  });
});
