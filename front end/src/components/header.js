import React from 'react'
import '../styles/calendar.css'
import Marquee from 'react-fast-marquee'

function Header() {
    return (
        <div className='header-container'>
            <Marquee className='banner'>
                <h2>You are one win away from financial freedom || 99% of gamblers quit right before they
                    win big, be that 1% </h2>
            </Marquee>
        </div>
    )
}

export default Header
