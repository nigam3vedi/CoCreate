/* ============================================================
   COLLAB — Creator Collaboration Platform
   script.js — SPA Logic, Data, Interactions
   ============================================================ */

'use strict';

/* ── DATA: CREATOR PROFILES ─────────────────────────────────────── */
const CREATORS = [
  {
    id: 1,
    name: 'Aria Shen',
    role: 'Composer',
    category: 'Musician',
    location: 'Seoul',
    avatar: 'https://i.pravatar.cc/150?img=11',
    bio: 'Award-winning film composer blending orchestral textures with modern electronic production. Graduated from Berklee Online. Seeking visual directors for my next score.',
    skills: ['Orchestration', 'Ableton', 'Film Scoring', 'Piano', 'Sound Design'],
    collab: 'Open to: Films, Games, Documentaries',
    portfolio: [
      { title: 'Void — Short Film Score', desc: 'Ambient orchestral score for award-winning short.' },
      { title: 'Neon Dreams EP', desc: '5-track electronic-orchestral fusion EP.' },
      { title: 'Game OST: Liminal', desc: 'Full soundtrack for indie puzzle game.' },
      { title: 'Ad Score — Nykaa', desc: 'Seasonal campaign background score.' },
    ],
    collabs: [
      { name: 'Luca Ferretti', role: 'Director', img: 'https://i.pravatar.cc/40?img=47' },
      { name: 'Dev Sinha', role: 'Game Dev', img: 'https://i.pravatar.cc/40?img=12' },
    ],
    collabCount: 8,
    verified: true,
  },
  {
    id: 2,
    name: 'Luca Ferretti',
    role: 'Filmmaker',
    category: 'Filmmaker',
    location: 'London',
    avatar: 'https://i.pravatar.cc/150?img=47',
    bio: 'Director of photography and short film director. I tell stories at the intersection of urban identity and human connection. Looking for composers and writers.',
    skills: ['Cinematography', 'DaVinci Resolve', 'Directing', 'Colour Grading', 'Premiere'],
    collab: 'Open to: Music Videos, Shorts, Documentaries',
    portfolio: [
      { title: 'Concrete Bloom', desc: 'Award-winning 12-min documentary short.' },
      { title: 'Aura — Music Video', desc: 'Directed visuals for indie artist Aria Shen.' },
    ],
    collabs: [
      { name: 'Aria Shen', role: 'Composer', img: 'https://i.pravatar.cc/40?img=11' },
      { name: 'Maya Torres', role: 'Writer', img: 'https://i.pravatar.cc/40?img=32' },
    ],
    collabCount: 5,
    verified: true,
  },
  {
    id: 3,
    name: 'Maya Torres',
    role: 'Lyricist & Writer',
    category: 'Writer',
    location: 'Mumbai',
    avatar: 'https://i.pravatar.cc/150?img=32',
    bio: 'Bilingual lyricist writing in English and Spanish. My words live in the space between longing and arrival. Currently co-writing for two independent artists.',
    skills: ['Songwriting', 'Poetry', 'Copywriting', 'Screenwriting', 'Hindi'],
    collab: 'Open to: Albums, Films, Theatre',
    portfolio: [
      { title: 'Between Tides — Album', desc: 'Co-wrote 7 tracks with indie folk act.' },
      { title: '"Monsoon" — Short Film', desc: 'Original dialogue and screenplay.' },
    ],
    collabs: [
      { name: 'Priya Nair', role: 'Singer', img: 'https://i.pravatar.cc/40?img=20' },
      { name: 'Dev Sinha', role: 'Composer', img: 'https://i.pravatar.cc/40?img=12' },
    ],
    collabCount: 12,
    verified: false,
  },
  {
    id: 4,
    name: 'Ravi Mehra',
    role: 'Graphic Designer',
    category: 'Designer',
    location: 'Mumbai',
    avatar: 'https://i.pravatar.cc/150?img=15',
    bio: 'Visual designer obsessed with editorial design, type-forward identities, and album artwork. 5+ years working with musicians and indie labels.',
    skills: ['Figma', 'Illustrator', 'Photoshop', 'Typography', 'Branding'],
    collab: 'Open to: Album Art, Merch, Identities',
    portfolio: [
      { title: 'Silence Records — Rebrand', desc: 'Full identity system for indie label.' },
      { title: 'Tour Poster Series', desc: '12-piece poster series for touring act.' },
    ],
    collabs: [
      { name: 'Aria Shen', role: 'Composer', img: 'https://i.pravatar.cc/40?img=11' },
    ],
    collabCount: 20,
    verified: true,
  },
  {
    id: 5,
    name: 'Yuki Tanaka',
    role: 'Motion Designer',
    category: 'Designer',
    location: 'Berlin',
    avatar: 'https://i.pravatar.cc/150?img=25',
    bio: 'After Effects specialist and motion graphics artist. I breathe life into static visuals. Looking for musicians and filmmakers for visual storytelling projects.',
    skills: ['After Effects', 'Cinema 4D', 'Motion Graphics', 'Blender', 'Lottie'],
    collab: 'Open to: Music Videos, Lyric Videos, Brand Films',
    portfolio: [
      { title: 'Kinetic Type — "Breathe"', desc: 'Viral lyric video with 2M YouTube views.' },
      { title: 'Brand Reveal — Nuova', desc: 'Full animated brand launch package.' },
    ],
    collabs: [
      { name: 'Luca Ferretti', role: 'Director', img: 'https://i.pravatar.cc/40?img=47' },
    ],
    collabCount: 14,
    verified: false,
  },
  {
    id: 6,
    name: 'James Okafor',
    role: 'Director',
    category: 'Filmmaker',
    location: 'Lagos',
    avatar: 'https://i.pravatar.cc/150?img=51',
    bio: 'Afrobeat-era storyteller turned director. My films explore migration, memory, and music. Winner of the Lagos Shorts Festival 2023. Always looking for composers.',
    skills: ['Directing', 'FCP', 'Storyboarding', 'Casting', 'Production Design'],
    collab: 'Open to: Feature Films, Commercial Docs',
    portfolio: [
      { title: 'Homeward — Short Film', desc: 'Festival winner exploring diaspora identity.' },
      { title: 'Sound of Lagos', desc: 'Documentary series on Afrobeats producers.' },
    ],
    collabs: [
      { name: 'Aria Shen', role: 'Composer', img: 'https://i.pravatar.cc/40?img=11' },
      { name: 'Yuki Tanaka', role: 'Motion', img: 'https://i.pravatar.cc/40?img=25' },
    ],
    collabCount: 6,
    verified: true,
  },
  {
    id: 7,
    name: 'Priya Nair',
    role: 'Singer-Songwriter',
    category: 'Musician',
    location: 'Mumbai',
    avatar: 'https://i.pravatar.cc/150?img=20',
    bio: 'Indie-pop vocalist with classical Carnatic training. Currently recording my debut EP and looking for a producer with an experimental electronic background.',
    skills: ['Vocals', 'Guitar', 'Songwriting', 'Harmonics', 'Live Performance'],
    collab: 'Open to: EPs, Albums, Live Projects',
    portfolio: [
      { title: '"Chasing Rain" — Single', desc: 'Debut single with 150k Spotify streams.' },
      { title: 'Live at Blue Frog', desc: 'Headlining set from Mumbai venue.' },
    ],
    collabs: [
      { name: 'Maya Torres', role: 'Lyricist', img: 'https://i.pravatar.cc/40?img=32' },
    ],
    collabCount: 3,
    verified: false,
  },
  {
    id: 8,
    name: 'Sofia Reyes',
    role: 'Video Editor',
    category: 'Editor',
    location: 'New York',
    avatar: 'https://i.pravatar.cc/150?img=44',
    bio: 'Documentary and narrative editor based in Brooklyn. I shape stories in the timeline — finding the emotional truth in raw footage. Open to independent films and branded content.',
    skills: ['Premiere Pro', 'Avid', 'Final Cut', 'Colour Assist', 'Audio Editing'],
    collab: 'Open to: Documentaries, Narrative Films, Brand Films',
    portfolio: [
      { title: 'The Quiet Season', desc: 'Feature documentary, Tribeca selection 2023.' },
      { title: 'Brand Film — Grove Co.', desc: 'Longform brand documentary, 300k views.' },
    ],
    collabs: [
      { name: 'James Okafor', role: 'Director', img: 'https://i.pravatar.cc/40?img=51' },
    ],
    collabCount: 18,
    verified: true,
  },
  {
    id: 9,
    name: 'Dev Sinha',
    role: 'Music Producer',
    category: 'Musician',
    location: 'Mumbai',
    avatar: 'https://i.pravatar.cc/150?img=12',
    bio: 'Producer blending lo-fi hip-hop, indie-pop, and Desi folk sounds. I\'ve produced for 30+ independent artists. Looking for vocalists and lyricists for an upcoming compilation.',
    skills: ['FL Studio', 'Mixing', 'Mastering', 'Sampling', 'Arrangement'],
    collab: 'Open to: Singles, EPs, Compilations',
    portfolio: [
      { title: 'Monsoon Loops — Beat Pack', desc: 'Viral sample pack, 50k downloads.' },
      { title: '"Aaina" — Produced Track', desc: 'Streamed 800k+ times on Spotify.' },
    ],
    collabs: [
      { name: 'Priya Nair', role: 'Vocalist', img: 'https://i.pravatar.cc/40?img=20' },
      { name: 'Maya Torres', role: 'Lyricist', img: 'https://i.pravatar.cc/40?img=32' },
    ],
    collabCount: 30,
    verified: true,
  },
  {
    id: 10,
    name: 'Elena Vasquez',
    role: 'Animator',
    category: 'Designer',
    location: 'Berlin',
    avatar: 'https://i.pravatar.cc/150?img=35',
    bio: '2D animator and illustrator with a love of character-driven stories. I work in Toon Boom and frame-by-frame animation. Looking for writers and composers for animated shorts.',
    skills: ['Toon Boom', 'Procreate', 'Storyboarding', 'Character Design', 'Frame-by-Frame'],
    collab: 'Open to: Animated Shorts, Music Videos, Explainers',
    portfolio: [
      { title: 'Flora — Animated Short', desc: '5-min character animation, screened at festivals.' },
      { title: 'Animated MV — "Still Here"', desc: 'Music video for indie folk artist.' },
    ],
    collabs: [
      { name: 'Aria Shen', role: 'Composer', img: 'https://i.pravatar.cc/40?img=11' },
    ],
    collabCount: 9,
    verified: false,
  },
  {
    id: 11,
    name: 'Tomás Guerrero',
    role: 'Indie Developer',
    category: 'Designer',
    location: 'London',
    avatar: 'https://i.pravatar.cc/150?img=33',
    bio: 'Solo indie game developer working on a narrative adventure game. I build the mechanics; I need an artist and composer to bring the world to life.',
    skills: ['Unity', 'C#', 'Pixel Art', 'Game Design', 'Narrative Design'],
    collab: 'Open to: Game Art, Soundtracks, Narrative Writing',
    portfolio: [
      { title: 'Liminal (Early Access)', desc: 'Puzzle exploration game on itch.io.' },
      { title: 'Game Jam 2023 — Winner', desc: 'Built solo over 72 hours.' },
    ],
    collabs: [
      { name: 'Yuki Tanaka', role: 'Motion Designer', img: 'https://i.pravatar.cc/40?img=25' },
    ],
    collabCount: 4,
    verified: false,
  },
  {
    id: 12,
    name: 'Anika Osei',
    role: 'Screenwriter',
    category: 'Writer',
    location: 'Lagos',
    avatar: 'https://i.pravatar.cc/150?img=48',
    bio: 'Screenwriter focused on African speculative fiction and drama. Seeking directors and composers interested in stories about identity, power, and speculative futures.',
    skills: ['Screenwriting', 'Final Draft', 'Story Structure', 'World Building', 'Short Fiction'],
    collab: 'Open to: Short Films, Pilots, Stage Adaptations',
    portfolio: [
      { title: '"After Rain" — Screenplay', desc: 'Quarter-finalist, Austin Film Festival.' },
      { title: 'Echoes — Web Series Pilot', desc: 'Speculative drama pilot, in development.' },
    ],
    collabs: [
      { name: 'James Okafor', role: 'Director', img: 'https://i.pravatar.cc/40?img=51' },
    ],
    collabCount: 7,
    verified: true,
  },
];

