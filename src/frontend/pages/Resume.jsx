import { Helmet } from "react-helmet";
import { Download, ArrowUpRight } from "../components/Icons";

const Resume = () => (
  <>
    <Helmet>
      <title>Mahad's Resume</title>
      <meta name="description" content="Resume of Mahad Hassan, software engineering student." />
    </Helmet>

    <p className="eyebrow">05 — RESUME</p>

    <div className="resume-head">
      <h1 className="display page-title">Resume</h1>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <a href="/resume/mahadresume.pdf" download className="btn primary" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Download size={14} /> Download PDF
        </a>
        <a href="/resume/mahadresume.pdf" target="_blank" rel="noopener noreferrer" className="btn ghost" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          Open PDF <ArrowUpRight size={14} />
        </a>
      </div>
    </div>

    <div className="resume-doc">

      {/* ── Header ── */}
      <div className="resume-doc-header">
        <h2 className="resume-doc-name">Mahad Hassan</h2>
        <div className="resume-doc-contact">
          <span>Burlington, ON</span>
          <a href="tel:+12899523792">+1 (289) 952-3792</a>
          <a href="mailto:mahadhassan.hello@gmail.com">mahadhassan.hello@gmail.com</a>
          <a href="https://www.mahadhssn.com/" target="_blank" rel="noopener noreferrer">Portfolio</a>
          <a href="https://www.linkedin.com/in/mahad-hassan/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/mahadhsn" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>

      {/* ── Education ── */}
      <section className="resume-section">
        <h3 className="resume-section-title">Education</h3>
        <div className="resume-entry">
          <div className="resume-entry-head">
            <a href="https://www.eng.mcmaster.ca/cas/" target="_blank" rel="noopener noreferrer" className="resume-entry-org">
              McMaster University <ArrowUpRight size={11} />
            </a>
            <span className="resume-entry-date">Expected May 2027</span>
          </div>
          <div className="resume-entry-role">
            <span className="resume-entry-title">Honours Software Engineering Co-op Level III, B.Eng — <strong>3.9 GPA</strong></span>
            <span className="resume-entry-location">Hamilton, ON</span>
          </div>
          <ul className="resume-bullets">
            <li><strong>Achievements:</strong> Consistent Dean's List · Finalist at MacEngComp 23' · $3k entrance scholarship</li>
            <li><strong>Courses:</strong> Data Structures & Algorithms · OOP (Java) · Development (C, Git, Bash) · Math in Python · Databases (SQL)</li>
            <li><strong>Leadership:</strong> Events VP, MacPSA · VP Operations, Voices@Mac · Attendee Relations, DeltaHacks · Web Dev @ MacSES</li>
          </ul>
        </div>
      </section>

      {/* ── Technical Skills ── */}
      <section className="resume-section">
        <h3 className="resume-section-title">Technical Skills</h3>
        <ul className="resume-skills-list">
          <li><strong>Languages:</strong> C/C++, Python, MATLAB, Bash, Verilog, Java, SQL, TypeScript</li>
          <li><strong>Embedded & Systems:</strong> Linux, Jetson Nano, Firmware (C/C++), Telemetry Systems, Serial I/O, MATLAB/Simulink</li>
          <li><strong>Machine Learning & CV:</strong> TensorFlow, OpenCV, NumPy, Pandas, Matplotlib, Model Optimization, Training & Inference</li>
          <li><strong>Tools:</strong> Git/GitHub, Jupyter, VS Code, PyCharm, Anaconda, Vim, Onshape, KiCad, Maven</li>
          <li><strong>Web & DevOps:</strong> React.js, Node.js, Firebase, Terraform, GitHub Actions, CI/CD, Cloud (AWS/Azure)</li>
        </ul>
      </section>

      {/* ── Experience ── */}
      <section className="resume-section">
        <h3 className="resume-section-title">Experience</h3>

        <div className="resume-entry">
          <div className="resume-entry-head">
            <a href="https://www.linkedin.com/posts/mahad-hassan_as-my-software-engineering-internship-with-activity-7363738067230195712-W4o_/" target="_blank" rel="noopener noreferrer" className="resume-entry-org">
              Software Engineer Intern <ArrowUpRight size={11} />
            </a>
            <span className="resume-entry-date">May 2025 – Aug 2025</span>
          </div>
          <div className="resume-entry-role">
            <span className="resume-entry-title">TD Bank</span>
            <span className="resume-entry-location">Toronto, ON</span>
          </div>
          <ul className="resume-bullets">
            <li>Developed <strong>FRAM</strong>, a microservice in Java/Spring on Azure using Kafka for data transfer and async design</li>
            <li>Migrated API client processing to non-blocking, concurrent execution, delivering <strong>$1M/year</strong> in infrastructure savings</li>
            <li>Analyzed service performance and failure modes across distributed components to improve reliability under production load</li>
            <li>Optimized CI/CD pipelines via GitHub Actions, reducing deployment time by 20% across 7 distributed services</li>
            <li>Updated <strong>Terraform</strong> configurations to support infrastructure <strong>failover testing</strong> in secondary environments</li>
          </ul>
        </div>

        <div className="resume-entry">
          <div className="resume-entry-head">
            <a href="https://www.macdrones.ca" target="_blank" rel="noopener noreferrer" className="resume-entry-org">
              Machine Learning Engineer <ArrowUpRight size={11} />
            </a>
            <span className="resume-entry-date">Oct 2025 – Present</span>
          </div>
          <div className="resume-entry-role">
            <span className="resume-entry-title">McMaster Aerial Robotics and Drones Club</span>
            <span className="resume-entry-location">Hamilton, ON</span>
          </div>
          <ul className="resume-bullets">
            <li>Implementing a real-time <strong>vision model pipeline</strong> using TensorFlow + classical CV for autonomous landing</li>
            <li>Optimizing ML inference on the <strong>Jetson Nano</strong> (CUDA-accelerated) for low-latency, real-time processing</li>
            <li>Iterating on preprocessing, input resolution, and model parameters to balance accuracy with real-time inference constraints</li>
            <li>Integrating detection outputs with <strong>precision-landing controllers</strong> and waypoint-navigation logic</li>
            <li>Processing depth and telemetry streams to improve inference stability, robustness, and real-world accuracy</li>
          </ul>
        </div>

        <div className="resume-entry">
          <div className="resume-entry-head">
            <a href="https://www.mahadhssn.com/logbook/sclerocare" target="_blank" rel="noopener noreferrer" className="resume-entry-org">
              Software Developer <ArrowUpRight size={11} />
            </a>
            <span className="resume-entry-date">Jan 2025 – Present</span>
          </div>
          <div className="resume-entry-role">
            <span className="resume-entry-title">McMaster iBioMed Society</span>
            <span className="resume-entry-location">Remote</span>
          </div>
          <ul className="resume-bullets">
            <li>Developing an <strong>app</strong> with <strong>React Native</strong> and <strong>Firebase</strong> to centralize <strong>mental</strong>, <strong>physical</strong>, & <strong>financial</strong> support for patients</li>
            <li>Implementing end-to-end <strong>encryption</strong>, including a <strong>secure medical resume</strong> section and <strong>protected data storage</strong></li>
            <li>Designing an <strong>accessible</strong>, user-focused interface to ensure <strong>privacy</strong>, <strong>data security</strong>, and <strong>seamless patient interaction</strong></li>
          </ul>
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="resume-section">
        <h3 className="resume-section-title">Projects</h3>

        <div className="resume-entry">
          <div className="resume-entry-head">
            <div className="resume-entry-org">
              <a href="https://digit-recognizer-web.vercel.app/" target="_blank" rel="noopener noreferrer">
                Digit Recognizer AI <ArrowUpRight size={11} />
              </a>
              <span className="resume-proj-stack">TypeScript (React, Tailwind CSS), Python (TensorFlow, Matplotlib)</span>
            </div>
          </div>
          <ul className="resume-bullets">
            <li>Designed an <strong>8-layer CNN</strong> achieving <strong>99.3%</strong> accuracy on MNIST using <strong>60,000</strong> training and <strong>10,000</strong> test images</li>
            <li>Utilized <strong>Matplotlib</strong> to visualize model predictions with confidence levels for each digit class</li>
            <li>Integrated <strong>React</strong> & <strong>TailwindCSS</strong> to visually display <strong>live</strong> bar chart predictions for drawn digits</li>
            <li>Experimented with network depth and pooling strategies to study their impact on convergence and generalization</li>
          </ul>
        </div>

        <div className="resume-entry">
          <div className="resume-entry-head">
            <div className="resume-entry-org">
              <a href="https://natural-disaster-map.vercel.app/" target="_blank" rel="noopener noreferrer">
                PrepPal <ArrowUpRight size={11} />
              </a>
              <span className="resume-proj-stack">TypeScript (React, Next.js), Tailwind CSS, GCP Vision, OpenAI</span>
            </div>
            <span className="resume-entry-date resume-award">3rd · MacEngComp 25'</span>
          </div>
          <ul className="resume-bullets">
            <li>Developed an <strong>AI-powered</strong> disaster-readiness platform using <strong>Next.js + GCP Vision</strong> with <strong>&lt;2s</strong> image detection</li>
            <li>Designed a modular detection pipeline <strong>(localization + OCR + label matching)</strong> improving reliability by <strong>40%</strong></li>
            <li>Integrated <strong>global hazard data</strong> (USGS/NOAA/NASA) enabling <strong>instant (&lt;1s)</strong> risk lookups and threat analysis</li>
            <li>Handled noisy, real-world image inputs by combining model predictions with rule-based validation for safer outputs</li>
          </ul>
        </div>

        <div className="resume-entry">
          <div className="resume-entry-head">
            <div className="resume-entry-org">
              <a href="https://github.com/mahadhsn/MacEngComp24" target="_blank" rel="noopener noreferrer">
                SecureVault <ArrowUpRight size={11} />
              </a>
              <span className="resume-proj-stack">Python (OpenCV, Flask, Cryptography), SQL, Git</span>
            </div>
            <span className="resume-entry-date resume-award">2nd · MacEngComp 24'</span>
          </div>
          <ul className="resume-bullets">
            <li>Designed a system combining <strong>facial recognition</strong>, <strong>password manager</strong>, and <strong>file encryption</strong> to enhance data protection</li>
            <li>Leveraged Python and SQL to develop a solution within a <strong>7-hour coding sprint</strong>, securing <strong>2nd place</strong> among 30+ teams</li>
            <li>Focused on secure handling of biometric data and encrypted storage under strict time constraints</li>
          </ul>
        </div>
      </section>

    </div>
  </>
);

export default Resume;
