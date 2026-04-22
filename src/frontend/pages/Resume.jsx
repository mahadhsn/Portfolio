import { Helmet } from "react-helmet";
import { Download, ArrowUpRight } from "../components/Icons";

const Resume = () => {
  return (
    <>
      <Helmet>
        <title>Mahad's Resume</title>
        <meta name="description" content="Resume of Mahad Hassan, software engineering student." />
      </Helmet>

      <p className="eyebrow">05 — RESUME</p>

      <div className="resume-head">
        <h1 className="display page-title">Resume</h1>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a href="/mahadresume.pdf" download className="btn primary" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Download size={14} /> Download PDF
          </a>
          <a href="/mahadresume.pdf" target="_blank" rel="noopener noreferrer" className="btn ghost" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            Open in new tab <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="resume-frame">
        <object
          data="/mahadresume.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
          title="Mahad Hassan Resume"
        >
          <p style={{ padding: "24px", color: "var(--ink-soft)" }}>
            PDF preview unavailable.{" "}
            <a href="/mahadresume.pdf" download style={{ color: "var(--accent)" }}>
              Download it here.
            </a>
          </p>
        </object>
      </div>
    </>
  );
};

export default Resume;