/* ── DATA: PROJECTS ────────────────────────────────────────────── */
const INITIAL_PROJECTS = [
  {
    id: 1,
    title: 'Looking for a Composer for 15-min Sci-Fi Short',
    desc: 'My film Liminal Space is a near-future sci-fi short about memory and loss. I need an original score — think Hans Zimmer meets Arca. The story is intimate and quiet, and the music must carry the emotional weight.',
    role: 'Composer / Musician',
    category: 'Film',
    tags: ['ambient', 'sci-fi', 'score', 'short film', 'electronic'],
    author: 'James Okafor',
    authorImg: 'https://i.pravatar.cc/40?img=51',
    isNew: false,
  },
  {
    id: 2,
    title: 'Need Lyricist for Debut Indie-Pop EP',
    desc: 'I\'m a producer with 5 tracks ready to record. The sound is dreamy, nocturnal indie-pop — influenced by Mitski and Sufjan Stevens. Looking for a lyricist who can write raw, personal, image-heavy words.',
    role: 'Lyricist / Poet',
    category: 'Music',
    tags: ['indie-pop', 'EP', 'lyrics', 'singer-songwriter', 'nocturnal'],
    author: 'Priya Nair',
    authorImg: 'https://i.pravatar.cc/40?img=20',
    isNew: false,
  },
  {
    id: 3,
    title: 'Animator Needed for 3-min Music Video',
    desc: 'My track "Glass Houses" is done and mixed. It has a fragile, layered sound. I\'m envisioning a 2D animated video — almost like a moving illustration. The aesthetic should feel handmade, lo-fi, and emotionally honest.',
    role: 'Animator / Illustrator',
    category: 'Music',
    tags: ['2D animation', 'music video', 'indie', 'illustration'],
    author: 'Aria Shen',
    authorImg: 'https://i.pravatar.cc/40?img=11',
    isNew: false,
  },
  {
    id: 4,
    title: 'Game OST Composer Wanted — Puzzle Adventure',
    desc: 'Liminal is an atmospheric puzzle game set in a dreamlike world. I need a composer to build an ambient, generative-style soundtrack. Inspiration: Disasterpeace, Brian Eno, Nils Frahm. Revenue share deal on the table.',
    role: 'Game Composer',
    category: 'Game',
    tags: ['ambient', 'generative', 'puzzle', 'indie game', 'OST'],
    author: 'Tomás Guerrero',
    authorImg: 'https://i.pravatar.cc/40?img=33',
    isNew: false,
  },
  {
    id: 5,
    title: 'Director of Photography for Documentary Short',
    desc: 'I\'m producing a 20-minute documentary about a Carnatic music revival happening in Mumbai\'s underground scene. I need a DP who can shoot in low-light live music venues with a handheld, observational style.',
    role: 'Cinematographer / DP',
    category: 'Film',
    tags: ['documentary', 'handheld', 'music doc', 'observational', 'Mumbai'],
    author: 'Maya Torres',
    authorImg: 'https://i.pravatar.cc/40?img=32',
    isNew: false,
  },
  {
    id: 6,
    title: 'Illustrator for Fantasy Novel — Chapter Headers',
    desc: 'I\'ve finished a 90,000-word dark fantasy novel and am self-publishing. I need 12 chapter header illustrations and a cover. Style: ink-based, gothic, detailed. Think Guy Davis meets Moebius.',
    role: 'Illustrator / Cover Artist',
    category: 'Writing',
    tags: ['fantasy', 'illustration', 'novel', 'dark', 'gothic', 'book cover'],
    author: 'Anika Osei',
    authorImg: 'https://i.pravatar.cc/40?img=48',
    isNew: false,
  },
];

