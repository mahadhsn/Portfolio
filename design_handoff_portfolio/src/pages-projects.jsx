/* Projects page */

function PageProjects() {
  const [filter, setFilter] = useState("all");
  const filters = ["all", "web", "mobile", "ml", "systems"];

  const filterMap = {
    all: () => true,
    web: (p) => /web/i.test(p.tag),
    mobile: (p) => /mobile/i.test(p.tag),
    ml: (p) => /ml|ai/i.test(p.tag),
    systems: (p) => /c\b|java|bash|security/i.test(p.tag),
  };

  const visible = PROJECTS.filter(filterMap[filter]);
  const featured = PROJECTS.find((p) => p.featured);
  const rest = visible.filter((p) => !p.featured);

  return (
    <main className="page page-enter">
      <div className="eyebrow">03 — PROJECTS</div>
      <h1 className="display page-title">
        Things I've
        <br />
        built lately.
      </h1>
      <p className="proj-intro">
        A sampler of my work. Full catalog lives on{" "}
        <a
          style={{
            color: "var(--accent)",
            textDecoration: "underline",
            textUnderlineOffset: "4px",
          }}
          href="#"
        >
          GitHub
        </a>
        .
      </p>

      {filter === "all" && featured && (
        <div className="proj-featured">
          <div className="proj-featured-body">
            <div className="eyebrow" style={{ margin: 0 }}>
              <span style={{ color: "var(--accent)" }}>★</span> FEATURED ·{" "}
              {featured.award}
            </div>
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
            <div style={{ display: "flex", gap: "10px" }}>
              <Button variant="primary">Visit site</Button>
              <Button variant="ghost">Read log</Button>
            </div>
          </div>
          <div className="proj-featured-img" />
        </div>
      )}

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

      <div className="proj-list">
        {rest.map((p, i) => (
          <div className="proj-row" key={p.id}>
            <div className="proj-idx">{String(i + 1).padStart(2, "0")}</div>
            <div className="proj-title">
              {p.title} {p.award && <span className="trophy">🏆</span>}
            </div>
            <div className="proj-desc">{p.desc}</div>
            <div className="proj-tag">
              {p.tag} · {p.year}
            </div>
            <div className="proj-arrow">
              <Icon.arrowUpRight />
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </main>
  );
}

window.PageProjects = PageProjects;
