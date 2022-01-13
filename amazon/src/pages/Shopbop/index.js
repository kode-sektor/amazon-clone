import React from 'react'
import { Link } from 'react-router-dom'

import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'

import rebrand_hearts from '../../images/rebrand-hearts.png'
import shopbop_bag from '../../images/shopbop-bag.png'
import rebrand_shopbop_logo from '../../images/rebrand-shopbop-logo.png'
import shopbop_welcome from '../../images/shopbop-welcome.jpg'

import './index.css'

const Shopbop = () => {
    return (
        <div className="shopbop--page">
            <header className="shopbop__header">
                <section className="shopbop__headerContainer">
                    <section className="shopbop__headerBar">
                        <section className="shopbop__headerCurrency">
                            <section className="shopbop__util">
                                <span className="shopbop__utilMarker">
                                    <FaMapMarkerAlt />
                                </span> CA<MdKeyboardArrowDown />
                            </section>
                            <section className="shopbop__util">
                                EN<MdKeyboardArrowDown />
                            </section>
                            <section className="shopbop__util">
                                $CAD<MdKeyboardArrowDown />
                            </section>
                        </section>
                        <section className="shopbop__headerFree">
                            <Link to="/">
                                FREE shipping + FREE returns to Canada                    
                            </Link>
                        </section>
                        <section className="shopbop__headerRegister">
                            <section className="shopbop__signin">
                                <Link to="/">Sign In / Register</Link> <MdKeyboardArrowDown />
                            </section>
                            <section className="shopbop__hearts">
                                <Link to="/">
                                    <img src={rebrand_hearts} alt="My Hearts" />
                                </Link>
                            </section>
                        </section>
                        <section className="shopbop__cart">
                            <img src={shopbop_bag} alt="shopbop bag" />
                            <div className="shopbop__cartCount">0</div>
                        </section>
                    </section>
                </section>
                <section className="shopbop__nav">
                    <section className="shopbop__logo">
                        <Link to="/">
                            <img src={rebrand_shopbop_logo} alt="rebrand shopbop logo" />
                        </Link>
                    </section>
                    <nav className="shopbop__navList">
                        <ul>
                            <li>
                                <Link to="/">
                                    What's New
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Our Favorites
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Designers
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Clothing
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Active
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Shoes
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Bags
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Accessories
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Men
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Sale
                                </Link>
                            </li>
                            <li>
                                <button className="shopbop__search">
                                    <AiOutlineSearch />
                                </button>
                            </li>
                        </ul>
                    </nav>
                </section>
            </header>
            <main className="shopbop__body">
                <section className="shopbop__welcome">
                    <section className="shopbop__welcomeTo">
                        <header className="shopbop__welcomeHeader">
                            Welcome To
                            <section className="shopbop__welcomeLogo">
                                <img src={rebrand_shopbop_logo} alt="" />
                            </section>
                        </header>
                        <section className="shopbop__container">
                            <p>
                                We're the ultimate destination for style inspiration and discovery, offering the latest from 1,000+ established and emerging designers, daily new arrivals, and can't-miss styling tips. Your perfect wardrobe starts (and ends) here.
                            </p>
                        </section>
                        <section className="shopbop__container">
                            <p>
                                Get emails about new arrivals from designers you love, and when your favorite items are selling out or going on sale.
                            </p>
                        </section>
                        <section className="shopbop__container text-center">
                            <form action="" className="shopbob__mailing">
                                <input type="email" placeholder="Enter your email address" value={""} />
                                <input type="submit" value="Subscribe" />
                            </form>
                        </section>
                        <ul className="shopbop__containerLinks">
                            <li>
                                <Link to="/">What's New</Link>
                            </li>
                            <li>
                                <Link to="/">Customer Service</Link>
                            </li>
                            <li>
                                <Link to="/">Size Guide</Link>
                            </li>
                            <li>
                                <Link to="/">Account</Link>
                            </li>
                        </ul>
                    </section>
                    <section className="shopbop__posterImg">
                        <img src={shopbop_welcome} alt="shopbop welcome" />
                    </section>
                </section>
            </main>
        </div>
    )
}

export default Shopbop
