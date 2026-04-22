import { useState } from "react";
import { Helmet } from "react-helmet";
import { ArrowUpRight } from "../components/Icons";
import { PROJECTS } from "../../data/consts";

const filters = ["all", "web", "mobile", "ml", "systems"];

const filterMap = {
  all: () => true,
  web: (p) => /web/i.test(p.tag),
  mobile: (p) => /mobile/i.test(p.tag),
  ml: (p) => /ml|ai/i.test(p.tag),
  systems: (p) => /systems|java|bash|security/i.test(p.tag),
};

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const featured = PROJECTS.find((p) => p.featured);
  const visible = PROJECTS.filter(filterMap[filter]);
  const rest = visible.filter((p) => !p.featured);

  return (
    <>
      <Helmet>
        <title>Mahad&apos;s Projects</title>
        <meta
          name="description"
          content="Projects by Mahad Hassan — web, mobile, ML, and systems."
        />
      </Helmet>

      <p className="eyebrow">03 — PROJECTS</p>
      <h1 className="display page-title">Things I&apos;ve built lately.</h1>
      <p className="proj-intro">
        A mix of side projects, hackathon builds, and coursework. See everything
        on{" "}
        <a
          href="https://github.com/mahadhsn"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "var(--accent)",
            textDecoration: "underline",
            textUnderlineOffset: "4px",
          }}
        >
          GitHub
        </a>
        .
      </p>

      {/* Featured card */}
      {filter === "all" && featured && (
        <div
          className="proj-featured"
          onClick={() => window.open(featured.url, "_blank")}
        >
          <div className="proj-featured-body">
            <div>
              <p className="eyebrow" style={{ margin: 0 }}>
                ★ FEATURED · {featured.award}
              </p>
              <h2>{featured.title}</h2>
              <p
                style={{
                  color: "var(--ink-soft)",
                  fontSize: "16px",
                  lineHeight: 1.5,
                  margin: "0 0 20px",
                }}
              >
                {featured.desc}
              </p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <a
                href={featured.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn primary"
              >
                Try it out <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
          <div className="proj-featured-img" />
        </div>
      )}

      {/* Filter chips */}
      <div className="proj-filter">
        {filters.map((f) => (
          <button
            key={f}
            className={filter === f ? "active" : ""}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Project list */}
      <div className="proj-list">
        {rest.map((p, i) => (
          <div
            key={p.id}
            className="proj-row"
            onClick={() => {
              if (p.url.startsWith("http")) window.open(p.url, "_blank");
              else window.location.href = p.url;
            }}
          >
            <span className="proj-idx">
              {String(i + (filter === "all" ? 2 : 1)).padStart(2, "0")}
            </span>
            <span className="proj-title">
              {p.title}
              {p.award && <span className="trophy">🏆</span>}
            </span>
            <span className="proj-desc">{p.desc}</span>
            <span className="proj-tag">
              {p.tag} · {p.year}
            </span>
            <span className="proj-arrow">
              <ArrowUpRight size={14} />
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
