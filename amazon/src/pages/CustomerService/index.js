import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Row } from 'reactstrap'
import { GoSearch } from 'react-icons/go'
import { RiArrowDropRightLine } from 'react-icons/ri'

import Layout from '../../components/Layout'

import { CardCell, CardCellLinks } from '../../components/UI/CardCell'
import Slider from '../../components/UI/Carousel/Carousel'

import order from '../../images/order.png'
import security from '../../images/security.png'
import prime from '../../images/prime.png'
import address from '../../images/address.png'
import payment from '../../images/payment.png'
import gift_card from '../../images/gift-card.png'
import returnn from '../../images/return.png'
import digital_devices from '../../images/digital-devices.png'
import prime_clear_bg from '../../images/prime-clear-bg.png'
import account from '../../images/account.png'
import covid19 from '../../images/covid19.png'
import security_badge from '../../images/security-badge.png'
import line from '../../images/line.png'
import spanner_sketch from '../../images/spanner-sketch.png'
import amazon_boxes_sketch from '../../images/amazon-boxes-sketch.png'
import amazon_return_funds_sketch from '../../images/amazon-return-funds-sketch.png'
import laptop_sketch from '../../images/laptop-sketch.png'
import payment_pricing_sketch from '../../images/payment-pricing-sketch.png'
import order_sketch from '../../images/order-sketch.png'
import amazon_devices_sketch from '../../images/amazon-devices-sketch.png'
import headphone_sketch from '../../images/headphone-sketch.png'
import business_account_sketch from '../../images/business-account-sketch.png'
import amazon_box_more from '../../images/amazon-box-more.png'

import './index.css'

