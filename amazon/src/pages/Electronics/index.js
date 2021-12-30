import React from 'react'
import { Link } from 'react-router-dom'

import { BrowseBoxSimple, BrowseCheckbox, BrowseBoxPrimary, BrowseBoxPlain } from '../../components/UI/BrowseBox'
import SearchResult from '../../components/UI/SearchResult'
import { GridOne } from '../../components/UI/Grid'
import { CardSix, CardSeven, BxcGrid } from '../../components/UI/Card'

import white_usb_charger from '../../images/products/white-usb-charger.jpg'
import handpicked_laptops from '../../images/products/handpicked-laptops.jpg'

import Layout from '../../components/Layout/index'

import './index.css'
import { SeeAllResults } from '../../components/UI/Button'

const Electronics = () => {

    const ElectronicsPage = () => (
        <section className="a__container">
            <section className="d-flex mx-0 flex-fill">
                <section className="electronics__browsebox browserBox">
                    <BrowseBoxPrimary
                        title={"Department"}
                        links={
                            [
                                {
                                    text : "Electronics",
                                    indentClass : "a__indent__1" 
                                },
                                {
                                    text : "Accessories & Supplies",
                                    href : "/",
                                    indentClass : "a__indent__2" 
                                },
                                {
                                    text : "Camera, Photo & Video",
                                    href : "/",
                                    indentClass : "a__indent__2" 
                                },
                                {
                                    text : "Car & Vehicle Electronics",
                                    href : "/",
                                    indentClass : "a__indent__2" 
                                },
                                {
                                    text : "Cell Phones & Accessories",
                                    href : "/",
                                    indentClass : "a__indent__2" 
                                },
                                {
                                    text : "Computers & Accessories",
                                    href : "/",
                                    indentClass : "a__indent__2" 
                                },
                                {
                                    text : "eBook Readers & Accessories",
                                    href : "/",
                                    indentClass : "a__indent__2" 
                                },
                                {
                                    text : "GPS & Navigation",
                                    href : "/",
                                    indentClass : "a__indent__2" 
                                },
                                {
                                    text : "Headphones",
                                    href : "/",
                                    indentClass : "a__indent__2" 
                                },
                                {
                                    text : "Home Audio",
                                    href : "/",
                                    indentClass : "a__indent__2" 
                                },
                                {
                                    text : "Household Batteries, Chargers & Power Supplies",
                                    href : "/",
                                    indentClass : "a__indent__2" 
                                },
                                {
                                    text : "Office Electronics",
                                    href : "/",
                                    indentClass : "a__indent__2" 
                                },
                                {
                                    text : "Portable Audio & Video",
                                    href : "/",
                                    indentClass : "a__indent__2" 
                                },
                                {
                                    text : "Power Accessories",
                                    href : "/",
                                    indentClass : "a__indent__2" 
                                },
                                {
                                    text : "Radio Communication",
                                    href : "/",
                                    indentClass : "a__indent__2" 
                                },
                                {
                                    text : "Security & Surveillance",
                                    href : "/",
                                    indentClass : "a__indent__2" 
                                },
                                {
                                    text : "Telephones & Accessories",
                                    href : "/",
                                    indentClass : "a__indent__2" 
                                },
                                {
                                    text : "Televisions & Video",
                                    href : "/",
                                    indentClass : "a__indent__2" 
                                },
                                {
                                    text : "Wearable Technology",
                                    href : "/",
                                    indentClass : "a__indent__2" 
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
                                    text : "FREE Shipping",
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
                                    text : "Amazon"
                                },
                                {
                                    href : "/",
                                    text : "LK"
                                },
                                {
                                    href : "/",
                                    text : "JETech"
                                },
                                {
                                    href : "/",
                                    text : "ilikable"
                                },
                                {
                                    href : "/",
                                    text : "AmazonBasics"
                                },
                                {
                                    href : "/",
                                    text : "Apple"
                                },
                                {
                                    href : "/",
                                    text : "HolyHigh"
                                }
                            ]
                        }
                    />
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
                        title={"Price"}
                        links={
                            [
                                {
                                    href : "/",
                                    text : "Under $25",
                                },
                                {
                                    href : "/",
                                    text : "$25 to $50",
                                },
                                {
                                    href : "/",
                                    text : "$50 to $100",
                                },
                                {
                                    href : "/",
                                    text : "$100 to $200",
                                },
                                {
                                    href : "/",
                                    text : "$200 to above",
                                },
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
                                    text : "NAZO MART"
                                },
                                {
                                    href : "/",
                                    text : "Layger"
                                },
                                {
                                    href : "/",
                                    text : "Warehouse Deals"
                                },
                                {
                                    href : "/",
                                    text : "Canada Direct - Often Ships Same Day"
                                },
                                {
                                    href : "/",
                                    text : "OneDealOutlet Canada"
                                },
                                {
                                    href : "/",
                                    text : "Triplenet Pricing INC"
                                },
                                {
                                    href : "/",
                                    text : "Brand Name Beat"
                                },
                                {
                                    href : "/",
                                    text : "iSanek"
                                },
                                {
                                    href : "/",
                                    text : "Deal Targets"
                                }
                            ]
                        }
                    />
                    <BrowseCheckbox
                        title={"Availability"}
                        links={
                            [
                                {
                                    href : "/",
                                    text : "Include Out of Stock"
                                }
                            ]
                        }
                    />
                    <BrowseBoxSimple 
                        title={"Handpicked Electronics"}
                        links={
                            [
                                {
                                    href : "/",
                                    text : "Cameras"
                                },
                                {
                                    href : "/",
                                    text : "Laptops"
                                },
                                {
                                    href : "/",
                                    text : "Desktops"
                                },
                                {
                                    href : "/",
                                    text : "Headphones"
                                },
                                {
                                    href : "/",
                                    text : "TVs"
                                },
                                {
                                    href : "/",
                                    text : "Speakers"
                                },
                                {
                                    href : "/",
                                    text : "Projectors"
                                },
                                {
                                    href : "/",
                                    text : "Routers"
                                },
                                {
                                    href : "/",
                                    text : "Printers"
                                }
                            ]
                        }
                    />
                </section>
                <section className="apBrowse flex-fill">
                    <h1>
                        <b>Electronics Store</b>
                    </h1>
                    <section className="bxc__grid__spacing__large">
                        <div className="bxc__grid__container bxc__grid__container__width__1500">
                            <div className="bxc__grid__row bxc__grid__row__light">
                                <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light">
                                            <Link to="/">
                                                <img src="https://images-na.ssl-images-amazon.com/images/G/15/electronics/otu-21/21289_LG_OLED_C1_AMAZON_V3_1500x440.jpg" alt="Experience infinite contract with 2021 LG OLED C1 TV"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                        <section>
                            <CardSix
                                title={"Top Rated"}
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
                            <section className="bxc__grid__spacing__large">
                                <section className="bxc__grid__container bxc__grid__container__width__1500">
                                    <div className="bxc__grid__row bxc__grid__row__light">
                                        <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                            <Link to="/">
                                                <img src="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2020/img.Consumer_Electronics/Final_category_page_header_EN_1500x90.jpg" alt="Handpicked Electronics"/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__row bxc__grid__row__light">
                                        <BxcGrid 
                                            img={handpicked_laptops}
                                            link={"/"}
                                            alt={"Handpicked laptops"}
                                        />
                                        <BxcGrid 
                                            img={handpicked_laptops}
                                            link={"/"}
                                            alt={"Handpicked laptops"}
                                        />
                                        <BxcGrid 
                                            img={handpicked_laptops}
                                            link={"/"}
                                            alt={"Handpicked laptops"}
                                        />
                                        <BxcGrid 
                                            img={handpicked_laptops}
                                            link={"/"}
                                            alt={"Handpicked laptops"}
                                        />
                                        <BxcGrid 
                                            img={handpicked_laptops}
                                            link={"/"}
                                            alt={"Handpicked laptops"}
                                        />
                                    </div>
                                </section>
                            </section>
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
                        <SearchResult
                            range={"1-12"}
                            total={"100,000"}
                            title={"Electronics"}
                        />
                        <section>
                            <CardSeven
                                link={"/"}
                                items={
                                    [
                                        {
                                            item : {    /*Usually 3 items*/
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817",
                                                arrival_date : "Wednesday, July 21",
                                                manufacturer : "Apple",
                                                shipping_link : "/",
                                                arrival_link : "/"
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
                                                bestSeller : "BestSeller",
                                                category : "Stereo Headphones",
                                                arrival_date : "Wednesday, July 21",
                                                manufacturer : "Apple",
                                                shipping_link : "/",
                                                arrival_link : "/"
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
                                                bestSeller : "BestSeller",
                                                category : "Stereo Headphones",
                                                arrival_date : "Wednesday, July 21",
                                                manufacturer : "Apple",
                                                shipping_link : "/",
                                                arrival_link : "/"
                                            }
                                        }
                                    ]
                                }
                            />
                        </section>
                        <section>
                            <CardSeven
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
                                                arrival_date : "Wednesday, July 21",
                                                manufacturer : "Apple",
                                                shipping_link : "/",
                                                arrival_link : "/"
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
                                                bestSeller : "BestSeller",
                                                category : "Stereo Headphones",
                                                arrival_date : "Wednesday, July 21",
                                                manufacturer : "Apple",
                                                shipping_link : "/",
                                                arrival_link : "/"
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
                                                bestSeller : "BestSeller",
                                                category : "Stereo Headphones",
                                                arrival_date : "Wednesday, July 21",
                                                manufacturer : "Apple",
                                                shipping_link : "/",
                                                arrival_link : "/"
                                            }
                                        }
                                    ]
                                }
                            />
                        </section>
                        <section>
                            <CardSeven
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
                                                arrival_date : "Wednesday, July 21",
                                                manufacturer : "Apple",
                                                shipping_link : "/",
                                                arrival_link : "/"
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
                                                bestSeller : "BestSeller",
                                                category : "Stereo Headphones",
                                                arrival_date : "Wednesday, July 21",
                                                manufacturer : "Apple",
                                                shipping_link : "/",
                                                arrival_link : "/"
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
                                                bestSeller : "BestSeller",
                                                category : "Stereo Headphones",
                                                arrival_date : "Wednesday, July 21",
                                                manufacturer : "Apple",
                                                shipping_link : "/",
                                                arrival_link : "/"
                                            }
                                        }
                                    ]
                                }
                            />
                        </section>
                        <section className="last">
                            <CardSeven
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
                                                arrival_date : "Wednesday, July 21",
                                                manufacturer : "Apple",
                                                shipping_link : "/",
                                                arrival_link : "/"
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
                                                bestSeller : "BestSeller",
                                                category : "Stereo Headphones",
                                                arrival_date : "Wednesday, July 21",
                                                manufacturer : "Apple",
                                                shipping_link : "/",
                                                arrival_link : "/"
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
                                                bestSeller : "BestSeller",
                                                category : "Stereo Headphones",
                                                arrival_date : "Wednesday, July 21",
                                                manufacturer : "Apple",
                                                shipping_link : "/",
                                                arrival_link : "/"
                                            }
                                        }
                                    ]
                                }
                            />
                        </section>
                        <SeeAllResults/>
                    </section>
                </section>
            </section>
        </section>
    )

    return (
        <Layout>
            <ElectronicsPage />
        </Layout>
    )
}

export default Electronics
