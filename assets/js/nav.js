/* ============================================================
   DIYCalcKit — nav.js
   헤더/푸터/GA 자동 삽입
   툴, 블로그, 프로젝트 추가 시 아래 배열만 수정하면 됨
   ============================================================ */

// ── GA ──────────────────────────────────────────────────────
const GA_ID = 'G-QM4NEN1DFQ';
(function () {
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);
})();
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', GA_ID);

// ── 툴 목록 ─────────────────────────────────────────────────
const TOOLS = [
  { name: "Roofing Calculator", url: "/tools/roofing-calculator.html" },
  { name: "Insulation Calculator", url: "/tools/insulation-calculator.html" },
  { name: "Gutter Calculator", url: "/tools/gutter-calculator.html" },
  { name: "Paint Calculator", url: "/tools/paint-calculator.html" },
  { name: "Wallpaper Calculator", url: "/tools/wallpaper-calculator.html" },
  { name: "Primer Calculator", url: "/tools/primer-calculator.html" },
  { name: "Paint Cost Calculator", url: "/tools/paint-cost-calculator.html" },
  { name: "Flooring Calculator", url: "/tools/flooring-calculator.html" },
  { name: "Tile Calculator", url: "/tools/tile-calculator.html" },
  { name: "Grout Calculator", url: "/tools/grout-calculator.html" },
  { name: "Carpet Calculator", url: "/tools/carpet-calculator.html" },
  { name: "Hardwood Floor Calculator", url: "/tools/hardwood-floor-calculator.html" },
  { name: "Room Area Calculator", url: "/tools/room-area-calculator.html" },
  { name: "Square Footage Calculator", url: "/tools/square-footage-calculator.html" },
  { name: "Drywall Calculator", url: "/tools/drywall-calculator.html" },
  { name: "Concrete Calculator", url: "/tools/concrete-calculator.html" },
  { name: "Renovation Cost Estimator", url: "/tools/renovation-cost-estimator.html" },
  { name: "Bathroom Remodel Cost Calculator", url: "/tools/bathroom-remodel-cost-calculator.html" },
  { name: "Contractor Cost Calculator", url: "/tools/contractor-cost-calculator.html" },
  { name: "Home Renovation ROI Calculator", url: "/tools/home-renovation-roi-calculator.html" },
  { name: "Fence Calculator", url: "/tools/fence-calculator.html" },
  { name: "Deck Size Calculator", url: "/tools/deck-size-calculator.html" },
  { name: "Deck Stain Calculator", url: "/tools/stain-calculator.html" },
  { name: "Garden Area Calculator", url: "/tools/garden-area-calculator.html" },
  { name: "Mulch Calculator", url: "/tools/mulch-calculator.html" },
  { name: "Gravel Calculator", url: "/tools/gravel-calculator.html" },
  { name: "Soil Calculator", url: "/tools/soil-calculator.html" },
  { name: "Raised Garden Bed Calculator", url: "/tools/raised-garden-bed-calculator.html" },
  { name: "Lawn Seed Calculator", url: "/tools/lawn-seed-calculator.html" },
  { name: "Moving Cost Calculator", url: "/tools/moving-cost-calculator.html" },
  { name: "Storage Unit Size Calculator", url: "/tools/storage-unit-size-calculator.html" },
  { name: "Packing Box Calculator", url: "/tools/packing-box-calculator.html" },
  { name: "Window Treatment Calculator", url: "/tools/window-treatment-calculator.html" },
  { name: "Paint Coverage Calculator", url: "/tools/paint-coverage-calculator.html" },
];

