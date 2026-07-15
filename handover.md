# DIYCalcKit HANDOVER
**최종 업데이트: 2026-07-15 | 사이트: https://diycalckit.com | 레포: canghun13/diycalckit (main, GitHub Pages)**

새 채팅 시작 시: 이 파일을 업로드하고 "이거 보고 이어서 작업해"라고 말할 것.

---

## 작업 방식 (필수 준수)

1. **토큰 받으면 바로 실행**: clone → 수정 → 검증 → commit → push까지 확인 없이 직접 진행. revoke는 사용자가 알아서 함, 재촉하지 말 것.
2. **push 후 배포 상태 확인 필수**:
   ```bash
   curl -s -H "Authorization: token {TOKEN}" "https://api.github.com/repos/canghun13/diycalckit/actions/runs?per_page=2" | python3 -c "import json,sys; d=json.load(sys.stdin); [print(r['status'],r['conclusion'],r['head_commit']['message'][:60]) for r in d['workflow_runs']]"
   ```
   짧은 시간에 연속 push하면 배포 충돌 실패할 수 있음 → 실패 시 시간 두고 `git commit --allow-empty -m "re-deploy" && git push`로 재트리거.
3. bash_tool 네트워크에 diycalckit.com 없음 — 라이브 사이트 확인은 GitHub API로 레포 파일 조회하거나 사용자에게 스크린샷 요청.
4. **신규 콘텐츠 원칙**:
   - 만들기 전 기존 목록과 중복 확인 필수
   - 웹 검색으로 키워드 경쟁강도 확인. "cost guide"류 광범위 비용 키워드(exterior painting cost, cabinet cost, concrete patio cost, moving cost 등)는 Angi/Homewyse/HomeGuide/HomeAdvisor/Forbes/moveBuddha가 장악 → 피할 것. "how much X do I need" 수량계산형은 경쟁 약해서 승산 있음
   - 후보 나열하지 말고 바로 결정해서 진행
   - 신규 페이지 만들면 nav.js(TOOLS/BLOGS), blog/index.html(BLOG_POSTS), tools/index.html(TOOLS_DATA, 신규카테고리면 CATEGORY_LABELS+필터버튼), index.html(카드+개수), llms.txt, sitemap.xml **전부 같이 업데이트**
   - 새 글 ↔ 관련 툴 양방향 링크 걸 것
5. **신규 계산기(툴)는 반드시 실제 작동 JS 로직 + Puppeteer로 클릭 테스트 후 push** (아래 사고 이력 참고). alert() 뜨면 headless가 무한대기하니 `page.on('dialog', d=>d.dismiss())` 필수.
6. **사용자는 영어 모름** — 확인 요청 시 "이건 UI 새로 생겨서 봐야 함 / 이건 텍스트만 바뀐 거라 안 봐도 됨"으로 명확히 구분해서 알려줄 것.
7. 구조적으로 큰 변경(신규 카테고리 등)은 실행 전 제안, 단순 보강/버그수정은 바로 진행.

## 검증 체크리스트 (매 push 전)
- HTML 태그 무결성 (Python HTMLParser로 open/close 짝 확인)
- JSON-LD 스키마 `json.loads()` 파싱 확인
- 내부링크(`href="/tools|blog|projects/..."`) 실제 파일 존재 확인
- sitemap.xml `xml.etree.ElementTree.parse()` 유효성
- nav.js / 인라인 JS `node --check` 문법 확인

## 사고 이력 (재발 방지)
- **31개 툴 중 17개가 원본부터 계산 로직(`<script>`) 자체가 없어서 통째로 고장 상태였음** (carpet, concrete, contractor-cost, deck-size, drywall, fence, flooring, garden-area, hardwood-floor, home-renovation-roi, lawn-seed, packing-box, renovation-cost-estimator, room-area, soil, stain, storage-unit-size). 전부 수정+검증 완료.
- lawn-seed-calculator: 드롭다운/페이지표/블로그글 수치가 서로 안 맞았던 적 있음 → 여러 곳에 같은 수치 쓸 땐 항상 상호 대조.
- 벽지 블로그 3개, primer 블로그 3개에서 `<div class="blog-content">` 래퍼/`</div>` 누락으로 CSS 안 먹던 버그 있었음, 수정 완료.
- FAQ 리치 스니펫은 2026-05-07부로 Google이 완전 폐지함 — FAQ 콘텐츠는 계속 넣되 "리치스니펫용"이라고 생각하지 말 것, Rich Results Test로 검증할 필요 없음.

