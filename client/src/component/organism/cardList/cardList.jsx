import React from 'react';
import Card from '../../molecules/card/card';
import SupportCard from '../../molecules/supportCard/supportCard';
import './cardList.css';

const CardList = ({ cards }) => {
    return (
        <div className='cardList'>
            <div>
                <div className='head-eng-title'>{cards[0].headEngTitle}</div>
            </div>
            <div>
                <div className='head-title'>{cards[0].headTitle}</div>
            </div>
            <div className='eachCard'>
                {cards[0].theme === 'support' ? (
                  <SupportCard />
                ) : (
                  cards.map((card, index) => {
                    return (
                            <Card
                                key={index}
                                image={card.image}
                                title={card.title}
                                description={card.description}
                                onClick={() => alert(card.title)}
                            />
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default CardList;
