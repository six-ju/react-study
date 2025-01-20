import React from 'react';
import CardImage from '../../atoms/cardImage/cardImage';
import CardTitle from '../../atoms/cardTitle/cardTitle';
import CardDescription from '../../atoms/cardDescription/cardDescription';
import './card.css';

const Card = ({ image, title, description, onClick }) => {
    return (
        <div class='card-container'>
            <div className='card' onClick={onClick}>
                <CardImage src={image} alt={title} />
                <div className='card-info'>
                    <CardTitle title={title}></CardTitle>
                    <CardDescription description={description}></CardDescription>
                </div>
            </div>
        </div>
    );
};

export default Card;
