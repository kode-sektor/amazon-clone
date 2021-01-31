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

	// Toggle dropdowns
    const toggle = () => setIsOpen(!isOpen);
    
    const filterToggle = () => setDropdownOpen(prevState => !prevState);

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
                                <NavLink href="/components/" className="navigationbar__delivery__link">
                                    <span className="navigationbar__logo__glow__loc__icon"></span>
                                    <span className="navigation__glow__ingress__block">
                                        <span className="nav__line__1">Deliver to Ibiyemi</span>
                                        <span className="nav__line__2">Toronto M6G 1E2</span>
                                    </span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Form className="navigationbar__category__filter">
                            <Label for="category__filter" className="sr-only">
                                Email
                            </Label>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <Dropdown isOpen={dropdownOpen} toggle={filterToggle} className="nav__search__scope">
                                        <DropdownToggle className="navigationbar__drop__categories" caret>
                                            All
                                        </DropdownToggle>
                                        <DropdownMenu left>
                                            <DropdownItem>Option 1</DropdownItem>
                                            <DropdownItem>Option 2</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Reset</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
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
                        <Nav className="row ml-auto navbar__nav" navbar>
                            <NavItem className="col-xs-4">
                                <UncontrolledDropdown inNavbar>
                                    <DropdownToggle nav caret className="navigationbar__origin">
                                        <ReactCountryFlag
                                            countryCode="CA"
                                            svg
                                            style={{ width: "20px", height: "20px" }}
                                            title="US"
                                        />
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
