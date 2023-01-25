import React from 'react'
import { Outlet } from 'react-router-dom'
import './Navbar.scss'
import logo from '../../images/logo.webp'
import {Link} from 'react-router-dom'
import Footer from '../Footer/Footer'

function Navbar() {
  return (
    <>
        <div className='navbar'>
            <div className="container">
                <nav>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <ul className="list">
                        <li className="list__item"><Link to="/"><a href="#" className='list__link'>Home</a></Link></li>
                        <li className="list__item"><Link to="/add"><a href="#" className='list__link'>Add</a></Link></li>
                        <li className="list__item"><a href="#" className='list__link'>Blog</a></li>
                        <li className="list__item"><a href="#" className='list__link'>Pages</a></li>
                        <li className="list__item"><a href="#" className='list__link'>Contact</a></li>
                    </ul>
                    <div className="payment">
                        <div className="payment__icons">
                            <div className="payment__icons-item"><i className="fa-solid fa-magnifying-glass"></i></div>
                            <div className="payment__icons-item"><i className="fa-solid fa-cart-shopping"></i></div>
                        </div>
                        <button className="payment__button">
                            Buy Now
                        </button>
                    </div>
                </nav>
            </div>
        </div>
        <Outlet />
        <Footer />
    </>
  )
}

export default Navbar