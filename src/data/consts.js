// ── Greetings ─────────────────────────────────────────────────
export const GREETINGS = [
  { text: "Hey", flag: null },
  { text: "Hola", flag: "🇪🇸" },
  { text: "Bonjour", flag: "🇫🇷" },
  { text: "Merhaba", flag: "🇹🇷" },
  { text: "Hallo", flag: "🇩🇪" },
  { text: "Ciao", flag: "🇮🇹" },
  { text: "Olá", flag: "🇧🇷" },
  { text: "नमस्ते", flag: "🇮🇳" },
  { text: "سلام", flag: "🇵🇰" },
  { text: "안녕하세요", flag: "🇰🇷" },
];

// ── Nav ──────────────────────────────────────────────────────
export const NAV_ITEMS = [
  { id: "home", label: "Home", path: "/", idx: "01" },
  { id: "about", label: "About", path: "/about", idx: "02" },
  { id: "experience", label: "Experience", path: "/experience", idx: "03" },
  { id: "projects", label: "Projects", path: "/projects", idx: "04" },
  { id: "logbook", label: "Logbook", path: "/logbook", idx: "05" },
  { id: "resume", label: "Resume", path: "/resume", idx: "06" },
  { id: "contact", label: "Contact", path: "/contact", idx: "07" },
];

// ── Projects ─────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: "preppal",
    title: "PrepPal",
    desc: "Disaster awareness & emergency-support web app. Helps people make informed decisions before and during natural disasters.",
    tags: ["Web"],
    year: "2025",
    featured: true,
    award: "MacEngComp '25",
    url: "https://natural-disaster-map.vercel.app",
    role: "Full-stack · Hackathon team",
    tech: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "GCP Vision",
      "OpenAI",
    ],
    image: "/images/projects/preppal.png",
  },
  {
    id: "sclerocare",
    title: "ScleroCare",
    desc: "Mobile app for patients in partnership with Tech4Good & Scleroderma Canada.",
    tags: ["Mobile"],
    year: "2025",
    url: "/logbook/sclerocare",
    role: "Mobile developer · Team of 4",
    tech: ["React Native", "Firebase", "Expo"],
    image: "/images/projects/sclero-home-cropped.png",
  },
  {
    id: "drone",
    title: "Drone Rescue Mission",
    desc: "Drone controller using states and strategies to rescue a drone.",
    tags: ["Systems"],
    year: "2025",
    url: "https://github.com/mahadhsn/A2-Recue-Mission-T11",
    role: "Solo project",
    tech: ["Java", "State Pattern", "Strategy Pattern"],
    image: "/images/projects/drone.png",
  },
  {
    id: "digit",
    title: "Digit Recognizer",
    desc: "Handwritten digit recognition with 99.3% accuracy using TensorFlow.",
    tags: ["ML", "Web"],
    year: "2024",
    url: "https://digit-recognizer-web.vercel.app",
    role: "Solo project",
    tech: [
      "Python",
      "TensorFlow",
      "Matplotlib",
      "TypeScript",
      "React",
      "Tailwind CSS",
    ],
    image: "/images/projects/digit-rec.png",
  },
  {
    id: "cview",
    title: "C-View",
    desc: "Lightweight command-line image processor written in C.",
    tags: ["Systems"],
    year: "2024",
    url: "https://github.com/mahadhsn/C-View",
    role: "Solo project",
    tech: ["C"],
    image: "/images/projects/cview.png",
  },
  {
    id: "ttt",
    title: "Tic-Tac-Toe AI",
    desc: "Play Tic-Tac-Toe against an unbeatable AI using the minimax algorithm.",
    tags: ["Systems", "ML"],
    year: "2024",
    url: "https://github.com/mahadhsn/Java-Tic-Tac-Toe-AI",
    role: "Solo project",
    tech: ["Java", "Minimax"],
    image: "/images/projects/TicTacToe.png",
  },
  {
    id: "securevault",
    title: "SecureVault",
    desc: "Cybersecurity system: face recognition, file encryption, and more.",
    tags: ["Systems", "ML"],
    year: "2024",
    award: "MacEngComp '24",
    url: "https://github.com/mahadhsn/MacEngComp24",
    role: "Full-stack · Hackathon team",
    tech: ["Python", "OpenCV", "Flask", "SQL", "Cryptography"],
    image: "/images/logs/internship/tech.PNG",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    desc: "This site, built with React, Vite, and Tailwind CSS.",
    tags: ["Web"],
    year: "2024",
    url: "https://github.com/mahadhsn/Portfolio",
    role: "Solo project",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Vercel"],
    image: "/landing.png",
  },
  {
    id: "convertnums",
    title: "Convert Numbers",
    desc: "Convert numbers between number systems in C.",
    tags: ["Systems"],
    year: "2023",
    url: "https://github.com/mahadhsn/Convert-Number-Systems",
    role: "Solo project",
    tech: ["C"],
    image: "/images/projects/convert.png",
  },
  {
    id: "babynames",
    title: "US Baby Names",
    desc: "Bash script to list the rankings of baby names in the US.",
    tags: ["Systems"],
    year: "2023",
    url: "https://github.com/mahadhsn/US-Baby-Names",
    role: "Solo project",
    tech: ["Bash"],
    image: "/images/projects/babynames.png",
  },
];

