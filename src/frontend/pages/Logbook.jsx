import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowRight } from "../components/Icons";
import { TRIPS, PHOTO_ROLLS } from "../../data/consts";
import { LOGS } from "../../data/logUtils";
import { galleries } from "./photoGalleries";

const tags = ["all", ...new Set(LOGS.map((l) => l.tag).filter(Boolean))].sort();

// Pick a random cover image per gallery, stable for this page load
const pickCover = (globKey) => {
  const imgs = galleries[globKey] || [];
  if (!imgs.length) return null;
  return imgs[Math.floor(Math.random() * imgs.length)];
};

// Trips have no single globKey — pool every day's images and pick one
const pickTripCover = (tripId) => {
  const trip = TRIPS.find((t) => t.id === tripId);
  if (!trip) return null;
  const pool = trip.days.flatMap((d) => galleries[d.globKey] || []);
  if (!pool.length) return null;
  return pool[Math.floor(Math.random() * pool.length)];
};

const Logbook = () => {
  const navigate = useNavigate();
  const [tag, setTag] = useState("all");
  // Memoize covers so they don't re-randomize on re-render
  const covers = useMemo(() => {
    const map = {};
    PHOTO_ROLLS.forEach((r) => {
      map[r.id] = r.kind === "trip" ? pickTripCover(r.id) : pickCover(r.globKey);
    });
    return map;
  }, []);

  const filteredLogs = tag === "all" ? LOGS : LOGS.filter((l) => l.tag === tag);

  return (
    <>
      <Helmet>
        <title>Mahad&apos;s Logbook</title>
        <meta
          name="description"
          content="Writing and photography by Mahad Hassan."
        />
      </Helmet>

      <p className="eyebrow">04 / LOGBOOK</p>
      <div className="logbook-head">
        <div>
          <h1 className="display page-title" style={{ marginBottom: 8 }}>
            Logbook.
          </h1>
          <p className="subtle" style={{ fontSize: "18px", maxWidth: "540px" }}>
            Writing, photography, and notes from the journey.
          </p>
          <div className="logbook-chip-row">
            {tags.map((t) => (
              <button
                key={t}
                className="chip"
                style={
                  tag === t
                    ? {
                        border: "1px solid var(--accent)",
                        color: "var(--accent-ink)",
                        background: "var(--accent-soft)",
                      }
                    : {}
                }
                onClick={() => setTag(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Writing section */}
      <div className="log-section-title">
        Writing
        <span className="count">{filteredLogs.length} entries</span>
      </div>
      <div className="log-list">
        {filteredLogs.map((l) => (
          <div key={l.id} className="log-row" onClick={() => navigate(l.path)}>
            <span className="log-date">{l.date}</span>
            <span className="log-title">{l.title}</span>
            <span className="log-meta">
              {l.read} · {l.tag} <ArrowRight size={12} />
            </span>
          </div>
        ))}
      </div>

      {/* Photography section */}
      <div className="log-section-title">
        Photography
        <span className="count">{PHOTO_ROLLS.length} rolls</span>
      </div>
      <div className="photo-grid">
        {PHOTO_ROLLS.map((p) => (
          <div
            key={p.id}
            className="photo-tile"
            onClick={() => navigate(p.path)}
            style={
              covers[p.id] ? { backgroundImage: `url(${covers[p.id]})` } : {}
            }
          >
            <div className="photo-grad" />
            <div className="photo-overlay">
              <div className="photo-overlay-title">{p.title}</div>
              <div className="photo-overlay-date">
                {p.date} · {p.location}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p
        style={{
          fontSize: "12px",
          fontFamily: "var(--font-mono)",
          marginTop: "56px",
          color: "var(--ink-muted)",
        }}
      >
        All opinions are my own and do not reflect any affiliated organizations.
        All images are my own unless otherwise stated.
      </p>
    </>
  );
};

export default Logbook;
