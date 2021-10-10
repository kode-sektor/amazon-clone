import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { UncontrolledDropdown } from "reactstrap"

import DropdownMenuLang from '../../components/UI/DropdownMenuLang'
import DropdownMenuCountries from '../../components/UI/DropdownMenuCountries'
import { BtnSquarePrimary } from '../../components/UI/Button'
import CarouselAffiliate from '../../components/UI/Carousel/CarouselAffiliate'
import { Line } from '../../components/UI/Line'

import Faq from '../../components/UI/FAQ'

import canada_flag from '../../images/canada-flag.gif'
import affiliate_click from '../../images/affiliate-click.svg'
import affiliate_page from '../../images/affiliate-page.svg'
import affiliate_money_bag from '../../images/affiliate-money-bag.svg'

import './index.css'
import Slider from '../../components/UI/Carousel/Carousel'

const Associates = () => {

    const [isOpen, setIsOpen] = useState(false)

    const [flagdropdownOpen, setFlagdropdownOpen] = useState(false)    // flag dropdown
    const [countrydropdownOpen, setCountrydropdownOpen] = useState(false)    // account dropdown

	// Toggle dropdowns
    const toggle = () => setIsOpen(!isOpen)    // For main navigation expand / collapse

    // Flag dropdown
    const flagdropdown = () => setFlagdropdownOpen(flagdropdownOpen => !flagdropdownOpen) 
    const flagdropdownEnter = () => setFlagdropdownOpen(true)
    const flagdropdownLeave = () => setFlagdropdownOpen(false)

    // Country dropdown
    const countrydropdown = () => setCountrydropdownOpen(acctdropdownOpen => !acctdropdownOpen)
    const countrydropdownEnter = () => setCountrydropdownOpen(true)
    const countrydropdownLeave = () => setCountrydropdownOpen(false)

    const AssociatesPage = () => (
        <div className="associates--page">
            <header className="associates__header">
                <div className="associates--wrapper d-flex">
                    <Link className="associates__headerLogo">
                        <span></span>
                    </Link>
                    <section className="associates__headerLinks d-flex">
                        <div>
                            <Link to="/">Sign in</Link>
                        </div>
                        <div>
                            <UncontrolledDropdown 
                                onMouseOver={flagdropdownEnter} 
                                onMouseLeave={flagdropdownLeave} 
                                isOpen={flagdropdownOpen} 
                                toggle={flagdropdown} 
                                inNavbar 
                            >
                                <Link to="/">
                                    <span>English - EN</span>
                                    <i className="a__icon a__icon__popover"></i>
                                </Link>
                                <DropdownMenuLang
                                    type="amazon_associates"
                                />
                            </UncontrolledDropdown>
                        </div>
                        <div>
                            <UncontrolledDropdown 
                                onMouseOver={countrydropdownEnter} 
                                onMouseLeave={countrydropdownLeave} 
                                isOpen={countrydropdownOpen} 
                                toggle={countrydropdown} 
                                inNavbar 
                                className="associates__countries"
                            >
                                <Link to="/">
                                    <img className="associates__countryFlag" src={canada_flag} alt="canada flag icon"/>
                                    <span> Canada </span>
                                    <i className="a__icon a__icon__popover"></i>
                                </Link>
                                <DropdownMenuCountries
                                    type="amazon_associates_countries"
                                />
                            </UncontrolledDropdown>
                        </div>
                    </section>
                </div>
                <hr />
                <section className="associates__join">
                    <div className="ac__standard__alert">
                        <div className="a__box a__alert a__alert__warning">
                            <div className="a__box__inner a__alert__container">
                                <i className="a__icon a__icon__alert"></i>
                                <p className="a__alert__content">
                                    The e-mail address / mobile number and password you are using are not connected to an Associates account. If you don’t have an Amazon Associates account, please <Link to="/signup" title="Join now">join now for free</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
            <main>
                <section className="associates--main">
                    <section className="associates__featuredImage">
                        <div className="associates__featuredImageOverlay">
                            <div className="associates__featuredImageHeading">
                                Recommend Products. Earn Commissions.
                            </div>
                            <div>
                                <BtnSquarePrimary/>
                            </div>
                        </div>
                    </section>
                    <section className="associates__affiliate">
                        <h1 className="associates__affiliateHeading">Amazon Associates - Amazon's affiliate marketing program</h1>
                        <h2 className="associates__affiliateSubheading">
                            Welcome to one of the largest affiliate marketing programs in the world. The Amazon Associates Program helps content creators, publishers and bloggers monetize their traffic. With millions of products available on Amazon, associates use easy link-building tools to direct their audience to products they recommend, and earn from qualifying purchases.
                        </h2>
                        <ul className="associates__affiliateBenefits d-flex" ml-0>
                            <li className="associates__affiliateBenefitsItems">
                                <div className="associates__affiliateBenefitsImg">
                                    <img src={affiliate_click} border="0" align="center" alt="Sign up"/>
                                </div>
                                <div className="associates__affiliateBenefitsNo">
                                    1
                                </div>
                                <p className="associates__affiliateBenefit">
                                    Sign up
                                </p>
                                <p className="associates__affiliateDesc">
                                    Join tens of thousands of creators, publishers and bloggers who are earning with the Amazon Associates Program.
                                </p>
                            </li>
                            <li className="associates__affiliateBenefitsItems">
                                <div className="associates__affiliateBenefitsImg">
                                    <img src={affiliate_page} border="0" align="center" alt="Sign up"/>
                                </div>
                                <div className="associates__affiliateBenefitsNo">
                                    2
                                </div>
                                <p className="associates__affiliateBenefit">
                                    Recommend
                                </p>
                                <p className="associates__affiliateDesc">
                                    Share millions of products with your audience. We have customized linking tools for large publishers, individual bloggers and social media influencers.
                                </p>
                            </li>
                            <li className="associates__affiliateBenefitsItems">
                                <div className="associates__affiliateBenefitsImg">
                                    <img src={affiliate_money_bag} border="0" align="center" alt="Sign up"/>
                                </div>
                                <div className="associates__affiliateBenefitsNo">
                                    3
                                </div>
                                <p className="associates__affiliateBenefit">
                                    Earn
                                </p>
                                <p className="associates__affiliateDesc">
                                    Earn up to 10% in Associate commissions from qualifying purchases. Our competitive conversion rates help maximize earnings.
                                </p>
                            </li>
                        </ul>
                    </section>
                    <section className="associates__carousel">
                        <CarouselAffiliate
                            slider={
                                <Slider
                                    type={"affiliate"}
                                    items={
                                            [
                                                {
                                                    caption: "BuzzFeed",
                                                    text: "Amazon Associates has been a critical driver of our commerce initiatives and has enabled BuzzFeed to build a business that first and foremost services our audience."
                                                },
                                                {
                                                    caption: "Fire Food Chef",
                                                    text: "We're able to find all of the products on Amazon that we want to recommend to our audience. We value being able to help our audience find and purchase what they need."
                                                },
                                                {
                                                    caption: "Impremedia",
                                                    text: "Since we have a global audience, the Associates Program has helped us to scale our earnings internationally. It's been simple to sign up, expand and use!"
                                                },
                                                {
                                                    caption: "Domino",
                                                    text: "The Associates Program has given us all of the tools and data that we need to quickly make content decisions and continually grow our earnings."
                                                }
                                            ]
                                        }
                                />
                            }
                        />
                    </section>
                    <section className="associates__faqContainer">
                        <h2 className="associates__faqHeader">
                            Frequently Asked Questions
                        </h2>
                        <section className="associates__faq d-flex">
                            <section className="col-6 pl-0">
                                <Faq
                                    question={
                                        "How does the Associates Program work?"
                                    }
                                    answer={
                                        <>
                                            You can share products and available programs on Amazon with your audience through customized linking tools and earn money on qualifying purchases and customer actions like signing up for a free trial program. <Link to="/">Learn more.</Link>
                                        </>
                                    }
                                />
                                <Faq
                                    question={
                                        "How do I qualify for this program?"
                                    }
                                    answer={
                                        <>
                                            Bloggers, publishers and content creators with a qualifying website or mobile app can participate in this program. <Link to="/">Learn more.</Link><br/><br/>
                                            If you are an influencer with an established social media following. <Link to="/">Learn about the Amazon Influencer Program.</Link>
                                        </>
                                    }
                                />
                            </section>
                            <section className="col-6 pl-0">
                                <Faq
                                    question={
                                        "How do I earn in this program?"
                                    }
                                    answer={
                                        <>
                                            You earn from qualifying purchases and programs through the traffic you drive to Amazon. Commission income for qualifying purchases and programs differ based on product category. <Link to="/">Learn more.</Link>
                                        </>
                                    }
                                />
                                <Faq
                                    question={
                                        "How do I sign up to the program?"
                                    }
                                    answer={
                                        <>
                                            Sign up to the program. <Link to="/">here.</Link><br/><br/>
                                            We will review your application and approve it if you meet the qualifying criteria. <Link to="/">Learn more.</Link>
                                        </>
                                    }
                                />
                            </section>
                        </section>
                    </section>
                    <section className="associates__welcomeFooter d-flex">
                        <div className="associates__welcomeFooterDivider"></div>
                        <section className="associates__welcomeFooterContent">
                            <h3 className="associates__welcomeFooterHeading">Recommend Products. Earn Commissions.</h3>
                            <div className="a__spacing__none a__spacing__top__micro">
                                <BtnSquarePrimary/>
                            </div>
                        </section>
                    </section>
                </section>
            </main>
            <Line/>
            <footer className="associates__footer">
                <div className="associates__footerWrapper">
                    <section className="associates__footerItem">
                        <Link to="/">Operating Agreement</Link>
                    </section>
                    <section className="associates__footerItem">
                        <Link to="/">Conditions of Use</Link>
                    </section>
                    <section className="associates__footerItem">
                        <Link to="/">Contact Us</Link>
                    </section>
                    <section className="associates__footerItem">
                        © 1996-2020, Amazon.com, Inc
                    </section>
                </div>
            </footer>
        </div>
    )

    return (
        <AssociatesPage />
    )
}

export default Associates