// ── Trips (multi-day photo shoots, one page per day) ─────────
export const TRIPS = [
  {
    id: "campbellford",
    title: "Campbellford",
    slug: "campbellford-11-10-26",
    location: "Campbellford, ON",
    dateRange: "OCT 11-12, 2026",
    camera: "Canon EOS Rebel T2i",
    path: "/logbook/campbellford-11-10-26",
    days: [
      {
        date: "2026-10-11",
        dayNumber: 1,
        place: "Campbellford, ON",
        globKey: "campbellfordDay1",
      },
      {
        date: "2026-10-12",
        dayNumber: 2,
        place: "Campbellford, ON",
        globKey: "campbellfordDay2",
      },
    ],
  },
  {
    id: "banff",
    title: "Banff",
    slug: "banff-27-6-26",
    location: "Banff, AB",
    dateRange: "JUN 27 - JUL 4, 2026",
    camera: "Fujifilm X-T50 + Canon EOS Rebel T2i",
    path: "/logbook/banff-27-6-26",
    days: [
      {
        date: "2026-06-27",
        dayNumber: 1,
        place: "Golden, BC",
        globKey: "banffDay1",
      },
      {
        date: "2026-06-28",
        dayNumber: 2,
        place: "Lake Louise, AB",
        globKey: "banffDay2",
      },
      {
        date: "2026-06-29",
        dayNumber: 3,
        place: "Emerald Lake & Golden, BC",
        globKey: "banffDay3",
      },
      {
        date: "2026-07-01",
        dayNumber: 4,
        place: "Icefields Parkway to Jasper, AB",
        globKey: "banffDay5",
      },
      {
        date: "2026-07-02",
        dayNumber: 5,
        place: "Banff, AB",
        globKey: "banffDay6",
      },
      {
        date: "2026-07-03",
        dayNumber: 6,
        place: "Golden, BC (Kicking Horse Resort)",
        globKey: "banffDay7",
      },
    ],
  },
];

