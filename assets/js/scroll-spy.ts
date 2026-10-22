export function initScrollSpy(): void {
  const desktopNav = document.querySelector<HTMLElement>("[data-desktop-nav]");
  const pill = document.querySelector<HTMLElement>("[data-nav-pill]");
  const desktopLinks = Array.from(
    document.querySelectorAll<HTMLAnchorElement>("a[data-section-link]:not([data-mobile-link])")
  );
  const mobileLinks = Array.from(
    document.querySelectorAll<HTMLAnchorElement>("a[data-mobile-link]")
  );
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>("section[data-spy-section]")
  );

  let activeSection = "Home";
  let timeOfLastClick = 0;

  let pillRaf: number | null = null;

  function updatePill(animate = true): void {
    if (!desktopNav || !pill) return;
    const targetLink = desktopLinks.find(
      (link) => link.getAttribute("data-section-link") === activeSection
    );
    if (!targetLink || targetLink.offsetParent === null) {
      pill.style.opacity = "0";
      return;
    }

    if (pillRaf !== null) {
      window.cancelAnimationFrame(pillRaf);
    }

    pillRaf = window.requestAnimationFrame(() => {
      pillRaf = null;
      if (!desktopNav || !pill || !targetLink) return;

      const navRect = desktopNav.getBoundingClientRect();
      const linkRect = targetLink.getBoundingClientRect();

      const left = linkRect.left - navRect.left;
      const top = linkRect.top - navRect.top;
      const width = linkRect.width;
      const height = linkRect.height;

      if (!animate) {
        pill.classList.add("no-transition");
      } else {
        pill.classList.remove("no-transition");
      }

      pill.style.transform = `translate3d(${left}px, ${top}px, 0)`;
      pill.style.width = `${width}px`;
      pill.style.height = `${height}px`;
      pill.style.opacity = "1";

      if (!animate) {
        window.requestAnimationFrame(() => {
          pill.classList.remove("no-transition");
        });
      }
    });
  }

  function setActive(name: string, animate = true): void {
    activeSection = name;

    // Update desktop links
    desktopLinks.forEach((link) => {
      const linkSection = link.getAttribute("data-section-link");
      const activeClass = link.getAttribute("data-active-class") || "";
      const inactiveClass = link.getAttribute("data-inactive-class") || "";
      const activeTokens = activeClass.split(" ").filter(Boolean);
      const inactiveTokens = inactiveClass.split(" ").filter(Boolean);

      if (linkSection === name) {
        link.classList.remove(...inactiveTokens);
        link.classList.add(...activeTokens);
        link.setAttribute("aria-current", "true");
      } else {
        link.classList.remove(...activeTokens);
        link.classList.add(...inactiveTokens);
        link.removeAttribute("aria-current");
      }
    });

    // Update mobile links
    mobileLinks.forEach((link) => {
      const linkSection = link.getAttribute("data-section-link");
      const mobilePill = link.querySelector<HTMLElement>("[data-mobile-pill]");
      const activeClass = link.getAttribute("data-active-class") || "";
      const inactiveClass = link.getAttribute("data-inactive-class") || "";
      const activeTokens = activeClass.split(" ").filter(Boolean);
      const inactiveTokens = inactiveClass.split(" ").filter(Boolean);

      if (linkSection === name) {
        link.classList.remove(...inactiveTokens);
        link.classList.add(...activeTokens);
        if (mobilePill) mobilePill.hidden = false;
      } else {
        link.classList.remove(...activeTokens);
        link.classList.add(...inactiveTokens);
        if (mobilePill) mobilePill.hidden = true;
      }
    });

    updatePill(animate);
  }

  // Handle click on any section link
  const allLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>("a[data-section-link], a[data-section-link-trigger]"));
  allLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const target = link.getAttribute("data-section-link") || link.getAttribute("data-section-link-trigger");
      if (target) {
        timeOfLastClick = Date.now();
        setActive(target, true);
      }
    });
  });

  // IntersectionObserver for scroll spy
  if ("IntersectionObserver" in window && sections.length > 0) {
    const isMobile = () => window.innerWidth <= 768;

    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() - timeOfLastClick < 1000) return;

        // Find the visible section with highest intersection ratio or topmost position
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) {
              setActive(id, true);
            }
          }
        });
      },
      {
        threshold: [0.2, 0.5, 0.75],
        rootMargin: "-20% 0px -40% 0px",
      }
    );

    sections.forEach((sec) => observer.observe(sec));
  }

  // Window resize handler for pill alignment
  window.addEventListener("resize", () => {
    updatePill(false);
  });

  // Initial pill placement (without animation)
  window.addEventListener("load", () => {
    setActive(activeSection, false);
  });
  // Also call immediately
  setActive(activeSection, false);
}

export function initMobileDrawer(): void {
  const toggleBtn = document.getElementById("menu-toggle");
  const drawer = document.getElementById("mobile-drawer");
  const overlay = document.getElementById("mobile-drawer-overlay");
  const iconOpen = document.querySelector<HTMLElement>('[data-menu-icon="open"]');
  const iconClose = document.querySelector<HTMLElement>('[data-menu-icon="close"]');
  const label = document.querySelector<HTMLElement>("[data-menu-label]");

  if (!toggleBtn || !drawer || !overlay) return;

  const btn = toggleBtn;
  const drw = drawer;
  const ovl = overlay;

  const openLabel = btn.getAttribute("data-label-open") || "Open menu";
  const closeLabel = btn.getAttribute("data-label-close") || "Close menu";

  let isOpen = false;

  function setDrawerState(open: boolean): void {
    isOpen = open;
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    drw.hidden = !open;
    ovl.hidden = !open;

    if (iconOpen) iconOpen.hidden = open;
    if (iconClose) iconClose.hidden = !open;
    if (label) label.textContent = open ? closeLabel : openLabel;

    if (open) {
      document.body.style.overflow = "hidden";
      drw.focus();
    } else {
      document.body.style.overflow = "";
      btn.focus();
    }
  }

  toggleBtn.addEventListener("click", () => {
    setDrawerState(!isOpen);
  });

  overlay.addEventListener("click", () => {
    if (isOpen) setDrawerState(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen) {
      setDrawerState(false);
    }
  });

  // Close drawer when clicking a mobile link
  const mobileLinks = drawer.querySelectorAll<HTMLAnchorElement>("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setDrawerState(false);
    });
  });
}