// ── 블로그 목록 (날짜 내림차순 — 추가 시 맨 위에) ──────────
const BLOGS = [
  { name: "How Much Insulation Do I Need? Attic & Wall Guide", url: "/blog/how-much-insulation-do-i-need.html", date: "2026-07-11", desc: "Calculate bags or rolls of insulation by area and R-value. Covers recommended R-values by area and blown-in vs. batt." },
  { name: "How Many Shingles Do I Need? Roofing Calculator Guide", url: "/blog/how-many-shingles-do-i-need.html", date: "2026-07-11", desc: "Calculate roofing squares and shingle bundles from your roof footprint and pitch." },
  { name: "How Much Does a Gallon of Paint Cost? (2026 Price Guide)", url: "/blog/how-much-does-a-gallon-of-paint-cost.html", date: "2026-07-09", desc: "A gallon of paint costs $20-$80 on average in 2026, depending on brand and quality tier. See prices by brand, finish, and can size." },
  { name: "How to Calculate Room Area for Flooring, Paint & Tile", url: "/blog/how-to-calculate-room-area.html", date: "2026-07-06", desc: "Calculate room area correctly for any material — square feet for paint, square yards for carpet — with L-shaped room and closet guidance." },
  { name: "How to Measure a Garden Bed for Planning", url: "/blog/how-to-measure-a-garden-bed.html", date: "2026-07-06", desc: "Measure rectangular, circular, and irregular garden beds, and see how square footage feeds into soil, mulch, and plant spacing." },
  { name: "How Much Hardwood Flooring Do I Need?", url: "/blog/how-much-hardwood-flooring-do-i-need.html", date: "2026-07-06", desc: "Calculate hardwood flooring by room size and installation pattern, with waste allowance by layout type." },
  { name: "How Many Boxes Do I Need to Move?", url: "/blog/how-many-boxes-do-i-need-to-move.html", date: "2026-07-06", desc: "Estimate moving boxes by room and home size, with a guide to box sizes and specialty boxes." },
  { name: "How Many Square Feet Does a Gallon of Paint Cover?", url: "/blog/how-many-square-feet-does-a-gallon-of-paint-cover.html", date: "2026-07-06", desc: "A gallon covers 350-400 sq ft per coat on average — see how surface type and color change affect real coverage." },
  { name: "How Much Fabric Do I Need for Curtains?", url: "/blog/how-much-fabric-do-i-need-for-curtains.html", date: "2026-07-06", desc: "Calculate curtain fabric by window size and fullness ratio, with length and hem allowance guidance." },
  { name: "How Much Grass Seed Do I Need to Reseed a Lawn?", url: "/blog/how-much-grass-seed-do-i-need.html", date: "2026-07-06", desc: "Calculate grass seed by lawn size and grass type, covering new seeding vs. overseeding rates." },
  { name: "How Much Drywall Do I Need? Sheet Count Guide", url: "/blog/how-much-drywall-do-i-need.html", date: "2026-07-06", desc: "Calculate exactly how many drywall sheets you need for walls and ceilings, plus joint compound and tape." },
  { name: "How Much Concrete Do I Need? Slab & Footing Calculator Guide", url: "/blog/how-much-concrete-do-i-need.html", date: "2026-07-06", desc: "Calculate cubic yards of concrete for slabs, footings, and sidewalks, with bag counts by project type." },
  { name: "How Much Carpet Do I Need? Complete Homeowner Guide", url: "/blog/how-much-carpet-do-i-need.html", date: "2026-06-23", desc: "Calculate carpet square footage for any room. Covers waste factor, roll widths, seam placement, and cost by carpet type." },
  { name: "How Much Deck Stain Do I Need?", url: "/blog/how-much-deck-stain-do-i-need.html", date: "2026-06-23", desc: "Calculate gallons of deck stain by deck size, coats, railing coverage, and wood condition — with a quick-reference table." },
  { name: "How to Calculate Square Footage of a House", url: "/blog/how-to-calculate-square-footage.html", date: "2026-06-23", desc: "Step-by-step guide to measuring every room, handling L-shapes and open plans, and what counts as livable square footage." },
  { name: "How Much Primer Do I Need? Complete Homeowner Guide", url: "/blog/how-much-primer-do-i-need.html", date: "2026-06-18", desc: "Coverage rates by surface type, how many coats, quick reference by room size, and tips to avoid waste." },
  { name: "Do I Need to Prime Before Painting? When to Use Primer", url: "/blog/when-to-use-primer-before-painting.html", date: "2026-06-18", desc: "Exactly when primer is non-negotiable, when you can skip it, and which type to use for each situation." },
  { name: "How Many Coats of Primer Do I Need? One vs. Two Coats Explained", url: "/blog/how-many-coats-of-primer-do-i-need.html", date: "2026-06-18", desc: "One coat or two? Clear guidance by surface type — bare drywall, stains, color changes, and wood." },
  { name: "How to Hang Wallpaper: Step-by-Step Guide for Beginners", url: "/blog/how-to-hang-wallpaper.html", date: "2026-06-12", desc: "Wall prep, measuring, cutting, pasting, and finishing — the complete method that actually works, including corners and pattern matching." },
  { name: "Wallpaper Calculator with Pattern Repeat: How to Get the Right Roll Count", url: "/blog/wallpaper-calculator-with-repeat.html", date: "2026-06-12", desc: "Pattern repeat is the most misunderstood part of buying wallpaper. Here's exactly how it affects your roll count — with examples and a reference table." },
  { name: "How Much Peel and Stick Wallpaper Do I Need? Complete Guide", url: "/blog/peel-and-stick-wallpaper-calculator.html", date: "2026-06-12", desc: "Calculate rolls for any room or accent wall. Includes coverage by roll type, waste factor guide, and comparison with traditional wallpaper." },
  { name: "How Much Soil Do I Need for a Raised Bed?", url: "/blog/how-much-soil-for-raised-bed.html", date: "2026-06-06", desc: "The cubic foot formula, bags vs. bulk cost comparison, and recommended soil depth by plant type." },
  { name: "Best Soil for Raised Garden Beds in 2026", url: "/blog/best-soil-for-raised-garden-beds.html", date: "2026-06-06", desc: "Compare raised bed soil vs. topsoil, DIY mixes, and bagged options — with cost breakdown and recommendations." },
  { name: "How Deep Should a Raised Garden Bed Be?", url: "/blog/how-deep-should-raised-garden-bed-be.html", date: "2026-06-06", desc: "Recommended depth by vegetable type, minimum depth for common plants, and how depth affects soil cost." },
  { name: "How Much Wallpaper Do I Need for an Accent Wall?", url: "/blog/how-much-wallpaper-for-accent-wall.html", date: "2026-06-01", desc: "Roll count by wall size, pattern repeat impact, cost breakdown, and peel-and-stick vs. traditional comparison." },
  { name: "How Many Rolls of Wallpaper Do I Need?", url: "/blog/how-many-rolls-of-wallpaper-do-i-need.html", date: "2026-06-01", desc: "The formula, pattern repeat guide, and quick reference table for any room size. Get the exact roll count before you buy." },
  { name: "How Much Does It Cost to Wallpaper a Room in 2026?", url: "/blog/how-much-does-it-cost-to-wallpaper-a-room.html", date: "2026-06-01", desc: "Wallpapering a room costs $300–$800 in materials and $300–$800 in labor. Full cost breakdown by wallpaper type and room size." },
  { name: "How Much Gravel Do I Need for a Garden Bed?", url: "/blog/how-much-gravel-for-garden-bed.html", date: "2026-05-31", desc: "Calculate bags or cubic yards for any garden bed. Covers depth guide, gravel types, landscape fabric, and bags vs. bulk cost comparison." },
  { name: "How Much Does a Gravel Driveway Cost in 2026?", url: "/blog/how-much-does-a-gravel-driveway-cost.html", date: "2026-05-31", desc: "A gravel driveway costs $300–$1,500 DIY or $1,000–$3,000 installed. Full cost breakdown by size, gravel type, and labor." },
  { name: "How Much Gravel Do I Need? Complete Homeowner Guide", url: "/blog/how-much-gravel-do-i-need.html", date: "2026-05-31", desc: "Calculate cubic yards and tons for driveways, paths, and garden beds. Includes depth guide, gravel types, and bags vs. bulk cost comparison." },
  { name: "Gravel vs. Mulch for Garden Beds: Which Should You Use?", url: "/blog/gravel-vs-mulch-for-garden-beds.html", date: "2026-05-31", desc: "Side-by-side comparison of gravel and mulch for drainage, weed suppression, cost, and plant types." },
  { name: "How to Build a Gravel Driveway: Step-by-Step Guide", url: "/blog/how-to-build-a-gravel-driveway.html", date: "2026-05-31", desc: "Materials, tools, base preparation, and gravel depth — everything you need to install a gravel driveway yourself." },
  { name: "How Much Does It Cost to Move in 2026? Complete Guide", url: "/blog/moving-cost-guide.html", date: "2026-05-01", desc: "Local moves average $800–$2,500. Cross-country runs $4,000–$10,000. Full breakdown by home size, distance, and service level." },
  { name: "How to Calculate Flooring for Any Room (Step-by-Step)", url: "/blog/how-to-calculate-flooring-for-a-room.html", date: "2026-05-01", desc: "Measure, add waste factor, convert to boxes. Works for LVP, hardwood, tile, and carpet." },
  { name: "How Much Mulch Do I Need? Complete Homeowner Guide", url: "/blog/how-much-mulch-do-i-need.html", date: "2026-05-01", desc: "The right depth, bags vs. bulk pricing, and the simple formula to calculate exactly how many bags to buy." },
  { name: "10 Home Renovations That Add the Most Value in 2026", url: "/blog/home-renovations-that-add-the-most-value.html", date: "2026-05-01", desc: "Based on the 2025/2026 Cost vs. Value Report — the 10 projects with the highest ROI, ranked and explained." },
  { name: "DIY vs. Hiring a Contractor: When to Do It Yourself", url: "/blog/diy-vs-hiring-a-contractor.html", date: "2026-05-01", desc: "Not every home project is worth DIYing. Here's how to decide — with cost comparisons for common projects." },
  { name: "How Much Does It Cost to Tile a Floor in 2026?", url: "/blog/how-much-does-it-cost-to-tile-a-floor.html", date: "2026-05-01", desc: "Tiling a floor costs $7–$25 per sq ft installed. Full breakdown by tile type, room size, and labor costs." },
  { name: "How Much Does a Bathroom Renovation Cost in 2026?", url: "/blog/how-much-does-a-bathroom-renovation-cost.html", date: "2026-05-01", desc: "A mid-range bathroom remodel costs $10,000–$25,000. Here's what drives the price and how to budget your project." },
  { name: "How Much Does It Cost to Paint a Room in 2026?", url: "/blog/how-much-does-it-cost-to-paint-a-room.html", date: "2026-05-01", desc: "The average cost to paint a room ranges from $380 to $790 when hiring a pro, or $80–$150 in materials if you DIY." },
];

