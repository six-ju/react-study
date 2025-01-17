import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ServerPage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const isFetched = useRef(false); // 첫 실행 여부를 체크하는 플래그

    useEffect(() => {
        if (isFetched.current) return; // 이미 실행되었으면 중단
        isFetched.current = true; // 첫 실행으로 플래그 설정

        const fetchData = async () => {
            try {
                const data = await axios.get('http://localhost:5000/api?name=junho');
                console.log(data.data)
                setData(data.data.message);
            } catch (error) {
                console.error('서버 통신 오류:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>로딩중...</div>;
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>React Server Page</h1>
            <p>이곳은 서버 통신 한곳입니다.</p>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <Link to={'/'}>메인 페이지로 이동</Link>
        </div>
    );
}

export default ServerPage;
