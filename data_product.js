// =============================================
// data_product.js
// 제품 카테고리 데이터
// 항목 추가 시 id는 고유한 숫자로 지정
// =============================================

const DATA_product = [
  {id:27, title:"SP4000", category:"제품 모델", models:["A&ultima"], date:"2026.05.19", author:"Ellie", authorInitial:"E",
   credits:{PM:"Jay", PL:"Patrick, Kenny", UX:"Luna", UI:"Luna"},
   desc:"SP3000의 후속 A&ultima 플래그십 DAP. Octa DAC, Full Open Android, High Driving Mode 탑재.",
   body:`■■ 1. Octa DAC 구조

SP3000의 Hexa DAC 구조를 업그레이드해 Octa DAC 구조를 적용한 모델입니다.

- SP3000은 디지털(AK4191EQ) 2개 + 아날로그(AK4499EX) 4개를 Dual & Dual 구조로 연결
- SP4000은 AK4191EQ x4 & AK4499EX x4로 구성된 Real Quad DAC 구조로 업그레이드
- 4개의 DAC를 동시에 구동해 신호 처리 성능 향상 및 압도적인 사운드 구현

■ SP3000 vs SP4000 DAC 구조 비교

| 항목 | SP3000 (HEXA DAC) | SP4000 (OCTA DAC) |
| --- | --- | --- |
| 구성 | Dual & Dual | Real Quad |
| DAC | AK4191EQ x2 + AK4499EX x4 | AK4191EQ x4 + AK4499EX x4 |
| PCM | 32bit/768kHz | 32bit/1536kHz |
| DSD | DSD512 | DSD1024 |
| BAL Output | 6.3Vrms | 8Vrms |


■■ 2. High Driving Mode

SP4000만의 독자 기술로, OPAMP를 병렬 구조로 추가 적용해 구동 범위를 수평으로 확장하는 방식입니다.

- 기존 KANN 시리즈의 단순 전압 상승(수직 증가) 방식과 달리, OPAMP 2개를 병렬로 운용 (2륜 / 4륜 개념)
- 출력 상승 시 동반되는 SNR 저하 및 노이즈 상승을 억제
- 소리의 밀도와 디테일 극대화
- 설정에서 On / Off 전환 가능. Normal Mode 대비 확실한 사운드 퀄리티 차이 제공
- High Driving Mode 사용 시 배터리 소모 증가


■■ 3. Full Open Android

시장의 지속적인 요구에 따라 SP4000에 Full Open Android를 탑재합니다.

- 기존 AK DAP는 정해진 특정 APP만 설치 가능했으나, SP4000은 스마트폰처럼 자유로운 APP 설치 지원
- YouTube, 스트리밍 서비스 등 소비자 불만 사항 해소
- 경쟁사(FiiO, Shanling 등 중국 브랜드) 대비 동등 수준의 개방성 확보
`,
   tags:["SP4000","A&ultima","DAC","OctaDAC","HighDrivingMode","하이드라이빙모드","Android","FullOpenAndroid","풀안드로이드","안드로이드"],
   files:[
     {label:"SP4000_사업계획서_0430.pdf", url:"files/SP4000_사업계획서_0430_수정.pdf"},
   ],
   links:[
     {label:"UX 시나리오 Figma", url:"https://www.figma.com/design/BWddwuTWmaWdqacRZFGrsa/UX_Crimson_Common?node-id=520-14833&t=4AetULsfsg8ocbzt-1"},
     {label:"UI Figma", url:"https://www.figma.com/design/CZdIQpzaGRVJOXF7ml8b7f/UI_Crimson_Common-Design-2.0-?node-id=28-54118&t=fRtVetOx6sLv1byy-1"},
   ],
   images:[
     {src:"images/SP4000/SP4000_thumb.png", alt:"SP4000 썸네일"},
     {src:"images/SP4000/SP4000_1.jpg", alt:"SP4000 전면"},
     {src:"images/SP4000/SP4000_2.jpg", alt:"SP4000 후면"},
     {src:"images/SP4000/SP4000_3.jpg", alt:"SP4000 퍼스펙티브"},
     {src:"images/SP4000/SP4000_4.jpg", alt:"SP4000 휠 디테일"},
   ]},
  {id:26, title:"SP4000T", category:"제품 모델", models:["A&ultima"], date:"2026.05.21", author:"Ellie", authorInitial:"E",
   credits:{PM:"Jay", PL:"Kane", UX:"Ellie", UI:"Luna"},
   desc:"A&ultima 라인의 플래그십 DAP.",
   body:`■■ 1. Tube Current

진공관 내부 플레이트 전압을 3단계로 조절해, 진공관 앰프 증폭률에 변화를 줍니다. Tube Mode 진공관을 아래 3가지 모드로 변경해 다양한 음색을 즐길 수 있습니다.

- Triode Mode : 자연스럽고 따뜻한 음색
- Pentode Mode : 힘있고, 단단한 음색
- Ultra Linear Mode : 전체적으로 균형잡힌 음색


■■ 2. USB 설정

PC 연결 시 MTP가 활성화되지 않는 경우, 사용자가 수동으로 USB 연결 방식을 선택할 수 있습니다.

■ Use USB for

| 옵션 | 설명 |
| --- | --- |
| MTP 연결하기 | PC와 수동으로 MTP 연결 |
| 충전하기 | 충전 전용 모드 |

- 노출값: MTP 연결하기, 충전하기 중 단일 선택
- USB 연결 시 알림 패널 노출. 탭 시 [USB 설정]으로 이동.


■■ 3. 배터리 보호 모드

기존 배터리 보호 모드는 85% 단일 고정값만 제공했으나, SP4000T에서는 사용자가 충전 상한값을 직접 선택할 수 있도록 개선합니다. (80 / 85 / 90 / 95%)


■■ 4. 컬렉션

→ UX 히스토리 [Favorite에서 Collection으로(기능 확장 재정의)] 참고`,
   tags:["SP4000T","A&ultima","Tube","TubeCurrent","USB","USB설정","배터리보호모드","Collection","컬렉션","Favorite","즐겨찾기"],
   files:[],
   links:[
     {label:"UX 시나리오 Figma", url:"https://www.figma.com/design/pat4EALAOO9XW7Hynp30Md/UX_Crimson_F_U?node-id=8669-8484&t=fhsxj64S8jwIqh1N-1"},
     {label:"UI Figma", url:"https://www.figma.com/design/iURsNWDWbdEOvnjSZzq3vj/UI_Crimson_F_U?node-id=9751-56643&t=YVqta9mRIAIVw2Wd-1"},
     {label:"UX 히스토리 Favorite에서 Collection으로(기능 확장 재정의)", url:"#open:24"},
   ],
   images:[
     {src:"images/SP4000T/SP4000T_thumb.png", alt:"SP4000T 썸네일"},
     {src:"images/SP4000T/SP4000T_1.png", alt:"SP4000T 전면"},
     {src:"images/SP4000T/SP4000T_2.png", alt:"SP4000T 후면"},
     {src:"images/SP4000T/SP4000T_3.png", alt:"SP4000T 퍼스펙티브"},
   ]},
  {id:2, title:"PD20", category:"제품 모델", models:["PD series"], date:"2026.05.20", author:"Ellie", authorInitial:"E",
   credits:{PM:"Luke", PL:"Evan", UX:"Luna", UI:"Luna"},
   desc:"PD series의 최신 모델.",
   body:`■■ 1. Sound Master

디바이스 상단 물리 휠로 Bass / Mid / Treble을 독립 조절하는 기능입니다.
휠을 누를 때마다 Bass → Mid → Treble 순환, 160단계(−8.0 ~ 8.0) 조절 가능.
조작 시 활성 모드 오버레이 팝업만 노출, 조작 종료 후 N초 유지 후 자동 소멸.

- 화면 Off 상태에서 물리키 조작 시 화면 점등 + 팝업 즉시 노출 (잠금 상태 무반응)
- 볼륨·Sound Master 연달아 조작 시 마지막 조작 기능만 표시 (기존 볼륨 최상위 → 스위치 방식 변경)
- 롱키: Sound Studio 직접 진입. 외부 연결 수신 중엔 진입 불가 토스트 노출


■■ 2. Sound Studio

청력 데이터 기반 개인 맞춤 사운드 관리 화면. 홈 아이콘 또는 Sound Master 롱키로 진입.
유선 이어폰 전용 (BT 미지원). 퍼스널 사운드 / 이퀄라이저 / 오디오스피어 3종 카드 구성.

■ Personal Sound (퍼스널 사운드)

좌/우 청력 측정 결과 기반 최적화 사운드 제공. 프리셋 최대 10개 저장, 현재 적용 항목 ✔ 표시.
청력 테스트: 좌/우 각 5회 × 6세트(총 30회), [들림] / [안 들림] 응답으로 진행.
프로필 저장: 이름 → 나이 → 성별(남자 / 여자 / 논바이너리 / 응답 거부) 3단계 입력.

■ Equalizer (이퀄라이저)

Dot 3개 드래그 + 하단 컨트롤 바(Heavier ↔ Brighter)로 음색 조정. Gain −8.0 ~ 8.0.
Sound Master 휠로 Gain 연동 조절 가능. 되돌리기(Flat Curve 복원) / 저장 버튼 제공.

■ Audiosphere (오디오스피어)

서라운드 효과로 공간 음향 설정. 영상 감상 용도 권장. 32bit/96kHz 이하에서만 적용.

| 모드 | 특징 |
| --- | --- |
| Subtle | 미세한 공간감 (디폴트) |
| Balanced | 균형 잡힌 공간감 |
| Immersive | 몰입감 있는 입체 음향 |
| Echoic | 잔향감이 강한 공간 음향 |
`,
   tags:["PD20","PDseries","SoundMaster","사운드마스터","SoundStudio","사운드스튜디오","PersonalSound","퍼스널사운드","Equalizer","이퀄라이저","Audiosphere","오디오스피어"],
   files:[],
   links:[
     {label:"UX 시나리오 Figma", url:"https://www.figma.com/design/pat4EALAOO9XW7Hynp30Md/UX_Crimson_F_U?node-id=8627-2086&t=fhsxj64S8jwIqh1N-1"},
     {label:"UI Figma", url:"https://www.figma.com/design/iURsNWDWbdEOvnjSZzq3vj/UI_Crimson_F_U?node-id=9739-17741&t=YVqta9mRIAIVw2Wd-1"},
   ],
   images:[
     {src:"images/PD20/PD20_thumb.png", alt:"PD20 썸네일"},
   ]},
  {id:6, title:"PD5", category:"제품 모델", models:["PD series"], date:"2026.05.22", author:"Ellie", authorInitial:"E",
   credits:{PM:"Luke", PL:"Hoya", UX:"Ellie", UI:"Luna"},
   desc:"Octa-DAC 탑재 및 EnviroTune 기능 도입으로 사운드 퍼포먼스와 환경 적응형 음질을 동시에 구현한 PD series 신모델.",
   body:`■■ 1. DAC Mode

PD5에는 8개의 DAC가 탑재되어 있으며, 사용자가 DAC 구동 수를 직접 선택할 수 있습니다.

| 모드 | 구동 DAC | 출력 (Unbal.) | 출력 (Bal.) |
| --- | --- | --- | --- |
| Eco Mode (4x DAC) | 4개 (Quad-DAC) | 3Vrms | 4Vrms |
| Performance Mode (8x DAC) | 8개 (Octa-DAC) | 4Vrms | 8Vrms |

- Eco Mode: 4개의 DAC로 효율적인 성능과 긴 재생 시간을 제공하며, 낮은 전력 소비로 균형 잡힌 사운드를 구현합니다.
- Performance Mode: 8개의 DAC를 모두 활성화하여 최상의 오디오 성능을 구현하며, 해상도 / 출력을 향상시킵니다.
- On/Off 개념이 아닌 모드 전환 방식 (기존 AMP Gain Normal/High 설정과 동일한 컨셉)
- 알림 패널 빠른 설정 버튼으로 전환 가능

■■ 2. EnviroTune

마이크를 통해 외부 노이즈를 측정하여 최적의 사운드로 자동 조정하는 환경 적응형 기능입니다.

| 상태 | 설명 |
| --- | --- |
| Off | EnviroTune 비활성 |
| Auto | 외부 노이즈를 자동 감지 및 보정 |
| Manual | 사용자가 직접 세부 설정 조정 (조절 범위는 개발 확인 후 추가 예정) |

- 기능 구현 진행 중 (5월까지 개발 완료 예정)
- DAC Mode와 동일하게 알림 패널 빠른 설정 버튼으로 접근 가능
- Manual 모드 세부 설정 항목은 개발 확인 후 추후 업데이트 예정`,
   tags:["PD5","PDseries","DAC","DACmode","EnviroTune"],
   files:[
     {label:"PD5_사업계획서_0728.pdf", url:"files/PD5_사업계획서_0728.pdf"},
   ],
   links:[
     {label:"astellnkern.com PD5", url:"https://www.astellnkern.com"},
   ],
   images:[
     {src:"images/PD5/PD5_1.png", alt:"PD5 전면"},
     {src:"images/PD5/PD5_2.png", alt:"PD5 측면"},
     {src:"images/PD5/PD5_3.png", alt:"PD5 퍼스펙티브"},
     {src:"images/PD5/PD5_4.png", alt:"PD5 후면"},
   ]}
];
