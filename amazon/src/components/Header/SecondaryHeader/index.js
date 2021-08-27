import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { FaBars } from "react-icons/fa";
import { GoSearch } from 'react-icons/go'

import SideNavBar from '../../../components/Header/SideNavBar/Investor'
import SideLangBar from '../../../components/Header/SideNavBar/SideLangBar'

import amazon_module_logo from '../../../images/amazon-module-logo.svg'

import './index.css'

const SecondaryHeader = () => {

    const [showNav, setShowNav] = useState(false)
    const [showLangNav, setShowLangNav] = useState(false)

    const toggleSideNavbar = (display) => setShowNav(display)
    const toggleLangNavbar = (display) => setShowLangNav(display)

    return (
        <header className="investor__header">
            <div className="investor__headerPane d-flex">
                <div className="investor__moduleLogo d-flex align-items-center">
                    <div className="layout__toggle">
                        <FaBars
                            onClick={(showNav) ? () => toggleSideNavbar(false) : () => toggleSideNavbar(true)}
                            className="layout__toggleBars"
                        />
                    </div>
                    <Link to="/" className="investor__moduleLink">
                        <img src={amazon_module_logo} alt="About Amazon logo" />
                    </Link>
                </div>
                <span className="moduleSearch d-inline-block ml-auto align-self-center">
                    <GoSearch/>
                </span>
                <button className="investor__moduleLang d-inline-block align-self-center"
                    onClick={(showNav) ? () => toggleLangNavbar(false) : () => toggleLangNavbar(true)}>
                    <span className="investor__moduleLang--toggle">
                        EN
                    </span>
                </button>
            </div>
            <SideNavBar
                showNav={showNav}
                onHideNav={() => toggleSideNavbar(false)}
                onOpenNav={() => toggleSideNavbar(true)}
            />
            <SideLangBar
                showNav={showLangNav}
                onHideNav={() => toggleLangNavbar(false)}
                onOpenNav={() => toggleLangNavbar(true)}
            />
        </header>
    )
}

export default SecondaryHeader
