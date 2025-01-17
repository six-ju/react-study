import React from 'react';
import '../common/css/footer.css';

function footer(props) {
    return (
        <div className='footer'>
            <div className='footer-nav-group'>
                <div className='footer-address'>서울시 서소문로11길 신아빌딩 1층</div>
                <div className='footer-ceo-info'>락소홀딩스 대표이사 정옥, 정진우</div>
                <div className='footer-business-registration'>사업자등록번호 110 - 81 - 40725</div>
                <div className='footer-commerce-registration'>통신판매업신고 중구 03244호</div>
                <div className='footer-contact-number'>대표번호 1544 - 1717</div>
            </div>
            <div>
                <div className="footer-copyright white">Copyright © Philippine Airline, All Rights Reserved.</div>
            </div>
        </div>
    );
}

export default footer;