/* ── STATE ────────────────────────────────────────────────────── */
let currentPage = 'home';
let currentFilter = 'All';
let currentBoardFilter = 'All';
let projects = [...INITIAL_PROJECTS];
let appliedProjects = new Set();

/* ── SPA NAVIGATION ───────────────────────────────────────────── */
/**
 * Shows a specific page and hides all others.
 * Updates active nav link.
 */
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Show the target page
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
    currentPage = pageId;
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update active nav link
  document.querySelectorAll('.nav-links li a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === pageId);
  });

  // Close mobile nav
  closeNav();

  // Page-specific init
  if (pageId === 'explore') renderExplorePage();
  if (pageId === 'board') renderBoard();
  if (pageId === 'post') resetPostForm();

  // Return false so href="#" doesn't scroll
  return false;
}

/* ── MOBILE NAV ───────────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', open);
});

function closeNav() {
  navLinks.classList.remove('open');
  hamburger.classList.remove('open');
}

/* ── NAVBAR SCROLL ────────────────────────────────────────────── */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

/* ── RENDER HELPERS ───────────────────────────────────────────── */
/**
 * Creates the HTML for a creator card.
 * @param {object} creator
 * @param {number} delay - animation delay index
 */
function creatorCardHTML(creator, delay = 0) {
  const skillsHTML = creator.skills.slice(0, 4).map(s =>
    `<span class="skill-tag">${s}</span>`
  ).join('');

  const verifiedBadge = creator.verified
    ? '<span style="color:var(--accent);font-size:0.75rem;" title="Verified Creator">✓</span>'
    : '';

  return `
    <div class="creator-card" style="animation-delay:${delay * 0.07}s"
         onclick="openCreatorProfile(${creator.id})">
      <div class="card-top">
        <img class="card-avatar" src="${creator.avatar}" alt="${creator.name}" loading="lazy"/>
        <div>
          <div class="card-name">${creator.name} ${verifiedBadge}</div>
          <div class="card-role">${creator.role}</div>
          <div class="card-location">📍 ${creator.location}</div>
        </div>
      </div>
      <p class="card-bio">${creator.bio}</p>
      <div class="card-skills">${skillsHTML}</div>
      <div class="card-footer">
        <span class="collab-badge">◎ ${creator.collabCount} collabs</span>
        <span class="view-btn">View Profile →</span>
      </div>
    </div>
  `;
}

