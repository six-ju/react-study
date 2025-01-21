import React, { useEffect, useState } from 'react';
import './groupMenu.css';

const GroupMenu = ({ isVisible }) => {
    return (
        <div className={`groupMenu ${isVisible ? 'show' : ''}`}>
            <div className='group-request'>
                <i className='fa-solid fa-volume-high header-icon'></i>
                <a className='headerTitle' href=''>
                    단체 견적 문의
                </a>
                <a className='sub-menu' href=''>
                    요청하기
                </a>
                <a className='sub-menu' href=''>
                    요청 내역 확인
                </a>
            </div>
            <div className='atr-request'>
                <i className='fa-solid fa-ticket fa-lg header-icon'></i>
                <a className='headerTitle' href=''>
                    ATR 발권 요청
                </a>
                <a className='sub-menu' href=''>
                    요청하기
                </a>
                <a className='sub-menu' href=''>
                    요청 내역 확인
                </a>
            </div>
        </div>
    );
};

export default GroupMenu;
