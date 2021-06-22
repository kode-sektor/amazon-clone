import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../components/Layout/index'

import { BrowseBoxSimple, BrowseCheckbox, BrowseBoxPrimary, BrowseBoxPlain } from '../../components/UI/BrowseBox'

import prime_gift from '../../images/prime-gift-egift.jpg'
import prime_print_home from '../../images/prime-gift-print-at-home.jpg'
import prime_gift_mail from '../../images/prime-gift-mail.jpg'

import './index.css'

const GiftCards = () => {
    return (
        <Layout>
            <section className="a__container">
                <section className="giftCards d-flex mx-0 flex-fill">
                    <section className="giftCards__browsebox browserBox">
                        <BrowseBoxSimple 
                            title={"Seasonal events"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Birthday"
                                    },
                                    {
                                        href : "/",
                                        text : "Thank You"
                                    },
                                    {
                                        href : "/",
                                        text : "Holidays"
                                    },
                                    {
                                        href : "/",
                                        text : "All occasions"
                                    }
                                ]
                            }
                        />
                        <BrowseCheckbox
                            title={"Language"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "English"
                                    },
                                    {
                                        href : "/",
                                        text : "French"
                                    }
                                ]
                            }
                        />
                        <BrowseBoxPrimary
                            title={"Department"}
                            links={
                                [
                                    {
                                        text : "Gift Card",
                                        indentClass : "a__indent__1"
                                    },
                                    {
                                        href : "/",
                                        text : "Gift Cards",
                                        indentClass : "a__indent__2"
                                    }
                                ]
                            }
                        />
                        <BrowseBoxPlain
                            title={"Delivery Type"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Email Gift Cards",
                                    },
                                    {
                                        href : "/",
                                        text : "Mail",
                                    },
                                    {
                                        href : "/",
                                        text : "Print at Home"
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
                                        text : "Amazon.com.ca, Inc."
                                    },
                                    {
                                        href : "/",
                                        text : "Valve"
                                    },
                                    {
                                        href : "/",
                                        text : "Ricoh"
                                    },
                                    {
                                        href : "/",
                                        text : "BAOLI"
                                    },
                                    {
                                        href : "/",
                                        text : "Accent Design Paper Accents"
                                    },
                                    {
                                        href : "/",
                                        text : "AMERICAN GREETINGS"
                                    },
                                    {
                                        href : "/",
                                        text : "Birthday Gifts For All"
                                    }
                                ]
                            }
                        />
                        <BrowseCheckbox
                            title={"Occasion"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Birthday"
                                    },
                                    {
                                        href : "/",
                                        text : "Christmans"
                                    },
                                    {
                                        href : "/",
                                        text : "Congratulations"
                                    },
                                    {
                                        href : "/",
                                        text : "Father's Day"
                                    },
                                    {
                                        href : "/",
                                        text : "Friendship"
                                    },
                                    {
                                        href : "/",
                                        text : "Just Because"
                                    },
                                    {
                                        href : "/",
                                        text : "Thank You & Appreciation"
                                    }
                                ]
                            }
                        />
                        <BrowseCheckbox
                            title={"Recipient"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Co-Worker"
                                    },
                                    {
                                        href : "/",
                                        text : "For Her"
                                    },
                                    {
                                        href : "/",
                                        text : "For Him"
                                    },
                                    {
                                        href : "/",
                                        text : "Friends"
                                    },
                                    {
                                        href : "/",
                                        text : "Grandparents"
                                    },
                                    {
                                        href : "/",
                                        text : "Kids"
                                    },
                                    {
                                        href : "/",
                                        text : "Teens"
                                    }
                                ]
                            }
                        />
                    </section>
                    <section className="apBrowse flex-fill">
                        <section className="giftCards__balanceWidget a__spacing__mini text-center">
                            <ul className="a__unordered__list a__no__style a__horizontal">
                                <li>
                                    <span className="a__list__item">
                                        <Link to="/" className="giftCards__link d-inline-block a__text__normal">
                                            Your Gift Card Balance&nbsp;
                                            <span className="a__size__medium a__color__success">
                                                CDN$ 0.00
                                            </span>
                                        </Link>
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        <Link to="/" className="giftCards__link a__link__normal d-inline-block a__text__normal">
                                            Reload your balance
                                        </Link>
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        <Link to="/" className="giftCards__link a__link__normal d-inline-block a__text__normal">
                                            Redeem an Amazon Gift
                                        </Link>
                                    </span>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <section>
                                <Link to="/">
                                    <section className="giftCards__main">
                                        <section className="giftCards__mainContainer d-flex">
                                            <section className="giftCards__column col-md-4">
                                                <Link to="/" className="d-block">
                                                    <img src={prime_gift} alt="eGift"/>
                                                </Link>
                                            </section>
                                            <section className="giftCards__column col-md-4">
                                                <Link to="/" className="d-block">
                                                    <img src={prime_print_home} alt="eGift"/>
                                                </Link>
                                            </section>
                                            <section className="giftCards__column col-md-4">
                                                <Link to="/" className="d-block">
                                                    <img src={prime_gift_mail} className="d-block mx-auto" alt="eGift"/>
                                                </Link>
                                            </section>
                                        </section>
                                    </section>
                                </Link>
                            </section>
                        </section>
                        <section>
                            <section className="giftCards__main">
                                
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </Layout>
    )
}

export default GiftCards
