import React from 'react'

import { Link } from 'react-router-dom'

import { AiOutlineSearch } from 'react-icons/ai'
import { BtnPillRounded, BtnPillRoundedLg, BtnPillRoundedObscureLg } from '../../components/UI/Button'

import Slider from '../../components/UI/Carousel/Carousel'
import CarouselTestimonial from '../../components/UI/Carousel/CarouselTestimonial'

import amazon_ca_half_logo from '../../images/amazon-ca-half-logo.svg'
import prime_boxes from '../../images/prime-boxes-6-sm.png'
import desktop_computer_icon from '../../images/desktop-computer-icon.svg'
import aeroplane_on_truck_icon from '../../images/aeroplane-on-truck-icon.svg'
import hand_holding_coin_icon from '../../images/hand-holding-coin-icon.svg'
import testimonial_gowood from '../../images/testimonial-gowood.png'
import gowood_ralph_quotee_avatar from '../../images/gowood-ralph-quotee-avatar.png'
import alex_stan_quotee_avatar from '../../images/alex_stan_quotee_avatar.png'
import six_man_range from '../../images/products/6ix-man-range.png'
import gowood_glasses from '../../images/products/gowood-glasses.png'
import amazon_ca_half_logo_white from '../../images/amazon-ca-half-logo-white.svg'

import './index.css'

