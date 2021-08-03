import React from 'react'
import { Link } from 'react-router-dom'

import { BrowseBoxPrimary, BrowseCheckbox, BrowseBoxPlain } from '../../components/UI/BrowseBox'
import CarouselDetailed from '../../components/UI/Carousel/CarouselDetailed'
import Slider from '../../components/UI/Carousel/Carousel'
import { Grid_One } from '../../components/UI/Grid'
import { CardSix, CardSeven } from '../../components/UI/Card'
import SearchResult from '../../components/UI/SearchResult'
import { SeeAllResults } from '../../components/UI/Button'
import BirthForm from '../../components/UI/BirthForm'

import Layout from '../../components/Layout/index'

import shop_baby_store from '../../images/banner/shop-baby-store.png'
import baby_registry_and_amazon_family from '../../images/baby-registry-and-amazon-family.png'

import university_personal_care from '../../images/banner/university-personal-care.jpg'
import white_usb_charger from '../../images/products/white-usb-charger.jpg'
import loreal_paris from "../../images/banner/l'oreal-paris.jpg"

import cetaphil from '../../images/brand/cetaphil.jpg'
import duracell_coppertop from '../../images/products/duracell-coppertop-aa-alkaline-batteries.jpg'

import './index.css'
    
const Health = () => {
    return (
        <Layout>
            <div className="bxc__grid__container bxc__grid__container__width__1500">
                <div className="bxc__grid__row bxc__grid__row__light">
                    <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                        <div className="bxc__grid__content bxc__grid__content__light">
                            <div className="bxc__grid__image bxc__grid__image__light">
                                <Link to="/">
                                    <img src={shop_baby_store} alt="Off to University Personal Care"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <section className="a__container">
                <section className="d-flex mx-0 flex-fill">
                    <section className="fashion__browsebox browserBox">
                        <section className="fashion__browse__box__babyRegistry">
                            <img src={baby_registry_and_amazon_family} alt={"Baby Registry & Amazon Family"} />
                        </section>
                        <BrowseBoxPrimary
                            title={"Department"}
                            links={
                                [
                                    {
                                        text : "Health & Personal Care",
                                        indentClass : "a__indent__1"
                                    },
                                    {
                                        href : "/",
                                        text : "Baby & Child Care",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Diet & Nutrition",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Health Care",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Vitamins, Minerals & Supplements",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Household Supplies",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Medical Supplies & Equipment",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Sex & Sensuality",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Stationery & Party Supplies",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Vision Care",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Wellness",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Shaving & Hair Removal",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Oral Care",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Women's Health & Family Planning",
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
                                        text : "Fastmedia ship USA"
                                    },
                                    {
                                        href : "/",
                                        text : "Pharmapacks"
                                    },
                                    {
                                        href : "/",
                                        text : "DAILY SUPPLY"
                                    },
                                    {
                                        href : "/",
                                        text : "Mega Supplement Store"
                                    },
                                    {
                                        href : "/",
                                        text : "Ella Gray Beauty"
                                    },
                                    {
                                        href : "/",
                                        text : "Holistic Ave"
                                    },
                                    {
                                        href : "/",
                                        text : "2CA61 BYLF"
                                    },
                                    {
                                        href : "/",
                                        text : "HerbsPro"
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
                        <h1 className="bxc__grid__spacing__large">
                            Health &amp; Personal Care
                        </h1>
                        <section>
                            <section className="bxc__grid__spacing__large">
                                <div className="bxc__grid__container bxc__grid__container__width__1500">
                                    <div className="bxc__grid__row bxc__grid__row__light">
                                        <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={university_personal_care} alt="Off to University Personal Care"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
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
                        <BirthForm />
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
                            <CarouselDetailed 
                                heading={"Powered by Duracell"}
                                squished={true}
                                carouselID={"amzn__gift__cards"}
                                slider={
                                    <Slider 
                                        type={"multiImage"}
                                        carouselClass={"amzn__carousel"}
                                        carouselID={"amzn__gift__cards"}
                                        count={5}
                                        price={true}
                                        items={
                                                [
                                                    {
                                                        href: '/',
                                                        src: duracell_coppertop,
                                                        altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                        caption: "Duracell Coppertop AA Alkaline Batteries - 20…",
                                                        extraCaption: "Duracell",
                                                        price: 40.00
                                                    },
                                                    {
                                                        href: '/',
                                                        src: duracell_coppertop,
                                                        altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                        caption: "Duracell Coppertop AA Alkaline Batteries - 20…",
                                                        extraCaption: "Duracell",
                                                        price: 40.00
                                                    },
                                                    {
                                                        href: '/',
                                                        src: duracell_coppertop,
                                                        altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                        caption: "Duracell Coppertop AA Alkaline Batteries - 20…",
                                                        extraCaption: "Duracell",
                                                        price: 40.00
                                                    },
                                                    {
                                                        href: '/',
                                                        src: duracell_coppertop,
                                                        altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                        caption: "Duracell Coppertop AA Alkaline Batteries - 20…",
                                                        extraCaption: "Duracell",
                                                        price: 40.00
                                                    },
                                                    {
                                                        href: '/',
                                                        src: duracell_coppertop,
                                                        altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                        caption: "Duracell Coppertop AA Alkaline Batteries - 20…",
                                                        extraCaption: "Duracell",
                                                        price: 40.00
                                                    }
                                                ]
                                            }
                                    />
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

export default Health
