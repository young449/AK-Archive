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
     {label:"SP4000_사업계획서_0430.pdf", url:"files/SP4000_BP_0430.pdf"},
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
     {label:"UX 시나리오 Figma", url:"https://www.figma.com/design/pat4EALAOO9XW7Hynp30Md/UX_Crimson_F_U?node-id=9368-9568&t=f24YMy1BBxKGLVBr-1"},
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
  {id:28, title:"PD10", category:"제품 모델", models:["PD series"], date:"2026.05.18", author:"Ellie", authorInitial:"E",
   credits:{PM:"Jay", PL:"Kenny", UX:"Luna", UI:"Luna"},
   desc:"A&futura SE400에서 PD10으로 재정의된 모델. 검증된 Hexa DAC 구조, Full Android, XLR 크래들을 핵심 컨셉으로 한 PD series DAP.",
   body:`■■ 1. 라인업 상의 의미

A&futura 프리미엄 라인업의 Identity 연속성을 가지는 모델로, SE300의 후속 모델입니다.

- 새로움에 도전하는 라인업의 Identity 연속성 확보를 위해, OS 변경 기점 모델로 기획
- 타사 플래그십 모델을 뛰어넘는 사양, 상품 구성, 뛰어난 만듦새로 차별화된 가치 제공


■■ 2. 상품기획 의도

인정받은 Hexa DAC 구조, 새로운 OS, 활용도 높은 크래들을 제공해 상품성 극대화.

- SP3000에서 검증된 Hexa DAC 구조에 AKM社 신형 DAC(AK4498EX)를 세계 최초 적용
- 꾸준한 시장 요구 사항인 Full Android 탑재
- XLR 출력 지원 충전 크래들을 기본 아이템으로 구성해 제품 활용도 및 확장성 확보
- 기존 SE300의 느린 속도 개선을 위해 Octa-Core 적용


■■ 3. Key Concept : Unlimited Music Life

뛰어난 음질과 제한 없는 확장을 핵심 컨셉으로 합니다.

① 신형 DAC 세계 최초 사용 / 검증된 Hexa 구조 적용
② 고객 요구를 적극 반영한 Full Android 탑재
③ 편리함과 확장성이 결합된 XLR 크래들 제공


■■ 4. 주요 사양

■ DAP — MTK8385 Octa-Core / AK4191EQ x2 & AK4498EX x4 / 5.5" FHD / 32bit·768kHz·DSD512 / BAL 6.3V · UNBAL 3.3V / 3.5mm(SPDIF)+4.4mm / 256GB / BT(LDAC·aptX HD) / Dual Wi-Fi / 5,050mAh(~10h) / Stainless Steel 316L

■ XLR 크래들 — XLR Balanced L/R 출력(NEUTRIK) / USB×3(DAP 연결·충전·CD-Ripper) / Pogo Pin 연결 / Aluminum
`,
   tags:["PD10","PDseries","HexaDAC","FullAndroid","XLR","크래들","SE400"],
   files:[
     {label:"PD10_사업계획서_0404.pdf", url:"files/PD10_BP_0404.pdf"},
   ],
   links:[
     {label:"UX 시나리오 Figma", url:"https://www.figma.com/design/pat4EALAOO9XW7Hynp30Md/UX_Crimson_F_U?node-id=4115-1020&t=f24YMy1BBxKGLVBr-1"},
     {label:"UI Figma", url:"https://www.figma.com/design/iURsNWDWbdEOvnjSZzq3vj/UI_Crimson_F_U?node-id=10316-25448&t=33he04t05HBedODK-1"},
   ],
   images:[]},
  {id:29, title:"SP3000", category:"제품 모델", models:["A&ultima"], date:"2026.05.15", author:"Ellie", authorInitial:"E",
   credits:{PM:"Jay", PL:"Kane", UX:"Lizzo", UI:"Luna"},
   desc:"A&ultima 플래그십 DAP. Hexa DAC 구조(AK4191EQ x2 & AK4499EX x4)와 아날로그·디지털 신호 처리 분리로 최고 수준의 사운드를 구현한 모델.",
   body:`■■ 1. 라인업 상의 의미

AK Flagship SP2000의 후속 모델.

- 최신 오디오 기술이 집약되는 제품으로 기존 SP2000보다 향상된 모델로 A&Ultima 라인업에 위치
- 타 경쟁제품에서 따라할 수 없는 A&Ultima만의 차별성을 가지는 모델로 Market Leader 위치 유지


■■ 2. 상품기획 의도

AK Flagship 모델에 걸맞는 독보적인 기능 구현에 집중.

- 디지털·아날로그 신호 처리의 물리적 분리를 바탕으로 모든 부분에서 압도적인 사양 확보
- DAP 세계 최초 디지털·아날로그 신호 처리를 물리적으로 분리하는 HEXA DAC 구조 확보
- DAP 세계 최초 명품 시계에 사용되는 Stainless Steel 904L 소재 적용
- 퀄컴 최신 CPU, 신규 5.46" LCD, AK4137 컨버터 탑재로 기본 상품성 대폭 강화
- 고속 충전 외 PD 충전과 무선 충전까지 적용해 차별화 시도
- Dual Wi-Fi, 2way 블루투스, DSD512 재생 등 기존 모델의 장점은 유지


■■ 3. Key Concept : Complete separation for noise

New Sound Frontier SP3000.

- SP2000 이후 출시되는 A&Ultima 3번째 제품으로 CPU를 비롯해 거의 모든 부분을 업그레이드
- 일반적인 오디오 신호 구조에서 벗어나, 디지털과 아날로그 신호 처리를 물리적으로 분리하는 구조 적용
- 단순 Dual·Quad DAC 구조가 아닌, 디지털·아날로그 신호 처리를 모든 DAC에서 분리하는 HEXA 구조 적용
- R채널·L채널에 각각 AK4191(Dual)을 배치하고, AK4499EX를 채널당 2개씩 총 4개(Quad)로 구성
- 기능뿐만 아니라 소재에서도 DAP 세계 최초 Stainless Steel 904L 적용으로 명품 DAP 포지셔닝
- 기존 SP2000의 장점 유지 + All to DSD, 출력 상향, 무선 충전 탑재로 제품 경쟁력 강화


■■ 4. 주요 사양

Qualcomm C6125 Octa-Core / AK4191 x2 & AK4499EX x4(디지털·아날로그 분리) / AK4137(DAR) / 5.46" FHD / 32bit·768kHz·DSD512 / BAL 8V · UNBAL 4V / 2.5mm+3.5mm+4.4mm / 256GB / BT(LDAC·aptX HD) / Dual Wi-Fi / 5,000mAh(~10h) / 고속·무선·PD 충전 / Stainless Steel 904L·316L·Copper
`,
   tags:["SP3000","A&ultima","HexaDAC","HEXADAC","StainlessSteel","904L","Complete separation for noise","NewSoundFrontier"],
   files:[
     {label:"SP3000_사업계획서_0924.pdf", url:"files/SP3000_BP_0924.pdf"},
   ],
   links:[
     {label:"UX 시나리오 Figma", url:"https://www.figma.com/design/pat4EALAOO9XW7Hynp30Md/UX_Crimson_F_U?node-id=1376-6056&t=f24YMy1BBxKGLVBr-1"},
     {label:"UI Figma", url:"https://www.figma.com/design/CZdIQpzaGRVJOXF7ml8b7f/UI_Crimson_Common-Design-2.0-?node-id=28-54118&t=5TCq9OF8pi5rx8Pa-1"},
   ],
   images:[]},
  {id:30, title:"SP3000T", category:"제품 모델", models:["A&ultima"], date:"2026.05.16", author:"Ellie", authorInitial:"E",
   credits:{PM:"Luke", PL:"Ian", UX:"Lizzo", UI:"Luna"},
   desc:"SP3000을 기반으로 Real Tube 앰프를 탑재한 A&ultima DAP. Triple AMP System과 Dual DAC 구조로 아날로그 사운드를 구현한 모델.",
   body:`■■ 1. 라인업 상의 의미

AK Flagship 라인업의 지속성을 확보하는 모델로, SP3000을 바탕으로 아날로그 오디오 기술을 접목해 새로움을 시도합니다.

- AK DAP Flagship 라인업인 SP3000을 바탕으로 하는 모델
- 기존 SP3000이 가지고 있는 장점에 아날로그 오디오 기술을 접목해 새로움을 시도하는 모델
- A&ultima 라인업 모델만이 가질 수 있는 사운드 차별성으로 Market Leader 위치 유지 지속


■■ 2. 상품기획 의도

SP3000의 아날로그 / 디지털 신호 처리 분리에 아날로그 사운드를 더해 경쟁력 강화.

- A&ultima USP의 본질인 최고 수준의 사운드 제공에 초점
- SP3000의 최고 장점인 아날로그 / 디지털 신호 처리 분리 계승
- 기존 변형된 진공관이 아닌 오리지널 진공관(Real Tube)을 사용해 뛰어난 아날로그 사운드 감성 구현
- SP3000T에 적용된 Real Tube 기술은 향후 타 모델에도 적용해 기술 연계 및 개발 효율화 추진


■■ 3. Key Concept : One step close to Analog Sound

진짜 아날로그에 한발 더 가깝게.

- SP2000T의 Triple AMP System과 SP3000의 아날로그·디지털 회로 분리의 장점을 모두 가지는 모델
- Triple AMP System에서 아날로그 요소 강화를 위해 Real Tube 부품(Miniature Tube)을 Dual로 사용
- SP2000T의 Single Tube에서 Dual Tube로 아날로그 사운드에 한발 더 접근
- AKM社 Flagship AK4191 & AK4499를 Dual로 적용해 A&ultima 라인업 퀄리티 유지
- 오리지널 SP3000과 차이 및 가격 경쟁력 확보를 위해 소재는 Aluminum 적용

■ Triple AMP Mode

| 모드 | 설명 |
| --- | --- |
| OP Mode | OPAMP 단독 구동 |
| Tube Mode | 진공관 앰프 단독 구동 |
| Hybrid Mode | OPAMP + Tube 혼합 구동 |


■■ 4. 주요 사양

MT8385 Octa-Core / AK4191 x2 & AK4499EQ x2 / OPAMP & Quad Tube(Raytheon JAN6418 x2) / AK4137(DAR) / 5.5" FHD / 32bit·768kHz·DSD512(3세대 XMOS) / BAL 6.3V · UNBAL 3.3V / 2.5mm+3.5mm(SPDIF)+4.4mm / 256GB / BT(LDAC·aptX HD) / Dual Wi-Fi / 5,050mAh / Aluminum
`,
   tags:["SP3000T","A&ultima","RealTube","진공관","TripleAMP","HybridAMP","DualDAC"],
   files:[
     {label:"SP3000T_사업계획서.pdf", url:"files/SP3000T_BP.pdf"},
   ],
   links:[
     {label:"UX 시나리오 Figma", url:"https://www.figma.com/design/pat4EALAOO9XW7Hynp30Md/UX_Crimson_F_U?node-id=1913-1516&t=f24YMy1BBxKGLVBr-1"},
     {label:"UI Figma", url:"https://www.figma.com/design/iURsNWDWbdEOvnjSZzq3vj/UI_Crimson_F_U?node-id=1620-10396&t=33he04t05HBedODK-1"},
   ],
   images:[]},
  {id:31, title:"SP3000M", category:"제품 모델", models:["A&ultima"], date:"2026.05.17", author:"Ellie", authorInitial:"E",
   credits:{PM:"Jay", PL:"Kenny", UX:"Lizzo", UI:"Luna"},
   desc:"SP3000 동일 Hexa DAC 구조에 휴대성을 극대화한 A&ultima DAP. 소형 사이즈(250g)로 Daily DAP를 지향하는 모델.",
   body:`■■ 1. 라인업 상의 의미

AK 플래그십 라인업의 연속성을 가지는 모델로, A&ultima SP3000의 파생 모델입니다.

- 기존 SP3000의 뛰어난 사운드를 최대한 유지하면서 휴대성을 대폭 강화시킨 모델
- SP3000의 가격, 무게, 크기로 구매를 망설였던 소비자들에게 어필할 수 있는 모델로 접근


■■ 2. 상품기획 의도

SP3000 동일 Hexa DAC 구조에 휴대성을 더한 다른 매력의 플래그십 DAP.

- A&ultima USP의 본질인 최고 수준의 사운드 유지
- SP3000의 최고 장점인 Hexa DAC(아날로그 / 디지털 신호 처리 분리) 동일 적용
- 플래그십 DAP는 크고, 무겁다는 인식에서 벗어나, 휴대성을 극대화한 새로운 경험 제공
- 타 중국 브랜드 플래그십과 충분히 경쟁할 수 있는 가격($2,300)으로 소비자들에게 어필


■■ 3. 개발 방향

최근 타사 플래그십 모델들은 6인치 LCD와 대용량 배터리로 인해 커지고 무거워지는 추세입니다.

- 일상에서 가볍게 들고 다닐 수 있는 DAP가 점점 사라지는 추세, 소비자 피로감 증가
- 휴대성 극대화 + 가격 경쟁력 + 고품질 사운드를 동시에 만족하는 SP3000M으로 접근
- Sound Performance를 유지하면서 휴대성을 최대한 끌어올린 DAP로 개발 진행

■ SP3000 vs SP3000M 사이즈 비교

| 항목 | SP3000 | SP3000M |
| --- | --- | --- |
| Display | 5.5inch | 4.1inch |
| 외관 크기 | 82.4 × 139.4mm | 61.7 × 128mm |
| 무게 | 500g | 250g |
| Material | Stainless Steel 904L | Aluminum |


■■ 4. Key Concept : Perfect Balance

뛰어난 음질과 휴대성의 절묘한 조화.

- SP3000과 동일한 Hexa DAC 구조를 유지하면서 휴대성을 극대화
- 성능과 소리가 좋으면 크고 무거워야 한다는 관점에서 벗어나, 새로운 매력 포인트 제시
- SP3000 동급 수준의 사운드 및 주요 요소를 유지해 A&ultima 플래그십 매력도 유지


■■ 5. 주요 사양

Qualcomm 6125 Octa-Core / AK4191EQ x2 & AK4499EX x4(아날로그·디지털 분리) / 4.1" 720×1280 / 32bit·768kHz·DSD256 / BAL 6.3V · UNBAL 3.3V / 3.5mm+4.4mm / 256GB / BT(LDAC·aptX HD) / Dual Wi-Fi / 3,600mAh(~7h) / 고속·무선 충전 / Aluminum
`,
   tags:["SP3000M","A&ultima","HexaDAC","휴대성","PerfectBalance","소형","경량"],
   files:[
     {label:"SP3000M_사업계획서.pdf", url:"files/SP3000M_BP.pdf"},
   ],
   links:[
     {label:"UX 시나리오 Figma", url:"https://www.figma.com/design/pat4EALAOO9XW7Hynp30Md/UX_Crimson_F_U?node-id=3502-2&t=f24YMy1BBxKGLVBr-1"},
     {label:"UI Figma", url:"https://www.figma.com/design/iURsNWDWbdEOvnjSZzq3vj/UI_Crimson_F_U?node-id=3146-19766&t=33he04t05HBedODK-1"},
   ],
   images:[]},
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
     {label:"PD5_사업계획서_0728.pdf", url:"files/PD5_BP_0728.pdf"},
   ],
   links:[
     {label:"UX 시나리오 Figma", url:"https://www.figma.com/design/pat4EALAOO9XW7Hynp30Md/UX_Crimson_F_U?node-id=9368-9568&t=f24YMy1BBxKGLVBr-1"},
     {label:"UI Figma", url:"https://www.figma.com/design/iURsNWDWbdEOvnjSZzq3vj/UI_Crimson_F_U?node-id=10316-25448&t=33he04t05HBedODK-1"},
   ],
   images:[
     {src:"images/PD5/PD5_1.png", alt:"PD5 전면"},
     {src:"images/PD5/PD5_2.png", alt:"PD5 측면"},
     {src:"images/PD5/PD5_3.png", alt:"PD5 퍼스펙티브"},
     {src:"images/PD5/PD5_4.png", alt:"PD5 후면"},
   ]}
];
