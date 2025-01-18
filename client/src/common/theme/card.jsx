const handleCardClick = (id) => {
  // 상세 페이지로 이동하거나 데이터 로드
  console.log(`Navigate to detail page with id: ${id}`);
};

const notice = [
  {
    id: 1,
    headEngTitle: "NOTICE",
    headTitle: "공지사항",
    image: "/path/to/image1.jpg",
    title: "예약/발권 규정",
    description:
      "필리핀항공 예약 및 발권 시 필요한 주요 사항을 확인할 수 있습니다.",
    onClick: handleCardClick,
  },
  {
    id: 2,
    headEngTitle: "NOTICE",
    headTitle: "공지사항",
    image: "/path/to/image2.jpg",
    title: "재발행 규정",
    description: "항공권 변경 및 재발행 규정을 확인하세요.",
    onClick: handleCardClick,
  },
  {
    id: 3,
    headEngTitle: "NOTICE",
    headTitle: "공지사항",
    image: "/path/to/image3.jpg",
    title: "유료좌석/수하물 규정",
    description: "유료좌석 및 수하물 규정을 안내합니다.",
    onClick: handleCardClick,
  },
  {
    id: 4,
    headEngTitle: "NOTICE",
    headTitle: "공지사항",
    image: "/path/to/image4.jpg",
    title: "항공편 운항 정보",
    description: "항공편 지연 및 결항 정보를 확인할 수 있습니다.",
    onClick: handleCardClick,
  },
];

const price = [
  {
    id: 1,
    headEngTitle: "PRICE",
    headTitle: "운임안내",
    image: "/path/to/image1.jpg",
    title: "정규 포괄 요금",
    description: "전노선 PCF Table 및 정규 포괄 요금을 \n확인할 수 있습니다.",
    onClick: handleCardClick,
  },
  {
    id: 2,
    image: "/path/to/image2.jpg",
    title: "정규 특가 요금",
    description:
      "얼리버드, 국내선 ADD-ON 등의 \n특가 요금을 확일할수 있습니다.",
    onClick: handleCardClick,
  },
  {
    id: 3,
    image: "/path/to/image3.jpg",
    title: "특정일 특가",
    description: "특정 날짜에 적용되는 \n특별 할인 요금을 확인하세요.",
    onClick: handleCardClick,
  },
  {
    id: 4,
    image: "/path/to/image4.jpg",
    title: "항공편 운항 정보",
    description: "유류 할증료 및 각종 TAX 관련 \n정보를 안내합니다.",
    onClick: handleCardClick,
  },
];

const support = [
  {
    id: 1,
    headEngTitle: "SUPPORT",
    headTitle: "고객지원",
    image: "/path/to/image1.jpg",
    title: "예약/발권 규정",
    description:
      "필리핀항공 예약 및 발권 시 필요한 주요 사항을 확인할 수 있습니다.",
    onClick: handleCardClick,
  },
  {
    id: 2,
    image: "/path/to/image2.jpg",
    title: "재발행 규정",
    description: "항공권 변경 및 재발행 규정을 확인하세요.",
    onClick: handleCardClick,
  },
  {
    id: 3,
    image: "/path/to/image3.jpg",
    title: "유료좌석/수하물 규정",
    description: "유료좌석 및 수하물 규정을 안내합니다.",
    onClick: handleCardClick,
  },
  {
    id: 4,
    image: "/path/to/image4.jpg",
    title: "항공편 운항 정보",
    description: "항공편 지연 및 결항 정보를 확인할 수 있습니다.",
    onClick: handleCardClick,
  },
];

export { notice, price, support };
