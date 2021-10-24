import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { CancelBtnLink } from '../../components/UI/Button'

import Subnav from '../../components/Header/SubNav'

import your_orders_box from '../../images/your-orders-box.png'
import return_and_refunds_box from '../../images/return-and-refunds-box.png'
import prime_clear_bg from '../../images/prime-clear-bg.png'
import payments_clear_bg from '../../images/payments-clear-bg.png'
import gateway_carrier from '../../images/gateway-carrier.png'
import profile from '../../images/profile.png'

import Layout from '../../components/Layout'

const Covid19 = () => {

    const CovidPage = () => (
        <main className="csHelp">
            <header className="csHelp__header">
                <div className="row">
                    <h1 className="col-9 csHelp__headerTitle">
                        <Link to="/help-customer-service" className="csHelp__headerTitleLink">
                            Help &amp; Customer Service
                        </Link>
                    </h1>
                </div>
            </header>
            <section className="csHelp__container">
                <section className="csHelp__content order-1">
                    <div className="a__section a__spacing__extra__large a__spacing__top__extra__large">
                        <p className="a__spacing__mini text-left">
                            <label htmlFor="" className="csHelp__solution">
                                <span className="a__size__medium text-bold">
                                    Find more solutions
                                </span>
                            </label>
                        </p>
                        <section className="a__section a__spacing__none">
                            <form action="" className="csHelp__search">
                                <div className="a__search">
                                    <i className="a__icon a__icon__search"></i>
                                    <input type="search" className="a__input__text" maxLength="100" autoComplete="off" placeholder="" />
                                </div>
                            </form>
                        </section>
                    </div>
                    <p className="csHelp__breadcrumb mb-0">
                        <Link to="/">
                            Shipping and Delivery
                        </Link>&nbsp;
                        <span>›</span>
                        <Link to="/">
                            General Shipping Information
                        </Link>&nbsp;
                        <span>›</span>
                    </p>
                    <article className="csHelp__help">
                        <h1 className="csHelp__title">
                            Amazon And Our Planet
                        </h1>
                        <section>
                            <p className="csHelp--lead">
                            Amazon's operations continue but delivery times may be longer than usual.
                            </p>
                            <p className="p-bottom">Last updated on May 18, 2021.</p>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                Can I place an order? Will Amazon deliver the package?
                            </h2>
                            <p>
                                Yes, however, delivery times are longer than usual. Please avoid using delivery addresses for buildings that may be closed due to the current provisions (e.g. schools).
                            </p>
                            <p>
                                You can learn more about Amazon's actions to help customers, communities, and employees affected by COVID-19 on our blog, here:
                            </p>
                            <p>
                                <Link to="/">
                                    You can learn more about Amazon's actions to help customers, communities, and employees affected by COVID-19 on our blog, here:
                                </Link>
                            </p>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                What's the status of my order and delivery? Can I change the address on my order?
                            </h2>
                            <p>
                                You can track your order and deliveries from <Link to="/">Your Orders</Link> on Amazon.ca or the Amazon Mobile Shopping app. You can change the delivery address for an order until it ships. Once your order has shipped, you can find tracking information in your order details. If an order includes multiple items, each may have separate delivery dates and tracking information.
                            </p>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                Why are some items, Prime and Non-Prime, taking longer to ship?
                            </h2>
                            <p>
                                In some cases, supply chain challenges and mandatory health and safety restrictions related to the COVID-19 pandemic are affecting our shipping and delivery. However, we are committed to free shipping all year. We continue to make updates to our logistics, transportation, supply chain, and other processes, while adhering to extensive health and safety measures to protect our associates as they pick, pack and ship products, to meet our demand and improve delivery speeds. We’ve also added capacity in our network and hired employees to supplement our current workforce.
                            </p>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                Can I still make returns?
                            </h2>
                            <p>
                                Yes, we're still processing returns. To start a return and learn more about returns, please visit the <Link to="/">Online Returns Centre</Link>.
                            </p>
                        </section>
                        <section>
                            <h2>
                                Is it safe to receive orders?
                            </h2>
                            <p>
                                Health Canada maintains guidance on COVID-19 prevention and risks as well as its main modes of transmission.
                            </p>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                What is Amazon doing about price gouging?
                            </h2>
                            <p>
                                There is no place for price gouging on Amazon. We are working to ensure that no one artificially raises prices on basic need products during a global health crisis and have blocked or removed thousands of items, in line with our long-standing policy. We actively monitor our store and remove offers that violate our policy.
                            </p>
                            <p>
                                You can submit a pricing concern to us by clicking Report incorrect product information on the product detail page, then select Other product details, then Price issue. While we are not able to respond directly to all reports, we appreciate your feedback.
                            </p>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                What is Amazon doing to keep customers and employees safe?
                            </h2>
                            <p>
                                We prioritize the safety and health of our employees and have invested $11.5 billion USD globally to provide a safe workplace, which is why at the onset of the pandemic we moved quickly to make more than 150 COVID-19 related process changes. We swiftly introduced mandatory masks and personal protective equipment in all of our fulfillment centres, sort centres and delivery stations, temperature screening, enhanced cleaning, and we staggered shifts and start times to make sure social distancing was happening. We also redeployed team members from their typical roles to act as safety ambassadors to perform critical COVID-related efforts.
                            </p>
                            <p>
                                Learn more about what we are doing to ensure the safety and support of our customers, communities, and employees during this difficult time on the <Link to="/">Amazon Day 1 blog</Link>.
                            </p>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                Is it possible to reduce contact with drivers when they deliver my orders?
                            </h2>
                            <p>
                                Yes. Amazon's delivery partners have been advised to reduce contact with customers by placing packages at the customer's doorstep and stepping back. If an ID check is required, these are now performed at a distance.
                            </p>
                            <p>
                                In some cases, you can also choose a safe location where the driver can leave your package if you are not able to answer the door.
                            </p>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                Are Amazon Pickup locations available for delivery?
                            </h2>
                            <p>
                                Yes, we are working with location partners to ensure that where possible Amazon Hub Locker and Pickup Points remain available. If the Locker you chose for delivery closes unexpectedly, you will be notified so that your parcel can be redirected to a home address or you can cancel your order for a refund. If your preferred location is temporarily unavailable, you can search for available locations <Link to="/">here</Link>.
                            </p>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                Is Amazon still delivering Large and Bulky items?
                            </h2>
                            <p>
                                Yes. Amazon's delivery partners have been advised to reduce contact with customers by placing packages at the customer's doorstep and stepping back. Out of an abundance of caution, we are also pausing in-home delivery and services until further notice.
                            </p>
                        </section>
                        <section className="a__box__group a__spacing__top__base">
                            <div className="a__box a__width__extra__large text-left">
                                <div className="a__box__inner">
                                    <p>
                                        Was this information helpful?
                                    </p>
                                    <CancelBtnLink
                                        text={"Yes"}
                                    />
                                    <CancelBtnLink
                                        text={"No"}
                                    />
                                </div>
                            </div>
                        </section>
                    </article>
                </section>
                <section className="csHelp__sidebar">
                    <section className="csHelp__sidebarModule">
                        <section className="csHelp__sidebarModule--inner">
                            <span className="a__color__state">‹</span>&nbsp;
                            <Link to="/">All Help Topics</Link>
                        </section>
                        <section className="csHelp__sidebarModule--inner">
                            <h3>General Shipping Information</h3>
                            <ul className="csHelp__navTopics">
                                <li>
                                    <Link to="/customer-display">FAQs about orders and the COVID-19 virus</Link>
                                </li>
                                <li>
                                    <Link to="/customer-display">Fulfilled by Amazon</Link>
                                </li>
                                <li>
                                    <Link to="/customer-display">International Shipping</Link>
                                </li>
                                <li>
                                    <Link to="/customer-display">Replace a Missing Packing Slip</Link>
                                </li>
                                <li>
                                    <Link to="/customer-display">Packaging Programs</Link>
                                </li>
                                <li>
                                    <Link to="/customer-display">How are Shipping and Delivery Dates Calculated?</Link>
                                </li>
                                <li>
                                    <Link to="/customer-display">Shipping to Prisons</Link>
                                </li>
                                <li>
                                    <Link to="/customer-display">Shipping to Remote Locations in Canada</Link>
                                </li>
                                <li>
                                    <Link to="/customer-display">Two-Day Shipping within Canada</Link>
                                </li>
                                <li className="csHelp__navTopicLink--selected">Amazon Certified Frustration-Free Packaging</li>
                                <li>
                                    <Link to="/customer-display">Sign for an Order</Link>
                                </li>
                                <li>
                                    <Link to="/customer-display">Amazon Photo on Delivery</Link>
                                </li>
                                <li>
                                    <Link to="/customer-display">About Deliveries Shipped with Amazon</Link>
                                </li>
                            </ul>
                        </section>
                    </section>
                    <section className="csHelp__sidebarModule a__section">
                        <div className="csHelp__sidebarModule--inner">
                            <h3>
                                Quick solutions
                            </h3>
                            <section className="row mx-0 align-items-center a__spacing__micro">
                                <section className="csHelp__sidebarThumbnail col-4">
                                    <Link to="/">
                                        <img src={your_orders_box} className="csHelp__sidebarImg" alt="Your Orders" title="Your Orders"/>
                                    </Link>
                                </section>
                                <section className="col-8 px-0">
                                    <Link to="/">
                                        <p className="mb-0 a__color__base a__size__base">
                                            Your Orders
                                        </p>
                                        <p className="a__size__small a__color__tertiary">
                                            Track or cancel orders
                                        </p>
                                    </Link>
                                </section>
                            </section>
                            <section className="row mx-0 align-items-center a__spacing__micro">
                                <section className="csHelp__sidebarThumbnail col-4">
                                    <Link to="/">
                                        <img src={return_and_refunds_box} className="csHelp__sidebarImg" alt="Returns &amp; refunds" title="Returns &amp; refunds"/>
                                    </Link>
                                </section>
                                <section className="col-8 px-0">
                                    <Link to="/">
                                        <p className="mb-0 a__color__base a__size__base">
                                            Returns &amp; refunds
                                        </p>
                                        <p className="a__size__small a__color__tertiary">
                                            Exchange or return items
                                        </p>
                                    </Link>
                                </section>
                            </section>
                            <section className="row mx-0 align-items-center a__spacing__micro">
                                <section className="csHelp__sidebarThumbnail col-4">
                                    <Link to="/">
                                        <img src={prime_clear_bg} className="csHelp__sidebarImg" alt="Manage Prime" title="Manage Prime"/>
                                    </Link>
                                </section>
                                <section className="col-8 px-0">
                                    <Link to="/">
                                        <p className="mb-0 a__color__base a__size__base">
                                            Manage Prime
                                        </p>
                                        <p className="a__size__small a__color__tertiary">
                                            Cancel or view benefits
                                        </p>
                                    </Link>
                                </section>
                            </section>
                            <section className="row mx-0 align-items-center a__spacing__micro">
                                <section className="csHelp__sidebarThumbnail col-4">
                                    <Link to="/">
                                        <img src={payments_clear_bg} className="csHelp__sidebarImg" alt="Payment Settings" title="Payment Settings"/>
                                    </Link>
                                </section>
                                <section className="col-8 px-0">
                                    <Link to="/">
                                        <p className="mb-0 a__color__base a__size__base">
                                            Payment Settings
                                        </p>
                                        <p className="a__size__small a__color__tertiary">
                                            Add or edit payment methods
                                        </p>
                                    </Link>
                                </section>
                            </section>
                            <section className="row mx-0 align-items-center a__spacing__micro">
                                <section className="csHelp__sidebarThumbnail col-4">
                                    <Link to="/">
                                        <img src={gateway_carrier} className="csHelp__sidebarImg" alt="Carrier Info" title="Carrier Info"/>
                                    </Link>
                                </section>
                                <section className="col-8 px-0">
                                    <Link to="/">
                                        <p className="mb-0 a__color__base a__size__base">
                                            Carrier Info
                                        </p>
                                        <p className="a__size__small a__color__tertiary">
                                            Shipping carrier information
                                        </p>
                                    </Link>
                                </section>
                            </section>
                            <section className="row mx-0 align-items-center a__spacing__micro">
                                <section className="csHelp__sidebarThumbnail col-4">
                                    <Link to="/">
                                        <img src={profile} className="csHelp__sidebarImg" alt="Account Settings" title="Account Settings"/>
                                    </Link>
                                </section>
                                <section className="col-8 px-0">
                                    <Link to="/">
                                        <p className="mb-0 a__color__base a__size__base">
                                            Account Settings
                                        </p>
                                        <p className="a__size__small a__color__tertiary">
                                            Change email or password
                                        </p>
                                    </Link>
                                </section>
                            </section>
                        </div>
                    </section>
                </section>
            </section>
        </main>
    )

    return (
        <Layout>
            <CovidPage/>
        </Layout>
    )
}

export default Covid19
