import { ArrowDropDown, Notifications, NotificationsActive, Search } from '@material-ui/icons'
import React, { useState } from 'react'
import "./navbar.scss"
import image from "./LOGO.png"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    window.onscroll = () => {
        let yOffset = window.pageYOffset
        // eslint-disable-next-line no-restricted-globals
        setIsScrolled(yOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className='container'>
                <div className='left'>
                    <img src={image} alt=""
                    />
                    <Link to="/" className='link'>
                    <span> Homepage </span>
                    </Link>
                
                    <Link to="/series" className='link'>
                        <span> Series </span>
                    </Link>
                    <Link to="/movies"  className='link'>
                        <span> Movies </span>
                    </Link>
                    <span> New Popular </span>
                    <span> My List </span>
                </div>
                <div className='right'>
                    <Search className='icon' />
                    <span> KID </span>
                    <Notifications className='icon' />
                    <img src="https://images.bisnis-cdn.com//upload/img/The-Nutcracker-and-the-Four-Realms.jpg" alt="" />

                    <div className='profile'>
                        <ArrowDropDown className='icon' />
                        <div className='options' >
                            <span> Settings </span>
                            <span> Logout </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
