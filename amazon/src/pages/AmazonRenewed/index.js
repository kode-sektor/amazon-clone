import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../components/Layout/index'
import Slider from '../../components/UI/Carousel/Carousel'
import CarouselCoupon from '../../components/UI/Carousel/CarouselCoupon'
import SearchResult from '../../components/UI/SearchResult'
import { SeeAllResults } from '../../components/UI/Button'
import { BrowseCheckbox, BrowseBoxPlain } from '../../components/UI/BrowseBox'
import { CardEight } from '../../components/UI/Card'
import Rating from '../../components/UI/Rating'  

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

import selfie_stick_tripod from '../../images/coupons/selfie-stick-tripod-ubeesize-51.jpg'
import arccra_iphone_charger from '../../images/coupons/arccra-iphone-charger.jpg'
import fast_wireless_charger from '../../images/coupons/fast-wireless-charger-nanami.jpg'
import lisen_phone_holder_car from '../../images/coupons/lisen-phone-holder-car.jpg'
import upgraded_1080p_webcam_2021 from '../../images/coupons/2021-upgraded-1080p-webcam.jpg'
import getihu_car_phone from '../../images/coupons/getihu-car-phone-holder-universal.jpg'
import cuisinart_brand from '../../images/cuisinart-brand.jpg'
import vitamix_brand from '../../images/vitamix-brand.jpg'
import garmin_brand from '../../images/garmin-brand.jpg'
import sell_on_renewed from '../../images/sell-on-renewed.jpg'

import './index.css'
    