## 현재 콘텐츠 (2026-07-13)
- 툴 34개 (카테고리: Roofing & Insulation[Gutter Calculator 추가로 3개], Paint & Wall, Flooring, Space & Area, Renovation Cost, Garden & Outdoor, Moving) — 전 툴 FAQ 있음
- 블로그 46개, 프로젝트 20개(전부 보강 완료: 시간/비용/체크리스트/흔한실수 섹션 포함)
- 최근 트렌드: 평균 게재순위 85~88위(6월말) → 37~46위(7월초)로 개선 중. 클릭 하루 1~2건 발생 시작. 색인 안 된 페이지(발견됨19/크롤링됨17)는 계속 지켜봐야 함.

## GSC 분석 워크플로우
1. Coverage 리포트: 색인 상태 추이만 체크. "리디렉션 포함 페이지"는 **무시 지시받음**.
2. Performance 리포트(검색어/페이지/기기/국가/차트 CSV): 노출은 있는데 클릭 0인 페이지(특히 20위 이내)는 CTR 타이틀 개선 후보. 999개 검색어를 기존 콘텐츠로 필터링해 안 걸리는 것 중 신규 기회 탐색, 웹검색으로 경쟁 확인 후 결정.

## 스킵 확정 (재검토 불필요)
- moving cost 관련 전부 (이사업체 대형사이트 장악)
- labor/hourly rate 계산기 클러스터 (순위 65~96위, 경쟁 심함)
- 광범위 "cost guide"류 키워드 전반
- GSC "리디렉션 포함 페이지" 3개 (사용자 지시로 무시)
- AC/HVAC BTU 계산기 (대형 HVAC 브랜드 + 리드젠 사이트 장악)
- Paver calculator / retaining wall calculator (전용 계산기 사이트 다수, 성숙 니치)
- 베이스보드/트림(몰딩) 계산기 — RemodelCalculators, CalcNimbus, ConstructionCalc, BuildItCalc, HomeDecorCalc, Turn2Engineering, Inch Calculator, DIYProject.ai 등 전용 계산기 사이트 8개+ 확인, 완전 포화 (2026-07-15)
- Sod(잔디 롤) 계산기 — Omni Calculator, Inch Calculator 포함 잔디농장 자체 계산기까지 다수, 포화 (2026-07-15)
- 에폭시/차고 바닥 코팅 계산기 — RemodelCalculators, HowMuchStuff, Pourla, best-calculators.com 등 전용 계산기 다수, 포화 (2026-07-15)
- 외벽 페인트(exterior paint) 계산기 — Behr/HomeAdvisor 등 대형 브랜드 + RemodelCalculators/PaintCalculation.com 전용 계산기, 포화 (2026-07-15)
- 조경용 리버락/랜드스케이프 락 계산기 — Omni Calculator, HomeAdvisor, Inch Calculator 등 river-rock 전용 계산기 7개+ 확인, 포화 (2026-07-15)

