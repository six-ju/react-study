import React, { useEffect, useState } from 'react';
import './groupMenu.css';

const GroupMenu = ({ isVisible }) => {
    const [internalVisible, setInternalVisible] = useState(isVisible); // 내부 상태 관리

    useEffect(() => {
        if (isVisible) {
            console.log(isVisible)
            console.log(internalVisible)
            setInternalVisible(true); // 외부에서 isVisible이 true로 변경되면 메뉴 표시
        }
    }, [isVisible]);
    return (
        <div
            className={`groupMenu ${internalVisible ? 'show' : ''}`}
            onMouseLeave={() => setInternalVisible(false)}
        >
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
