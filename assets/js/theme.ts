export function initTheme(): void {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  const getPreferredTheme = (): "light" | "dark" => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark" || stored === "light") {
        return stored;
      }
    } catch {
      // Ignore localStorage errors
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const applyTheme = (theme: "light" | "dark", persist = false): void => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    toggleBtn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    if (persist) {
      try {
        localStorage.setItem("theme", theme);
      } catch {
        // Ignore localStorage errors
      }
    }
  };

  // Sync initial button aria state
  const currentTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
  toggleBtn.setAttribute("aria-pressed", currentTheme === "dark" ? "true" : "false");

  toggleBtn.addEventListener("click", () => {
    const isDark = document.documentElement.classList.contains("dark");
    const newTheme = isDark ? "light" : "dark";
    applyTheme(newTheme, true);
  });

  // Watch for system theme changes if user has not explicitly stored preference
  try {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", (e) => {
      try {
        if (!localStorage.getItem("theme")) {
          applyTheme(e.matches ? "dark" : "light", false);
        }
      } catch {
        applyTheme(e.matches ? "dark" : "light", false);
      }
    });
  } catch {
    // Media query listener not supported
  }
}
