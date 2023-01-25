import React from 'react'
import hero from '../../../images/hero.webp'
import './Hero.scss'
function Hero() {
  return (
    <div className='hero'>
        <div className="container">
            <div className="hero__body">
                <div className="hero__image">
                    <img src={hero} alt="" />
                </div>
                <div className="hero__content">
                    <h5 className="hero__subtitle">Shop is fun</h5>
                    <h1 className="hero__title">BROWSE OUR PREMIUM PRODUCT</h1>
                    <p className="hero__text">Us which over of signs divide dominion deep fill bring they're meat beho upon own earth without morning over third. Their male dry. They are great appear whose land fly grass.</p>
                    <div className="hero__btn btn">Browse Now</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero