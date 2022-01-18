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

import './index.css'
    
const HomeImprovement = () => {

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

    const HomeImprovementPage = () => (
        <section className={`a__container ${pageId}`}>
            <section className="d-flex mx-0 flex-fill pet">
                <section className="fashion__browsebox browserBox">
                    <BrowseBoxPrimary
                        title={"Department"}
                        links={
                            [
                                {
                                    text : "Tools & Home Improvement",
                                    indentClass : "a__indent__1"
                                },
                                {
                                    href : "/",
                                    text : "Building Supplies",
                                    indentClass : "a__indent__2"
                                },
                                {
                                    href : "/",
                                    text : "Electrical",
                                    indentClass : "a__indent__2"
                                },
                                {
                                    href : "/",
                                    text : "Fireplaces, Stoves & Accessories",
                                    indentClass : "a__indent__2"
                                },
                                {
                                    href : "/",
                                    text : "Hardware",
                                    indentClass : "a__indent__2"
                                },
                                {
                                    href : "/",
                                    text : "Heavy Equipment & Agricultural Supplies",
                                    indentClass : "a__indent__2"
                                },
                                {
                                    href : "/",
                                    text : "Kitchen & Bathroom",
                                    indentClass : "a__indent__2"
                                },
                                {
                                    href : "/",
                                    text : "Fixtures",
                                    indentClass : "a__indent__2"
                                },
                                {
                                    href : "/",
                                    text : "Large Appliances",
                                    indentClass : "a__indent__2"
                                },
                                {
                                    href : "/",
                                    text : "Lighting & Ceiling Fans",
                                    indentClass : "a__indent__2"
                                },
                                {
                                    href : "/",
                                    text : "Mowers & Outdoor Power Tools",
                                    indentClass : "a__indent__2"
                                },
                                {
                                    href : "/",
                                    text : "Painting Supplies, Tools & Wall Treatments",
                                    indentClass : "a__indent__2"
                                },
                                {
                                    href : "/",
                                    text : "Power & Hand Tools",
                                    indentClass : "a__indent__2"
                                },
                                {
                                    href : "/",
                                    text : "Rough Plumbing",
                                    indentClass : "a__indent__2"
                                },
                                {
                                    href : "/",
                                    text : "Safety & Security",
                                    indentClass : "a__indent__2"
                                },
                                {
                                    href : "/",
                                    text : "Storage & Home Organization",
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
                    <section className="pad__center">
                        <h1 className="a__spacing__top__base a__size__large">
                            Deals in Tools and Home Improvement
                        </h1>
                        <Nav tabs className="tab__switch a__spacing__medium">
                            <NavItem>
                                <NavLink
                                    className={ classnames({"a__color__secondary" : true}, { active: (activeTab === '1')})}
                                    onClick={() => { toggle('1') }}
                                >
                                    Available
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({"a__color__secondary" : true}, { active: activeTab === '2' })}
                                    onClick={() => { toggle('2') }}
                                >
                                    Upcoming
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({"a__color__secondary" : true}, { active: activeTab === '3' })}
                                    onClick={() => { toggle('3') }}
                                >
                                    Missed
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({"a__color__secondary" : true}, { active: activeTab === '4' })}
                                    onClick={() => { toggle('4') }}
                                >
                                    Watching
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </section>
                    <TabContent activeTab={activeTab} className="tab__container" tag="section">
                        <TabPane tabId="1" className="a__box__group a__spacing__base">
                            <CarouselDetailed 
                                squished={true}
                                slider={
                                    <Slider 
                                        type={"multi-image"}
                                        id={"homeImprovement"}
                                        carouselClass={"amzn__carousel"}
                                        carouselID={"amzn__gift__cards"}
                                        count={4}
                                        price={true}
                                        category={true}
                                        items={
                                                [
                                                    {
                                                        href: '/',
                                                        src: faux_leather,
                                                        altText: "FBest Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                                        caption: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                                        dealOfTheDay : true,
                                                        priceRange : "$99.99 - $204.99",
                                                        percentOff: "17",
                                                        viewDeal: "View Deal"
                                                    },
                                                    {
                                                        href: '/',
                                                        priceRange: "$14.99",
                                                        src: leather_swivel,
                                                        altText: "Furmax Bar Stools Modern Pu Leather Swivel Adjustable Hydraulic Bar Stool Square Counter Height Stool Set of 2(White)",
                                                        caption: "Furmax Bar Stools Modern Pu Leather Swivel Adjustable Hydraulic Bar Stool Square Counter Height Stool Set of 2(White)",
                                                        category: "Dental Floss",
                                                        viewDeal: "Add to Cart"
                                                    },
                                                    {
                                                        href: '/',
                                                        priceRange: "$14.99",
                                                        src: frosted_endtable,
                                                        altText: "Global Furniture Clear/Frosted Occasional End Table with Glossy White Legs",
                                                        caption: "Global Furniture Clear/Frosted Occasional End Table with Glossy White Legs",
                                                        category: "Dental Floss",
                                                        viewDeal: "Deal has ended"
                                                    },
                                                    {
                                                        href: '/',
                                                        priceRange: "$14.99",
                                                        src: monterey_tv_stand,
                                                        altText: "Convenience Concepts 151401W Designs2Go Monterey TV Stand, White",
                                                        caption: "Convenience Concepts 151401W Designs2Go Monterey TV Stand, White",
                                                        category: "Dental Floss",
                                                        viewDeal: "Deal has ended"
                                                    }
                                                ]
                                        }
                                    />
                                }
                            />
                        </TabPane>
                        <TabPane tabId="2">
                            <CarouselDetailed 
                                squished={true}
                                slider={
                                    <Slider 
                                        type={"multi-image"}
                                        id={"homeImprovement"}
                                        carouselClass={"amzn__carousel"}
                                        carouselID={"amzn__gift__cards"}
                                        count={4}
                                        price={true}
                                        category={true}
                                        items={
                                                [
                                                    {
                                                        href: '/',
                                                        src: faux_leather,
                                                        altText: "FBest Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                                        caption: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                                        dealOfTheDay : true,
                                                        priceRange : "$99.99 - $204.99",
                                                        percentOff: "17",
                                                        viewDeal: "View Deal"
                                                    },
                                                    {
                                                        href: '/',
                                                        priceRange: "$14.99",
                                                        src: leather_swivel,
                                                        altText: "Furmax Bar Stools Modern Pu Leather Swivel Adjustable Hydraulic Bar Stool Square Counter Height Stool Set of 2(White)",
                                                        caption: "Furmax Bar Stools Modern Pu Leather Swivel Adjustable Hydraulic Bar Stool Square Counter Height Stool Set of 2(White)",
                                                        category: "Dental Floss",
                                                        viewDeal: "Add to Cart"
                                                    },
                                                    {
                                                        href: '/',
                                                        priceRange: "$14.99",
                                                        src: frosted_endtable,
                                                        altText: "Global Furniture Clear/Frosted Occasional End Table with Glossy White Legs",
                                                        caption: "Global Furniture Clear/Frosted Occasional End Table with Glossy White Legs",
                                                        category: "Dental Floss",
                                                        viewDeal: "Deal has ended"
                                                    },
                                                    {
                                                        href: '/',
                                                        priceRange: "$14.99",
                                                        src: monterey_tv_stand,
                                                        altText: "Convenience Concepts 151401W Designs2Go Monterey TV Stand, White",
                                                        caption: "Convenience Concepts 151401W Designs2Go Monterey TV Stand, White",
                                                        category: "Dental Floss",
                                                        viewDeal: "Deal has ended"
                                                    }
                                                ]
                                        }
                                    />
                                }
                            />
                        </TabPane>
                        <TabPane tabId="3">
                            <CarouselDetailed 
                                squished={true}
                                slider={
                                    <Slider 
                                        type={"multi-image"}
                                        id={"homeImprovement"}
                                        carouselClass={"amzn__carousel"}
                                        carouselID={"amzn__gift__cards"}
                                        count={4}
                                        price={true}
                                        category={true}
                                        items={
                                                [
                                                    {
                                                        href: '/',
                                                        src: faux_leather,
                                                        altText: "FBest Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                                        caption: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                                        dealOfTheDay : true,
                                                        priceRange : "$99.99 - $204.99",
                                                        percentOff: "17",
                                                        viewDeal: "View Deal"
                                                    },
                                                    {
                                                        href: '/',
                                                        priceRange: "$14.99",
                                                        src: leather_swivel,
                                                        altText: "Furmax Bar Stools Modern Pu Leather Swivel Adjustable Hydraulic Bar Stool Square Counter Height Stool Set of 2(White)",
                                                        caption: "Furmax Bar Stools Modern Pu Leather Swivel Adjustable Hydraulic Bar Stool Square Counter Height Stool Set of 2(White)",
                                                        category: "Dental Floss",
                                                        viewDeal: "Add to Cart"
                                                    },
                                                    {
                                                        href: '/',
                                                        priceRange: "$14.99",
                                                        src: frosted_endtable,
                                                        altText: "Global Furniture Clear/Frosted Occasional End Table with Glossy White Legs",
                                                        caption: "Global Furniture Clear/Frosted Occasional End Table with Glossy White Legs",
                                                        category: "Dental Floss",
                                                        viewDeal: "Deal has ended"
                                                    },
                                                    {
                                                        href: '/',
                                                        priceRange: "$14.99",
                                                        src: monterey_tv_stand,
                                                        altText: "Convenience Concepts 151401W Designs2Go Monterey TV Stand, White",
                                                        caption: "Convenience Concepts 151401W Designs2Go Monterey TV Stand, White",
                                                        category: "Dental Floss",
                                                        viewDeal: "Deal has ended"
                                                    }
                                                ]
                                        }
                                    />
                                }
                            />
                        </TabPane>
                        <TabPane tabId="4">
                            <p>When you see deals you like, click Watch this deal to save them here.</p>
                        </TabPane>
                    </TabContent>
                    <section className="bxc__grid__spacing__large">
                        <section className="bxc__grid__container bxc__grid__container__width__1500">
                            <div className="bxc__grid__row bxc__grid__row__light">
                                <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light">
                                            <Link to="/">
                                                <img src={home_improvement} alt="Home Improvement"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="bxc__grid__row bxc__grid__row__light">
                            <section className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                <div className="bxc__grid__content bxc__grid__content__light">
                                    <div className="bxc__grid__image bxc__grid__image__light">
                                        <Link to="/">
                                            <img src={power_and_hand_tools} alt="Power and handtools"/>
                                        </Link>
                                    </div>
                                </div>
                            </section>
                            <section className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                <div className="bxc__grid__content bxc__grid__content__light">
                                    <div className="bxc__grid__image bxc__grid__image__light">
                                        <Link to="/">
                                            <img src={power_and_hand_tools} alt="Power and handtools"/>
                                        </Link>
                                    </div>
                                </div>
                            </section>
                            <section className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                <div className="bxc__grid__content bxc__grid__content__light">
                                    <div className="bxc__grid__image bxc__grid__image__light">
                                        <Link to="/">
                                            <img src={power_and_hand_tools} alt="Power and handtools"/>
                                        </Link>
                                    </div>
                                </div>
                            </section>
                            <section className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                <div className="bxc__grid__content bxc__grid__content__light">
                                    <div className="bxc__grid__image bxc__grid__image__light">
                                        <Link to="/">
                                            <img src={power_and_hand_tools} alt="Power and handtools"/>
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
    )

    return (
        <Layout>
            <HomeImprovementPage />
        </Layout>
    )
}

export default HomeImprovement
