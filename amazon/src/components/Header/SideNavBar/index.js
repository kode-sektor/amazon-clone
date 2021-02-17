import React from 'react'

import { Link } from 'react-router-dom';

import SideNav from 'react-simple-sidenav'

import Menu from './Menu'

import './index.css'

const SideNavBar = ({ showNav, onHideNav }) => {

    return (
        <SideNav 
            showNav={showNav}
            onHideNav={onHideNav}
        >
            <div className="side__nav">
                <span class="side__nav__close__icon"></span>
                <section>
                    <a className="side__nav__customer__profile">
                        <span className="side__nav__avatar"></span>
                        <b className="side__nav__customer__name">Hello, Kay</b>
                    </a>
                </section>
                <section className="side__nav__menu">
                    <ul className="side__nav__menu__trending">
                        <li>
                            <h4 className="side__nav__menu__title side__nav__item">Trending</h4>
                        </li>
                        <li>
                            <Link to="/best-sellers" className="side__nav__item">Best Sellers</Link>
                        </li>
                        <li>
                            <Link to="/new-releases" className="side__nav__item">New Releases</Link>
                        </li>
                        <li>
                            <Link to="/movers-and-shakers" className="side__nav__item">Movers &amp; Shakers</Link>
                        </li>
                    </ul>
                    <ul className="side__nav__menu__settings">
                        <li>
                            <h4 className="side__nav__menu__title side__nav__item">Help &amp; Settings</h4>
                        </li>
                        <li>
                            <Link to="/best-sellers" className="side__nav__item">Your Account</Link>
                        </li>
                        <li>
                            <Link to="/new-releases" className="side__nav__item">
                                <span className="side__nav__menu__icon__container">
                                    <span className="side__nav__menu__icon__globe"></span>
                                </span>
                                English
                            </Link>
                        </li>
                        <li>
                            <Link to="/movers-and-shakers" className="side__nav__item">
                            <span className="side__nav__menu__icon__container">
                                    <span className="side__nav__menu__icon__globe side__nav__menu__icon__canada"></span>
                                </span>
                                Canada
                            </Link>
                        </li>
                        <li>
                            <Link to="/best-sellers" className="side__nav__item">Help</Link>
                        </li>
                        <li>
                            <Link to="/best-sellers" className="side__nav__item">Sign Out</Link>
                        </li>
                    </ul>
                </section>
            </div>
        </SideNav>
    )
}

export default SideNavBar
