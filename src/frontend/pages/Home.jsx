import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Button from "../components/Button";
import { ArrowUpRight } from "../components/Icons";
import {
  STATS,
  PROJECTS,
  GREETINGS,
  SNAPSHOT,
  NOW_ITEMS,
  HERO_ROLE,
  HERO_ROLE_PREV,
  HERO_DEGREE,
} from "../../data/consts";

const im = " I'm";
const line2 = "Mahad.";
const SnapshotList = ({ rows }) => (
  <dl className="snapshot">
    {rows.map((row) => (
      <div key={row.label} className="snapshot-row">
        <dt>{row.label}</dt>
        <dd>
          <span className="snapshot-value">{row.value}</span>
          <span className="snapshot-detail">{row.detail}</span>
        </dd>
      </div>
    ))}
  </dl>
);

const GREETING_FADE_MS = 220;
const GREETING_HOLD_MS = 3200;

const Home = () => {
  const navigate = useNavigate();
  const [quote, setQuote] = useState(null);
  const [greetingIdx, setGreetingIdx] = useState(0);
  const featured = PROJECTS.find((p) => p.featured);
  const greeting = GREETINGS[greetingIdx];
  const [leaving, setLeaving] = useState(false);
  const greetingRef = useRef(null);
  const prevWidth = useRef(null);

  // Fade the current greeting out, then swap it in (see width effect below).
  const cycleGreeting = useCallback(() => {
    if (leaving) return;
    setLeaving(true);
    setTimeout(() => {
      prevWidth.current = greetingRef.current?.offsetWidth ?? null;
      setGreetingIdx((i) => (i + 1) % GREETINGS.length);
      setLeaving(false);
    }, GREETING_FADE_MS);
  }, [leaving]);

  // Animate the greeting's width so " I'm Mahad." glides instead of jumping.
  useLayoutEffect(() => {
    const el = greetingRef.current;
    const from = prevWidth.current;
    if (!el || from == null) return;
    prevWidth.current = null;
    el.style.width = "";
    const to = el.offsetWidth;
    el.style.width = `${from}px`;
    el.offsetWidth; // force reflow so the transition starts from `from`
    el.style.width = `${to}px`;
    const done = setTimeout(() => (el.style.width = ""), 450);
    return () => clearTimeout(done);
  }, [greetingIdx]);

  // Auto-advance; a click restarts the timer since it changes greetingIdx.
  useEffect(() => {
    const t = setTimeout(cycleGreeting, GREETING_HOLD_MS);
    return () => clearTimeout(t);
  }, [greetingIdx, cycleGreeting]);

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
                  ref={greetingRef}
                  className="char greeting-text"
                  onClick={cycleGreeting}
                  style={{
                    animationDelay: "0s",
                    fontSize: "0.35em",
                    letterSpacing: 0,
                    cursor: "pointer",
                  }}
                >
                  <span
                    key={greetingIdx}
                    className={`greeting-word${leaving ? " leaving" : ""}`}
                  >
                    {greeting.text}
                    {greeting.flag && (
                      <span style={{ margin: "0 0.15em" }}>
                        {greeting.flag}
                      </span>
                    )}
                    {","}
                  </span>
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

          <div className="home-role">
            <p>{HERO_ROLE}</p>
            <p className="home-role-prev">{HERO_ROLE_PREV}</p>
            <p className="home-role-prev">{HERO_DEGREE}</p>
          </div>
          <p className="home-tag">
            I build things for the world, <em>chase ideas</em>, and love to
            learn.
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
            <span className="num">01</span> · SNAPSHOT
          </div>
          <h3>The short version.</h3>
          <SnapshotList rows={SNAPSHOT} />
          <button className="card-link" onClick={() => navigate("/experience")}>
            Full experience →
          </button>
        </div>

        <div className="card now-card">
          <div className="card-label">
            <span className="num">02</span> · NOW
          </div>
          <h3>What I&apos;m focused on.</h3>
          <SnapshotList rows={NOW_ITEMS} />
          <button className="card-link" onClick={() => navigate("/logbook")}>
            Read the logbook →
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
