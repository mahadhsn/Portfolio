/* Photo detail page */

function PagePhoto({ id }) {
  const { navigate } = useRouter();
  const photo = PHOTOS.find(p => p.id === id) || PHOTOS[0];

  return (
    <main className="page page-enter">
      <article className="photo-detail">
        <a href="#" className="log-back" onClick={(e) => { e.preventDefault(); navigate('/logbook'); }}>
          <Icon.arrowLeft /> Back to logbook
        </a>

        <h1 className="display" style={{ fontSize: 'clamp(48px, 6vw, 88px)', margin: '8px 0 24px' }}>{photo.title}</h1>

        <div className="photo-hero" data-caption={`${photo.location} · ${photo.date}`}>
          <div className="photo-grad" />
        </div>

        <div className="photo-detail-meta">
          <div>
            <div className="pdm-label">LOCATION</div>
            <div className="pdm-value">{photo.location}</div>
          </div>
          <div>
            <div className="pdm-label">DATE</div>
            <div className="pdm-value">{photo.date}</div>
          </div>
          <div>
            <div className="pdm-label">CAMERA</div>
            <div className="pdm-value">Fuji X-T4</div>
          </div>
          <div>
            <div className="pdm-label">FRAMES</div>
            <div className="pdm-value">12</div>
          </div>
        </div>

        <p style={{ fontFamily: 'var(--font-display)', fontSize: '22px', lineHeight: 1.4, color: 'var(--ink-soft)', maxWidth: '620px' }}>
          A short set from {photo.title}. Dappled light, long walks, better conversation than pictures.
        </p>

        <div className="photo-gallery" style={{ marginTop: '32px' }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="photo-tile" key={i}>
              <div className="photo-grad" />
            </div>
          ))}
        </div>

        <div className="log-next">
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-muted)' }}>BACK TO</span>
          <a href="#" onClick={(e) => { e.preventDefault(); navigate('/logbook'); }} style={{ fontFamily: 'var(--font-display)', fontSize: '20px', letterSpacing: 'var(--display-tracking)', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent)' }}>
            All photography <Icon.arrow />
          </a>
        </div>
      </article>
      <Footer />
    </main>
  );
}

window.PagePhoto = PagePhoto;
