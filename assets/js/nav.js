/* ============================================================
   DIYCalcKit — nav.js
   헤더/푸터/GA 자동 삽입
   툴 또는 블로그 추가 시 아래 배열만 수정하면 됨
   ============================================================ */

// ── GA ──────────────────────────────────────────────────────
// GA_ID는 Google Analytics 연결 후 교체
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

// ── 툴 목록 (추가 시 여기만 수정) ───────────────────────────
const TOOLS = [
  // 페인트 / 도배
  { name: "Paint Calculator", url: "/tools/paint-calculator.html" },
  { name: "Wallpaper Calculator", url: "/tools/wallpaper-calculator.html" },
  { name: "Primer Calculator", url: "/tools/primer-calculator.html" },
  // 바닥재
  { name: "Flooring Calculator", url: "/tools/flooring-calculator.html" },
  { name: "Tile Calculator", url: "/tools/tile-calculator.html" },
  { name: "Carpet Calculator", url: "/tools/carpet-calculator.html" },
  { name: "Hardwood Floor Calculator", url: "/tools/hardwood-floor-calculator.html" },
  // 공간 / 면적
  { name: "Room Area Calculator", url: "/tools/room-area-calculator.html" },
  { name: "Square Footage Calculator", url: "/tools/square-footage-calculator.html" },
  { name: "Drywall Calculator", url: "/tools/drywall-calculator.html" },
  { name: "Concrete Calculator", url: "/tools/concrete-calculator.html" },
  // 비용
  { name: "Renovation Cost Estimator", url: "/tools/renovation-cost-estimator.html" },
  { name: "Contractor Cost Calculator", url: "/tools/contractor-cost-calculator.html" },
  { name: "Home Renovation ROI Calculator", url: "/tools/home-renovation-roi-calculator.html" },
  // 정원 / 야외
  { name: "Fence Calculator", url: "/tools/fence-calculator.html" },
  { name: "Deck Size Calculator", url: "/tools/deck-size-calculator.html" },
  { name: "Garden Area Calculator", url: "/tools/garden-area-calculator.html" },
  { name: "Mulch Calculator", url: "/tools/mulch-calculator.html" },
  { name: "Gravel Calculator", url: "/tools/gravel-calculator.html" },
  { name: "Lawn Seed Calculator", url: "/tools/lawn-seed-calculator.html" },
  // 이사
  { name: "Moving Cost Calculator", url: "/tools/moving-cost-calculator.html" },
  { name: "Storage Unit Size Calculator", url: "/tools/storage-unit-size-calculator.html" },
  { name: "Packing Box Calculator", url: "/tools/packing-box-calculator.html" },
];

// ── 블로그 목록 (추가 시 여기만 수정) ──────────────────────
const BLOGS = [
  { name: "How Much Does It Cost to Paint a Room in 2026?", url: "/blog/how-much-does-it-cost-to-paint-a-room.html", date: "2026-05-01", desc: "The average cost ranges from $380 to $790 when hiring a pro, or $80–$150 in materials if you DIY." },
  { name: "How Much Does a Bathroom Renovation Cost in 2026?", url: "/blog/how-much-does-a-bathroom-renovation-cost.html", date: "2026-05-01", desc: "A mid-range bathroom remodel costs $10,000–$25,000. Here's what drives the price." },
  { name: "How Much Does It Cost to Tile a Floor in 2026?", url: "/blog/how-much-does-it-cost-to-tile-a-floor.html", date: "2026-05-01", desc: "Tiling a floor costs $7–$25 per sq ft installed. Full breakdown by tile type and labor." },
  { name: "DIY vs. Hiring a Contractor: When to Do It Yourself", url: "/blog/diy-vs-hiring-a-contractor.html", date: "2026-05-01", desc: "How to decide when to hire a contractor and when to tackle it yourself — with cost comparisons." },
  { name: "10 Home Renovations That Add the Most Value in 2026", url: "/blog/home-renovations-that-add-the-most-value.html", date: "2026-05-01", desc: "Based on the 2025/2026 Cost vs. Value Report — the 10 projects with the highest ROI." },
  { name: "How Much Mulch Do I Need? Complete Homeowner Guide", url: "/blog/how-much-mulch-do-i-need.html", date: "2026-05-01", desc: "The right depth, bags vs. bulk pricing, and the simple formula to calculate how many bags to buy." },
  { name: "How to Calculate Flooring for Any Room (Step-by-Step)", url: "/blog/how-to-calculate-flooring-for-a-room.html", date: "2026-05-01", desc: "Measure, add waste factor, convert to boxes. Works for LVP, hardwood, tile, and carpet." },
  { name: "How Much Does It Cost to Move in 2026? Complete Guide", url: "/blog/moving-cost-guide.html", date: "2026-05-01", desc: "Local moves average $800–$2,500. Cross-country runs $4,000–$10,000. Full breakdown." },
  { name: "How Much Gravel Do I Need? Complete Homeowner Guide", url: "/blog/how-much-gravel-do-i-need.html", date: "2026-05-31", desc: "Calculate cubic yards and tons of gravel for driveways, paths, and garden beds. Includes depth guide, gravel types, and bags vs. bulk cost comparison." },
  { name: "How Much Does a Gravel Driveway Cost in 2026?", url: "/blog/how-much-does-a-gravel-driveway-cost.html", date: "2026-05-31", desc: "A gravel driveway costs $300–$1,500 DIY or $1,000–$3,000 installed. Full cost breakdown by driveway size, gravel type, and labor." },
  { name: "How Much Gravel Do I Need for a Garden Bed?", url: "/blog/how-much-gravel-for-garden-bed.html", date: "2026-05-31", desc: "Calculate bags or cubic yards of gravel for any garden bed. Covers depth, gravel types, landscape fabric, and bags vs. bulk cost comparison." },
];

