import React, { useEffect, useState } from 'react';
import './guideMenu.css';

const GuideMenu = ({ isVisible }) => {

    return (
        <div
            className={`guideMenu ${isVisible ? 'show' : ''}`}
        >
            <div className='view-all-fares'>
                <i className='fa-solid fa-bars fa-lg header-icon'></i>
                <a className='headerTitle' href=''>
                    전체 요금 보기
                </a>
            </div>
            <div className='regular-comprehensive-fare'>
                <i className='fa-solid fa-comment-dollar fa-lg header-icon'></i>
                <a className='headerTitle' href=''>
                    정규 포괄 요금
                </a>
            </div>
            <div className='regular-special-fare'>
                <i className='fa-solid fa-money-check-dollar fa-lg header-icon'></i>
                <a className='headerTitle' href=''>
                    정규 특가 요금
                </a>
            </div>
            <div className='specific-date-special-fare'>
                <i className='fa-solid fa-calendar-days fa-lg header-icon'></i>
                <a className='headerTitle' href=''>
                    특정일 특가
                </a>
            </div>
        </div>
    );
};

export default GuideMenu;
