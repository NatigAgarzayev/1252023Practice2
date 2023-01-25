import React from 'react'
import news_1 from '../../../images/news-1.webp'
import './News.scss'
function News() {
  return (
    <div className='news'>
        <div className="container">
            <div className="news__body">
                <div className="news__head">
                    <div className="news__subtitle subtitle">Popular Item in the market</div>
                    <div className="news__title title">Latest <span>News</span></div>
                </div>
                <div className="news__grid">
                    <div className="news__grid-item">
                        <div className="news__grid-image">
                            <img src={news_1} alt="" />
                        </div>
                        <div className="news__grid-category">By Admin</div>
                        <div className="news__grid-name">The Richland Center Shooping News and weekly shooper</div>
                        <div className="news__grid-price">Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</div>
                    </div>
                    <div className="news__grid-item">
                        <div className="news__grid-image">
                            <img src={news_1} alt="" />
                        </div>
                        <div className="news__grid-category">By Admin</div>
                        <div className="news__grid-name">The Shopping News also offers top-quality printing services</div>
                        <div className="news__grid-price">Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</div>
                    </div>
                    <div className="news__grid-item">
                        <div className="news__grid-image">
                            <img src={news_1} alt="" />
                        </div>
                        <div className="news__grid-category">By Admin</div>
                        <div className="news__grid-name">Professional design staff and efficient equipment you’ll find we offer</div>
                        <div className="news__grid-price">Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default News