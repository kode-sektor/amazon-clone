import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { RiCloseFill } from 'react-icons/ri'
import { BsSearch, BsArrowRight } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { AiFillTwitterCircle, AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
import { TiSocialPinterestCircular } from 'react-icons/ti'

import Slider from '../../components/UI/Carousel/Carousel'

import search_salmon from '../../images/img-search-salmon.png'
import search_milk from '../../images/img-search-milk.png'
import search_bread from '../../images/img-search-bread.png'
import search_coffee from '../../images/img-search-coffee.png'
import search_chicken from '../../images/img-search-chicken.png'
import search_cheese from '../../images/img-search-cheese.png'
import search_tea from '../../images/img-search-tea.png'
import  wholefoods_interstitial_banner from '../../images/wholefoods-interstitial-banner.jpg'
import  wholefoods_interstitial_banner_two from '../../images/wholefoods-interstitial-banner-two.jpg'
import  all_caviar from '../../images/all-caviar.jpg'
import  extra_twenty_sparkling_wine from '../../images/extra-twenty-sparkling-wine.jpg'
import  off_holiday_cheeses from '../../images/off-holiday-cheeses.jpg'
import  amazon_returns_instore from '../../images/amazon-returns-instore.jpg'
import  organic_hot_cocoa from '../../images/organic-hot-cocoa.jpg'
import  waterfront_red from '../../images/waterfront-red.jpg'
import  prime_member_scanning_wfm_app from '../../images/prime-member-scanning-wfm-app.jpg'
import  shopper_putting_order_in_car_trunk from '../../images/shopper-putting-order-in-car-trunk.jpg'
import  avocado_on_white from '../../images/avocado-on-white.jpg'

import './index.css'

const WholeFoods = () => {

    const [storedropdownOpen, setstoredropdownOpen] = useState(false)    // flag dropdown
    // const [countryDropDown, setCountryDropDown] = useState(false)

    // Show or Hide Language Modal
    // toggleModal is a parent function because while true that a click on the 'Canada'
    // button shows it, a click on the parent modal is also responsible for hiding both
    // the parent modal and this langModal. Thus its more correct that the function of
    // this langModal is moved to the parent Module (Layout/index.js)

    // Flag dropdown
    const storedropdown = () => setstoredropdownOpen(storedropdownOpen => !storedropdownOpen)
    // const storedropdownEnter = () => setstoredropdownOpen(true)
    // const storedropdownLeave = () => setstoredropdownOpen(false)

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
                                <UncontrolledDropdown isOpen={storedropdownOpen} toggle={storedropdown} tag="span" className="">
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
            <main className="wholefoods__container">
                <section className="wholefoods__interstitial">
                    <section className="wholefoods__banner">
                        <section className="wholefoods__grid">
                            <section className="wholefoods__gridC">
                                <div className="wholefoods__gridCBanner"></div>
                            </section>
                            <section className="wholefoods__bannerPanel">
                                <section className="wholefoods__bannerP">
                                    <h2 className="wholefoods__bannerTitle">
                                        Start the Countdown, Skip the Cooking
                                    </h2>
                                    <p className="wholefoods__bannerText">
                                        Ring in 2022 and revel in the celebration without all the work in the kitchen. Our menu packs all the festive treats you need to end the year with a flourish.
                                    </p>
                                    <div className="wholefoods__bannerCta">
                                        <Link className="wholefoods__btn wholefoods__btn--primary">
                                            Order Now
                                        </Link>
                                    </div>
                                    <section className="wholefoods__disclaimer">
                                        <p>Order between October 27 and December 29. Must provide 48-hour notice for all catering orders. Cancellations require 24-hour notice.</p>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                    <ul className="wholefoods__bannerNav">
                        <li>
                            <Link to="/" className="wholefoods__btn wholefoods__btn--secondary wholefoods__btn--external">
                                Get delivery &amp; pickup
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="wholefoods__btn wholefoods__btn--secondary">
                                See weekly sales
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="wholefoods__btn wholefoods__btn--secondary">
                                Browse products
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="wholefoods__btn wholefoods__btn--secondary">
                                Find a store
                            </Link>
                        </li>
                    </ul>
                </section>
                <section className="wholefoods__interstitialSec">
                    <section className="wholefoods__panel wholefoods__panel--white wholefoods__panel--shadow">
                        <header>
                            <h2 className="wholefoods__bannerTitle">Save 30% on raw, cooked and breaded shrimp.*</h2>
                        </header>
                        <p className="wholefoods__bannerText">
                            Prime members, make your New Year's Eve spread one to remember with 30% off shrimp from December 26 through 31*.
                        </p>
                        <div className="wholefoods__bannerCta mt-0">
                            <Link className="wholefoods__btn wholefoods__btn--primary" to="/">
                                See all sales
                            </Link>
                        </div>
                        <section className="wholefoods__disclaimer">
                            <p>*Valid 12/26-12/31/21. Restrictions apply.</p>
                        </section>
                    </section>
                    <img className="wholefoods__interstitImg" src={wholefoods_interstitial_banner} alt="wholefoods interstitial banner" />
                </section>
                <section className="wholefoods__interstitialSec">
                    <section className="wholefoods__panel wholefoods__panel--white wholefoods__panel--shadow">
                        <header>
                            <h2 className="wholefoods__bannerTitle">Ace New Year’s Eve with our caviar guide.</h2>
                        </header>
                        <p className="wholefoods__bannerText">
                            Toast to the new year in style. Get the lowdown on our favorite caviar picks and perfect pairings, plus tips for how to buy and serve.
                        </p>
                        <div className="wholefoods__bannerCta mt-0">
                            <Link className="wholefoods__btn wholefoods__btn--primary" to="/">
                                See the guide
                            </Link>
                        </div>
                        <section className="wholefoods__disclaimer">
                            <p>*Valid 12/26-12/31/21. Restrictions apply.</p>
                        </section>
                    </section>
                    <img className="wholefoods__interstitImg" src={wholefoods_interstitial_banner_two} alt="wholefoods interstitial banner two" />
                </section>
                <section className="wholeFoodsComponent">
                    <ul className="ml-0">
                        <li>
                            <Link to="/">
                                <section className="wholeFoodsComp__image">
                                    <img src={all_caviar} alt="all caviar" />
                                </section>
                                <h2 className="wholeFoodsComponent__title">
                                    <span>All Caviar 25% off. See terms.</span>
                                </h2>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <section className="wholeFoodsComp__image">
                                    <img src={extra_twenty_sparkling_wine} alt="extra twenty sparkling wine" />
                                </section>
                                <h2 className="wholeFoodsComponent__title">
                                    <span>Extra 20% off select sparkling wines. See terms.</span>
                                </h2>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <section className="wholeFoodsComp__image">
                                    <img src={off_holiday_cheeses} alt="off holiday cheeses" />
                                </section>
                                <h2 className="wholeFoodsComponent__title">
                                    <span>Take 30% off holiday cheeses 12/26 – 12/30. See terms.</span>
                                </h2>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <section className="wholeFoodsComp__image">
                                    <img src={amazon_returns_instore} alt="amazon returns instore" />
                                </section>
                                <h2 className="wholeFoodsComponent__title">
                                    <span>Easy Amazon returns in-store. Learn more.</span>
                                </h2>
                            </Link>
                        </li>
                    </ul>
                </section>
                <section className="wholeFoods__carousel wholeFoods__cmsGrid">
                    <div className="wholeFoods__carouselBar"></div>
                    <section className="wholeFoods__carouselC">
                        <div>
                            <h2 className="wholeFoods__carouselHeader">
                                Discover Our Latest &amp; Greatest
                            </h2>
                            <p>Check out limited-time-only finds and seasonal favorites that are hot right now.</p>
                        </div>
                    </section>
                    <section className="wholeFoods__slider">
                        <Slider 
                            type={"wholefoods"}
                            carouselClass={"amzn__carousel"}
                            items={
                                [
                                    {
                                        href_one: "/",
                                        href_two: "/",
                                        href_three: "/",
                                        img_one: <img src={organic_hot_cocoa} alt="carousel image" />,
                                        img_two: <img src={organic_hot_cocoa} alt="carousel image" />,
                                        img_three: <img src={organic_hot_cocoa} alt="carousel image" />,
                                        caption_one: "Only Through December: 365 by Whole Food Market Organic Hot Cocoa Flavored Ice Cream  Sandwiches",
                                        caption_two: "Only Through December: 365 by Whole Food Market Organic Hot Cocoa Flavored Ice Cream  Sandwiches",
                                        caption_three: "Only Through December: 365 by Whole Food Market Organic Hot Cocoa Flavored Ice Cream  Sandwiches"
                                    },
                                    {
                                        href_one: "/",
                                        href_two: "/",
                                        href_three: "/",
                                        img_one: <img src={organic_hot_cocoa} alt="carousel image" />,
                                        img_two: <img src={organic_hot_cocoa} alt="carousel image" />,
                                        img_three: <img src={organic_hot_cocoa} alt="carousel image" />,
                                        caption_one: "Only Through December: 365 by Whole Food Market Organic Hot Cocoa Flavored Ice Cream  Sandwiches",
                                        caption_two: "Only Through December: 365 by Whole Food Market Organic Hot Cocoa Flavored Ice Cream  Sandwiches",
                                        caption_three: "Only Through December: 365 by Whole Food Market Organic Hot Cocoa Flavored Ice Cream  Sandwiches"
                                    }
                                ]
                            }
                        />
                    </section>
                </section>
                <section className="wholefoods__interstitialSec wholefoods__interstitialSec--secondary wholeFoods__cmsGrid">
                    <section className="wholefoods__galleryContent">
                        <h2>Our purpose is to nourish people &amp; the planet.</h2>
                    </section>
                    <img className="img__bannerSec" src={waterfront_red} alt="waterfront end" />
                </section>
                <section className="wholefoods__montage wholefoods__grid wholeFoods__cmsGrid wholefoods__interstitialSec">
                    <section>
                        <section className="wholefoods__panel wholefoods__panel--shadow wholefoods__panel--white">
                            <h2 class="wholefoods__bannerTitle">More of what you love with Prime.</h2>
                            <p class="wholefoods__bannerText">
                                With a Prime membership, there’s a whole lot more to love about Whole Foods Market, from discounts all over the store to convenient delivery or pickup.*
                            </p>
                            <div className="wholefoods__bannerCta mt-0">
                                <Link className="wholefoods__btn wholefoods__btn--primary" to="/">
                                    Learn more
                                </Link>
                            </div>
                            <section className="wholefoods__disclaimer">
                                <p>
                                    *Exclusively for Prime members in select ZIP codes. <br />
                                    **Excludes alcohol.
                                </p>
                            </section>
                        </section>
                    </section>
                    <section>
                        <img src={prime_member_scanning_wfm_app} alt="Prime member scanning the WFM app" />
                        <h3 className="wholeFoodsComponent__title__ii">
                            Save more every time you shop.
                        </h3>
                        <p>
                            Members always get an extra 10% off in-store sales.** Plus, deals on seasonal favorites and items chosen just for you.
                        </p>
                        <p className="wholefoods__link__ii">
                            <Link to="/">
                                <span>See all sales</span>
                            </Link>
                        </p>
                    </section>
                    <section>
                        <img src={shopper_putting_order_in_car_trunk} alt="shopper putting order in car trunk" />
                        <h3 className="wholeFoodsComponent__title__ii">
                            Save time with delivery or pickup.
                        </h3>
                        <p>
                            Get your groceries delivered to your door or ready for you to pick up — when it works for you.
                        </p>
                        <p className="wholefoods__link__ii">
                            <Link to="/">
                                <span>Show me how</span>
                            </Link>
                        </p>
                    </section>
                    <section>
                        <img src={avocado_on_white} alt="avocado on white" />
                    </section>
                </section>
            </main>
            <footer className="wholefoods__footer">
                <section className="wholefoods__footerPry">
                    <ul>
                        <li>
                            <h4 className="wholefoods__footerHead">Shopping</h4>
                            <ul>
                                <li>
                                    <Link to="/" className="wholefoods__link">
                                        <span>Weekly Sales</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="wholefoods__link">
                                        <span>Browse Products</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="wholefoods__link wholefoods__link--external">
                                        <span>Delivery and Pickup</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="wholefoods__link">
                                        <span>Meals and Catering</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="wholefoods__link">
                                        <span>Amazon Prime at Whole Foods</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="wholefoods__link wholefoods__link--external">
                                        <span>Gift Cards</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="wholefoods__link">
                                        <span>Special Diets</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="wholefoods__link">
                                        <span>Tips and Ideas</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="wholefoods__link">
                                        <span>Recipes</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h4 className="wholefoods__footerHead">Mission in Action</h4>
                            <ul>
                                <li>
                                    <Link to="/" className="wholefoods__link">
                                        <span>Responsible Sourcing</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="wholefoods__link">
                                        <span>Quality Standards</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="wholefoods__link">
                                        <span>Community Giving</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="wholefoods__link">
                                        <span>Environmental Stewardship</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h4 className="wholefoods__footerHead">About</h4>
                            <ul>
                                <li>
                                    <Link to="/" className="wholefoods__link">
                                        <span>About Whole Foods Market</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="wholefoods__link">
                                        <span>Our Values</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="wholefoods__link">
                                        <span>Departments</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="wholefoods__link">
                                        <span>Environmental Stewardship</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="wholefoods__link">
                                        <span>Information and Potential Suppliers</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="wholefoods__link">
                                        <span>Careers</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="wholefoods__link">
                                        <span>Newsroom</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h4 className="wholefoods__footerHead">Need Help?</h4>
                            <ul>
                                <li>
                                    <Link to="/" className="wholefoods__link">
                                        <span>About Visit customer care</span>
                                    </Link>
                                </li>
                            </ul>
                            <section className="wholefoods__socials">
                                <h4 className="wholefoods__footerHead mt-0">About</h4>
                                <nav>
                                    <ul>
                                        <li>
                                            <Link to="/" target="_blank" rel="noreferrer">
                                                <FaFacebook />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" target="_blank" rel="noreferrer">
                                                <AiFillTwitterCircle />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" target="_blank" rel="noreferrer">
                                                <AiOutlineInstagram />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" target="_blank" rel="noreferrer">
                                                <TiSocialPinterestCircular />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" target="_blank" rel="noreferrer">
                                                <AiFillYoutube />
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                                <Link to="/" className="wholefoods__btn">
                                    Sign up for email
                                </Link>
                            </section>
                        </li>
                    </ul>
                </section>
                <section className="wholefoods__footerSec">
                    <section className="wholefoods__footerSecContainer">
                        <ul>
                            <li>
                                <Link to="/" className="wholefoods__link">
                                    Copyright 2021 Whole Foods Market IP. L.P.
                                </Link>
                            </li>
                            <li><hr/></li>
                            <li>
                                <nav className="wholefoods__footerSecNav">
                                    <ul>
                                        <li>
                                            <Link to="/" className="wholefoods__link">Privacy Notice</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="wholefoods__link">Conditions of Use</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="wholefoods__link">Interest-Based Ads</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="wholefoods__link">Site Map</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="wholefoods__link">Site Information</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="wholefoods__link">Legal</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </li>
                        </ul>
                    </section>
                </section>
            </footer>
        </div>
    )
}

export default WholeFoods
