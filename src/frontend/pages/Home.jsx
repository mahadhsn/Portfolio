import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Button from "../components/Button";
import { ArrowUpRight } from "../components/Icons";
import { STATS, PROJECTS, GREETINGS } from "../../data/consts";

const im = " I'm";
const line2 = "Mahad.";

const Home = () => {
  const navigate = useNavigate();
  const [quote, setQuote] = useState(null);
  const [greetingIdx, setGreetingIdx] = useState(0);
  const featured = PROJECTS.find((p) => p.featured);
  const greeting = GREETINGS[greetingIdx];
  const cycleGreeting = () => setGreetingIdx((i) => (i + 1) % GREETINGS.length);

  useEffect(() => {
    fetch("/api/quote")
      .then((r) => r.json())
      .then((d) => setQuote(d))
      .catch(() => {});
  }, []);

  return (
    <>
      <Helmet>
        <title>Mahad Hassan</title>
        <meta
          name="description"
          content="Software engineering student. Builder, explorer, and curious human."
        />
      </Helmet>

      <p className="eyebrow">01 / HOME</p>

      {/* ── Hero ── */}
      <section className="home-hero">
        <div className="home-hero-text">
          <div className="home-name-row">
            <h1 className="home-name">
              <div>
                <span
                  className="char greeting-text"
                  onClick={cycleGreeting}
                  style={{
                    animationDelay: "0s",
                    fontSize: "0.35em",
                    letterSpacing: 0,
                    cursor: "pointer",
                  }}
                >
                  {greeting.text}
                  {greeting.flag && (
                    <span style={{ margin: "0 0.15em" }}>{greeting.flag}</span>
                  )}
                  {","}
                  <span className="greeting-cycle-hint">↻</span>
                </span>
                {im.split("").map((c, i) => (
                  <span
                    key={i}
                    className="char"
                    style={{
                      animationDelay: `${(i + 1) * 0.03}s`,
                      color: "var(--ink-soft)",
                      fontSize: "0.35em",
                      letterSpacing: 0,
                      marginRight: c === " " ? "0.2em" : 0,
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
              <div>
                {line2.split("").map((c, i) => (
                  <span
                    key={i}
                    className={`char${c === "." ? " red" : i === 0 ? " accent-char" : ""}`}
                    style={{ animationDelay: `${0.4 + i * 0.07}s` }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </h1>

            <div className="home-hero-photo">
              <img src="/images/hero.jpeg" alt="Mahad Hassan" />
            </div>
          </div>

          <p className="home-tag">
            Software engineering student at McMaster. I build things for the
            world, <em>chase ideas</em>, and love to learn.
          </p>

          <div className="home-cta-row">
            <Button variant="primary" onClick={() => navigate("/projects")}>
              See projects
            </Button>
            <Button variant="ghost" onClick={() => navigate("/resume")}>
              View Résumé
            </Button>
            <Button variant="ghost" onClick={() => navigate("/contact")}>
              Get in touch
            </Button>
          </div>
        </div>
      </section>

      {/* ── Grid ── */}
      <div className="home-grid stagger">
        <div className="card">
          <div className="card-label">
            <span className="num">01</span> · ABOUT
          </div>
          <h3>A quick snapshot.</h3>
          <ul>
            <li>Software Engineering @ McMaster University</li>
            <li>Software Engineering Intern @ AMD</li>
            <li>Diverse developer with a love for ML</li>
            <li>Hackathon winner x 2 (MacEngComp &apos;24 &amp; &apos;25)</li>
            <li>Always building, always learning</li>
          </ul>
        </div>

        <div className="card now-card">
          <div className="card-label">
            <span className="num">02</span> · NOW
          </div>
          <h3>What I&apos;m focused on.</h3>
          <ul>
            <li>Shipping ScleroCare to the App Store</li>
            <li>Exploring ML / computer vision</li>
            <li>Traveling more</li>
          </ul>
          <button
            onClick={() => navigate("/about")}
            style={{
              marginTop: "18px",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--accent)",
              cursor: "pointer",
            }}
          >
            Read more →
          </button>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="stats-row stagger">
        {STATS.map((s) => (
          <div key={s.label} className="stat">
            <div className="stat-num">
              {s.num}
              {s.plus && <span className="plus">+</span>}
            </div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── Featured ── */}
      {featured && (
        <div
          className="featured"
          onClick={() => window.open(featured.url, "_blank")}
        >
          <div>
            <p className="featured-eyebrow">★ FEATURED · {featured.award}</p>
            <h2 className="featured-title">{featured.title}</h2>
            <p className="featured-sub">{featured.desc}</p>
          </div>
          <div className="featured-cta">
            Try it out <ArrowUpRight size={13} />
          </div>
        </div>
      )}

      {/* ── Quote ── */}
      {quote && (
        <blockquote className="quote-block">
          <span className="mark">&ldquo;</span>
          {quote.Quote}
          <cite>{quote.Author}</cite>
        </blockquote>
      )}
    </>
  );
};

export default Home;
