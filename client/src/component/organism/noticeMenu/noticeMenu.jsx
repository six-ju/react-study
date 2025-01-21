import React, { useEffect, useState } from 'react';
import './noticeMenu.css';

const NoticeMenu = ({ isVisible }) => {
    return (
        <div className={`noticeMenu ${isVisible ? 'show' : ''}`}>
            <div className='noticeInfo'>
                <i className='fa-solid fa-volume-high header-icon'></i>
                <a className='headerTitle' href=''>
                    규정 안내
                </a>
                <a className='sub-menu' href=''>
                    예약/발권 규정
                </a>
                <a className='sub-menu' href=''>
                    재발행 규정
                </a>
                <a className='sub-menu' href=''>
                    유료좌석/수하물 규정
                </a>
                <a className='sub-menu' href=''>
                    환불 웨이버 코드
                </a>
                <a className='sub-menu' href=''>
                    유류/TAX 정보
                </a>
                <a className='sub-menu' href=''>
                    운항(지연결항공문)
                </a>
                <a className='sub-menu' href=''>
                    기타
                </a>
            </div>
            <div className='request'>
                <i className='fas fa-question fa-lg header-icon'></i>
                <a className='headerTitle' href=''>
                    자주 묻는 질문
                </a>
                <a className='sub-menu' href=''>
                    FARE 적용
                </a>
                <a className='sub-menu' href=''>
                    Fare Rule 적용
                </a>
                <a className='sub-menu' href=''>
                    Reissue
                </a>
            </div>
            <div className='event'>
                <i className='far fa-star fa-lg header-icon'></i>
                <a className='headerTitle' href=''>
                    이벤트/프로모션
                </a>
            </div>
        </div>
    );
};

export default NoticeMenu;