/* ── FEATURED GRID (HOME) ─────────────────────────────────────── */
function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  const featured = CREATORS.slice(0, 4);
  grid.innerHTML = featured.map((c, i) => creatorCardHTML(c, i)).join('');
}

/* ── EXPLORE PAGE ─────────────────────────────────────────────── */
function renderExplorePage() {
  filterCreators();
}

/**
 * Filters the creator grid based on search text, category chip, and location.
 */
function filterCreators() {
  const query    = (document.getElementById('creatorSearch')?.value || '').toLowerCase();
  const location = (document.getElementById('locationFilter')?.value || '').toLowerCase();

  const filtered = CREATORS.filter(c => {
    const matchCat  = currentFilter === 'All' || c.category === currentFilter;
    const matchLoc  = !location || c.location.toLowerCase() === location;
    const matchQ    = !query ||
      c.name.toLowerCase().includes(query) ||
      c.role.toLowerCase().includes(query) ||
      c.skills.some(s => s.toLowerCase().includes(query));
    return matchCat && matchLoc && matchQ;
  });

  const grid  = document.getElementById('exploreGrid');
  const empty = document.getElementById('emptyState');
  const meta  = document.getElementById('resultsMeta');

  if (!grid) return;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'block';
  } else {
    empty.style.display = 'none';
    grid.innerHTML = filtered.map((c, i) => creatorCardHTML(c, i)).join('');
  }

  if (meta) {
    const filterLabel = currentFilter !== 'All' ? ` in "${currentFilter}"` : '';
    meta.textContent = `Showing ${filtered.length} creator${filtered.length !== 1 ? 's' : ''}${filterLabel}`;
  }
}

