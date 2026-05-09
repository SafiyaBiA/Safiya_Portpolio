/* ═══════════════════════════════════════════════════
   SAFIYA BI A — Portfolio Script
   All interactions: theme, nav, modals, galleries
   ═══════════════════════════════════════════════════
   HOW TO UPDATE THIS PORTFOLIO
   ─────────────────────────────
   1. Projects:     Edit the PROJECTS object below
   2. Experience:   Edit the EXPERIENCE object below
   3. Certificates: Edit the CERTIFICATES object below
   4. Achievements: Edit the ACHIEVEMENTS object below
   
   For each item:
   - screenshots: add paths like 'assets/images/orion-1.jpg'
   - documents:   add { name: '...', url: 'assets/docs/...' }
   ═══════════════════════════════════════════════════ */

'use strict';

// ──────────────────────────────────────────────────
// DATA — Edit this section to update your portfolio
// ──────────────────────────────────────────────────

const PROJECTS = {
  'proj-orion': {
    label: 'Systems Engineering',
    title: 'Orion — Fleet Optimization System',
    subtitle: 'Data-driven routing & fleet operations management',
    award: '2nd Place — PERI CREATECH\'25 National Expo · Finalist Deep Blue Hackathon',
    tech: ['Python', 'Node.js', 'React.js', 'MySQL', 'REST APIs'],
    problem: 'Inefficient delivery routes increased operational costs and fuel consumption. Fleet managers had poor visibility into route performance and real-time traffic conditions.',
    solution: 'Developed a data-driven routing system using real-time traffic and fuel data analytics. Built interactive dashboards for fleet visibility and performance monitoring.',
    impact: 'Improved route efficiency. Awarded 2nd place at PERI CREATECH\'25 national project expo and recognised as a finalist in the Deep Blue Hackathon 2025.',
    screenshots: [
      'assets/projects/orion4.jpeg',
      'assets/projects/Orion1.jpeg',
      'assets/projects/Orion2.jpg',
      'assets/projects/Orion3.png',
      // 'assets/projects/images/orion-2.jpg',
    ],
    documents: [
      { name: 'Project Report',          url: 'assets/docs/Orion-report.pdf' },
        { name: 'Presentation Slides',   url: 'assets/docs/Orion-ppt.pdf' },
        { name: 'Application', url: 'assets/docs/ORION - Pages.pdf' },
      // { name: 'Hackathon Certificate',   url: 'assets/docs/orion-hackathon.pdf' },
      // { name: 'Project Submission',      url: 'assets/docs/orion-submission.pdf' },
    ],
  },
  'proj-phonosec': {
    label: 'Machine Learning · AI',
    title: 'PhonoSec — Speech Emotion Recognition',
    subtitle: 'Real-time voice emotion detection for security applications',
    award: null,
    tech: ['Python', 'TensorFlow', 'Flask', 'Audio Processing', 'ML'],
    problem: 'Detecting user emotion from voice data for security and UX applications. Traditional systems lacked real-time emotional intelligence.',
    solution: 'Built a machine learning model using Python and TensorFlow to analyse voice input and classify emotions in real time using MFCC and spectral feature extraction, deployed via Flask API.',
    impact: 'Demonstrated real-time emotion analysis capability. Developed as part of ATEM Software Solutions internship, enhancing understanding of AI/ML in security.',
    screenshots: [
      'assets/projects/Phonosec2.png',
      'assets/projects/Phonosec3.png',
      'assets/projects/Phonosec5.png',
      'assets/projects/Phonosec6.png',
      'assets/projects/Phonosec7.png',
      'assets/projects/Phonosec-1.png',
    ],
    documents: [
      { name: 'Project Report', url: 'assets/docs/PhonoSec_Abstract.pdf' },
      { name: 'Presentation Slides', url: 'assets/docs/PhonoSec-ppt.pdf' },
    ],
  },
  'proj-scrapzap': {
    label: 'Mobile Development',
    title: 'ScrapZap — E-Waste Management App',
    subtitle: 'Mobile platform connecting users with certified e-waste recyclers',
    award: null,
    tech: ['Flutter', 'Firebase', 'Python', 'Dart', 'Authentication'],
    problem: 'Lack of organised scrap collection and resale platforms. E-waste was being improperly disposed due to no structured user-to-recycler connections.',
    solution: 'Created a cross-platform mobile app (Flutter) for scheduling scrap pickups, managing transactions, and connecting users with verified recyclers with secure Firebase authentication.',
    impact: 'Enabled efficient e-waste management with a focus on secure data handling and user experience. Addressed real environmental challenges with technology.',
    screenshots: [
      'assets/projects/ScrapZap-2.png',
      'assets/projects/ScrapZap-3.png',
      'assets/projects/ScrapZap-1.png',
      'assets/projects/ScrapZap-4.png',
      'assets/projects/ScrapZap-5.png',
    ],
    documents: [
      { name: 'Project Report', url: 'assets/docs/ScrapZap-Report.pdf' },
      { name: 'Research Paper', url: 'assets/docs/ScrapZap-Paper.pdf' },
    ],
  },
  'proj-vibrant': {
    label: 'Backend Development',
    title: 'Vibrant Success — Productivity Platform',
    subtitle: 'Scalable backend for a productivity and finance-tracking application',
    award: '1st Place — Sairam Project Expo 2025',
    tech: ['Node.js', 'MongoDB', 'REST APIs', 'JWT Auth', 'Express.js'],
    problem: 'Users needed a personal finance and productivity tracker that was scalable, secure, and accessible. Daily routines felt scattered and untracked.',
    solution: 'Developed a robust backend with Node.js and MongoDB with REST APIs for tracking spending, setting goals, and providing insights. Implemented JWT authentication and scalable system architecture.',
    impact: 'Practiced real-world system design and API development. Delivered features supporting better financial decision-making.',
    screenshots: [
      'assets/projects/Vibrant-1.JPG',
    ],
    documents: [],
  },
  'proj-phoenix': {
    label: 'Sustainability · Impact',
    title: 'Phoenix Relief — Women\'s Sustainability Product',
    subtitle: 'Innovative product addressing women\'s health and sustainability',
    award: 'Finalist — IEEE YESIST12 International Hackathon (Innovation Challenge, 2025); IDEX MIRA International Hackathon Semi-finalist (2024)',
    tech: ['Product Design', 'Sustainability', 'IEEE YESIST12', 'IDEX MIRA'],
    problem: 'Addressing women\'s health and sustainability challenges around eco-friendly alternatives and waste disposal responsibly.',
    solution: 'Conceptualised and developed a sustainable product solution addressing women\'s health needs with environmental responsibility. Presented at IEEE YESIST12 international hackathon.',
    impact: 'Recognised as a finalist at IEEE YESIST12 International Hackathon (Innovation Challenge, 2025); IDEX MIRA International Hackathon Semi-finalist (2024). Combined social impact with engineering innovation.',
    screenshots: [
      'assets/projects/Phoenix-2.jpg',
      'assets/projects/Phoenix-1.png',
    ],
    documents: [
      { name: 'Project Report', url: 'assets/docs/Phoenix-Report.pdf' },
      { name: 'Project Presentation', url: 'assets/docs/Phoenix-ppt.pdf' },
    ],
  },
};

