import React from 'react';
import { useNavigate } from 'react-router-dom';
import { throttle } from '../common/js/common';

function WelcomePage() {
    const navigate = useNavigate();

    const test = throttle(() => {
        navigate('/server'); // Welcome 페이지로 이동
    }, 200);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Welcome Page</h1>
            <p>환영합니다! 이 페이지는 버튼 클릭으로 이동한 페이지입니다.</p>
            <button style={{ padding: '10px 20px', fontSize: '16px' }} onClick={test}>
                node 통신합니다요
            </button>
        </div>
    );
}

export default WelcomePage;
