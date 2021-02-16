import React from 'react'

import { Link } from 'react-router-dom';

import SideNav from 'react-simple-sidenav'

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
                            <a className="side__nav__item" href="/best-sellers">Best Sellers</a>
                        </li>
                    </ul>
                </section>
            </div>
        </SideNav>
    )
}

export default SideNavBar
