export function initAnimations(): void {
  // 1. Hexagon Skills Staggered Flip
  const skillsContainer = document.querySelector("#Skills");
  const skillHexes = Array.from(document.querySelectorAll<HTMLElement>(".skill-hex"));

  if ("IntersectionObserver" in window && skillsContainer && skillHexes.length > 0) {
    const isMobile = window.innerWidth <= 768;
    const staggerIncrement = isMobile ? 0.05 : 0.1;

    skillHexes.forEach((hex, i) => {
      hex.style.setProperty("--rg-delay", `${(i * staggerIncrement).toFixed(2)}s`);
    });

    const skillsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            skillHexes.forEach((hex) => {
              hex.classList.add("is-inview");
            });
            skillsObserver.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    skillsObserver.observe(skillsContainer);
  } else {
    skillHexes.forEach((hex) => hex.classList.add("is-inview"));
  }

  // 2. Section Reveals (Experience, Contact)
  const revealElements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
  if ("IntersectionObserver" in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-inview");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add("is-inview"));
  }

  // 3. Project Cards Scroll Progression (matching Framer Motion [0 1] -> [1.33 1] scale: 0.8->1, opacity: 0.6->1)
  const projectCards = Array.from(document.querySelectorAll<HTMLElement>("[data-project-card]"));
  if (projectCards.length > 0 && window.matchMedia("(min-width: 768px)").matches) {
    let ticking = false;

    function updateProjectCards(): void {
      const windowHeight = window.innerHeight;
      const start = windowHeight;
      const end = windowHeight * 0.33;

      // 1. Read phase: query all rects first to prevent layout thrashing
      const rects = projectCards.map((card) => card.getBoundingClientRect());

      // 2. Write phase: mutate all styles together
      projectCards.forEach((card, i) => {
        const rect = rects[i];
        let progress = (windowHeight - rect.top) / (start - end);
        progress = Math.max(0, Math.min(1, progress));

        const scale = 0.8 + 0.2 * progress;
        const opacity = 0.6 + 0.4 * progress;

        card.style.transform = `scale(${scale.toFixed(3)})`;
        card.style.opacity = opacity.toFixed(3);
      });

      ticking = false;
    }

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(updateProjectCards);
          ticking = true;
        }
      },
      { passive: true }
    );

    // Initial check via rAF
    window.requestAnimationFrame(updateProjectCards);
  }
}
