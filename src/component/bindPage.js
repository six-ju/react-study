import React from 'react';
import { useNavigate } from 'react-router-dom';

function BindPage() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/welcome'); // Welcome 페이지로 이동
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>React Bind Page</h1>
            <p>이곳은 바인드 페이지입니다.</p>
            <button onClick={handleButtonClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
                Welcome 페이지로 이동
            </button>
        </div>
    );
}

export default BindPage;