// ── Photos ────────────────────────────────────────────────────
export const PHOTOS = [
  {
    id: "bronte26",
    title: "Bronte Creek",
    date: "OCT 4, 2026",
    location: "Oakville, ON",
    camera: "Canon EOS Rebel T2i",
    path: "/logbook/bronte-4-10-26",
    globKey: "bronte26",
  },
  {
    id: "restoule",
    title: "Restoule",
    date: "MAY 15-16, 2026",
    location: "Restoule, ON",
    camera: "Canon R50",
    path: "/logbook/restoule-16-5-26",
    globKey: "restoule",
  },

  {
    id: "orchard",
    title: "Orchard",
    date: "MAY 11, 2026",
    location: "Orchard, ON",
    camera: "Canon R50",
    path: "/logbook/orchard-11-5-26",
    globKey: "orchard",
  },
  {
    id: "mdl",
    title: "MDL Designathon",
    date: "JAN 17-18, 2026",
    location: "Hamilton, ON",
    camera: "Canon R50",
    path: "/logbook/mdl-18-1-26",
    globKey: "mdl",
  },
  {
    id: "stirling",
    title: "Stirling",
    date: "OCT 11, 2025",
    location: "Stirling, ON",
    camera: "Canon R50",
    path: "/logbook/stirling-11-10-25",
    globKey: "stirling",
  },
  {
    id: "bronte",
    title: "Bronte Creek",
    date: "AUG 31, 2025",
    location: "Oakville, ON",
    camera: "Canon R50",
    path: "/logbook/bronte-31-8-25",
    globKey: "bronte",
  },
  {
    id: "toronto",
    title: "Toronto",
    date: "AUG 27, 2025",
    location: "Toronto, ON",
    camera: "Canon R50",
    path: "/logbook/toronto-27-8-25",
    globKey: "toronto",
  },
  {
    id: "killbear",
    title: "Killbear",
    date: "AUG 03, 2025",
    location: "Nobel, ON",
    camera: "Canon R50",
    path: "/logbook/killbear-3-8-25",
    globKey: "killbear",
  },
  {
    id: "belfountain",
    title: "Belfountain",
    date: "JUN 30, 2025",
    location: "Caledon, ON",
    camera: "Canon R50",
    path: "/logbook/belfountain-30-6-25",
    globKey: "belfountain",
  },
];

// Start of a label like "OCT 4, 2026" or "JUN 27 - JUL 4, 2026", for sorting.
const MONTHS = "JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC".split(" ");
const startOf = (label) => {
  const [, month, day, year] = label.match(/^([A-Z]{3}) (\d+).*?(\d{4})$/);
  return Date.UTC(year, MONTHS.indexOf(month), day);
};

// Photography section on the logbook: trips and single-day rolls interleaved,
// newest first. Used for cross-roll prev/next nav on detail pages.
export const PHOTO_ROLLS = [
  ...TRIPS.map((t) => ({
    kind: "trip",
    id: t.id,
    title: t.title,
    date: t.dateRange,
    location: t.location,
    camera: t.camera,
    path: t.path,
  })),
  ...PHOTOS.map((p) => ({ kind: "photo", ...p })),
].sort((a, b) => startOf(b.date) - startOf(a.date));

