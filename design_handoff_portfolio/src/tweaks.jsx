/* Tweaks panel — live design system toggles */

const THEMES = [
  { id: 'editorial', label: 'Signature', swatch: '#2d4cc8', swatchDark: '#e84a5f', desc: 'Blue light · red dark (default)' },
  { id: 'precise',   label: 'Precise',   swatch: '#0e6e8a', swatchDark: '#e8b14a', desc: 'Teal light · amber dark' },
  { id: 'brutal',    label: 'Mono',      swatch: '#c8304a', swatchDark: '#ff4d67', desc: 'Strict mono · red accent' },
];

function TweaksPanel({ onThemeChange, onModeChange, theme, mode }) {
  return (
    <div className="tweaks">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
        <strong style={{ fontFamily: 'var(--font-display)', fontSize: '20px', letterSpacing: 'var(--display-tracking)' }}>Tweaks</strong>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--ink-muted)', letterSpacing: '0.1em' }}>LIVE</span>
      </div>

      <div className="tweak-group">
        <h4>Design Direction</h4>
        <div className="swatch-row">
          {THEMES.map(t => (
            <button
              key={t.id}
              className={`swatch ${theme === t.id ? 'active' : ''}`}
              onClick={() => onThemeChange(t.id)}
              title={t.desc}
            >
              <div className="swatch-chip" style={{ background: t.swatch }} />
              <div>{t.label}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="tweak-group">
        <h4>Mode</h4>
        <div className="swatch-row" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <button className={`swatch ${mode === 'light' ? 'active' : ''}`} onClick={() => onModeChange('light')}>
            <div className="swatch-chip" style={{ background: '#f5f1ea', border: '1px solid #ccc' }} />
            <div>Light</div>
          </button>
          <button className={`swatch ${mode === 'dark' ? 'active' : ''}`} onClick={() => onModeChange('dark')}>
            <div className="swatch-chip" style={{ background: '#15120e' }} />
            <div>Dark</div>
          </button>
        </div>
      </div>

      <p style={{ fontSize: '11px', color: 'var(--ink-muted)', margin: 0, lineHeight: 1.5 }}>
        Three directions to explore — pick one and the whole site reflows with it. Light-first is default.
      </p>
    </div>
  );
}

window.TweaksPanel = TweaksPanel;
