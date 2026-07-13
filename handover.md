# DIYCalcKit HANDOVER
**최종 업데이트: 2026-07-13 | 사이트: https://diycalckit.com | 레포: canghun13/diycalckit (main, GitHub Pages)**

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

## 현재 콘텐츠 (2026-07-11)
- 툴 33개 (카테고리: Roofing & Insulation[신규], Paint & Wall, Flooring, Space & Area, Renovation Cost, Garden & Outdoor, Moving) — 전 툴 FAQ 있음
- 블로그 44개, 프로젝트 20개(전부 보강 완료: 시간/비용/체크리스트/흔한실수 섹션 포함)
- 최근 트렌드: 평균 게재순위 85~88위(6월말) → 37~46위(7월초)로 개선 중. 클릭 하루 1~2건 발생 시작. 색인 안 된 페이지(발견됨19/크롤링됨17)는 계속 지켜봐야 함.

## GSC 분석 워크플로우
1. Coverage 리포트: 색인 상태 추이만 체크. "리디렉션 포함 페이지"는 **무시 지시받음**.
2. Performance 리포트(검색어/페이지/기기/국가/차트 CSV): 노출은 있는데 클릭 0인 페이지(특히 20위 이내)는 CTR 타이틀 개선 후보. 999개 검색어를 기존 콘텐츠로 필터링해 안 걸리는 것 중 신규 기회 탐색, 웹검색으로 경쟁 확인 후 결정.

## 스킵 확정 (재검토 불필요)
- moving cost 관련 전부 (이사업체 대형사이트 장악)
- labor/hourly rate 계산기 클러스터 (순위 65~96위, 경쟁 심함)
- 광범위 "cost guide"류 키워드 전반
- GSC "리디렉션 포함 페이지" 3개 (사용자 지시로 무시)

## 2026-07-13 작업 (GSC 2026-07-13 export + GA 6/15-7/12 기준)
- **Coverage**: 색인 39(발견19+크롤링17+리디렉션3) vs 완료 55, 6/13부터 6/30(데이터 마지막날)까지 정체 — sitemap.xml(105) = 실제 html 파일 수(105) 정확히 일치, 고아 페이지 없음. 코드로 고칠 이슈 아니라 시간+백링크로 자연 해소 대기, 다음 리포트에서 재확인.
- **Performance 999개 검색어 전수 필터링** → 기존 33툴/44블로그/20프로젝트 키워드와 안 겹치는 후보 34개 추출, 전부 노출 2~26회의 초저볼륨 롱테일(외국어 쿼리 포함)이라 신규 콘텐츠 임계치 미달 → **이번 라운드 신규 콘텐츠 없음**. ("deck mud calculator" 23회, "job/contract rate" 계열은 이미 스킵 확정된 labor-rate 클러스터와 동일 카테고리라 재확인 없이 스킵)
- **CTR 개선 실행 완료**: `blog/home-renovations-that-add-the-most-value.html` — 순위 15.3위/노출 105회인데 클릭 0 (같은 순위대 정상 CTR이면 기대클릭 2~3인데 0). title/meta를 숫자 훅 강화("Garage Doors Return 194%")로 교체. H1·JSON-LD headline은 유지(구조 변경 아님, 텍스트만 변경이라 사용자 확인 불필요).
- **CTR 관찰만(액션 보류)**: gravel-for-garden-bed(순위12.8/노출35), bathroom-renovation-cost(순위18.5/노출23) — 표본이 너무 작아(기대클릭 ~1건) 노이즈일 가능성 높음. 다음 GSC export에서 데이터 누적되면 재검토.
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
