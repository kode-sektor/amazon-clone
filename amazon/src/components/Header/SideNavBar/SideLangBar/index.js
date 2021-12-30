import React from 'react'
import { Link } from 'react-router-dom'

import { RightArrow } from '../../../UI/Icons'

import SideNav from 'react-simple-sidenav'

import './index.css'

const SideNavBar = ({ showNav, onHideNav }) => {

    return (
        <section className="sideLangContainer investorLang">
            <SideNav
                showNav={showNav}
                onHideNav={onHideNav}
                navStyle={{"maxWidth": "375px", "zIndex" : "9999"}}
                openFromRight={"true"}
            >
                <div className="investorLang__sideNavigation">
                    <header className="investorLang__sideNavHeader"
                        onClick={onHideNav}
                    >
                        <span className="investorLang__moduleLang--toggle">EN</span>
                        <span className="investorLang__visitAmazonLink">
                            <RightArrow/>
                            Visit a different Amazon site
                        </span>
                    </header>
                    <nav className="investorLang__sideNav">
                        <ul className="investorLang__sideNavList">
                            <li title="https://www.aboutamazon.eu/">
                                <Link to="https://www.aboutamazon.eu/">
                                    European Union <span>English</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.aboutamazon.fr/">
                                    France <span>Français</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.aboutamazon.de/">
                                    Germany (Deutschland) <span>Deutsch</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.aboutamazon.in/">
                                    India <span>English</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.aboutamazon.it/">
                                    Italy (Italia) <span>Italiano</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.aboutamazon.es/">
                                    Spain (España) <span>Español</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.aboutamazon.co.uk/">
                                    United Kingdom <span>English</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.aboutamazon.com/">
                                    United States <span>English</span>
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
