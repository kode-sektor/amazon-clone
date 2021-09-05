import React from 'react'

import { Link } from 'react-router-dom'

import { AiOutlineSearch } from 'react-icons/ai'
import { BtnPillRounded, BtnPillRoundedLg } from '../../components/UI/Button'

import Slider from '../../components/UI/Carousel/Carousel'
import TestimonialCarousel from '../../components/UI/Carousel/TestimonialCarousel'

import amazon_ca_half_logo from '../../images/amazon-ca-half-logo.svg'
import prime_boxes from '../../images/prime-boxes-6-sm.png'
import desktop_computer_icon from '../../images/desktop-computer-icon.svg'
import aeroplane_on_truck_icon from '../../images/aeroplane-on-truck-icon.svg'
import hand_holding_coin_icon from '../../images/hand-holding-coin-icon.svg'
import testimonial_gowood from '../../images/testimonial-gowood.png'
import gowood_ralph_quotee_avatar from '../../images/gowood-ralph-quotee-avatar.png'
import six_man_range from '../../images/products/6ix-man-range.png'

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
                            <TestimonialCarousel
                                slider={
                                    <Slider
                                        type={"testimonial"}
                                        items={
                                            [
                                                {
                                                    href: "/",
                                                    title: "6IXMAN",
                                                    avatar: gowood_ralph_quotee_avatar,
                                                    author: "Alex Stan",
                                                    src : testimonial_gowood,
                                                    img: six_man_range,
                                                    altText: "testimonial gowood",
                                                    caption: "We started with one product and quickly expanded to more than 10, thanks to the growth and demand we experienced from selling on Amazon."
                                                },
                                                {
                                                    href: "/",
                                                    title: "6IXMAN",
                                                    avatar: gowood_ralph_quotee_avatar,
                                                    author: "Alex Stan",
                                                    src : testimonial_gowood,
                                                    img: six_man_range,
                                                    altText: "testimonial gowood",
                                                    caption: "My advice is to definitely start selling on Amazon.The opportunity is endless. The sky is the limit."
                                                }
                                            ]
                                        }
                                    />
                                }
                            />
                        </div>
                    </section>
                </section>
            </main>
        </div>
    )
}

export default SellerAmazon
