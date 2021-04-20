import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import {
	Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
	UncontrolledDropdown, DropdownToggle, DropdownMenu, Label, Input, Form,
    InputGroup, InputGroupAddon, Button
} from "reactstrap"

import ReactCountryFlag from "react-country-flag"

import AccountMenu from '../AccountMenu/index'
import DropdownMenuLang from '../../UI/DropdownMenuLang'

import "./index.css"

const HeaderTop = (props) => {

    const [queryID, setQueryID] = useState("")
    
    const [isOpen, setIsOpen] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)    // search filter (not used yet)

    const [flagdropdownOpen, setFlagdropdownOpen] = useState(false)    // flag dropdown
    const [acctdropdownOpen, setAcctdropdownOpen] = useState(false)    // account dropdown

	// Toggle dropdowns
    const toggle = () => setIsOpen(!isOpen);    // For main navigation expand / collapse
    const filterToggle = () => setDropdownOpen(prevState => !prevState)

    // Flag dropdown
    const flagdropdown = () => setFlagdropdownOpen(flagdropdownOpen => !flagdropdownOpen) 
    const flagdropdownEnter = () => setFlagdropdownOpen(true)
    const flagdropdownLeave = () => setFlagdropdownOpen(false)

    // Acct dropdown
    const acctdropdown = () => setAcctdropdownOpen(acctdropdownOpen => !acctdropdownOpen)
    const acctdropdownEnter = () => setAcctdropdownOpen(true)
    const acctdropdownLeave = () => setAcctdropdownOpen(false)

    useEffect(() => {
        setQueryID(window.location.pathname)
    })


    return (
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
                        {queryID === "/" && (
                            <Nav className="navigationbar__delivery" navbar>
                                <NavItem>
                                    <Button className="navigationbar__delivery__link" onClick={()=> {
                                        let modal = props.modal
                                        modal = modal === "show" ? "hide" : "show stretched"
                                        props.toggleModal(modal, "deliveryAddressModal")
                                    }}>
                                            <>
                                                <span className="navigationbar__logo__glow__loc__icon"></span>
                                                <span className="navigation__glow__ingress__block">
                                                    <span className="nav__line__1">Deliver to Ibiyemi</span>
                                                    <span className="nav__line__2">Toronto M6G 1E2</span>
                                                </span>
                                            </>
                                    </Button>
                                </NavItem>
                            </Nav>
                        )}
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
                            <NavItem className="col-xs-4" onMouseEnter={() => props.toggleModal('show')} onMouseLeave={() => props.toggleModal('hide')}>
                                <UncontrolledDropdown onMouseOver={flagdropdownEnter} onMouseLeave={flagdropdownLeave} isOpen={flagdropdownOpen} toggle={flagdropdown} inNavbar>
                                    <Link to="/customer_preferences/lang">
                                        <DropdownToggle nav caret className="navigationbar__origin" href="/customer_preferences/lang" tag="button">
                                            <ReactCountryFlag
                                                countryCode="CA"
                                                svg
                                                style={{ width: "20px", height: "20px" }}
                                            />
                                        </DropdownToggle>
                                    </Link>
                                    <DropdownMenuLang/>
                                </UncontrolledDropdown>
                            </NavItem>
                            <NavItem className="col-xs-4" onMouseEnter={() => props.toggleModal('show')} onMouseLeave={() => props.toggleModal('hide')}>
                                <UncontrolledDropdown onMouseOver={acctdropdownEnter}  onMouseLeave={acctdropdownLeave} isOpen={acctdropdownOpen} toggle={acctdropdown} inNavbar>
                                    <Link to="/your_account">
                                        <DropdownToggle nav caret className="navigationbar__delivery__link" tag="button">
                                            <span className="navigation__glow__ingress__block">
                                                <span className="nav__line__1">Hello, Kay</span>
                                                <span className="nav__line__2">Account &amp; Lists</span>
                                            </span>
                                        </DropdownToggle>
                                    </Link>
                                    <DropdownMenu className="navigationbar__account">
                                        <AccountMenu />
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </NavItem>
                            <NavItem className="col-xs-4">
                                <NavItem>
                                    <NavLink href="/order_history" className="navigationbar__delivery__link">
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
    )
}

export default HeaderTop
