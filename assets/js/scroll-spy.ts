export function initScrollSpy(): void {
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

  function setActive(name: string): void {
    activeSection = name;

    // Update desktop links
    desktopLinks.forEach((link) => {
      const linkSection = link.getAttribute("data-section-link");
      const pill = link.querySelector<HTMLElement>("[data-desktop-pill]");
      const activeClass = link.getAttribute("data-active-class") || "";
      const inactiveClass = link.getAttribute("data-inactive-class") || "";
      const activeTokens = activeClass.split(" ").filter(Boolean);
      const inactiveTokens = inactiveClass.split(" ").filter(Boolean);

      if (linkSection === name) {
        link.classList.remove(...inactiveTokens);
        link.classList.add(...activeTokens);
        link.setAttribute("aria-current", "true");
        if (pill) pill.hidden = false;
      } else {
        link.classList.remove(...activeTokens);
        link.classList.add(...inactiveTokens);
        link.removeAttribute("aria-current");
        if (pill) pill.hidden = true;
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
  }

  // Handle click on any section link
  const allLinks = Array.from(
    document.querySelectorAll<HTMLAnchorElement>("a[data-section-link], a[data-section-link-trigger]")
  );
  allLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const target = link.getAttribute("data-section-link") || link.getAttribute("data-section-link-trigger");
      if (target) {
        timeOfLastClick = Date.now();
        setActive(target);
      }
    });
  });

  // IntersectionObserver for scroll spy with 0 forced reflows
  if ("IntersectionObserver" in window && sections.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() - timeOfLastClick < 1000) return;

        // Find the visible section
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) {
              setActive(id);
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

  // Initial active state placement
  setActive(activeSection);
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
