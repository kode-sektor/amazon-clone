import React, { useState } from "react"

import HeaderTop from './HeaderTop/index'
import SubHeader from './SubHeader/index'
import SideNavBar from './SideNavBar/index'


import './index.css'

const Header = () => {

    const [showNav, setShowNav] = useState(false)

    const toggleSideNavbar = (display) => {
        setShowNav(display)
    }

	return (
        <header className="page__header">
            <HeaderTop />
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
        </header>
	);
};

export default Header;
