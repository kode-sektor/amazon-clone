import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../components/Layout/index'

import { BrowseBoxSimple, BrowseCheckbox, BrowseBoxPrimary, BrowseBoxPlain } from '../../components/UI/BrowseBox'
import { SeeAllResults } from '../../components/UI/Button'
import Slider from '../../components/UI/Carousel/Carousel'
import CarouselDetailed from '../../components/UI/Carousel/CarouselDetailed'

import prime_gift from '../../images/prime-gift-egift.jpg'
import prime_print_home from '../../images/prime-gift-print-at-home.jpg'
import prime_gift_mail from '../../images/prime-gift-mail.jpg'
import prime_gift_cards_15_pcnt from '../../images/prime-gift-cards-15-percent.jpg'
import gift_certificate_congrats from '../../images/gift-certificate-congrats.jpg'
import gift_certificate_new_baby from '../../images/gift-certificate-new-baby.jpg'
import gift_certificate_see_all from '../../images/gift-certificate-see-all.jpg'
import gift_certificate_birthday from '../../images/gift-certificate-birthday.jpg'
import gift_certificate_thank_you from '../../images/gift-certificate-thank-you.jpg'
import gift_certificate_workplace from '../../images/gift-certificate-workplace.jpg'
import gift_certificate_wedding from '../../images/gift-certificate-wedding.jpg'
import gift_certificate_just_because from '../../images/gift-certificate-just-because.jpg'
import gift_five_dollar_extra_credit from '../../images/gift-5-dollar-extra-credit.jpg'

import amzn_premium_gift_card from '../../images/amazon-premium-gift-card.jpg'

import './index.css'

