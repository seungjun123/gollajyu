import React from "react";

const TestResult = () => {
  // useLocation으로 response 받아서 최종 결과 구하고 표출하기 / 전체 결과보기 모드면 전부 표출하기
  const MBTI = {
    ISTP: 0,
    ISFP: 1,
    ESTP: 2,
    ESFP: 3,
    ISTJ: 4,
    ISFJ: 5,
    ESFJ: 6,
    ESTJ: 7,
    INTJ: 8,
    INTP: 9,
    ENTJ: 10,
    ENTP: 11,
    INFJ: 12,
    INFP: 13,
    ENFJ: 14,
    ENFP: 15,
  };

  const getMBTI = () => {
    const EI = response[2] + response[3] + response[6] < 0 ? "E" : "I",
      SN = response[4] + response[7] + response[9] < 0 ? "S" : "N",
      TF = response[8] + response[10] + response[11] < 0 ? "T" : "F",
      JP = response[1] + response[5] + response[12] < 0 ? "J" : "P";
    return MBTI[EI + SN + TF + JP];
  };

  const result = [
    {
      id: 0,
      subTitle: "이왕이면 다홍치마",
      title: "프렌치 마카롱",
      postfix: "은",
      characteristic: "예쁘면 일단 사야하지 않겠어요?",
      tag: ["과소비", "사치", "신상 최고"],
      description: [
        "배부르게 밥 먹고 눈앞에 마카롱 보이면 일단 사요. 저 예쁜 빛깔 보고도 안 살 수 있나?",
        "새로운 것을 좋아하고 사치품의 유혹에 잘 넘어가는 편이에요.",
        "새로운 것만 좋아하면 그나마 다행인데 꽂히는 건 다 사야해요. 사과폰 사과패드에 이어서 사과 노트북까지 사야 직성이 풀려요.",
        "틀에 박힌 것을 싫어해요. 예산에 구애받기 싫어서 충동적으로 결제해요.",
        "다음달 카드값에 대한 마지노선만 정하고 넘을까 말까 스릴넘치는 소비를 즐겨요.",
        "정기결제 귀찮아서 해지 못한지 반 년째에요. 그래도 당장 14,500원이 아쉬운 순간엔 해지해요.",
        "아이쇼핑만 해야지 다짐해도 점원분이 이렇게 추천해 주시면 사야하는 게 인지상정이잖아요?",
        "내 소비를 패턴으로 보려고 하지 마세요. 사고 싶은 건 일단 다 사고 질리면 안 살 거니까요.",
      ],
      good_chemi: 14,
      bad_chemi: 8,
    },
    {
      id: 1,
      subTitle: "부드럽고 고급진",
      title: "티라미수",
      postfix: "는",
      characteristic: "어차피 먹을 거라면 특별한 게 좋겠어요.",
      tag: ["배려", "사치", "쿨거래"],
      description: [
        "티라미수처럼 부드러운 마음을 가졌지만 가끔은 파우더를 잔뜩 뿌려 사치부리고 싶어요.",
        "점심 메뉴 고를 때면 먹고싶은 음식이 있어도 다른 사람에게 맞춰줘요.",
        "그러다가도 가끔은 나만을 위한 파인다이닝을 즐겨야해요.",
        "중고거래하러 나가면 판매자가 쿨거래 고맙다고 말해요. 사실은 가격을 못 깎는 건데 말이죠.",
        "명품이나 트렌디함에서 뒤쳐질 수 없어요. 그렇다고 과소비하면 초코파우더 코로 마신 것보다 고통스러운 한 달을 보내요.",
      ],
      good_chemi: 12,
      bad_chemi: 9,
    },
    {
      id: 2,
      subTitle: "오늘은 운이 좋군",
      title: "포춘쿠키",
      postfix: "는",
      characteristic: "좋은 말 나올 때까지 500번 뽑아볼 거에요.",
      tag: ["스릴", "즉흥적", "자신감"],
      description: [
        "한 번 사는 인생인데 스릴 있는 것도 해보고 싶어요.",
        "무조건 300만 원 받기 vs 10% 확률로 1,000만 원 받기를 고르래요. 당연히 후자 아니에요?",
        "한정판이라는 말만 들리면 일단 관심이 가요. 결제하고 집에 와보면 전시해둔 한정판만 500개에요.",
        "이번 회식은 내가 쏠게요. 근데 착각하진 마세요. 너네가 좋은 게 아니라 내가 좋은 사람이고 싶은 거니까",
        "주식을 하면 왠지 내가 사는 종목은 다 오를 것만 같아요.",
        "게임을 해도 내가 원하는 아이템은 무조건 뽑아야해요. 확률이 0.002%라고요? 50,000번 뽑으면 결국엔 나오겠죠 뭐.",
        "주변 사람들이 계속 도박 중독 상담은 1336이래요.",
      ],
      good_chemi: 10,
      bad_chemi: 15,
    },
    {
      id: 3,
      subTitle: "냄새로 유혹하는",
      title: "지하철 만쥬",
      postfix: "는",
      characteristic: "그런데 왜 냄새만 맛있는 거죠?",
      tag: ["충동구매", "복세편살", "낙천적"],
      description: [
        "지하철 환승하다가 만쥬 냄새 맡으면 못 지나쳐요. 막상 사도 한 개 먹고 안 먹는데 또 속았어요.",
        "복잡한 세상 편하게 살고 싶어요. 재테크 그냥 안 하고 덜 쓰죠 뭐.",
        "월급 들어오면 저번달 고생한 나를 위한 선물은 꼭 줘야해요.",
        "좋은 건 좋은 거니까 일단 사고 생각할래요. 근데 뭐가 좋은진 나도 잘 몰라요.",
        "가격비교를 왜 하는지 모르겠어요. 이거 살지 저거 살지 고민할 시간에 결제하면 벌써 배송시작하는데 말이에요.",
        "소액결제 500번 하고 고지서 보면 깜짝 놀라요. 그래도 덜 먹고 덜 사면 어떻게든 해결 될 거에요.",
      ],
      good_chemi: 8,
      bad_chemi: 4,
    },
    {
      id: 4,
      subTitle: "간식도 철저하게",
      title: "곤약젤리",
      postfix: "는",
      characteristic: "목표를 위해서라면 간식도 칼로리 계산 다 해서 먹어요.",
      tag: ["계획적", "계산적", "큰그림"],
      description: [
        "철저하고 계획적이라서 월급날 아침부터 이번 달 예산을 짜기 시작해요.",
        "아무리 급해도 신용카드 한도는 절대 안 건드려요. 발급 받을 때부터 지켜온 나만의 규칙은 한 달에 100만 원이니까요.",
        "즉흥적인 게 세상에서 제일 싫어요. 내 점심식대는 8,000원인데 10,000원 짜리 점심특선 먹자는 부장님 보면 화가 잔뜩나요.",
        "그래도 내 이미지를 위해서라면 한 달에 한 번 우리팀 아이스크림은 쏠 수 있어요. 즉흥적이라고요? 이것도 계획의 일부에요.",
        "그렇지만 사랑하는 사람을 위해서는 아끼지 않아요. 이러려고 아끼는 거니까 아닌 사람들은 토달지 마세요.",
      ],
      good_chemi: 1,
      bad_chemi: 2,
    },
    {
      id: 5,
      subTitle: "고소하고 배부른",
      title: "오곡라떼",
      postfix: "는",
      characteristic: "뜨끈-하고 든든-한 오곡라떼를 사먹고 말지",
      tag: ["가성비", "재정관리", "아나바다"],
      description: [
        "물건 살 때 가장 중요한 건 가성비에요. 가심비라는 말은 근본 없으니까 저리 치우세요.",
        "안정된 삶을 위해서는 재정관리가 필수에요. 경기 침체를 극복할 수 있는 방법은 저.금. 아나바다 하세요.",
        "똑같은 제품도 용량에 따라서 100ml 당 가격 다르니까 확인하고 사요.",
        "햇반이랑 오뚜기밥 중에서 뭐가 더 좋냐고 물어보면 세일하는 브랜드가 더 좋아요.",
        "특별히 사치부리지도 않아서 주변에서 노잼으로 보지만 내가 만족하면 되는 거 아니에요?",
        "취미생활도 혼자서 할 수 있는 일이 더 좋아요. 내가 한 만큼만 결제하면 되잖아요.",
      ],
      good_chemi: 9,
      bad_chemi: 11,
    },
    {
      id: 6,
      subTitle: "톡! 쏘는 시원함",
      title: "콜라",
      postfix: "는",
      characteristic: "부딪히고 흔들린 날 감당할 수 없을 거에요.",
      tag: ["스트레스", "폭풍쇼핑", "한도초과"],
      description: [
        "합리적으로 보이지만 멘탈 터지면 카드로 막 긁다가 한도초과에요. 이건 내가 감당 못하니까 엄마 찬스 써야해요.",
        "현실적이고 실리를 추구해서 나만의 지출 계획이 있어요. 하지만 계획이 흔들리면 불안해서 터져버릴지도 몰라요.",
        "스트레스가 쌓이고 쌓이면 친구 불러서 1차 2차 3차 다 내가 쏴요. 술 깨고 결제 문자 온 거 보면 한숨밖에 안 나와요.",
        "혼자 있으면 아까워서 밥 굶어도 옆에 친구 있으면 친구 밥은 내가 사줘야해요.",
        "남들 스트레스도 내 것처럼 다가와요. 걱정되는 친구 힘든 일 상담해 주고 밥도 술도 다 내가 쏴요. 손해 본 기분이지만 부담주기는 싫어서 조용히 가계부에 적어요.",
        "일상에서 벗어나는 게 싫어서 이직엔 관심 없어요. '나를 돈으로 사려는 건가?' 라고 하기엔 너무 많은 돈을 제시하면 사인하러 갈게요.",
      ],
      good_chemi: 0,
      bad_chemi: 7,
    },
    {
      id: 7,
      subTitle: "쫄깃하게 말린",
      title: "고구마 말랭이",
      postfix: "는",
      characteristic: "지나치게 말리면 딱딱해지고 말 거에요.",
      tag: ["절약", "자린고비", "적금"],
      description: [
        "지나치게 아껴서 3년짜리 적금은 무조건 만기까지 채워야해요.",
        "포인트나 쿠폰은 꼭 챙기는데 쇼핑을 안 해서 포인트가 안 쌓여요.",
        "아끼는 게 중요한 게 아니라 돈을 많이 벌고 많이 갖고있는 게 중요해요.",
        "남들보다 예산을 더 빡빡하게 짜요. 라면 한 봉지로 삼시세끼 먹을 수도 있어요.",
        "해왔던대로 하는 게 편해요. 화장품도 쓰던 것만 써요. 단종되면 뭘 사야할지 모르겠어요.",
      ],
      good_chemi: 13,
      bad_chemi: 3,
    },
    {
      id: 8,
      subTitle: "겨울이면 생각나는",
      title: "붕어빵",
      postfix: "은",
      characteristic: "틀에 박힌 듯 철저하게 살고 싶어요.",
      tag: ["계획적 소비", "계산적", "주택청약"],
      description: [
        "돈 관리를 잘 하지만 월급 들어오면 사야겠다고 생각한 물건은 무조건 사요.",
        "이게 어떻게 돈 관리 잘하는 거냐고요? 그거 말곤 아무것도 안 사거든요.",
        "겨울이 오면 주머니에 현금 3,000원을 꼭 들고 다녀요. 언제 어디서 붕어빵을 만날지 모르니까요.",
        "계획을 짜고 그대로 진행되는 게 뿌듯해요. 주택 청약은 이런 나를 위해 존재하는 상품 같아요.",
        "생각이 많아지면 실수가 생겨요. 지폐 세다 보면 처음엔 10장, 두번 짼 11장, 마지막은 왜 9장이에요?",
        "겉으로는 계산적인 것처럼 보여도 내 사람에게는 누구보다 촉촉할 거에요.",
        "아이쇼핑만 해야지 다짐해도 점원분이 이렇게 추천해 주시면 사야 하는 게 인지상정이잖아요?",
        "내 소비를 패턴으로 보려고 하지 마세요. 사고 싶은 건 일단 다 사고 질리면 안 살 거니까요.",
      ],
      good_chemi: 5,
      bad_chemi: 6,
    },
    {
      id: 9,
      subTitle: "소스와 함께면 기쁨이 배가 되는",
      title: "나초",
      postfix: "는",
      characteristic: "호기심이 가는 일이라면 뭐든지 찍먹 해봐야해요.",
      tag: ["호기심", "실용적", "자기계발"],
      description: [
        "담백한 나지만 이 소스 저 소스 다 찍어보고 싶어요.",
        "평상시엔 필요한 만큼만 사고 떨어지면 다시 사는 실용적인 소비를 해요. 그 외의 부분은 통장으로 가요.",
        "그렇지만 새로운 경험을 위해서라면 실용성은 고려하지 않아요.",
        "나를 표현하는 건 외적인 것이 아니라 내면이라 생각해서 서점 가면 책만 500권씩 사둬요",
        "아, 책을 좋아하는 거지 부지런히 읽는 건 아니에요. 500권 다 프롤로그밖에 못 읽었거든요.",
        "중학교 때도 수학 문제집 5권씩 사서 집합만 풀고 뒤는 뭔지도 몰라요.",
      ],
      good_chemi: 11,
      bad_chemi: 13,
    },
    {
      id: 10,
      subTitle: "과자야 건강식품이야?",
      title: "에너지바",
      postfix: "는",
      characteristic: "놀 때도 일할 때도 힘이 필요하잖아요",
      tag: ["의욕적", "과시욕", "자본주의"],
      description: [
        "내가 열심히 일하는 이유는 열심히 벌어서 열심히 놀기 위해서에요.",
        "때로는 일을 너무 중요하게 생각해서 개인 생활을 잊을 때가 있어요.",
        "과시적인 성향도 있어요. 내가 어떤 사람인지 보여주기 위해서 명품 시계, 명품 가방을 구입하기도 해요.",
        "이 세상은 돈으로 굴러가고 돈이 곧 영향력이에요. 물질만능주의 아니냐고요? 어쩌겠어요 자본주의가 날 이렇게 만든걸",
        "이런 날 보면 주변에서 행복은 돈으로 살 수 없대요. 나는 돈 쓰면서 행복을 느끼는데 말이에요.",
        "그래서 나도 한마디 해줘요. 행복은 돈으로 살 수 없다는 생각이 들면 돈이 부족한 건 아닐까 의심해보라고",
      ],
      good_chemi: 2,
      bad_chemi: 0,
    },
    {
      id: 11,
      subTitle: "내 안의 다른 나",
      title: "슈크림",
      postfix: "은",
      characteristic: "겉은 딱딱해 보여도 속은 부드러워요.",
      tag: ["양면성", "결정장애", "합리화"],
      description: [
        "돈이 좋아서 내 연봉은 무조건 높았으면 좋겠어요! 그렇지만 돈 개념 자체는 별로 없어서 신입 희망 연봉으로 5,000만 원 받고 싶어요.",
        "잘 모르는 물건을 사는 건 어려워요. 이거 살까, 저거 살까 2시간 고민하다 보면 매장 닫는다고 해서 급하게 결제하고 다른 거 살 걸 후회해요.",
        "그렇지만 뛰어난 분석력으로 나한테 바가지 씌우는 건 직감으로 알아차려요. 설득력도 좋아서 결국엔 원가까지 깎아낼 수 있어요.",
        "하지만 귀찮으면 분석도 설득도 없어요. 여행지에서는 '바가지도 쓰는 거지 하면서' 귀찮음을 합리화해요.",
        "주변에선 내 능력을 보고 못하는 게 없다고 입이 마르도록 칭찬해요. 쓸데없는 물건에 허투루 돈 쓰는 거 빼면요.",
        "그렇지만 내가 좋아하는 물건을 사는 건데 어쩌겠어요. 이런 것도 사려고 돈 버는 거 아니겠어요?",
        "사람도 마찬가지에요. 내가 좋아하는 사람한테 모든 걸 줘도 아깝지 않은데 싫어하는 사람은 국물도 없으니 얼쩡거리지 말고 저리 가세요.",
      ],
      good_chemi: 7,
      bad_chemi: 14,
    },
    {
      id: 12,
      subTitle: "담백하고 부드러운",
      title: "우유식빵",
      postfix: "은",
      characteristic: "어떤 잼과 함께하느냐 그것이 문제로다.",
      tag: ["팔랑귀", "공동구매", "근묵자흑"],
      description: [
        "잼에 따라 맛이 달라지는 식빵처럼, 내 옆에 누가 있는지에 따라 소비도 달라져요.",
        "이쪽에서 누가 좋다고하면 일단 사요. 택배 받아보면 뭔지도 모르겠어요.",
        "그런데 저쪽에서 누가 좋은 보험 나왔다고 하면 일단 가입하러 가요. 이런 식으로 가입한 암보험만 3개에요.",
        "내 소비패턴을 말하자면 강약약 중강약약이에요. 강이랑 중강은 누가 꼬드긴거니까 사실 약약약약이라고 우길래요.",
        "일단 한 번 세운 계획은 수정 없어요. 10년 전에 세운 내 집 마련 계획 아직도 실천중이에요.",
        "잘못된 것 같은 느낌에 계획을 바꾸려고 해도 내 부동산 지식은 10년 전에 머물러있어요.",
        "집이 너무 좋아요 나랑 같이 여행 가고싶으면 계획은 짜오세요. 돈은 쾌척할 수 있어요.",
      ],
      good_chemi: 3,
      bad_chemi: 10,
    },
    {
      id: 13,
      subTitle: "호불호 갈리는",
      title: "민트초코",
      postfix: "는",
      characteristic: "민초의 매력을 느끼지 못하다니.. 안됐다..",
      tag: ["주관적 소비", "호불호", "자기계발"],
      description: [
        "돈에 대해서는 큰관심이없지만 나에게 중요한 걸 위해서 라면 모든걸 다 써도 좋아요",
        "마치 31가지 맛 아이스크림 중에서 5가지 고르라는데 5개 모두 민트초코로 채우고 싶은 것처럼요",
        "민초의 매력을 잘 알지도 못하면서 호불호를 논하지마세요",
        "다른건 다 참아도 나한테 중요한 걸 평가하는건 못 참겠어요 돈으로 모든걸 살 수 없어요",
        "이세상에는 돈 이상의 가치가 분명히 존재하거든요 일을 고를 때도 얼마를 받고 일하는지 보다는 얼마나 의미있는 일인지가 더 중요해요",
        "자기 계발 역시 나에게 중요한 가치에요 자격증 공부에 드는 돈은 하나도 안아까워요",
        "늦잠자서 시험장에 못갈 뿐이죠 어떨때 보면 돈에 관심이 없는게 아니라돈 개념이 없는것도 같아요",
        "옆에서 재테크 알려준다고 해도 관심없으니까 안 알려줬으면 좋겠어요.",
      ],
      good_chemi: 4,
      bad_chemi: 1,
    },
    {
      id: 14,
      subTitle: "말하지 않아도 알아요",
      title: "초코파이",
      postfix: "는",
      characteristic: "내 생일은 굶어도 소중한 사람 생일은 꼭 챙겨야 해요.",
      tag: ["情", "사교적", "안빈낙도"],
      description: [
        "물욕도 별로 없고, 돈을 많이 모아야겠다는 욕심도 없어요. 돈은 수단이지, 그 자체가 목적은 아니잖아요?",
        "나를 위한 소비는 별로 없지만 사람들과 어울리다보면 지출이 생겨요",
        "이렇게 다른 사람을 위해서 소비를 하다보면 종종 감당이 안 돼요. 다음달에 마이너스 통장이라도 만들어야 할까봐요.",
        "다른 사람들을 배려하는 편이에요. 나는 백반 먹고 싶었는데 옆에서 패밀리 레스토랑 가자고 하면 어쩔 수 없이 따라가요.",
        "더치페이 했는데 친구들이 돈 안 보내주면 내가 산 셈 치죠 뭐...",
        "체력이 좋아서 지칠 줄 몰라요. 이 일, 저 일 다 받아서 하는 프리랜서였다면 아마 고소득자였을 거에요.",
      ],
      good_chemi: 15,
      bad_chemi: 12,
    },
    {
      id: 15,
      subTitle: "너무달아도맛있으면0칼로리",
      title: "초코잼",
      postfix: "은",
      characteristic: "어차피 한 번 사는 인생, 현재를 즐기고 싶어요.",
      tag: ["YOLO", "유행", "티끌모아티끌"],
      description: [
        "복잡한 세상 편하게 살고 싶어요. 내가 좋아하는 건 뭐든 할 거니까 말리지 마세요.",
        "앱 다운받으면 할인해준다고 해도 귀찮아서 그냥 정가로 사요.",
        "티끌은 모아봤자 티끌이니까 저축은 크게 신경 안 써요. 어차피 서울에 집 사려면 내 월급은 진짜 티끌이니까요.",
        "새롭고 재미있는 걸 보면 일단 해봐야 해요. 요즘 홈시네마가 유행이라던데 생각하는 순간 이미 빔프로젝터 어디 설치할지 생각 끝났어요.",
        "그렇다고 자기관리를 안 하진 않아요. 내가 운동 열심히 하는 이유를 묻는다면 술 먹고 죄책감 안 느끼려고 그런 거에요.",
      ],
      good_chemi: 6,
      bad_chemi: 5,
    },
  ];
};

export default TestResult;
