import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Mahad</title>
        <meta
          name="description"
          content="About Mahad Hassan: software engineering student who builds things and writes about learning them."
        />
      </Helmet>

      <p className="eyebrow">02 / ABOUT</p>

      {/* Hero row */}
      <div className="about-hero">
        <div>
          <h1 className="display page-title">
            Learn more about{" "}
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>me.</em>
          </h1>
          <p
            className="subtle"
            style={{
              fontSize: "17px",
              maxWidth: "480px",
              marginTop: "20px",
              lineHeight: 1.6,
            }}
          >
            Software engineering student at McMaster. I build things, explore
            ideas, and try not to take life too seriously. My logbook is where
            the honest stuff lives.
          </p>
        </div>
        <div className="about-photo-frame">
          <img
            src="/images/about/me.jpg"
            alt="Mahad at a Daniel Caesar concert, Oct 2023"
          />
          <span className="about-photo-caption">
            Daniel Caesar concert · Oct 2023
          </span>
        </div>
      </div>

      {/* ── INTRO ── */}
      <div className="about-section">
        <h2>
          Hello, <em>world.</em>
        </h2>
        <p>
          I'm someone who's always looking to try new things: learning, meeting
          new people, and experiencing new cultures keeps me going. I love tech,
          space, music (check out my TikTok on the footer where I sing!), video
          games, movies, nature, and more. If you want the real story, my{" "}
          <a href="/logbook" style={{ color: "var(--accent)" }}>
            logbook
          </a>{" "}
          is where I write things as I learn and build.
        </p>
        <p>
          I put huge emphasis on bettering myself mentally, physically, and
          emotionally. I believe small steps lead to big changes. You are your
          biggest competition, and the only person you should be better than is
          who you were yesterday.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              padding: "20px",
              border: "1px solid var(--line)",
              borderRadius: "var(--r-md)",
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--ink-muted)",
              }}
            >
              Short-term
            </p>
            <p
              className="display"
              style={{ fontSize: "22px", marginTop: "10px" }}
            >
              Learning piano 🎹
            </p>
            <p
              style={{
                color: "var(--ink-soft)",
                fontSize: "14px",
                marginTop: "8px",
              }}
            >
              Getting past 1600 ELO in chess, attending more hackathons,
              learning to surf.
            </p>
          </div>
          <div
            style={{
              padding: "20px",
              border: "1px solid var(--line)",
              borderRadius: "var(--r-md)",
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--ink-muted)",
              }}
            >
              Long-term
            </p>
            <p
              className="display"
              style={{ fontSize: "22px", marginTop: "10px" }}
            >
              Start a company 🧑‍💻
            </p>
            <p
              style={{
                color: "var(--ink-soft)",
                fontSize: "14px",
                marginTop: "8px",
              }}
            >
              Visit every continent, learn more languages, help advance the
              human civilization.
            </p>
          </div>
        </div>
      </div>

      {/* ── WINS ── */}
      <div className="about-section" style={{ marginTop: "72px" }}>
        <h2>
          Proud <em>moments.</em>
        </h2>
        <p>Things I'm glad happened.</p>
        <div className="wins-grid">
          <div className="win">
            <div className="win-icon">🏆</div>
            <div className="win-title">MacEngComp '25 Winner</div>
            <div className="win-meta">PrepPal, Disaster awareness app</div>
          </div>
          <div className="win">
            <div className="win-icon">🏆</div>
            <div className="win-title">MacEngComp '24 Winner</div>
            <div className="win-meta">SecureVault, Cybersecurity system</div>
          </div>
          <div className="win">
            <div className="win-icon">🏅</div>
            <div className="win-title">MacEngComp '23 Finalist</div>
            <div className="win-meta">Top teams at the competition</div>
          </div>
          <div className="win">
            <div className="win-icon">💯</div>
            <div className="win-title">Consistent Dean&apos;s List</div>
            <div className="win-meta">McMaster University</div>
          </div>
          <div className="win">
            <div className="win-icon">🎓</div>
            <div className="win-title">AP Scholar with Honor</div>
            <div className="win-meta">1480 SAT score</div>
          </div>
          <div className="win">
            <div className="win-icon">🎗️</div>
            <div className="win-title">~$6,000 raised for charity</div>
            <div className="win-meta">With McMaster PSA, 2024–25</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
