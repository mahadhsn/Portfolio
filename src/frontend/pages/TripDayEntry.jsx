import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft, ArrowRight } from "../components/Icons";
import { TRIPS } from "../../data/consts";
import { galleries } from "./photoGalleries";

const formatDay = (dateStr) => {
  const [y, m, d] = dateStr.split("-");
  const months = [
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
  ];
  return `${months[parseInt(m, 10) - 1]} ${parseInt(d, 10)}, ${y}`;
};

const TripDayEntry = ({ tripId }) => {
  const { day } = useParams();
  const navigate = useNavigate();
  const trip = TRIPS.find((t) => t.id === tripId);

  const daysWithPhotos = useMemo(() => {
    if (!trip) return [];
    return trip.days
      .map((d) => ({ ...d, images: galleries[d.globKey] || [] }))
      .filter((d) => d.images.length > 0);
  }, [trip]);

  const currentDay = daysWithPhotos.find((d) => d.date === day);
  const currentIndex = daysWithPhotos.findIndex((d) => d.date === day);
  const prevDay = currentIndex > 0 ? daysWithPhotos[currentIndex - 1] : null;
  const nextDay =
    currentIndex >= 0 && currentIndex < daysWithPhotos.length - 1
      ? daysWithPhotos[currentIndex + 1]
      : null;

  if (!trip || !currentDay) {
    return (
      <div>
        <button
          className="log-back"
          onClick={() => navigate(trip ? trip.path : "/logbook")}
        >
          <ArrowLeft size={12} /> Back to {trip ? trip.title : "logbook"}
        </button>
        <p>Day not found.</p>
      </div>
    );
  }

  const [hero, ...rest] = currentDay.images;

  return (
    <>
      <Helmet>
        <title>{`${trip.title} · Day ${currentDay.dayNumber} — ${currentDay.place} | Mahad Hassan`}</title>
      </Helmet>

      <div className="photo-detail">
        <button className="log-back" onClick={() => navigate(trip.path)}>
          <ArrowLeft size={12} /> Back to {trip.title}
        </button>

        <h1
          className="display"
          style={{ fontSize: "clamp(48px, 6vw, 88px)", margin: "8px 0 24px" }}
        >
          {trip.title} · Day {currentDay.dayNumber}
        </h1>

        {hero && (
          <div className="photo-hero">
            <img src={hero} alt={`${trip.title} day ${currentDay.dayNumber} hero`} />
            <span className="photo-caption">
              {currentDay.place} · {formatDay(currentDay.date)}
            </span>
          </div>
        )}

        <div className="photo-detail-meta">
          <div>
            <div className="pdm-label">Location</div>
            <div className="pdm-value">{currentDay.place}</div>
          </div>
          <div>
            <div className="pdm-label">Date</div>
            <div className="pdm-value">{formatDay(currentDay.date)}</div>
          </div>
          <div>
            <div className="pdm-label">Camera</div>
            <div className="pdm-value">{trip.camera}</div>
          </div>
          <div>
            <div className="pdm-label">Frames</div>
            <div className="pdm-value">{currentDay.images.length}</div>
          </div>
        </div>

        {rest.length > 0 && (
          <div className="photo-gallery">
            {rest.map((src, i) => (
              <div key={i} className="photo-tile">
                <img src={src} alt={`${trip.title} day ${currentDay.dayNumber} ${i + 2}`} />
              </div>
            ))}
          </div>
        )}

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
              {prevDay ? "Previous day" : `All of ${trip.title}`}
            </p>
            <button
              onClick={() =>
                navigate(prevDay ? `${trip.path}/${prevDay.date}` : trip.path)
              }
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
              <ArrowLeft size={16} />{" "}
              {prevDay ? prevDay.place : trip.title}
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
              All days
            </p>
            <button
              onClick={() => navigate(trip.path)}
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
              {trip.title}
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
              {nextDay ? "Next day" : `End of ${trip.title}`}
            </p>
            <button
              onClick={() =>
                navigate(nextDay ? `${trip.path}/${nextDay.date}` : trip.path)
              }
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
              {nextDay ? nextDay.place : trip.title}{" "}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TripDayEntry;
