import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft, ArrowRight } from "../components/Icons";
import { PHOTOS, PHOTO_ROLLS } from "../../data/consts";
import Lightbox from "../components/logs/Lightbox";
import lightboxTrigger from "../components/logs/lightboxTrigger";
import ShotInfo from "../components/logs/ShotInfo";
import { usesMultipleCameras } from "../components/logs/shotSettings";
import { galleries, galleryMeta } from "./photoGalleries";

const PhotoEntry = ({ id }) => {
  const navigate = useNavigate();
  const photo = PHOTOS.find((p) => p.globKey === id);
  const images = galleries[id] || [];
  const metas = galleryMeta[id] || [];
  const showCamera = usesMultipleCameras(metas);
  const [hero, ...rest] = images;
  const [viewing, setViewing] = useState(null);

  const currentIndex = PHOTO_ROLLS.findIndex(
    (r) => r.kind === "photo" && r.globKey === id,
  );
  const prevPhoto = currentIndex > 0 ? PHOTO_ROLLS[currentIndex - 1] : null;
  const nextPhoto =
    currentIndex < PHOTO_ROLLS.length - 1
      ? PHOTO_ROLLS[currentIndex + 1]
      : null;

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
        <title>{photo.title} | Mahad Hassan</title>
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
          <div
            className="photo-hero"
            {...lightboxTrigger(() => setViewing(0), "View photo full screen")}
          >
            <img src={hero} alt={`${photo.title} hero`} />
            <span className="photo-caption">
              {photo.location} · {photo.date}
            </span>
            <ShotInfo meta={metas[0]} showCamera={showCamera} />
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
              <div
                key={i}
                className="photo-tile"
                {...lightboxTrigger(
                  () => setViewing(i + 1),
                  "View photo full screen",
                )}
              >
                <img
                  src={src}
                  alt={`${photo.title} ${i + 2}`}
                  width={metas[i + 1]?.width}
                  height={metas[i + 1]?.height}
                  loading="lazy"
                  decoding="async"
                />
                <ShotInfo meta={metas[i + 1]} showCamera={showCamera} />
              </div>
            ))}
          </div>
        )}

        {viewing !== null && (
          <Lightbox
            images={images}
            index={viewing}
            alt={photo.title}
            meta={metas}
            showCamera={showCamera}
            onClose={() => setViewing(null)}
            onChange={setViewing}
          />
        )}

        {/* Prev / Next */}
        <div className="log-next">
          {/* Left - back / prev */}
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
              {prevPhoto ? "Previous set" : "All photography"}
            </p>
            <button
              onClick={() => navigate(prevPhoto ? prevPhoto.path : "/logbook")}
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
              <ArrowLeft size={16} /> {prevPhoto ? prevPhoto.title : "Logbook"}
            </button>
          </div>

          {/* Center - logbook */}
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

          {/* Right - next */}
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
              {nextPhoto ? "Next in photography" : "End of photography"}
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
