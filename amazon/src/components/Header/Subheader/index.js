import React from 'react'

import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
    NavbarText, Row, Button
  } from 'reactstrap'

import Menu from '../../UI/Menu/index.js'

import './index.css'

const Subheader = () => {

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
				]}
			/>
		);
    };


    return (
        <section className="nav__main">
            <Button className="nav__sprite__menu">
                <span className="nav__sprite__hamburger"></span>
                <span className="nav__sprite__label">All</span>
            </Button>
            <Navbar expand="md" className="nav__main__menu">
                <Nav className="mr-auto" navbar>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Prime
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>Option 1</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Reset</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    { renderMenu() }
                </Nav>
            </Navbar>
        </section>
    )
}

export default Subheader
