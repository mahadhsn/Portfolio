/* Home page */

function PageHome() {
  const { navigate } = useRouter();
  const name = 'Mahad';

  return (
    <main className="page page-enter">
      <section className="home-hero">
        <div className="home-greet">
          <span className="bar" />
          <span>PORTFOLIO / 2026</span>
        </div>
        <h1 className="home-name">
          {'Hey, I\u2019m'.split('').map((c, i) => (
            <span key={`g${i}`} className="char" style={{ animationDelay: `${i * 0.03}s`, color: 'var(--ink-soft)', fontSize: '0.35em', letterSpacing: '0', display: 'inline-block', marginRight: c === ' ' ? '0.2em' : 0 }}>
              {c === ' ' ? '\u00A0' : c}
            </span>
          ))}
          <br />
          {name.split('').map((c, i) => (
            <span key={i} className={`char ${i === 0 ? 'red' : ''}`} style={{ animationDelay: `${0.4 + i * 0.07}s` }}>{c}</span>
          ))}
          <span className="char red" style={{ animationDelay: `${0.4 + name.length * 0.07}s` }}>.</span>
        </h1>

        <p className="home-tag">
          Software engineer building <em>clean systems</em> and integrating <em>AI-based solutions</em>. Currently doing my third year at McMaster — previously at TD. Outside the editor I shoot film, write logs, and learn piano.
        </p>

        <div className="home-cta-row">
          <Button variant="primary" onClick={() => navigate('/projects')}>See projects</Button>
          <Button variant="ghost" onClick={() => navigate('/resume')}>View résumé</Button>
          <Button variant="ghost" onClick={() => navigate('/contact')}>Get in touch</Button>
        </div>
      </section>

      <div className="home-grid stagger">
        <div className="card">
          <div className="card-label"><span className="num">01</span> ABOUT</div>
          <h3>A quick snapshot.</h3>
          <ul>
            <li>Software Engineering III @ McMaster</li>
            <li>Previously @ TD</li>
            <li>Building clean, scalable systems</li>
            <li>Integrating AI-based solutions</li>
          </ul>
        </div>
        <div className="card now-card">
          <div className="card-label"><span className="num">02</span> NOW</div>
          <h3>What I'm focused on.</h3>
          <ul>
            <li>Building scalable AI solutions</li>
            <li>Solving real-world problems</li>
            <li>Dean's list + 7 clubs</li>
          </ul>
          <a href="#" onClick={(e) => { e.preventDefault(); navigate('/about'); }} style={{ marginTop: '18px', display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>
            Read more <Icon.arrow />
          </a>
        </div>
      </div>

      <div className="stats-row stagger" style={{ marginTop: '24px' }}>
        <div className="stat"><div className="stat-num">10<span className="plus">+</span></div><div className="stat-label">Projects</div></div>
        <div className="stat"><div className="stat-num">5<span className="plus">+</span></div><div className="stat-label">Hackathons</div></div>
        <div className="stat"><div className="stat-num">2</div><div className="stat-label">Internships</div></div>
        <div className="stat"><div className="stat-num">7</div><div className="stat-label">Clubs</div></div>
      </div>

      <div className="featured" onClick={() => navigate('/projects')}>
        <div>
          <div className="featured-eyebrow">FEATURED · MacEngComp '25 Winner</div>
          <h2 className="featured-title">PrepPal</h2>
          <div className="featured-sub">
            Disaster awareness + emergency-support web app helping people make informed decisions before and during natural disasters.
          </div>
        </div>
        <div className="featured-cta">Try it out <Icon.arrowUpRight /></div>
      </div>

      <div className="quote-block">
        <span className="mark">"</span>
        <div>Nobody will believe in you unless you believe in yourself.</div>
        <cite>— Liberace</cite>
      </div>

      <Footer />
    </main>
  );
}

window.PageHome = PageHome;
