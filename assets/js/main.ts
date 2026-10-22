import { initTheme } from "./theme";
import { initScrollSpy, initMobileDrawer } from "./scroll-spy";
import { initAnimations } from "./animations";
import { initContactForm } from "./contact";

function bootstrap(): void {
  initTheme();
  initMobileDrawer();
  initScrollSpy();
  initAnimations();
  initContactForm();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootstrap);
} else {
  bootstrap();
}
