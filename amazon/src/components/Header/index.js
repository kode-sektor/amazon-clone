import React, { useState } from "react";
import {
	Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
	UncontrolledDropdown, DropdownToggle, DropdownMenu, Dropdown, DropdownItem,
	NavbarText, FormGroup, Label, Input, ButtonDropdown, Row, Col, Form,
    InputGroup, InputGroupAddon, Button
} from "reactstrap";

import ReactCountryFlag from "react-country-flag";

import "./index.css";

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);    // search filter
    const [flagdropdownOpen, setFlagdropdownOpen] = useState(false);    // search filter

	// Toggle dropdowns
    const toggle = () => setIsOpen(!isOpen);
    
    const filterToggle = () => setDropdownOpen(prevState => !prevState);

    const flagdropdown = () => setFlagdropdownOpen(flagdropdownOpen => !flagdropdownOpen);
    const flagdropdownEnter = () => setFlagdropdownOpen(true);
    const flagdropdownLeave = () => setFlagdropdownOpen(false);

	return (
		<header className="page__header">
            <div className="navbelt">
                <Navbar expand="md" className="navigationbar">
                    <NavbarBrand href="/" className="navigationbar__brand ssr-only">
                        <span id="nav-logo-sprites"	className="navigationbar__logo__link" aria-label="Amazon.ca">
                            <span className="navigationbar__sprite"></span>
                            <span id="logo-ext" class="navigationbar__nav__logo__ext"></span>
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
                            <NavItem className="col-xs-4">
                                <UncontrolledDropdown onMouseOver={flagdropdownEnter}  onMouseLeave={flagdropdownLeave} isOpen={flagdropdownOpen} toggle={flagdropdown}  inNavbar>
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
                                        <div class="navigationbar__origin__menu__itemList">
                                            <button class="navigationbar__origin__menu__link navigationbar__origin__menu__item">                          
                                                <span class="navigationbar__origin__menu__text">
                                                    <i class="icp__radio icp__radio__active"></i>English - EN
                                                </span>                          
                                            </button>                                  
                                            <div class="navigationbar__divider"></div>                      
                                            <button class="navigationbar__origin__menu__link navigationbar__origin__menu__item">
                                                <span class="navigationbar__origin__menu__text">
                                                    <i class="icp__radio"></i>Français - FR
                                                </span>                         
                                            </button>                                  
                                            <div class="navigationbar__divider"></div>                      
                                            <span class="navigationbar__origin__menu__item"> 
                                                <span class="navigationbar__origin__menu__text">
                                                    <i class="icp__origin" style={{backgroundPosition : "0 -269px"}}></i>
                                                    You are shopping on Amazon.ca.
                                                </span>                          
                                            </span>                                              
                                            <a href="/gp/navigation-country/select-country/ref=icp_lop_mop_chg?ie=UTF8&amp;preferencesReturnUrl=%2F" class="navigationbar__origin__menu__link navigationbar__origin__menu__item" id="icp-flyout-mkt-change">                         
                                                <span class="navigationbar__origin__menu__text">
                                                    <div class="icp__origin__change__link">Change country/region.</div>
                                                </span>                          
                                            </a>                    
                                        </div>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </NavItem>
                            <NavItem className="col-xs-4">
                                <UncontrolledDropdown inNavbar>
                                    <DropdownToggle nav caret className="navigationbar__delivery__link">
                                        <span className="navigation__glow__ingress__block">
                                            <span className="nav__line__1">Hello, Kay</span>
                                            <span className="nav__line__2">Account &amp; Lists</span>
                                        </span>
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>Header</DropdownItem>
                                        <DropdownItem disabled>Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Another Action</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </NavItem>
                            <NavItem className="col-xs-4">
                                <NavItem>
                                    <NavLink href="/components/" className="navigationbar__delivery__link">
                                        <span className="navigation__glow__ingress__block">
                                            <span className="nav__line__1">Returns</span>
                                            <span className="nav__line__2">& Orders</span>
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
		</header>
	);
};

export default Header;