## 2026-07-13 작업 (GSC 2026-07-13 export + GA 6/15-7/12 기준)
- **Coverage**: 색인 39(발견19+크롤링17+리디렉션3) vs 완료 55, 6/13부터 6/30(데이터 마지막날)까지 정체 — sitemap.xml(105) = 실제 html 파일 수(105) 정확히 일치, 고아 페이지 없음. 코드로 고칠 이슈 아니라 시간+백링크로 자연 해소 대기, 다음 리포트에서 재확인.
- **Performance 999개 검색어 전수 필터링** → 기존 33툴/44블로그/20프로젝트 키워드와 안 겹치는 후보 34개 추출, 전부 노출 2~26회의 초저볼륨 롱테일(외국어 쿼리 포함)이라 신규 콘텐츠 임계치 미달 → **이번 라운드 신규 콘텐츠 없음**. ("deck mud calculator" 23회, "job/contract rate" 계열은 이미 스킵 확정된 labor-rate 클러스터와 동일 카테고리라 재확인 없이 스킵)
- **CTR 개선 실행 완료**: `blog/home-renovations-that-add-the-most-value.html` — 순위 15.3위/노출 105회인데 클릭 0 (같은 순위대 정상 CTR이면 기대클릭 2~3인데 0). title/meta를 숫자 훅 강화("Garage Doors Return 194%")로 교체. H1·JSON-LD headline은 유지(구조 변경 아님, 텍스트만 변경이라 사용자 확인 불필요).
- **CTR 개선 실행 완료(2차)**: gravel-for-garden-bed(순위12.8/노출35), bathroom-renovation-cost(순위18.5/노출23) — "표본 작아서 보류" 판단했다가 사용자 지적으로 즉시 실행 전환. bulk vs bag 절약폭(gravel, ~60%)과 저예산 진입점($3K, bathroom) 숫자훅으로 title/meta 교체 완료.
- **의도 불일치 확인, 액션 없음**: "1 gallon paint price" 계열 쿼리(총 노출 ~100, 순위 1위, 클릭 0)는 paint-calculator.html(수량 계산기)이 랭크하고 있는데 실제 유저 의도는 가격 정보 — 이미 `how-much-does-a-gallon-of-paint-cost.html` 블로그로 내부링크 연결되어 있어 인프라는 정상. 이건 구글 알고리즘이 시간 지나며 올바른 페이지로 재배정할 문제라 지금 손댈 게 없음.
- 사이트 트래픽 전반이 아직 매우 작음(기간 내 총 클릭 10건, 모바일 CTR 0.41%/데스크톱 0.07%) — 이번 라운드는 신규 제작보다 기존 자산 손실 방지(CTR) 위주로 판단.

## 2026-07-13 추가 작업 (같은 세션, 사용자 재요청)
- 사용자가 "정말 신규 안 해도 되냐" 재확인 요청 → GSC 기존 노출 쿼리 필터링 방식은 "이미 어느 정도 걸리는" 쿼리만 잡아서 완전 신규 카테고리는 원천적으로 못 찾는다는 한계 재확인. 경쟁사(Omni Calculator, Home Project Calculator, HowMuchStuff 등) 카테고리 대비 갭 웹서치로 재탐색.
- **AC/HVAC 사이즈 계산기(BTU calculator)**: 검색해봤지만 Carrier/American Standard 등 대형 HVAC 브랜드 + This Old House/HomeGuide 같은 대형 리드젠 사이트가 완전 장악 — moving-cost급 경쟁, 스킵.
- **Paver calculator / retaining wall calculator**: Omni Calculator, concrete-calculator.org 등 이미 전용 계산기 사이트가 다수 존재, 성숙한 니치라 스킵.
- **Gutter calculator**: 검색 결과 대부분 소규모 계산기 사이트(SMACNA 전문가용 제외)라 기존에 성공한 fence/deck/concrete와 비슷한 "중경쟁" 등급 판단 → **신규 툴로 결정, 제작 완료**.
  - `/tools/gutter-calculator.html` 추가 (Roofing & Insulation 카테고리 확장, 3번째 툴)
  - 입력: 집 길이/너비, 지붕형태(gable/hip), 층수, 자재(vinyl/aluminum/steel/copper) → 출력: 거터 길이(ft), 다운스파우트 개수, 행어 개수, 비용 견적
  - nav.js, tools/index.html(TOOLS_DATA), index.html(카드+개수 33→34), llms.txt, sitemap.xml 전부 업데이트 완료
  - **주의**: 이번 컨테이너 네트워크에서 Puppeteer Chrome 다운로드가 막혀있어(googleapis.com 미허용) 실제 headless 브라우저 클릭 테스트를 못 함. 대신 계산 로직을 Node로 직접 추출해 여러 입력값 조합으로 수동 검증(결과값이 실제 업계 가격대와 일치하는지 확인)함. **다음 세션에서 가능하면 실제 페이지를 브라우저로 한번 열어서 버튼 클릭 확인 권장.**
  - target keyword: "gutter calculator", "how much gutter do i need", "how many feet of gutter do i need"
  - (추가) 짝꿍 블로그 `/blog/how-much-gutter-do-i-need.html` 누락됐던 걸 사용자가 지적해서 바로 추가함 — 앞으로 신규 툴 만들 때 블로그 짝꿍 빠뜨리지 말 것. 툴↔블로그 양방향 링크, nav.js/blog index/llms.txt/sitemap 전부 반영 완료.

