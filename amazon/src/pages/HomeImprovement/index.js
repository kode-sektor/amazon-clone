import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../components/Layout/index'

import { BrowseBoxSimple, BrowseBoxPrimary, BrowseCheckbox, BrowseBoxPlain } from '../../components/UI/BrowseBox'
import Palette from '../../components/UI/Palette'
import { Grid_One } from '../../components/UI/Grid'
import { CardSix } from '../../components/UI/Card'



import white_usb_charger from '../../images/products/white-usb-charger.jpg'

import prime_two_day_shipping from '../../images/prime-two-day-shipping.png'
import buy_a_book_give_a_book from '../../images/banner/buy-a-book-give-a-book.jpg'
import amazon_editors_best_books_of_august from '../../images/banner/amazon-editors-best-books-of-august.jpg'
import shop_by_series from '../../images/banner/shop-by-series.jpg'
import k_12_store from '../../images/k-12-store.jpg'
import best_of_canadian_books from '../../images/best-of-canadian-books.jpg'
import best_books_of_the_month from '../../images/best-books-of-the-month.jpg'
import amazon_charts from '../../images/amazon-charts.jpg'

import robert_munsch_books from '../../images/nav/robert-munsch-books.jpg'
import scholastic_early_learners from '../../images/nav/scholastic-early-learners.jpg'
import peppa_pig from '../../images/nav/peppa-pig.png'
import graphix from '../../images/nav/graphix.jpg'
import little_people_big_dreams from '../../images/nav/little-people-big-dreams.jpg'
import narwhal_and_jelly from '../../images/nav/narwhal-and-jelly.jpg'

import the_comfort_book from '../../images/banner/the-comfort-book.jpg'
import leading_at_a_distance from '../../images/books/leading-at-a-distance.jpg'
import one_two_three from '../../images/books/one-two-three.jpg'
import the_secret_keeper_of_jaipur from '../../images/books/the-secret-keeper-of-jaipur.jpg'
import blackout from '../../images/books/blackout.jpg'

import './index.css'
    
const HomeImprovement = () => {
    return (
        <Layout>
             <section className="a__container">
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
                        <section className="bxc__grid__spacing__large">
                            <div className="bxc__grid__container bxc__grid__container__width__1500">
                                <div className="bxc__grid__row bxc__grid__row__light">
                                    <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={buy_a_book_give_a_book} alt="buy a book give a book"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="bxc__grid__spacing__large">
                            <div className="bxc__grid__container bxc__grid__container__width__1500">
                                <div className="bxc__grid__row bxc__grid__row__light">
                                    <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={amazon_editors_best_books_of_august} alt="amazon editors best books of august"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="bxc__grid__spacing__large">
                            <div className="bxc__grid__container bxc__grid__container__width__1500">
                                <div className="bxc__grid__row bxc__grid__row__light">
                                    <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <hr className="a__divider__normal" />
                                        </div>
                                    </div>
                                </div>
                                <div className="bxc__grid__row bxc__grid__row__light">
                                    <div className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={k_12_store} alt="k 12 store"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={best_books_of_the_month} alt="best books of the month"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={best_of_canadian_books} alt="best of canadian books"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={amazon_charts} alt="amazon charts"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bxc__grid__row bxc__grid__row__light">
                                    <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={shop_by_series} alt="shop by series"/>
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
                                                    <img src={robert_munsch_books} alt="robert munsch books"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={scholastic_early_learners} alt="scholastic early learners"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={peppa_pig} alt="peppa pig"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={graphix} alt="graphix"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={little_people_big_dreams} alt="little people big dreams"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={narwhal_and_jelly} alt="narwhal and jelly"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bxc__grid__row bxc__grid__row__light">
                                    <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <hr className="a_divider_normal" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bxc__grid__row bxc__grid__row__light">
                                    <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={the_comfort_book} alt="the comfort book"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bxc__grid__row bxc__grid__row__light">
                                    <div className="bxc__grid__column bxc__grid__column__6__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={leading_at_a_distance} alt="leading at a distance"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__6__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={one_two_three} alt="one two three"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bxc__grid__row bxc__grid__row__light">
                                    <div className="bxc__grid__column bxc__grid__column__6__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={the_secret_keeper_of_jaipur} alt="the secret keeper of jaipur"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__6__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={blackout} alt="blackout"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bxc__grid__row bxc__grid__row__light">
                                    <div className="bxc__grid__column bxc__grid__column__6__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <hr className="a__divider__normal" />
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
                    </section>
                </section>
            </section>
        </Layout>
    )
}

export default HomeImprovement
