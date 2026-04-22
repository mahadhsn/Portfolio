import { useState } from "react";
import { Helmet } from "react-helmet";
import { Mail, LinkedIn, GitHub } from "../components/Icons";

const CHANNELS = [
  {
    icon: <Mail size={16} />,
    label: "Email",
    value: "mahadhassan.hello@gmail.com",
    href: "mailto:mahadhassan.hello@gmail.com",
  },
  {
    icon: <LinkedIn size={16} />,
    label: "LinkedIn",
    value: "linkedin.com/in/mahad-hassan/",
    href: "https://www.linkedin.com/in/mahad-hassan/",
  },
  {
    icon: <GitHub size={16} />,
    label: "GitHub",
    value: "github.com/mahadhsn",
    href: "https://github.com/mahadhsn",
  },
  {
    icon: null,
    label: "Location",
    value: "Hamilton, ON · Toronto, ON",
    href: null,
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          subject: form.subject,
        }),
      });

      if (response.ok) {
        setSent(true);
        setForm({ firstName: "", lastName: "", email: "", subject: "" });
      } else if (response.status === 429) {
        setStatus("You've hit the daily send limit. Try again tomorrow.");
      } else {
        setStatus("Failed to send. Please try again.");
      }
    } catch {
      setStatus("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Mahad</title>
        <meta name="description" content="Get in touch with Mahad Hassan." />
      </Helmet>

      <p className="eyebrow">06 — CONTACT</p>

      <h1 className="display page-title">
        Let&apos;s{" "}
        <em style={{ color: "var(--accent)", fontStyle: "italic" }}>talk.</em>
      </h1>

      <div className="contact-grid">
        {/* Left — channels */}
        <div className="contact-info">
          <p
            className="subtle"
            style={{
              fontSize: "16px",
              lineHeight: 1.6,
              marginBottom: "40px",
              maxWidth: "340px",
            }}
          >
            Open to internships, collaborations, and interesting conversations.
            Pick a channel or fill the form.
          </p>

          <div className="contact-channels">
            {CHANNELS.map((ch) => (
              <div key={ch.label} className="contact-channel">
                <span className="contact-channel-label">{ch.label}</span>
                {ch.href ? (
                  <a
                    href={ch.href}
                    target={ch.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      ch.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {ch.value}
                  </a>
                ) : (
                  <span>{ch.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="contact-form">
          {sent ? (
            <div className="contact-thanks">
              <p
                className="display"
                style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
              >
                Thanks! 🎉
              </p>
              <p className="subtle" style={{ marginTop: "12px" }}>
                I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="firstName">First name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="johndoe@example.com"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="subject">Message</label>
                <textarea
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                  rows={6}
                  required
                />
              </div>

              {status && (
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--ink-soft)",
                    marginBottom: "12px",
                  }}
                >
                  {status}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                {isSubmitting ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;