## 2026-07-15 작업 (GSC 2026-07-15 export, 지난 3개월 기준)
- **Coverage**: 색인 45(직전 39) vs 완료 63(직전 55), 6/30→7/1 사이 개선폭 있었고 이후 정체. sitemap.xml=107=실제 html 파일 수, 고아 페이지 없음. 계속 자연 해소 대기 상태, 이번 라운드 조치 없음.
- **Performance 999개 검색어 전수 필터링** (기존 34툴/47블로그/21프로젝트 슬러그와 토큰 매칭) → 미매칭 70개 중 순수 신규 기회는 0개. 전부 (a) 기존 스킵 확정된 labor/moving-cost 클러스터, (b) 외국어 쿼리(네덜란드어 타일 검색 등), (c) 노출 1~5회 초저볼륨 롱테일. 총 클릭 여전히 10건(3개월 누적) 수준, 트래픽 절대량 작음.
- **신규 콘텐츠 후보 5개 웹검색 경쟁강도 확인 → 전부 스킵 결정** (아래 스킵 확정 리스트에 반영):
  1. 베이스보드/트림 계산기 — 전용 계산기 사이트 8개+ 확인 (완전 포화)
  2. Sod(잔디) 계산기 — Omni/Inch Calculator + 잔디농장 자체 계산기 다수
  3. 에폭시/차고바닥 코팅 계산기 — 전용 계산기 4개+ 확인
  4. 외벽 페인트 계산기 — Behr/HomeAdvisor 대형 브랜드 장악
  5. 리버락/랜드스케이프 락 계산기 — 전용 계산기 7개+ 확인 (기존 gravel-calculator와도 주제 겹침)
  - 결론: DIY 계산기 니치 전반이 "calculator farm" 사이트(RemodelCalculators, CalcNimbus, HowMuchStuff, best-calculators.com, ConstructionCalc, Turn2Engineering 등)로 급격히 포화됨. gutter-calculator(2026-07-13 추가) 정도의 "중경쟁" 니치를 다시 찾기 어려운 상황 — 다음 세션에서도 신규 툴 후보는 반드시 5개 이상 사이트 검색으로 재확인 후 결정할 것.
- **CTR 개선 실행 완료**: 0클릭 + 순위 30위 이내 페이지 중 신규 케이스 2건 title/meta 교체
  - `blog/how-much-primer-do-i-need.html` (노출117/순위24.6/클릭0) — 제목에 "1 Gallon Covers ~400 Sq Ft" 수치 훅 추가
  - `tools/fence-calculator.html` (노출115/순위21.1/클릭0) — "in Seconds" + 목재/비닐/체인링크 펜스 대응 명시로 설명 강화
  - `blog/how-much-does-it-cost-to-paint-a-room.html` (노출367/순위27.5/클릭0, 사이트 내 최대 미전환 노출 페이지)는 이미 07-13에 가격훅 title 적용된 상태라 추가 수정 보류 — 순위 27위대는 CTR 기대치 자체가 낮아(1~2%) 표본 변동 가능성 있음, 다음 리포트에서 재확인.
  - H1·JSON-LD headline 유지, title/meta 텍스트만 변경이라 사용자 확인 불필요.
  - home-renovations-that-add-the-most-value / gravel-for-garden-bed / bathroom-renovation-cost (07-13 수정분)는 GSC 데이터 반영 지연 감안해 이번 라운드 재판단 보류.

