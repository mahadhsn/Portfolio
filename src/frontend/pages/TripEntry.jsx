import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft, ArrowRight } from "../components/Icons";
import { TRIPS, PHOTO_ROLLS } from "../../data/consts";
import { galleries } from "./photoGalleries";

const formatDay = (dateStr) => {
  const [, m, d] = dateStr.split("-");
  const months = [
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
  ];
  return `${months[parseInt(m, 10) - 1]} ${parseInt(d, 10)}`;
};

const TripEntry = ({ tripId }) => {
  const navigate = useNavigate();
  const trip = TRIPS.find((t) => t.id === tripId);

  const daysWithPhotos = useMemo(() => {
    if (!trip) return [];
    return trip.days
      .map((day) => ({ ...day, images: galleries[day.globKey] || [] }))
      .filter((day) => day.images.length > 0);
  }, [trip]);

  const hero = daysWithPhotos[0]?.images[0];
  const totalFrames = daysWithPhotos.reduce((n, d) => n + d.images.length, 0);

  const currentIndex = PHOTO_ROLLS.findIndex(
    (r) => r.kind === "trip" && r.id === tripId,
  );
  const prevRoll = currentIndex > 0 ? PHOTO_ROLLS[currentIndex - 1] : null;
  const nextRoll =
    currentIndex < PHOTO_ROLLS.length - 1
      ? PHOTO_ROLLS[currentIndex + 1]
      : null;

  if (!trip) {
    return (
      <div>
        <button className="log-back" onClick={() => navigate("/logbook")}>
          <ArrowLeft size={12} /> Back to logbook
        </button>
        <p>Trip not found.</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{trip.title} | Mahad Hassan</title>
      </Helmet>

      <div className="photo-detail">
        <button className="log-back" onClick={() => navigate("/logbook")}>
          <ArrowLeft size={12} /> Back to logbook
        </button>

        <h1
          className="display"
          style={{ fontSize: "clamp(48px, 6vw, 88px)", margin: "8px 0 24px" }}
        >
          {trip.title}
        </h1>

        {hero && (
          <div className="photo-hero">
            <img src={hero} alt={`${trip.title} hero`} />
            <span className="photo-caption">
              {trip.location} · {trip.dateRange}
            </span>
          </div>
        )}

        <div className="photo-detail-meta">
          <div>
            <div className="pdm-label">Location</div>
            <div className="pdm-value">{trip.location}</div>
          </div>
          <div>
            <div className="pdm-label">Dates</div>
            <div className="pdm-value">{trip.dateRange}</div>
          </div>
          <div>
            <div className="pdm-label">Camera</div>
            <div className="pdm-value">{trip.camera}</div>
          </div>
          <div>
            <div className="pdm-label">Frames</div>
            <div className="pdm-value">{totalFrames}</div>
          </div>
        </div>

        <div className="log-section-title">
          Days
          <span className="count">{daysWithPhotos.length} logged</span>
        </div>
        <div className="photo-grid">
          {daysWithPhotos.map((day) => (
            <div
              key={day.date}
              className="photo-tile"
              onClick={() => navigate(`${trip.path}/${day.date}`)}
              style={{ backgroundImage: `url(${day.images[0]})` }}
            >
              <div className="photo-grad" />
              <div className="photo-overlay">
                <div className="photo-overlay-title">{day.place}</div>
                <div className="photo-overlay-date">
                  Day {day.dayNumber} · {formatDay(day.date)} ·{" "}
                  {day.images.length} frames
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="log-next">
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--ink-muted)",
              }}
            >
              {prevRoll ? "Previous set" : "All photography"}
            </p>
            <button
              onClick={() => navigate(prevRoll ? prevRoll.path : "/logbook")}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "20px",
                letterSpacing: "var(--display-tracking)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "var(--accent)",
                cursor: "pointer",
                marginTop: "8px",
              }}
            >
              <ArrowLeft size={16} /> {prevRoll ? prevRoll.title : "Logbook"}
            </button>
          </div>

          <div style={{ textAlign: "center" }}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--ink-muted)",
              }}
            >
              All entries
            </p>
            <button
              onClick={() => navigate("/logbook")}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "20px",
                letterSpacing: "var(--display-tracking)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "var(--accent)",
                cursor: "pointer",
                marginTop: "8px",
              }}
            >
              Logbook
            </button>
          </div>

          <div style={{ textAlign: "right" }}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--ink-muted)",
              }}
            >
              {nextRoll ? "Next in photography" : "End of photography"}
            </p>
            <button
              onClick={() => navigate(nextRoll ? nextRoll.path : "/logbook")}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "20px",
                letterSpacing: "var(--display-tracking)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "var(--accent)",
                cursor: "pointer",
                marginTop: "8px",
              }}
            >
              {nextRoll ? nextRoll.title : "All photography"}{" "}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TripEntry;