/**
 * Sets the active category filter chip and re-renders.
 */
function setFilter(cat) {
  currentFilter = cat;
  document.querySelectorAll('#filterChips .chip').forEach(chip => {
    chip.classList.toggle('active', chip.textContent.trim().replace(/^[^\w]*/, '') === cat || (cat === 'All' && chip.textContent.trim() === 'All'));
  });
  filterCreators();
}

/**
 * Called from the home category cards — sets filter and navigates to explore.
 */
function filterAndExplore(cat) {
  currentFilter = cat;
  showPage('explore');
  // After page shown, update chips
  setTimeout(() => {
    document.querySelectorAll('#filterChips .chip').forEach(chip => {
      const label = chip.textContent.trim();
      chip.classList.toggle('active', label.includes(cat) || (cat === 'All' && label === 'All'));
    });
    filterCreators();
  }, 50);
}

/* ── CREATOR PROFILE PAGE ─────────────────────────────────────── */
/**
 * Renders the full profile page for a given creator ID.
 */
function openCreatorProfile(id) {
  const creator = CREATORS.find(c => c.id === id);
  if (!creator) return;

  const portfolioHTML = creator.portfolio.map(p => `
    <div class="portfolio-item">
      <h4>${p.title}</h4>
      <p>${p.desc}</p>
    </div>
  `).join('');

  const collabsHTML = creator.collabs.map(c => `
    <div class="collab-item">
      <img src="${c.img}" alt="${c.name}" loading="lazy"/>
      <div>
        <div class="collab-item-name">${c.name}</div>
        <div class="collab-item-role">${c.role}</div>
      </div>
    </div>
  `).join('');

  const skillsHTML = creator.skills.map(s => `<span class="skill-pill">${s}</span>`).join('');
  const verifiedHTML = creator.verified
    ? '<span class="section-tag" style="font-size:0.65rem;padding:0.2rem 0.6rem;">✓ Verified</span>'
    : '';

  const profileHTML = `
    <div class="profile-back" onclick="showPage('explore')">← Back to Explore</div>
    <div class="profile-header">
      <img class="profile-avatar" src="${creator.avatar}" alt="${creator.name}" />
      <div style="flex:1">
        <div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;margin-bottom:0.5rem;">
          <h1 class="profile-name">${creator.name}</h1>
          ${verifiedHTML}
        </div>
        <span class="profile-role-tag">◎ ${creator.role}</span>
        <div class="profile-meta">
          <span>📍 ${creator.location}</span>
          <span>🤝 ${creator.collabCount} collaborations</span>
          <span>✦ ${creator.collab}</span>
        </div>
        <p class="profile-bio">${creator.bio}</p>
      </div>
      <div class="profile-actions">
        <button class="btn-primary" onclick="showCollabRequest('${creator.name}')">Request Collaboration</button>
        <button class="btn-outline">Message</button>
      </div>
    </div>
    <div class="profile-body">
      <div class="profile-main">
        <div class="profile-section">
          <h3>Skills</h3>
          <div class="skills-list">${skillsHTML}</div>
        </div>
        <div class="profile-section">
          <h3>Portfolio</h3>
          <div class="portfolio-grid">${portfolioHTML}</div>
        </div>
      </div>
      <div class="profile-sidebar">
        <div class="profile-section">
          <h3>Past Collaborations</h3>
          <div class="collab-list">${collabsHTML}</div>
        </div>
        <div class="profile-section">
          <h3>Looking For</h3>
          <p style="font-size:0.875rem;color:var(--text-muted);line-height:1.65;">${creator.collab}</p>
        </div>
      </div>
    </div>
  `;

  document.getElementById('profileContent').innerHTML = profileHTML;
  showPage('profile');
}

