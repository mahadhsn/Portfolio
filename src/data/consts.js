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
    tag: "Web",
    year: "2025",
    featured: true,
    award: "MacEngComp '25",
    url: "https://natural-disaster-map.vercel.app",
  },
  {
    id: "sclerocare",
    title: "ScleroCare",
    desc: "Mobile app for patients in partnership with Tech4Good & Scleroderma Canada.",
    tag: "Mobile",
    year: "2025",
    url: "/logbook/sclerocare",
  },
  {
    id: "drone",
    title: "Drone Rescue Mission",
    desc: "Drone controller using states and strategies to rescue a drone.",
    tag: "Java",
    year: "2025",
    url: "https://github.com/mahadhsn/A2-Recue-Mission-T11",
  },
  {
    id: "digit",
    title: "Digit Recognizer",
    desc: "Handwritten digit recognition with 99.3% accuracy using TensorFlow.",
    tag: "ML",
    year: "2024",
    url: "https://digit-recognizer-web.vercel.app",
  },
  {
    id: "cview",
    title: "C-View",
    desc: "Lightweight command-line image processor written in C.",
    tag: "Systems",
    year: "2024",
    url: "https://github.com/mahadhsn/C-View",
  },
  {
    id: "ttt",
    title: "Tic-Tac-Toe AI",
    desc: "Play Tic-Tac-Toe against an unbeatable AI using the minimax algorithm.",
    tag: "Java",
    year: "2024",
    url: "https://github.com/mahadhsn/Java-Tic-Tac-Toe-AI",
  },
  {
    id: "securevault",
    title: "SecureVault",
    desc: "Cybersecurity system: face recognition, file encryption, and more.",
    tag: "Security",
    year: "2024",
    award: "MacEngComp '24",
    url: "https://github.com/mahadhsn/MacEngComp24",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    desc: "This site, built with React, Vite, and Tailwind CSS.",
    tag: "Web",
    year: "2024",
    url: "https://github.com/mahadhsn/Portfolio",
  },
  {
    id: "convertnums",
    title: "Convert Numbers",
    desc: "Convert numbers between number systems in C.",
    tag: "Systems",
    year: "2023",
    url: "https://github.com/mahadhsn/Convert-Number-Systems",
  },
  {
    id: "babynames",
    title: "US Baby Names",
    desc: "Bash script to list the rankings of baby names in the US.",
    tag: "Bash",
    year: "2023",
    url: "https://github.com/mahadhsn/US-Baby-Names",
  },
];

// ── Logs (writing) ────────────────────────────────────────────
export const LOGS = [
  {
    id: "td",
    title: "My time with TD",
    date: "FEB 02, 2026",
    read: "3 min",
    tag: "work",
    path: "/logbook/td",
  },
  {
    id: "sclerocare",
    title: "ScleroCare: An App for Patients",
    date: "JUL 24, 2025",
    read: "8 min",
    tag: "build",
    path: "/logbook/sclerocare",
  },
  {
    id: "internship",
    title: "How to Land an Internship 101",
    date: "JUL 07, 2025",
    read: "12 min",
    tag: "career",
    path: "/logbook/internship",
  },
  {
    id: "intro",
    title: "Intro: why I started writing",
    date: "JUN 21, 2025",
    read: "4 min",
    tag: "life",
    path: "/logbook/intro",
  },
];

// ── Photos ────────────────────────────────────────────────────
export const PHOTOS = [
  {
    id: "mdl",
    title: "MDL Designathon",
    date: "JAN 17–18, 2026",
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
  { num: "5", plus: true, label: "Technologies" },
  { num: "2", plus: false, label: "Hackathon Wins" },
  { num: "3", plus: false, label: "Log Entries" },
];
