import React, { useState } from 'react';
import '../common/css/header.css';
import NoticeMenu from './organism/noticeMenu/noticeMenu';
import GuideMenu from './organism/guideMenu/guideMenu';
import RequestMenu from './organism/requestMenu/requestMenu';
import GroupMenu from './organism/groupMenu/groupMenu';

function Header() {
    const [showNoticeMenu, setIsHoveredNotice] = useState(false);
    const [showGuideMenu, setIsHoveredGuide] = useState(false);
    const [showRequestMenu, setIsHoveredRequest] = useState(false);
    const [showGroupMenu, setIsHoveredGroup] = useState(false);

    setTimeout(() => {
        setIsHoveredNotice(false);
        setIsHoveredGuide(false);
        setIsHoveredRequest(false);
        setIsHoveredGroup(false);
    }, 100);

    return (
        <div className='header'>
            <div className='header-logo-group'>
                <div className='header-logo'></div>
            </div>
            <div className='header-nav-group'>
                <div className='header-notice' onMouseEnter={() => setIsHoveredNotice(true)}>
                    공지사항
                </div>
                <div className='header-fare-guide' onMouseEnter={() => setIsHoveredGuide(true)}>운임안내</div>
                <div className='header-service-request' onMouseEnter={() => setIsHoveredRequest(true)}>서비스요청</div>
                <div className='header-group-quote' onMouseEnter={() => setIsHoveredGroup(true)}>단체견적/발권</div>
            </div>
            <div className='header-user-group'>
                <div className='header-mypage hide'>마이페이지</div>
                <div className='header-login'>로그인</div>
            </div>
            <NoticeMenu isVisible={showNoticeMenu} />
            <GuideMenu isVisible={showGuideMenu} />
            <RequestMenu isVisible={showRequestMenu} />
            <GroupMenu isVisible={showGroupMenu} />
        </div>
    );
}

export default Header;