// ── 프로젝트 목록 ────────────────────────────────────────────
const PROJECTS = [
  // Paint & Wall
  { name: "How to Paint a Room", url: "/projects/how-to-paint-a-room.html", cat: "paint", icon: "🖌️", desc: "Calculate materials, prep walls, prime, and paint — with step-by-step guidance and a built-in paint calculator." },
  { name: "How to Wallpaper a Room", url: "/projects/how-to-wallpaper-a-room.html", cat: "paint", icon: "🧱", desc: "Measure, order the right rolls, prep walls, and hang wallpaper — including pattern matching and corners." },
  // Flooring
  { name: "How to Install LVP Flooring", url: "/projects/how-to-install-lvp-flooring.html", cat: "flooring", icon: "🪵", desc: "Subfloor prep, acclimation, layout planning, click-lock installation, and transitions — full DIY guide." },
  { name: "How to Install Hardwood Flooring", url: "/projects/how-to-install-hardwood-flooring.html", cat: "flooring", icon: "🌲", desc: "Acclimation, nailing vs. gluing, layout, and finishing — everything for a professional hardwood install." },
  { name: "How to Install Carpet", url: "/projects/how-to-install-carpet.html", cat: "flooring", icon: "🟫", desc: "Tack strips, padding, cutting, stretching, and seaming — the complete carpet installation guide." },
  { name: "How to Install Carpet Tiles", url: "/projects/how-to-install-carpet-tiles.html", cat: "flooring", icon: "⬛", desc: "Layout planning, adhesive vs. peel-and-stick, cutting around obstacles, and finishing edges." },
  // Tile
  { name: "How to Tile a Floor", url: "/projects/how-to-tile-a-floor.html", cat: "tile", icon: "⬜", desc: "Substrate prep, layout, thinset, tile placement, grouting, and sealing — with a built-in tile calculator." },
  { name: "How to Install a Backsplash", url: "/projects/how-to-install-a-backsplash.html", cat: "tile", icon: "🍳", desc: "Planning, tile selection, adhesive, cutting around outlets, grouting, and sealing a kitchen backsplash." },
  { name: "How to Grout Tile", url: "/projects/how-to-grout-tile.html", cat: "tile", icon: "🪣", desc: "Mixing, applying, wiping, sealing, and fixing grout — the complete guide with common mistake fixes." },
  // Structural
  { name: "How to Install Drywall", url: "/projects/how-to-install-drywall.html", cat: "structural", icon: "🏗️", desc: "Hanging, taping, mudding, sanding, and priming drywall — with a material calculator built in." },
  { name: "How to Pour a Concrete Slab", url: "/projects/how-to-pour-a-concrete-slab.html", cat: "structural", icon: "⬛", desc: "Site prep, forming, mixing, pouring, finishing, and curing a concrete slab for patios, sheds, or walkways." },
  { name: "How to Install Insulation", url: "/projects/how-to-install-insulation.html", cat: "structural", icon: "🌡️", desc: "R-value guide, batt vs. blown-in, attic and wall installation, vapor barriers, and safety tips." },
  // Outdoor
  { name: "How to Build a Fence", url: "/projects/how-to-build-a-fence.html", cat: "outdoor", icon: "🪟", desc: "Layout, post setting, panel installation, and gates — with a fence calculator for posts and panels." },
  { name: "How to Build a Deck", url: "/projects/how-to-build-a-deck.html", cat: "outdoor", icon: "🏡", desc: "Planning, footings, framing, decking boards, railings, and finishing — full deck build guide." },
  { name: "How to Stain a Deck", url: "/projects/how-to-stain-a-deck.html", cat: "outdoor", icon: "🪵", desc: "Cleaning, sanding, choosing stain type, applying, and maintaining — with a built-in stain calculator." },
  { name: "How to Build a Raised Garden Bed", url: "/projects/how-to-build-a-raised-garden-bed.html", cat: "outdoor", icon: "🌱", desc: "Materials, dimensions, assembly, lining, filling with soil mix, and planting — complete build guide." },
  { name: "How to Lay Mulch", url: "/projects/how-to-lay-mulch.html", cat: "outdoor", icon: "🍂", desc: "Prep the bed, calculate depth, spread mulch, and maintain it — with a mulch calculator built in." },
  { name: "How to Plan a Garden", url: "/projects/how-to-plan-a-garden.html", cat: "outdoor", icon: "🌿", desc: "Site selection, layout, soil prep, plant spacing, and bed sizing — with area and soil calculators." },
  // Moving & Renovation
  { name: "How to Move House", url: "/projects/how-to-move-house.html", cat: "moving", icon: "🚚", desc: "Timeline, packing strategy, hiring movers vs. DIY, and cost estimates — the complete moving guide." },
  { name: "How to Plan a Home Renovation", url: "/projects/how-to-plan-a-home-renovation.html", cat: "moving", icon: "📋", desc: "Scope, budget, contractor vs. DIY, timeline, permits, and ROI — everything before you swing a hammer." },
];

