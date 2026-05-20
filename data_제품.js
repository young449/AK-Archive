// =============================================
// data_제품.js
// 제품 카테고리 데이터
// 항목 추가 시 id는 고유한 숫자로 지정
// =============================================

const DATA_제품 = [
  {id:1, title:"SP4000 — A&ultima 플래그십", category:"제품", models:["A&ultima"], date:"2024.09.01", author:"Ellie", authorInitial:"E",
   desc:"A&ultima 라인의 최상위 플래그십 DAP. 쿼드 DAC 구성, 최고 수준의 음질 퍼포먼스.",
   body:`라인: A&ultima
런칭일: 2024.09.01
포지셔닝: 플래그십

주요 특징
- Quad DAC 구성
- DSD512, MQA 지원
- 4.4mm Balanced + 3.5mm 출력`,
   tags:["플래그십","QuadDAC","DSD"],
   links:[{label:"astellnkern.com — SP4000", url:"https://www.astellnkern.com/en/product/view.php?idx=159"}]},

  {id:2, title:"PD20 — PD series 최신 모델", category:"제품", models:["PD series"], date:"2025.03.01", author:"Ellie", authorInitial:"E",
   desc:"완전히 새로운 오디오 디바이스. 사운드 경험 재정의를 목표로 설계.",
   body:`라인: PD series
런칭일: 2025.03.01
포지셔닝: 미드레인지

주요 특징
- 완전히 새로운 오디오 아키텍처
- 3.5mm + 4.4mm 출력`,
   tags:["미드레인지","디바이스"],
   links:[{label:"astellnkern.com — PD20", url:"https://www.astellnkern.com/en/product/view.php?idx=171"}]},

  {id:3, title:"PD10 — PD series", category:"제품", models:["PD series"], date:"2024.06.01", author:"Ellie", authorInitial:"E",
   desc:"PD series의 기준 모델. 플래그십 기능 일부를 보급형 라인에 적용.",
   body:`라인: PD series
런칭일: 2024.06.01
포지셔닝: 보급 미드레인지`,
   tags:["미드레인지","보급형"],
   links:[{label:"astellnkern.com — PD10", url:"https://www.astellnkern.com/en/product/view.php?idx=162"}]},

  {id:4, title:"Heritage 라인 개요", category:"제품", models:["Heritage"], date:"2024.01.01", author:"Ellie", authorInitial:"E",
   desc:"AK의 헤리티지를 계승. 클래식한 디자인 언어와 프리미엄 소재 결합.",
   body:`라인: Heritage
포지셔닝: 프리미엄 헤리티지

특징
- AK 클래식 디자인 DNA 계승
- 한정판·스페셜 에디션 중심`,
   tags:["한정판","프리미엄"],
   links:[]},

  {id:5, title:"Classic 라인 개요", category:"제품", models:["Classic"], date:"2024.01.01", author:"Ellie", authorInitial:"E",
   desc:"입문·보급형 포지셔닝. AK 음질 철학을 접근 가능한 가격대에 구현.",
   body:`라인: Classic
포지셔닝: 엔트리`,
   tags:["엔트리","입문"],
   links:[]},
];
