import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import classnames from 'classnames'

import Layout from '../../components/Layout/index'
import Slider from '../../components/UI/Carousel/Carousel'
import CarouselDetailed from '../../components/UI/Carousel/CarouselDetailed'

import { BrowseBoxPrimary, BrowseCheckbox, BrowseBoxPlain } from '../../components/UI/BrowseBox'
import Palette from '../../components/UI/Palette'
import { GridOne } from '../../components/UI/Grid'
import { CardSix } from '../../components/UI/Card'

import monterey_tv_stand from '../../images/products/convenience-concepts-151401W-designs2Go-monterey-tv-stand.jpg'
import frosted_endtable from '../../images/products/global-furniture-clear-frosted-occasional-end-table.jpg'
import leather_swivel from '../../images/products/furmax-bar-stools-modern-pu-leather-swivel.jpg'
import faux_leather from '../../images/products/best-choice-products-faux-leather-modern-convertible.jpg'

import home_improvement from '../../images/banner/home-improvement.jpg'
import power_and_hand_tools from '../../images/nav/power-and-hand-tools.jpg'

import white_usb_charger from '../../images/products/white-usb-charger.jpg'
import amazon_renewed_banner from '../../images/amazon-renewed-banner.jpg'
import renewed_computers from '../../images/renewed-computers.jpg'
import renewed_tablets from '../../images/renewed-tablets.jpg'
import renewed_smartphones from '../../images/renewed-smartphones.jpg'
import renewed_cameras from '../../images/renewed-cameras.jpg'
import renewed_headphones from '../../images/renewed-headphones.jpg'
import renewed_home_and_kitchen from '../../images/renewed-home-and-kitchen.jpg'
import renewed_video_games from '../../images/renewed-video-games.jpg'
import renewed_tools_and_home_improvement from '../../images/renewed-tools-and-home-improvement.jpg'

import './index.css'
    
