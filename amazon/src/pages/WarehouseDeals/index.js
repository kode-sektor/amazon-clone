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
    
const WarehouseDeals = () => {
    
    const WarehouseDealPage = () => (
        <>
             <section className="a__container">
                <section className="d-flex mx-0 flex-fill">
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
                                    <section className="bxc__grid__row bxc__grid__row__light">
                                        <section className="bxc__grid__column bxc__grid__column__4__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={loreal_paris} alt="L'Oreal Paris"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="bxc__grid__column bxc__grid__column__4__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={loreal_paris} alt="L'Oreal Paris"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="bxc__grid__column bxc__grid__column__4__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={loreal_paris} alt="L'Oreal Paris"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </section>
                                    </section>
                                    <hr className="a__divider__normal" />
                                    <section className="bxc__grid__row bxc__grid__row__light">
                                        <section className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </section>
                                    </section>
                                    <section className="bxc__grid__row bxc__grid__row__light">
                                        <section className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </section>
                                    </section>
                                    <section className="bxc__grid__row bxc__grid__row__light">
                                        <section className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                           section <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </section>
                                    </section>
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
        </>
    )

    return (
        <Layout>
            <WarehouseDealPage />
        </Layout>
    )
}

export default WarehouseDeals