// ── 메뉴 렌더링 ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {

  const toolItems = TOOLS.map(t =>
    `<li><a href="${t.url}">${t.name}</a></li>`
  ).join('');

  const blogItems = BLOGS.map(b =>
    `<li><a href="${b.url}">${b.name}</a></li>`
  ).join('');

  const header = `
  <header class="site-header">
    <div class="header-inner">
      <a href="/" class="logo">DIYCalc<span>Kit</span></a>
      <nav class="main-nav" id="mainNav">
        <ul class="nav-list">
          <li><a href="/" class="nav-link">Home</a></li>
          <li class="nav-has-dropdown">
            <button class="nav-link nav-btn" aria-expanded="false">Tools ▾</button>
            <ul class="nav-dropdown">
              ${toolItems || '<li class="nav-empty">Coming soon</li>'}
            </ul>
          </li>
          <li class="nav-has-dropdown">
            <button class="nav-link nav-btn" aria-expanded="false">Blog ▾</button>
            <ul class="nav-dropdown nav-dropdown--right">
              <li><a href="/blog/" class="nav-dropdown-all">View All Posts →</a></li>
              ${blogItems || '<li class="nav-empty">Coming soon</li>'}
            </ul>
          </li>
          <li><a href="/about.html" class="nav-link">About</a></li>
        </ul>
      </nav>
      <button class="hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>`;

  const mobileNav = `
  <nav class="mobile-nav" id="mobileNav">
    <ul class="nav-list">
      <li><a href="/" class="nav-link">Home</a></li>
      <li class="nav-has-dropdown">
        <button class="nav-link nav-btn" aria-expanded="false">Tools ▾</button>
        <ul class="nav-dropdown">
          ${toolItems || '<li class="nav-empty">Coming soon</li>'}
        </ul>
      </li>
      <li class="nav-has-dropdown">
        <button class="nav-link nav-btn" aria-expanded="false">Blog ▾</button>
        <ul class="nav-dropdown">
          <li><a href="/blog/" class="nav-dropdown-all">View All Posts →</a></li>
          ${blogItems || '<li class="nav-empty">Coming soon</li>'}
        </ul>
      </li>
      <li><a href="/about.html" class="nav-link">About</a></li>
    </ul>
  </nav>
  <div class="nav-overlay" id="navOverlay"></div>`;

  const footer = `
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <a href="/" class="logo">DIYCalc<span>Kit</span></a>
        <p>Free home improvement calculators for every project — paint, flooring, renovation, and more.</p>
      </div>
      <div class="footer-links">
        <div class="footer-col">
          <h4>Tools</h4>
          <ul>
            ${TOOLS.slice(0, 6).map(t => `<li><a href="${t.url}">${t.name}</a></li>`).join('') || '<li>Coming soon</li>'}
          </ul>
        </div>
        <div class="footer-col">
          <h4>Blog</h4>
          <ul>
            ${[...BLOGS].sort((a,b) => (b.date||'') > (a.date||'') ? 1 : -1).slice(0, 6).map(b => `<li><a href="${b.url}">${b.name}</a></li>`).join('') || '<li>Coming soon</li>'}
            <li><a href="/blog/">View All Posts →</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Site</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/blog/">Blog</a></li>
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

  // 삽입
  document.body.insertAdjacentHTML('afterbegin', header);
  document.querySelector('.site-header').insertAdjacentHTML('afterend', mobileNav);
  document.body.insertAdjacentHTML('beforeend', footer);

  const currentPath = window.location.pathname;

  // 블로그 카드 자동 렌더링
  const blogGrid = document.getElementById('blog-grid') || document.getElementById('blog-list');
  if (blogGrid && BLOGS.length > 0) {
    const sorted = [...BLOGS].sort((a, b) => (b.date || '') > (a.date || '') ? 1 : -1);
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

  // 현재 페이지 active
  document.querySelectorAll('a.nav-link').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPath || (href === '/' && (currentPath === '/' || currentPath === '/index.html'))) {
      a.classList.add('active');
    }
  });

  document.querySelectorAll('.nav-has-dropdown').forEach(li => {
    const hasActiveChild = Array.from(li.querySelectorAll('.nav-dropdown a')).some(
      a => a.getAttribute('href') === currentPath
    );
    if (hasActiveChild) {
      const btn = li.querySelector('.nav-btn');
      if (btn) btn.classList.add('active');
    }
  });

  document.querySelectorAll('.nav-dropdown a').forEach(a => {
    if (a.getAttribute('href') === currentPath) a.classList.add('active');
  });

  // 드롭다운 토글
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
