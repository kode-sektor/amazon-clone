import React, { useState } from 'react'

import {
	Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
	UncontrolledDropdown, DropdownToggle, DropdownMenu, Label, Input, Form,
    InputGroup, InputGroupAddon, Button
} from "reactstrap"

import ReactCountryFlag from "react-country-flag"

import AccountMenu from '../AccountMenu/index'
import Modal from '../../UI/Modal/index'

import "./index.css"

const HeaderTop = () => {
    
    const [modal, setModal] = useState('hide')
    const toggleModal = () => setModal('hide')  // Hide Modal on hover on Modal itself 

    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);    // search filter (not used yet)

    const [flagdropdownOpen, setFlagdropdownOpen] = useState(false);    // flag dropdown
    const [acctdropdownOpen, setAcctdropdownOpen] = useState(false);    // account dropdown

	// Toggle dropdowns
    const toggle = () => setIsOpen(!isOpen);    // For main navigation expand / collapse
    const filterToggle = () => setDropdownOpen(prevState => !prevState);

    // Flag dropdown
    const flagdropdown = () => setFlagdropdownOpen(flagdropdownOpen => !flagdropdownOpen) 
    const flagdropdownEnter = () => setFlagdropdownOpen(true)
    const flagdropdownLeave = () => setFlagdropdownOpen(false)

    // Acct dropdown
    const acctdropdown = () => setAcctdropdownOpen(acctdropdownOpen => !acctdropdownOpen);
    const acctdropdownEnter = () => setAcctdropdownOpen(true);
    const acctdropdownLeave = () => setAcctdropdownOpen(false);


    return (
        <>
            <section className="page__header">
                <div className="navbelt">
                    <Navbar expand="md" className="navigationbar">
                        <NavbarBrand href="/" className="navigationbar__brand ssr-only">
                            <span id="nav-logo-sprites"	className="navigationbar__logo__link" aria-label="Amazon.ca">
                                <span className="navigationbar__sprite"></span>
                                <span id="logo-ext" className="navigationbar__nav__logo__ext"></span>
                                <span className="navigationbar__logo__locale">.ca</span>
                            </span>
                        </NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="navigationbar__delivery" navbar>
                                <NavItem>
                                    <Button className="navigationbar__delivery__link">
                                        <span className="navigationbar__logo__glow__loc__icon"></span>
                                        <span className="navigation__glow__ingress__block">
                                            <span className="nav__line__1">Deliver to Ibiyemi</span>
                                            <span className="nav__line__2">Toronto M6G 1E2</span>
                                        </span>
                                    </Button>
                                </NavItem>
                            </Nav>
                            <Form className="navigationbar__category__filter">
                                <Label for="category__filter" className="sr-only">
                                    Email
                                </Label>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <div className="nav__search__scope dropdown">
                                            <span className="navigationbar__drop__categories dropdown-toggle btn btn-secondary" caret>
                                                All
                                            </span>
                                            <select className="navigationbar__search__dropdown" title="Search In">
                                                <option value="search-alias=aps">All Departments</option>
                                                <option value="search-alias=alexa-skills">Alexa Skills</option>
                                                <option value="search-alias=amazon-devices">Amazon Devices</option>
                                            </select>
                                        </div>
                                    </InputGroupAddon>
                                    <Input
                                        type="text"
                                        name="category__filter"
                                        id="category__filter"
                                        className="category__filter__input"
                                        placeholder=""
                                    />
                                    <InputGroupAddon addonType="append" className="navigationbar__category__filter__search">
                                        <Button className="nav__search__submit__button">Go</Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Form>
                            <Nav className="row navbar__nav" navbar>
                                <NavItem className="col-xs-4" onMouseEnter={() => setModal('show')} onMouseLeave={() => setModal('hide')}>
                                    <UncontrolledDropdown onMouseOver={flagdropdownEnter}  onMouseLeave={flagdropdownLeave} isOpen={flagdropdownOpen} toggle={flagdropdown} inNavbar>
                                        <DropdownToggle nav caret className="navigationbar__origin">
                                            <ReactCountryFlag
                                                countryCode="CA"
                                                svg
                                                style={{ width: "20px", height: "20px" }}
                                            />
                                        </DropdownToggle>
                                        <DropdownMenu className="navigationbar__origin__menu">
                                            <div className="nav__arrow null">
                                                <div className="nav__arrow__inner"></div>
                                            </div>
                                            <div className="navigationbar__origin__menu__itemList">
                                                <button className="navigationbar__origin__menu__link navigationbar__origin__menu__item">                          
                                                    <span className="navigationbar__origin__menu__text">
                                                        <i className="icp__radio icp__radio__active"></i>English - EN
                                                    </span>                          
                                                </button>                                  
                                                <div className="navigationbar__divider"></div>                      
                                                <button className="navigationbar__origin__menu__link navigationbar__origin__menu__item">
                                                    <span className="navigationbar__origin__menu__text">
                                                        <i className="icp__radio"></i>Français - FR
                                                    </span>                         
                                                </button>                                  
                                                <div className="navigationbar__divider"></div>                      
                                                <span className="navigationbar__origin__menu__item"> 
                                                    <span className="navigationbar__origin__menu__text">
                                                        <i className="icp__origin" style={{backgroundPosition : "0 -269px"}}></i>
                                                        You are shopping on Amazon.ca.
                                                    </span>                          
                                                </span>                                              
                                                <a href="/gp/navigation-country/select-country/ref=icp_" className="navigationbar__origin__menu__link navigationbar__origin__menu__item">                         
                                                    <span className="navigationbar__origin__menu__text">
                                                        <div className="icp__origin__change__link">Change country/region.</div>
                                                    </span>                          
                                                </a>                    
                                            </div>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </NavItem>
                                <NavItem className="col-xs-4" onMouseEnter={() => setModal('show')} onMouseLeave={() => setModal('hide')}>
                                    <UncontrolledDropdown onMouseOver={acctdropdownEnter}  onMouseLeave={acctdropdownLeave} isOpen={acctdropdownOpen} toggle={acctdropdown} inNavbar>
                                        <DropdownToggle nav caret className="navigationbar__delivery__link">
                                            <span className="navigation__glow__ingress__block">
                                                <span className="nav__line__1">Hello, Kay</span>
                                                <span className="nav__line__2">Account &amp; Lists</span>
                                            </span>
                                        </DropdownToggle>
                                        <DropdownMenu className="navigationbar__account">
                                            <AccountMenu />
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </NavItem>
                                <NavItem className="col-xs-4">
                                    <NavItem>
                                        <NavLink href="/components/" className="navigationbar__delivery__link">
                                            <span className="navigation__glow__ingress__block">
                                                <span className="nav__line__1">Returns</span>
                                                <span className="nav__line__2">&amp; Orders</span>
                                            </span>
                                        </NavLink>
                                    </NavItem>
                                </NavItem>
                                <NavItem className="col-xs-4">
                                    <NavLink href="#" aria-label="0 items in cart" className="nav__cart" id="nav-cart" tabindex="0">
                                        <span className="nav__cart__count__container">
                                            <span id="nav-cart-count" aria-hidden="true" className="nav__cart__count">
                                                0
                                            </span>
                                            <span className="nav__cart__icon"></span>
                                        </span>
                                        <span className="nav__cart__text">Cart</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </section>

            <Modal 
                modal={modal}
                toggleModal={() => toggleModal()}>
            </Modal>
        </>
    )
}

export default HeaderTop
