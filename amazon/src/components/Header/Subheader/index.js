import React, { useState } from 'react'

import {
    Navbar, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, Button
} from 'reactstrap'

import Menu from '../../UI/Menu/index.js'

import './index.css'

import primeLogo from '../../../images/prime-logo.png'
import primeMarketing from '../../../images/prime-marketing.png'


const Subheader = (props) => {

    const [primedropdownOpen, setPrimedropdownOpen] = useState(false);    // Prime dropdown

    // Prime dropdown
    const primedropdown = () => setPrimedropdownOpen(primedropdownOpen => !primedropdownOpen);
    const primedropdownEnter = () => setPrimedropdownOpen(true);
    const primedropdownLeave = () => setPrimedropdownOpen(false);

    // Header when user is not logged in
	const renderMenu = () => {
		return (
			<Menu
				menus={[
					{ label: "Subscribe & Save", href: "subscribe-and-save", icon: null },
					{ label: "Coupons", href: "coupons", icon: null },
					{ label: "Kay's Store", href: "store", icon: null },
					{ label: "Best Sellers", href: "best-sellers", icon: null },
					{ label: "Gift Ideas", href: "gift-ideas", icon: null },
					{ label: "Buy Again", href: "buy-again", icon: null },
					{ label: "Customer Service", href: "customer-service", icon: null },
					{ label: "Deals Store", href: "deals-store", icon: null },
					{ label: "New Releases", href: "new-releases", icon: null }
				]}
			/>
		);
    }


    return (
        <section className="nav__main">
            <Button className="nav__sprite__menu" 
                onClick={(props.showNav) ? props.onHideNav : props.onOpenNav}>
                <span className="nav__sprite__hamburger"></span>
                <span className="nav__sprite__label">All</span>
            </Button>
            <Navbar expand="md" className="nav__main__menu">
                <Nav className="mr-auto" navbar>
                    <UncontrolledDropdown onMouseOver={primedropdownEnter} onMouseLeave={primedropdownLeave} isOpen={primedropdownOpen} toggle={primedropdown} nav inNavbar>
                        <DropdownToggle nav caret>
                            Prime
                        </DropdownToggle>
                        <DropdownMenu left className="nav__main__prime">
                            <div class="nav__arrow null" style={{ left: "48.1094px" }}>
                                <div class="nav__arrow__inner"></div>
                            </div>
                            <section className="nav__main__prime__inner">
                                <div className="nav__main__prime__img">
                                    <div class="nav__main__prime__logo">
                                        <img src={primeLogo} alt="prime logo" />
                                    </div>
                                    <p class="nav__main__prime__content__copy">Get fast, free shipping on millions of items</p>
                                    <div class="nav__main__prime__button__try">
                                        <a href="/prime">Get Started</a>
                                    </div>
                                    <div class="nav__main__prime__bottom__img">
                                        <img src={primeMarketing} alt="prime marketing" />
                                    </div>
                                </div>
                            </section>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    { renderMenu() }
                </Nav>
            </Navbar>
        </section>
    )
}

export default Subheader
