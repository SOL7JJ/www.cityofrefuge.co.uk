import { useState } from "react";
import "./Contact.css";

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (email) => {
    // Simple email check (good enough for frontend)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!FORMSPREE_ENDPOINT) {
      setStatus({
        type: "error",
        message:
          "Form is not configured yet. Add VITE_FORMSPREE_ENDPOINT to your .env and redeploy/restart.",
      });
      return;
    }

    if (!isValidEmail(form.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          _subject: `City of Refuge Contact: ${form.subject || "New message"} (from ${form.name})`,
        }),
      });

      // Formspree returns JSON with errors sometimes — handle it nicely
      const data = await response.json().catch(() => null);

      if (!response.ok) {
        const msg =
          data?.errors?.[0]?.message ||
          "Could not send message. Please try again.";
        throw new Error(msg);
      }

      // OPTIONAL: Google Analytics event on success (works with your gtag setup)
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "contact_submit_success", {
          event_category: "engagement",
          event_label: "City of Refuge Contact Form",
        });
      }

      setStatus({ type: "success", message: "Message sent successfully. Thank you!" });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: error?.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          onChange={handleChange}
          value={form.name}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          onChange={handleChange}
          value={form.email}
          required
        />

        <input
          name="subject"
          type="text"
          placeholder="Subject (optional)"
          onChange={handleChange}
          value={form.subject}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          onChange={handleChange}
          value={form.message}
          required
          rows={6}
        />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {status.message ? (
          <p className={`form-status ${status.type}`}>{status.message}</p>
        ) : null}
      </form>
    </div>
  );
}