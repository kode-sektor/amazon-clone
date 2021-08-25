import React from 'react'
import { Link } from 'react-router-dom'

import { FaTimes } from "react-icons/fa"

import SideNav from 'react-simple-sidenav'

import amazon_module_logo_black from '../../../../images/amazon-module-logo-black.svg'

import './index.css'

const SideNavBar = ({ showNav, onHideNav }) => {

    return (
        <section className="sideNavContainer">
            <SideNav
                showNav={showNav}
                onHideNav={onHideNav}
                navStyle={{"maxWidth": "360px", "zIndex" : "9999"}}
            >
                <div className="investor__sideNavigation">
                    <section className="investor__sideNavHeader">
                        <div className="investor__moduleLogo d-flex align-items-center">
                            <div className="layout__toggle">
                                <FaTimes
                                    color="var(--grey-tone-62)"
                                    onClick={onHideNav}
                                    className="layout__toggleBars"
                                />
                            </div>
                            <Link to="/" className="investor__moduleLink">
                                <img src={amazon_module_logo_black} alt="About Amazon logo" />
                            </Link>
                        </div>
                    </section>
                    <nav className="investor__sideNav">
                        <ul className="investor__sideNavList">
                            <li>
                                <Link to="/">
                                    Innovation
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Job creation &amp; investment
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Our Communities
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Supporting small business
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Working at Amazon
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </SideNav>
        </section>
    )
}

export default SideNavBar
