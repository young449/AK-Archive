// =============================================
// data_glossary.js
// AK 용어 카테고리 데이터
// 항목 추가 시 id는 고유한 숫자로 지정
// glossTab: "HW" | "SW" | "로컬저장소" | "서비스 & 연결" | "기능" | "개발"
// =============================================

const DATA_glossary = [
  {id:301,title:"DAP (Digital Audio Player)",category:"용어사전",glossTab:"HW",models:[],date:"2026.05.18",author:"Ellie",authorInitial:"E",
   desc:"Digital Audio Player의 약자로, 휴대하며 사용하는 포터블 음향기기입니다.",
   body:`■ 개요

Digital Audio Player의 약자로, 휴대하며 사용하는 포터블 음향기기입니다.

SP4000과 같은 제품이 대표적인 예시이며, 고음질 음원 재생에 특화된 전용 플레이어입니다.
스마트폰과 달리 음악 재생 자체에 최적화된 하드웨어와 DAC(디지털-아날로그 변환기)를 탑재하여 더 높은 음질을 제공합니다.

■ 한 줄 요약

음악 감상 전용으로 만들어진 고음질 휴대용 플레이어`,
   tags:["DAP","DigitalAudioPlayer","포터블","고음질","하드웨어"],links:[]},
  {id:302,title:"디바이스 (Device)",category:"용어사전",glossTab:"HW",models:[],date:"2026.05.18",author:"Ellie",authorInitial:"E",
   desc:"거치형(스탠드얼론) 음향기기로, 특정 공간에 고정해두고 사용하는 음향기기입니다.",
   body:`■ 개요

거치형(스탠드얼론) 음향기기로, 특정 공간에 고정해두고 사용하는 음향기기입니다.

DAP와 달리 이동을 전제로 하지 않고 홈 오디오 환경에서 사용합니다. 네트워크 스트리밍, 대용량 저장, 외부 오디오 기기 연결 등 확장성 있는 기능을 제공합니다.

■ 한 줄 요약

집이나 사무실처럼 고정된 환경에서 사용하는 거치형 오디오 플레이어`,
   tags:["Device","디바이스","거치형","하드웨어","홈오디오"],links:[]},
  {id:303,title:"앰프 (AMP)",category:"용어사전",glossTab:"HW",models:[],date:"2026.05.26",author:"Ellie",authorInitial:"E",
   desc:"작은 오디오 신호를 증폭해 이어폰·헤드폰·스피커를 충분한 출력으로 재생할 수 있게 만드는 장치입니다.",
   body:`■ 개요

AMP(Amplifier)는 작은 오디오 신호를 증폭해 이어폰·헤드폰·스피커를 충분한 출력으로 재생할 수 있게 만드는 장치입니다.
출력이 부족한 기기에서는 볼륨은 커도 소리가 답답하거나 저음이 퍼지고, 해상력이 떨어지는 느낌이 날 수 있습니다.

■ DAC vs AMP

| 구분 | DAC | AMP |
| --- | --- | --- |
| 의미 | Digital to Analog Converter | Amplifier |
| 역할 | 디지털 신호를 소리 신호로 변환 | 소리 신호를 증폭 |
| 담당 | "소리를 만들어냄" | "소리를 키움" |
| 영향 | 해상력, 음색 | 출력, 구동력 |

■ 관계

DAC → AMP 순서로 동작합니다.

즉:
1. DAC가 음악 데이터를 소리 신호로 바꾸고
2. AMP가 그 신호를 충분히 크게 증폭합니다.

■ Hi-Fi 기본 구성에서의 앰프

Hi-Fi 오디오 시스템은 소스기기 → 앰프 → 스피커 순으로 구성됩니다.

| 구성요소 | 역할 |
| --- | --- |
| 소스기기 | 음반이나 데이터를 읽어내어 전기신호를 생성. LP, CD, 네트워크 플레이어 등 |
| 앰프 | 소스기기로부터 유입된 작은 신호전류를 증폭시켜 스피커를 진동시키도록 만든 전기장치 |
| 스피커 | 앰프에서 흘려주는 전기를 운동에너지로 전환해서 소리의 파동을 발생시키는 장치 |

■ 앰프의 주요 역할

- 전기신호 증폭 (Amplifier): 신호를 스피커를 구동할 수 있는 크기로 확장
- 소스기기 선택 (Selector): 입력 소스를 선택
- 음량·음색 조절 (Control): 볼륨을 통해 음량, 음색을 조절

■ 앰프의 종류

| 종류 | 설명 |
| --- | --- |
| 인티앰프 (Integrated Amp) | 프리+파워를 한 개의 바디로 설계한 일체형 앰프 |
| 프리앰프 (Pre Amp) | 소스를 선택하고 음량·음색을 조절하는 컨트롤 기능 담당 |
| 파워앰프 (Power Amp) | 신호를 스피커를 구동할 수 있는 크기로 확장하는 증폭 기능 담당 |
| 진공관앰프 | 열전자 방출로 전자 흐름을 제어. 부드럽고 따뜻한 음색. 소모품으로 수명 존재 |
| TR앰프 (트랜지스터 앰프) | 반도체 소자 사용. 현대 앰프의 주류 |

■ AMP Class 종류

| Class | 증폭 방식 | 장점 | 단점 |
| --- | --- | --- | --- |
| Class A | +/- 신호 일괄 +로 계속 증폭 | 음질 왜곡이 가장 적음 | 전류 소모와 발열 높음 |
| Class B | +/- 신호 개별 증폭 | 전류 효율 우수, 발열 낮음 | 음질 왜곡 큰 편 |
| Class AB | +/- 신호 개별 증폭, 일정 출력까지는 + 증폭 | 음질 왜곡 적음 | 전류 효율과 발열이 중간 수준 |

■ 진공관 특징

- 열전자를 방출시켜 전자의 흐름을 제어하는 방식
- 반드시 뜨겁게 가열되어야 작동
- 소모품이라 수명이 존재
- 부드럽고 따뜻한 음색으로 평가받음
- 구조: Cathode(음극) 가열 → 전자 생성 → Plate(양극)의 + 전압에 이끌림 → Grid 전극으로 흐름 제어

■ 한 줄 요약

AMP는 오디오 신호를 증폭해 기기를 안정적으로 구동하게 만드는 장치입니다.`,
   tags:["AMP","앰프","DAC","증폭","구동력"],links:[],
   images:[
     {src:"images/glossary/hw-amp-1.jpg",caption:"Hi-Fi 기본 구성 — 소스기기 · 앰프 · 스피커"},
   ]},

  {id:304,title:"로컬 (Local)",category:"용어사전",glossTab:"Local",models:[],date:"2026.05.18",author:"Ellie",authorInitial:"E",
   desc:"사용자가 음원 파일을 기기에 직접 저장하여 재생하는 방식입니다.",
   body:`■ 개요

사용자가 음원 파일을 기기에 직접 저장하여 재생하는 방식입니다.

SD 카드, 내부 저장소, USB 등 물리적 저장 매체를 기반으로 동작하며, 인터넷 연결 없이도 오프라인에서 재생할 수 있습니다.

■ 한 줄 요약

파일을 기기에 직접 넣어 재생하는 방식. 인터넷 불필요`,
   tags:["Local","로컬","내부저장소","SD카드","USB","오프라인"],links:[]},
  {id:305,title:"로컬 메뉴 (Local Menu)",category:"용어사전",glossTab:"Local",models:[],date:"2026.05.18",author:"Ellie",authorInitial:"E",
   desc:"AK DAP·디바이스에서 기기에 직접 저장된 음원 파일을 탐색하고 재생하기 위한 메뉴 영역입니다.",
   body:`■ 개요

로컬 메뉴는 AK DAP·디바이스에서 기기에 직접 저장된 음원 파일을 탐색하고 재생하기 위한 메뉴 영역입니다.
네트워크 스트리밍과 달리 인터넷 연결 없이도 사용할 수 있으며, SMB 네트워크 공유, CUE 시트, CD 라이브러리, HD 오디오 필터 등 다양한 방식으로 음원에 접근할 수 있습니다.

■ 포함 항목

| 항목 | 설명 |
| --- | --- |
| SMB (Server Message Block) | 네트워크 공유 폴더 접근 |
| CUE 시트 | 앨범 단위 트랙 탐색 |
| CD 라이브러리 | CD 리핑 및 저장 |
| HD 오디오 | 고음질 파일 필터 뷰 |`,
   tags:["Local Menu","로컬 메뉴"],links:[
     {label:"CUE 시트",url:"#search:CUE 시트"},
     {label:"CD 라이브러리",url:"#search:CD 라이브러리"},
     {label:"HD 오디오",url:"#search:HD 오디오"},
   ]},
  {id:306,title:"CUE 시트 (CUE Sheet)",category:"용어사전",glossTab:"Local",models:[],date:"2026.05.18",author:"Ellie",authorInitial:"E",
   desc:"앨범 단위로 묶인 오디오 파일의 트랙 정보를 담고 있는 메타데이터 텍스트 파일입니다.",
   body:`■ 개요

앨범 단위로 묶인 오디오 파일의 트랙 정보를 담고 있는 메타데이터 텍스트 파일입니다.

■ CUE 파일의 구조와 역할

- 하나의 큰 오디오 파일(예: 앨범 전체가 1개 파일) 안에서 각 트랙의 시작·끝 위치 정보를 담고 있습니다.
- CUE 파일 자체에는 음악 데이터가 없으며, 반드시 오디오 파일과 함께 있어야 재생 가능합니다.
- 파일 형식은 일반 텍스트(.cue)로, 메모장으로도 내용 확인 가능합니다.

■ 플레이리스트 vs CUE 차이

| | 플레이리스트 | CUE 시트 |
| --- | --- | --- |
| 파일 구성 | 개별 트랙 파일 여러 개 | 큰 파일 1개 + .cue 파일 1개 |
| 관리 방식 | 파일 각각 관리 | 하나로 압축해서 관리 |
| 별도 도구 | 불필요 | CUE 지원 프로그램 필요 |
| 예시 | A.mp3, B.mp3, C.mp3 | Album.flac + Album.cue |

■ 한 줄 요약

앨범 전체를 1개 파일로 관리하면서, CUE 파일로 각 트랙을 분리·탐색할 수 있게 해주는 방식`,
   tags:["CUE Sheet","CUE 시트","메타데이터","앨범단위","트랙분리",".cue"],links:[{label:"로컬 메뉴 (Local Menu)",url:"#open:305"}]},
  {id:307,title:"CD 라이브러리 (CD Library)",category:"용어사전",glossTab:"Local",models:[],date:"2026.05.18",author:"Ellie",authorInitial:"E",
   desc:"CD에 담긴 음원, 앨범 아트 등의 데이터를 디지털 파일로 복사해 기기에 저장하는 기능입니다.",
   body:`■ 개요

CD에 담긴 음원, 앨범 아트 등의 데이터를 디지털 파일로 복사해 기기에 저장하는 기능입니다.
이 복사 과정을 리핑(Ripping)이라고 부르며, CD를 DAP·디바이스에서 재생 가능한 파일 형태(FLAC, WAV 등)로 변환해 저장합니다.

■ 리핑 시 가져올 수 있는 것

- 음원 파일 (트랙 데이터)
- 앨범 이미지 (커버 아트)
- 트랙 메타데이터 (곡명, 아티스트 등)

■ 한 줄 요약

CD를 DAP에 디지털 파일로 옮기는 과정. 이 복사 작업을 '리핑'이라고 함`,
   tags:["CD Library","CD 라이브러리","CDRipping","CD리핑","FLAC","WAV"],links:[{label:"로컬 메뉴 (Local Menu)",url:"#open:305"}]},
  {id:308,title:"HD 오디오 (HD Audio)",category:"용어사전",glossTab:"Local",models:[],date:"2026.05.18",author:"Ellie",authorInitial:"E",
   desc:"로컬에 저장된 파일 중 고음질 파일만 필터링해서 보여주는 목록입니다. 이전 명칭: MQS.",
   body:`■ 개요

로컬에 저장된 파일 중 고음질 파일만 필터링해서 보여주는 목록입니다.
이전에는 MQS(Mastering Quality Sound) 라는 이름으로 불렸으며, 명칭이 HD 오디오로 변경되었습니다.

■ SMB와의 차이

| | SMB | HD 오디오 |
| --- | --- | --- |
| 파일 위치 | 네트워크 공유 폴더 | 로컬 저장소 |
| 필터 기준 | 없음 (전체 접근) | 고음질 파일만 |
| 목적 | 네트워크 파일 접근 | 고음질 파일 탐색 |

SMB와는 별개의 기능으로, 로컬에 저장된 파일 중 고음질 규격에 해당하는 파일만 추려서 컨셉 리스트 형태로 보여줍니다.

■ 한 줄 요약

로컬 파일 중 고음질(HD) 파일만 모아서 보여주는 필터 뷰. 과거 명칭은 MQS`,
   tags:["HD Audio","HD 오디오","고음질","MQS"],links:[{label:"로컬 메뉴 (Local Menu)",url:"#open:305"}]},
  {id:309,title:"리모트 (Remote)",category:"용어사전",glossTab:"Service",models:[],date:"2026.05.18",author:"Ellie",authorInitial:"E",
   desc:"DAP 및 디바이스를 원격으로 제어하는 기능으로, 앱을 통해 기기를 조작하는 방식입니다.",
   body:`■ 개요

DAP 및 디바이스를 원격으로 제어하는 기능으로, 앱을 통해 기기를 조작하는 방식입니다.

크게 두 가지 앱 기능과 연관됩니다.

■ 연관 기능

| 기능 | 설명 |
| --- | --- |
| 라이브러리 | MP3 등 음원 파일을 직접 기기에 다운로드하여 저장·재생 |
| 에어러블 | 구글 플레이스토어에서 스트리밍 앱을 다운로드하여 사용 |

에어러블의 경우, AK(아스텔앤컨)이 DAP·디바이스 사용성에 맞게 디자인한 7종 앱을 기본 제공하며, 그 외 앱은 사용자가 스토어에서 직접 설치해 사용할 수 있습니다.

■ 한 줄 요약

기기를 앱으로 원격 조작하는 기능. 음원 저장(라이브러리)과 스트리밍(에어러블) 두 가지 방식을 지원`,
   tags:["Remote","리모트","원격제어","DAP","디바이스","라이브러리","에어러블"],links:[]},
  {id:310,title:"에어러블 (airable)",category:"용어사전",glossTab:"Service",models:[],date:"2026.05.18",author:"Ellie",authorInitial:"E",
   desc:"오디오 기기 제조사를 위한 스트리밍·라디오·팟캐스트 콘텐츠 통합 연동 솔루션입니다.",
   body:`■■ 개요

오디오 기기 제조사를 위한 스트리밍·라디오·팟캐스트 콘텐츠 통합 연동 솔루션입니다.
TIDAL, Qobuz, Deezer 같은 여러 스트리밍 서비스를 API 형태로 묶어 제공하는 미들웨어 역할을 합니다. 제조사는 에어러블 하나만 도입하면 여러 서비스를 한 번에 연동할 수 있고, 각 브랜드의 UX 컨셉에 맞게 UI는 직접 구현합니다.

■ 동작 방식

- 웹 API 기반으로 동작하며, 스마트폰 앱이나 PC에서 리모트로 기기 조작 가능
- 앱 설치 없이 기기 내장 인터페이스로 스트리밍 사용 가능
- 하나의 계정으로 여러 디바이스 연동 가능
- 단, 에어러블이 지원하는 서비스만 사용 가능 (예: Spotify는 에어러블로 불가)

■ AK 기본 제공 7종 서비스

| 서비스 | 구분 |
| --- | --- |
| TIDAL | 스트리밍 |
| Deezer | 스트리밍 |
| Qobuz | 스트리밍 |
| Amazon Music | 스트리밍 |
| HighRes Audio | 고음질 스트리밍 |
| Spreaker (구 Podcast) | 팟캐스트 |
| Internet Radio | 인터넷 라디오 |

■■ 왜 필요한가?

에어러블 없이 TIDAL, Qobuz, Deezer 등을 각각 연동하려면 서비스별로 별도 계약·개발·유지보수가 필요합니다. 에어러블은 이 과정을 한 번에 해결해주어 제조사의 비용과 리소스 부담을 크게 줄여줍니다.

■■ 한 줄 요약

여러 스트리밍 서비스를 하나의 API로 묶어주는 B2B 미들웨어. 제조사가 개별 서비스와 직접 제휴·개발하는 수고를 덜어줌`,
   tags:["airable","에어러블","통합연동솔루션","내장인터페이스","B2B","TIDAL","타이달","Deezer","디저","Qobuz","코부즈","Amazon Music","아마존뮤직","HighRes Audio","하이레스오디오","Podcast","팟캐스트","InternetRadio","인터넷라디오"],links:[]},
  {id:311,title:"스트리밍 앱 (Streaming App)",category:"용어사전",glossTab:"Service",models:[],date:"2026.05.18",author:"Ellie",authorInitial:"E",
   desc:"에어러블에 포함되지 않은 스트리밍 서비스를 APK 설치나 자체 앱 스토어를 통해 직접 설치해 사용하는 방식입니다.",
   body:`■ 개요

에어러블에 포함되지 않은 스트리밍 서비스를 APK 설치나 자체 앱 스토어를 통해 직접 설치해 사용하는 방식입니다. 에어러블과 달리 웹 API 기반이 아닌 안드로이드 앱을 직접 실행하는 방식으로, Spotify처럼 에어러블이 지원하지 않는 서비스를 사용할 때 활용합니다.

■ 에어러블 vs 스트리밍 앱 비교

| | 에어러블 | 스트리밍 앱 |
| --- | --- | --- |
| 방식 | 웹 API 기반 | 안드로이드 앱 직접 실행 |
| 설치 | 기기 내장 | APK 또는 앱 스토어 설치 |
| 서비스 범위 | 지원 서비스로 제한 | 다양한 앱 사용 가능 |
| 최적화 | DAP에 최적화됨 | 기기 성능에 따라 UI/속도 차이 있음 |

■ 한 줄 요약

에어러블 미지원 서비스(Spotify 등)를 사용하기 위해 앱을 직접 설치하는 방식. 자유도는 높지만 기기 최적화는 낮을 수 있음`,
   tags:["Streaming App","스트리밍 앱","APK","Spotify","스포티파이","AppleMusic","애플뮤직","YouTubeMusic","유튜브뮤직"],links:[]},
  {id:312,title:"SMB (Server Message Block)",category:"용어사전",glossTab:"Service",models:[],date:"2026.05.18",author:"Ellie",authorInitial:"E",
   desc:"네트워크를 통해 다른 기기의 폴더/파일에 접근할 수 있게 해주는 파일 공유 프로토콜입니다.",
   body:`■ 개요

Server Message Block의 약자로, 네트워크를 통해 다른 기기의 폴더/파일에 접근할 수 있게 해주는 파일 공유 프로토콜입니다.
DAP·디바이스에서 SMB를 사용하려면 서버 환경 구축이 먼저 필요합니다.

■ 환경 구축 방법

- Windows: 기본 SMB 공유 기능 사용 가능
- Mac: SAMBA(삼바) 별도 설치 및 구축 필요

■ 폴더가 안 보일 때 → SMB 스캔 필요

- SMB 스캔이란, 로컬 DB 리스트에 해당 공유 폴더가 나타나도록 기기가 네트워크를 탐색하는 동작입니다.
- 접속할 폴더가 목록에 없을 경우 수동으로 스캔을 실행해야 합니다.

■ 한 줄 요약

같은 와이파이 네트워크 안에서 PC·NAS 등의 폴더를 DAP에 연결해 음악을 재생하는 방식. 폴더가 안 보이면 SMB 스캔 실행`,
   tags:["SMB","삼바","NAS","나스","네트워크","와이파이","파일공유"],links:[]},
  {id:313,title:"이퀄라이저 (EQ)",category:"용어사전",glossTab:"Feature",models:[],date:"2026.05.26",author:"Ellie",authorInitial:"E",
   desc:"특정 주파수 영역을 조절해 원하는 음색으로 바꾸는 기능 또는 설정입니다.",
   body:`■ 개요

EQ(Equalizer)는 특정 주파수 영역을 조절해 원하는 음색으로 바꾸는 기능 또는 설정을 의미합니다.
AK DAP에서는 Graphic EQ(Main)와 Parametric EQ(Advanced) 두 가지 방식을 제공합니다.

■ GEQ — Graphic Equalizer (Main 탭)

각각의 주파수 대역별로 Gain 값만 조절하는 방식입니다.
슬라이더 형태라 그래픽처럼 음선 곡선을 시각적으로 볼 수 있으며, 단순하고 직관적인 설정이 가능합니다.

- 20-band Frequency (30Hz ~ 18kHz)
- 각 주파수 대역의 Gain 값 표기
- 원하는 주파수 대역의 Gain을 높이거나 낮춤
- 현재 주파수에 설정된 Gain 값 (-5.0 dB ~ 5.0 dB)

■ PEQ — Parametric Equalizer (Advanced 탭)

중심 주파수와 함께 인접 주파수 대역(Q값)을 임의로 설정하여 Gain 값을 조절하는 방식입니다.
GEQ와 가장 큰 차이는 Q값을 설정할 수 있다는 점으로, 세밀하고 전문적인 설정이 가능합니다.

- 20-band Frequency (30Hz ~ 18kHz)
- 현재 설정된 Gain 값 (-5.0 dB ~ 5.0 dB)
- Q값 (Bandwidth, 1.0 ~ 4.0): Q값이 높을수록 대역폭이 좁아지고, Q값이 낮을수록 대역폭이 넓어짐
- 중심 주파수와 Q값의 설정값을 그래픽으로 표현

■ GEQ vs PEQ 비교

| | GEQ (Graphic EQ) | PEQ (Parametric EQ) |
| --- | --- | --- |
| 탭 위치 | Main | Advanced |
| 조절 항목 | Gain만 | Gain + Q값(대역폭) |
| 설정 방식 | 슬라이더 | 수치 직접 입력 |
| 난이도 | 직관적, 간단 | 세밀하고 전문적 |

■ 한 줄 요약

EQ는 주파수 대역을 조절해 음악의 음색 밸런스를 바꾸는 기능. GEQ는 직관적, PEQ는 Q값까지 조절하는 고급 설정`,
   tags:["EQ","이퀄라이저","주파수","음색","밸런스","GEQ","PEQ","Graphic EQ","Parametric EQ","Q값"],links:[],
   images:[
     {src:"images/glossary/feature-equalizer-1.jpg",caption:"GEQ — Graphic Equalizer (Main 탭)"},
     {src:"images/glossary/feature-equalizer-2.jpg",caption:"PEQ — Parametric Equalizer (Advanced 탭)"},
   ]},
  {id:314,title:"컬렉션 (Collection)",category:"용어사전",glossTab:"Feature",models:[],date:"2026.05.18",author:"Ellie",authorInitial:"E",
   desc:"기존 Favorite(즐겨찾기)을 재정의한 북마크형 저장 기능. 노래·앨범·아티스트·플레이리스트를 폴더별로 저장·관리할 수 있습니다.",
   body:`■■ 개요

기존 Favorite(즐겨찾기)의 노래 단독 저장 기능을 SP4000T부터 확장 재정의한 북마크형 저장 기능입니다.
추가/삭제 토글 방식으로 동작하며(ex. 북마크), 컬렉션 내부에서 휴지통 아이콘으로는 로컬 음원 파일을 직접 삭제할 수 없습니다.

■■ 변경 전 / 후

| 구분 | 기존 Favorite | 컬렉션 (Collection) |
| --- | --- | --- |
| 명칭 | 즐겨찾기 | 컬렉션 |
| 저장 대상 | 노래만 | 노래 / 앨범 / 아티스트 / 플레이리스트 |
| 폴더 구조 | 없음 | 4개 폴더로 분류 |
| 최근 추가 | 없음 | 최근 추가된 노래 (최대 20개, 1개월 이내) |

■ 폴더 구조

- 노래: 이름순 / 앨범순 / 아티스트순 / 발매순 / 최근 추가순
- 앨범: 이름순 / 아티스트순 / 발매순
- 아티스트: 이름순 / 발매순 / 최근 추가순
- 플레이리스트: 별도 정렬 제공
- 각 폴더 정렬은 홈 탭 정렬과 독립적으로 동작

■ 최근 추가된 노래

- 노래만 표시 (앨범·아티스트·플리 제외)
- 최대 20개, 추가 시점으로부터 1개월 이내 항목만 노출
- 가장 최근 추가 항목이 최상단 배치

■ 한 줄 요약

노래·앨범·아티스트·플리를 폴더별로 즐겨찾기처럼 저장하는 기능. 기존 Favorite을 SP4000T부터 확장 재정의`,
   tags:["Collection","컬렉션","북마크","노래","앨범","아티스트","플레이리스트","최근추가된노래"],links:[{label:"기능 히스토리 보기",url:"#search:컬렉션 Favorite 확장"}]},
  {id:315,title:"즐겨찾기 (Favorite)",category:"용어사전",glossTab:"Feature",models:[],date:"2026.05.18",author:"Ellie",authorInitial:"E",
   desc:"SP4000T 이전 모델에서 사용하던 노래 단독 즐겨찾기 기능. SP4000T부터 '컬렉션'으로 재정의되었습니다.",
   body:`■ 개요

SP4000T 이전 모델에서 사용하던 노래 단독 즐겨찾기 기능입니다.
노래만 저장 가능하며, 폴더 구조 없이 단일 리스트로 관리됩니다.

SP4000T부터는 '컬렉션(Collection)'으로 명칭이 변경되고 기능이 대폭 확장되었습니다.
SP4000T 이전 구형 모델은 Favorite 명칭과 기능이 그대로 유지됩니다.

■ 스펙 요약

| 항목 | 내용 |
| --- | --- |
| 저장 대상 | 노래만 |
| 폴더 구조 | 없음 (단일 리스트) |
| 적용 모델 | SP4000T 이전 모델 |
| 이후 버전 | 컬렉션(Collection)으로 대체 |

■ 한 줄 요약

노래만 담는 단순 즐겨찾기. SP4000T부터 컬렉션으로 기능 확장되어 대체됨`,
   tags:["Favorite","즐겨찾기"],links:[{label:"컬렉션 용어사전 보기",url:"#search:컬렉션"}]},
  {id:316,title:"개발단계",category:"용어사전",glossTab:"Dev",models:[],date:"2026.06.01",author:"Ellie",authorInitial:"E",
   desc:"AK 제품의 양산 전 개발 과정에서 거치는 이벤트 단계입니다. EVM → WS → ES → TP → MP 순으로 진행됩니다.",
   body:`■ 개요

AK 제품의 개발은 양산(MP) 전까지 여러 이벤트 단계를 순차적으로 거칩니다.
각 단계에서 시료를 제작하고 품질을 검증하며, 문제가 해결되면 다음 단계로 진행합니다.

■ 단계별 요약

| 단계 | 풀네임 | 핵심 내용 |
| --- | --- | --- |
| EVM | Evaluation Module | Real Size PCB가 아닌 훨씬 큰 크기의 간이 PCB를 만들어 주요 회로 구동을 선행적으로 파악 |
| WS | Working Sample | 검증된 회로를 Real Size PCB로 처음 만들어서 동작을 확인하는 단계이며, 실제 기구와 첫 조립 진행 |
| ES | Engineering Sample | WS 검증 및 수정 내용이 반영되어 50대 이상 조립하는 단계이며, 품질 1차 검토 진행 |
| TP | Test Production | ES 검증 및 수정 내용이 반영되어 100대 이상 조립하는 단계이며, 품질 2차 검토 진행 |
| MP | Mass Production | 양산. 제품 출시 및 소비자 피드백 검토, 개발완료보고서 작성, R/C 일정 수립 및 진행 |

■ WS (Working Sample) 이벤트

- 정의: 제품 기획 및 EVM 단계를 거쳐, 처음으로 Real size 회로를 구현하는 단계. 연구소 주관으로 진행하며 EVM 단계에서 검증된 기술적 부분의 최초 실현 단계
- 주요 업무: 실제 양산 제품에 들어가는 PCB와 동일 사이즈로 PCB를 만들어 전반적인 동작 검증 진행 / 기구 역시 실제 양산과 동일한 소재의 금속으로 가공해 Real Size PCB와 조립 진행 및 검증
- 세부 업무: 회로 설계, PCB 설계, PCB artwork(CAD), PCB 발주, PCB 입고, PCB SMT, PCB 검증 / 기본적인 회로 동작 구현을 위한 S/W bring-up 진행
- 결과물: WS 이벤트 시료 / WS BOM(Bill of Material) 도출

■ ES (Engineering Sample) 이벤트

- 정의: WS 단계에서 수정, 보완, 검증된 부분을 바탕으로 진행되는 개발 단계. 연구소 주관으로 진행하며 품질 담당자들이 배정되어 품질 검토를 받는 단계
- 주요 업무: WS에서 연구소 자체적으로 파악되었던 개발 이슈의 개선과 향상을 확인 / 기구는 양산에 필요한 금형을 실제 제작하여 적용
- 세부 업무: 회로 설계, PCB 설계, PCB artwork(CAD), PCB 발주, PCB 입고, PCB SMT, PCB 검증 / 개선된 기구 자재와 양산 금형 등의 자재로 시료 조립 진행 및 검증 / 시스템과 어플리케이션 부분에 대한 S/W 개발 및 수정 진행 / 품질에서는 회로, 기구 관련 전반적인 검토를 진행 후 회로, 기구 TP 발주를 위한 내부 검토 회의 진행
- 결과물: ES 이벤트 시료 / ES BOM(Bill of Material) 도출 / ES 품질 리포트

■ TP (Test Production) 이벤트

- 정의: ES 단계에서 수정, 보완, 검증된 부분을 바탕으로 진행되는 마지막 개발 단계. 연구소 주관으로 진행하며 본격적으로 디테일한 품질 검토를 받는 단계
- 주요 업무: ES에서 연구소 자체적 및 품질 담당자로부터 파악되었던 개발 이슈의 개선과 향상을 확인
- 세부 업무: 회로 설계, PCB 설계, PCB artwork(CAD), PCB 발주, PCB 입고, PCB SMT, PCB 검증 / 개선된 기구 자재와 양산 금형 등의 자재로 시료 조립 진행 및 검증 / 시스템과 어플리케이션 부분에 대한 S/W 개발 및 수정 진행 / 품질에서는 회로, 기구 관련 전반적인 검토를 진행 후 문제점 연구소 각 파트 담당자들에게 전달 / 회로, 기구 양산 발주를 위한 내부 품평회 진행
- 결과물: TP 이벤트 시료 / TP BOM(Bill of Material) 도출 / TP 품질 리포트

■ MP (Mass Production) 이벤트

- 양산 단계. TP까지의 검증을 마치고 본격적으로 제품을 생산하는 단계
- 제품 출시 / 소비자 Feedback 검토 / 개발완료보고서 작성 / R/C 일정 수립, 진행

■ 한 줄 요약

EVM → WS → ES → TP → MP 순으로 진행되는 AK 내부 하드웨어 개발 이벤트 단계`,
   tags:["개발이벤트","개발단계","WS","ES","TP","MP","양산"],links:[],
   images:[
     {src:"images/glossary/dev-process-1.jpg",caption:"PM R&R"},
     {src:"images/glossary/dev-process-2.jpg",caption:"프로젝트 진행 Flow Chart"},
     {src:"images/glossary/dev-process-3.jpg",caption:"프로젝트 개발 프로세스 1"},
     {src:"images/glossary/dev-process-4.jpg",caption:"프로젝트 개발 프로세스 2"},
   ]},

  {id:317,title:"AK 커넥트 (AK Connect)",category:"용어사전",glossTab:"Service",models:[],date:"2026.06.02",author:"Ellie",authorInitial:"E",
   desc:"동일 네트워크에 연결된 AK 기기 간 무선 통신으로 음악 재생 컨트롤이 가능한 기능입니다. DLNA 방식을 사용합니다.",
   body:`■ 개요

AK Connect는 DLNA(Digital Living Network Alliance) 방식으로, 동일 네트워크에 연결된 AK 기기 간 무선 통신으로 음악 재생 컨트롤이 가능한 기능입니다.

■ 주요 개념

| 역할 | 설명 |
| --- | --- |
| Library | 음원이 저장된 기기. 음원을 제공하는 소스 역할 |
| Speaker | 음원을 재생하는 출력 기기 역할 |
| Remote | 재생을 원격으로 컨트롤하는 기기 역할 |

■ 사용 예시

Case 1 — PD10(Library) → AK T1(Speaker)
동일 네트워크에서 PD10에 저장된 음원을 AK T1 스피커로 재생

Case 2 — AK500N(Library) → PD10(Remote) → AK T1(Speaker)
AK500N의 음원을 PD10으로 컨트롤하며 AK T1으로 재생

■ 한 줄 요약

같은 네트워크 안에서 AK 기기끼리 음원을 공유하고 원격으로 재생을 제어하는 무선 연결 기능`,
   tags:["AK Connect","DLNA","무선","네트워크","Library","Speaker","Remote"],links:[],
   images:[
     {src:"images/glossary/service-ak connect-1.jpg",caption:"AK Connect 개요 및 사용 예시"},
   ]},

  {id:318,title:"DAC (Digital-to-Analog Converter)",category:"용어사전",glossTab:"HW",models:[],date:"2026.06.02",author:"Ellie",authorInitial:"E",
   desc:"디지털 신호를 아날로그 신호로 변환하는 장치입니다. DAP에서 음원이 소리로 재생되기까지의 핵심 경로를 담당합니다.",
   body:`■ 개요

사람이 듣는 소리는 아날로그 신호이므로, 디지털 신호로 만들어진 음원 파일을 그대로 들을 수 없습니다.
그래서 디지털 신호를 아날로그 신호로 바꿔주는 DAC(Digital-to-Analog Converter)가 필요합니다.

■ Audio Signal Path

DAP에서 오디오 신호는 아래의 경로를 거쳐 사람이 듣게 됩니다.

| 단계 | 구성요소 | 역할 |
| --- | --- | --- |
| 1 | 음원 (Source) | 디지털 음원 파일 |
| 2 | CPU | 신호 전달 (Digital) |
| 3 | DAC | 신호 변환 (Digital → Analog) |
| 4 | AMP | 신호 증폭 (Analog) |
| 5 | 헤드폰 (Receiver) | 소리 출력 |

■ DAC의 중요성

DAC이 소리의 모든 것을 결정하는 것은 아니지만, 중요한 부품이며 성능에 따른 Tier가 존재합니다.
어떤 DAC가 탑재되었는가에 따라 제품의 가격 차이가 발생합니다.
DAC 제조사마다 소리 스타일이 다르고, 같은 회사의 DAC라도 성능에 따라 1,000원~6만원대까지 다양한 가격대가 존재합니다.

■ Delta-Sigma DAC

현재 시장에서 가장 많이 사용되는 DAC 방식입니다. 1988년 등장 이후 R-2R DAC을 대체하며 주류가 되었습니다.

| 제조사 | 특징 |
| --- | --- |
| Asahi KASEI (AKM) | 정교한 사운드. AK Flagship DAC은 A&ultima Flagship 모델에서 세계 최초로 사용 |
| ESS Technology | 힘 있는 사운드 |
| Cirrus Logic | - |
| ROHM Semiconductor | - |

■ R-2R DAC

최초의 DAC 방식으로, 디지털 신호 각 Bit에 저항을 2개씩 붙여 만드는 방식입니다.
일명 Ladder 구조라고 부르는데, 여러 개의 아날로그 저항을 연결한 모습이 사다리를 닮았다고 해서 붙여진 이름입니다.
- 16bit: 저항 32개 필요 / 24bit: 저항 48개 필요
- 저항 수준에 따라 품질 천차만별, 높은 단가 문제
- 1988년 Delta-Sigma DAC 등장으로 점차 쇠퇴
- AK SE300 모델에 적용

■ 한 줄 요약

디지털 음원을 아날로그 소리로 변환하는 장치. DAP 음질의 핵심 부품`,
   tags:["DAC","Digital-to-Analog Converter","Delta-Sigma","R-2R","AKM","ESS","SE300","오디오신호","HW"],links:[]},

  {id:319,title:"반드로이드 (Bandroid)",category:"용어사전",glossTab:"SW",models:[],date:"2026.06.02",author:"Ellie",authorInitial:"E",
   desc:"Astell&Kern에서 사용하는 안드로이드 기반 운영체제입니다. Google Play Store를 제공하지 않으며, AK에서 허용한 앱만 설치할 수 있습니다.",
   body:`■ 개요

Bandroid는 Astell&Kern에서 사용하는 안드로이드 기반 운영체제입니다.
일반 Android 제품과 달리 Google Play Store를 제공하지 않으며, Astell&Kern에서 허용한 앱만 설치할 수 있습니다.

■ Android vs Bandroid

| | Android | Bandroid |
| --- | --- | --- |
| Google Play Store | 지원 | 미지원 |
| 앱 설치 | 대부분의 앱 설치 가능 | 허용된 앱만 설치 가능 |
| APK 설치 | APK 파일 직접 설치 가능 | 허용된 APK 파일만 설치 가능 |
| 적용 모델 | SP4000, PD10 등 | SP3000, SP2000 등 |

■ AK Open APP Service

Bandroid 제품은 AK Open APP Service를 통해 음악 스트리밍 앱을 설치할 수 있습니다.
대표적으로 다음과 같은 앱을 지원합니다.

- TIDAL
- Qobuz
- Apple Music
- Spotify
- YouTube Music
- FLO
- Bugs

※ 지원 앱은 제품 및 펌웨어 버전에 따라 달라질 수 있습니다.

■ 왜 Bandroid를 사용할까?

Astell&Kern은 오디오 재생에 최적화된 환경을 제공하기 위해 일반 Android보다 제한된 구조를 사용합니다.
이를 통해 불필요한 백그라운드 서비스와 시스템 리소스 사용을 줄이고, 음악 재생 중심의 안정적인 사용 환경을 제공합니다.

■ 한 줄 요약

Bandroid는 일반 Android보다 앱 설치가 제한된 Astell&Kern 전용 안드로이드 운영체제입니다.`,
   tags:["Bandroid","Android","OS","운영체제","AK Open APP","소프트웨어"],links:[]},
  {id:320,title:"크로스피드 (Crossfeed)",category:"용어사전",glossTab:"Feature",models:[],date:"2026.06.02",author:"Ellie",authorInitial:"E",
   desc:"헤드폰·이어폰 청취 시 L/R 채널을 인위적으로 섞어 스피커 청취와 같은 자연스러운 스테레오 공간감을 형성하는 기능입니다.",
   body:`■ 개요

헤드폰·이어폰으로 음악을 들을 때는 L과 R 채널이 명확히 분리되어 공간감이 부자연스럽게 느껴질 수 있습니다.
스피커로 들을 때는 L, R 소리가 자연스럽게 섞여 들리는 것과 달리, 헤드폰은 좌우 채널이 완전히 분리되기 때문입니다.
Crossfeed는 인위적으로 반대편 소리를 섞어 스피커 청취와 같은 자연스러운 스테레오 공간감을 형성합니다.

■ 청음 환경 비교

| | 헤드폰·이어폰 | 스피커 | Crossfeed |
| --- | --- | --- | --- |
| L/R 분리 | 명확히 구분 | 소리가 섞여서 들림 | 인위적으로 반대편 소리를 섞음 |
| 공간감 | 부자연스러움 | 자연스러움 | 자연스러운 스테레오 공간감 형성 |

■ 설정 항목

- Shelf Cutoff: 반대편 채널로 보낼 소리의 주파수 구간을 설정
- Shelf Gain: 얼마나 섞을 것인가에 대한 소리의 양(크기)을 설정 (예: 5.0 dB)

■ 한 줄 요약

헤드폰 청취 시 부자연스러운 좌우 분리감을 줄이고, 스피커처럼 자연스러운 공간감을 만들어주는 기능`,
   tags:["Crossfeed","크로스피드","공간감","스테레오","헤드폰","이어폰","Shelf Cutoff","Shelf Gain"],links:[],
   images:[
     {src:"images/glossary/feature-crossfeed-1.jpg",caption:"Crossfeed 청음 환경 비교 및 설정"},
   ]},
];
