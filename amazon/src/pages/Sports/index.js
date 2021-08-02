import React from 'react'
import { Link } from 'react-router-dom'

import PrimaryCarousel from '../../components/UI/Carousel/PrimaryCarousel'
import { BrowseBoxSimple, BrowseBoxPrimary, BrowseCheckbox, BrowseBoxPlain } from '../../components/UI/BrowseBox'
import Slider from '../../components/UI/Carousel/Carousel'
import { Grid_One } from '../../components/UI/Grid'
import { CardSix, CardSeven } from '../../components/UI/Card'
import SearchResult from '../../components/UI/SearchResult'
import { SeeAllResults } from '../../components/UI/Button'

import Layout from '../../components/Layout/index'

import white_usb_charger from '../../images/products/white-usb-charger.jpg'
import loreal_paris from "../../images/banner/l'oreal-paris.jpg"

import desktop_bubbler from '../../images/stores-and-programs/desktop-bubbler.jpg'
import mozart_fr_bubbler from '../../images/stores-and-programs/mozart-fr-bubbler.jpg'
import outlets_hoveler from '../../images/stores-and-programs/outlets-hoveler.png'
import registry from '../../images/stores-and-programs/registry.jpg'
import warehouse_deals_bubbler from '../../images/stores-and-programs/warehouse-deals-bubbler.jpg'
import coupon_bubbler from '../../images/stores-and-programs/coupon-bubbler.jpg'

import hills_save_up_to_10 from '../../images/banner/hills-save-up-to-10.jpg'
import visit_your_pet_profile from '../../images/banner/visit-your-pet-profile.jpg'
import shop_pet_essentials_amazonbasics from '../../images/banner/shop-pet-essentials-amazonbasics.jpg'
import subscribe_and_save_pet_supplies from '../../images/banner/subscribe-and-save-pet-supplies.jpg'
import products_from_small_and_medium_businesses from '../../images/banner/products-from-small-and-medium-businesses.jpg'

import sports_biggest_stage from '../../images/banner/sports-biggest-stage.png'
import cetaphil from '../../images/brand/cetaphil.jpg'

import './index.css'
    
