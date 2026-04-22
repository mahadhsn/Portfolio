import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft, ArrowRight } from "../components/Icons";
import { PHOTOS } from "../../data/consts";
import { galleries } from "./photoGalleries";

const PhotoEntry = ({ id }) => {
  const navigate = useNavigate();
  const photo = PHOTOS.find((p) => p.globKey === id);
  const images = galleries[id] || [];
  const [hero, ...rest] = images;

  const currentIndex = PHOTOS.findIndex((p) => p.globKey === id);
  const nextPhoto =
    currentIndex < PHOTOS.length - 1 ? PHOTOS[currentIndex + 1] : null;

  if (!photo) {
    return (
      <div>
        <button className="log-back" onClick={() => navigate("/logbook")}>
          <ArrowLeft size={12} /> Back to logbook
        </button>
        <p>Gallery not found.</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{photo.title} — Mahad Hassan</title>
      </Helmet>

      <div className="photo-detail">
        <button className="log-back" onClick={() => navigate("/logbook")}>
          <ArrowLeft size={12} /> Back to logbook
        </button>

        <h1
          className="display"
          style={{ fontSize: "clamp(48px, 6vw, 88px)", margin: "8px 0 24px" }}
        >
          {photo.title}
        </h1>

        {/* Hero image */}
        {hero && (
          <div className="photo-hero">
            <img src={hero} alt={`${photo.title} hero`} />
            <span className="photo-caption">
              {photo.location} · {photo.date}
            </span>
          </div>
        )}

        {/* Metadata strip */}
        <div className="photo-detail-meta">
          <div>
            <div className="pdm-label">Location</div>
            <div className="pdm-value">{photo.location}</div>
          </div>
          <div>
            <div className="pdm-label">Date</div>
            <div className="pdm-value">{photo.date}</div>
          </div>
          <div>
            <div className="pdm-label">Camera</div>
            <div className="pdm-value">{photo.camera}</div>
          </div>
          <div>
            <div className="pdm-label">Frames</div>
            <div className="pdm-value">{images.length}</div>
          </div>
        </div>

        {/* Gallery */}
        {rest.length > 0 && (
          <div className="photo-gallery">
            {rest.map((src, i) => (
              <div key={i} className="photo-tile">
                <img src={src} alt={`${photo.title} ${i + 2}`} />
              </div>
            ))}
          </div>
        )}

        {/* Next */}
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
              {nextPhoto ? "Next in photography" : "Back to logbook"}
            </p>
            <button
              onClick={() => navigate(nextPhoto ? nextPhoto.path : "/logbook")}
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
              {nextPhoto ? nextPhoto.title : "All photography"}{" "}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoEntry;
