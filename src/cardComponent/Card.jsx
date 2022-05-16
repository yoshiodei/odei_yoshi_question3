import React from 'react';
import './card.style.css';
import userImg from "./../asset/alt_pic_1.png";
import check from "./../asset/check.png";
import facebook from "./../asset/fb_icon.png";
import instagram from "./../asset/ig_icon.png";
import phone from "./../asset/call_icon.png";
import twitter from "./../asset/twitter_icon.png";
import whatsapp from "./../asset/whatsapp_icon.png";

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
                <div className='card__text-div__top-icon'>
                    <img src={check} alt="check" className='card__text-div__top-icon__img' />
                </div>
                <h3 className='card__text-div__name'>Yoshi Odei</h3>
                <p className='card__text-div__text'>Full stack web developer, graphic &amp; UI/UX designer based in Accra, Ghana.
                    For more info visit www.yoshi.io
                </p>
                <div className='card__text-div__icons-div'>
                    <div className='card__text-div__icon'>
                        <img src={facebook} alt="icon" className='card__text-div__icon__img' />
                    </div>
                    <div className='card__text-div__icon'>
                        <img src={twitter} alt="icon" className='card__text-div__icon__img' />
                    </div>
                    <div className='card__text-div__icon'>
                        <img src={instagram} alt="icon" className='card__text-div__icon__img' />
                    </div>
                    <div className='card__text-div__icon'>
                        <img src={phone} alt="icon" className='card__text-div__icon__img' />
                    </div>
                    <div className='card__text-div__icon'>
                        <img src={whatsapp} alt="icon" className='card__text-div__icon__img' />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Card;
