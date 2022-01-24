import React from 'react'
import { Link } from 'react-router-dom'

import { CancelBtnLink } from '../../components/UI/Button'

import your_orders_box from '../../images/your-orders-box.png'
import return_and_refunds_box from '../../images/return-and-refunds-box.png'
import prime_clear_bg from '../../images/prime-clear-bg.png'
import payments_clear_bg from '../../images/payments-clear-bg.png'
import gateway_carrier from '../../images/gateway-carrier.png'
import profile from '../../images/profile.png'

import Layout from '../../components/Layout'

const PrivacyNotice = () => {

    const CovidPage = () => (
        <main className="csHelp">
            <header className="csHelp__header">
                <div className="row">
                    <h1 className="col-9 csHelp__headerTitle">
                        <Link to="/help-customer-service" className="csHelp__headerTitleLink">
                            Help and Customer Service
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
                            Security and Privacy
                        </Link>&nbsp;
                        <span>›</span>&nbsp;
                    </p>
                    <article className="csHelp__help">
                        <h1 className="csHelp__title">
                            Interest-Based Ads
                        </h1>
                        <section>
                            <p className="csHelp--lead"></p>
                        </section>
                        <p>
                            On both Amazon-owned and operated sites and unaffiliated sites, Amazon displays interest-based advertising using information you make available to us when you interact with our sites, content, or services. Interest-based ads, also sometimes referred to as personalized or targeted ads, are displayed to you based on information from activities such as purchasing on our sites, visiting sites that contain Amazon content or ads, interacting with Amazon tools, or using our payment services. Click here for more information about the types of information that we gather. In providing interest-based ads, we follow the Canadian Self-Regulatory Principles for Online Behavioural Advertising developed by the Digital Advertising Alliance of Canada (a coalition of marketing, online advertising, and consumer advocacy organizations).
                        </p>
                        <p>
                            Like other online ad networks, we use cookies, web beacons (also known as action tags or single-pixel gifs), and other technologies (collectively, "cookies"). Cookies enable us to learn about what ads you see, what ads you click, and other actions you take on our sites and other sites. This allows us to provide you with more useful and relevant ads. For example, if we know what ads you are shown we can be careful not to show you the same ones repeatedly. We do not associate your interaction with unaffiliated sites with your identity in providing you with interest-based ads.
                        </p>
                        <p>
                            We do not provide any personal information to advertisers or to third party sites that display our interest-based ads. However, advertisers and other third-parties (including the ad networks, ad-serving companies, and other service providers they may use) may assume that users who interact with or click on a personalized ad or content are part of the group that the ad or content is directed towards (for example, users in Western Canada who bought or browsed for classical music). Also, some third-parties may provide us information about you (such as the sites where you have been shown ads or demographic information) from offline and online sources that we may use to provide you more relevant and useful advertising.
                        </p>
                        <p>
                            Advertisers or ad companies working on their behalf sometimes use technology to serve the ads that appear on our sites directly to your browser. They automatically receive your IP address when this happens. They may also use cookies to measure the effectiveness of their ads and to personalize ad content. We do not have access to or control over cookies or other features that advertisers and third party sites may use, and the information practices of these advertisers and third party websites are not covered by our Privacy Notice or this Interest-Based Ads page. Please contact them directly for more information about their privacy practices.
                        </p>
                        <section>
                            <h2 className="csHelp__title">
                                Advertising Preferences
                            </h2>
                            <p>
                                Amazon offers you choices about receiving interest-based ads from us. You can choose not to receive interest-based ads from Amazon. You will still see ads but they will not be personalized. Please visit your <Link to="/">Advertising Preferences</Link> page to learn how to set this preference.
                            </p>
                            <p>
                                You can also generally opt-out of receiving personalized ads from third party advertisers and ad networks who are members of the <Link to="/">Network Advertising Initiative (NAI)</Link> or who follow the <Link to="/">Digital Advertising Alliance of Canada's Self-Regulatory Principles for Online Behavioural Advertising</Link> by visiting the opt-out pages on the NAI website and DAAC website.
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
                            <h3>Security and Privacy</h3>
                            <ul className="csHelp__navTopics">
                                <li>
                                    <Link to="/">How Amazon Uses Your Personal Information</Link>
                                </li>
                                <li>
                                    <Link to="/customer-display">
                                        How Amazon Collects Your Personal Information
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/customer-display">
                                        How Amazon Protects Your Personal Information
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/customer-display">
                                        Manage Your Personal Information
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/customer-display">
                                        Request Your Personal Information
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/customer-display">
                                        Amazon &amp; My Personal Information
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/customer-display">
                                        Law Enforcement Information Requests
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/customer-display">
                                        <b>Interest-Based Ads</b>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/customer-display">
                                        Cookies Notice
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/customer-display">
                                        Amazon Information Request Reports
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/customer-display">
                                        Communications from Amazon.ca
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/customer-display">
                                        Legal Policies
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/customer-display">
                                        Your Security
                                    </Link>
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

export default PrivacyNotice