const SellerAmazon = () => {

    return (
        <div class="sellerAmazon--page">
            <header className="sellerAmazon__header">
                <nav className="sellerAmazon__nav">
                    <figure className="sellerAmazon__logoWrapper">
                        <Link to="/">
                            <img src={amazon_ca_half_logo} alt="amazon half logo" />
                        </Link>
                    </figure>
                    <ul className="sellerAmazon__menu">
                        <li className="sellerAmazon__menuLink sellerAmazon__menuLink--hasChildren">
                            <Link to="/">
                                How to sell
                            </Link>
                            <ul>
                                <li>
                                    <Link to="/">
                                        Beginner’s guide
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        How to sell on Amazon
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="sellerAmazon__menuLink sellerAmazon__menuLink--hasChildren">
                            <Link to="/">
                                Pricing
                            </Link>
                            <ul>
                                <li>
                                    <Link to="/">
                                        Pricing overview
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Compare selling plans
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Other fees
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="sellerAmazon__menuLink sellerAmazon__menuLink--hasChildren">
                            <Link to="/">
                                Grow
                            </Link>
                            <ul>
                                <li>
                                    <Link to="/">
                                        Fulfilment by Amazon
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Build an online store
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Sell around the world
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="sellerAmazon__menuLink sellerAmazon__menuLink--hasChildren">
                            <Link to="/">
                                Learn
                            </Link>
                            <ul>
                                <li>
                                    <Link to="/">
                                        Amazon Small Business Academy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Seller University
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Resource guide
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Common questions
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Other resources
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Advertise your products
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="sellerAmazon__menuLink sellerAmazon__menuLink--hasChildren">
                            <Link to="/">
                                Selling Programs
                            </Link>
                            <ul>
                                <li>
                                    <Link to="/">
                                        Amazon Business
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Amazon Renewed
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Amazon Handmade
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <BtnPillRounded/>
                    <Link to="/" className="amzn__searchLens">
                        <AiOutlineSearch/>
                    </Link>
                </nav>
            </header>
            <main className="w-100">
                <section className="sellerAmazon__sell">
                    <div className="sellerAmazon__sell--container">
                        <section className="sellerAmazon__sell--cta col-8 px-0">
                            <h1 className="sellerAmazon__sellHeader">
                                Become an <br/>
                                Amazon seller
                            </h1>
                            <p className="sellerAmazon__sellText col-sm-10">
                                In Canada, 30,000 Canada-based third-party sellers from all 13 provinces and territories – many of which are small and medium sized businesses - grossed more than $1 billion on Amazon.ca in 2019.
                            </p>
                            <section className="sellerAmazon__sellButton w-100">
                                <BtnPillRoundedLg/>
                            </section>
                            <p className="sellerAmazon__sellFees">
                                CDN $29.99 a month + selling fees
                            </p>
                        </section>
                        <section className="sellerAmazon__boxes col-4">
                            <img className="sellerAmazon__primeBoxes" src={prime_boxes} alt="prime boxes"/>
                        </section>
                    </div>
                </section>
                <section className="sellerAmazon__primaryCards">
                    <div className="sellerAmazon__primaryCards--container">
                        <section className="sellerAmazon__primaryCardTile col-4">
                            <header className="sellerAmazon__primaryCardHeading">
                                <div className="sellerAmazon__primaryCardAvatar">
                                    <img src={desktop_computer_icon} alt="Computer icon with Amazon Smile logo" title=""/>
                                </div>
                                <h3 className="sellerAmazon__primaryCardHead mb-0">
                                    Reach millions
                                </h3>
                            </header>
                            <p className="sellerAmazon__primaryCardText">
                                Fresh new startups and Fortune 500s. B2B and B2C. Brand owners and resellers. They all sell on Amazon.ca for a reason: access to millions of customers.
                            </p>
                            <Link to="/" className="sellerAmazon__primaryCardLink">
                                How it works
                            </Link>
                        </section>
                        <section className="sellerAmazon__primaryCardTile col-4">
                            <header className="sellerAmazon__primaryCardHeading">
                                <div className="sellerAmazon__primaryCardAvatar">
                                    <img src={aeroplane_on_truck_icon} alt="Shipping icon, airplane on top and truck on bottom" title=""/>
                                </div>
                                <h3 className="sellerAmazon__primaryCardHead mb-0">
                                    Deliver smiles
                                </h3>
                            </header>
                            <p className="sellerAmazon__primaryCardText">
                                Leave the shipping, returns, and customer service to us with Fulfilment by Amazon (FBA). Want to take care of shipping yourself? You can do that too.
                            </p>
                            <Link to="/" className="sellerAmazon__primaryCardLink">
                                Explore shipping
                            </Link>
                        </section>
                        <section className="sellerAmazon__primaryCardTile col-4">
                            <header className="sellerAmazon__primaryCardHeading">
                                <div className="sellerAmazon__primaryCardAvatar">
                                    <img src={hand_holding_coin_icon} alt="Icon of hand holding a coin" title=""/>
                                </div>
                                <h3 className="sellerAmazon__primaryCardHead mb-0">
                                    Make money
                                </h3>
                            </header>
                            <p className="sellerAmazon__primaryCardText">
                                Choose from flexible selling plans, product categories, and fulfilment options that fit your business needs.
                            </p>
                            <Link to="/" className="sellerAmazon__primaryCardLink">
                                See pricing
                            </Link>
                        </section>
                    </div>
                </section>
                <section className="sellerAmazon__testimonial">
                    <section className="sellerAmazon__testimonialHeader">
                        <header className="has__max__width">
                            <h3 className="sellerAmazon__testimonialHeading">SUCCESS STORIES</h3>
                        </header>
                    </section>
                    <section className="sellerAmazon__testimonialSlider">
                        <div className="has__max__width">
                            <CarouselTestimonial
                                slider={
                                    <Slider
                                        type={"testimonial"}
                                        items={
                                            [
                                                {
                                                    href: "/",
                                                    title: "GOWOOD",
                                                    avatar: gowood_ralph_quotee_avatar,
                                                    author: "Ralph DeRuiter",
                                                    src : testimonial_gowood,
                                                    img: gowood_glasses,
                                                    altText: "testimonial gowood",
                                                    caption: "My advice is to definitely start selling on Amazon. The opportunity is endless. The sky is the limit."
                                                },
                                                {
                                                    href: "/",
                                                    title: "6IXMAN",
                                                    avatar: alex_stan_quotee_avatar,
                                                    author: "Alex Stan",
                                                    src : testimonial_gowood,
                                                    img: six_man_range,
                                                    altText: "testimonial gowood",
                                                    caption: "We started with one product and quickly expanded to more than 10, thanks to the growth and demand we experienced from selling on Amazon."
                                                }
                                            ]
                                        }
                                    />
                                }
                            />
                        </div>
                    </section>
                </section>
                <section className="sellerAmazon__individualSeller">
                    <p className="mb-0">
                        Just have a few items to sell?
                    </p>
                    <p className="mb-0">
                        <Link to="/">Sign up to become an individual seller</Link>
                    </p>
                </section>
                <section className="sellerAmazon__startSelling">
                    <div className="has__max__width">
                        <header className="sellerAmazon__startSellingHeading col-7">
                            <h2 className="sellerAmazon__sellHeader sellerAmazon__startSellingHeader">
                                Start selling today
                            </h2>
                        </header>
                    </div>
                    <section className="sellerAmazon__startSellingText">
                        <div className="has__max__width">
                            <section className="sellerAmazon__startSellingTextContent col-5">
                                <p className="mb-0">
                                    Put your products in front of the millions of customers that search <Link to="/">Amazon.ca</Link> every day.
                                </p>
                            </section>
                        </div>
                    </section>
                    <section className="sellerAmazon__sellButton w-100">
                        <button className="btn__pillRoundedLg" type="submit">Sign up</button>
                    </section>
                    <p className="sellerAmazon__sellFees">CDN $29.99 a month + selling fees</p>
                </section>
                <section className="sellerAmazon__intlNotice">
                    <div className="has__max__width">
                        <p className="mb-0">
                            <strong>Important Notice for International Sellers</strong><br/>
                            As an international seller there are important steps you must take before selling on our Amazon.ca website to ensure a great experience for you and for customers.<br/><br/>
                            Please read this <Link to="/">important information for international sellers</Link> for more details of your obligations as a seller on <Link to="/">Amazon.ca</Link>
                        </p>
                    </div>
                </section>
            </main>
            <footer className="sellerAmazon__footer">
                <div className="has__max__width">
                    <nav className="flex-fill">
                        <section className="d-flex">
                            <section className="sellerAmazon__footerButtonWrap d-flex justify-content-end flex-fill">
                                <BtnPillRoundedObscureLg
                                    text={"English"}
                                    icon={"lang"}
                                />
                                <BtnPillRoundedObscureLg
                                    text={"Canada"}
                                    icon={"country"}
                                />
                                <BtnPillRoundedObscureLg
                                    text={"Feedback"}
                                    icon={"star"}
                                />
                            </section>
                        </section>
                        <section className="sellerAmazon__navFooterWrap">
                            <section className="flex-grow-0 flex-shrink-1">
                                <h5>Sell on Amazon</h5>
                                <ul>
                                    <li>
                                        <Link to="/">Amazon Small Business Academy</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Amazon Business</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Amazon Handmade</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Amazon Renewed</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Resource center</Link>
                                    </li>
                                    <li>
                                        <Link to="/">FAQ</Link>
                                    </li>
                                </ul>
                            </section>
                            <section className="flex-grow-0 flex-shrink-1">
                                <h5>
                                    <Link to="/">Seller Central</Link>
                                </h5>
                                <ul>
                                    <li>
                                        <Link to="/">Seller login</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Helper pages</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Amazon seller forum</Link>
                                    </li>
                                </ul>
                            </section>
                            <section className="flex-grow-0 flex-shrink-1">
                                <h5>
                                    <Link to="/">Videos</Link>
                                </h5>
                                <ul>
                                    <li>
                                        <Link to="/">Seller University</Link>
                                    </li>
                                </ul>
                            </section>
                            <section className="flex-grow-0 flex-shrink-1">
                                <h5>
                                    <Link to="/">Amazon</Link>
                                </h5>
                                <ul>
                                    <li>
                                        <Link to="/">Shop small Business</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Day One Blog</Link>
                                    </li>
                                </ul>
                            </section>
                        </section>
                    </nav>
                </div>
                <section className="sellerAmazon__footerRoot">
                    <div className="has__max__width">
                        <section className="sellerAmazon__footerRootImg col-5 px-0 d-flex justify-content-start align-items-center">
                            <img src={amazon_ca_half_logo_white} alt="amazon half logo white"/>
                        </section>
                        <section className="sellerAmazon__footerRootLinks col-7 px-0 d-flex justify-content-end align-items-center">
                            <ul className="d-flex flex-grow-0 align-items-stretch align-content-start justify-content-end ml-0">
                                <li>
                                    <Link to="/">Terms of Service</Link>
                                </li>
                                <li>
                                    <Link to="/">Privacy Policy</Link>
                                </li>
                            </ul>
                            <ul className="flex-grow-0 align-content-start align-items-stretch ml-0">
                                <li>
                                    <Link to="/">© 2020, Amazon Services LLC.</Link>
                                </li>
                            </ul>
                        </section>
                    </div>
                </section>
            </footer>
        </div>
    )
}

export default SellerAmazon
