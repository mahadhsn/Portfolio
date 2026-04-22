/* Resume + Contact pages */

function PageResume() {
  return (
    <main className="page page-enter">
      <div className="eyebrow">05 — RESUME</div>
      <div className="resume-head">
        <div>
          <h1 className="display page-title">Résumé.</h1>
          <p className="subtle" style={{ fontSize: "17px", maxWidth: "480px" }}>
            A one-pager of everything relevant. Prefer PDF? Download below.
          </p>
        </div>
        <div className="resume-actions">
          <Button variant="primary" icon={false}>
            <Icon.download />{" "}
            <span style={{ marginLeft: 6 }}>Download PDF</span>
          </Button>
          <Button variant="ghost">Open in new tab</Button>
        </div>
      </div>

      <div className="resume-frame stagger">
        <h1>Mahad Hassan</h1>
        <div className="resume-contact">
          Hamilton, ON · mahad@example.com · linkedin.com/in/mahadhssn ·
          github.com/mahadhssn
        </div>

        <h3>Education</h3>
        <div className="job">
          <div className="job-head">
            <div className="job-title">
              McMaster University — B.Eng. Software Engineering
            </div>
            <div className="job-date">2023 – 2027</div>
          </div>
          <div className="job-company">Dean's List · GPA 3.9</div>
        </div>

        <h3>Experience</h3>
        <div className="job">
          <div className="job-head">
            <div className="job-title">Software Engineering Intern — TD</div>
            <div className="job-date">May – Aug 2025</div>
          </div>
          <div className="job-company">Toronto, ON</div>
          <p>
            Shipped internal tooling to help engineers triage incidents faster.
            Built on React / Node; integrated with existing observability
            pipeline.
          </p>
        </div>
        <div className="job">
          <div className="job-head">
            <div className="job-title">Cybersecurity Intern — RLPC</div>
            <div className="job-date">Jun – Aug 2024</div>
          </div>
          <div className="job-company">Toronto, ON</div>
          <p>
            Audited legacy applications for common vulnerabilities and wrote a
            playbook for the in-house team.
          </p>
        </div>

        <h3>Selected Projects</h3>
        <div className="job">
          <div className="job-head">
            <div className="job-title">PrepPal — MacEngComp '25 Winner</div>
            <div className="job-date">2025</div>
          </div>
          <p>
            Disaster-awareness web app with an AI support flow for triaging
            emergency steps.
          </p>
        </div>
        <div className="job">
          <div className="job-head">
            <div className="job-title">Digit Recognizer</div>
            <div className="job-date">2024</div>
          </div>
          <p>
            8-layer CNN in Python reaching 99.3% accuracy on handwritten digit
            classification.
          </p>
        </div>

        <h3>Skills</h3>
        <p>
          Python · Java · C · TypeScript · React · Node · PyTorch · PostgreSQL ·
          Linux
        </p>
      </div>

      <Footer />
    </main>
  );
}

function PageContact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="page page-enter">
      <div className="eyebrow">06 — CONTACT</div>
      <div className="contact-grid">
        <div>
          <h1 className="contact-hello">
            Let's <em>talk</em>.
          </h1>
          <p className="subtle" style={{ fontSize: "17px", maxWidth: "380px" }}>
            Whether it's a project, an internship, or just to swap book recs —
            my inbox is open.
          </p>
          <div className="contact-channels">
            <div className="contact-channel">
              <span className="contact-channel-label">EMAIL</span>
              <span>mahad@example.com</span>
            </div>
            <div className="contact-channel">
              <span className="contact-channel-label">LINKEDIN</span>
              <span>@mahadhssn</span>
            </div>
            <div className="contact-channel">
              <span className="contact-channel-label">GITHUB</span>
              <span>@mahadhssn</span>
            </div>
            <div className="contact-channel">
              <span className="contact-channel-label">LOCATION</span>
              <span>Hamilton, ON</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={submit}>
          {sent ? (
            <div style={{ padding: "40px 0", textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "40px",
                  color: "var(--accent)",
                  letterSpacing: "var(--display-tracking)",
                }}
              >
                Thanks!
              </div>
              <p className="subtle" style={{ marginTop: "12px" }}>
                I'll be in touch shortly.
              </p>
            </div>
          ) : (
            <>
              <div className="field-row">
                <div className="field">
                  <label>First Name</label>
                  <input type="text" placeholder="Jane" />
                </div>
                <div className="field">
                  <label>Last Name</label>
                  <input type="text" placeholder="Doe" />
                </div>
              </div>
              <div className="field">
                <label>Email</label>
                <input type="email" placeholder="jane@example.com" />
              </div>
              <div className="field">
                <label>Subject</label>
                <input type="text" placeholder="A quick hello" />
              </div>
              <div className="field">
                <label>Message</label>
                <textarea placeholder="Tell me about it..." />
              </div>
              <Button variant="accent">Send message</Button>
            </>
          )}
        </form>
      </div>

      <Footer />
    </main>
  );
}

Object.assign(window, { PageResume, PageContact });
