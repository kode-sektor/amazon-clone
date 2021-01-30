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

	// Toggle dropdowns
	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar color="dark" light expand="md" className="navigationbar">
				<NavbarBrand href="/" classsName="navigationbar__brand ssr-only">
					<span id="nav-logo-sprites"	className="navigationbar__logo__link" aria-label="Amazon.ca">
						<span className="navigationbar__sprite"></span>
						<span id="logo-ext" class="navigationbar__nav__logo__ext"></span>
						<span clasNames="navigationbar__logo__locale">.ca</span>
					</span>
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="" navbar>
						<NavItem>
							<NavLink href="/components/">
								Deliver to Ibiyemi<br></br>
								Toronto M6G 1E2
							</NavLink>
						</NavItem>
                    </Nav>
                    <Form className="navigationbar__category__filter">
                        <Label for="exampleEmail" className="sr-only">
                            Email
                        </Label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <UncontrolledDropdown nav inNavbar className="list-unstyled">
                                    <DropdownToggle className="navigationbar__drop__categories" nav caret>
                                        All
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>Option 1</DropdownItem>
                                        <DropdownItem>Option 2</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Reset</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </InputGroupAddon>
                            <Input
                                type="text"
                                name="email"
                                id="exampleEmail"
                                placeholder=""
                            />
                            <InputGroupAddon addonType="append" className="navigationbar__category__filter__search">
                                <Button className="">Go</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Form>
                    <Nav className="row ml-auto" navbar>
                        <NavItem className="col-xs-4">
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    <ReactCountryFlag
                                        countryCode="CA"
                                        svg
                                        style={{ width: "25px", height: "25px" }}
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
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    <span>Hello, Kay</span>
                                    <br />
                                    <span>Account &amp; Lists</span>
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
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    <span>Returns</span>
                                    <br />
                                    <span>& Orders</span>
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
                            <NavLink href="#" aria-label="0 items in cart" className="nav__cart" id="nav-cart" tabindex="0">
                                <span id="nav-cart-count-container">
                                    <span id="nav-cart-count" aria-hidden="true" className="nav__cart__count">
                                        0
                                    </span>
                                    <span className="nav__cart__icon"></span>
                                </span>
                                <span id="nav-cart-text-container" className="nav__cart__text">Cart</span>
                            </NavLink>
                        </NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
