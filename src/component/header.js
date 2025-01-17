import React from 'react';
import '../common/css/header.css';

function header() {
    return (
        <div className='header'>
            <div className='header-logo-group'>
                <div className='header-logo'></div>
            </div>
            <div className='header-nav-group'>
                <div className='header-notice'>공지사항</div>
                <div className='header-fare-guide'>운임안내</div>
                <div className='header-service-request'>서비스요청</div>
                <div className='header-group-quote'>단체견적/발권</div>
            </div>
            <div className='header-user-group'>
                <div className='header-mypage hide'>마이페이지</div>
                <div className='header-login'>로그인</div>
            </div>
        </div>
    );
}

export default header;
