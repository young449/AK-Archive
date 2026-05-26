// =============================================
// data_product.js
// 제품 카테고리 데이터
// 항목 추가 시 id는 고유한 숫자로 지정
// =============================================

const DATA_product = [
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
  {id:2, title:"PD20 — PD series 최신 모델", category:"제품 모델", models:["PD series"], date:"2026.05.21", author:"Luna", authorInitial:"L",
   credits:{PM:"Luke", PL:"Evan", UX:"Luna", UI:"Luna"},
   desc:"PD series의 최신 모델.",
   body:`■■ Sound Master

디바이스 상단의 물리 휠(Sound Master 전용)로 Bass / Mid / Treble 음역대를 독립 조절하는 기능입니다.
휠 조작 시 해당 모드의 오버레이 팝업이 화면 근처에 즉시 노출되며, 조작 종료 후 N초간 유지되다 자동으로 사라집니다.

■ 오버레이 팝업 동작

- 물리키를 누를 때마다 Bass → Mid → Treble 순환 구조
- 활성 모드 상태만 노출 (전체 3개 모드 동시 표시 아님)
- 이전 설정 값을 한 번 보여준 뒤, 수정되는 설정 값 반영
- 디폴트 값: Bass / 0
- 팝업 외부 영역 터치 시 팝업 닫힘 (볼륨 오버레이와 동일)
- 전체 모드 확인은 설정 → 사운드 마스터에서 가능

■ 컨트롤 범위

슬라이드 조작 160단계 (−8.0 ~ 8.0), UI 그래픽 눈금은 80칸으로 표시.
0은 원음 그대로(보정 없음), 단계가 커질수록 해당 음역대가 강하게 부각됩니다.

■ 화면 Off 상태에서 물리키 조작 시

LCD 화면이 꺼진 상태에서 Sound Master 물리키를 누르면 화면이 켜지며(점등) 팝업이 즉시 노출됩니다.
약 3초간 조작이 없으면 팝업이 자동으로 사라집니다. 물리키 잠금 상태에서는 동작하지 않습니다.

■ 듀얼 휠 사용 시 표시 우선순위

볼륨 휠과 Sound Master 휠을 연달아 조작할 경우, 화면이 겹치지 않고 **마지막으로 조작한 기능**의 오버레이만 표시됩니다.
(이전 DAP의 볼륨 최상위 방식과 달리, 스위치 형식으로 변경)

■ 롱키 — Sound Studio 진입

Sound Master 물리키를 길게 누르면 Sound Studio 화면으로 직접 진입합니다.

| 상태 | 동작 |
| --- | --- |
| Car Mode / 튜토리얼 / 청력 테스트 중 | 무반응 (토스트 없음) |
| USB Mode | 해당 시나리오 화면으로 이동 (토스트 O) |
| 외부 연결 신호 수신 중 (BT 싱크, CD 리퍼, AK Connect, AirPlay, 룬레디, 코부즈 등) | "사운드 스튜디오를 사용할 수 없습니다." 토스트 노출 |
| 내장앱 스트리밍 | 진입 가능 |


■■ Sound Studio

사용자의 청력 데이터를 기반으로 개인 맞춤형 사운드를 설정하고 관리하는 화면입니다.
홈 메인의 사운드 스튜디오 아이콘 선택 또는 Sound Master 롱키로 진입합니다.

■ 연결 상태에 따른 화면 구분

| 상태 | 설명 |
| --- | --- |
| 유선 이어폰 연결됨 | 이어폰 아이콘 + 기기명 + "연결됨" 표시. 번들 이어폰은 [PD20], 그 외는 [외부 기기 / External] |
| 연결 안 됨 | "연결 안 됨" 표시, 퍼스널 사운드 카드 비활성 |

- 세팅 이어폰은 유선 전용 (BT 연결 미지원)
- 비활성 상태에서도 카드 접기/펼치기는 가능

■ 사운드 카드 구성 (총 3종)

| 카드 | 설명 |
| --- | --- |
| 퍼스널 사운드 | 청력 측정 결과 기반, 좌우 편차 보정으로 최적화된 사운드 제공 |
| 이퀄라이저 | 주파수 대역별 레벨 직접 설정 |
| 오디오스피어 | 서라운드 효과 조절로 공간 음향 설정 |

- 퍼스널 사운드를 제외한 카드는 접기/펼치기 제공
- 카드별 토글 스위치로 On/Off 가능 (EQ 제외)
- 카드 하단 안내: 퍼스널 사운드 및 이퀄라이저는 32bit/192kHz 이하, 오디오스피어는 32bit/96kHz 이하에서만 적용


■■ Personal Sound (퍼스널 사운드)

■ 세부 설정

- 타이틀 + 설명 + 토글 스위치 + 그래프 + 버튼 2개(Profiles / +) 제공
- 그래프: 좌/우 청력 값(dB, 주파수 대역) 시각화. 선택된 프리셋 세팅 값 실시간 반영
- 초기(세팅 값 없을 때): 그래프 바 & Name 정보 미제공, "퍼스널 사운드를 추가해 주세요." 문구만 노출
- 툴팁: i 아이콘 터치 시 기능 설명 노출, 다른 영역 터치 시 자동 닫힘

■ Profiles (바텀 시트)

- 최대 10개 저장, 최대 5개 노출 (그 이상 스크롤)
- 저장된 프로필 없을 경우 "저장된 프로필 없음" 노출
- 현재 적용된 프리셋 항목에 ✔ 표시, 탭 시 즉시 적용
- 이름 편집 / 삭제 팝업 제공

■ 새 프리셋 추가 (+ 버튼)

1. 팝업: "정확한 청력 측정을 위해, 제공된 이어폰을 사용해 주세요." → 확인
2. 이어폰 미연결 시 하단 토스트: "이어폰이 연결되지 않았습니다."
3. 튜토리얼 안내 화면 → 테스트 시작

■ 청력 테스트 진행

- 좌/우 각각 5회 × 6세트 반복 (총 30회)
- 측정 방향에 따라 이미지 활성화 (왼쪽 → 오른쪽 순서)
- 응답 버튼: [들림] / [안 들림] — 선택 즉시 다음 테스트로 진행
- 테스트 중 볼륨 조작 불가 팝업 제공
- 테스트 종료 확인 팝업: 취소 / 종료

■ 오류 중단

예기치 않은 오류(네트워크 끊김 등) 발생 시 "테스트 중단" 팝업 노출.
Audiodo 오류 화면은 미노출, 팝업으로 즉시 대체.
- 종료: Sound Studio 메인 복귀
- 다시 시작: 안내 화면 스킵, 왼쪽 테스트부터 재시작

■ 프로필 저장 (3단계)

이름 → 나이 → 성별 순서로 입력. 각 단계 진행 Bar로 시각 안내.
성별 옵션: 남자 / 여자 / 논바이너리 / 응답 거부


■■ Equalizer (이퀄라이저)

■ 카드 구성

- 접힘: 타이틀 + 설명 + 토글 스위치만 노출
- 펼침: 그래프 컨트롤 영역 + Profiles / 되돌리기 / 저장 버튼

■ 그래프 컨트롤

| 조작 | 설명 |
| --- | --- |
| Dot 3개 (드래그) | 음색 실시간 조정 |
| 하단 컨트롤 바 | Heavier ↔ Brighter 전체 음색 방향 설정 |

- Gain 범위: −8.0 ~ 8.0 (Sound Master와 동일, 12/11 확정)
- 디폴트 값: Audiodo 앱과 동일
- Sound Master 휠로 Gain 연동 조절 가능
- 초기 EQ명: "이름 없음 / Untitled", 저장 후: "[EQ: 저장명]"

■ 버튼 동작

- Profiles: 저장된 EQ 목록 바텀 시트로 노출 (최대 10개, 5개까지 표시 후 스크롤)
- 되돌리기: 현재 조정 값을 기본값(Flat Curve)으로 즉시 복원
- 저장: 현재 EQ 값을 새 프리셋으로 저장하는 팝업 노출


■■ Audiosphere (오디오스피어)

서라운드 효과로 공간 음향을 설정하는 카드. 주로 영상 감상용으로 권장합니다.

■ 카드 구성

- 접힘: 타이틀 + 설명 + 토글 스위치만 노출
- 펼침: 음향 효과 시각화 이미지 + 모드 선택 버튼 4개

■ 공간 음향 모드

| 모드 | 특징 |
| --- | --- |
| Subtle | 미세한 공간감 (디폴트) |
| Balanced | 균형 잡힌 공간감 |
| Immersive | 몰입감 있는 입체 음향 |
| Echoic | 잔향감이 강한 공간 음향 |

- 선택 즉시 해당 효과 적용
- 선택된 모드에 맞게 시각화 이미지 변경`,
   tags:["PD20","SoundMaster","SoundStudio","퍼스널사운드","이퀄라이저","오디오스피어","청력테스트","물리키","오버레이","듀얼휠"],
   files:[],
   links:[
     {label:"UX 시나리오 — Figma", url:"https://www.figma.com/design/pat4EALAOO9XW7Hynp30Md/UX_Crimson_F_U?node-id=8627-2086&t=fhsxj64S8jwIqh1N-1"},
     {label:"UI — Figma", url:"https://www.figma.com/design/iURsNWDWbdEOvnjSZzq3vj/UI_Crimson_F_U?node-id=9739-17741&t=YVqta9mRIAIVw2Wd-1"},
   ],
   images:[
     {src:"PD20_Thumb.png", alt:"PD20 썸네일"},
   ]},
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
   // ↓ 첨부파일 추가 방법: {label:"표시될 파일명", url:"파일 경로 또는 링크"}
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
   ]}
];