function showCollabRequest(name) {
  showToast(`Collaboration request sent to ${name}! ✦`);
}

/* ── BOARD ────────────────────────────────────────────────────── */
/**
 * Renders all project cards, filtering by category and search.
 */
function renderBoard() {
  filterProjects();
}

function filterProjects() {
  const query = (document.getElementById('boardSearch')?.value || '').toLowerCase();

  const filtered = projects.filter(p => {
    const matchCat = currentBoardFilter === 'All' || p.category === currentBoardFilter;
    const matchQ   = !query ||
      p.title.toLowerCase().includes(query) ||
      p.desc.toLowerCase().includes(query) ||
      p.tags.some(t => t.toLowerCase().includes(query));
    return matchCat && matchQ;
  });

  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = filtered.map((p, i) => projectCardHTML(p, i)).join('');
}

function setBoardFilter(cat) {
  currentBoardFilter = cat;
  document.querySelectorAll('#boardFilterChips .chip').forEach(chip => {
    chip.classList.toggle('active', chip.textContent.trim() === cat);
  });
  filterProjects();
}

/**
 * Creates HTML markup for a project card.
 */
function projectCardHTML(proj, delay = 0) {
  const tagsHTML = proj.tags.map(t => `<span class="project-tag">#${t}</span>`).join('');
  const isApplied = appliedProjects.has(proj.id);
  const newBadge  = proj.isNew ? '<span class="project-new-badge">New</span>' : '';
  const newClass  = proj.isNew ? 'new-post' : '';

  return `
    <div class="project-card ${newClass}" style="animation-delay:${delay * 0.06}s">
      ${newBadge}
      <span class="project-cat-badge">${proj.category}</span>
      <h3 class="project-title">${proj.title}</h3>
      <p class="project-desc">${proj.desc}</p>
      <div class="project-role-needed">
        <span class="role-dot"></span> Seeking: ${proj.role}
      </div>
      <div class="project-tags">${tagsHTML}</div>
      <div class="project-footer">
        <div class="project-author">
          <img src="${proj.authorImg}" alt="${proj.author}" loading="lazy"/>
          <span class="author-name-sm">${proj.author}</span>
        </div>
        <button
          class="apply-btn"
          onclick="applyToProject(${proj.id}, this)"
          ${isApplied ? 'disabled' : ''}
        >
          ${isApplied ? '✓ Applied' : 'Apply →'}
        </button>
      </div>
    </div>
  `;
}

