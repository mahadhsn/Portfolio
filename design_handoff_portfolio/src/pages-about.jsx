/* About page */

function PageAbout() {
  const [tab, setTab] = useState("intro");

  return (
    <main className="page page-enter">
      <div className="eyebrow">02 — ABOUT</div>
      <div className="about-hero">
        <div>
          <h1 className="display page-title">
            A{" "}
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
              curious
            </em>
            <br /> human first.
          </h1>
          <p
            className="subtle"
            style={{ fontSize: "17px", maxWidth: "480px", marginTop: "20px" }}
          >
            Engineer by trade, photographer by hobby. I believe small steps lead
            to big changes — and that you're your own biggest competition.
          </p>
        </div>
        <div className="about-photo-frame" />
      </div>

      <div className="about-tabs">
        {ABOUT_SECTIONS.map((s) => (
          <button
            key={s.id}
            className={`about-tab ${tab === s.id ? "active" : ""}`}
            onClick={() => setTab(s.id)}
          >
            {s.label}
          </button>
        ))}
      </div>

      {tab === "intro" && (
        <div className="about-section" key="intro">
          <h2>
            Hello, I'm <em>Mahad</em>.
          </h2>
          <p>
            Someone who's always looking to try new things. Learning new things,
            meeting new people, and experiencing new cultures keeps me going. I
            love tech, space, music, video games, movies, nature, animals — the
            full menu.
          </p>
          <p>
            If you want the real story, my logbook is where I write things as I
            learn and build. I put huge emphasis on bettering myself mentally,
            physically, and emotionally.
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
              <div className="eyebrow" style={{ margin: 0 }}>
                SHORT-TERM
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "22px",
                  marginTop: "10px",
                }}
              >
                Learning piano 🎹
              </div>
            </div>
            <div
              style={{
                padding: "20px",
                border: "1px solid var(--line)",
                borderRadius: "var(--r-md)",
              }}
            >
              <div className="eyebrow" style={{ margin: 0 }}>
                LONG-TERM
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "22px",
                  marginTop: "10px",
                }}
              >
                Start my own company 🧑‍💻
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === "now" && (
        <div className="about-section" key="now">
          <h2>
            Right <em>now</em>.
          </h2>
          <p className="subtle">
            Third year Software Engineering at McMaster — plus a handful of
            clubs that make the weeks blur together.
          </p>
          <div className="timeline">
            {[
              {
                date: "Oct 2025",
                title: "ML Engineer — McMaster Drone Club",
                meta: "✈",
              },
              {
                date: "Sept 2025",
                title: "Controls Subteam — McMaster Rocketry",
                meta: "🚀",
              },
              {
                date: "July 2025",
                title: "Web Developer — Software Eng Society",
                meta: "💻",
              },
              {
                date: "Jan 2025",
                title: "Developer — Scleroderma Canada app",
                meta: "📱",
              },
              {
                date: "Aug 2024",
                title: "Attendee Relations — DeltaHacks",
                meta: "💻",
              },
            ].map((r, i) => (
              <div className="tl-row" key={i}>
                <div className="tl-date">{r.date}</div>
                <h3 className="tl-title">{r.title}</h3>
                <div className="tl-meta">{r.meta}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "before" && (
        <div className="about-section" key="before">
          <h2>
            Before <em>this</em>.
          </h2>
          <p className="subtle">
            A couple of internships, a bunch of volunteering, and some
            leadership roles along the way.
          </p>
          <div className="timeline">
            {[
              {
                date: "May – Aug 2025",
                title: "Software Engineering Intern",
                meta: "TD 🟩",
              },
              {
                date: "Jun – Aug 2024",
                title: "Cybersecurity Intern",
                meta: "RLPC 🦠",
              },
              {
                date: "Oct 2024 – Sept 2025",
                title: "VP of Operations",
                meta: "VoicesatMac 🎤",
              },
              {
                date: "Jun 2024 – Apr 2025",
                title: "VP of Events",
                meta: "McMaster PSA 🇵🇰",
              },
              { date: "Sept 2024", title: "Volunteer", meta: "HammerHacks 💻" },
              { date: "Aug 2024", title: "Volunteer", meta: "CampQuality 🏕️" },
            ].map((r, i) => (
              <div className="tl-row" key={i}>
                <div className="tl-date">{r.date}</div>
                <h3 className="tl-title">{r.title}</h3>
                <div className="tl-meta">{r.meta}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "wins" && (
        <div className="about-section" key="wins">
          <h2>
            A few <em>wins</em>.
          </h2>
          <p className="subtle">
            Trophies on the shelf — and a few charity receipts I'm prouder of.
          </p>
          <div className="wins-grid">
            {[
              {
                icon: "🏆",
                title: "Winner · MacEngComp '25",
                meta: "Engineering Competition",
              },
              {
                icon: "🏆",
                title: "Winner · MacEngComp '24",
                meta: "Engineering Competition",
              },
              {
                icon: "🏆",
                title: "Finalist · MacEngComp '23",
                meta: "Engineering Competition",
              },
              { icon: "💯", title: "Dean's List", meta: "McMaster · ongoing" },
              {
                icon: "🎓",
                title: "1480 SAT",
                meta: "plus AP Scholar with Honor",
              },
              {
                icon: "🎗️",
                title: "~$6,000 raised for charity",
                meta: "McMaster PSA · 2024–2025",
              },
            ].map((w, i) => (
              <div className="win" key={i}>
                <div className="win-icon">{w.icon}</div>
                <div className="win-title">{w.title}</div>
                <div className="win-meta">{w.meta}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

window.PageAbout = PageAbout;
