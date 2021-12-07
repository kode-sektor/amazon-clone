import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { BiSearch } from 'react-icons/bi'
import { FiArrowRightCircle } from 'react-icons/fi'
import { RiInformationLine } from 'react-icons/ri'

import Slider from '../../components/UI/Carousel/Carousel'

import amazon_ads from '../../images/amazon-ads.png'

import './index.css'

const AmazonAdvertising = () => {

    const [productMenu, setProductMenu] = useState("ad-products")
    const [dropdownMenu, setDropdownMenu] = useState("")

    const revealMenu = (action, e) => {
        if (e) {
            e.preventDefault()
        }
        if (action === "off") {
            setDropdownMenu("")
        } else {
            setDropdownMenu(action)
        }
    }

    const setMenu = (e, action) => {
        e.preventDefault()
        setProductMenu(action)
    }

    return (
        <div className="amazonAdvertising--page">
            <header className="amazonAdvertising__header">
                <nav>
                    <Link className="amazonAdvertising__navBrand">
                        <img src={amazon_ads} alt="Amazon Ads" />
                    </Link>
                    <ul className="amazonAdvertising__navGlobal ml-0">
                        <li>
                            <Link to="/" onMouseOver={(e) => revealMenu("products", e)} onMouseOut={() => revealMenu("off")}>
                                Products
                            </Link>
                            {
                                dropdownMenu === "products" && (
                                    <ul onMouseEnter={() => revealMenu("products")} onMouseLeave={() => revealMenu("off")}>
                                        <li>
                                            <ul>
                                                <li>
                                                    <Link className={productMenu === "ad-products" && "active"} to="/"
                                                        onMouseOver={(e) => setMenu(e, "ad-products")}>Ad products</Link>
                                                </li>
                                                <li>
                                                    <Link className={productMenu === "brand-shopping" && "active"} to="/"
                                                        onMouseOver={(e) => setMenu(e, "brand-shopping")}>Brand shopping experiences</Link>
                                                </li>
                                                <li>
                                                    <Link className={productMenu === "ad-tech" && "active"} to="/"
                                                        onMouseOver={(e) => setMenu(e, "ad-tech")}>Ad tech</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Not sure where to start?&nbsp; <FiArrowRightCircle /></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        {
                                            productMenu === "ad-products" && (
                                                <li>
                                                    <ul>
                                                        <li>
                                                            <Link to="/">
                                                                Sponsored Products
                                                                <div className="nav__description">
                                                                    Showcase your individual products with ads that appear in Amazon shopping results
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Sponsored Brands
                                                                <div className="nav__description">
                                                                    Drive discovery of your brand with ads that appear in Amazon shopping results
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Sponsored Display
                                                                <div className="nav__description">
                                                                    Engage shoppers on and off Amazon with self-service display ads
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Amazon DSP
                                                                <div className="nav__description">
                                                                    Programmatically buy display, video and audio ads on and off Amazon with our demand-side platform
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Video ads
                                                                <div className="nav__description">
                                                                    Put your brand in the spotlight with Streaming TV ads and online video ads
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Audio ads
                                                                <div className="nav__description">
                                                                    Turn it up with ads on Amazon Music's free ad-supported tier
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Custom advertising solutions
                                                                <div className="nav__description">
                                                                    Go big with innovative, tailored campaigns across online and offline channels
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            )
                                        }
                                        {
                                            productMenu === "brand-shopping" && (
                                                <li>
                                                    <ul>
                                                        <li>
                                                            <Link to="/">
                                                                Stores
                                                                <div className="nav__description">
                                                                    Build your own multi-page dedicated brand destination on Amazon at no cost
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Posts
                                                                <div className="nav__description">
                                                                    Highlight your products with free, visual posts featured in a shoppable feed on Amazon
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Amazon Live
                                                                <div className="nav__description">
                                                                    Inspire and educate audiences in real time through interactive, shoppable livestreams
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            )
                                        }
                                        {
                                            productMenu === "ad-tech" && (
                                                <li>
                                                    <ul>
                                                        <li>
                                                            <Link to="/">
                                                                Amazon DSP
                                                                <div className="nav__description">
                                                                    Programmatically buy display, video and audio ads on and off Amazon with our demand-side platform
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Amazon Attribution
                                                                <div className="nav__description">
                                                                    Optimize your non-Amazon marketing channels with our analytics and measurement solution
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Amazon Marketing Cloud
                                                                <div className="nav__description">
                                                                    Perform custom analytics with our holistic measurement solution for on-Amazon marketing
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Sizmek Ad Suite
                                                                <div className="nav__description">
                                                                    Create, measure, and optimize campaigns with our global, multi-channel ad server
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            )
                                        }
                                    </ul>
                                )
                            }
                        </li>
                        <li>
                            <Link to="/" onMouseOver={(e) => revealMenu("industries", e)} onMouseOut={() => revealMenu("off")}>
                                Industries
                            </Link>
                            {
                                dropdownMenu === "industries" && (
                                    <ul onMouseEnter={() => revealMenu("industries")} onMouseLeave={() => revealMenu("off")}>
                                        <li>
                                            <Link to="/">Automotive</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Consumer electronics</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Entertainment</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Fashion</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Financial services</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Grocery</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Publishing</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Toys and games</Link>
                                        </li>
                                    </ul>
                                )
                            }
                        </li>
                        <li>
                            <Link to="/" onMouseOver={(e) => revealMenu("learn", e)} onMouseOut={() => revealMenu("off")}>
                                Learn
                            </Link>
                            {
                                dropdownMenu === "learn" && (
                                    <ul onMouseEnter={() => revealMenu("learn")} onMouseLeave={() => revealMenu("off")}>
                                        <li>
                                            <Link to="/">
                                                Blog
                                                <div className="nav__description">
                                                    Online advertising best practices and inspiration from industry leaders
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                Learning console
                                                <div className="nav__description">
                                                    Training and certifications for advertisers and marketing professionals
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                Product announcements
                                                <div className="nav__description">
                                                    Stay up to date with the latest releases from Amazon Ads
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                Insights
                                                <div className="nav__description">
                                                    Discover insights, tips, guided learning and advertiser success stories
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                Ad specs and policies
                                                <div className="nav__description">
                                                    The information and guidelines you need to help grow your business with Amazon
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                FAQ
                                                <div className="nav__description">
                                                    Get the answers to popular questions about Amazon Ads
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                )
                            }
                        </li>
                        <li>
                            <Link to="/" onMouseOver={(e) => revealMenu("partners", e)} onMouseOut={() => revealMenu("off")}>
                                Partners
                            </Link>
                            {
                                dropdownMenu === "partners" && (
                                    <ul onMouseEnter={() => revealMenu("partners")} onMouseLeave={() => revealMenu("off")} >
                                        <li>
                                            <Link to="/">
                                                Partner directory
                                                <div className="nav__description">
                                                    Whether it's planning, optimization or creative services, find the partner that's right for you
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                Partner Network
                                                <div className="nav__description">
                                                    Build your Amazon Ads expertise, access resources and get discovered
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                )
                            }
                        </li>
                        <li>
                            <span className="amazonAdvertising__search" onMouseOver={() => revealMenu("search")} 
                                onMouseOut={() => revealMenu("off")}>
                                <BiSearch />
                            </span>
                            {
                                dropdownMenu === "search" && (
                                    <section className="amazonAdvertising__searchPanel" onMouseEnter={() => revealMenu("search")}
                                        onMouseLeave={() => revealMenu("off")}>
                                        <section className="amazonAdvertising__searchBox">
                                            <section className="amazonAdvertising__searchInputContainer">
                                                <input name="search" maxLength="128" autoComplete="off" spellCheck="true" aria-label="Search" />
                                            </section>
                                            <section className="amazonAdvertising__results">
                                                <section className="amazonAdvertising__privacy">
                                                    <span className="amazonAdvertising__privacyTxt">
                                                        Privacy statement
                                                    </span>
                                                    <span className="amazonAdvertising__privacyTxtIcon">
                                                        <RiInformationLine />
                                                    </span>
                                                </section>
                                            </section>
                                        </section>
                                    </section>
                                )
                            }
                        </li>
                    </ul>
                    <ul className="amazonAdvertising__signIn">
                        <li>
                            <Link to="/" title="Sign in">
                                Sign in
                            </Link>
                        </li>
                        <li>
                            <Link className="button" to="/" title="Register">
                                Register
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="amazonAdvertising__main">
                <section className="amazonAdvertising__slider">
                    <Slider 
                        type={"advertising"}
                        carouselClass={"advertising__carousel amzn__carousel"}
                        items={
                                [
                                    {
                                        href: "/",
                                        heading : "Your brand. Their wish list.",
                                        caption: "The holiday shopping season doesn’t end with Black Friday and Cyber Monday. Learn how to be there for customers as they search for the perfect gifts this December",
                                        banner: "hero_holiday"
                                    },
                                    {
                                        href: "/",
                                        heading : "Be part of the action",
                                        caption: "The sports weekend kicks off with Thursday Night Football. Streaming exclusively on Prime Video in 2022.",
                                        banner: "tnfmock20"
                                    }
                                ]
                        }
                    />
                </section>
            </main>
        </div>
    )
}
export default AmazonAdvertising
