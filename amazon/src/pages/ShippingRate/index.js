import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../components/Layout/index'

import { CancelBtnLink } from '../../components/UI/Button'

import your_orders_box from '../../images/your-orders-box.png'
import return_and_refunds_box from '../../images/return-and-refunds-box.png'
import prime_clear_bg from '../../images/prime-clear-bg.png'
import payments_clear_bg from '../../images/payments-clear-bg.png'
import gateway_carrier from '../../images/gateway-carrier.png'
import profile from '../../images/profile.png'

const ShippingRate = () => {

    const ShippingRatePage = () => (
        <>
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
                                Shipping Delivery
                            </Link>&nbsp;
                            <span>›</span>
                        </p>
                        <article className="csHelp__help">
                            <h1>
                                Shipping Rates &amp; Times
                            </h1>
                            <section>
                                <section className="csHelp__landingSection row mx-0">
                                    <section className="col-4">
                                        <h4>Shipping Rates</h4>
                                    </section>
                                    <section className="col-8">
                                        <ul className="linkFarm">
                                            <li>
                                                <span class="a__list__item">
                                                    <Link to="/" target="_self">
                                                        Determine Shipping Rates &amp; Times
                                                    </Link>
                                                </span>
                                            </li>
                                            <li>
                                                <span class="a__list__item">
                                                    <Link to="/" target="_self">
                                                        Same-Day and One-Day Delivery Rates
                                                    </Link>
                                                </span>
                                            </li>
                                        </ul>
                                    </section>
                                </section>
                                <section className="csHelp__landingSection row mx-0">
                                    <section className="col-4">
                                        <h4>Shipping Times</h4>
                                    </section>
                                    <section className="col-8">
                                        <ul className="linkFarm">
                                            <li>
                                                <span class="a__list__item">
                                                    <Link to="/" target="_self">
                                                        Shipping Times within Canada
                                                    </Link>
                                                </span>
                                            </li>
                                        </ul>
                                    </section>
                                </section>
                                <section className="csHelp__landingSection row mx-0">
                                    <section className="col-4">
                                        <h4>Delivery Rates and Times</h4>
                                    </section>
                                    <section className="col-8">
                                        <ul className="linkFarm">
                                            <li>
                                                <span class="a__list__item">
                                                    <Link to="/" target="_self">
                                                    Delivery Rates and Times Seller Shipping Rates and Times
                                                    </Link>
                                                </span>
                                            </li>
                                            <li>
                                                <span class="a__list__item">
                                                    <Link to="/" target="_self">
                                                        Shipping Rates and Times for Items Sold by a Third Party Seller and Fulfilled by Amazon from Outside Canada
                                                    </Link>
                                                </span>
                                            </li>
                                        </ul>
                                    </section>
                                </section>
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
                                <h3>Shipping and Delivery</h3>
                                <ul className="csHelp__navTopics">
                                    <li>
                                        <Link to="/customer-display">Shipping Rates &amp; Times</Link>
                                    </li>
                                    <li>
                                        <Link to="/customer-display">Amazon Prime</Link>
                                    </li>
                                    <li>
                                        <Link to="/customer-display">Shipping Options</Link>
                                    </li>
                                    <li>
                                        <Link to="/customer-display">Where's My Stuff?</Link>
                                    </li>
                                    <li>
                                        <Link to="/customer-display">General Shipping Information</Link>
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
        </>
    )
    
    return (
        <Layout>
            <ShippingRatePage />
        </Layout>
    )
}

export default ShippingRate
