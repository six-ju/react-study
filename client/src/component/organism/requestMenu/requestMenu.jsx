import React, { useEffect, useState } from 'react';
import './requestMenu.css';

const RequestMenu = ({ isVisible }) => {
    return (
        <div className={`requestMenu ${isVisible ? 'show' : ''}`}>
            <div className='wait-request'>
                <i className='fa-regular fa-calendar-check fa-lg header-icon'></i>
                <a className='headerTitle' href=''>
                    대기 전문 요청
                </a>
                <a className='sub-menu' href=''>
                    요청하기
                </a>
                <a className='sub-menu' href=''>
                    요청 내역 확인
                </a>
            </div>
            <div className='auto-reissue'>
                <i className='fa-solid fa-calendar-week fa-lg header-icon'></i>
                <a className='headerTitle' href=''>
                    Auto 리이슈 <br />
                    -SC 티켓 Void 요청
                </a>
                <a className='sub-menu' href=''>
                    요청하기
                </a>
                <a className='sub-menu' href=''>
                    요청 내역 확인
                </a>
            </div>
            <div className='emd-ticket'>
                <i className='fa-solid fa-ticket fa-lg header-icon'></i>
                <a className='headerTitle' href=''>
                    EMD /티켓 <br />
                    Reassociate 요청
                </a>
                <a className='sub-menu' href=''>
                    요청하기
                </a>
                <a className='sub-menu' href=''>
                    요청 내역 확인
                </a>
            </div>
            <div className='invol'>
                <i class='fa-solid fa-file fa-lg header-icon'></i>
                <a className='headerTitle' href=''>
                    INVOL 재발행 요청
                    <br />
                    (리부팅)
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

export default RequestMenu;
