import React, { useState } from "react"

import HeaderTop from './HeaderTop/index'
import SubHeader from './SubHeader/index'
import SideNavBar from './SideNavBar/index'
import SubNav from './SubNav/index'

import './index.css'


const Header = (props) => {

    const [showNav, setShowNav] = useState(false)

    const toggleSideNavbar = (display) => setShowNav(display)

	return (
        <header id="page__header" className="page__header">
            <HeaderTop
                {...props}
            />
            <SubHeader
                showNav={showNav}
                onHideNav={() => toggleSideNavbar(false)}
                onOpenNav={() => toggleSideNavbar(true)}
            />
            <SideNavBar
                showNav={showNav}
                onHideNav={() => toggleSideNavbar(false)}
                onOpenNav={() => toggleSideNavbar(true)}
            />
            <SubNav/>
        </header>
	);
};

export default Header;
