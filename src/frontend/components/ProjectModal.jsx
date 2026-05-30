import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ReactMarkdown from "react-markdown";
import { ArrowUpRight } from "./Icons";

const projectMds = import.meta.glob("../../data/projects/*.md", {
  query: "?raw",
});

const ProjectModal = ({ project, onClose }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    setContent(null);
    const loader = projectMds[`../../data/projects/${project.id}.md`];
    if (loader) loader().then((mod) => setContent(mod.default));
  }, [project.id]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        {/* Hero */}
        <div className="modal-hero">
          {project.image ? (
            <img src={project.image} alt={project.title} />
          ) : (
            <div
              className={`modal-hero-placeholder proj-placeholder-${project.id}`}
            />
          )}
        </div>

        <div className="modal-body">
          {/* Sidebar */}
          <aside className="modal-sidebar">
            <p className="modal-sidebar-heading">Overview</p>
            <div className="modal-meta">
              <div className="modal-meta-row">
                <span>Year</span>
                <span>{project.year}</span>
              </div>
              <div className="modal-meta-row">
                <span>Type</span>
                <span>{project.tags.join(", ")}</span>
              </div>
              <div className="modal-meta-row">
                <span>Role</span>
                <span>{project.role}</span>
              </div>
              {project.award && (
                <div className="modal-meta-row">
                  <span>Award</span>
                  <span>🏆 {project.award}</span>
                </div>
              )}
            </div>

            <p className="modal-sidebar-heading" style={{ marginTop: "24px" }}>
              Stack
            </p>
            <div className="modal-tech-list">
              {project.tech?.map((t) => (
                <span key={t} className="modal-tech-tag">
                  {t}
                </span>
              ))}
            </div>

            <a
              href={project.url}
              target={project.url.startsWith("http") ? "_blank" : undefined}
              rel={
                project.url.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="btn primary"
              style={{
                marginTop: "28px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              View project <ArrowUpRight size={13} />
            </a>
          </aside>

          {/* Content */}
          <div className="modal-content">
            <h2 className="modal-title">
              {project.title}
              {project.featured && (
                <span className="modal-featured-badge">★ Featured</span>
              )}
            </h2>
            {content ? (
              <ReactMarkdown>{content}</ReactMarkdown>
            ) : (
              <p className="subtle">Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default ProjectModal;