// ── Experience ────────────────────────────────────────────────
// kind: "work" (internships) | "team" (clubs, societies, side roles) | "volunteer"
export const EXPERIENCE = [
  {
    id: "amd",
    kind: "work",
    org: "AMD",
    role: "Software Test Automation Engineer Intern",
    location: "Markham, ON",
    start: "May 2026",
    end: "Present",
    summary:
      "Building autonomous agent pipelines that write and validate hardware tests, and the knowledge layer that lets agents work across the org.",
    highlights: [
      "Built the Test Content Agent: requirements to validated tests on real hardware with no human in the loop, cutting generation from ~1 week to hours (~99%).",
      "Built an MCP server so agents can write, run, and debug tests through Jenkins, with log compression saving 3 hours per run.",
      "Designed a self-heal loop with rollback that catches ~91% of false passes, then containerized it for an org-wide Kubernetes rollout.",
      "Building Atlas, a mono-repo that turns engineering knowledge into structured, agent-readable form.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "MCP",
      "Jenkins",
      "Docker",
      "Kubernetes",
    ],
    link: "https://www.amd.com",
  },
  {
    id: "td",
    kind: "work",
    org: "TD Bank",
    role: "Software Engineer Intern",
    location: "Toronto, ON",
    start: "May 2025",
    end: "Aug 2025",
    summary:
      "Backend work on a high-volume microservice, focused on throughput, reliability, and faster deployments.",
    highlights: [
      "Developed FRAM, a Java/Spring microservice on Azure using Kafka for asynchronous processing.",
      "Moved API client processing to non-blocking, concurrent execution, saving $1M/year in infrastructure.",
      "Cut deployment time 20% across 7 microservices through GitHub Actions improvements.",
    ],
    stack: ["Java", "Spring", "Kafka", "Azure", "Terraform", "GitHub Actions"],
    link: "https://www.linkedin.com/posts/mahad-hassan_as-my-software-engineering-internship-with-activity-7363738067230195712-W4o_/",
  },
  {
    id: "rlpc",
    kind: "work",
    org: "Ras Laffan Power Company (RLPC)",
    role: "Engineering Intern",
    location: "",
    start: "Jun 2024",
    end: "Aug 2024",
    summary:
      "Summer internship focused on OT cybersecurity and DCS at a gas and steam turbine power and water desalination plant.",
    highlights: [
      "Learned SIEM, network intrusion detection, and vulnerability assessment tooling, and ran anti-virus definition updates.",
      "Saw Secure by Design in practice: application and device control, whitelisting, and the CIA triad.",
      "Picked up DCS basics: control logic, graphics, and controller, I/O, and HMI configuration.",
    ],
    stack: ["OT Security", "SIEM", "DCS"],
  },
  {
    id: "drones",
    kind: "team",
    org: "McMaster Aerial Robotics and Drones Club",
    role: "Machine Learning Engineer",
    location: "Hamilton, ON",
    start: "Oct 2025",
    end: "Present",
    summary:
      "Real-time vision for autonomous landing, running on a Jetson Nano.",
    highlights: [
      "Built a TensorFlow + classical CV pipeline with sub-50ms inference on CUDA.",
      "Used domain randomization and RGB/depth/telemetry fusion to improve sim-to-real landing accuracy at 4-5 m.",
    ],
    stack: ["TensorFlow", "OpenCV", "Jetson Nano", "CUDA"],
    link: "https://www.macdrones.ca",
  },
  {
    id: "rocketry",
    kind: "team",
    org: "McMaster Rocketry",
    role: "Controls Subteam Member",
    location: "Hamilton, ON",
    start: "Sep 2025",
    end: "May 2026",
    summary: "Simulation, firmware, and tooling for flight control.",
    highlights: [
      "Simulated flight dynamics and sensors in MATLAB/Simulink to test control loops.",
      "Wrote C++ firmware for IMU filtering and telemetry, plus a TypeScript dashboard for live strain-gauge data.",
    ],
    stack: ["C++", "MATLAB", "Simulink", "TypeScript"],
    link: "https://www.macrocketry.ca",
  },
  {
    id: "ses",
    kind: "team",
    org: "McMaster Software Engineering Society",
    role: "VP of Tech",
    location: "Hamilton, ON",
    start: "Jul 2025",
    end: "Present",
    summary:
      "Managing tech for the society, including the SES website used by 500+ students.",
    highlights: [
      "Build features on Astro + TypeScript through PRs and reviews, improving delivery speed 30%.",
      "Structured reusable components and docs that cut feature development time 25%.",
    ],
    stack: ["Astro", "TypeScript"],
    link: "https://ses.eng.mcmaster.ca",
  },
  {
    id: "sclerocare",
    kind: "team",
    org: "ScleroCare / McMaster iBioMed Society",
    role: "App Developer",
    location: "Remote",
    start: "Jan 2025",
    end: "Present",
    summary:
      "A privacy-first mobile app centralizing support resources for scleroderma patients.",
    highlights: [
      "Develop the React Native + Firebase app with end-to-end encryption and a secure medical resume.",
    ],
    stack: ["React Native", "Firebase"],
    link: "/logbook/sclerocare",
  },
  {
    id: "deltahacks",
    kind: "team",
    org: "DeltaHacks",
    role: "Attendee Relations Executive",
    location: "Hamilton, ON",
    start: "Aug 2024",
    end: "Apr 2026",
    summary:
      "Managed attendee relations for one of Canada's largest hackathons.",
    highlights: [
      "Reviewed 1,700+ applications while improving the participant experience.",
    ],
    stack: [],
    link: "https://www.deltahacks.com",
  },
  {
    id: "voices",
    kind: "team",
    org: "VoicesatMac",
    role: "VP of Operations",
    location: "Hamilton, ON",
    start: "Oct 2024",
    end: "Sep 2025",
    summary:
      "Led operations and interview logistics, streamlining workflows to improve event efficiency and content output.",
    highlights: [],
    stack: [],
  },
  {
    id: "psa",
    kind: "team",
    org: "McMaster Pakistani Students' Association",
    role: "VP of Events",
    location: "Hamilton, ON",
    start: "Nov 2024",
    end: "Apr 2025",
    summary:
      "Spearheaded large-scale cultural events that boosted engagement and helped surpass $6,000 raised for charity.",
    highlights: [
      "Started as Events Associate in Jul 2024, organizing high-attendance cultural events before moving into the VP role.",
    ],
    stack: [],
  },
  {
    id: "campquality",
    kind: "volunteer",
    org: "Camp Quality Canada",
    role: "Companion",
    location: "",
    start: "Aug 2024",
    end: "",
    summary:
      "Supported children with cancer and neurological disorders with safe, inclusive, and engaging daily care.",
    highlights: [],
    stack: [],
    link: "https://www.campquality.org",
  },
  {
    id: "hammerhacks",
    kind: "volunteer",
    org: "HammerHacks",
    role: "Mentor",
    location: "Hamilton, ON",
    start: "Nov 2024",
    end: "",
    summary:
      "Mentored a high-school team at Hamilton's first hackathon, which helped raise $12,000 for charity.",
    highlights: [],
    stack: [],
    link: "https://hammerhacks.ca",
  },
];

