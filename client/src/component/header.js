import React, { useState } from 'react';
import '../common/css/header.css';
import NoticeMenu from './organism/noticeMenu/noticeMenu';
import GuideMenu from './organism/guideMenu/guideMenu';
import RequestMenu from './organism/requestMenu/requestMenu';
import GroupMenu from './organism/groupMenu/groupMenu';

function Header() {
    const [showNoticeMenu, setIsHoveredNotice] = useState(false);
    console.log(showNoticeMenu);
    const [showGuideMenu, setIsHoveredGuide] = useState(false);
    const [showRequestMenu, setIsHoveredRequest] = useState(false);
    const [showGroupMenu, setIsHoveredGroup] = useState(false);

    return (
        <div className='header'>
            <div className='header-logo-group'>
                <div className='header-logo'></div>
            </div>
            <div className='header-nav-group'>
                <div
                    className='header-notice header-menu-hover'
                    onMouseOver={() => setIsHoveredNotice(true)}
                    onMouseOut={() => setIsHoveredNotice(false)}
                >
                    <NoticeMenu isVisible={showNoticeMenu} />
                    공지사항
                </div>
                <div
                    className='header-fare-guide header-menu-hover'
                    onMouseOver={() => setIsHoveredGuide(true)}
                    onMouseOut={() => setIsHoveredGuide(false)}
                >
                    <GuideMenu isVisible={showGuideMenu} />
                    운임안내
                </div>
                <div
                    className='header-service-request header-menu-hover'
                    onMouseOver={() => setIsHoveredRequest(true)}
                    onMouseOut={() => setIsHoveredRequest(false)}
                >
                    <RequestMenu isVisible={showRequestMenu} />
                    서비스요청
                </div>
                <div
                    className='header-group-quote header-menu-hover'
                    onMouseOver={() => setIsHoveredGroup(true)}
                    onMouseLeave={() => setIsHoveredGroup(false)}
                >
                    <GroupMenu isVisible={showGroupMenu} />
                    단체견적/발권
                </div>
            </div>
            <div className='header-user-group'>
                <div className='header-mypage hide'>마이페이지</div>
                <div className='header-login'>로그인</div>
            </div>
        </div>
    );
}

export default Header;
