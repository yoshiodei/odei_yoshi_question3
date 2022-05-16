import React from 'react';
import './card.style.css';
import userImg from "./../asset/alt_pic_1.png";

const Card = () => {
    return (
        <div className='card'>

            <div className='card__img-div'>
                <div className='card__img-div__blur'></div>
                <div className='card__img-div__inner'>
                    <img src={userImg} alt="user" className='card__img-div__img' />
                </div>
            </div>

            <div className='card__text-div'>
                <div className='card__text-div__top-icon'></div>
                <h3 className='card__text-div__name'>Yoshi Odei</h3>
                <p className='card__text-div__text'>Full stack web developer, graphic &amp; UI/UX designer based in Accra, Ghana.
                    For more info visit www.yoshi.io
                </p>
                <div className='card__text-div__icons-div'>
                    <div className='card__text-div__icon'></div>
                    <div className='card__text-div__icon'></div>
                    <div className='card__text-div__icon'></div>
                    <div className='card__text-div__icon'></div>
                    <div className='card__text-div__icon'></div>
                    
                </div>
            </div>

        </div>
    );
}

export default Card;