const EXPERIENCE = {
  'exp-digival': {
    role: 'Cyber Security Analyst Intern',
    company: 'Digival IT Solutions',
    period: 'Jun 2025 – Aug 2025',
    summary: 'Performed web application security testing and participated in Agile security workflows.',
    responsibilities: [
      'Performed web application security testing to identify SQL injection and XSS vulnerabilities using Burp Suite and OWASP ZAP.',
      'Analysed findings, documented risks, and provided improvement recommendations.',
      'Participated in Agile sprint planning, stand-ups, and Scrum ceremonies.',
      'Gained hands-on exposure to real-world application security practices.',
    ],
    screenshots: [
      'assets/projects/digival1.jpeg',
      'assets/projects/digival2.jpeg',
      'assets/projects/digival3.jpeg',
    ],
    documents: [
      { name: 'Internship Certificate', url: 'assets/docs/digival-completion-certificate.pdf' },
      { name: 'Offer Letter', url: 'assets/docs/digival-offer-letter.pdf' },
    ],
  },
  'exp-atem': {
    role: 'Cyber Security Analyst Intern',
    company: 'ATEM Software Solutions',
    period: 'Jun 2025 – Jul 2025',
    summary: 'Contributed to an AI-based speech emotion recognition system for security applications.',
    responsibilities: [
      'Developed an AI-based speech emotion recognition system for security use cases.',
      'Worked on integrating ML models into practical security application workflows.',
      'Improved analytical and problem-solving skills through project delivery.',
    ],
    screenshots: [
      'assets/projects/Phonosec2.png',
      'assets/projects/Phonosec3.png',
      'assets/projects/Phonosec5.png',
      'assets/projects/Phonosec6.png',
      'assets/projects/Phonosec7.png',
      'assets/projects/Phonosec-1.png',
    ],
    documents: [
      { name: 'Internship Certificate', url: 'assets/docs/atem-certificate.pdf' },
    ],
  },
  'exp-maestro': {
    role: 'React Native Developer Intern',
    company: 'Maestrominds',
    period: 'Jan 2025',
    summary: 'Developed cross-platform mobile applications using React Native.',
    responsibilities: [
      'Developed mobile applications for Android and iOS platforms.',
      'Built reusable UI components and user-centric features.',
      'Worked with client requirements to deliver production-ready features.',
    ],
    screenshots: [
      'assets/projects/maestro1.png',
      'assets/projects/maestro2.jpeg',
      'assets/projects/maestro3.jpeg',
      'assets/projects/maestro4.jpeg',
      'assets/projects/maestro5.jpeg',
    ],
    documents: [
      { name: 'Internship Certificate', url: 'assets/docs/maestrominds-certificate.pdf' },
      { name: 'Offer Letter', url: 'assets/docs/maestrominds-offer-letter.pdf' },
      { name: 'Internship Report', url: 'assets/docs/maestro-internship-report.pdf' },
    ],
  },
  'exp-prodigy': {
    role: 'Web Developer Intern',
    company: 'Prodigy InfoTech',
    period: 'Jun 2024',
    summary: 'Built responsive web applications using modern web technologies.',
    responsibilities: [
      'Developed responsive web applications using HTML, CSS and JavaScript.',
      'Collaborated with the team on client projects to improve usability and performance.',
      'Applied modern front-end design practices.',
    ],
    screenshots: [
      'assets/projects/prodigy1.png',
    ],
    documents: [
      { name: 'Internship Certificate', url: 'assets/docs/prodigy-certificate.pdf' },
      { name: 'Offer Letter', url: 'assets/docs/prodigy-offer-letter.pdf' },
      { name: 'Letter Of Recommendation', url: 'assets/docs/prodigy-lor.pdf' },
    ],
  },
  'exp-technohacks': {
    role: 'Cyber Security Intern',
    company: 'TechnoHacks EduTech',
    period: 'Apr – May 2024',
    summary: 'Monitored network activity and performed basic security assessments.',
    responsibilities: [
      'Monitored network activity and analysed logs for unusual patterns.',
      'Assisted in basic security assessments and reporting using Nmap.',
      'Reinforced understanding of enterprise network security environments.',
    ],
    screenshots: [
      'assets/projects/technohack1.png',
    ],
    documents: [
      { name: 'Internship Certificate', url: 'assets/docs/technohacks-certificate.pdf' },
      { name: 'Offer Letter', url: 'assets/docs/technohacks-offer-letter.pdf' },
    ],
  },
};