const Sports = () => {
    return (
        <Layout>
             <section className="a__container">
                <section className="d-flex mx-0 flex-fill pet">
                    <section className="fashion__browsebox browserBox">
                        <BrowseBoxSimple
                            title={"Exercise & Fitness"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Ellipticals"
                                    },
                                    {
                                        href : "/",
                                        text : "Exercise Bikes"
                                    },
                                    {
                                        href : "/",
                                        text : "Running"
                                    },
                                    {
                                        href : "/",
                                        text : "Strength Training"
                                    },
                                    {
                                        href : "/",
                                        text : "Swimming"
                                    },
                                    {
                                        href : "/",
                                        text : "Treadmills"
                                    },
                                    {
                                        href : "/",
                                        text : "Yoga"
                                    },
                                    {
                                        href : "/",
                                        text : "All Exercise & Fitness",
                                        carat : true
                                    },
                                ]
                            }
                        />
                        <BrowseBoxSimple
                            title={"Outdoors"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Camping & Hiking"
                                    },
                                    {
                                        href : "/",
                                        text : "Canoeing"
                                    },
                                    {
                                        href : "/",
                                        text : "Climbing"
                                    },
                                    {
                                        href : "/",
                                        text : "Kayaking"
                                    },
                                    {
                                        href : "/",
                                        text : "Skiing"
                                    },
                                    {
                                        href : "/",
                                        text : "Snowboarding"
                                    },
                                    {
                                        href : "/",
                                        text : "All Outdoors",
                                        carat : true
                                    },
                                ]
                            }
                        />
                        <BrowseBoxSimple
                            title={"Hunting & Fishing"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Airsoft & Air Guns"
                                    },
                                    {
                                        href : "/",
                                        text : "Archery"
                                    },
                                    {
                                        href : "/",
                                        text : "Fishing"
                                    },
                                    {
                                        href : "/",
                                        text : "Hunting"
                                    },
                                    {
                                        href : "/",
                                        text : "Knives"
                                    },
                                    {
                                        href : "/",
                                        text : "All Hunting & Fishing",
                                        carat : true
                                    },
                                ]
                            }
                        />
                        <BrowseBoxSimple
                            title={"Sports"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Action Sports"
                                    },
                                    {
                                        href : "/",
                                        text : "Basketball"
                                    },
                                    {
                                        href : "/",
                                        text : "Cycling"
                                    },
                                    {
                                        href : "/",
                                        text : "Football"
                                    },
                                    {
                                        href : "/",
                                        text : "Golf"
                                    },
                                    {
                                        href : "/",
                                        text : "Hockey"
                                    },
                                    {
                                        href : "/",
                                        text : "Soccer"
                                    },
                                    {
                                        href : "/",
                                        text : "Water Sports"
                                    },
                                    {
                                        href : "/",
                                        text : "Winter Sports"
                                    },
                                    {
                                        href : "/",
                                        text : "All Hunting & Fishing",
                                        carat : true
                                    },
                                ]
                            }
                        />
                        <BrowseBoxSimple
                            title={"Leisure & Games"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Air Hockey"
                                    },
                                    {
                                        href : "/",
                                        text : "Billiards"
                                    },
                                    {
                                        href : "/",
                                        text : "Darts"
                                    },
                                    {
                                        href : "/",
                                        text : "Foosball"
                                    },
                                    {
                                        href : "/",
                                        text : "Outdoor Games & Activities"
                                    },
                                    {
                                        href : "/",
                                        text : "Table Tennis"
                                    },
                                    {
                                        href : "/",
                                        text : "All Leisure & Games",
                                        carat : true
                                    }
                                ]
                            }
                        />
                        <BrowseBoxSimple
                            title={"Accessories"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Fitness Technology"
                                    },
                                    {
                                        href : "/",
                                        text : "Gym Bags"
                                    },
                                    {
                                        href : "/",
                                        text : "Pumps"
                                    },
                                    {
                                        href : "/",
                                        text : "Sports Medicine"
                                    },
                                    {
                                        href : "/",
                                        text : "Water Bottles"
                                    },
                                    {
                                        href : "/",
                                        text : "All Accessories",
                                        carat : true
                                    }
                                ]
                            }
                        />
                        <BrowseBoxPrimary
                            title={"Department"}
                            links={
                                [
                                    {
                                        text : "Sports & Outdoors",
                                        indentClass : "a__indent__1"
                                    },
                                    {
                                        href : "/",
                                        text : "Action Sports",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Boating & Watersports",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Cycling",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Dance & Gymnastics",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Equestrian Sports",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Exercise & Fitness",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Golf",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Hunting & Fishing",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Leisure Sports & Game Room",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Martial Arts & Combat Sports",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Outdoor Gear",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Paintball & Airsoft",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Racquet & Paddle Sports",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Snow & Ice Sports",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Team Sports",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Accessories",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Sports Medicine",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Sports Technology",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Trophies, Medals & Awards",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Memorabilia Display & Storage",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Fan Shop",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Sports Collectibles",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Outdoor Recreation Sports",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Sports Apparel",
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
                                        text : "DAWN"
                                    },
                                    {
                                        href : "/",
                                        text : "HUGGIES"
                                    },
                                    {
                                        href : "/",
                                        text : "Q-tips"
                                    },
                                    {
                                        href : "/",
                                        text : "HYDRO SILK"
                                    },
                                    {
                                        href : "/",
                                        text : "Glad"
                                    },
                                    {
                                        href : "/",
                                        text : "Gum"
                                    },
                                    {
                                        href : "/",
                                        text : "Rael"
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
                            title={"New Arrivals"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Last 30 days",
                                    },
                                    {
                                        href : "/",
                                        text : "Last 90 days",
                                    },
                                    {
                                        href : "/",
                                        text : "Coming Soon",
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
                                        text : "Layger"
                                    },
                                    {
                                        href : "/",
                                        text : "NAZO MART"
                                    },
                                    {
                                        href : "/",
                                        text : "Fastmedia ship USA"
                                    },
                                    {
                                        href : "/",
                                        text : "WhyNotOutside-UStoCA (all duties paid)"
                                    },
                                    {
                                        href : "/",
                                        text : "Warehouse Deals"
                                    },
                                    {
                                        href : "/",
                                        text : "2CA61 BYLF"
                                    },
                                    {
                                        href : "/",
                                        text : "Vineya"
                                    },
                                    {
                                        href : "/",
                                        text : "Canadian Deal Outlet"
                                    },
                                    {
                                        href : "/",
                                        text : "good scholar"
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
                    </section>
                    <section className="apBrowse flex-fill">
                        <section>
                            <div className="bxc__grid__spacing__large">
                                <div className="bxc__grid__container bxc__grid__container__width__1500">
                                    <div className="bxc__grid__row bxc__grid__row__light">
                                        <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={sports_biggest_stage} alt="Sports Biggest Stage"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <Grid_One   
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
                                title={"Best Sellers in Sports & Outdoors"}
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
                        <section>
                            <div className="bxc__grid__spacing__large">
                                <section className="bxc__grid__spacing__large">
                                    <div className="bxc__grid__container bxc__grid__container__width__1500">
                                        <div className="bxc__grid__row bxc__grid__row__light">
                                            <div className="bxc__grid__column bxc__grid__column__4__of__12 bxc__grid__column__light">
                                                <div className="bxc__grid__content bxc__grid__content__light">
                                                    <div className="bxc__grid__image bxc__grid__image__light">
                                                        <Link to="/">
                                                            <img src={loreal_paris} alt="L'Oreal Paris"/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bxc__grid__column bxc__grid__column__4__of__12 bxc__grid__column__light">
                                                <div className="bxc__grid__content bxc__grid__content__light">
                                                    <div className="bxc__grid__image bxc__grid__image__light">
                                                        <Link to="/">
                                                            <img src={loreal_paris} alt="L'Oreal Paris"/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bxc__grid__column bxc__grid__column__4__of__12 bxc__grid__column__light">
                                                <div className="bxc__grid__content bxc__grid__content__light">
                                                    <div className="bxc__grid__image bxc__grid__image__light">
                                                        <Link to="/">
                                                            <img src={loreal_paris} alt="L'Oreal Paris"/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="a__divider__normal" />
                                        <div className="bxc__grid__row bxc__grid__row__light">
                                            <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                                <div className="bxc__grid__content bxc__grid__content__light">
                                                    <div className="bxc__grid__image bxc__grid__image__light">
                                                        <Link to="/">
                                                            <img src={cetaphil} alt="Cetaphil"/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                                <div className="bxc__grid__content bxc__grid__content__light">
                                                    <div className="bxc__grid__image bxc__grid__image__light">
                                                        <Link to="/">
                                                            <img src={cetaphil} alt="Cetaphil"/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                                <div className="bxc__grid__content bxc__grid__content__light">
                                                    <div className="bxc__grid__image bxc__grid__image__light">
                                                        <Link to="/">
                                                            <img src={cetaphil} alt="Cetaphil"/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                                <div className="bxc__grid__content bxc__grid__content__light">
                                                    <div className="bxc__grid__image bxc__grid__image__light">
                                                        <Link to="/">
                                                            <img src={cetaphil} alt="Cetaphil"/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                                <div className="bxc__grid__content bxc__grid__content__light">
                                                    <div className="bxc__grid__image bxc__grid__image__light">
                                                        <Link to="/">
                                                            <img src={cetaphil} alt="Cetaphil"/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                                <div className="bxc__grid__content bxc__grid__content__light">
                                                    <div className="bxc__grid__image bxc__grid__image__light">
                                                        <Link to="/">
                                                            <img src={cetaphil} alt="Cetaphil"/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bxc__grid__row bxc__grid__row__light">
                                            <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                                <div className="bxc__grid__content bxc__grid__content__light">
                                                    <div className="bxc__grid__image bxc__grid__image__light">
                                                        <Link to="/">
                                                            <img src={cetaphil} alt="Cetaphil"/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                                <div className="bxc__grid__content bxc__grid__content__light">
                                                    <div className="bxc__grid__image bxc__grid__image__light">
                                                        <Link to="/">
                                                            <img src={cetaphil} alt="Cetaphil"/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                                <div className="bxc__grid__content bxc__grid__content__light">
                                                    <div className="bxc__grid__image bxc__grid__image__light">
                                                        <Link to="/">
                                                            <img src={cetaphil} alt="Cetaphil"/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                                <div className="bxc__grid__content bxc__grid__content__light">
                                                    <div className="bxc__grid__image bxc__grid__image__light">
                                                        <Link to="/">
                                                            <img src={cetaphil} alt="Cetaphil"/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                                <div className="bxc__grid__content bxc__grid__content__light">
                                                    <div className="bxc__grid__image bxc__grid__image__light">
                                                        <Link to="/">
                                                            <img src={cetaphil} alt="Cetaphil"/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                                <div className="bxc__grid__content bxc__grid__content__light">
                                                    <div className="bxc__grid__image bxc__grid__image__light">
                                                        <Link to="/">
                                                            <img src={cetaphil} alt="Cetaphil"/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bxc__grid__row bxc__grid__row__light">
                                            <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                                <div className="bxc__grid__content bxc__grid__content__light">
                                                    <div className="bxc__grid__image bxc__grid__image__light">
                                                        <Link to="/">
                                                            <img src={cetaphil} alt="Cetaphil"/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                                <div className="bxc__grid__content bxc__grid__content__light">
                                                    <div className="bxc__grid__image bxc__grid__image__light">
                                                        <Link to="/">
                                                            <img src={cetaphil} alt="Cetaphil"/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                                <div className="bxc__grid__content bxc__grid__content__light">
                                                    <div className="bxc__grid__image bxc__grid__image__light">
                                                        <Link to="/">
                                                            <img src={cetaphil} alt="Cetaphil"/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                                <div className="bxc__grid__content bxc__grid__content__light">
                                                    <div className="bxc__grid__image bxc__grid__image__light">
                                                        <Link to="/">
                                                            <img src={cetaphil} alt="Cetaphil"/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                                <div className="bxc__grid__content bxc__grid__content__light">
                                                    <div className="bxc__grid__image bxc__grid__image__light">
                                                        <Link to="/">
                                                            <img src={cetaphil} alt="Cetaphil"/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                                <div className="bxc__grid__content bxc__grid__content__light">
                                                    <div className="bxc__grid__image bxc__grid__image__light">
                                                        <Link to="/">
                                                            <img src={cetaphil} alt="Cetaphil"/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
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
                        <SeeAllResults />
                    </section>
                </section>
            </section>
        </Layout>
    )
}

export default Sports
