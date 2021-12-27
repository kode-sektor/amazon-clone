import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { RiCloseFill } from 'react-icons/ri'
import { BsSearch, BsArrowRight } from 'react-icons/bs'

import search_salmon from '../../images/img-search-salmon.png'
import search_milk from '../../images/img-search-milk.png'
import search_bread from '../../images/img-search-bread.png'
import search_coffee from '../../images/img-search-coffee.png'
import search_chicken from '../../images/img-search-chicken.png'
import search_cheese from '../../images/img-search-cheese.png'
import search_tea from '../../images/img-search-tea.png'

import './index.css'

const WholeFoods = () => {

    const [flagdropdownOpen, setFlagdropdownOpen] = useState(false)    // flag dropdown
    // const [countryDropDown, setCountryDropDown] = useState(false)

    // Show or Hide Language Modal
    // toggleModal is a parent function because while true that a click on the 'Canada' 
    // button shows it, a click on the parent modal is also responsible for hiding both
    // the parent modal and this langModal. Thus its more correct that the function of 
    // this langModal is moved to the parent Module (Layout/index.js)

    // Flag dropdown
    const flagdropdown = () => setFlagdropdownOpen(flagdropdownOpen => !flagdropdownOpen) 
    const flagdropdownEnter = () => setFlagdropdownOpen(true)
    const flagdropdownLeave = () => setFlagdropdownOpen(false)

    return (
        <div className="wholefoods--page">
            <header className="wholefoods__header">
                <section className="wholefoods__alert">
                    <section className="wholefoods__alertContent">
                        <p>
                            New! Order hot, freshly prepared pizza, sandwiches and more for pickup or delivery with our app. Currently available for iOS users in select stores.&nbsp;
                            <Link to="/" className="wholefoods__link">
                                <span>Learn More</span>
                            </Link>
                        </p>
                    </section>
                    <button className="wholefoods__alertClose">
                        <RiCloseFill />
                    </button>
                </section>
                <nav className="wholefoods__nav">
                    <Link to="/">
                        <span className="sr-only">Homme</span>
                    </Link>
                    <div className="wholefoods__navDivider"></div>
                    <ul className="wholefoods__globalMenu">
                        <li>
                            <Link to="/">
                                <span>Browse Products</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span>Order Online</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span>Recipes</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span>Weekly Sales</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span>Find a Store</span>
                            </Link>
                        </li>
                    </ul>
                    <section className="wholefoods__navSearch">
                        <section className="wholefoods__navSearchWrapper">
                            <div className="wholefoods__navSearchContainer">
                                <form action="">
                                <UncontrolledDropdown isOpen={flagdropdownOpen} toggle={flagdropdown} tag="span" className="">
                                    <DropdownToggle className="btn__no__style p-0">
                                        <button className="wholefoods__searchIcon">
                                            <BsSearch />
                                        </button>
                                        <input type="text" placeholder="Search" maxLength="256" />
                                    </DropdownToggle>
                                    <DropdownMenu className="wholefoods__navDropdown">
                                        <h4 className="wholefoods__navTitle">Top Searches</h4>
                                        <ul>
                                            <li>
                                                <Link to="/">
                                                    <section className="wholefoods__itemLine">
                                                        <img src={search_salmon} alt="search salmon" />
                                                        <section className="wholefoods__itemTitle">
                                                            Salmon
                                                        </section>
                                                    </section>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <section className="wholefoods__itemLine">
                                                        <img src={search_milk} alt="search milk" />
                                                        <section className="wholefoods__itemTitle">
                                                            Salmon
                                                        </section>
                                                    </section>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <section className="wholefoods__itemLine">
                                                        <img src={search_bread} alt="search bread" />
                                                        <section className="wholefoods__itemTitle">
                                                            Salmon
                                                        </section>
                                                    </section>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <section className="wholefoods__itemLine">
                                                        <img src={search_coffee} alt="search coffee" />
                                                        <section className="wholefoods__itemTitle">
                                                            Salmon
                                                        </section>
                                                    </section>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <section className="wholefoods__itemLine">
                                                        <img src={search_chicken} alt="search chicken" />
                                                        <section className="wholefoods__itemTitle">
                                                            Salmon
                                                        </section>
                                                    </section>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <section className="wholefoods__itemLine">
                                                        <img src={search_cheese} alt="search cheese" />
                                                        <section className="wholefoods__itemTitle">
                                                            Salmon
                                                        </section>
                                                    </section>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <section className="wholefoods__itemLine">
                                                        <img src={search_tea} alt="search tea" />
                                                        <section className="wholefoods__itemTitle">
                                                            Salmon
                                                        </section>
                                                    </section>
                                                </Link>
                                            </li>
                                        </ul>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                </form>
                            </div>
                        </section>
                    </section>
                    <div className="wholefoods__navLogin">
                        <Link to="/">
                            Login
                        </Link>
                    </div>
                </nav>
                <section className="wholefoods__store">
                    <div className="wholefoods__storeBlock">
                        <Link to="/" className="wholefoods__link">
                            <span>Find a store&nbsp;</span>
                            <BsArrowRight />
                        </Link>
                    </div>
                </section>
            </header>
        </div>
    )
}

export default WholeFoods