const CERTIFICATES = {
  'cert-aws': {
    issuer: 'Amazon Web Services',
    name: 'AWS Cloud Practitioner',
    image: 'assets/certs/cert-aws.jpeg', // 'assets/certs/aws-cloud.jpg'
    link: 'https://www.credly.com/badges/9839eebe-ee13-4f75-8777-b0775b249839/public_url',  // 'https://verify.aws.com/...'
  },
  'cert-ibm': {
  issuer: 'IBM SkillBuild',
  name: 'Generative AI',
  image: 'assets/certs/cert-ibm.png',
  link: 'https://www.credly.com/badges/c53fecf1-4678-470a-8a4a-1ec2447300f4/public_url', // 'https://www.credly.com/badges/...'
},
'cert-ibmq': {
  issuer: 'IBM Quantum',
  name: 'Quantum Algorithms Fundamentals',
  image: 'assets/certs/cert-ibmq.png',
  link: 'https://www.credly.com/badges/1a47623b-a970-48c2-a0b2-899ecb73e3a2/public_url', // 'https://www.credly.com/badges/...'
},
  'cert-awsgen': {
  issuer: 'Amazon Web Services',
  name: 'AWS Educate Introduction to Generative AI ',
  image: 'assets/certs/cert-awsgen.png',
  link: 'https://www.credly.com/badges/7ccb3fdb-edfa-4c4b-b1ff-b41e96713241/public_url', // 'https://www.credly.com/badges/...'
},
  'cert-google': {
    issuer: 'Google',
    name: 'Cybersecurity Analyst',
    image: 'assets/certs/cert-google.png', // 'assets/certs/google-cyber.pdf'
    link: 'https://coursera.org/share/c788fb25f74c66a7021eaa4daf75de6b',
  },
  'cert-gdg': {
    issuer: 'Google Developer Groups',
    name: 'Campus Solution CHallenge',
    image: 'assets/certs/cert-gdg.png', // 'assets/certs/gdg-challenge.pdf'
    link: 'https://certificate.hack2skill.com/legacy/2025H2S01GSC-P03028',
},
  'cert-cisco': {
    issuer: 'Cisco',
    name: 'Cybersecurity Fundamentals',
    image: 'assets/certs/cert-cisco.png', // 'assets/certs/cisco-cyber.pdf'
    link: 'https://www.credly.com/badges/83fb53c4-c8cf-4a41-a037-b46bd1eb73a8/public_url',
  },
  'cert-ms': {
    issuer: 'Microsoft',
    name: 'Web Development Fundamentals (Visual Studio)',
    image: 'assets/certs/cert-ms.jpeg', // 'assets/certs/microsoft-web.pdf'
    link: 'https://learn.microsoft.com/api/achievements/share/en-us/SafiyaBiA-3650/HRDQU9C8?sharingId=EB8B6D3E34801B81',
  },
  'cert-tcs': {
    issuer: 'TCS iON',
    name: 'Interview Skills',
    image: 'assets/certs/cert-tcs.png',// 'assets/certs/tcs-interview.pdf'
    link: null,
  },
  'cert-accenture': {
    issuer: 'Accenture',
    name: 'Innovation Challenge',
    image: 'assets/certs/cert-accenture.png', // 'assets/certs/accenture-innovation.pdf'
    link: null,
  },
  'cert-nptel-iot': {
    issuer: 'NPTEL · IIT Madras',
    name: 'Introduction to Internet of Things',
    image: 'assets/certs/cert-iot.png', // 'assets/certs/nptel-iot.pdf'
    link: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs147/Course/NPTEL25CS147S75390318610874260.pdf',
  },
  'cert-nptel-se': {
    issuer: 'NPTEL · IIT Madras',
    name: 'Software Conceptual Design',
    image: 'assets/certs/cert-se.png', // 'assets/certs/nptel-se.pdf'
    link: 'https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/109/noc24-hs26/Course/NPTEL24HS26S35340097330731577.pdf',
  },
  'cert-udemy': {
    issuer: 'Udemy',
    name: 'Python and Flask Framework Development',
    image: 'assets/certs/cert-udemy.jpg', // 'assets/certs/udemy-python.pdf'
    link: 'https://www.udemy.com/certificate/UC-4da34883-76c1-455c-b636-75c0feb43ce5/',
  },
};

