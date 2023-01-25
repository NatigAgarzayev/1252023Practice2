import React from 'react'
import pro_1 from '../../../images/product-1.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import './Best.scss'
function Best() {
  return (
    <div className='best'>
        <div className="container">
            <div className="best__body">
                <div className="best__head">
                    <div className="best__subtitle subtitle">Popular Item in the market</div>
                    <div className="best__title title">Best  <span>Sellers</span></div>
                </div>
                <Swiper
                    breakpoints={{
                        // when window width is >= 640px
                        0: {
                        slidesPerView: 1,
                        },
                        540: {
                        slidesPerView: 2,
                        },
                        820: {
                            slidesPerView: 3,
                        },
                        1250: {
                            slidesPerView: 4,
                        }
                    }}
                     slidesPerView={4}
                     onSwiper={(swiper) => console.log(swiper)}
                     className="best__grid"
                    >
                    <SwiperSlide className="best__grid-item">
                        <div className="best__grid-image">
                            <img src={pro_1} alt="" />
                        </div>
                        <div className="best__grid-category">Accessories</div>
                        <div className="best__grid-name">Quartz Belt Watch</div>
                        <div className="best__grid-price">$150.00</div>
                    </SwiperSlide>
                    <SwiperSlide className="best__grid-item">
                        <div className="best__grid-image">
                            <img src={pro_1} alt="" />
                        </div>
                        <div className="best__grid-category">Accessories</div>
                        <div className="best__grid-name">Quartz Belt Watch</div>
                        <div className="best__grid-price">$150.00</div>
                    </SwiperSlide>
                    <SwiperSlide className="best__grid-item">
                        <div className="best__grid-image">
                            <img src={pro_1} alt="" />
                        </div>
                        <div className="best__grid-category">Accessories</div>
                        <div className="best__grid-name">Quartz Belt Watch</div>
                        <div className="best__grid-price">$150.00</div>
                    </SwiperSlide>
                    <SwiperSlide className="best__grid-item">
                        <div className="best__grid-image">
                            <img src={pro_1} alt="" />
                        </div>
                        <div className="best__grid-category">Accessories</div>
                        <div className="best__grid-name">Quartz Belt Watch</div>
                        <div className="best__grid-price">$150.00</div>
                    </SwiperSlide>
                    <SwiperSlide className="best__grid-item">
                        <div className="best__grid-image">
                            <img src={pro_1} alt="" />
                        </div>
                        <div className="best__grid-category">Accessories</div>
                        <div className="best__grid-name">Quartz Belt Watch</div>
                        <div className="best__grid-price">$150.00</div>
                    </SwiperSlide>
                    <SwiperSlide className="best__grid-item">
                        <div className="best__grid-image">
                            <img src={pro_1} alt="" />
                        </div>
                        <div className="best__grid-category">Accessories</div>  
                        <div className="best__grid-name">Quartz Belt Watch</div>
                        <div className="best__grid-price">$150.00</div>
                    </SwiperSlide>
                    <SwiperSlide className="best__grid-item">
                        <div className="best__grid-image">
                            <img src={pro_1} alt="" />
                        </div>
                        <div className="best__grid-category">Accessories</div>
                        <div className="best__grid-name">Quartz Belt Watch</div>
                        <div className="best__grid-price">$150.00</div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Best