## 2026-07-15 추가 작업 (같은 세션, 사용자가 "색인 안된 페이지 보강" 재요청)
- **비색인 페이지 특정**: GSC Coverage export는 URL 목록을 안 주기 때문에, sitemap.xml 107개 URL과 Performance 리포트에 노출이 1건이라도 있는 67개 URL을 대조해 **3개월간 노출 0인 41개 URL**을 추출 (Coverage의 발견됨14+크롤링됨28=42와 거의 일치 — 사실상 이게 비색인 목록).
- **원인 1 (확인, 조치완료) — 계산기 고장 이력**: 비색인 tools 중 garden-area-calculator, home-renovation-roi-calculator, renovation-cost-estimator, storage-unit-size-calculator 4개는 내부링크 8~18개로 충분한데도 안 걸림 → git log 확인 결과 **2026-05-18 추가 후 2026-07-06까지 7주간 계산 로직(JS) 자체가 고장 상태**였음(기존 사고 이력의 "17개 툴 고장" 사건). Google이 그 기간에 크롤링하며 저품질로 학습했을 가능성. → sitemap.xml에 lastmod 추가해 07-06 수정일을 명시적으로 신호 보냄(아래 조치 참고).
- **원인 2 (확인, 조치완료) — sitemap.xml에 lastmod 전무**: 107개 URL 전부 `<lastmod>` 태그가 없었고 changefreq도 103/107이 "yearly"로 박혀있어 Google에 "이 페이지 거의 안 바뀜" 신호를 주고 있었음. → git 최종 커밋일 기준으로 전체 lastmod 추가, tools/* changefreq를 yearly→monthly로, index/tools/blog 허브 페이지는 weekly로 조정.
- **원인 3 (확인, 조치완료) — 비색인 blog/project 페이지는 내부링크가 평균 2.8개로 인덱싱된 페이지(평균 4.86개)보다 뚜렷이 적음**: 18개 페이지가 인바운드 링크 2개 이하(사실상 페어 계산기 1개 + nav 검색 정도). 근본 원인은 아래 원인4.
- **원인 4 (가장 크고 확인, 조치완료) — blog/index.html, tools/index.html, projects/index.html 3개 허브 페이지의 카드 목록이 전부 순수 JS 렌더링**: `BLOG_POSTS`/`TOOLS_DATA`/`PROJECTS` 배열을 JS가 `innerHTML`로 주입하는 구조라 **원본 HTML에는 개별 글/툴 링크가 단 하나도 없었음**(각 파일에 `<a href>`가 딱 1개, 그것도 템플릿 리터럴 안). Googlebot은 1차 크롤링(HTML raw fetch)에서 이 페이지들의 링크를 전혀 못 보고, JS 렌더링 큐(2차 웨이브, 수일~수주 소요)를 기다려야만 개별 페이지를 이 허브를 통해 발견 가능 → 신규/약한링크 페이지의 지연 색인 원인.
  - **조치**: 3개 허브 페이지 전부에 `<noscript><ul><li><a href=...>` 정적 링크 목록 추가(blog 46개, tools 34개, projects 20개) — 기존 검색/필터 JS 기능은 전혀 안 건드림, raw HTML에 크롤링 가능한 링크 즉시 확보.
  - **부수 발견**: tools/index.html의 `TOOLS_DATA` 배열에 `paint-coverage-calculator`, `window-treatment-calculator` 2개가 통째로 빠져있었음(nav.js와 index.html 홈페이지에는 있었으나 tools 허브 페이지에는 없었음) → 추가 완료, Paint & Wallpaper 카테고리로 분류. tools/index.html의 "23 free calculators" stale 카피도 "34 free calculators"로 수정.
- 다음 GSC 리포트에서 이번 lastmod+noscript 조치 이후 42개 비색인 페이지 수가 줄었는지 최우선으로 확인할 것.
