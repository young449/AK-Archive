// =============================================
// data_제품.js
// 제품 카테고리 데이터
// 항목 추가 시 id는 고유한 숫자로 지정
// =============================================

const DATA_제품 = [
  {id:26, title:"SP4000T — A&ultima 플래그십", category:"제품 모델", models:["A&ultima"], date:"2026.05.21", author:"Ellie", authorInitial:"E",
   credits:{PM:"Jay", PL:"Kane", UX:"Ellie", UI:"Luna"},
   desc:"A&ultima 라인의 플래그십 DAP.",
   body:`■■ Tube Current

진공관 내부 플레이트 전압을 3단계로 조절해, 진공관 앰프 증폭률에 변화를 줍니다. Tube Mode 진공관을 아래 3가지 모드로 변경해 다양한 음색을 즐길 수 있습니다.

- Triode Mode : 자연스럽고 따뜻한 음색
- Pentode Mode : 힘있고, 단단한 음색
- Ultra Linear Mode : 전체적으로 균형잡힌 음색`,
   tags:["SP4000T","AMP","Collection","Favorite","USB설정","재생설정"],
   files:[],
   links:[
     {label:"UX 시나리오 — Figma", url:"https://www.figma.com/design/pat4EALAOO9XW7Hynp30Md/UX_Crimson_F_U?node-id=8669-8484&t=fhsxj64S8jwIqh1N-1"},
     {label:"UI — Figma", url:"https://www.figma.com/design/iURsNWDWbdEOvnjSZzq3vj/UI_Crimson_F_U?node-id=9751-56643&t=YVqta9mRIAIVw2Wd-1"},
   ],
   images:[
     {src:"SP4000T_1.png", alt:"SP4000T 전면"},
     {src:"SP4000T_2.png", alt:"SP4000T 후면"},
     {src:"SP4000T_3.png", alt:"SP4000T 퍼스펙티브"},
   ]},

  {id:1, title:"SP4000 — A&ultima 플래그십", category:"제품 모델", models:["A&ultima"], date:"2024.09.01", author:"Ellie", authorInitial:"E",
   desc:"A&ultima 라인의 최상위 플래그십 DAP. 쿼드 DAC 구성, 최고 수준의 음질 퍼포먼스.",
   body:`라인: A&ultima
런칭일: 2024.09.01
포지셔닝: 플래그십

주요 특징
- Quad DAC 구성
- DSD512, MQA 지원
- 4.4mm Balanced + 3.5mm 출력`,
   tags:["플래그십","QuadDAC","DSD"],
   files:[],
   links:[{label:"astellnkern.com — SP4000", url:"https://www.astellnkern.com/en/product/view.php?idx=159"}]},

  {id:2, title:"PD20 — PD series 최신 모델", category:"제품 모델", models:["PD series"], date:"2026.05.21", author:"Luna", authorInitial:"L",
   credits:{PM:"Luke", PL:"Evan", UX:"Luna", UI:"Luna"},
   desc:"Dual Wheel System과 Real Octa DAC(CS43198 x8), Hybrid AMP를 탑재한 PD series의 프리미엄 모델. 나만의 사운드를 만드는 아날로그 감성 DAP.",
   body:`■■ 1. 제품 컨셉

AK 프리미엄 라인업(A&futura + KANN)의 장점을 융합한 신규 모델로, 타 경쟁 제품이 제공하지 못하는 아날로그 감성을 핵심 컨셉으로 발굴하였습니다.

- Guitar AMP의 Tone Control과 Portable Recorder의 조작감에서 영감
- 나만의 유니크한 사운드를 만드는 재미를 줄 수 있는 DAP
- 유사 가격대 프리미엄 모델을 뛰어넘는 성능, 독특함, 뛰어난 만듦새로 차별화된 가치 제공

■■ 2. Dual Wheel System

볼륨을 조작하는 Digital Volume Wheel 외에, 나만의 사운드를 만들 수 있는 Sound Master Wheel을 추가로 탑재한 것이 PD20의 핵심 구조입니다.

Sound Master Wheel
- Bass / Mid / Treble 각 20단계 조절 지원
- 좌측 물리 슬라이드 버튼(3단)으로 B / M / T 항목 선택
- 나만의 사운드 커스터마이징 가능

Digital Volume Wheel
- 전원 버튼 기능 포함
- 우측 배치

■■ 3. Hybrid AMP

AK Signature AMP System을 적용하여, 두 가지 앰프를 혼합 구동합니다.

| AMP | 특징 |
| --- | --- |
| Discrete Class A AMP | PA10과 동일한 아날로그 감성 사운드 |
| OPAMP Class AB AMP | 효율적이고 균형 잡힌 출력 |

- 좌측 물리 슬라이드 버튼(3단)으로 A / AB / H(Hybrid) 선택
- Gain 조절: Low / High (BAL 기준 최대 10Vrms)
- AMP Current 조절: 1 / 2 / 3단계 (PA10 방식)

■■ 4. Real Octa DAC

AK 최초로 CS43198을 8개 탑재한 Real Octa DAC 구조를 적용하였습니다.

- DAC: CS43198 x8 (Octa Quad 구조)
- 더 넓은 다이나믹 레인지와 향상된 신호 대 잡음비(SNR) 확보
- BAL 출력 최대 10Vrms (High Gain 기준)

■■ 5. 탑재 기능 정리

물리 버튼 구성
- Sound Master Wheel (좌상단) — Bass/Mid/Treble 20단계 조절
- Digital Volume Wheel (우상단) — 볼륨 + 전원 버튼 포함
- 3단 슬라이드 버튼 x2 (좌측) — B/M/T 선택 / A/AB/H AMP 선택
- 2단 슬라이드 버튼 x1 (우측) — Lock On/Off
- Multi Control 버튼 (우측) — Play/Pause, Next, Previous

오디오 출력
- 3.5mm (SPDIF 지원) x1
- 4.4mm Balanced x1

추가 Sound 메뉴 (UI 지원)
- Gain 조절: Low / High
- AMP Current 조절: 1 / 2 / 3

■■ 6. Key Buying Factor

1. 나만의 유니크한 사운드를 만들 수 있는 Sound Master 기능 제공
2. 타 DAP와 다르게 조작(Dual Wheel, Slide Button)의 재미를 느낄 수 있는 구조
3. Hybrid AMP 적용 및 아날로그 사운드를 느낄 수 있는 Class A AMP (PA10)
4. CS43198 8개를 탑재한 Real Octa DAC 구조 적용
5. Full Open Android 지원

■■ 7. 주요 사양 (Brief Spec)

| 항목 | 사양 | 비고 |
| --- | --- | --- |
| CPU | MTK8385 Octa-Core | Full Open Android 지원 |
| DAC | CS43198 x8 | Real Octa 구조 |
| Display | 6inch 1080 x 2180 | PS10 공용 |
| Bit / Sample Rate | 32bit / 768kHz, DSD512 | |
| Audio Output | 3.5mm(SPDIF) x1, 4.4mm x1 | SPDIF 실장 이슈 시 제외 |
| Output Level | Balanced 10V | High Gain 기준 |
| DAR | AK4137 | 실장 이슈 시 S/W 대체 |
| Memory | 256GB | |
| Bluetooth | LDAC, aptX HD | |
| Wi-Fi | Dual Wi-Fi (2.4 / 5GHz) | Rear & Bottom Cover Glass 적용 |
| Battery | 5,770mAh | PS10 공용 |
| USB | Type C | PD 3.0 충전 |
| SD Card | micro SD x1 | Max 1.5TB |
| Material | Aluminum | |
| 예상 사이즈 | 75.4 x 149.5 x 17.3mm | Wheel LED에 따라 두께 +@ |`,
   tags:["PD20","DualWheel","OctaDAC","HybridAMP","SoundMaster","FullOpenAndroid","사업계획서"],
   files:[
     {label:"PD20_사업계획서_0324.pdf", url:"files/PD20_사업계획서_0324.pdf"},
   ],
   links:[
     {label:"UX 시나리오 — Figma", url:"https://www.figma.com/design/pat4EALAOO9XW7Hynp30Md/UX_Crimson_F_U?node-id=8627-2086&t=fhsxj64S8jwIqh1N-1"},
     {label:"UI — Figma", url:"https://www.figma.com/design/iURsNWDWbdEOvnjSZzq3vj/UI_Crimson_F_U?node-id=9739-17741&t=YVqta9mRIAIVw2Wd-1"},
   ],
   images:[
     {src:"PD20_1.png", alt:"PD20 전면"},
     {src:"PD20_2.png", alt:"PD20 후면"},
     {src:"PD20_3.png", alt:"PD20 퍼스펙티브"},
   ]},

  {id:3, title:"PD10 — PD series", category:"제품 모델", models:["PD series"], date:"2024.06.01", author:"Ellie", authorInitial:"E",
   desc:"PD series의 기준 모델. 플래그십 기능 일부를 보급형 라인에 적용.",
   body:`라인: PD series
런칭일: 2024.06.01
포지셔닝: 보급 미드레인지`,
   tags:["미드레인지","보급형"],
   files:[],
   links:[{label:"astellnkern.com — PD10", url:"https://www.astellnkern.com/en/product/view.php?idx=162"}]},

  {id:4, title:"Heritage 라인 개요", category:"제품 모델", models:["Heritage"], date:"2024.01.01", author:"Ellie", authorInitial:"E",
   desc:"AK의 헤리티지를 계승. 클래식한 디자인 언어와 프리미엄 소재 결합.",
   body:`라인: Heritage
포지셔닝: 프리미엄 헤리티지

특징
- AK 클래식 디자인 DNA 계승
- 한정판·스페셜 에디션 중심`,
   tags:["한정판","프리미엄"],
   files:[],
   links:[]},

  {id:5, title:"Classic 라인 개요", category:"제품 모델", models:["Classic"], date:"2024.01.01", author:"Ellie", authorInitial:"E",
   desc:"입문·보급형 포지셔닝. AK 음질 철학을 접근 가능한 가격대에 구현.",
   body:`라인: Classic
포지셔닝: 엔트리`,
   tags:["엔트리","입문"],
   files:[],
   links:[]},

  {id:6, title:"PD5 — PD series 신모델", category:"제품 모델", models:["PD series"], date:"2026.05.20", author:"Ellie", authorInitial:"E",
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
   tags:["PD시리즈","OctaDAC","EnviroTune","FullOpenAndroid","Pocket-HiFi","사업계획서"],
   files:[
     {label:"PD5_사업계획서_0728.pdf", url:"files/PD5_사업계획서_0728.pdf"},
   ],
   links:[
     {label:"astellnkern.com — PD5", url:"https://www.astellnkern.com"},
   ],
   images:[
     {src:"PD5_1.png", alt:"PD5 전면"},
     {src:"PD5_2.png", alt:"PD5 측면"},
     {src:"PD5_3.png", alt:"PD5 퍼스펙티브"},
     {src:"PD5_4.png", alt:"PD5 후면"},
   ]},
];
