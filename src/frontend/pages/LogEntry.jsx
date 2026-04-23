import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, ArrowRight } from "../components/Icons";
import { LOGS } from "../../data/consts";

import introMd from "../../data/logs/intro.md?raw";
import internshipMd from "../../data/logs/internship.md?raw";
import sclerocardMd from "../../data/logs/sclerocare.md?raw";
import tdMd from "../../data/logs/td.md?raw";

const mdContent = {
  intro: introMd,
  internship: internshipMd,
  sclerocare: sclerocardMd,
  td: tdMd,
};

const LogEntry = ({ id }) => {
  const navigate = useNavigate();
  const content = mdContent[id];
  const currentIndex = LOGS.findIndex((l) => l.id === id);
  const nextLog =
    currentIndex < LOGS.length - 1 ? LOGS[currentIndex + 1] : null;

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
        <title>{logMeta?.title || "Log"} | Mahad Hassan</title>
      </Helmet>

      <div className="log-article">
        <button className="log-back" onClick={() => navigate("/logbook")}>
          <ArrowLeft size={12} /> Back to logbook
        </button>

        <ReactMarkdown
          components={{
            img: ({ src, alt }) => (
              <figure style={{ margin: "24px 0", textAlign: "center" }}>
                <img
                  src={src}
                  alt={alt}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "480px",
                    width: "auto",
                    display: "block",
                    borderRadius: "var(--r-md)",
                    margin: "0 auto",
                    border: "1px solid var(--line)",
                    objectFit: "cover",
                  }}
                />
                {alt && (
                  <figcaption
                    style={{
                      marginTop: "10px",
                      fontSize: "13px",
                      color: "var(--ink-muted)",
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {alt}
                  </figcaption>
                )}
              </figure>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                style={{
                  color: "var(--accent)",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
                target={href?.startsWith("http") ? "_blank" : undefined}
                rel={
                  href?.startsWith("http") ? "noopener noreferrer" : undefined
                }
              >
                {children}
              </a>
            ),
          }}
        >
          {content}
        </ReactMarkdown>

        <div className="log-next">
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--ink-muted)",
              }}
            >
              {nextLog ? "Next in the logbook" : "End of logbook"}
            </p>
            {nextLog ? (
              <button
                onClick={() => navigate(nextLog.path)}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "20px",
                  letterSpacing: "var(--display-tracking)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "var(--accent)",
                  cursor: "pointer",
                  marginTop: "8px",
                }}
              >
                {nextLog.title} <ArrowRight size={16} />
              </button>
            ) : (
              <button
                onClick={() => navigate("/logbook")}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "20px",
                  letterSpacing: "var(--display-tracking)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "var(--accent)",
                  cursor: "pointer",
                  marginTop: "8px",
                }}
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
