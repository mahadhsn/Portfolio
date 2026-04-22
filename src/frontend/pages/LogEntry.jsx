import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, ArrowRight } from "../components/Icons";
import { LOGS } from "../../data/consts";

import introMd from "../../data/logs/intro.md?raw";
import internshipMd from "../../data/logs/internship.md?raw";
import sclerocardMd from "../../data/logs/sclerocare.md?raw";

const mdContent = {
  intro: introMd,
  internship: internshipMd,
  sclerocare: sclerocardMd,
};

const LogEntry = ({ id }) => {
  const navigate = useNavigate();
  const content = mdContent[id];
  const currentIndex = LOGS.findIndex((l) => l.id === id);
  const nextLog = currentIndex < LOGS.length - 1 ? LOGS[currentIndex + 1] : null;

  if (!content) {
    return (
      <div className="log-article">
        <button className="log-back" onClick={() => navigate("/logbook")}>
          <ArrowLeft size={12} /> Back to logbook
        </button>
        <p>Entry not found.</p>
      </div>
    );
  }

  const logMeta = LOGS.find((l) => l.id === id);

  return (
    <>
      <Helmet>
        <title>{logMeta?.title || "Log"} — Mahad Hassan</title>
      </Helmet>

      <div className="log-article">
        <button className="log-back" onClick={() => navigate("/logbook")}>
          <ArrowLeft size={12} /> Back to logbook
        </button>

        <ReactMarkdown
          components={{
            img: ({ src, alt }) => (
              <img src={src} alt={alt} style={{ maxWidth: "100%", borderRadius: "var(--r-md)", margin: "24px 0", border: "1px solid var(--line)" }} />
            ),
            a: ({ href, children }) => (
              <a href={href} style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }} target={href?.startsWith("http") ? "_blank" : undefined} rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}>
                {children}
              </a>
            ),
          }}
        >
          {content}
        </ReactMarkdown>

        <div className="log-next">
          <div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--ink-muted)" }}>
              {nextLog ? "Next in the logbook" : "End of logbook"}
            </p>
            {nextLog ? (
              <button
                onClick={() => navigate(nextLog.path)}
                style={{ fontFamily: "var(--font-display)", fontSize: "20px", letterSpacing: "var(--display-tracking)", display: "flex", alignItems: "center", gap: "10px", color: "var(--accent)", cursor: "pointer", marginTop: "8px" }}
              >
                {nextLog.title} <ArrowRight size={16} />
              </button>
            ) : (
              <button
                onClick={() => navigate("/logbook")}
                style={{ fontFamily: "var(--font-display)", fontSize: "20px", letterSpacing: "var(--display-tracking)", display: "flex", alignItems: "center", gap: "10px", color: "var(--accent)", cursor: "pointer", marginTop: "8px" }}
              >
                Browse all entries <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LogEntry;
