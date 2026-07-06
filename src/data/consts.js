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
  { id: "projects", label: "Projects", path: "/projects", idx: "03" },
  { id: "logbook", label: "Logbook", path: "/logbook", idx: "04" },
  { id: "resume", label: "Resume", path: "/resume", idx: "05" },
  { id: "contact", label: "Contact", path: "/contact", idx: "06" },
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
    id: "banff",
    title: "Banff",
    slug: "banff-27-6-26",
    location: "Banff, AB",
    dateRange: "JUN 27 - JUL 4, 2026",
    camera: "Fujifilm X-T50 + Canon EOS Rebel T2i",
    path: "/logbook/banff-27-6-26",
    days: [
      { date: "2026-06-27", dayNumber: 1, place: "Golden, BC", globKey: "banffDay1" },
      { date: "2026-06-28", dayNumber: 2, place: "Lake Louise, AB", globKey: "banffDay2" },
      { date: "2026-06-29", dayNumber: 3, place: "Emerald Lake & Golden, BC", globKey: "banffDay3" },
      { date: "2026-07-01", dayNumber: 4, place: "Icefields Parkway to Jasper, AB", globKey: "banffDay5" },
      { date: "2026-07-02", dayNumber: 5, place: "Banff, AB", globKey: "banffDay6" },
      { date: "2026-07-03", dayNumber: 6, place: "Golden, BC (Kicking Horse Resort)", globKey: "banffDay7" },
    ],
  },
];

// ── Photos ────────────────────────────────────────────────────
export const PHOTOS = [
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
    location: "Stirling, Scotland",
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

// Photography section on the logbook: trips (multi-day, newest first) ahead
// of single-day rolls. Used for cross-roll prev/next nav on detail pages.
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
];

// ── About tabs ────────────────────────────────────────────────
export const ABOUT_SECTIONS = [
  { id: "intro", label: "Intro" },
  { id: "now", label: "Now" },
  { id: "before", label: "Before" },
  { id: "wins", label: "Wins" },
];

// ── Home stats ────────────────────────────────────────────────
export const STATS = [
  { num: "10", plus: true, label: "Projects" },
  { num: "20", plus: true, label: "Technologies" },
  { num: "2", plus: false, label: "Hackathon Wins" },
  { num: "3", plus: false, label: "Internships" },
];