const GiftCards = () => {

    const GiftCardsPage = () => (
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
                    </section>
                    <section>
                        <section className="giftCards__main">
                            <section className="giftCards__mainContainer d-flex">
                                <Link to="/">
                                    <img src={prime_gift_cards_15_pcnt} alt="prime gift cards" />
                                </Link>
                            </section>
                        </section>
                    </section>
                    <section>
                        <section className="giftCards__main">
                            <section className="giftCards__mainContainer">
                                <h1 className="text-center">Shop by occasion</h1>
                                <section className="d-flex flex-wrap">
                                    <section className="giftCards__column col-md-3 px-0">
                                        <Link to="/">
                                            <img src={gift_certificate_birthday} alt="Birthday"/>
                                        </Link>
                                    </section>
                                    <section className="giftCards__column col-md-3 px-0">
                                        <Link to="/">
                                            <img src={gift_certificate_thank_you} alt="Thank You"/>
                                        </Link>
                                    </section>
                                    <section className="giftCards__column col-md-3 px-0">
                                        <Link to="/">
                                            <img src={gift_certificate_workplace} alt="Workplace"/>
                                        </Link>
                                    </section>
                                    <section className="giftCards__column col-md-3 px-0">
                                        <Link to="/">
                                            <img src={gift_certificate_congrats} alt="Congrats"/>
                                        </Link>
                                    </section>
                                    <section className="giftCards__column col-md-3 px-0">
                                        <Link to="/">
                                            <img src={gift_certificate_just_because} alt="Just Because"/>
                                        </Link>
                                    </section>
                                    <section className="giftCards__column col-md-3 px-0">
                                        <Link to="/">
                                            <img src={gift_certificate_wedding} alt="Wedding"/>
                                        </Link>
                                    </section>
                                    <section className="giftCards__column col-md-3 px-0">
                                        <Link to="/">
                                            <img src={gift_certificate_new_baby} alt="New Baby"/>
                                        </Link>
                                    </section>
                                    <section className="giftCards__column col-md-3 px-0">
                                        <Link to="/">
                                            <img src={gift_certificate_see_all} alt="Find Gift Cards for All Occasions"/>
                                        </Link>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                    <section className="giftCards__main">
                        <section className="giftCards__mainContainer giftCards__credit">
                            <Link to="/">
                                <img src={gift_five_dollar_extra_credit} alt="Get a $5 credit when you purchase $25 in Amazon Gift Cards"/>
                            </Link>
                        </section>
                    </section>
                    <section>
                        <CarouselDetailed 
                            heading={"New and noteworthy in Gift Cards"}
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
                                                    src: amzn_premium_gift_card,
                                                    altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    caption: "Amazon.ca eGift Card",
                                                    extraCaption: "Amazon.com.ca, Inc.",
                                                    price: 40.00
                                                },
                                                {
                                                    href: '/',
                                                    src: amzn_premium_gift_card,
                                                    altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    caption: "Amazon.ca eGift Card",
                                                    extraCaption: "Amazon.com.ca, Inc.",
                                                    price: 40.00
                                                },
                                                {
                                                    href: '/',
                                                    src: amzn_premium_gift_card,
                                                    altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    caption: "Amazon.ca eGift Card",
                                                    extraCaption: "Amazon.com.ca, Inc.",
                                                    price: 40.00
                                                },
                                                {
                                                    href: '/',
                                                    src: amzn_premium_gift_card,
                                                    altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    caption: "Amazon.ca eGift Card",
                                                    extraCaption: "Amazon.com.ca, Inc.",
                                                    price: 40.00
                                                },
                                                {
                                                    href: '/',
                                                    src: amzn_premium_gift_card,
                                                    altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    caption: "Amazon.ca eGift Card",
                                                    extraCaption: "Amazon.com.ca, Inc.",
                                                    price: 40.00
                                                }
                                            ]
                                        }
                                />
                            }
                        />
                    </section>
                    <section>
                        <CarouselDetailed 
                            heading={"Best sellers in Gift Cards"}
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
                                                    src: amzn_premium_gift_card,
                                                    altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    caption: "Amazon.ca eGift Card",
                                                    extraCaption: "Amazon.com.ca, Inc.",
                                                    price: 40.00
                                                },
                                                {
                                                    href: '/',
                                                    src: amzn_premium_gift_card,
                                                    altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    caption: "Amazon.ca eGift Card",
                                                    extraCaption: "Amazon.com.ca, Inc.",
                                                    price: 40.00
                                                },
                                                {
                                                    href: '/',
                                                    src: amzn_premium_gift_card,
                                                    altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    caption: "Amazon.ca eGift Card",
                                                    extraCaption: "Amazon.com.ca, Inc.",
                                                    price: 40.00
                                                },
                                                {
                                                    href: '/',
                                                    src: amzn_premium_gift_card,
                                                    altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    caption: "Amazon.ca eGift Card",
                                                    extraCaption: "Amazon.com.ca, Inc.",
                                                    price: 40.00
                                                },
                                                {
                                                    href: '/',
                                                    src: amzn_premium_gift_card,
                                                    altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    caption: "Amazon.ca eGift Card",
                                                    extraCaption: "Amazon.com.ca, Inc.",
                                                    price: 40.00
                                                }
                                            ]
                                        }
                                />
                            }
                        />
                    </section>
                    <section className="last">{/* "last" to remove mbottom space for last slider */}
                        <CarouselDetailed 
                            heading={"Movers & Shakers in Gift Cards"}
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
                                                    src: amzn_premium_gift_card,
                                                    altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    caption: "Amazon.ca eGift Card",
                                                    extraCaption: "Amazon.com.ca, Inc.",
                                                    price: 40.00
                                                },
                                                {
                                                    href: '/',
                                                    src: amzn_premium_gift_card,
                                                    altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    caption: "Amazon.ca eGift Card",
                                                    extraCaption: "Amazon.com.ca, Inc.",
                                                    price: 40.00
                                                },
                                                {
                                                    href: '/',
                                                    src: amzn_premium_gift_card,
                                                    altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    caption: "Amazon.ca eGift Card",
                                                    extraCaption: "Amazon.com.ca, Inc.",
                                                    price: 40.00
                                                },
                                                {
                                                    href: '/',
                                                    src: amzn_premium_gift_card,
                                                    altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    caption: "Amazon.ca eGift Card",
                                                    extraCaption: "Amazon.com.ca, Inc.",
                                                    price: 40.00
                                                },
                                                {
                                                    href: '/',
                                                    src: amzn_premium_gift_card,
                                                    altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    caption: "Amazon.ca eGift Card",
                                                    extraCaption: "Amazon.com.ca, Inc.",
                                                    price: 40.00
                                                }
                                            ]
                                        }
                                />
                            }
                        />
                    </section>
                    <section className="a__spacing__medium">
                        <div className="a__box">
                            <div className="a__box__inner">
                                <span className="a__size__base a__color__base a__text__normal">
                                    1-12 of over 1,000 results for
                                </span>
                                <span className="a__size__base a__color__state font-weight-bold"> Gift Cards</span>
                            </div>
                        </div>
                    </section>
                    <section className="last">{/* "last" to remove mbottom space for last slider */}
                        <CarouselDetailed 
                            squished={true}
                            carouselID={"amzn__gift__cards"}
                            slider={
                                <Slider 
                                    type={"multiImage"}
                                    carouselClass={"amzn__carousel"}
                                    carouselID={"amzn__gift__cards"}
                                    giftCardAux={true} // To prevent clashing with 'category'
                                    count={3}
                                    price={true}
                                    items={
                                            [
                                                {
                                                    href: '/',
                                                    src: amzn_premium_gift_card,
                                                    altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    caption: "Amazon.ca eGift Card",
                                                    extraCaption: "Amazon.com.ca, Inc.",
                                                    price: 40.00,
                                                    /* This is used for bestseller badge at the top of the image
                                                    Set value as the category of product, and not a boolean */
                                                    bestSellerAux: "Gift Cards" 
                                                },
                                                {
                                                    href: '/',
                                                    src: amzn_premium_gift_card,
                                                    altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    caption: "Amazon.ca eGift Card",
                                                    extraCaption: "Amazon.com.ca, Inc.",
                                                    price: 40.00
                                                },
                                                {
                                                    href: '/',
                                                    src: amzn_premium_gift_card,
                                                    altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    caption: "Amazon.ca eGift Card",
                                                    extraCaption: "Amazon.com.ca, Inc.",
                                                    price: 40.00
                                                }
                                            ]
                                    }
                                />
                            }
                        />
                    </section>
                    <SeeAllResults/>
                </section>
            </section>
        </section>
    )

    return (
        <Layout>
            <GiftCardsPage />
        </Layout>
    )
}

export default GiftCards
