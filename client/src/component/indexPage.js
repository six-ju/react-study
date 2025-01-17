import React from 'react';
import { Link } from 'react-router-dom';

function IndexPage() {
    //const navigate = useNavigate();

    // const handleButtonClick = () => {
    //     navigate('/welcome'); // Welcome 페이지로 이동
    // };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>React Index Page</h1>
            <p>이곳은 메인 페이지입니다.</p>
            <Link
                to='/welcome'
                style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    textAlign: 'center',
                    fontSize: '16px',
                }}
            >
                Welcome 페이지로 이동
            </Link>
        </div>
    );
}

export default IndexPage;