const AmazonRenewed = () => {

    let windowId = window.location.pathname   // to identify tab to activate by default on specific page
    let pageClass = windowId.substring(1)   // '/home-improvement' to 'home-improvement' to style body    

    let params = new URLSearchParams(windowId)

    // Click on 'buy-again' should automatically activate tab
    windowId = (params.get("buy-again") === "true" ? "2" : "1") 

    const [pageId, setPageId] = useState("")
    
    const [activeTab, setActiveTab] = useState(windowId || '1')

    const toggle = tab => {
        if (activeTab !== tab) { 
            setActiveTab(tab)
        }
    }

    useEffect (() => {
        setPageId(pageClass)
    }, [pageClass])

    const AmazonRenewedPage = () => (
        <section className="amazonRenewed--page">
            <section className={`a__container ${pageId}`}>
                <section className="bxc__grid__spacing__large">
                    <section className="bxc__grid__container bxc__grid__container__width__1500">
                        <section className="bxc__grid__image">
                            <img src={amazon_renewed_banner} alt="amazon renewed banner" />
                        </section>
                    </section>
                </section>
    
                <section className="d-flex mx-0 flex-fill pet">
                    <section className="fashion__browsebox browserBox">
                        <BrowseBoxPlain
                            title={"Department"}
                            links={
                                [
                                    {
                                        text : "Home & Kitchen",
                                        indentClass : "a__indent__1"
                                    },
                                    {
                                        href : "/",
                                        text : "Tools & Home Improvement",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Automotive",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Electronics",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Sports & Outdoors",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Industrial & Scientific",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Clothing, Shoes & Jewellery",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Patio, Lawn & Garden",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Books",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Office Products",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Pet Supplies",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Music",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Health & Personal Care",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Musical Instruments, State & Studio",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Toys & Games",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Baby",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Beauty",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Video Games",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Everything Else",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Movies & TV",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Grocery",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Classical",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "VHS",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Apps & Games",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Software",
                                        indentClass : "a__indent__2"
                                    }
                                ]
                            }
                        />
                        <BrowseCheckbox
                            title={"Subscription Option"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Subscribe & Save"
                                    }
                                ]
                            }
                        />
                        <BrowseCheckbox
                            title={"Amazon Prime"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : <>
                                                    <i className="a__icon a__icon__prime a__icon__medium apb__browse__refinements__icon" role="presentation"></i>
                                                </>
                                    }
                                ]
                            }
                        />
                        <BrowseBoxPlain
                            title={"Shipping Option"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "FREE Shipping"
                                    }
                                ]
                            }
                        />
                        <BrowseCheckbox
                            title={"From Our Brands"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Our Brands"
                                    }
                                ]
                            }
                        />
                        <BrowseCheckbox
                            title={"Featured Brands"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Joomer"
                                    },
                                    {
                                        href : "/",
                                        text : "Affresh"
                                    },
                                    {
                                        href : "/",
                                        text : "Honeywell"
                                    },
                                    {
                                        href : "/",
                                        text : "HONEYWELL"
                                    },
                                    {
                                        href : "/",
                                        text : "TESSAN"
                                    },
                                    {
                                        href : "/",
                                        text : "BRITA"
                                    },
                                    {
                                        href : "/",
                                        text : "Cricut"
                                    }
                                ]
                            }
                        />
                        <Palette/>
                        <BrowseBoxPlain
                            title={"Avg. Customer Review"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : <>
                                                    <div aria-label="4 Stars &amp; Up">
                                                        <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                            <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                        </i>
                                                        <span className="a__size__small a__color__base" dir="auto"> &amp; Up</span>
                                                    </div>
                                                </>
                                    },
                                    {
                                        href : "/",
                                        text : <>
                                                    <div aria-label="4 Stars &amp; Up">
                                                        <i className="a__icon a__icon__star__medium a__star__medium__3">
                                                            <span className="a__icon__alt">3 Stars &amp; Up</span>
                                                        </i>
                                                        <span className="a__size__small a__color__base" dir="auto"> &amp; Up</span>
                                                    </div>
                                                </>
                                    },
                                    {
                                        href : "/",
                                        text : <>
                                                    <div aria-label="4 Stars &amp; Up">
                                                        <i className="a__icon a__icon__star__medium a__star__medium__2">
                                                            <span className="a__icon__alt">2 Stars &amp; Up</span>
                                                        </i>
                                                        <span className="a__size__small a__color__base" dir="auto"> &amp; Up</span>
                                                    </div>
                                                </>
                                    },
                                    {
                                        href : "/",
                                        text : <>
                                                    <div aria-label="4 Stars &amp; Up">
                                                        <i className="a__icon a__icon__star__medium a__star__medium__1">
                                                            <span className="a__icon__alt">1 Stars &amp; Up</span>
                                                        </i>
                                                        <span className="a__size__small a__color__base" dir="auto"> &amp; Up</span>
                                                    </div>
                                                </>
                                    }
                                ]
                            }
                        />
                        <BrowseBoxPlain
                            title={"New Arrivals"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Last 30 days"
                                    },
                                    {
                                        href : "/",
                                        text : "Last 90 days"
                                    }
                                ]
                            }
                        />
                        <BrowseBoxPlain
                            title={"Price"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Under $25"
                                    },
                                    {
                                        href : "/",
                                        text : "$25 to $50"
                                    },
                                    {
                                        href : "/",
                                        text : "$50 to $100"
                                    },
                                    {
                                        href : "/",
                                        text : "$100 to $200"
                                    },
                                    {
                                        href : "/",
                                        text : "$200 & Above"
                                    }
                                ]
                            }
                        />
                        <BrowseCheckbox
                            title={"Deals"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Today's Deals"
                                    }
                                ]
                            }
                        />
                        <BrowseCheckbox
                            title={"Seller"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Amazon.ca"
                                    },
                                    {
                                        href : "/",
                                        text : "Layger"
                                    },
                                    {
                                        href : "/",
                                        text : "NAZO MART"
                                    },
                                    {
                                        href : "/",
                                        text : "Botley Store"
                                    },
                                    {
                                        href : "/",
                                        text : "Nation cenral"
                                    },
                                    {
                                        href : "/",
                                        text : "Warehouse Deals"
                                    },
                                    {
                                        href : "/",
                                        text : "Fastmedia ship USA"
                                    },
                                    {
                                        href : "/",
                                        text : "Dealz R us"
                                    },
                                    {
                                        href : "/",
                                        text : "2CA61 BYLF"
                                    },
                                    {
                                        href : "/",
                                        text : "BuyTradeExpedite"
                                    },
                                ]
                            }
                        />
                        <BrowseCheckbox
                            title={"Availability"}
                            ticked={true}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Include Out of Stock"
                                    }
                                ]
                            }
                        />
                    </section>
                    <section className="apBrowse flex-fill">
                        <section className="bxc__grid__spacing__large">
                            <h1 className="">
                                Shop Like-New Refurbished Products on Amazon Renewed <br />
                            </h1>
                            <p>
                                Pre-owned products on Amazon Renewed have been inspected and tested by qualified suppliers to work and look like new, and come with a minimum 90-day supplier-backed warranty. Shop for smartphones, computers, laptops, tablets, home and kitchen appliances, game consoles, office products, and more.
                            </p>
                        </section>
                        <section className="bxc__grid__spacing__large">
                            <h1 className="">
                                Shop by category
                            </h1>
                        </section>
                        
                        <section className="bxc__grid__spacing__large">
                            

                            <section className="bxc__grid__row bxc__grid__row__light">
                                <section className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light">
                                            <Link to="/">
                                                <img src={renewed_computers} alt="Renewed Computers"/>
                                            </Link>
                                        </div>
                                    </div>
                                </section>
                                <section className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light">
                                            <Link to="/">
                                                <img src={renewed_tablets} alt="Renewed Tablets"/>
                                            </Link>
                                        </div>
                                    </div>
                                </section>
                                <section className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light">
                                            <Link to="/">
                                                <img src={renewed_smartphones} alt="Renewed Smartphones"/>
                                            </Link>
                                        </div>
                                    </div>
                                </section>
                                <section className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light">
                                            <Link to="/">
                                                <img src={renewed_cameras} alt="Renewed Cameras"/>
                                            </Link>
                                        </div>
                                    </div>
                                </section>
                            </section>
                            <section className="bxc__grid__row bxc__grid__row__light">
                                <section className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light">
                                            <Link to="/">
                                                <img src={renewed_headphones} alt="Renewed Headphones"/>
                                            </Link>
                                        </div>
                                    </div>
                                </section>
                                <section className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light">
                                            <Link to="/">
                                                <img src={renewed_home_and_kitchen} alt="Renewed Home & Kitchen"/>
                                            </Link>
                                        </div>
                                    </div>
                                </section>
                                <section className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light">
                                            <Link to="/">
                                                <img src={renewed_video_games} alt="Renewed Video Games"/>
                                            </Link>
                                        </div>
                                    </div>
                                </section>
                                <section className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light">
                                            <Link to="/">
                                                <img src={renewed_tools_and_home_improvement} alt="Renewed Tools & Home Improvement"/>
                                            </Link>
                                        </div>
                                    </div>
                                </section>
                            </section>
                        </section>
                        <section>
                            <GridOne   
                                title={"Featured categories"}
                                item={  /* Usually in 5's */
                                    [
                                        {
                                            img : white_usb_charger,
                                            caption : 
                                                <>
                                                    Accessories &amp; Supplies
                                                </>
                                            ,
                                            categories: [
                                                    {
                                                        link : "/",
                                                        caption : "Cell Phone Accessories"
                                                    },
                                                    {
                                                        link : "/",
                                                        caption : "Computer Accessories"
                                                    },
                                                    {
                                                        link : "/",
                                                        caption : "Home Audio &amp; Video Accessories"
                                                    }
                                            ]
                                        },
                                        {
                                            img : white_usb_charger,
                                            caption : 
                                                <>
                                                    Accessories &amp; Supplies
                                                </>
                                            ,
                                            categories: [
                                                    {
                                                        link : "/",
                                                        caption : "Cell Phone Accessories"
                                                    },
                                                    {
                                                        link : "/",
                                                        caption : "Computer Accessories"
                                                    },
                                                    {
                                                        link : "/",
                                                        caption : "Home Audio &amp; Video Accessories"
                                                    }
                                            ]
                                        },
                                        {
                                            img : white_usb_charger,
                                            caption : 
                                                <>
                                                    Accessories &amp; Supplies
                                                </>
                                            ,
                                            categories: [
                                                    {
                                                        link : "/",
                                                        caption : "Cell Phone Accessories"
                                                    },
                                                    {
                                                        link : "/",
                                                        caption : "Computer Accessories"
                                                    },
                                                    {
                                                        link : "/",
                                                        caption : "Home Audio & Video Accessories"
                                                    }
                                            ]
                                        },
                                        {
                                            img : white_usb_charger,
                                            caption : 
                                                <>
                                                    Accessories &amp; Supplies
                                                </>
                                            ,
                                            categories: [
                                                    {
                                                        link : "/",
                                                        caption : "Cell Phone Accessories"
                                                    },
                                                    {
                                                        link : "/",
                                                        caption : "Computer Accessories"
                                                    },
                                                    {
                                                        link : "/",
                                                        caption : "Home Audio & Video Accessories"
                                                    }
                                            ]
                                        },
                                        {
                                            img : white_usb_charger,
                                            caption : 
                                                <>
                                                    Accessories &amp; Supplies
                                                </>
                                            ,
                                            categories: [
                                                    {
                                                        link : "/",
                                                        caption : "Cell Phone Accessories"
                                                    },
                                                    {
                                                        link : "/",
                                                        caption : "Computer Accessories"
                                                    },
                                                    {
                                                        link : "/",
                                                        caption : "Home Audio & Video Accessories"
                                                    }
                                            ]
                                        }
                                    ]
                                }
                            />
                        </section>
                        <section>
                            <CardSix
                                title={"Recommended for you"}
                                items={
                                    [
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817"
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817"
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817"
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817"
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817"
                                            }
                                        }
                                    ]
                                }
                            />
                        </section>
                        <section>
                            <CardSix
                                title={"Best Sellers"}
                                link={"/"}
                                items={
                                    [
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817",
                                                bestSeller : 1
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817",
                                                bestSeller : 2
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817",
                                                bestSeller : 3
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817"
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817"
                                            }
                                        }
                                    ]
                                }
                            />
                        </section>
                        <section>
                            <CardSix
                                title={"Most Wished For"}
                                link={"/"}
                                items={
                                    [
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817"
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817"
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817"
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817"
                                            }
                                        }
                                    ]
                                }
                            />  
                        </section>
                        <section>
                            <CardSix
                                title={"Hot New Releases"}
                                link={"/"}
                                items={
                                    [
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817"
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817"
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817"
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817"
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817"
                                            }
                                        }
                                    ]
                                }
                            />
                        </section>
                        <section>
                            <CardSix
                                title={"Under $25"}
                                link={"/"}
                                items={
                                    [
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817",
                                                bestSeller : 1
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817",
                                                bestSeller : 2
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817",
                                                bestSeller : 3
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817"
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817"
                                            }
                                        }
                                    ]
                                }
                            />
                        </section>
                        <section>
                            <CardSix
                                title={"Most Gifted"}
                                link={"/"}
                                items={
                                    [
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                rating : "4__5",
                                                count : "2,817"
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                rating : "4__5",
                                                count : "2,817"
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                rating : "4__5",
                                                count : "2,817"
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                rating : "4__5",
                                                count : "2,817"
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                rating : "4__5",
                                                count : "2,817"
                                            }
                                        }
                                    ]
                                }
                            />
                        </section>
                        <section>   
                            <CardSix
                                title={"Featured Deals"}
                                link={"/"}
                                type={"featured"}
                                items={ 
                                    [   
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817",
                                                bestSeller : 1,
                                                percentage_off : 20
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817",
                                                bestSeller : 2
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817",
                                                bestSeller : 3
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817"
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817"
                                            }
                                        }
                                    ]
                                }
                            />
                        </section>
                        <section className="text__appendage">
                            <h2>About Books at Amazon.ca</h2>
                            <p>Amazon.ca is committed to providing the best online shopping experience for books throughout Canada.  Find your next great read at Amazon.ca.  Fiction-lovers will find the bestselling books in literature & fiction, mysteries & thrillers, science fiction & fantasy, and romance. Amazon.ca has a great selection of children’s books and books for teens—from classic storybooks to popular series.</p>
                            <p>Those who are more into facts and figures will discover popular nonfiction books covering a vast array of topics like current events, economics, history, politics, and the latest biographies and memoirs.  And let’s not forget young readers.  Students can discover great textbook deals on millions of new and used titles in our Textbook Store, as well as test prep resources, study guides, and dictionaries. Amazon.ca also carries professional reference books on everything from the national electric code to business law.  No matter your profession, Amazon.ca strives to carry the books you need.</p>
                            <p>Amazon.ca also has an extensive selection of cookbooks, craft books, and home improvement manuals for home chefs and do-it-yourself enthusiasts. Whether you looking for a specific textbook on quantum physics, an irresistible new cookbook, or the next title on your book club’s reading list, with everyday low prices on millions of titles, Amazon.ca is sure to have the book you’re looking for at a great price.</p>
                        </section>
                        <section>
                            <CardSix
                                title={"Lightning Deals"}
                                link={"/"}
                                type={"lightning"}
                                items={
                                    [
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                deal : 43,
                                                rating : "4__5",
                                                count : "2,817",
                                                percentage_off : 20
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                deal : 43,
                                                rating : "4__5",
                                                count : "2,817"
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                deal : 43,
                                                rating : "4__5",
                                                count : "2,817"
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                deal : 43,
                                                rating : "4__5",
                                                count : "2,817"
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                deal : 43,
                                                rating : "4__5",
                                                count : "2,817"
                                            }
                                        }
                                    ]
                                }
                            />
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )

    return (
        <Layout>
            <AmazonRenewedPage />
        </Layout>
    )
}

export default AmazonRenewed
