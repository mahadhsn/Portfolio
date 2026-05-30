import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, ArrowRight } from "../components/Icons";
import { LOGS } from "../../data/logUtils";

const lazyLogs = import.meta.glob("../../data/logs/*.md", { query: "?raw" });

const LogEntry = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setContent(null);
    setNotFound(false);
    const loader = lazyLogs[`../../data/logs/${id}.md`];
    if (!loader) {
      setNotFound(true);
      return;
    }
    loader().then((mod) => setContent(mod.default));
  }, [id]);

  const currentIndex = LOGS.findIndex((l) => l.id === id);
  const prevLog = currentIndex > 0 ? LOGS[currentIndex - 1] : null;
  const nextLog =
    currentIndex < LOGS.length - 1 ? LOGS[currentIndex + 1] : null;

  if (notFound) {
    return (
      <div className="log-article">
        <button className="log-back" onClick={() => navigate("/logbook")}>
          <ArrowLeft size={12} /> Back to logbook
        </button>
        <p>Entry not found.</p>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="log-article">
        <button className="log-back" onClick={() => navigate("/logbook")}>
          <ArrowLeft size={12} /> Back to logbook
        </button>
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
            p: ({ node, children }) => {
              const meaningful = node.children.filter(
                (c) => !(c.type === "text" && c.value.trim() === ""),
              );
              if (
                meaningful.length > 1 &&
                meaningful.every((c) => c.tagName === "img")
              ) {
                return <div className="md-img-grid">{children}</div>;
              }
              return <p>{children}</p>;
            },
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
          {/* Left — back / prev */}
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
              {prevLog ? "Previous entry" : "All entries"}
            </p>
            <button
              onClick={() => navigate(prevLog ? prevLog.path : "/logbook")}
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
              <ArrowLeft size={16} /> {prevLog ? prevLog.title : "Logbook"}
            </button>
          </div>

          {/* Center — logbook */}
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--ink-muted)",
              }}
            >
              All entries
            </p>
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
              Logbook
            </button>
          </div>

          {/* Right — next */}
          <div style={{ textAlign: "right" }}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--ink-muted)",
              }}
            >
              {nextLog ? "Next entry" : "End of logbook"}
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