const ACHIEVEMENTS = {
  'ach-yesist12': {
    level: 'International',
    title: 'Finalist — IEEE YESIST12',
    body: 'International hackathon, Innovation Challenge track, 2026. Also serving as Coordinator for the IEEE YESIST12 event. The project (Phoenix Relief) addressed women\'s health and sustainability.',
    documents: [],
    image: 'assets/projects/Phoenix-1.png', // 'assets/achievements/yesist12-certificate.pdf'
    documents: [{ name: 'Finalist', url: 'assets/projects/Phoenix-1.png' }],
  },
  'ach-createch': {
    level: 'National',
    title: '2nd Place — PERI CREATECH\'25',
    body: 'National Project Expo at PERI Institute of Technology for the Orion fleet optimization system. Competed against teams from across India.',
    documents: [
      { name: '2nd Place Winning', url: 'assets/projects/Orion1.jpeg' },
    ],
  },
  'ach-deepblue': {
    level: 'National',
    title: 'Finalist — Deep Blue Hackathon',
    body: 'National-level innovation and startup hackathon, 2025. Reached the finalist round with the Orion fleet optimization project.',
    documents: [
      { name: 'Finalist Certificate', url: 'assets/projects/Orion2.jpg' },
    ],
  },
  'ach-idex': {
    level: 'International',
    title: 'Semi-finalist — IDEX MIRA Challenge',
    body: 'IDEX Defence India Startup Challenge (MIRA), International level, 2024. Led the team as Team Lead through the semi-final stage.',
    documents: [
      { name: 'Semi-finalist', url: 'assets/projects/Phoenix-3.png' },
    ],
  },
  'ach-sentineops': {
    level: 'National',
    title: 'Shortlisted — SentinelOPS, IIT Madras',
    body: 'Competitively shortlisted for the SentinelOPS Cybersecurity Bootcamp conducted by IIT Madras — a nationally competitive programme.',
    documents: [
      { name: 'Shortlisted', url: 'assets/projects/sentinel-1.jpeg' },
    ],
  },
  'ach-startupTN': {
    level: 'State',
    title: 'Shortlisted — Tourism Innovation Hackathon & Tamil Nadu Global Tourism Summit 2026',
    body: 'Competitively shortlisted for the Tourism Innovation Hackathon conducted by StartupTN as part of the Tamil Nadu Global Tourism Summit 2026 — a state-level competitive programme.',
    documents: [
      { name: 'On Venue', url: 'assets/projects/startup1.jpg' },
      { name: 'On Sheraton', url: 'assets/projects/startup2.jpeg' },
      { name: 'On StartupTN', url: 'assets/projects/startup3.jpeg' },
      { name: 'Finalist', url: 'assets/docs/startupTN-finalist.pdf' },
    ],
  },
  'ach-nptel': {
    level: 'National Online',
    title: 'NPTEL Motivated Learner',
    body: 'Recognised by IIT Madras as a Motivated Learner in the NPTEL online certification programme, reflecting consistent engagement and performance.',
    documents: [
      { name: 'On Venue IIT Madras', url: 'assets/projects/On_IITM.jpeg' },
      { name: 'NPTEL Star - Motivator', url: 'assets/projects/NPTEL_Star.jpg' },
      { name: 'IITM Paticipation', url: 'assets/projects/IITM.jpg' },
    ],
  },
};

