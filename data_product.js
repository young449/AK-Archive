// =============================================
// data_product.js
// 제품 카테고리 데이터 (통합 템플릿 스키마)
// 항목 추가 시 id는 고유한 숫자로 지정
//
// [통합 템플릿 필드]
//  keyConcept  : {title, desc}            전 제품 필수 — 제품 핵심 컨셉
//  positioning : "..."                    라인업 포지셔닝 (이 제품이 뭔지/어디에 위치하는지)
//  newFeatures : [{name, badge, what, when, was, detail}]  신기능
//     - badge : "신규" | "개선"
//     - what  : 무엇 (필수)
//     - when  : 어떤 때에 활용 (선택)
//     - was   : 기존 대비 변경점 (선택, 주로 "개선")
//     - detail: 추가 설명/표 (선택, ■/| 마크업)
//  keyFeatures : ["...", ...]             주요 특징 (스캔용 3~5개)
//  specs       : "..."                    주요 사양 (선택, 표 마크업)
//
// ※ keyConcept 는 전 제품 BP(사업계획서) 기준으로 작성됨
// =============================================

const DATA_product = [
  {id:27, title:"SP4000", category:"제품 모델", models:["A&ultima"], date:"2026.05.19", author:"Ellie", authorInitial:"E",
   credits:{PM:"Jay", PL:"Patrick, Kenny", UX:"Luna", UI:"Luna"},
   keyConcept:{title:"Immerse yourself in another level", desc:"압도적인 사운드와 함께 즐기는 다양한 Music Life."},
   desc:"SP3000의 후속 A&ultima 플래그십 DAP. Octa DAC, Full Open Android, High Driving Mode 탑재.",
   positioning:"SP3000의 후속 A&ultima 플래그십 DAP. Hexa DAC를 Octa DAC로 업그레이드하고, High Driving Mode와 Full Open Android를 더해 상품 경쟁력을 강화한 모델입니다.",
   newFeatures:[
     {name:"Octa DAC 구조", badge:"개선",
      what:"SP3000의 Hexa DAC(Dual & Dual)를 Real Quad 구조의 Octa DAC로 업그레이드. 4개 DAC를 동시 구동해 신호 처리 성능과 사운드를 향상.",
      was:"SP3000 AK4191EQ x2 + AK4499EX x4 → SP4000 AK4191EQ x4 & AK4499EX x4",
      detail:`| 항목 | SP3000 (HEXA DAC) | SP4000 (OCTA DAC) |
| --- | --- | --- |
| 구성 | Dual & Dual | Real Quad |
| DAC | AK4191EQ x2 + AK4499EX x4 | AK4191EQ x4 + AK4499EX x4 |
| PCM | 32bit/768kHz | 32bit/1536kHz |
| DSD | DSD512 | DSD1024 |
| BAL Output | 6.3Vrms | 8Vrms |`},
     {name:"High Driving Mode", badge:"신규",
      what:"OPAMP를 병렬 구조로 추가 적용해 구동 범위를 수평으로 확장. 출력 상승 시 동반되는 SNR 저하·노이즈를 억제하고 소리의 밀도와 디테일을 극대화.",
      when:"더 강한 구동이 필요할 때. 설정에서 On/Off 전환 가능하며, 사용 시 배터리 소모가 증가."},
     {name:"Full Open Android", badge:"신규",
      what:"스마트폰처럼 자유로운 APP 설치 지원. YouTube·스트리밍 등 소비자 불만 사항 해소.",
      was:"기존 AK DAP는 정해진 특정 APP만 설치 가능 → 자유 설치 지원"}
   ],
   keyFeatures:[
     "Real Quad 구성의 Octa DAC로 신호 처리 성능·사운드 향상",
     "SP4000 독자 기술 High Driving Mode로 차별화",
     "시장 요구를 반영한 Full Open Android 탑재"
   ],
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
   keyConcept:{title:"Reimagine the analog sound", desc:"세 가지 진공관 모드로 완성한 아날로그 사운드."},
   desc:"A&ultima 라인의 플래그십 DAP. DAP 최초 Real Quad Tube와 Triple Tube Mode, AK 최초 ROHM社 DAC을 탑재한 모델.",
   positioning:"SP3000T의 Triple AMP System을 기본으로 아날로그 요소를 한층 강화한 A&ultima 플래그십. DAP 최초 Real Quad Tube와 Triple Tube Mode를 적용하고, AK 최초 ROHM社 DAC과 Titanium 소재를 채택한 모델입니다.",
   newFeatures:[
     {name:"Quad Tube", badge:"신규",
      what:"DAP 최초로 오리지널 Real Tube(Miniature Tube)를 Quad로 적용(Raytheon JAN6418 x4)해 아날로그 사운드를 강화.",
      was:"SP3000T Dual Tube → SP4000T Quad Tube"},
     {name:"Triple Tube Mode", badge:"신규",
      what:"진공관을 3가지 모드로 전환해 음색 변경. Triode(자연스럽고 따뜻함) / Pentode(힘있고 단단함) / Ultra Linear(균형). SP3000T의 Tube Current Control 유지.",
      when:"곡·취향에 따라 음색을 바꾸고 싶을 때"},
     {name:"Triple AMP Mode", badge:"신규",
      what:"OPAMP·진공관을 조합한 3가지 앰프 모드 제공(SP3000T 계승).",
      detail:`| 모드 | 설명 |
| --- | --- |
| OP Mode | OPAMP 단독 구동 |
| Tube Mode | 진공관 앰프 단독 구동 |
| Hybrid Mode | OPAMP + Tube 혼합 구동 |`},
     {name:"ROHM社 DAC", badge:"신규",
      what:"AK 최초로 ROHM BD34302EKV Dual DAC 탑재. AKM社 DAC에서 벗어나 새로운 사운드 캐릭터 확보.",
      was:"기존 AKM社 DAC → ROHM社 DAC"},
     {name:"Titanium 소재", badge:"신규",
      what:"A&ultima의 럭셔리한 이미지 유지를 위해 Titanium 소재 적용."},
     {name:"배터리 보호 모드", badge:"개선",
      what:"충전 상한값을 사용자가 직접 선택할 수 있도록 개선.",
      was:"기존 85% 단일 고정값 → 80 / 85 / 90 / 95% 4단계 선택"},
     {name:"USB 설정", badge:"신규",
      what:"PC 연결 시 MTP가 활성화되지 않으면 USB 연결 방식을 수동 선택. 연결 시 알림 패널 노출, 탭하면 [USB 설정]으로 이동.",
      when:"PC 연결 후 파일 전송(MTP)이 잡히지 않을 때",
      detail:`| 옵션 | 설명 |
| --- | --- |
| MTP 연결하기 | PC와 수동으로 MTP 연결 |
| 충전하기 | 충전 전용 모드 |`},
     {name:"컬렉션", badge:"개선",
      what:"기존 Favorite을 Collection으로 확장 재정의 (아래 참고 링크의 UX 히스토리 참조).",
      when:"여러 곡을 주제별로 묶어 관리할 때"}
   ],
   keyFeatures:[
     "DAP 최초 Real Quad Tube 탑재(JAN6418 x4)로 아날로그 사운드 강화",
     "DAP 최초 Triple Tube Mode(Triode/Pentode/Ultra Linear) 제공",
     "AK 최초 ROHM社 BD34302EKV Dual DAC 탑재",
     "Triple AMP Mode·Tube Current Control 유지(SP3000T 계승)",
     "고급 소재 Titanium 적용"
   ],
   tags:["SP4000T","A&ultima","Tube","QuadTube","TripleTubeMode","TubeCurrent","TripleAMP","ROHM","Titanium","USB","배터리보호모드","Collection","컬렉션"],
   files:[
     {label:"SP4000T_사업계획서_0523.pdf", url:"files/SP4000T_BP_0523.pdf"},
   ],
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
   keyConcept:{title:"Crafting your only one sound", desc:"Dual Wheel System으로 만드는 나만의 사운드."},
   desc:"PD series의 최신 모델. 볼륨 휠과 별도의 Sound Master Wheel을 더한 Dual Wheel System 탑재.",
   positioning:"볼륨 휠 외에 Sound Master Wheel을 더한 Dual Wheel System으로 나만의 사운드를 직접 만드는 PD series 모델입니다.",
   newFeatures:[
     {name:"Sound Master", badge:"신규",
      what:"디바이스 상단 물리 휠로 Bass / Mid / Treble을 독립 조절(160단계, −8.0~8.0). 휠을 누를 때마다 Bass→Mid→Treble 순환, 조작 종료 후 팝업 자동 소멸.",
      when:"화면을 보지 않고 빠르게 음색을 조절할 때. 롱키로 Sound Studio 직접 진입."},
     {name:"Sound Studio", badge:"신규",
      what:"청력 데이터 기반 개인 맞춤 사운드 관리 화면. 유선 이어폰 전용(BT 미지원), 퍼스널 사운드·이퀄라이저·오디오스피어 3종 카드 구성.",
      when:"내 청력에 맞춘 사운드를 쓰고 싶을 때",
      detail:`■ Personal Sound
좌/우 청력 측정 결과 기반 최적화 사운드. 프리셋 최대 10개 저장. 청력 테스트는 좌/우 각 5회 × 6세트(총 30회).

■ Equalizer
Dot 3개 드래그 + 컨트롤 바(Heavier ↔ Brighter)로 음색 조정(Gain −8.0~8.0). Sound Master 휠로 Gain 연동 조절 가능.

■ Audiosphere
서라운드 공간 음향. 영상 감상 권장, 32bit/96kHz 이하에서만 적용.

| 모드 | 특징 |
| --- | --- |
| Subtle | 미세한 공간감 (디폴트) |
| Balanced | 균형 잡힌 공간감 |
| Immersive | 몰입감 있는 입체 음향 |
| Echoic | 잔향감이 강한 공간 음향 |`}
   ],
   keyFeatures:[
     "물리 휠로 Bass/Mid/Treble을 직관적으로 조절(Sound Master)",
     "청력 측정 기반 퍼스널 사운드 제공",
     "Audiosphere 공간 음향 4종 모드"
   ],
   tags:["PD20","PDseries","DualWheel","SoundMaster","사운드마스터","SoundStudio","사운드스튜디오","PersonalSound","퍼스널사운드","Equalizer","이퀄라이저","Audiosphere","오디오스피어"],
   files:[
     {label:"PD20_사업계획서_0324.pdf", url:"files/PD20_BP_0324.pdf"},
   ],
   links:[
     {label:"UX 시나리오 Figma", url:"https://www.figma.com/design/pat4EALAOO9XW7Hynp30Md/UX_Crimson_F_U?node-id=8627-2086&t=fhsxj64S8jwIqh1N-1"},
     {label:"UI Figma", url:"https://www.figma.com/design/iURsNWDWbdEOvnjSZzq3vj/UI_Crimson_F_U?node-id=9739-17741&t=YVqta9mRIAIVw2Wd-1"},
   ],
   images:[
     {src:"images/PD20/PD20_thumb.png", alt:"PD20 썸네일"},
     {src:"images/PD20/PD20_1.png", alt:"PD20 전면"},
     {src:"images/PD20/PD20_2.png", alt:"PD20 후면"},
     {src:"images/PD20/PD20_3.png", alt:"PD20 측면"},
     {src:"images/PD20/PD20_4.png", alt:"PD20 퍼스펙티브"},
   ]},
  {id:28, title:"PD10", category:"제품 모델", models:["PD series"], date:"2026.05.18", author:"Ellie", authorInitial:"E",
   credits:{PM:"Jay", PL:"Kenny", UX:"Luna", UI:"Luna"},
   keyConcept:{title:"Unlimited Music Life", desc:"뛰어난 음질과 제한 없는 확장을 핵심 컨셉으로 합니다."},
   desc:"A&futura SE400에서 PD10으로 재정의된 모델. 검증된 Hexa DAC 구조, Full Android, XLR 크래들을 핵심 컨셉으로 한 PD series DAP.",
   positioning:"A&futura SE400을 PD10으로 재정의한 모델. 검증된 Hexa DAC, Full Android, XLR 크래들을 핵심으로 한 PD series DAP로, A&futura 프리미엄 라인업의 Identity 연속성을 가지는 OS 변경 기점 모델입니다.",
   newFeatures:[
     {name:"AK4498EX 세계 최초 적용", badge:"신규",
      what:"SP3000에서 검증된 Hexa DAC 구조에 AKM社 신형 DAC(AK4498EX)를 세계 최초로 적용."},
     {name:"Full Android", badge:"신규",
      what:"꾸준한 시장 요구 사항인 Full Android 탑재.",
      was:"기존 제한적 APP 설치 → Full Android"},
     {name:"XLR 크래들", badge:"신규",
      what:"XLR 출력 지원 충전 크래들을 기본 아이템으로 구성해 제품 활용도·확장성 확보.",
      when:"거치 환경에서 밸런스(XLR) 출력을 쓸 때"},
     {name:"Octa-Core 적용", badge:"개선",
      what:"기존 SE300의 느린 속도 개선을 위해 Octa-Core 적용.",
      was:"SE300 대비 속도 개선"}
   ],
   keyFeatures:[
     "AKM 신형 DAC(AK4498EX) 세계 최초 적용 / 검증된 Hexa 구조",
     "고객 요구를 반영한 Full Android 탑재",
     "편리함과 확장성을 결합한 XLR 크래들 제공"
   ],
   specs:`!!table-equal!!
| DAP | XLR 크래들 |
| --- | --- |
| · MTK8385 Octa-Core<br>· AK4191EQ x2 & AK4498EX x4<br>· 5.5" 1080×1920<br>· 32bit / 768kHz / DSD512<br>· BAL 6.3V / UNBAL 3.3V<br>· 3.5mm(SPDIF) + 4.4mm<br>· 256GB / micro SD Max 1TB<br>· BT (LDAC · aptX HD)<br>· Dual Wi-Fi (2.4/5GHz)<br>· 5,050mAh (~10h)<br>· PD 3.0 충전<br>· Stainless Steel 316L | · XLR Balanced L/R 출력 (NEUTRIK)<br>· USB×3 — DAP 연결 / 충전 / CD-Ripper<br>· Pogo Pin 연결<br>· PD 3.0 충전<br>· Aluminum |`,
   tags:["PD10","PDseries","HexaDAC","FullAndroid","XLR","크래들","SE400"],
   files:[
     {label:"PD10_사업계획서_0404.pdf", url:"files/PD10_BP_0404.pdf"},
   ],
   links:[
     {label:"UX 시나리오 Figma", url:"https://www.figma.com/design/pat4EALAOO9XW7Hynp30Md/UX_Crimson_F_U?node-id=4115-1020&t=f24YMy1BBxKGLVBr-1"},
     {label:"UI Figma", url:"https://www.figma.com/design/iURsNWDWbdEOvnjSZzq3vj/UI_Crimson_F_U?node-id=10316-25448&t=33he04t05HBedODK-1"},
   ],
   images:[
     {src:"images/PD10/PD10_thumb.png", alt:"PD10 썸네일"},
     {src:"images/PD10/PD10_1.jpg", alt:"PD10 전면"},
     {src:"images/PD10/PD10_2.jpg", alt:"PD10 후면"},
     {src:"images/PD10/PD10_3.jpg", alt:"PD10 퍼스펙티브"},
     {src:"images/PD10/PD10_4.jpg", alt:"PD10 라이프스타일"},
   ]},
  {id:29, title:"SP3000", category:"제품 모델", models:["A&ultima"], date:"2026.05.15", author:"Ellie", authorInitial:"E",
   credits:{PM:"Jay", PL:"Kane", UX:"Lizzo", UI:"Luna"},
   keyConcept:{title:"Complete separation for noise", desc:"New Sound Frontier SP3000."},
   desc:"A&ultima 플래그십 DAP. Hexa DAC 구조(AK4191EQ x2 & AK4499EX x4)와 아날로그·디지털 신호 처리 분리로 최고 수준의 사운드를 구현한 모델.",
   positioning:"AK Flagship SP2000의 후속 A&ultima 플래그십 DAP. DAP 세계 최초로 디지털·아날로그 신호 처리를 물리적으로 분리한 Hexa DAC 구조로 최고 수준의 사운드를 구현하며, Market Leader 위치를 유지하는 모델입니다.",
   newFeatures:[
     {name:"HEXA DAC 구조", badge:"신규",
      what:"DAP 세계 최초로 디지털·아날로그 신호 처리를 물리적으로 분리. AK4191(Dual) + AK4499EX를 채널당 2개씩 총 4개(Quad)로 구성.",
      when:"노이즈를 최소화한 최고 음질이 필요할 때"},
     {name:"Stainless Steel 904L", badge:"신규",
      what:"DAP 세계 최초로 명품 시계에 사용되는 Stainless Steel 904L 소재를 적용해 명품 DAP로 포지셔닝."},
     {name:"무선·PD 충전", badge:"개선",
      what:"고속 충전 외 PD 충전과 무선 충전까지 적용해 차별화.",
      was:"기존 충전 방식 대비 PD·무선 충전 추가"}
   ],
   keyFeatures:[
     "디지털·아날로그 신호 처리를 물리적으로 분리한 HEXA DAC 구조",
     "AK4191(Dual) + AK4499EX Quad 구성",
     "DAP 세계 최초 Stainless Steel 904L 소재 적용",
     "All to DSD·출력 상향·무선 충전으로 경쟁력 강화"
   ],
   tags:["SP3000","A&ultima","HexaDAC","HEXADAC","StainlessSteel","904L","NoiseSeparation","노이즈분리","NewSoundFrontier"],
   files:[
     {label:"SP3000_사업계획서_0924.pdf", url:"files/SP3000_BP_0924.pdf"},
   ],
   links:[
     {label:"UX 시나리오 Figma", url:"https://www.figma.com/design/pat4EALAOO9XW7Hynp30Md/UX_Crimson_F_U?node-id=1376-6056&t=f24YMy1BBxKGLVBr-1"},
     {label:"UI Figma", url:"https://www.figma.com/design/CZdIQpzaGRVJOXF7ml8b7f/UI_Crimson_Common-Design-2.0-?node-id=28-54118&t=5TCq9OF8pi5rx8Pa-1"},
   ],
   images:[
     {src:"images/SP3000/SP3000_thumb.png", alt:"SP3000 썸네일"},
     {src:"images/SP3000/SP3000_1.png", alt:"SP3000 이미지 1"},
     {src:"images/SP3000/SP3000_2.png", alt:"SP3000 이미지 2"},
     {src:"images/SP3000/SP3000_3.png", alt:"SP3000 이미지 3"},
   ]},
  {id:30, title:"SP3000T", category:"제품 모델", models:["A&ultima"], date:"2026.05.16", author:"Ellie", authorInitial:"E",
   credits:{PM:"Luke", PL:"Ian", UX:"Lizzo", UI:"Luna"},
   keyConcept:{title:"One step close to Analog Sound", desc:"진짜 아날로그에 한발 더 가깝게."},
   desc:"SP3000을 기반으로 Real Tube 앰프를 탑재한 A&ultima DAP. Triple AMP System과 Dual DAC 구조로 아날로그 사운드를 구현한 모델.",
   positioning:"SP3000을 기반으로 오리지널 진공관(Real Tube)을 접목한 A&ultima DAP. 아날로그·디지털 신호 처리 분리에 아날로그 사운드 감성을 더해 A&ultima 라인업의 사운드 차별성을 잇는 모델입니다.",
   newFeatures:[
     {name:"Real Tube (Dual)", badge:"신규",
      what:"변형 진공관이 아닌 오리지널 진공관(Miniature Tube)을 Dual로 적용해 아날로그 사운드 감성 강화.",
      was:"SP2000T Single Tube → SP3000T Dual Tube"},
     {name:"Triple AMP System", badge:"신규",
      what:"OPAMP·진공관을 조합한 3가지 앰프 모드로 음색 선택.",
      detail:`| 모드 | 설명 |
| --- | --- |
| OP Mode | OPAMP 단독 구동 |
| Tube Mode | 진공관 앰프 단독 구동 |
| Hybrid Mode | OPAMP + Tube 혼합 구동 |`}
   ],
   keyFeatures:[
     "Triple AMP System(OP/Tube/Hybrid) 제공",
     "오리지널 Real Tube를 Dual로 적용한 아날로그 사운드",
     "AK4191 & AK4499 Dual 구성으로 A&ultima 퀄리티 유지",
     "가격·차별화를 위해 Aluminum 소재 적용"
   ],
   tags:["SP3000T","A&ultima","RealTube","진공관","TripleAMP","HybridAMP","DualDAC"],
   files:[
     {label:"SP3000T_사업계획서.pdf", url:"files/SP3000T_BP.pdf"},
   ],
   links:[
     {label:"UX 시나리오 Figma", url:"https://www.figma.com/design/pat4EALAOO9XW7Hynp30Md/UX_Crimson_F_U?node-id=1913-1516&t=f24YMy1BBxKGLVBr-1"},
     {label:"UI Figma", url:"https://www.figma.com/design/iURsNWDWbdEOvnjSZzq3vj/UI_Crimson_F_U?node-id=1620-10396&t=33he04t05HBedODK-1"},
   ],
   images:[
     {src:"images/SP3000T/SP3000T_thumb.png", alt:"SP3000T 썸네일"},
     {src:"images/SP3000T/SP3000T_1.png", alt:"SP3000T 이미지 1"},
     {src:"images/SP3000T/SP3000T_2.png", alt:"SP3000T 이미지 2"},
     {src:"images/SP3000T/SP3000T_3.png", alt:"SP3000T 이미지 3"},
     {src:"images/SP3000T/SP3000T_4.png", alt:"SP3000T 이미지 4"},
   ]},
  {id:31, title:"SP3000M", category:"제품 모델", models:["A&ultima"], date:"2026.05.17", author:"Ellie", authorInitial:"E",
   credits:{PM:"Jay", PL:"Kenny", UX:"Lizzo", UI:"Luna"},
   keyConcept:{title:"Perfect Balance", desc:"뛰어난 음질과 휴대성의 절묘한 조화."},
   desc:"SP3000 동일 Hexa DAC 구조에 휴대성을 극대화한 A&ultima DAP. 소형 사이즈(250g)로 Daily DAP를 지향하는 모델.",
   positioning:"SP3000과 동일한 Hexa DAC 구조를 유지하면서 휴대성을 극대화한 A&ultima 플래그십(250g). 가격·무게·크기로 구매를 망설였던 소비자에게 어필하는 파생 모델입니다.",
   newFeatures:[
     {name:"휴대성 극대화 설계", badge:"개선",
      what:"SP3000 동급 사운드를 유지하면서 4.1인치·250g으로 소형 경량화. 플래그십은 크고 무겁다는 인식에서 벗어난 새로운 경험 제공.",
      was:"SP3000 5.5인치/500g/904L → SP3000M 4.1인치/250g/Aluminum",
      detail:`| 항목 | SP3000 | SP3000M |
| --- | --- | --- |
| Display | 5.5inch | 4.1inch |
| 외관 크기 | 82.4 × 139.4mm | 61.7 × 128mm |
| 무게 | 500g | 250g |
| Material | Stainless Steel 904L | Aluminum |`}
   ],
   keyFeatures:[
     "SP3000 동일 Hexa DAC 구조 유지",
     "4.1인치·250g 소형 경량 바디로 휴대성 극대화",
     "가격 경쟁력($2,300)과 고품질 사운드 양립"
   ],
   tags:["SP3000M","A&ultima","HexaDAC","휴대성","PerfectBalance","소형","경량"],
   files:[
     {label:"SP3000M_사업계획서.pdf", url:"files/SP3000M_BP.pdf"},
   ],
   links:[
     {label:"UX 시나리오 Figma", url:"https://www.figma.com/design/pat4EALAOO9XW7Hynp30Md/UX_Crimson_F_U?node-id=3502-2&t=f24YMy1BBxKGLVBr-1"},
     {label:"UI Figma", url:"https://www.figma.com/design/iURsNWDWbdEOvnjSZzq3vj/UI_Crimson_F_U?node-id=3146-19766&t=33he04t05HBedODK-1"},
   ],
   images:[
     {src:"images/SP3000M/SP3000M_thumb.png", alt:"SP3000M 썸네일"},
     {src:"images/SP3000M/SP3000M_1.png", alt:"SP3000M 이미지 1"},
     {src:"images/SP3000M/SP3000M_2.png", alt:"SP3000M 이미지 2"},
     {src:"images/SP3000M/SP3000M_3.png", alt:"SP3000M 이미지 3"},
     {src:"images/SP3000M/SP3000M_4.png", alt:"SP3000M 이미지 4"},
   ]},
  {id:6, title:"PD5", category:"제품 모델", models:["PD series"], date:"2026.05.22", author:"Ellie", authorInitial:"E", noThumb:true,
   credits:{PM:"Luke", PL:"Hoya", UX:"Ellie", UI:"Luna"},
   keyConcept:{title:"Wherever you are, enjoy perfect sound", desc:"어디서나 실현되는 Hi-Fi Sound."},
   desc:"Octa-DAC 탑재 및 EnviroTune 기능 도입으로 사운드 퍼포먼스와 환경 적응형 음질을 동시에 구현한 PD series 신모델.",
   positioning:"Octa DAC와 환경 적응형 EnviroTune을 탑재해 사운드 퍼포먼스와 휴대성을 함께 노린 PD series 신모델. A&norma 시리즈의 Pocket Hi-Fi 컨셉을 계승합니다.",
   newFeatures:[
     {name:"DAC Mode", badge:"신규",
      what:"8개 DAC 중 구동 수를 직접 선택(Eco 4x / Performance 8x). On/Off가 아닌 모드 전환 방식이며, 알림 패널 빠른 설정으로 전환.",
      when:"재생 시간을 아끼고 싶을 때(Eco) vs 최상의 음질이 필요할 때(Performance)",
      detail:`| 모드 | 구동 DAC | 출력 (Unbal.) | 출력 (Bal.) |
| --- | --- | --- | --- |
| Eco Mode (4x DAC) | 4개 (Quad-DAC) | 3Vrms | 4Vrms |
| Performance Mode (8x DAC) | 8개 (Octa-DAC) | 4Vrms | 8Vrms |`},
     {name:"EnviroTune", badge:"신규",
      what:"마이크로 외부 노이즈를 측정해 최적의 사운드로 자동 조정하는 환경 적응형 기능.",
      when:"주변 소음 환경이 바뀔 때 자동 보정 (알림 패널 빠른 설정으로 접근)",
      detail:`| 상태 | 설명 |
| --- | --- |
| Off | EnviroTune 비활성 |
| Auto | 외부 노이즈를 자동 감지 및 보정 |
| Manual | 사용자가 직접 세부 설정 조정 (조절 범위는 개발 확인 후 추가 예정) |

※ 기능 구현 진행 중(5월 개발 완료 예정). Manual 세부 설정 항목은 추후 업데이트 예정.`}
   ],
   keyFeatures:[
     "DAP 최초 마이크 기반 적응형 사운드(EnviroTune)",
     "Octa DAC로 동급 최고 수준 음질",
     "Eco / Performance DAC Mode 선택 가능"
   ],
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
