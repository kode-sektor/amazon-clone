import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { BiMenu } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'

import imdb from '../../images/imdb.png'
import imdbpro from '../../images/imdbpro.png'
import plus_ribbon from '../../images/plus-ribbon.png'

import './index.css'

const IMDB = () => {

    const [imdbdropdownOpen, setImdbdropdownOpen] = useState(false)    // imdb dropdown
    const [imdbprodropdownOpen, setImdbprodropdownOpen] = useState(false)    // imdbpro dropdown

    const imdbdropdown = () => setImdbdropdownOpen(imdbdropdownOpen => !imdbdropdownOpen) 
    const imdbprodropdown = () => setImdbprodropdownOpen(imdbprodropdownOpen => !imdbprodropdownOpen) 

    return (
        <div className="imdb--page">
            <header>
                <nav className="imdb__header">
                    <section className="imdb__headerInner">
                        <label htmlFor="" className="imdb__headerMenu imdb__navItem ipc__button ipc__button--default-height ipc__text__button ipc__button--single-padding justify-content-center">
                            <span className="imdb__bars ipc__button__icon--pre ipc__icon">
                                <BiMenu />
                            </span>
                            <div className="ipc__button__text">Menu</div>
                        </label>
                        <Link to="/" className="imdb__navLogo">
                            <img src={imdb} alt="imdb logo" />
                        </Link>
                        <section className="imdb__search">
                            <form action="">
                                <div className="position-relative">
                                    <label htmlFor="" className="ipc__button ipc__text__button ipc__button--single-padding ipc__button--default-height justify-content-center">
                                        <Dropdown isOpen={imdbdropdownOpen} toggle={imdbdropdown}>
                                            <DropdownToggle caret tag="span">
                                                <div className="ipc__button__text">
                                                    All
                                                </div>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem header>
                                                    Header
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Some Action
                                                </DropdownItem>
                                                <DropdownItem text>
                                                    Dropdown Item Text
                                                </DropdownItem>
                                                <DropdownItem disabled>
                                                    Action (disabled)
                                                </DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>
                                                    Foo Action
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Bar Action
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Quo Action
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </label>
                                </div>
                                <div className="imdb__searchBox">
                                    <input type="search" placeholder="Search IMDb" autoCapitalize="off" autoCorrect="off" />
                                </div>
                                <button className="imdb__lens">
                                    <AiOutlineSearch />
                                </button>
                            </form>
                        </section>
                        <div className="imdb__navItem order-4">
                            <Dropdown isOpen={imdbprodropdownOpen} toggle={imdbprodropdown}>
                                <DropdownToggle tag="span" className="ipc__button ipc__button--default-height ipc__text__button ipc__button--single-padding px-0">
                                    <div className="ipc__button__text">
                                        <img className="imdb__imdbproImg" src={imdbpro} alt="imdbpro" />
                                    </div>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>
                                        Header
                                    </DropdownItem>
                                    <DropdownItem>
                                        Some Action
                                    </DropdownItem>
                                    <DropdownItem text>
                                        Dropdown Item Text
                                    </DropdownItem>
                                    <DropdownItem disabled>
                                        Action (disabled)
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Foo Action
                                    </DropdownItem>
                                    <DropdownItem>
                                        Bar Action
                                    </DropdownItem>
                                    <DropdownItem>
                                        Quo Action
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                        <div className="imdb__navSeparator"></div>
                        <div className="imdb__navItem imdb__navWatchList">
                            <Link to="/" className="ipc__button ipc__button--default-height ipc__text__button ipc__button--single-padding justify-content-center">
                                <span className="ipc__button__icon--pre">
                                    <img src={plus_ribbon} alt="" />
                                </span>&nbsp;
                                <div className="ipc__button__text">
                                    Watchlist
                                </div>
                            </Link>
                        </div>
                        <div className="imdb__navItem order-7">
                            <Link to="/" className="ipc__button ipc__button--default-height ipc__text__button ipc__button--single-padding justify-content-center">
                                <div className="ipc__button__text">Sign In</div>
                            </Link>
                        </div>
                    </section>
                </nav>
            </header>
            
        </div>
    )
}

export default IMDB