// ──────────────────────────────────────────────────
// UTILITIES
// ──────────────────────────────────────────────────

function $(selector, ctx = document) { return ctx.querySelector(selector); }
function $$(selector, ctx = document) { return [...ctx.querySelectorAll(selector)]; }

// ──────────────────────────────────────────────────
// THEME
// ──────────────────────────────────────────────────

const THEME_KEY = 'sb-theme';
const html = document.documentElement;
const themeBtn = $('#themeToggle');

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
}

function toggleTheme() {
  const current = html.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

// Load saved theme
const savedTheme = localStorage.getItem(THEME_KEY);
if (savedTheme) applyTheme(savedTheme);

themeBtn?.addEventListener('click', toggleTheme);

// ──────────────────────────────────────────────────
// HEADER SCROLL STATE
// ──────────────────────────────────────────────────

const header = $('#header');
function onScroll() {
  header?.classList.toggle('scrolled', window.scrollY > 20);
  $('#backToTop')?.classList.toggle('visible', window.scrollY > 400);
}
window.addEventListener('scroll', onScroll, { passive: true });

// ──────────────────────────────────────────────────
// NAV ACTIVE LINK
// ──────────────────────────────────────────────────

const navLinks = $$('.nav-link');
const sections = $$('section[id]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const active = navLinks.find(l => l.getAttribute('href') === `#${e.target.id}`);
      active?.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ──────────────────────────────────────────────────
// MOBILE DRAWER
// ──────────────────────────────────────────────────

const burger  = $('#burger');
const drawer  = $('#drawer');
const drawerBackdrop = $('#drawerBackdrop');
const drawerClose    = $('#drawerClose');

function openDrawer() {
  drawer.classList.add('open');
  burger.classList.add('open');
  burger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  drawer.classList.remove('open');
  burger.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

burger?.addEventListener('click', () => drawer.classList.contains('open') ? closeDrawer() : openDrawer());
drawerBackdrop?.addEventListener('click', closeDrawer);
drawerClose?.addEventListener('click', closeDrawer);
$$('.drawer__link').forEach(l => l.addEventListener('click', closeDrawer));

// ──────────────────────────────────────────────────
// SMOOTH SCROLL
// ──────────────────────────────────────────────────

document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href');
  const target = $(id);
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// ──────────────────────────────────────────────────
// REVEAL ON SCROLL
// ──────────────────────────────────────────────────

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (!e.isIntersecting) return;
    // Stagger siblings
    const parent = e.target.parentElement;
    const siblings = [...parent.querySelectorAll('.reveal')];
    const idx = siblings.indexOf(e.target);
    e.target.style.transitionDelay = `${idx * 55}ms`;
    e.target.classList.add('visible');
    revealObserver.unobserve(e.target);
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

$$('.reveal').forEach(el => revealObserver.observe(el));

// ──────────────────────────────────────────────────
// MODAL ENGINE
// ──────────────────────────────────────────────────

const modal        = $('#modal');
const modalBackdrop = $('#modalBackdrop');
const modalClose   = $('#modalClose');
const modalContent = $('#modalContent');

function openModal(html) {
  modalContent.innerHTML = html;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

modalBackdrop?.addEventListener('click', closeModal);
modalClose?.addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ──────────────────────────────────────────────────
// GALLERY HELPER
// ──────────────────────────────────────────────────

let galleryImages = [];
let galleryIndex  = 0;

function buildGallery(images, containerId) {
  galleryImages = images;
  galleryIndex  = 0;
  const hasImages = images.length > 0;

  if (!hasImages) {
    return `
      <div class="img-gallery">
        <div class="img-gallery__placeholder">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
          <span>Screenshots will appear here</span>
          <span style="font-size:12px;opacity:0.6;">Add image paths to the PROJECTS data above</span>
        </div>
      </div>`;
  }

  return `
    <div class="img-gallery" id="${containerId}">
      <img class="img-gallery__display" id="${containerId}-img" src="${images[0]}" alt="Screenshot ${1}" />
      <div class="img-gallery__controls">
        <button class="img-gallery__btn" id="${containerId}-prev" onclick="galleryNav('${containerId}',-1)" ${images.length <= 1 ? 'disabled' : ''}>← Prev</button>
        <span class="img-gallery__counter" id="${containerId}-counter">1 / ${images.length}</span>
        <button class="img-gallery__btn" id="${containerId}-next" onclick="galleryNav('${containerId}',1)" ${images.length <= 1 ? 'disabled' : ''}>Next →</button>
      </div>
    </div>`;
}

window.galleryNav = function(id, dir) {
  const imgs = galleryImages;
  if (!imgs.length) return;
  galleryIndex = (galleryIndex + dir + imgs.length) % imgs.length;
  const img     = $(`#${id}-img`);
  const counter = $(`#${id}-counter`);
  const prev    = $(`#${id}-prev`);
  const next    = $(`#${id}-next`);
  if (img)     { img.src = imgs[galleryIndex]; img.alt = `Screenshot ${galleryIndex + 1}`; }
  if (counter) counter.textContent = `${galleryIndex + 1} / ${imgs.length}`;
  if (prev)    prev.disabled = imgs.length <= 1;
  if (next)    next.disabled = imgs.length <= 1;
};

function buildDocList(docs, driveLink) {
  if (!docs || docs.length === 0) {
    return `
      <div class="doc-list">
        <div class="doc-item">
          <span class="doc-item__name" style="color:var(--text-3);font-style:italic;">No documents attached yet — add file paths to the data section</span>
          ${driveLink ? `<a href="${driveLink}" target="_blank" rel="noreferrer" class="doc-item__link">Open Drive →</a>` : ''}
        </div>
      </div>`;
  }
  const items = docs.map(d => `
    <div class="doc-item">
      <span class="doc-item__name">${d.name}</span>
      <a href="${d.url}" target="_blank" rel="noreferrer" class="doc-item__link">Open →</a>
    </div>`).join('');
  return `<div class="doc-list">${items}</div>`;
}

// ──────────────────────────────────────────────────
// PROJECT MODALS
// ──────────────────────────────────────────────────

window.openProject = function(id) {
  const p = PROJECTS[id];
  if (!p) return;

  const awardHtml = p.award ? `<div class="modal-badge">${p.award}</div>` : '';
  const techHtml  = p.tech.map(t => `<span>${t}</span>`).join('');
  const gallery   = buildGallery(p.screenshots, 'proj-gallery');
  const docList   = buildDocList(p.documents, 'https://drive.google.com/drive/folders/1nMAHrHJRaFQvyRiK3W7yBeCOic-RrE_s?usp=sharing');

  openModal(`
    <div class="modal-label">${p.label}</div>
    <h2 class="modal-title">${p.title}</h2>
    <p class="modal-sub">${p.subtitle}</p>
    ${awardHtml}

    <div class="modal-divider"></div>
    <div style="margin-bottom:14px;">
      <div class="modal-box__label" style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--text-3);margin-bottom:8px;">Screenshots</div>
      ${gallery}
    </div>

    <div class="modal-grid">
      <div class="modal-box">
        <div class="modal-box__label">Problem</div>
        <div class="modal-box__val">${p.problem}</div>
      </div>
      <div class="modal-box">
        <div class="modal-box__label">Solution</div>
        <div class="modal-box__val">${p.solution}</div>
      </div>
    </div>
    <div class="modal-box" style="margin-bottom:16px;">
      <div class="modal-box__label">Impact</div>
      <div class="modal-box__val">${p.impact}</div>
    </div>

    <div class="modal-box__label" style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--text-3);margin-bottom:8px;">Tech Stack</div>
    <div class="modal-tags">${techHtml}</div>

    <div class="modal-divider"></div>
    <div class="modal-box__label" style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--text-3);margin-bottom:8px;">Project Documents</div>
    ${docList}
    
  `);
};

// ──────────────────────────────────────────────────
// EXPERIENCE MODALS
// ──────────────────────────────────────────────────

window.openExperience = function(id) {
  const e = EXPERIENCE[id];
  if (!e) return;

  const listItems = e.responsibilities.map(r => `<li>${r}</li>`).join('');
  const gallery   = buildGallery(e.screenshots, 'exp-gallery');
  const docList   = buildDocList(e.documents, 'https://drive.google.com/drive/folders/1nMAHrHJRaFQvyRiK3W7yBeCOic-RrE_s?usp=sharing');

  openModal(`
    <div class="modal-label">Internship Experience</div>
    <h2 class="modal-title">${e.role}</h2>
    <p class="modal-sub">${e.company} &nbsp;·&nbsp; ${e.period}</p>

    <p style="font-size:14.5px;color:var(--text-2);margin-bottom:18px;line-height:1.7;">${e.summary}</p>

    <div class="modal-box" style="margin-bottom:18px;">
      <div class="modal-box__label">Responsibilities</div>
      <ul style="list-style:none;display:grid;gap:7px;margin-top:4px;">
        ${e.responsibilities.map(r => `
          <li style="font-size:14px;color:var(--text-2);padding-left:14px;position:relative;">
            <span style="position:absolute;left:0;color:var(--accent);font-weight:700;">–</span>${r}
          </li>`).join('')}
      </ul>
    </div>

    <div style="margin-bottom:14px;">
      <div class="modal-box__label" style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--text-3);margin-bottom:8px;">Evidence / Screenshots</div>
      ${gallery}
    </div>

    <div class="modal-divider"></div>
    <div class="modal-box__label" style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--text-3);margin-bottom:8px;">Certificates &amp; Documents</div>
    ${docList}
    
  `);
};

// ──────────────────────────────────────────────────
// CERTIFICATE MODALS
// ──────────────────────────────────────────────────

window.openCert = function(id) {
  const c = CERTIFICATES[id];
  if (!c) return;

  const displayHtml = c.image
    ? `<div class="cert-display"><img src="${c.image}" alt="${c.name} certificate" /></div>`
    : `<div class="cert-display">
        <div class="cert-display__placeholder">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color:var(--text-3)">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
          <span style="font-size:14px;color:var(--text-3);">Certificate image not attached yet</span>
          <span style="font-size:12px;color:var(--text-3);opacity:.7;">Add the image path to the CERTIFICATES data in script.js</span>
        </div>
       </div>`;

  const linkHtml = c.link
    ? `<a href="${c.link}" target="_blank" rel="noreferrer" class="btn btn-outline" style="width:100%;justify-content:center;margin-top:8px;">Verify Certificate Online</a>`
    : '';

  openModal(`
    <div class="modal-label">Certification</div>
    <h2 class="modal-title">${c.name}</h2>
    <p class="modal-sub">Issued by ${c.issuer}</p>
    <div class="modal-divider"></div>
    ${displayHtml}
    ${linkHtml}
  `);
};

// ──────────────────────────────────────────────────
// ACHIEVEMENT MODALS
// ──────────────────────────────────────────────────

window.openAchievement = function(id) {
  const a = ACHIEVEMENTS[id];
  if (!a) return;

  const levelClass = a.level === 'International' ? 'ach-card__level--intl' : 'ach-card__level--natl';
  const docList    = buildDocList(a.documents, 'https://drive.google.com/drive/folders/1nMAHrHJRaFQvyRiK3W7yBeCOic-RrE_s?usp=sharing');

  openModal(`
    <div class="modal-label">Achievement &amp; Award</div>
    <div class="ach-card__level ${levelClass}" style="margin-bottom:12px;">${a.level}</div>
    <h2 class="modal-title">${a.title}</h2>
    <div class="modal-divider"></div>
    <p style="font-size:15px;color:var(--text-2);line-height:1.75;margin-bottom:20px;">${a.body}</p>
    <div class="modal-box__label" style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--text-3);margin-bottom:8px;">Certificates &amp; Evidence</div>
    ${docList}
  `);
};

// ──────────────────────────────────────────────────
// FOOTER YEAR
// ──────────────────────────────────────────────────

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ──────────────────────────────────────────────────
// INITIAL SCROLL CHECK
// ──────────────────────────────────────────────────

onScroll();
