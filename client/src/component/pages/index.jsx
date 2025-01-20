import React from 'react';
import CardList from '../organism/cardList/cardList';
import { notice, price, support } from '../../common/theme/card';
import mainBanner from '../../common/images/indexPage/mainBanner.png';
import './index.css';

const NoticePage = () => {
    return (
        <div>
            <div className='image-container'>
                <p className='image-title'>필리핀항공 여행사 우대 사이트 -With PAL</p>
                <img src={mainBanner} alt='Main Banner' />
            </div>
            <div className='cardListWrap'>
                <CardList cards={notice} />
                <CardList cards={price} />
                <CardList cards={support} />
            </div>
        </div>
    );
};
export default NoticePage;
