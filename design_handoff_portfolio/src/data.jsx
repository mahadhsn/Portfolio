/* Shared data for the prototype */

const NAV_ITEMS = [
  { id: 'home',     label: 'Home',     path: '/',         idx: '01' },
  { id: 'about',    label: 'About',    path: '/about',    idx: '02' },
  { id: 'projects', label: 'Projects', path: '/projects', idx: '03' },
  { id: 'logbook',  label: 'Logbook',  path: '/logbook',  idx: '04' },
  { id: 'resume',   label: 'Resume',   path: '/resume',   idx: '05' },
  { id: 'contact',  label: 'Contact',  path: '/contact',  idx: '06' },
];

const PROJECTS = [
  { id: 'preppal',   title: 'PrepPal',           desc: 'Disaster awareness + emergency-support web app for natural disasters.', tag: 'Web / AI', year: '2025', featured: true, award: "MacEngComp '25" },
  { id: 'sclerocare',title: 'ScleroCare',        desc: 'Patient-facing app with Tech4Good & Scleroderma Canada. Coming to the App Store.', tag: 'Mobile', year: '2025' },
  { id: 'drone',     title: 'Drone Rescue',      desc: 'State + strategy pattern drone controller for rescue missions.', tag: 'Java', year: '2025' },
  { id: 'digit',     title: 'Digit Recognizer',  desc: '8-layer CNN recognising hand-drawn digits at 99.3% accuracy.', tag: 'Python / ML', year: '2024' },
  { id: 'cview',     title: 'C-View',            desc: 'Lightweight command-line image processor written in C.', tag: 'C', year: '2024' },
  { id: 'tictactoe', title: 'Tic-Tac-Toe AI',    desc: 'Minimax-backed adversary for classic Tic-Tac-Toe.', tag: 'Java', year: '2024' },
  { id: 'securevault',title:'SecureVault',       desc: 'Face recognition + file encryption cybersecurity system.', tag: 'Security', year: '2024', award: "MacEngComp '24" },
  { id: 'portfolio', title: 'Portfolio',         desc: 'This site — built with React + Tailwind; about me and my work.', tag: 'Web', year: '2024' },
  { id: 'numsys',    title: 'Convert Numbers',   desc: 'Convert values between number systems, written in C.', tag: 'C', year: '2023' },
  { id: 'babynames', title: 'US Baby Names',     desc: 'Bash script ranking baby names in the US.', tag: 'Bash', year: '2023' },
];

const LOGS = [
  { id: 'sclerocare',  title: 'ScleroCare: An App for Patients', date: 'July 24, 2025', read: '8 min', tag: 'build' },
  { id: 'internship',  title: 'How to Land an Internship 101',   date: 'July 7, 2025',  read: '12 min', tag: 'career' },
  { id: 'intro',       title: 'Intro — why I started writing',   date: 'June 21, 2025', read: '4 min',  tag: 'life' },
];

const PHOTOS = [
  { id: 'mdl',        title: 'MDL Designathon', date: 'Jan 17–18, 2026', location: 'Hamilton, ON' },
  { id: 'stirling',   title: 'Stirling',        date: 'Oct 11, 2025',    location: 'Stirling, Scotland' },
  { id: 'bronte',     title: 'Bronte Creek',    date: 'Aug 31, 2025',    location: 'Oakville, ON' },
  { id: 'toronto',    title: 'Toronto',         date: 'Aug 27, 2025',    location: 'Toronto, ON' },
  { id: 'killbear',   title: 'Killbear',        date: 'Aug 3, 2025',     location: 'Nobel, ON' },
  { id: 'belfountain',title: 'Belfountain',     date: 'Jun 30, 2025',    location: 'Caledon, ON' },
];

const ABOUT_SECTIONS = [
  { id: 'intro',  label: 'Intro'  },
  { id: 'now',    label: 'Now'    },
  { id: 'before', label: 'Before' },
  { id: 'wins',   label: 'Wins'   },
];

Object.assign(window, { NAV_ITEMS, PROJECTS, LOGS, PHOTOS, ABOUT_SECTIONS });
