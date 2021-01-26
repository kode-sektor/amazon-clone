import React, { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText,
	FormGroup,
	Label,
	Input,
	ButtonDropdown,
	Row,
	Col,
} from "reactstrap";

import ReactCountryFlag from "react-country-flag";

import "./index.css";

const Header = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [dropdownOpen, setOpen] = useState(false);
	const [droptoggleAcc, setDropdowntoggleAccount] = useState(false);

	// Toggle dropdowns
	const toggle = () => setIsOpen(!isOpen);
	const droptoggleLang = () => setOpen(!dropdownOpen);
	const droptoggleAccount = () => setDropdowntoggleAccount(!droptoggleAcc);

	return (
		<div>
			<Navbar color="dark" light expand="md" className="navigationbar">
				<NavbarBrand href="/" classsName="navigationbar__brand ssr-only">
					<span
						id="nav-logo-sprites"
						className="navigationbar__logo__link"
						aria-label="Amazon.ca"
					>
						<span className="navigationbar__sprite"></span>
						<span id="logo-ext" class="navigationbar__nav__logo__ext"></span>
						<span clasNames="navigationbar__logo__locale">.ca</span>
					</span>
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink href="/components/">
								Deliver to Ibiyemi<br></br>
								Toronto M6G 1E2
							</NavLink>
						</NavItem>
						<FormGroup>
							<Label for="exampleEmail" className="sr-only">
								Email
							</Label>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									All
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>Option 1</DropdownItem>
									<DropdownItem>Option 2</DropdownItem>
									<DropdownItem divider />
									<DropdownItem>Reset</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
							<Input
								type="email"
								name="email"
								id="exampleEmail"
								placeholder=""
							/>

							<span
								id="nav_search_submit_text"
								className="nav-search-submit-text nav-sprite nav-progressive-attribute"
								aria-label="Go"
							>
								<input
									id="nav-search-submit-button"
									type="submit"
									className="nav-input nav-progressive-attribute"
									value="Go"
									tabindex="0"
								/>
							</span>
						</FormGroup>
						<Row>
							<Col xs="4">
								<ButtonDropdown isOpen={dropdownOpen} toggle={droptoggleLang}>
									<DropdownToggle caret>
										<ReactCountryFlag
											countryCode="CA"
											svg
											style={{ width: "5em", height: "5em" }}
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
								</ButtonDropdown>
							</Col>
							<Col xs="4">
								<ButtonDropdown
									isOpen={droptoggleAcc}
									toggle={droptoggleAccount}
								>
									<DropdownToggle caret>
										<span>Hello, Kay</span>
										<br />
										<span>Account & Lists</span>
									</DropdownToggle>
									<DropdownMenu>
										<DropdownItem header>Header</DropdownItem>
										<DropdownItem disabled>Action</DropdownItem>
										<DropdownItem>Another Action</DropdownItem>
										<DropdownItem divider />
										<DropdownItem>Another Action</DropdownItem>
									</DropdownMenu>
								</ButtonDropdown>
							</Col>
							<Col xs="4">
								<ButtonDropdown
									isOpen={droptoggleAcc}
									toggle={droptoggleAccount}
								>
									<DropdownToggle caret>
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
								</ButtonDropdown>
							</Col>
							<Col xs="4">
								<NavLink href="#" aria-label="0 items in cart" className="nav__cart" id="nav-cart" tabindex="0">
									<span id="nav-cart-count-container">
										<span id="nav-cart-count" aria-hidden="true" className="nav__cart__count">
											0
										</span>
										<span className="nav__cart__icon"></span>
									</span>
									<span id="nav-cart-text-container" className="nav__cart__text">Cart</span>
								</NavLink>
							</Col>
						</Row>
					</Nav>
					<NavbarText>Simple Text</NavbarText>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
