import React, { useState } from 'react'
import FooterMenu from './FooterMenu'

import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';

import DropdownMenuLang from '../UI/DropdownMenuLang'

import './index.css'


const Footer = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [flagdropdownOpen, setFlagdropdownOpen] = useState(false);    // flag dropdown

    // Toggle dropdowns
    const toggle = () => setIsOpen(!isOpen);    // For main navigation expand / collapse

    // Flag dropdown
    const flagdropdown = () => setFlagdropdownOpen(flagdropdownOpen => !flagdropdownOpen) 
    const flagdropdownEnter = () => setFlagdropdownOpen(true)
    const flagdropdownLeave = () => setFlagdropdownOpen(false)

    return (
        <footer className="page__footer">
            <a href="/" className="page__footer__to__top">
                <span class="page__footer__back__to__top__text">Back to top</span>
            </a>
            <section className="page__footer__wrap d-flex justify-content-between">
                <FooterMenu 
                    heading={"Get to Know Us"}
                    menu={[
                        { label: "Careers", href: "/", icon: null },
                        { label: "Amazon and Our Planet", href: "/", icon: null },
                        { label: "Investor Relations", href: "/", icon: null },
                        { label: "Press Releases", href: "/", icon: null },
                    ]}
                />
                <FooterMenu 
                    heading={"Make Money with Us"}
                    menu={[
                        { label: "Sell on Amazon", href: "/", icon: null },
                        { label: "Sell Under Amazon Accelerator", href: "/", icon: null },
                        { label: "Amazon Associates", href: "/", icon: null },
                        { label: "Sell on Amazon Handmade", href: "/", icon: null },
                        { label: "Advertise Your Products", href: "/", icon: null },
                        { label: "Independently Publish with Us", href: "/", icon: null },
                        { label: "Host an Amazon Hub", href: "/", icon: null },
                    ]}
                />
                <FooterMenu 
                    heading={"Amazon Payment Products"}
                    menu={[
                        { label: "Amazon.ca Rewards Mastercard", href: "/", icon: null },
                        { label: "Shop with Points", href: "/", icon: null },
                        { label: "Reload Your Balance", href: "/", icon: null },
                        { label: "Amazon Currency Converter", href: "/", icon: null },
                        { label: "Gift Cards", href: "/", icon: null },
                        { label: "Amazon Cash", href: "/", icon: null },
                    ]}
                />
                <FooterMenu 
                    heading={"Let Us Help You"}
                    menu={[
                        { label: "COVID-19 and Amazon", href: "/", icon: null },
                        { label: "Shipping Rates & Policies", href: "/", icon: null },
                        { label: "Amazon Prime", href: "/", icon: null },
                        { label: "Returns Are Easy", href: "/", icon: null },
                        { label: "Manage your Content and Devices", href: "/", icon: null },
                        { label: "Customer Service", href: "/", icon: null },
                    ]}
                />
            </section>
            <hr className="page__footer__break"/>
            <section className="page__footer__padItem d-flex justify-content-center">
                <a href="/" className="page__footer__logo justify-content-around">
                </a>
                <div className="page__footer__buttonset">
                    <UncontrolledDropdown onMouseOver={flagdropdownEnter} onMouseLeave={flagdropdownLeave} isOpen={flagdropdownOpen} toggle={flagdropdown} tag="span" className="page__footer__langToggle">
                        <DropdownToggle className="page__footer__langLink">
                            <span className="page__footer__logo__globeIcon amzn__icon"></span>
                            <span className="page__footer__logo__base">English</span>
                            <span class="page__footer__downUpArrow"></span>
                        </DropdownToggle>
                        <DropdownMenuLang/>
                    </UncontrolledDropdown>
                    <Button outline color="secondary">
                        <span className="page__footer__logo__locationIcon amzn__icon"></span>
                        <span className="page__footer__logo__base">Canada</span>
                    </Button>
                </div>
            </section>
            <section className="page__footer__secondary">
                <div className="page__footer__wrap d-flex flex-column">
                    <FooterMenu 
                        type={"page__sub__footer"}
                        menu={[
                            { label: 
                                <>
                                    Amazon Music<br/> 
                                    <span className="page__sub__footer__descLink">Stream millions<br/> 
                                        of songs
                                    </span>
                                </>, href: "/", icon: null },
                            { label: 
                                <>
                                    Amazon Advertising<br/> 
                                    <span className="page__sub__footer__descLink">Find, attract, and<br/> 
                                        engage customers
                                    </span>
                                </>, href: "/", icon: null },
                            { label: 
                                <>
                                    Amazon Drive<br/> 
                                        <span className="page__sub__footer__descLink">Cloud storage<br/> 
                                            from Amazon
                                        </span>
                                </>, href: "/", icon: null },
                            { label: 
                                <>
                                    Amazon Web Services<br/> 
                                        <span className="page__sub__footer__descLink">Scalable Cloud<br/> 
                                            Computing Services
                                        </span>
                                </>, href: "/", icon: null },
                            { label: 
                                <>
                                    Book Depository<br/> 
                                        <span class="page__sub__footer__descLink">Books With Free<br/> 
                                            Delivery Worldwide
                                        </span>
                                </>, href: "/", icon: null },
                        ]}
                    />
                    <FooterMenu 
                        type={"page__sub__footer"}
                        menu={[
                            { label: 
                                <>
                                    Goodreads<br/> 
                                    <span className="page__sub__footer__descLink">Book reviews<br/> 
                                        &amp; recommendations
                                    </span>
                                </>, href: "/", icon: null },
                            { label: 
                                <>
                                    IMDb<br/> 
                                    <span className="page__sub__footer__descLink">Movies, TV<br/> 
                                        &amp; Celebrities
                                    </span>
                                </>, href: "/", icon: null },
                            { label: 
                                <>
                                    Amazon Photos<br/> 
                                        <span className="page__sub__footer__descLink">Unlimited Photo Storage<br/> 
                                            Free With Prime
                                        </span>
                                </>, href: "/", icon: null },
                            { label: 
                                <>
                                    Shopbop<br/> 
                                        <span className="page__sub__footer__descLink">Designer<br/> 
                                            Fashion Brands
                                        </span>
                                </>, href: "/", icon: null },
                            { label: 
                                <>
                                    Warehouse Deals<br/> 
                                        <span class="page__sub__footer__descLink">Open-Box<br/> 
                                            Discounts
                                        </span>
                                </>, href: "/", icon: null },
                        ]}
                    />
                    <FooterMenu 
                        type={"page__sub__footer"}
                        menu={[
                            { label: 
                                <>
                                    Whole Foods Market<br/> 
                                    <span className="page__sub__footer__descLink">We Believe in<br/> 
                                        Real Food
                                    </span>
                                </>, href: "/", icon: null },
                            { label: 
                                <>
                                    Amazon Renewed<br/> 
                                    <span className="page__sub__footer__descLink">Like-new products<br/> 
                                        you can trust
                                    </span>
                                </>, href: "/", icon: null },
                            { label: 
                                <>
                                    Amazon Second Chance<br/> 
                                    <span className="page__sub__footer__descLink">Pass it on, trade it in,<br/> 
                                        give it a second life
                                    </span>
                                </>, href: "/", icon: null }
                        ]}
                    />
                </div>
            </section>
            <section className="page__footer__minor">
                <ul className="page__footer__minor__list">
                    <li><a href="/">Conditions of Use</a></li>
                    <li><a href="/">Privacy Notice</a></li>
                    <li><a href="/">Interest-Based Ads</a></li>
                    <li><a href="/">© 2008-2021, Amazon.com, Inc. or its affiliates</a></li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer
