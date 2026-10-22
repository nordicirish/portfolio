export function showToast(message: string, type: "success" | "error" = "success"): void {
  const container = document.getElementById("toast-region");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");

  const icon = document.createElement("div");
  icon.className = `toast-icon toast-icon--${type}`;
  icon.setAttribute("aria-hidden", "true");

  const msg = document.createElement("div");
  msg.className = "toast-message";
  msg.textContent = message;

  toast.appendChild(icon);
  toast.appendChild(msg);
  container.appendChild(toast);

  // Auto remove after 4s
  setTimeout(() => {
    toast.classList.add("is-leaving");
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 4000);
}

export function initContactForm(): void {
  const form = document.getElementById("contact-form") as HTMLFormElement | null;
  const submitBtn = document.getElementById("contact-submit") as HTMLButtonElement | null;
  if (!form || !submitBtn) return;

  const idleSpan = submitBtn.querySelector<HTMLElement>("[data-submit-idle]");
  const pendingSpan = submitBtn.querySelector<HTMLElement>("[data-submit-pending]");

  const msgSuccess = form.getAttribute("data-msg-success") || "Email sent successfully!";
  const msgInvalidEmail = form.getAttribute("data-msg-invalid-email") || "Invalid sender email";
  const msgInvalidMessage = form.getAttribute("data-msg-invalid-message") || "Invalid message";
  const msgError = form.getAttribute("data-msg-error") || "Something went wrong. Please try again later.";

  function setPending(pending: boolean): void {
    submitBtn!.disabled = pending;
    if (idleSpan) idleSpan.hidden = pending;
    if (pendingSpan) pendingSpan.hidden = !pending;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const senderEmail = (formData.get("senderEmail") as string || "").trim();
    const message = (formData.get("message") as string || "").trim();
    const honeypot = (formData.get("website") as string || "").trim();

    // Honeypot check: silent return for bots
    if (honeypot) {
      form.reset();
      showToast(msgSuccess, "success");
      return;
    }

    // Client-side validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!senderEmail || senderEmail.length > 500 || !emailRegex.test(senderEmail)) {
      showToast(msgInvalidEmail, "error");
      const emailInput = form.querySelector<HTMLInputElement>("#senderEmail");
      emailInput?.focus();
      return;
    }

    if (!message || message.length > 5000) {
      showToast(msgInvalidMessage, "error");
      const messageInput = form.querySelector<HTMLTextAreaElement>("#message");
      messageInput?.focus();
      return;
    }

    setPending(true);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          senderEmail,
          message,
          website: honeypot,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.error) {
        showToast(result.error || msgError, "error");
      } else {
        showToast(msgSuccess, "success");
        form.reset();
      }
    } catch {
      showToast(msgError, "error");
    } finally {
      setPending(false);
    }
  });
}