const CustomerService = () => {

    const [topic, setTopic] = useState("recommended-topics")

    const displayTopic = (topic) => {
        setTopic(topic)
    }

    const CustomerServicePage = () => (
        <main className="customer__service--page">
            <header className="customer__serviceHeader a__spacing__extra__large a__spacing__top__extra__large">
                <h1>
                    Hello. What can we help you with?
                </h1>
            </header>
            <hr className="a__spacing__none a__divider__normal" />
            <div className="a__divider__inner"></div>
            <section className="position-relative pt-0">
                <section>
                    <h2 className="customerService__title a__spacing__base a__text__normal">
                        What can we assist you with today?
                    </h2>
                    <section className="customerService__body">
                        <Row tag="ul" className="card__cell__row align-items-stretch mx-0">
                            <CardCell 
                                heading={"Your Orders"}
                                text={"Track, return, or buy things again"}
                                cardCellImg={
                                    [
                                        {
                                            img : order,
                                            alt : "your orders"
                                        }
                                    ]
                                }
                            />
                            <CardCell 
                                heading={"Returns & Refunds"}
                                text={"Return or exchange items"}
                                cardCellImg={
                                    [
                                        {
                                            img : returnn,
                                            alt : "Returns & Refunds"
                                        }
                                    ]
                                }
                            />
                            <CardCell 
                                heading={"Digital services and device support"}
                                text={"Find device help and support or troubleshoot device issues"}
                                cardCellImg={
                                    [
                                        {
                                            img : digital_devices,
                                            alt : "Digital services and device support"
                                        }
                                    ]
                                }
                            />
                        </Row>
                        <Row tag="ul" className="card__cell__row align-items-stretch mx-0">
                            <CardCell 
                                heading={"Manage Prime"}
                                text={"Learn about Amazon Prime benefits or cancel your membership"}
                                cardCellImg={
                                    [
                                        {
                                            img : prime_clear_bg,
                                            alt : "Manage Prime"
                                        }
                                    ]
                                }
                            />
                            <CardCell 
                                heading={"Payments & Gift Cards"}
                                text={"Manage payment and view gift card balances"}
                                cardCellImg={
                                    [
                                        {
                                            img : payment,
                                            alt : "Payments & Gift Cards"
                                        }
                                    ]
                                }
                            />
                            <CardCell 
                                heading={"Your account"}
                                text={"hange your email or password"}
                                cardCellImg={
                                    [
                                        {
                                            img : account,
                                            alt : "Your account"
                                        }
                                    ]
                                }
                            />
                        </Row>
                        <Row tag="ul" className="card__cell__row align-items-stretch mx-0">
                            <CardCell 
                                heading={"Amazon and COVID-19"}
                                text={"FAQ about the impact on ordering"}
                                cardCellImg={
                                    [
                                        {
                                            img : covid19,
                                            alt : "Amazon and COVID-19"
                                        }
                                    ]
                                }
                            />
                            <CardCell 
                                heading={"Safe online shopping"}
                                text={"Learn how to protect your account"}
                                cardCellImg={
                                    [
                                        {
                                            img : security_badge,
                                            alt : "Safe online shopping"
                                        }
                                    ]
                                }
                            />
                        </Row>
                        <hr className="a__spacing__extra__large a__spacing__top__extra__large a__divider__normal"/>
                        <h1>Browse help topics</h1>
                        <section className="a__spacing__top__medium ss__landing__container__wide">
                            <p className="a__spacing__mini text-left">
                                <label htmlFor="" className="a__form__label">
                                    <span className="a__size__medium font-weight-bold">
                                        Find more solutions
                                    </span>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span className="a__size__base__plus font-italic">
                                        Type something like, "where's my stuff?"
                                    </span>
                                </label>
                            </p>
                            <div className="m-auto a__spacing__large">
                                <form action="" className="w-100 m-0 p-0">
                                    <div className="a__search">
                                        <GoSearch 
                                            className="a__icon a__icon__search"
                                        />
                                        <input type="search" maxlength="100" autocomplete="off" class="a__input__text"/>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </section>
                </section>
            </section>
            <section>
                <div className="customer__serviceInner">
                    <section className="customer__serviceTopics d-flex">
                        <section className="customer__serviceCat">
                            <ul className="a__list__link">
                                <li>
                                    <Link to="/" onMouseOver={() => displayTopic("recommended-topics")}
                                        className={ topic === "recommended-topics" && ("active") }>Recommended Topics</Link>
                                    <span className="arrow"><RiArrowDropRightLine /></span>
                                </li>
                                <li>
                                    <Link to="/" onMouseOver={() => displayTopic("shipping-and-delivery")}
                                        className={ topic === "shipping-and-delivery" && ("active") }>Shipping &amp; Delivery</Link>
                                    <span className="arrow"><RiArrowDropRightLine /></span>
                                </li>
                                <li>
                                    <Link to="/" onMouseOver={() => displayTopic("returns-and-refunds")}
                                        className={ topic === "returns-and-refunds" && ("active") }>Returns &amp; Refunds</Link>
                                    <span className="arrow"><RiArrowDropRightLine /></span>
                                </li>
                                <li>
                                    <Link to="/" onMouseOver={() => displayTopic("manage-account")}
                                        className={ topic === "manage-account" && ("active") }>Manage Your Account</Link>
                                    <span className="arrow"><RiArrowDropRightLine /></span>
                                </li>
                                <li>
                                    <Link to="/" onMouseOver={() => displayTopic("payment-pricing-and-promotions")}
                                        className={ topic === "payment-pricing-and-promotions" && ("active") }>Payment, Pricing &amp; Promotions</Link>
                                    <span className="arrow"><RiArrowDropRightLine /></span>
                                </li>
                                <li>
                                    <Link to="/" onMouseOver={() => displayTopic("ordering")}
                                        className={ topic === "ordering" && ("active") }>Ordering</Link>
                                    <span className="arrow"><RiArrowDropRightLine /></span>
                                </li>
                                <li>
                                    <Link to="/" onMouseOver={() => displayTopic("amazon-devices")}
                                        className={ topic === "amazon-devices" && ("active") }>Amazon Devices</Link>
                                    <span className="arrow"><RiArrowDropRightLine /></span>
                                </li>
                                <li>
                                    <Link to="/" onMouseOver={() => displayTopic("digital-services-content")}
                                        className={ topic === "digital-services-content" && ("active") }>Digital Services &amp; Content</Link>
                                    <span className="arrow"><RiArrowDropRightLine /></span>
                                </li>
                                <li>
                                    <Link to="/" onMouseOver={() => displayTopic("amazon-business-account")}
                                        className={ topic === "amazon-business-account" && ("active") }>Amazon Business Accounts</Link>
                                    <span className="arrow"><RiArrowDropRightLine /></span>
                                </li>
                                <li>
                                    <Link to="/" onMouseOver={() => displayTopic("security-and-privacy")}
                                        className={ topic === "security-and-privacy" && ("active") }>Security and Privacy</Link>
                                    <span className="arrow"><RiArrowDropRightLine /></span>
                                </li>
                                <li>
                                    <Link to="/" onMouseOver={() => displayTopic("other-topics")}
                                        className={ topic === "other-topics" && ("active") }>Other Topics &amp; Help Sites</Link>
                                    <span className="arrow"><RiArrowDropRightLine /></span>
                                </li>
                                <li>
                                    <Link to="/" onMouseOver={() => displayTopic("more-help")}
                                        className={ topic === "more-help" && ("active") }>Need More Help?</Link>
                                    <span className="arrow"><RiArrowDropRightLine /></span>
                                </li>
                            </ul>
                        </section>
                        <section className="customer__serviceCatContent">
                            {
                                topic === "recommended-topics" && (
                                    <section id="recommended-topics">
                                        <img className="customer__serviceCatContentSketch" src={spanner_sketch} alt="spanner sketch" />
                                        <section className="customer__serviceContentCol position-relative row">
                                            <section className="customer__serviceContentColPri col-6">
                                                <ul className="a__nostyle a__list__link">
                                                    <li>    
                                                        <h3 className="a__spacing__small">
                                                            Learn how to...
                                                        </h3>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Track Your Package
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            About FREE Shipping by Amazon
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Order with FREE Shipping by Amazon
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Cancel Items or Orders
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Sign Up for the Amazon Prime Free Trial (Non-Quebec Residents)
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Use a Gift Card
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Add &amp; Manage Payment Methods
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Order with 1-Click
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </section>
                                            <section className="customer__serviceContentColSec col-5 offset-1">
                                                <img className="customer__serviceLine" src={line} alt="separator" />
                                                <ul className="a__nostyle a__list__link">
                                                    <li>    
                                                        <h3 className="a__spacing__small">
                                                            Quick Solutions
                                                        </h3>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Track Your Package
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Your Transactions
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Change Your Name, Email, or Password
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </section>
                                        </section>
                                    </section>
                                )
                            }
                            {
                                topic === "shipping-and-delivery" && (
                                    <section id="shipping-and-delivery">
                                        <img className="customer__serviceCatContentSketch" src={amazon_boxes_sketch} alt="amazon boxes sketch" />
                                        <section className="customer__serviceContentCol position-relative row">
                                            <section className="customer__serviceContentColPri col-12">
                                                <ul className="a__nostyle a__list__link">
                                                    <li>    
                                                        <h3 className="a__spacing__small">
                                                            Shipping &amp; Delivery
                                                        </h3>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Where's My Stuff
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Shipping Rates &amp; Times
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Amazon Prime
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            International Shipping
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            General Shipping Information
                                                        </Link>
                                                    </li>
                                                    <li  className="more">    
                                                        <Link to="/">
                                                            <span className="a__color__state"> › </span>
                                                            More in Shipping &amp; Delivery
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </section>
                                        </section>
                                    </section>
                                )
                            }
                            {
                                topic === "returns-and-refunds" && (
                                    <section id="returns-and-refunds">
                                        <img className="customer__serviceCatContentSketch" src={amazon_return_funds_sketch} alt="amazon return funds" />
                                        <section className="customer__serviceContentCol position-relative row">
                                            <section className="customer__serviceContentColPri col-12">
                                                <ul className="a__nostyle a__list__link">
                                                    <li>    
                                                        <h3 className="a__spacing__small">
                                                            Returns &amp; Refunds
                                                        </h3>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Return Items You Ordered 
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Return a Gift
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Exchange or Replace an Item
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            About Our Returns Policies
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Items That Can't Be Returned
                                                        </Link>
                                                    </li>
                                                    <li  className="more">    
                                                        <Link to="/">
                                                            <span className="a__color__state"> › </span>
                                                            More in Returns &amp; Refunds
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </section>
                                        </section>
                                    </section>
                                )
                            }
                            {
                                topic === "manage-account" && (
                                    <section id="manage-account">
                                        <img className="customer__serviceCatContentSketch" src={laptop_sketch} alt="laptop sketch" />
                                        <section className="customer__serviceContentCol position-relative row">
                                            <section className="customer__serviceContentColPri col-12">
                                                <ul className="a__nostyle a__list__link">
                                                    <li>    
                                                        <h3 className="a__spacing__small">
                                                            Manage Your Account
                                                        </h3>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Problem with an Order 
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Cancel Items or Orders
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Add &amp; Manage Payment Methods
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Add &amp; Manage Addresses
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Account Settings
                                                        </Link>
                                                    </li>
                                                    <li  className="more">    
                                                        <Link to="/">
                                                            <span className="a__color__state"> › </span>
                                                            More in Manage Your Account 
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </section>
                                        </section>
                                    </section>
                                )
                            }
                            {
                                topic === "payment-pricing-and-promotions" && (
                                    <section id="payment-pricing-and-promotions">
                                        <img className="customer__serviceCatContentSketch" src={payment_pricing_sketch} alt="payment pricing sketch" />
                                        <section className="customer__serviceContentCol position-relative row">
                                            <section className="customer__serviceContentColPri col-12">
                                                <ul className="a__nostyle a__list__link">
                                                    <li>    
                                                        <h3 className="a__spacing__small">
                                                            Payment, Pricing &amp; Promotions
                                                        </h3>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Payment Methods 
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Pricing
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Membership Programs
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Promotions &amp; Deals
                                                        </Link>
                                                    </li>
                                                    <li className="more">    
                                                        <Link to="/">
                                                            <span className="a__color__state"> › </span>
                                                            More in Payment, Pricing &amp; Promotions 
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </section>
                                        </section>
                                    </section>
                                )
                            }
                            {
                                topic === "ordering" && (
                                    <section id="ordering">
                                        <img className="customer__serviceCatContentSketch" src={order_sketch} alt="order sketch" />
                                        <section className="customer__serviceContentCol position-relative row">
                                            <section className="customer__serviceContentColPri col-12">
                                                <ul className="a__nostyle a__list__link">
                                                    <li>    
                                                        <h3 className="a__spacing__small">
                                                            Ordering
                                                        </h3>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Placing an Order 
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            1-Click Ordering
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Shopping on Your Mobile Device
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Ordering from a Third-Party Seller
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Subscriptions
                                                        </Link>
                                                    </li>
                                                    <li className="more">    
                                                        <Link to="/">
                                                            <span className="a__color__state"> › </span>
                                                            More in Ordering 
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </section>
                                        </section>
                                    </section>
                                )
                            }
                            {
                                topic === "amazon-devices" && (
                                    <section id="amazon-devices">
                                        <img className="customer__serviceCatContentSketch" src={amazon_devices_sketch} alt="amazon devices sketch" />
                                        <section className="customer__serviceContentCol position-relative row">
                                            <section className="customer__serviceContentColPri col-6">
                                                <ul className="a__nostyle a__list__link">
                                                    <li>    
                                                        <h3 className="a__spacing__small">
                                                            Amazon Devices
                                                        </h3>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Fire TV Stick
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Alexa and Echo Devices
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Kindle E-Reader
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Fire Tablets
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Purchase a New Fire or Kindle Device as a Gift
                                                        </Link>
                                                    </li>
                                                    <li className="more">    
                                                        <Link to="/">
                                                            <span className="a__color__state"> › </span>
                                                            See all Devices &amp; Reading Apps
                                                        </Link>
                                                    </li>
                                                    <li className="more">    
                                                        <Link to="/">
                                                            <span className="a__color__state"> › </span>
                                                            Ask the Digital and Device Community
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </section>
                                            <section className="customer__serviceContentColSec col-5 offset-1">
                                                <img className="customer__serviceLine" src={line} alt="separator" />
                                                <ul className="a__nostyle a__list__link">
                                                    <li>    
                                                        <h3 className="a__spacing__small">
                                                            Featured Topics
                                                        </h3>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Echo Spot
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Amazon Echo Plus
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Kindle Oasis (9th Generation)
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Fire TV Stick Basic Edition
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Fire TV Edition TV
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Fire TV Stick
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </section>
                                        </section>
                                    </section>
                                )
                            }
                            {
                                topic === "digital-services-content" && (
                                    <section id="digital-services-content">
                                        <img className="customer__serviceCatContentSketch" src={headphone_sketch} alt="headphone sketch" />
                                        <section className="customer__serviceContentCol position-relative row">
                                            <section className="customer__serviceContentColPri col-6">
                                                <ul className="a__nostyle a__list__link">
                                                    <li>    
                                                        <h3 className="a__spacing__small">
                                                            Digital Services &amp; Content
                                                        </h3>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Amazon Appstore
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Amazon Photos and Amazon Drive
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Amazon Music
                                                        </Link>
                                                    </li>
                                                    <li className="more">    
                                                        <Link to="/">
                                                            <span className="a__color__state"> › </span>
                                                            Digital Services &amp; Content
                                                        </Link>
                                                    </li>
                                                    <li className="more">    
                                                        <Link to="/">
                                                            <span className="a__color__state"> › </span>
                                                            Support for Kindle Books
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </section>
                                            <section className="customer__serviceContentColSec col-5 offset-1">
                                                <img className="customer__serviceLine" src={line} alt="separator" />
                                                <ul className="a__nostyle a__list__link">
                                                    <li>    
                                                        <h3 className="a__spacing__small">
                                                            Featured Topics
                                                        </h3>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Prime Video Help
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </section>
                                        </section>
                                    </section>
                                )
                            }
                            {
                                topic === "amazon-business-account" && (
                                    <section id="amazon-business-account">
                                        <img className="customer__serviceCatContentSketch" src={business_account_sketch} alt="business account sketch" />
                                        <section className="customer__serviceContentCol position-relative row">
                                            <section className="customer__serviceContentColPri col-12">
                                                <ul className="a__nostyle a__list__link">
                                                    <li>    
                                                        <h3 className="a__spacing__small">
                                                            Amazon Business Accounts
                                                        </h3>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            About Amazon Business
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Register for an Amazon Business Account
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Business Prime
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Amazon Tax Exemption Program
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Amazon Business Help
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </section>
                                        </section>
                                    </section>
                                )
                            }
                            {
                                topic === "security-and-privacy" && (
                                    <section id="security-and-privacy">
                                        <section className="customer__serviceContentCol position-relative row">
                                            <section className="customer__serviceContentColPri col-12">
                                                <ul className="a__nostyle a__list__link">
                                                    <li>    
                                                        <h3 className="a__spacing__small">
                                                            Security and Privacy
                                                        </h3>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            How Amazon Collects Your Personal Information
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            How Amazon Uses Your Personal Information
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            How Amazon Protects Your Personal Information
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Amazon &amp; My Personal Information
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Manage Your Personal Information
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Request Your Personal Information
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Identifying Whether an Email, Phone Call, Text Message, or Webpage is from Amazon
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Request the Closure of Your Account and the Deletion of Your Personal Information
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            What Happens When I Close My Account?
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Amazon.ca Privacy Notice
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </section>
                                        </section>
                                    </section>
                                )
                            }
                            {
                                topic === "other-topics" && (
                                    <section id="other-topics">
                                        <section className="customer__serviceContentCol position-relative row">
                                            <section className="customer__serviceContentColPri col-6">
                                                <ul className="a__nostyle a__list__link">
                                                    <li>    
                                                        <h3 className="a__spacing__small">
                                                            Other Topics
                                                        </h3>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Gifts, Gift Cards &amp; Registries
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Security &amp; Privacy
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Author, Publisher &amp; Vendor Guides
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Site Features
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </section>
                                            <section className="customer__serviceContentColSec col-5 offset-1">
                                                <img className="customer__serviceLine" src={line} alt="separator" />
                                                <ul className="a__nostyle a__list__link">
                                                    <li>    
                                                        <h3 className="a__spacing__small">
                                                            Other Help Sites
                                                        </h3>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Marketplace Selling
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Help for Amazon Sellers
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Associates Program Help
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Publisher and Vendor Help
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </section>
                                        </section>
                                    </section>
                                )
                            }
                            {
                                topic === "more-help" && (
                                    <section id="more-help">
                                        <img className="customer__serviceCatContentSketch" src={amazon_box_more} alt="amazon box more" />
                                        <section className="customer__serviceContentCol position-relative row">
                                            <section className="customer__serviceContentColPri col-12">
                                                <ul className="a__nostyle a__list__link">
                                                    <li>    
                                                        <h3 className="a__spacing__small">
                                                            Need more help?
                                                        </h3>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Ask the Digital and Device Community
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Track Your Package
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Return or Replace Items
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Manage Your Apps &amp; Devices
                                                        </Link>
                                                    </li>
                                                    <li>    
                                                        <Link to="/">
                                                            Contact Us
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </section>
                                        </section>
                                    </section>
                                )
                            }
                        </section>
                    </section>
                </div>
            </section>
        </main>
    )

    return (
        <Layout>
            <CustomerServicePage />
        </Layout>
    )
}

export default CustomerService
