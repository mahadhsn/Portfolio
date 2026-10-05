import { Helmet } from "react-helmet";
import { Download, ArrowUpRight } from "../components/Icons";

const Resume = () => (
  <>
    <Helmet>
      <title>Mahad's Resume</title>
      <meta
        name="description"
        content="Resume of Mahad Hassan, software engineering student."
      />
    </Helmet>

    <p className="eyebrow">05 / RESUME</p>

    <div className="resume-head">
      <h1 className="display page-title">Resume</h1>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <a
          href="/resume/mahadresume.pdf"
          download
          className="btn primary"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <Download size={14} /> Download PDF
        </a>
        <a
          href="/resume/mahadresume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn ghost"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
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
          <a href="mailto:mahadhassan.hello@gmail.com">
            mahadhassan.hello@gmail.com
          </a>
          <a
            href="https://www.mahadhssn.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
          <a
            href="https://www.linkedin.com/in/mahad-hassan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/mahadhsn"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* ── Education ── */}
      <section className="resume-section">
        <h3 className="resume-section-title">Education</h3>
        <div className="resume-entry">
          <div className="resume-entry-head">
            <a
              href="https://www.eng.mcmaster.ca/cas/"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-entry-org"
            >
              McMaster University <ArrowUpRight size={11} />
            </a>
            <span className="resume-entry-date">Expected May 2027</span>
          </div>
          <div className="resume-entry-role">
            <span className="resume-entry-title">
              Honours Software Engineering Co-op Level III, B.Eng,{" "}
              <strong>3.9 GPA</strong>
            </span>
            <span className="resume-entry-location">Hamilton, ON</span>
          </div>
          <ul className="resume-bullets">
            <li>
              <strong>Achievements:</strong> Consistent Dean's List · Finalist
              at MacEngComp 23' · $3k entrance scholarship
            </li>
            <li>
              <strong>Coursework:</strong> Data Structures & Algorithms · OOP
              (Java) · Development (C, Git, Bash) · Databases (SQL)
            </li>
            <li>
              <strong>Leadership:</strong> Events VP, MacPSA · VP Operations,
              Voices@Mac · Attendee Relations, DeltaHacks · Web Dev, MacSES
            </li>
          </ul>
        </div>
      </section>

      {/* ── Technical Skills ── */}
      <section className="resume-section">
        <h3 className="resume-section-title">Technical Skills</h3>
        <ul className="resume-skills-list">
          <li>
            <strong>Languages:</strong> Python, Java, C/C++,
            TypeScript/JavaScript, SQL, Bash, MATLAB, Verilog, HTML/CSS
          </li>
          <li>
            <strong>AI & Agents:</strong> LLM Agents, MCP Servers (FastMCP),
            OpenAI SDK, Agent Skills, RAG (LlamaIndex), LLM Fine-tuning
            (Unsloth), Prompt/Context Engineering
          </li>
          <li>
            <strong>Testing & Automation:</strong> Jenkins,
            Hardware-in-the-loop Validation, Test Frameworks,
            Unit/Integration Testing, Log Analysis
          </li>
          <li>
            <strong>Machine Learning & CV:</strong> TensorFlow, OpenCV, NumPy,
            Pandas, Matplotlib, Synthetic Data, Classical CV
          </li>
          <li>
            <strong>Simulation & Robotics:</strong> Sensor Modeling, Domain
            Randomization, Sim-to-Real Transfer, Control-Loop Testing
          </li>
          <li>
            <strong>Embedded & Systems:</strong> Linux/UNIX, Jetson Nano,
            Raspberry Pi, Firmware (C/C++), Telemetry, Serial I/O
          </li>
          <li>
            <strong>Web/App:</strong> FastAPI, React, Next.js, Astro, Node.js,
            React Native, Flask, REST APIs
          </li>
          <li>
            <strong>DevOps & Cloud:</strong> Git/GitHub, GitHub Actions, CI/CD,
            Docker/Compose, Helm/Kubernetes, Terraform, Kafka, Azure/AWS
          </li>
          <li>
            <strong>Data:</strong> PostgreSQL/SQL, SQLAlchemy, Firebase/NoSQL,
            JSON Schema, YAML
          </li>
          <li>
            <strong>Practices:</strong> Agile/SDLC, Jira, Confluence, Code
            Reviews, Release/Incident Support
          </li>
        </ul>
      </section>

      {/* ── Experience ── */}
      <section className="resume-section">
        <h3 className="resume-section-title">Experience</h3>

        <div className="resume-entry">
          <div className="resume-entry-head">
            <span className="resume-entry-org">
              Software Test Automation Engineer Intern
            </span>
            <span className="resume-entry-date">May 2026 – Present</span>
          </div>
          <div className="resume-entry-role">
            <span className="resume-entry-title">
              Advanced Micro Devices (AMD)
            </span>
            <span className="resume-entry-location">Markham, ON</span>
          </div>
          <ul className="resume-bullets">
            <li>
              Built the <strong>Test Content Agent</strong>, a{" "}
              <strong>fully autonomous</strong> pipeline that gathers
              requirements, generates tests, and validates them on real
              hardware with <strong>no human in the loop</strong> until review,
              cutting generation from ~1 week to hours (<strong>~99%</strong>)
              across <strong>48</strong> generated tests
            </li>
            <li>
              Built the entire <strong>UI</strong> for tracking and monitoring
              the pipeline, plus most of the backend on <strong>FastAPI</strong>{" "}
              and <strong>PostgreSQL</strong>, orchestrating LLMs and pulling
              requirements from <strong>5 sources</strong> including Jama,
              Confluence, and internal test storage sites
            </li>
            <li>
              Agents run <strong>50–90 searches</strong> per full run across
              sources including an <strong>845k-line</strong>,{" "}
              <strong>2,094-test</strong> library, reading{" "}
              <strong>1.5–5M tokens</strong> and condensing it into ~
              <strong>10k lines</strong> of research
            </li>
            <li>
              Designed its <strong>self-heal loop</strong> with{" "}
              <strong>rollback</strong>, catching <strong>~91%</strong> of
              false passes from tests that never actually ran
            </li>
            <li>
              <strong>Containerized</strong> it with Docker for an{" "}
              <strong>org-wide</strong> <strong>Kubernetes</strong> rollout,
              with a watchdog for recurring pipeline failures
            </li>
            <li>
              Built an <strong>MCP server</strong> that lets agents{" "}
              <strong>autonomously</strong> write, run, and debug tests on real
              hardware via <strong>Jenkins</strong>, with SSH validation and{" "}
              <strong>log compression</strong> saving <strong>3 hours</strong>{" "}
              per run
            </li>
            <li>
              Building <strong>Atlas</strong>, a mono-repo codifying org-wide
              engineering knowledge into structured, agent-readable form with
              validators and schema-based governance, so agents retrieve only
              the context a task needs, as the foundation for{" "}
              <strong>org-wide</strong> knowledge
            </li>
            <li>
              Wrote reusable agent skills and PR workflows for Atlas; also
              migrated MS Teams and AgilitySDK tests
            </li>
          </ul>
        </div>

        <div className="resume-entry">
          <div className="resume-entry-head">
            <a
              href="https://www.linkedin.com/posts/mahad-hassan_as-my-software-engineering-internship-with-activity-7363738067230195712-W4o_/"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-entry-org"
            >
              Software Engineer Intern <ArrowUpRight size={11} />
            </a>
            <span className="resume-entry-date">May 2025 – Aug 2025</span>
          </div>
          <div className="resume-entry-role">
            <span className="resume-entry-title">TD Bank</span>
            <span className="resume-entry-location">Toronto, ON</span>
          </div>
          <ul className="resume-bullets">
            <li>
              Developed <strong>FRAM</strong>, a Java/Spring microservice on
              Azure using <strong>Kafka</strong> for high-volume asynchronous
              processing
            </li>
            <li>
              Migrated API client processing to{" "}
              <strong>non-blocking, concurrent</strong> execution, delivering{" "}
              <strong>$1M/year</strong> in infrastructure savings
            </li>
            <li>
              Analyzed performance and failure modes across distributed
              components to improve reliability under production load
            </li>
            <li>
              Improved <strong>CI/CD</strong> via GitHub Actions for{" "}
              <strong>20% faster deployments</strong> across{" "}
              <strong>7 microservices</strong>
            </li>
            <li>
              Updated <strong>Terraform</strong> configurations to enable{" "}
              <strong>failover testing</strong> in secondary environments
            </li>
            <li>
              Wrote unit/integration tests and supported releases/incidents as
              part of the team's SDLC
            </li>
          </ul>
        </div>

        <div className="resume-entry">
          <div className="resume-entry-head">
            <a
              href="https://www.macdrones.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-entry-org"
            >
              Machine Learning Engineer <ArrowUpRight size={11} />
            </a>
            <span className="resume-entry-date">Oct 2025 – Present</span>
          </div>
          <div className="resume-entry-role">
            <span className="resume-entry-title">
              McMaster Aerial Robotics and Drones Club
            </span>
            <span className="resume-entry-location">Hamilton, ON</span>
          </div>
          <ul className="resume-bullets">
            <li>
              Implementing a real-time <strong>vision model pipeline</strong>{" "}
              using TensorFlow + classical CV for autonomous landing
            </li>
            <li>
              Optimizing ML inference on the <strong>Jetson Nano</strong>{" "}
              (CUDA-accelerated) for <strong>sub-50ms</strong>, real-time
              processing
            </li>
            <li>
              Iterating on preprocessing, input resolution, and model
              parameters to balance accuracy with real-time constraints
            </li>
            <li>
              Integrating detection outputs with{" "}
              <strong>precision-landing controllers</strong> and
              waypoint-navigation logic
            </li>
            <li>
              Applying <strong>domain randomization</strong> (lighting, noise,
              textures, occlusions) to improve robustness and sim-to-real
              transfer
            </li>
            <li>
              Fusing RGB, depth, and telemetry streams to stabilize predictions
              and increase landing accuracy at <strong>4–5 m</strong>
            </li>
          </ul>
        </div>

        <div className="resume-entry">
          <div className="resume-entry-head">
            <a
              href="https://ses.eng.mcmaster.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-entry-org"
            >
              Website Developer <ArrowUpRight size={11} />
            </a>
            <span className="resume-entry-date">Jul 2025 – Present</span>
          </div>
          <div className="resume-entry-role">
            <span className="resume-entry-title">
              McMaster Software Engineering Society
            </span>
            <span className="resume-entry-location">Hamilton, ON</span>
          </div>
          <ul className="resume-bullets">
            <li>
              Build the <strong>SES website</strong> using{" "}
              <strong>Astro + TypeScript</strong>, improving navigation and
              discoverability for <strong>500+ students</strong>
            </li>
            <li>
              Develop features (e.g., merch listings) via PRs and reviews,
              improving delivery speed by <strong>30%</strong>
            </li>
            <li>
              Structure reusable components and documentation to reduce feature
              development time by <strong>25%</strong>
            </li>
          </ul>
        </div>

        <div className="resume-entry">
          <div className="resume-entry-head">
            <a
              href="https://www.mahadhssn.com/logbook/sclerocare"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-entry-org"
            >
              App Developer <ArrowUpRight size={11} />
            </a>
            <span className="resume-entry-date">Jan 2025 – Present</span>
          </div>
          <div className="resume-entry-role">
            <span className="resume-entry-title">McMaster iBioMed Society</span>
            <span className="resume-entry-location">Remote</span>
          </div>
          <ul className="resume-bullets">
            <li>
              Develop a <strong>React Native</strong> + <strong>Firebase</strong>{" "}
              app centralizing mental, physical, and financial support
              resources for patients
            </li>
            <li>
              Implement end-to-end <strong>encryption</strong>, a secure medical
              resume section, and protected data storage
            </li>
            <li>
              Design an accessible, privacy-first UX for secure and seamless
              patient interaction
            </li>
          </ul>
        </div>

        <div className="resume-entry">
          <div className="resume-entry-head">
            <a
              href="https://www.macrocketry.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-entry-org"
            >
              Controls Subteam Member <ArrowUpRight size={11} />
            </a>
            <span className="resume-entry-date">Sep 2025 – May 2026</span>
          </div>
          <div className="resume-entry-role">
            <span className="resume-entry-title">McMaster Rocketry</span>
            <span className="resume-entry-location">Hamilton, ON</span>
          </div>
          <ul className="resume-bullets">
            <li>
              Built <strong>MATLAB/Simulink</strong> simulations of flight
              dynamics and sensor behavior to test control loops
            </li>
            <li>
              Implemented <strong>C++ firmware</strong> for IMU filtering,
              telemetry ingestion, and actuator response on flight hardware
            </li>
            <li>
              Developed a <strong>TypeScript</strong> dashboard to visualize
              real-time strain-gauge data and validate loads against
              simulations
            </li>
            <li>
              Built tools to <strong>view, record, and trim</strong> telemetry
              logs; maintained a modular codebase for repeatable workflows
            </li>
          </ul>
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="resume-section">
        <h3 className="resume-section-title">Projects</h3>

        <div className="resume-entry">
          <div className="resume-entry-head">
            <div className="resume-entry-org">
              <a
                href="https://natural-disaster-map.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                PrepPal <ArrowUpRight size={11} />
              </a>
              <span className="resume-proj-stack">
                TypeScript (Next.js/React), GCP Vision, OpenAI
              </span>
            </div>
            <span className="resume-entry-date resume-award">
              3rd · MacEngComp 25'
            </span>
          </div>
          <ul className="resume-bullets">
            <li>
              Developed an <strong>AI-powered</strong> disaster-readiness
              platform using <strong>Next.js + GCP Vision</strong> with{" "}
              <strong>&lt;2s</strong> image detection
            </li>
            <li>
              Designed a modular detection pipeline{" "}
              <strong>(localization + OCR + label matching)</strong> improving
              reliability by <strong>40%</strong>
            </li>
            <li>
              Integrated <strong>global hazard data</strong> (USGS/NOAA/NASA)
              enabling <strong>instant (&lt;1s)</strong> risk lookups and threat
              analysis
            </li>
            <li>
              Handled noisy, real-world image inputs by combining model
              predictions with rule-based validation for safer outputs
            </li>
          </ul>
        </div>

        <div className="resume-entry">
          <div className="resume-entry-head">
            <div className="resume-entry-org">
              <a
                href="https://github.com/mahadhsn/MacEngComp24"
                target="_blank"
                rel="noopener noreferrer"
              >
                SecureVault <ArrowUpRight size={11} />
              </a>
              <span className="resume-proj-stack">
                Python (Flask/OpenCV/Cryptography), SQL
              </span>
            </div>
            <span className="resume-entry-date resume-award">
              2nd · MacEngComp 24'
            </span>
          </div>
          <ul className="resume-bullets">
            <li>
              Designed a system combining <strong>facial recognition</strong>,{" "}
              <strong>password manager</strong>, and{" "}
              <strong>file encryption</strong> to enhance data protection
            </li>
            <li>
              Leveraged Python and SQL to develop a solution within a{" "}
              <strong>7-hour coding sprint</strong>, securing{" "}
              <strong>2nd place</strong> among 30+ teams
            </li>
            <li>
              Focused on secure handling of biometric data and encrypted storage
              under strict time constraints
            </li>
          </ul>
        </div>

        <div className="resume-entry">
          <div className="resume-entry-head">
            <div className="resume-entry-org">
              <a
                href="https://digit-recognizer-web.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Digit Recognizer AI <ArrowUpRight size={11} />
              </a>
              <span className="resume-proj-stack">
                TypeScript (React), Python (TensorFlow)
              </span>
            </div>
          </div>
          <ul className="resume-bullets">
            <li>
              Designed an <strong>8-layer CNN</strong> achieving{" "}
              <strong>99.3%</strong> accuracy on MNIST using{" "}
              <strong>60,000</strong> training and <strong>10,000</strong> test
              images
            </li>
            <li>
              Utilized <strong>Matplotlib</strong> to visualize model
              predictions with confidence levels for each digit class,
              including probabilities
            </li>
            <li>
              Integrated <strong>React</strong> & <strong>TailwindCSS</strong>{" "}
              to visually display <strong>live</strong> bar chart predictions
              for drawn digits
            </li>
            <li>
              Experimented with network depth and pooling strategies to study
              their impact on convergence and generalization
            </li>
            <li>
              Used <strong>data augmentation</strong> (shifts, rotations,
              noise) to test model robustness under domain variation
            </li>
          </ul>
        </div>

        <div className="resume-entry">
          <div className="resume-entry-head">
            <div className="resume-entry-org">
              <a
                href="https://github.com/mahadhsn/C-View"
                target="_blank"
                rel="noopener noreferrer"
              >
                C-View <ArrowUpRight size={11} />
              </a>
              <span className="resume-proj-stack">C, Bash, Git</span>
            </div>
          </div>
          <ul className="resume-bullets">
            <li>
              Developed a <strong>C-based image editor</strong> to apply filters
              like <strong>grayscale</strong>, <strong>reflection</strong>,{" "}
              <strong>rotation</strong>, <strong>edge detection</strong>, and{" "}
              <strong>blur</strong>
            </li>
            <li>
              Designed to process images up to <strong>30%</strong> faster than
              comparable tools with reduced memory use
            </li>
          </ul>
        </div>
      </section>
    </div>
  </>
);

export default Resume;