// ── 헬퍼: 날짜 내림차순 정렬 ────────────────────────────────
function sortByDate(arr) {
  return [...arr].sort((a, b) => (b.date || '') > (a.date || '') ? 1 : -1);
}

// ── 메뉴 렌더링 ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {

  const recentBlogs = sortByDate(BLOGS).slice(0, 6);

  // ── PC 헤더: Home 제거, Projects 추가 ───────────────────────
  const header = `
  <header class="site-header">
    <div class="header-inner">
      <a href="/" class="logo">DIYCalc<span>Kit</span></a>
      <nav class="main-nav" id="mainNav">
        <ul class="nav-list">
          <li><a href="/tools/" class="nav-link">Tools</a></li>
          <li><a href="/blog/" class="nav-link">Blog</a></li>
          <li><a href="/projects/" class="nav-link">Projects</a></li>
          <li><a href="/about.html" class="nav-link">About</a></li>
        </ul>
      </nav>
      <button class="hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>`;

  // ── 모바일 네비: 드롭다운 유지 ──────────────────────────────
  const toolItems = TOOLS.map(t =>
    `<li><a href="${t.url}">${t.name}</a></li>`
  ).join('');
  const mobileBlogItems = sortByDate(BLOGS).map(b =>
    `<li><a href="${b.url}">${b.name}</a></li>`
  ).join('');
  const mobileProjectItems = PROJECTS.map(p =>
    `<li><a href="${p.url}">${p.name}</a></li>`
  ).join('');

  const mobileNav = `
  <nav class="mobile-nav" id="mobileNav">
    <ul class="nav-list">
      <li class="nav-has-dropdown">
        <button class="nav-link nav-btn" aria-expanded="false">Tools ▾</button>
        <ul class="nav-dropdown">
          <li><a href="/tools/" class="nav-dropdown-all">View All Tools →</a></li>
          ${toolItems}
        </ul>
      </li>
      <li class="nav-has-dropdown">
        <button class="nav-link nav-btn" aria-expanded="false">Blog ▾</button>
        <ul class="nav-dropdown">
          <li><a href="/blog/" class="nav-dropdown-all">View All Posts →</a></li>
          ${mobileBlogItems}
        </ul>
      </li>
      <li class="nav-has-dropdown">
        <button class="nav-link nav-btn" aria-expanded="false">Projects ▾</button>
        <ul class="nav-dropdown">
          <li><a href="/projects/" class="nav-dropdown-all">View All Projects →</a></li>
          ${mobileProjectItems}
        </ul>
      </li>
      <li><a href="/about.html" class="nav-link">About</a></li>
    </ul>
  </nav>
  <div class="nav-overlay" id="navOverlay"></div>`;

  const recentProjects = PROJECTS.slice(0, 6);

  const footer = `
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <a href="/" class="logo">DIYCalc<span>Kit</span></a>
        <p>Free home improvement calculators, step-by-step project guides, and cost breakdowns for every project.</p>
      </div>
      <div class="footer-links">
        <div class="footer-col">
          <h4>Tools</h4>
          <ul>
            ${TOOLS.slice(0, 6).map(t => `<li><a href="${t.url}">${t.name}</a></li>`).join('')}
            <li><a href="/tools/">View All Tools →</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Blog</h4>
          <ul>
            ${recentBlogs.map(b => `<li><a href="${b.url}">${b.name}</a></li>`).join('')}
            <li><a href="/blog/">View All Posts →</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Projects</h4>
          <ul>
            ${recentProjects.map(p => `<li><a href="${p.url}">${p.name}</a></li>`).join('')}
            <li><a href="/projects/">View All Projects →</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Site</h4>
          <ul>
            <li><a href="/tools/">Tools</a></li>
            <li><a href="/blog/">Blog</a></li>
            <li><a href="/projects/">Projects</a></li>
            <li><a href="/about.html">About</a></li>
            <li><a href="/privacy-policy.html">Privacy Policy</a></li>
            <li><a href="/contact.html">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© ${new Date().getFullYear()} DIYCalcKit. For informational purposes only.</p>
    </div>
  </footer>`;

  document.body.insertAdjacentHTML('afterbegin', header);
  document.querySelector('.site-header').insertAdjacentHTML('afterend', mobileNav);
  document.body.insertAdjacentHTML('beforeend', footer);

  const currentPath = window.location.pathname;

  // 블로그 카드 자동 렌더링 (최신순)
  const blogGrid = document.getElementById('blog-grid') || document.getElementById('blog-list');
  if (blogGrid && BLOGS.length > 0) {
    const sorted = sortByDate(BLOGS);
    const isMainPage = blogGrid.id === 'blog-grid' && (currentPath === '/' || currentPath === '/index.html');
    const list = isMainPage ? sorted.slice(0, 6) : sorted;
    blogGrid.innerHTML = list.map(b => {
      const dateStr = b.date ? new Date(b.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '';
      return `
      <a href="${b.url}" class="blog-card">
        <div class="blog-card-body">
          <h3>${b.name}</h3>
          ${b.desc ? `<p class="blog-card-desc">${b.desc}</p>` : ''}
        </div>
        ${dateStr ? `<div class="blog-card-footer"><time>${dateStr}</time></div>` : ''}
      </a>
    `;
    }).join('');
  }

  // 프로젝트 카드 자동 렌더링
  const projectGrid = document.getElementById('project-grid');
  if (projectGrid && PROJECTS.length > 0) {
    projectGrid.innerHTML = PROJECTS.map(p => `
      <a href="${p.url}" class="tool-card">
        <div class="tool-card-icon">${p.icon}</div>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <span class="tool-card-arrow">See guide →</span>
      </a>
    `).join('');
  }

  // active 링크
  document.querySelectorAll('a.nav-link').forEach(a => {
    const href = a.getAttribute('href');
    if (href === '/tools/' && currentPath.startsWith('/tools/')) a.classList.add('active');
    if (href === '/blog/' && currentPath.startsWith('/blog/')) a.classList.add('active');
    if (href === '/projects/' && currentPath.startsWith('/projects/')) a.classList.add('active');
    if (href === '/about.html' && currentPath === '/about.html') a.classList.add('active');
  });

  // 모바일 드롭다운
  document.querySelectorAll('.nav-has-dropdown').forEach(li => {
    const trigger = li.querySelector('.nav-btn');
    if (!trigger) return;
    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = li.classList.contains('open');
      document.querySelectorAll('.nav-has-dropdown').forEach(el => el.classList.remove('open'));
      if (!isOpen) {
        li.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      } else {
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  document.addEventListener('click', function () {
    document.querySelectorAll('.nav-has-dropdown').forEach(el => el.classList.remove('open'));
  });

  // 햄버거
  const hamburger = document.getElementById('hamburger');
  const mobileNavEl = document.getElementById('mobileNav');
  const overlay = document.getElementById('navOverlay');

  function openNav() {
    mobileNavEl.classList.add('nav-open');
    hamburger.classList.add('active');
    overlay.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    mobileNavEl.classList.remove('nav-open');
    hamburger.classList.remove('active');
    overlay.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', function () {
    mobileNavEl.classList.contains('nav-open') ? closeNav() : openNav();
  });

  overlay.addEventListener('click', closeNav);
});
