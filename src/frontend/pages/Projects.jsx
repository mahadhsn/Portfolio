import { useState } from "react";
import { Helmet } from "react-helmet";
import { PROJECTS } from "../../data/consts";
import ProjectModal from "../components/ProjectModal";

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
  const [selected, setSelected] = useState(null);

  const visible = PROJECTS.filter(filterMap[filter]);

  return (
    <>
      <Helmet>
        <title>Mahad&apos;s Projects</title>
        <meta
          name="description"
          content="Projects by Mahad Hassan — web, mobile, ML, and systems."
        />
      </Helmet>

      <p className="eyebrow">03 / PROJECTS</p>
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

      {/* Card grid */}
      <div className="proj-grid">
        {visible.map((p) => (
          <div
            key={p.id}
            className="proj-card"
            onClick={() => setSelected(p)}
          >
            <div className={`proj-card-img proj-placeholder-${p.id}`}>
              {p.image && <img src={p.image} alt={p.title} />}
              {p.award && <span className="proj-card-award">🏆 {p.award}</span>}
            </div>
            <div className="proj-card-body">
              <div className="proj-card-meta">
                <span className="proj-tag-pill">{p.tag}</span>
                <span className="proj-card-year">{p.year}</span>
              </div>
              <h3 className="proj-card-title">{p.title}</h3>
              <p className="proj-card-desc">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
};

export default Projects;
