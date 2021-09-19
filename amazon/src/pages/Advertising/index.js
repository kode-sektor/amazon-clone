import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Navbar, Nav, NavItem, NavLink, NavbarText,
        Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'        
import { FaYoutube, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { RiFacebookCircleFill } from 'react-icons/ri'

import { languages } from '../../utilities/data'

import { PrimaryBtn__ii } from '../../components/UI/Button'
import DropdownMenuLang from '../../components/UI/DropdownMenuCountries'
import Tile from '../../components/UI/Tile'

import amazon_advertising from '../../images/amazon-advertising.png'
import amazon_attribution from '../../images/amazon-attribution.png'
import technology_tools from '../../images/technology-tools.png'
import streaming_audio from '../../images/streaming-audio.png'
import managed_services from '../../images/managed-services.png'
import display_desktop_mobile from '../../images/display-desktop-mobile.png'
import video_ad from '../../images/video-ad-icon.png'
import two_X_image_hero_pink from '../../images/2X-image-hero-pink.png'
import amazon_advertising_home_office from '../../images/amazon-advertising-home-office.png'

import './index.css'

const Advertising = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [dropdownOpenObjective, setDropdownOpenObjective] = useState(false)
    const [dropdownOpenMarketPlace, setDropdownOpenMarketPlace] = useState(false)

    const toggle = () => setDropdownOpen(prevState => !prevState)
    const toggleObjective = () => setDropdownOpenObjective(prevState => !prevState)
    const toggleMarketPlace = () => setDropdownOpenMarketPlace(prevState => !prevState)

    return (
        <div className="advertising--page">
            <header className="advertising__header">
                <Navbar className="advertising__nav">
                    <div className="advertising__navInner">
                        <div className="advertising__logo">
                            <img src={amazon_advertising} alt="advertising logo"/>
                        </div>
                        <Nav className="advertising__navLinks" navbar>
                            <NavItem>
                                <NavLink href="/" className="advertising__navLink--current">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Solutions</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Resources</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Partners</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Blogs</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Search</NavLink>
                            </NavItem>
                        </Nav>
                        <ul className="amazon__applyToSell">
                            <li className="">
                                <Link to="/">Sign In</Link>
                            </li>
                            <li className="advertising__buttonRegister">
                                <PrimaryBtn__ii
                                    text={"Register"}
                                />
                            </li>
                            <li className="">
                                <Dropdown isOpen={dropdownOpen} toggle={toggle} className="dropdownMenuPlain">
                                    <DropdownToggle className="advertising__selectedCountry" caret>
                                        English (Canada)
                                    </DropdownToggle>
                                    <DropdownMenuLang
                                        type="large"
                                        optionList={
                                            languages.map(item => (
                                                <li>
                                                    <button type="button" value="Start machine" value={item.language} className="dropdown-item">
                                                        {item.text}
                                                    </button>
                                                </li>
                                            ))
                                        }
                                    />
                                </Dropdown>
                            </li>
                        </ul>
                    </div>
                </Navbar>
            </header>
            <main className="advertising--main">
                <section className="advertising__gateway">
                    <section className="advertising__gatewayHero">
                        <div className="advertising__gatewayOverlay">
                            <header className="advertising__gatewayContent">
                                <h1 className="advertising__heading">Amazon Advertising</h1>
                                <p className="advertising__heroText">
                                    Amazon Advertising helps grow businesses and brands of all sizes
                                </p>
                            </header>
                            <section className="advertising__video">
                                <video autoplay="" muted="" controls="" poster="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/blog/A20MAA_ENG_brandvid_slateb1._CB485850187_.png" crossorigin="anonymous">
                                    <source src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/new-assets/home/Amazon_CorepitchSizzle_V8_MGFX.mp4" type="video/mp4"/>
                                    <source src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/new-assets/home/Amazon_CorepitchSizzle_V8_MGFX.mp4" type="video/webm"/>
                                    <track kind="captions" src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/long-term-assets/videos/CorePitchSizzle_ar-AE.vtt" srclang="ar-ae" label="عربى"/>
                                    <track kind="captions" src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/long-term-assets/videos/CorePitchSizzle_zh-CN.vtt" srclang="zh-cn" label="中文"/>
                                    <track kind="captions" src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/long-term-assets/videos/CorePitchSizzle_nl-NL.vtt" srclang="nl-nl" label="Nederlands"/>
                                    <track kind="captions" src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/long-term-assets/videos/CorePitchSizzle_fr-CA.vtt" srclang="fr-ca" label="Français (Canada)"/>
                                    <track kind="captions" src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/long-term-assets/videos/CorePitchSizzle_fr-FR.vtt" srclang="fr-fr" label="Français (France)"/>
                                    <track kind="captions" src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/long-term-assets/videos/CorePitchSizzle_de-DE.vtt" srclang="de-de" label="Deutsch"/>
                                    <track kind="captions" src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/long-term-assets/videos/CorePitchSizzle_it-IT.vtt" srclang="it-it" label="Italiano"/>
                                    <track kind="captions" src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/long-term-assets/videos/CorePitchSizzle_ja-JP.vtt" srclang="ja-jp" label="日本語"/>
                                    <track kind="captions" src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/long-term-assets/videos/CorePitchSizzle_ko-KR.vtt" srclang="ko-kr" label="한국어"/>
                                    <track kind="captions" src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/long-term-assets/videos/CorePitchSizzle_pt-BR.vtt" srclang="pt-br" label="Português (Brasil)"/>
                                    <track kind="captions" src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/long-term-assets/videos/CorePitchSizzle_es-MX.vtt" srclang="es-mx" label="Español (México)"/>
                                    <track kind="captions" src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/long-term-assets/videos/CorePitchSizzle_es-ES.vtt" srclang="es-es" label="Español (España)"/>
                                </video>
                            </section>
                        </div>
                    </section>
                </section>
                <section className="advertising__landing">
                    <h2 className="advertising__landingHeading">
                        Find the right advertising solution for you.<br/>
                        I want to
                        <Dropdown isOpen={dropdownOpenObjective} toggle={toggleObjective} className="filter__button d-inline-block">
                            <DropdownToggle>
                                <i className="d-inline-block">(objective)</i>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem className="filter__buttonReset">Some Action</DropdownItem>
                                <DropdownItem text>
                                    <input type="radio" id="objective-0" name="objective" value="Build my brand"/>
                                    <label for="objective-0">Build my brand</label>
                                </DropdownItem>
                                <DropdownItem text>
                                    <input type="radio" id="objective-1" name="objective" value="Connect with shoppers"/>
                                    <label for="objective-1">Connect with shoppers</label>
                                </DropdownItem>
                                <DropdownItem text>
                                    <input type="radio" id="objective-2" name="objective" value="Grow sales"/>
                                    <label for="objective-2">Grow sales</label>
                                </DropdownItem>
                                <DropdownItem text>
                                    <input type="radio" id="objective-3" name="objective" value="Measure results"/>
                                    <label for="objective-3">Measure results</label>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        in
                        <Dropdown isOpen={dropdownOpenMarketPlace} toggle={toggleMarketPlace} className="filter__button d-inline-block">
                            <DropdownToggle>
                                <i className="d-inline-block">(marketplace)</i>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem className="filter__buttonReset">Reset filters</DropdownItem>
                                <DropdownItem className="filter__heading" text>Select up to five (5) marketplaces</DropdownItem>
                                <DropdownItem text>
                                    North America
                                    <ul className="filter__multiInner ml-0">
                                        <li>
                                            <input type="checkbox" id="North America-0" value="Canada" name="CA"/>
                                            <label for="North America-0">Canada</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="North America-1" value="Mexico" name="MX"/>
                                            <label for="North America-1">Mexico</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="North America-2" value="United States" name="US"/>
                                            <label for="North America-2">United States</label>
                                        </li>
                                    </ul>
                                </DropdownItem>
                                <DropdownItem text>
                                    South America
                                    <ul className="filter__multiInner ml-0">
                                        <li>
                                            <input type="checkbox" id="South America-0" value="Brazil" name="BR"/>
                                            <label for="South America-0">Brazil</label>
                                        </li>
                                    </ul>
                                </DropdownItem>
                                <DropdownItem text>
                                    Europe
                                    <ul className="filter__multiInner ml-0">
                                        <li>
                                            <input type="checkbox" id="Europe-0" value="Germany" name="DE"/>
                                            <label for="Europe-0">Germany</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="Europe-1" value="Spain" name="ES"/>
                                            <label for="Europe-1">Spain</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="Europe-2" value="France" name="FR"/>
                                            <label for="Europe-2">France</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="Europe-3" value="Italy" name="IT"/>
                                            <label for="Europe-3">Italy</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="Europe-4" value="Netherlands" name="NL"/>
                                            <label for="Europe-4">Netherlands</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="Europe-5" value="United Kingdom" name="UK"/>
                                            <label for="Europe-5">United Kingdom</label>
                                        </li>
                                    </ul>
                                </DropdownItem>
                                <DropdownItem text>
                                    Middle East
                                    <ul className="filter__multiInner ml-0">
                                        <li>
                                            <input type="checkbox" id="Middle East-1" value="Saudi Arabia" name="KSA"/>
                                            <label for="Middle East-1">Saudi Arabia</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="Middle East-2" value="United Arab Emirates" name="UAE"/>
                                            <label for="Middle East-2">United Arab Emirates</label>
                                        </li>
                                    </ul>
                                </DropdownItem>
                                <DropdownItem text>
                                    Asia Pacific
                                    <ul className="filter__multiInner ml-0">
                                        <li>
                                            <input type="checkbox" id="Asia Pacific-0" value="Australia" name="AU"/>
                                            <label for="Asia Pacific-0">Australia</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="Asia Pacific-1" value="India" name="UAE"/>
                                            <label for="Asia Pacific-1">India</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="Asia Pacific-2" value="Japan" name="JP"/>
                                            <label for="Asia Pacific-2">Japan</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="Asia Pacific-3" value="Singapore" name="SG"/>
                                            <label for="Asia Pacific-3">Singapore</label>
                                        </li>
                                    </ul>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </h2>
                </section>
                <section className="advertising__tile tile__container">
                    <div className="columns__container columns__container--third columns__container--limit__width">
                        <Tile
                            items={
                                    [
                                        {
                                            img: amazon_attribution,
                                            alt: "amazon attribution",
                                            title: "Amazon Attribution (beta)",
                                            body: "Discover how your non-Amazon digital marketing tactics are helping drive sales on Amazon."
                                        },
                                        {
                                            img: technology_tools,
                                            alt: "technology tools",
                                            title: "Amazon DSP",
                                            body: "Our demand-side platform provides advanced tools for buying ad placements both on and off Amazon."
                                        },
                                        {
                                            img: streaming_audio,
                                            alt: "streaming audio",
                                            title: "Audio ads",
                                            body: "Amazon audio ads help brands connect with audiences as they listen to Amazon Music's free ad-supported tier."
                                        },
                                        {
                                            img: managed_services,
                                            alt: "managed services",
                                            title: "Custom advertising solutions",
                                            body: "Generate awareness for your brand with innovative, customized advertising experiences."
                                        },
                                        {
                                            img: display_desktop_mobile,
                                            alt: "display desktop mobile",
                                            title: "Sponsored Display",
                                            body: "Grow your business by reaching relevant audiences on and off Amazon using this new self-service advertising solution."
                                        },
                                        {
                                            img: video_ad,
                                            alt: "video ad",
                                            title: "Video ads",
                                            body: "Combine sight, sound and motion in ads on Amazon sites, devices such as Fire Tablet and across the web."
                                        }
                                    ]
                            }
                        />
                    </div>
                </section>
                <section className="advertising__brand">
                    <div className="columns__container columns__container--single columns__container--limit__width">
                        <Link to="/">
                            <div className="advertising__container">
                                <div className="columns__container columns__container--half columns__container--limit__width">
                                    <section className="padding__top__minibase">
                                        <header className="padding__bottom__mini">
                                            <h1 className="advertising__brandHead">
                                                Be on their favourite stream. <br/>
                                                <strong>Or in their favourite story.</strong>
                                            </h1>
                                            <p className="advertising__brandText">
                                                <u>Learn more</u>
                                            </p>
                                        </header>
                                    </section>
                                    <section className="column columns__column padding__left__xlarge padding__right__xlarge align-center">
                                        <img className="mw-100" src={two_X_image_hero_pink} alt="2 X image hero pink"/>
                                    </section>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>
                <section className="advertising__explore w-100 padding__top__large">
                    <div className="columns__container columns__container--single columns__container--limit__width">
                        <div className="has__max__width w-100 padding__top__xxlarge">
                            <div className="columns__container columns__container--half columns__container--limit__width">
                                <section className="column">
                                    <img src={amazon_advertising_home_office} alt="amazon advertising home office" className="mw-100" />
                                </section>
                                <section className="column">
                                    <h3 className="heading heading__size--normal color__normal">
                                        Explore our educational resources
                                    </h3>
                                    <p className="text color__normal text__size--medium">
                                        Discover insights, tips, guided learning and advertiser success stories that will help you better understand our advertising solutions and how you can use them to grow your business.
                                    </p>
                                    <Link to="/" className="link__type__normal">
                                        View resources
                                    </Link>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="advertising__footer">
                <div className="advertising__footerInner">
                    <section className="advertising__footerPrimary">
                        <ul className="advertising__footerNav">
                            <li>
                                <span className="advertising__footerTitle">
                                    Products
                                </span>
                                <ul>
                                    <li>
                                        <Link to="/">Amazon Attribution</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Amazon DSP</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Amazon Live</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Audio Ads</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Custom advertising solutions</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Posts</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Sizmek Ad Suite</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Sponsored Brands</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Sponsored Display</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Sponsored Products</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Stores</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Video ads</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span className="advertising__footerTitle">
                                    Objectives
                                </span>
                                <ul>
                                    <li>
                                        <Link to="/">Build my brand</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Connect with shoppers</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Grow sales</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Maximize effectiveness</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Measure results</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span className="advertising__footerTitle">
                                    Industries
                                </span>
                                <ul>
                                    <li>
                                        <Link to="/">Automotive</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Beauty (skincare)</Link>
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
                                        <Link to="/">Publishing</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Toys and games</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span className="advertising__footerTitle">
                                    Resources
                                </span>
                                <ul>
                                    <li>
                                        <Link to="/">Learning console</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Library</Link>
                                    </li>
                                    <li>
                                        <Link to="/">FAQ</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Ad specs and policies</Link>
                                    </li>
                                    <li>
                                        <Link to="/">What’s new</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span className="advertising__footerTitle">
                                    Partners
                                </span>
                                <ul>
                                    <li>
                                        <Link to="/">Partner directory</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Partner Network</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Blog</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                    <section className="advertising__footerSecondary">
                        <ul className="advertising__footerSecondarySm">
                            <li>
                                <Link to="/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin/>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter/>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram/>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" target="_blank" rel="noopener noreferrer">
                                    <FaYoutube/>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" target="_blank" rel="noopener noreferrer">
                                    <RiFacebookCircleFill/>
                                </Link>
                            </li>
                        </ul>
                    </section>
                    <section className="advertising__footerFinal">
                        <Link to="/" title="Conditions of Use">Conditions of Use</Link>
                        <Link to="/" title="Privacy notice">Privacy notice</Link>
                        <Link to="/" title="Interest-Based Ads">Interest-Based Ads</Link>
                        <Link to="/" title="Advertising Preferences">Advertising Preferences</Link>
                        <Link to="/" title="Cookie Policy">Cookie Policy</Link>
                        <Link to="/" title="Careers">Careers</Link>
                    </section>
                    <section className="advertising__footerCopyright">
                        © Copyright 2015–2021, Amazon
                    </section>
                </div>
            </footer>
        </div>
    )
}

export default Advertising
