/* Logbook index */

function PageLogbook() {
  const { navigate } = useRouter();
  const [tag, setTag] = useState('all');
  const tags = ['all', 'life', 'school', 'career', 'build'];

  return (
    <main className="page page-enter">
      <div className="eyebrow">04 — LOGBOOK</div>
      <div className="logbook-head">
        <div>
          <h1 className="display page-title">Logbook.</h1>
          <p className="subtle" style={{ fontSize: '18px', maxWidth: '540px' }}>
            Where I keep the raw version of what I'm learning, building, and shooting.
          </p>
          <div className="logbook-chip-row">
            {tags.map(t => (
              <button key={t} className="chip" style={{ cursor: 'pointer', border: tag === t ? '1px solid var(--accent)' : '1px solid transparent', color: tag === t ? 'var(--accent-ink)' : '', background: tag === t ? 'var(--accent-soft)' : 'var(--bg-sunk)' }} onClick={() => setTag(t)}>{t}</button>
            ))}
          </div>
        </div>
      </div>

      <h2 className="log-section-title">
        Writing <span className="count">{LOGS.length} entries</span>
      </h2>
      <div className="log-list">
        {LOGS.map(l => (
          <div className="log-row" key={l.id} onClick={() => navigate(`/logbook/${l.id}`)}>
            <div className="log-date">{l.date}</div>
            <h3 className="log-title">{l.title}</h3>
            <div className="log-meta">{l.read} · {l.tag}</div>
          </div>
        ))}
      </div>

      <h2 className="log-section-title">
        Photography <span className="count">{PHOTOS.length} rolls</span>
      </h2>
      <div className="photo-grid">
        {PHOTOS.map((p, i) => (
          <div className="photo-tile" key={p.id} onClick={() => navigate(`/logbook/photo/${p.id}`)}>
            <div className="photo-grad" />
            <div className="photo-overlay">
              <div className="photo-overlay-title">{p.title}</div>
              <div className="photo-overlay-date">{p.date}</div>
            </div>
          </div>
        ))}
      </div>

      <p className="subtle" style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', marginTop: '56px', color: 'var(--ink-muted)' }}>
        All opinions here are my own. All images are mine unless otherwise stated.
      </p>

      <Footer />
    </main>
  );
}

window.PageLogbook = PageLogbook;