/**
 * Handles "Apply to Collaborate" button click.
 */
function applyToProject(id, btn) {
  appliedProjects.add(id);
  btn.disabled = true;
  btn.textContent = '✓ Applied';
  showToast('Application sent! The creator will be in touch. ◎');
}

/* ── POST FORM ────────────────────────────────────────────────── */
function resetPostForm() {
  const form    = document.getElementById('postForm');
  const success = document.getElementById('postSuccess');
  if (form)    form.style.display = '';
  if (success) success.style.display = 'none';
  form?.reset();
}

/**
 * Handles project form submission — adds to board dynamically.
 */
function submitProject(event) {
  event.preventDefault();

  const title     = document.getElementById('projTitle').value.trim();
  const desc      = document.getElementById('projDesc').value.trim();
  const role      = document.getElementById('projRole').value;
  const cat       = document.getElementById('projCat').value;
  const tagsRaw   = document.getElementById('projTags').value;
  const author    = document.getElementById('projAuthor').value.trim();

  const tags = tagsRaw
    .split(',')
    .map(t => t.trim())
    .filter(Boolean);

  const newProject = {
    id: Date.now(),
    title,
    desc,
    role,
    category: cat,
    tags,
    author,
    authorImg: `https://i.pravatar.cc/40?img=${Math.floor(Math.random() * 70) + 1}`,
    isNew: true,
  };

  // Prepend to projects list
  projects.unshift(newProject);

  // Show success state
  document.getElementById('postForm').style.display = 'none';
  document.getElementById('postSuccess').style.display = 'block';

  showToast('Project posted successfully! ✦');
}

