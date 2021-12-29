import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { subMenu } from '../../../utilities/data'

import GenericFlyoutMenu from './GenericFlyoutMenu'

import handmade_logo from '../../../images/nav/handmade_logo_.png'
import amazon_gift_cards from '../../../images/nav/amazon-gift-cards.jpg'
import egc_gc_subnav from '../../../images/nav/egc-gc-subnav.jpg'
import pah_gc_subnav from '../../../images/nav/pah-gc-subnav.jpg'
import mail_gc_subnav from '../../../images/nav/mail-gc-subnav.jpg'
import uber_gc_subnav from '../../../images/nav/uber-gc-subnav.jpg'
import reload_gc_subnav from '../../../images/nav/reload-gc-subnav.jpg'
import birthday_gc_subnav from '../../../images/nav/birthday-gc-subnav.jpg'
import thankyou_gc_subnav from '../../../images/nav/thankyou-gc-subnav.jpg'
import congrats_gc_subnav from '../../../images/nav/congrats-gc-subnav.jpg'
import newbaby_gc_subnav from '../../../images/nav/newbaby-gc-subnav.jpg'
import wedding_gc_subnav from '../../../images/nav/wedding-gc-subnav.jpg'

import './index.css'

const SubNav = () => {

    const [queryID, setQueryID] = useState("")
    const [flyoutMegaMenu, setflyoutMegaMenu] = useState("")
    const [navTempId, setNavTempId] = useState("")  // track most recent megamenu ID 
    const [navId, setNavId] = useState("")

    const menuDropdown = (e) => {
        // console.log(e.target.id)
        e.stopPropagation()
        const menuID = e.target.id  // Get id of menu

        setNavTempId(menuID)
        setNavId(menuID)
    }

    const menuDropHide = (e) => {
        setNavId("")
    }
    
    // Hack to ensure megamenu keeps afloat after hovering out of menu tab but 
    // hovering on megamenu
    const toggleFlyoutMegaMenu = (state) => {
        state === "exit" ? setNavId("") : setNavId(navTempId) 
    }

    const regularSubNav = [
        "/amazon-hub", "/shop-with-points", "/balance-reload", "/currency-converter", "/covid-19",
        "/returns", "/alexa-privacy", "/customer-service", "/amazon-drive"
    ]

    useEffect(() => {
        const pageList = ["/amazon-cash"]   // Include list of pages that use the mega menu 

        setQueryID(window.location.pathname)

        // Enables absolute positioning of the flyout
        pageList.includes(window.location.pathname) && setflyoutMegaMenu("progressiveNav position-relative")
    }, [])

    return (
        <nav className={flyoutMegaMenu}>
            {
                (queryID === "/" || queryID === "/fashion") ?     // Do not display subnav if homepage
                ""
                :
                (queryID === "/electronics") ?     
                <ul className="subNav">
                    <li>
                        <NavLink to="/electronics">Electronics</NavLink>
                    </li>
                    <li>
                        <NavLink to="/beauty">Deals</NavLink>
                    </li>
                    <li>
                        <NavLink to="/best-sellers">Best Sellers</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tv-and-home-theatre">TV &amp; Home Theatre</NavLink>
                    </li>
                    <li>
                        <NavLink to="/camera-and-photo">Camera &amp; Photo</NavLink>
                    </li>
                    <li>
                        <NavLink to="/computers-and-tablets">Computers &amp; Tablets</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cellphones-and-accessories">Cell Phones &amp; Accessories</NavLink>
                    </li>
                    <li>
                        <NavLink to="/headphones-and-speakers">Headphones &amp; Speakers</NavLink>
                    </li>
                    <li>
                        <NavLink to="/car-electronics">Car Electronics</NavLink>
                    </li>
                    <li>
                        <NavLink to="/musical-instrument">Musical Instruments</NavLink>
                    </li>
                    <li>
                        <NavLink to="/office-and-school-supplies">Office &amp; School Supplies</NavLink>
                    </li>
                </ul> 
                :
                (queryID === "/gift-cards") ?     
                <ul className="subNav">
                    <li>
                        <NavLink to="/gift-cards">Gift Cards</NavLink>
                    </li>
                    <li>
                        <NavLink to="/best-sellers">Best Sellers</NavLink>
                    </li>
                    <li>
                        <NavLink to="/birthdays">Birthdays</NavLink>
                    </li>
                    <li>
                        <NavLink to="/redeem-gift-cards">Redeem Gift Cards</NavLink>
                    </li>
                    <li>
                        <NavLink to="/view-your-balance">View Your Balance</NavLink>
                    </li>
                    <li>
                        <NavLink to="/reload-your-balance">Reload Your Balance</NavLink>
                    </li>
                    <li>
                        <NavLink to="/by-brand">By Brand</NavLink>
                    </li>
                    <li>
                        <NavLink to="/by-occasion">By Occasion</NavLink>
                    </li>
                    <li>
                        <NavLink to="/for-business">For Business</NavLink>
                    </li>
                    <li>
                        <NavLink to="/amazon-cash">Amazon Cash</NavLink>
                    </li>
                    <li>
                        <NavLink to="/find-a-gift">Find a Gift</NavLink>
                    </li>
                </ul>
                :
                (queryID === "/health") ?
                <ul className="subNav">
                    <li>
                        <NavLink to="/health">Health &amp; Personal Care</NavLink>
                    </li>
                    <li>
                        <NavLink to="/deals">Deals</NavLink>
                    </li>
                    <li>
                        <NavLink to="/bestsellers">Bestsellers</NavLink>
                    </li>
                    <li>
                        <NavLink to="/baby">Baby &amp; Child Care</NavLink>
                    </li>
                    <li>
                        <NavLink to="/nutrition">Nutrition &amp; Wellness</NavLink>
                    </li>
                    <li>
                        <NavLink to="/health-care">Health Care</NavLink>
                    </li>
                    <li>
                        <NavLink to="/household">Household Supplies</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sexual-wellness">Sexual Wellness</NavLink>
                    </li>
                    <li>
                        <NavLink to="/subscribe-and-save">Subscribe &amp; Save</NavLink>
                    </li>
                </ul>     
                :
                (queryID === "/beauty") ?
                <ul className="subNav">
                    <li>
                        <NavLink to="/beauty">Beauty</NavLink>
                    </li>
                    <li>
                        <NavLink to="/luxury-beauty">Luxury Beauty</NavLink>
                    </li>
                    <li>
                        <NavLink to="/makeup">Makeup</NavLink>
                    </li>
                    <li>
                        <NavLink to="/skin-care">Skin Care</NavLink>
                    </li>
                    <li>
                        <NavLink to="/hair-care">Hair Care</NavLink>
                    </li>
                    <li>
                        <NavLink to="/fragrance">Fragrance</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tools-and-accessories">Tools &amp; Accessories</NavLink>
                    </li>
                    <li>
                        <NavLink to="/oral-care">Oral Care</NavLink>
                    </li>
                    <li>
                        <NavLink to="/mens-grooming">Men's Grooming</NavLink>
                    </li>
                    <li>
                        <NavLink to="/bestsellers">Bestsellers</NavLink>
                    </li>
                    <li>
                        <NavLink to="/deals">Deals</NavLink>
                    </li>
                    <li>
                        <NavLink to="/subscribe-and-save">Subscribe &amp; Save</NavLink>
                    </li>
                </ul>
                :
                (queryID === "/pet-supplies") ?
                <ul className="subNav">
                    <li>
                        <NavLink to="/pet-supplies">Pet Supplies</NavLink>
                    </li>
                    <li>
                        <NavLink to="/bestsellers">Bestsellers</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dogs">Dogs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cats">Cats</NavLink>
                    </li>
                    <li>
                        <NavLink to="/small-animals">Small Animals</NavLink>
                    </li>
                    <li>
                        <NavLink to="/fish-aquatics">Fish &amp; Aquatics</NavLink>
                    </li>
                    <li>
                        <NavLink to="/birds">Birds</NavLink>
                    </li>
                    <li>
                        <NavLink to="/brands">Brands</NavLink>
                    </li>
                    <li>
                        <NavLink to="/deals">Deals</NavLink>
                    </li>
                    <li>
                        <NavLink to="/subscribe-and-save">Subscribe &amp; Save</NavLink>
                    </li>
                    <li>
                        <NavLink to="/pet-profile">Pet Profile</NavLink>
                    </li>
                </ul>
                :
                (queryID === "/sports-and-outdoors") ?
                <ul className="subNav">
                    <li>
                        <NavLink to="/sports-and-outdoors">Sports &amp; Outdoors</NavLink>
                    </li>
                    <li>
                        <NavLink to="/exercise-and-fitness">Exercise &amp; Fitness</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sports-apparel">Sports Apparel</NavLink>
                    </li>
                    <li>
                        <NavLink to="/outdoors">Outdoors</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cycling">Cycling</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sports-technology">Sports Technology</NavLink>
                    </li>
                    <li>
                        <NavLink to="/golf">Golf</NavLink>
                    </li>
                    <li>
                        <NavLink to="/hunting-and-fishing">Hunting &amp; Fishing</NavLink>
                    </li>
                    <li>
                        <NavLink to="/fan-shop">Fan Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/deals">Deals</NavLink>
                    </li>
                </ul>
                :
                (queryID === "/books") ?
                <ul className="subNav">
                    <li>
                        <NavLink to="/books">Books</NavLink>
                    </li>
                    <li>
                        <NavLink to="/advanced-search">Advanced Search</NavLink>
                    </li>
                    <li>
                        <NavLink to="/todays-deals">Today's Deals</NavLink>
                    </li>
                    <li>
                        <NavLink to="/new-releases">New Releases</NavLink>
                    </li>
                    <li>
                        <NavLink to="/amazon-charts">Amazon Charts</NavLink>
                    </li>
                    <li>
                        <NavLink to="/best-sellers-more">Best Sellers &amp; More</NavLink>
                    </li>
                    <li>
                        <NavLink to="/globe-mail-best-sellers">The Globe &amp; Mail Best Sellers</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ny-times-best-sellers">New York Times Best Sellers</NavLink>
                    </li>
                    <li>
                        <NavLink to="/best-books-month">Best Books of the Month</NavLink>
                    </li>
                    <li>
                        <NavLink to="/childrens-books">Children's Books</NavLink>
                    </li>
                    <li>
                        <NavLink to="/textbooks">Textbooks</NavLink>
                    </li>
                </ul>
                :
                (queryID === "/your-store") ?
                <ul className="subNav">
                    <li>
                        <NavLink to="/textbooks">Your Store</NavLink>
                    </li>
                    <li>
                        <NavLink to="/textbooks">Your Browsing History</NavLink>
                    </li>
                    <li>
                        <NavLink to="/textbooks">Recommended For You</NavLink>
                    </li>
                    <li>
                        <NavLink to="/textbooks">Improve Your Recommendations</NavLink>
                    </li>
                    <li>
                        <NavLink to="/textbooks">Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/textbooks">Learn More</NavLink>
                    </li>
                </ul>
                :
                (queryID === "/home-improvement") ? 
                <ul className="subNav">
                    <li>
                        <NavLink to="/home-improvement">Tools &amp; Home Improvement</NavLink>
                    </li>   
                    <li>
                        <NavLink to="/best-sellers">Best Sellers</NavLink>
                    </li>   
                    <li>
                        <NavLink to="/power-and-hand-tools">Power &amp; Hand Tools</NavLink>
                    </li>   
                    <li>
                        <NavLink to="/lighting-and-ceiling-fans">Lighting &amp; Ceiling Fans</NavLink>
                    </li>   
                    <li>
                        <NavLink to="/kitchen-and-bath-fixtures">Kitchen &amp; Bath Fixtures</NavLink>
                    </li>   
                    <li>
                        <NavLink to="/plumbing">Plumbing</NavLink>
                    </li>   
                    <li>
                        <NavLink to="/safety-and-security">Safety &amp; Security</NavLink>
                    </li>   
                    <li>
                        <NavLink to="/smart-home">Smart Home</NavLink>
                    </li>   
                    <li>
                        <NavLink to="/deals">Deals</NavLink>
                    </li>   
                </ul>
                :
                (queryID === "/handmade") ? 
                <ul className="subNav__handMade">
                    <li>
                        <NavLink to="/gifts">
                            <img src={handmade_logo} alt="handmade logo"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/gifts">
                            <span>Gifts</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/gifts">
                            <span>Jewellery</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/gifts">
                            <span>Home Decor</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/gifts">
                            <span>Kitchen &amp; Dining</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/gifts">
                            <span>Clothing, Shoes &amp; Accessories</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/gifts">
                            <span>Sell on Handmade</span>
                        </NavLink>
                    </li>
                </ul>
                :
                (queryID === "/amazon-cash") ? 
                /* subNav--default class to reset active link style to normal */
                <>
                    <ul className="subNav subNav--default">
                        <li>
                            <NavLink to="/gift-cards" onMouseEnter={(e) => menuDropdown(e)} onMouseLeave={(e) => menuDropHide(e)} id="amazon-gift-cards">
                                <img className="nav__categ__image" src={amazon_gift_cards} alt="amazon gift cards" />
                                <span className="nav__arrow"></span>
                            </NavLink>
                        </li>&nbsp;&nbsp;&nbsp;
                        <li>
                            <NavLink to="/best-sellers">Best Sellers</NavLink>
                        </li>
                        <li>
                            <NavLink to="/by-occasion" onMouseEnter={(e) => menuDropdown(e)} onMouseLeave={(e) => menuDropHide(e)} id="by-occasion">
                                By Occasion
                                <span className="nav__arrow"></span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/redeem-gift-cards">Redeem Gift Cards</NavLink>
                        </li>
                        <li>
                            <NavLink to="/view-your-balance">View Your Balance</NavLink>
                        </li>
                        <li>
                            <NavLink to="/reload-your-balance">Reload Your Balance</NavLink>
                        </li>
                        <li>
                            <NavLink to="/by-brand">By Brand</NavLink>
                        </li>
                        <li>
                            <NavLink to="/for-business">For Businesses</NavLink>
                        </li>
                        <li>
                            <NavLink to="/amazon-cash">Amazon Cash</NavLink>
                        </li>
                        <li>
                            <NavLink to="/find-a-gift">Find a Gift</NavLink>
                        </li>
                    </ul>
                    {
                        navId === "amazon-gift-cards" ?
                            (<GenericFlyoutMenu
                                navId={navId}
                                toggleFlyoutMegaMenu={toggleFlyoutMegaMenu}
                                items={
                                        [
                                            {
                                                link : "/",
                                                img : egc_gc_subnav,
                                                alt : "Gift Cards",
                                                caption : "eGift Cards"
                                            },
                                            {
                                                link : "/",
                                                img : pah_gc_subnav,
                                                alt : "Print at Home",
                                                caption : "Print at Home"
                                            },
                                            {
                                                link : "/",
                                                img : mail_gc_subnav,
                                                alt : "Mail",
                                                caption : "Mail"
                                            },
                                            {
                                                link : "/",
                                                img : uber_gc_subnav,
                                                alt : "Third-party gift cards",
                                                caption : "Third-party gift cards"
                                            },
                                            {
                                                link : "/",
                                                img : reload_gc_subnav,
                                                alt : "Reload",
                                                caption : "Reload"
                                            }
                                        ]
                                }
                            />)
                        :
                        navId === "by-occasion" ? 
                            (
                                <GenericFlyoutMenu
                                    navId={navId}
                                    toggleFlyoutMegaMenu={toggleFlyoutMegaMenu}
                                    items={
                                            [
                                                {
                                                    link : "/",
                                                    img : birthday_gc_subnav,
                                                    alt : "Birthday",
                                                    caption : "Birthday"
                                                },
                                                {
                                                    link : "/",
                                                    img : thankyou_gc_subnav,
                                                    alt : "Thank you",
                                                    caption : "Thank you"
                                                },
                                                {
                                                    link : "/",
                                                    img : congrats_gc_subnav,
                                                    alt : "Congrats",
                                                    caption : "Congrats"
                                                },
                                                {
                                                    link : "/",
                                                    img : newbaby_gc_subnav,
                                                    alt : "New baby",
                                                    caption : "New baby"
                                                },
                                                {
                                                    link : "/",
                                                    img : wedding_gc_subnav,
                                                    alt : "Wedding",
                                                    caption : "Wedding"
                                                }
                                            ]
                                    }
                                />
                            )
                        :
                        ""
                    }
                </>
                :
                (regularSubNav.includes(queryID)) ? 
                <ul className="subNav">
                    <li>
                        <NavLink to="/todays-deals"><b>Today's Deals</b></NavLink>
                    </li>
                    <li>
                        <NavLink to="/watched-deals">Watched Deals</NavLink>
                    </li>
                    <li>
                        <NavLink to="/outlet-deals">Outlet Deals</NavLink>
                    </li>
                    <li>
                        <NavLink to="/warehouse-deals">Warehouse Deals</NavLink>
                    </li>
                    <li>
                        <NavLink to="/coupons">Coupons</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ebook-deals">eBook Deals</NavLink>
                    </li>
                    <li>
                        <NavLink to="/subscribe-and-save">Subscribe &amp; Save</NavLink>
                    </li>
                </ul>
                :                
                // <ul className="subNav">
                //     {
                //         subMenu.map((obj, index) => {
                //             // Hide amazon.ca except on 'your_account' page
                //             if (index === 0) {
                //                 return (
                //                     <li className={(queryID === "/your_account") ? "" : "d-none"}>
                //                         <NavLink to={obj.href}>{obj.text}</NavLink>
                //                     </li>
                //                 )
                //             } else if (index === 1) {
                //                 return (
                //                     <li>
                //                         <NavLink to={obj.href} className={(queryID === "/order-history" || queryID === "/prime" ) ? "active" : ""}>{obj.text}</NavLink>
                //                     </li>
                //                 )
                //             } else if (index === 2) {
                //                 return (
                //                     <li className={(queryID === "/your_account") ? "d-none" : ""}>
                //                         <NavLink to={obj.href}>{obj.text}</NavLink>
                //                     </li>
                //                 )
                //             } else {
                //                 return (
                //                     <li>
                //                         <NavLink to={obj.href}>{obj.text}</NavLink>
                //                     </li>
                //                 )
                //             }
                //         })
                //     }
                // </ul>
                ""
            }
        </nav>
    )
}

export default SubNav
