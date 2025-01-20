import React from 'react';
import './supportCard.css';

const SupportCard = () => {
    return (
<div class="card-container">
    <div class="supportCard card-1 blur">
        <span>대기 전문 요청</span>
    </div>
    <div class="supportCard card-2 blur">
        <span>EMD/티켓<br />Reassociate 요청</span>
    </div>
    <div class="supportCard card-3 blur">
        <span>단체 견적 문의</span>
    </div>
    <div class="supportCard card-4 blur">
        <span>ATR 발권 신청</span>
    </div>
</div>
    );
};

export default SupportCard;