/* ── AUTH MODAL ───────────────────────────────────────────────── */
/**
 * Shows login or signup modal.
 * @param {'login'|'signup'} mode
 */
function showAuthModal(mode) {
  const modal   = document.getElementById('authModal');
  const content = document.getElementById('authContent');

  if (mode === 'login') {
    content.innerHTML = `
      <h2 class="auth-title">Welcome back</h2>
      <p class="auth-sub">Sign in to your Collab account</p>
      <div class="social-auth">
        <button class="social-btn" onclick="fakeAuth()">
          <span>G</span> Continue with Google
        </button>
      </div>
      <div class="auth-divider">or</div>
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-input" placeholder="you@example.com" />
      </div>
      <div class="form-group" style="margin-bottom:1.5rem;">
        <label>Password</label>
        <input type="password" class="form-input" placeholder="••••••••" />
      </div>
      <button class="btn-primary btn-full btn-lg" onclick="fakeAuth()">Sign In</button>
      <p class="auth-switch">Don't have an account? <a onclick="showAuthModal('signup')">Sign up free</a></p>
    `;
  } else {
    content.innerHTML = `
      <h2 class="auth-title">Join Collab</h2>
      <p class="auth-sub">Create your free creator account</p>
      <div class="social-auth">
        <button class="social-btn" onclick="fakeAuth()">
          <span>G</span> Continue with Google
        </button>
      </div>
      <div class="auth-divider">or</div>
      <div class="form-group">
        <label>Full Name</label>
        <input type="text" class="form-input" placeholder="Your name" />
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-input" placeholder="you@example.com" />
      </div>
      <div class="form-group" style="margin-bottom:1.5rem;">
        <label>Password</label>
        <input type="password" class="form-input" placeholder="Create a password" />
      </div>
      <button class="btn-primary btn-full btn-lg" onclick="fakeAuth()">Create Account</button>
      <p class="auth-switch">Already on Collab? <a onclick="showAuthModal('login')">Sign in</a></p>
    `;
  }

  modal.classList.add('active');
}

function closeAuthModal(e) {
  if (e.target.id === 'authModal') {
    document.getElementById('authModal').classList.remove('active');
  }
}

function fakeAuth() {
  document.getElementById('authModal').classList.remove('active');
  showToast('Welcome to Collab! 🎉 (Demo mode — no real auth)');
}

/* ── PROFILE MODAL (used from featured cards on home) ────────── */
function closeModal(e) {
  if (e.target.id === 'profileModal') {
    document.getElementById('profileModal').classList.remove('active');
  }
}

function closeProfileModal() {
  document.getElementById('profileModal').classList.remove('active');
}

/* ── TOAST ────────────────────────────────────────────────────── */
let toastTimer;
/**
 * Shows a toast notification.
 * @param {string} message
 */
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
}

/* ── INTERSECTION OBSERVER — Animate on scroll ─────────────────── */
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

/**
 * Applies scroll animation to static section elements.
 */
function initScrollAnimations() {
  const elements = document.querySelectorAll(
    '.step-card, .cat-card, .testi-card, .pf-item, .pricing-card'
  );
  elements.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
    observer.observe(el);
  });
}

/* ── KEYBOARD SHORTCUTS ───────────────────────────────────────── */
document.addEventListener('keydown', (e) => {
  // Close modals on Escape
  if (e.key === 'Escape') {
    document.getElementById('authModal')?.classList.remove('active');
    document.getElementById('profileModal')?.classList.remove('active');
    closeNav();
  }
  // Cmd/Ctrl + K — focus search (when on explore page)
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    const searchInput = document.getElementById('creatorSearch');
    if (searchInput) {
      showPage('explore');
      setTimeout(() => searchInput.focus(), 300);
    }
  }
});

/* ── INIT ─────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Show home page by default
  showPage('home');

  // Render featured creators on home
  renderFeatured();

  // Init scroll animations
  initScrollAnimations();

  // Handle hash-based routing
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById('page-' + hash)) {
    showPage(hash);
  }
});
