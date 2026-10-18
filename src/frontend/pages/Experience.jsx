import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { EXPERIENCE } from "../../data/consts";
import { ArrowUpRight } from "../components/Icons";

// Internships lead with the company; teams lead with the role.
const ExperienceEntry = ({ job, roleFirst = false }) => {
  const current = job.end === "Present";
  const isExternal = job.link?.startsWith("http");
  const primary = roleFirst ? job.role : job.org;
  const secondary = roleFirst ? job.org : job.role;
  const Title = () => (
    <>
      {secondary} <ArrowUpRight size={14} />
    </>
  );

  return (
    <article className={`exp-entry${current ? " current" : ""}`}>
      <div className="exp-when">
        <span className="exp-dates">
          {job.end ? `${job.start} to ${job.end}` : job.start}
        </span>
        {current && <span className="exp-now">Current</span>}
        {job.location && <span className="exp-loc">{job.location}</span>}
      </div>
      <div className="exp-body">
        <h3 className="exp-org">{primary}</h3>
        <p className="exp-role">
          {!job.link ? (
            secondary
          ) : isExternal ? (
            <a href={job.link} target="_blank" rel="noopener noreferrer">
              <Title />
            </a>
          ) : (
            <Link to={job.link}>
              <Title />
            </Link>
          )}
        </p>
        {job.summary && <p className="exp-summary">{job.summary}</p>}
        {job.highlights.length > 0 && (
          <ul className="exp-highlights">
            {job.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}
        {job.stack.length > 0 && (
          <div className="exp-stack">
            {job.stack.map((t) => (
              <span key={t} className="exp-tag">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

const Experience = () => {
  // Current roles first; sort is stable, so the rest keep their data order.
  const byCurrent = (a, b) => (b.end === "Present") - (a.end === "Present");
  const work = EXPERIENCE.filter((e) => e.kind === "work").sort(byCurrent);
  const teams = EXPERIENCE.filter((e) => e.kind === "team").sort(byCurrent);
  const volunteering = EXPERIENCE.filter((e) => e.kind === "volunteer");

  return (
    <>
      <Helmet>
        <title>Mahad's Experience</title>
        <meta
          name="description"
          content="Work experience of Mahad Hassan: AMD, TD Bank, and engineering teams at McMaster."
        />
      </Helmet>

      <p className="eyebrow">03 / EXPERIENCE</p>
      <h1 className="display page-title">
        Where I've{" "}
        <em style={{ color: "var(--accent)", fontStyle: "italic" }}>worked.</em>
      </h1>
      <p
        className="subtle"
        style={{
          fontSize: "17px",
          maxWidth: "520px",
          marginTop: "20px",
          lineHeight: 1.6,
        }}
      >
        Internships in AI-driven test automation and backend engineering, plus
        the robotics, web, and community teams I build with at McMaster. The
        full list lives on my{" "}
        <Link to="/resume" style={{ color: "var(--accent)" }}>
          resume
        </Link>
        .
      </p>

      <h2 className="exp-section-title">Internships</h2>
      <div className="exp-list">
        {work.map((job) => (
          <ExperienceEntry key={job.id} job={job} />
        ))}
      </div>

      <h2 className="exp-section-title">Teams &amp; leadership</h2>
      <div className="exp-list">
        {teams.map((job) => (
          <ExperienceEntry key={job.id} job={job} roleFirst />
        ))}
      </div>

      <h2 className="exp-section-title">Volunteering</h2>
      <div className="exp-list">
        {volunteering.map((job) => (
          <ExperienceEntry key={job.id} job={job} roleFirst />
        ))}
      </div>
    </>
  );
};

export default Experience;
