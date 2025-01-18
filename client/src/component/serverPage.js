import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CardList from "../component/organism/cardList/cardList";

function ServerPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const isFetched = useRef(false); // 첫 실행 여부를 체크하는 플래그

  useEffect(() => {
    if (isFetched.current) return; // 이미 실행되었으면 중단
    isFetched.current = true; // 첫 실행으로 플래그 설정

    const fetchData = async () => {
      try {
        const data = await axios.get("http://localhost:5000/api?name=junho");
        console.log(data.data);
        setData(data.data.message);
      } catch (error) {
        console.error("서버 통신 오류:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>로딩중...</div>;
  }

  const cards = [
    {
      id: 1,
      image: "/path/to/image1.jpg",
      title: "예약/발권 규정",
      description:
        "필리핀항공 예약 및 발권 시 필요한 주요 사항을 확인할 수 있습니다.",
    },
    {
      id: 2,
      image: "/path/to/image2.jpg",
      title: "재발행 규정",
      description: "항공권 변경 및 재발행 규정을 확인하세요.",
    },
    {
      id: 3,
      image: "/path/to/image3.jpg",
      title: "유료좌석/수하물 규정",
      description: "유료좌석 및 수하물 규정을 안내합니다.",
    },
    {
      id: 4,
      image: "/path/to/image4.jpg",
      title: "항공편 운항 정보",
      description: "항공편 지연 및 결항 정보를 확인할 수 있습니다.",
    },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Server Page</h1>
      <p>이곳은 서버 통신 한곳입니다.</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Link to={"/"}>메인 페이지로 이동</Link>
      <CardList cards={cards} />
    </div>
  );
}

export default ServerPage;