// ── About goals ───────────────────────────────────────────────
// Each category renders as its own card and cycles through its items.
export const GOALS = [
  {
    id: "short-term",
    label: "Short-term",
    items: [
      { emoji: "🎹", text: "Learn piano" },
      { emoji: "♟️", text: "Get past 1600 ELO in chess" },
      { emoji: "💻", text: "Attend more hackathons" },
      { emoji: "🏄", text: "Learn to surf" },
    ],
  },
  {
    id: "long-term",
    label: "Long-term",
    items: [
      { emoji: "🧑‍💻", text: "Start a company" },
      { emoji: "🌍", text: "Visit every continent" },
      { emoji: "🗣️", text: "Learn more languages" },
      { emoji: "🚀", text: "Help advance human civilization" },
    ],
  },
];

// ── Home snapshot ─────────────────────────────────────────────
export const HERO_ROLE = "Software Test Automation Engineer Intern @ AMD";
export const HERO_ROLE_PREV = "Previously Software Engineer Intern @ TD Bank";
export const HERO_DEGREE = "Software Engineering IV @ McMaster University";

export const SNAPSHOT = [
  {
    label: "Now",
    value: "Software Test Automation Engineer Intern @ AMD",
    detail: "Agentic pipelines that write and validate hardware tests",
  },
  {
    label: "Before",
    value: "Software Engineer Intern @ TD Bank",
    detail: "Kafka microservices, $1M/year in infrastructure savings",
  },
  {
    label: "Leading",
    value: "VP of Tech @ McMaster Software Engineering Society",
    detail:
      "Managing tech for the society and its website, used by 500+ students",
  },
  {
    label: "Studying",
    value: "Software Engineering IV @ McMaster",
    detail: "Co-op, expected May 2028",
  },
];

export const NOW_ITEMS = [
  {
    label: "Shipping",
    value: "ScleroCare to the App Store",
    detail: "A privacy-first support app for scleroderma patients",
  },
  {
    label: "Exploring",
    value: "ML and computer vision",
    detail: "Real-time vision on a Jetson Nano with McMaster Drones",
  },
  {
    label: "Learning",
    value: "Piano and surfing",
    detail: "And chasing 1600 ELO in chess",
  },
  {
    label: "Traveling",
    value: "More, with a camera",
    detail: "Photos and notes in the logbook",
  },
];

// ── Home stats ────────────────────────────────────────────────
export const STATS = [
  { num: "$1M", plus: false, label: "Yearly cost savings @ TD" },
  { num: "~99%", plus: false, label: "Faster test generation @ AMD" },
  { num: "2", plus: false, label: "Hackathon wins" },
  { num: "3", plus: false, label: "Internships" },
];