const AmazonRenewed = () => {

    let windowId = window.location.pathname   // to identify tab to activate by default on specific page
    let pageClass = windowId.substring(1)   // '/home-improvement' to 'home-improvement' to style body    

    let params = new URLSearchParams(windowId)

    // Click on 'buy-again' should automatically activate tab
    windowId = (params.get("buy-again") === "true" ? "2" : "1") 

    const [pageId, setPageId] = useState("")
    
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
                            title={"Shipping Option"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : <>
                                                    FREE Shipping"
                                                    <div className="a__section a__spacing__top__mini">
                                                        <span className="a__size__base a__color__base" dir="auto">All customers get FREE Shipping on orders over $35 shipped by Amazon</span>           
                                                    </div>
                                                </>
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
                        <section className="bxc__grid__spacing__large">
                            <section className="bxc__grid__container bxc__grid__container__width__1500">
                                <section className="bxc__grid__row">
                                    <section className="bxc__grid__column bxc__grid__column__12__of__12">
                                        <div className="bxc__grid__image">
                                            <Link to="">
                                                <img src={sell_on_renewed} alt="Learn how to sell on Renewed" />
                                            </Link>
                                        </div>
                                    </section>
                                </section>
                            </section>
                        </section>
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
                            <CarouselCoupon
                                heading={<>Renewed Coupons</>}
                                sort={"Sort by Category"}
                                optionList={ 
                                    <>
                                        <option aria-label="newest" value="newest">Newest</option> 
                                        <option aria-label="oldest" value="oldest">Oldest</option>
                                        <option aria-label="expiringSoon" value="expiringSoon">Expiring Soon</option>
                                        <option aria-label="mostPopular" value="mostPopular" selected="selected">Most Popular</option> 
                                        <option aria-label="highToLowDiscountValue" value="highToLowDiscountValue">
                                            Discount Percentage
                                        </option> 
                                    </>
                                }
                                slider={
                                    <Slider 
                                        type={"coupon"}
                                        carouselClass={"amzn__carousel"}
                                        count={6}
                                        items={
                                            [
                                                {
                                                    href: '/',
                                                    src: getihu_car_phone,
                                                    save: 2, 
                                                    altText: "Getihu Car Phone",
                                                    caption: "Getihu Car Phone"
                                                },
                                                {
                                                    href: '/',
                                                    src: selfie_stick_tripod,
                                                    save: 2, 
                                                    altText: "Selfie Stick Tripod",
                                                    caption: "Selfie Stick Tripod"
                                                },
                                                {
                                                    href: '/',
                                                    src: arccra_iphone_charger,
                                                    save: 2, 
                                                    altText: "Arccra iPhone Charger",
                                                    caption: "Arccra iPhone Charger"
                                                },
                                                {
                                                    href: '/',
                                                    src: fast_wireless_charger,
                                                    save: 2, 
                                                    altText: "Fast Wireless Charger",
                                                    caption: "Fast Wireless Charger"
                                                },
                                                {
                                                    href: '/',
                                                    src: lisen_phone_holder_car,
                                                    save: 2, 
                                                    altText: "Lisen Phoneholder Car",
                                                    caption: "Lisen Phoneholder Car"
                                                },
                                                {
                                                    href: '/',
                                                    src: upgraded_1080p_webcam_2021,
                                                    save: 2, 
                                                    altText: "Upgraded 1080p Webcam 2021",
                                                    caption: "Upgraded 1080p Webcam 2021"
                                                }
                                            ]
                                        }
                                    />
                                }
                            />
                        </section>
                        <section className="bxc__grid__spacing__large">
                            <section className="bxc__grid__container__width__1500">
                                <section className="bxc__grid__row">
                                    <section className="bxc__grid__column bxc__grid__column__12__of__12">
                                        <h1>Featured Brands</h1>
                                    </section>
                                </section>
                            </section>
                        </section>
                        <section className="bxc__grid__row">
                            <section className="bxc__grid__column bxc__grid__column__4__of__12">
                                <section className="bxc__grid__image">
                                    <Link to="/">
                                        <img src={cuisinart_brand} alt="Renewed Cuisinart" />
                                    </Link>
                                </section>
                            </section>
                            <section className="bxc__grid__column bxc__grid__column__4__of__12">
                                <section className="bxc__grid__image">
                                    <Link to="/">
                                        <img src={vitamix_brand} alt="Renewed Vitamix" />
                                    </Link>
                                </section>
                            </section>
                            <section className="bxc__grid__column bxc__grid__column__4__of__12">
                                <section className="bxc__grid__image">
                                    <Link to="/">
                                        <img src={garmin_brand} alt="Renewed Garmin" />
                                    </Link>
                                </section>
                            </section>
                        </section>
                        <section>
                            <div className="a__cardui">
                                <div className="a__cardui__body px-0">
                                    <SearchResult
                                        range={"1-12"}
                                        total={"40,000"}
                                        title={"Amazon Warehouse Deals"}
                                    />
                                </div>
                            </div>
                        </section>
                        <section>
                            <CardEight
                                title={"Best Sellers"}
                                link={"/"}
                                items={
                                    [
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                // amazonChoice : true,
                                                dealOftheDay : "Deal of the Day", // Value could also be "Limited Time Deal"
                                                author : "Adele",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                couponDiscount : 8.04,
                                                rating : "4__5",
                                                ratingGraph : <Rating
                                                                dropdown={true}     // dropdown===true shows the footer
                                                                avgRating={4.3}
                                                                totalRating={5}
                                                                globalRatings={"3,670"}
                                                                starFive={85}
                                                                starFour={6}
                                                                starThree={3}
                                                                starTwo={1}
                                                                starOne={4}
                                                            />,
                                                count : "2,817",
                                                prime : true,
                                                buyingPrice : 55.79,
                                                offers : 3,
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
                                                // amazonChoice : true,
                                                dealOftheDay : "Deal of the Day", // Value could also be "Limited Time Deal"
                                                author : "Adele",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                couponDiscount : 8.04,
                                                rating : "4__5",
                                                ratingGraph : <Rating
                                                                dropdown={true}     // dropdown===true shows the footer
                                                                avgRating={4.3}
                                                                totalRating={5}
                                                                globalRatings={"3,670"}
                                                                starFive={85}
                                                                starFour={6}
                                                                starThree={3}
                                                                starTwo={1}
                                                                starOne={4}
                                                            />,
                                                count : "2,817",
                                                prime : true,
                                                buyingPrice : 55.79,
                                                offers : 3,
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
                                                // amazonChoice : true,
                                                dealOftheDay : "Deal of the Day", // Value could also be "Limited Time Deal"
                                                author : "Adele",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                couponDiscount : 8.04,
                                                rating : "4__5",
                                                ratingGraph : <Rating
                                                                dropdown={true}     // dropdown===true shows the footer
                                                                avgRating={4.3}
                                                                totalRating={5}
                                                                globalRatings={"3,670"}
                                                                starFive={85}
                                                                starFour={6}
                                                                starThree={3}
                                                                starTwo={1}
                                                                starOne={4}
                                                            />,
                                                count : "2,817",
                                                prime : true,
                                                buyingPrice : 55.79,
                                                offers : 3,
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
                            <CardEight
                                title={"Best Sellers"}
                                link={"/"}
                                items={
                                    [
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                // amazonChoice : true,
                                                dealOftheDay : "Deal of the Day", // Value could also be "Limited Time Deal"
                                                author : "Adele",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                couponDiscount : 8.04,
                                                rating : "4__5",
                                                ratingGraph : <Rating
                                                                dropdown={true}     // dropdown===true shows the footer
                                                                avgRating={4.3}
                                                                totalRating={5}
                                                                globalRatings={"3,670"}
                                                                starFive={85}
                                                                starFour={6}
                                                                starThree={3}
                                                                starTwo={1}
                                                                starOne={4}
                                                            />,
                                                count : "2,817",
                                                prime : true,
                                                buyingPrice : 55.79,
                                                offers : 3,
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
                                                // amazonChoice : true,
                                                dealOftheDay : "Deal of the Day", // Value could also be "Limited Time Deal"
                                                author : "Adele",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                couponDiscount : 8.04,
                                                rating : "4__5",
                                                ratingGraph : <Rating
                                                                dropdown={true}     // dropdown===true shows the footer
                                                                avgRating={4.3}
                                                                totalRating={5}
                                                                globalRatings={"3,670"}
                                                                starFive={85}
                                                                starFour={6}
                                                                starThree={3}
                                                                starTwo={1}
                                                                starOne={4}
                                                            />,
                                                count : "2,817",
                                                prime : true,
                                                buyingPrice : 55.79,
                                                offers : 3,
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
                                                // amazonChoice : true,
                                                dealOftheDay : "Deal of the Day", // Value could also be "Limited Time Deal"
                                                author : "Adele",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                couponDiscount : 8.04,
                                                rating : "4__5",
                                                ratingGraph : <Rating
                                                                dropdown={true}     // dropdown===true shows the footer
                                                                avgRating={4.3}
                                                                totalRating={5}
                                                                globalRatings={"3,670"}
                                                                starFive={85}
                                                                starFour={6}
                                                                starThree={3}
                                                                starTwo={1}
                                                                starOne={4}
                                                            />,
                                                count : "2,817",
                                                prime : true,
                                                buyingPrice : 55.79,
                                                offers : 3,
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
                            <CardEight
                                title={"Best Sellers"}
                                link={"/"}
                                items={
                                    [
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                // amazonChoice : true,
                                                dealOftheDay : "Deal of the Day", // Value could also be "Limited Time Deal"
                                                author : "Adele",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                couponDiscount : 8.04,
                                                rating : "4__5",
                                                ratingGraph : <Rating
                                                                dropdown={true}     // dropdown===true shows the footer
                                                                avgRating={4.3}
                                                                totalRating={5}
                                                                globalRatings={"3,670"}
                                                                starFive={85}
                                                                starFour={6}
                                                                starThree={3}
                                                                starTwo={1}
                                                                starOne={4}
                                                            />,
                                                count : "2,817",
                                                prime : true,
                                                buyingPrice : 55.79,
                                                offers : 3,
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
                                                // amazonChoice : true,
                                                dealOftheDay : "Deal of the Day", // Value could also be "Limited Time Deal"
                                                author : "Adele",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                couponDiscount : 8.04,
                                                rating : "4__5",
                                                ratingGraph : <Rating
                                                                dropdown={true}     // dropdown===true shows the footer
                                                                avgRating={4.3}
                                                                totalRating={5}
                                                                globalRatings={"3,670"}
                                                                starFive={85}
                                                                starFour={6}
                                                                starThree={3}
                                                                starTwo={1}
                                                                starOne={4}
                                                            />,
                                                count : "2,817",
                                                prime : true,
                                                buyingPrice : 55.79,
                                                offers : 3,
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
                                                // amazonChoice : true,
                                                dealOftheDay : "Deal of the Day", // Value could also be "Limited Time Deal"
                                                author : "Adele",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                couponDiscount : 8.04,
                                                rating : "4__5",
                                                ratingGraph : <Rating
                                                                dropdown={true}     // dropdown===true shows the footer
                                                                avgRating={4.3}
                                                                totalRating={5}
                                                                globalRatings={"3,670"}
                                                                starFive={85}
                                                                starFour={6}
                                                                starThree={3}
                                                                starTwo={1}
                                                                starOne={4}
                                                            />,
                                                count : "2,817",
                                                prime : true,
                                                buyingPrice : 55.79,
                                                offers : 3,
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
                            <CardEight
                                title={"Best Sellers"}
                                link={"/"}
                                items={
                                    [
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                // amazonChoice : true,
                                                dealOftheDay : "Deal of the Day", // Value could also be "Limited Time Deal"
                                                author : "Adele",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                couponDiscount : 8.04,
                                                rating : "4__5",
                                                ratingGraph : <Rating
                                                                dropdown={true}     // dropdown===true shows the footer
                                                                avgRating={4.3}
                                                                totalRating={5}
                                                                globalRatings={"3,670"}
                                                                starFive={85}
                                                                starFour={6}
                                                                starThree={3}
                                                                starTwo={1}
                                                                starOne={4}
                                                            />,
                                                count : "2,817",
                                                prime : true,
                                                buyingPrice : 55.79,
                                                offers : 3,
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
                                                // amazonChoice : true,
                                                dealOftheDay : "Deal of the Day", // Value could also be "Limited Time Deal"
                                                author : "Adele",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                couponDiscount : 8.04,
                                                rating : "4__5",
                                                ratingGraph : <Rating
                                                                dropdown={true}     // dropdown===true shows the footer
                                                                avgRating={4.3}
                                                                totalRating={5}
                                                                globalRatings={"3,670"}
                                                                starFive={85}
                                                                starFour={6}
                                                                starThree={3}
                                                                starTwo={1}
                                                                starOne={4}
                                                            />,
                                                count : "2,817",
                                                prime : true,
                                                buyingPrice : 55.79,
                                                offers : 3,
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
                                                // amazonChoice : true,
                                                dealOftheDay : "Deal of the Day", // Value could also be "Limited Time Deal"
                                                author : "Adele",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                couponDiscount : 8.04,
                                                rating : "4__5",
                                                ratingGraph : <Rating
                                                                dropdown={true}     // dropdown===true shows the footer
                                                                avgRating={4.3}
                                                                totalRating={5}
                                                                globalRatings={"3,670"}
                                                                starFive={85}
                                                                starFour={6}
                                                                starThree={3}
                                                                starTwo={1}
                                                                starOne={4}
                                                            />,
                                                count : "2,817",
                                                prime : true,
                                                buyingPrice : 55.79,
                                                offers : 3,
                                                manufacturer : "Apple",
                                                shipping_link : "/",
                                                arrival_link : "/"
                                            }
                                        }
                                    ]
                                }
                            />
                        </section>
                        <section className="a__cardui">
                            <section className="a__cardui__body">
                                <SeeAllResults />
                            </section>
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
