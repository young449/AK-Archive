// =============================================
// data_제품.js
// 제품 카테고리 데이터
// 항목 추가 시 id는 고유한 숫자로 지정
// =============================================

const DATA_제품 = [
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

  {id:2, title:"PD20 — PD series 최신 모델", category:"제품 모델", models:["PD series"], date:"2025.03.01", author:"Ellie", authorInitial:"E",
   desc:"완전히 새로운 오디오 디바이스. 사운드 경험 재정의를 목표로 설계.",
   body:`라인: PD series
런칭일: 2025.03.01
포지셔닝: 미드레인지

주요 특징
- 완전히 새로운 오디오 아키텍처
- 3.5mm + 4.4mm 출력`,
   tags:["미드레인지","디바이스"],
   files:[],
   links:[{label:"astellnkern.com — PD20", url:"https://www.astellnkern.com/en/product/view.php?idx=171"}]},

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

- On/Off 개념이 아닌 모드 전환 방식 (기존 AMP Gain Normal/High 설정과 동일한 컨셉)
- 알림 패널 빠른 설정 버튼으로 전환 가능

Eco Mode: 4개의 DAC로 효율적인 성능과 긴 재생 시간을 제공하며, 낮은 전력 소비로 균형 잡힌 사운드를 구현합니다.

Performance Mode: 8개의 DAC를 모두 활성화하여 최상의 오디오 성능을 구현하며, 해상도 / 출력을 향상시킵니다.

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
   // ↓ 첨부파일 추가 방법: {label:"표시될 파일명", url:"파일 경로 또는 링크"}
   files:[
     {label:"PD5_사업계획서_0728.pdf", url:"files/PD5_사업계획서_0728.pdf"},
   ],
   links:[
     {label:"astellnkern.com — PD5", url:"https://www.astellnkern.com"},
   ]},
];
