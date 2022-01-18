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

const Covid19 = () => {

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
                        <Link to="/">
                            Legal Policies
                        </Link>&nbsp;
                        <span>›</span>
                    </p>
                    <article className="csHelp__help">
                        <h1 className="csHelp__title">
                            Amazon.ca Conditions of Use
                        </h1>
                        <section>
                            <p className="csHelp--lead"></p>
                            <p className="p__bottom">
                                <b>Last updated: October 15, 2020.</b>
                            </p>
                        </section>
                        <p>
                            Welcome to www.amazon.ca. Amazon.com.ca, Inc., and/or its affiliates ("Amazon.ca") provide Web site features and other products and services to you when you visit or shop at Amazon.ca, use Amazon.ca products or services, use Amazon.ca applications for mobile, or use software provided by Amazon.ca in connection with any of the foregoing (collectively, "Amazon.ca Services"). Amazon.ca provides the Amazon.ca Services subject to the following conditions.
                        </p>
                        <p className="p__bottom">
                            <b>By using Amazon.ca Services, you agree to these conditions. Please read them carefully.</b>
                        </p>
                        <p>
                            We offer a wide range of Amazon.ca Services, and sometimes additional terms may apply. When you use an Amazon.ca Service, you will also be subject to the guidelines, terms and agreements applicable to that Amazon.ca Service ("Service Terms"). If these Conditions of Use are inconsistent with the Service Terms, those Service Terms will control. We offer a wide range of Amazon.ca Services, and sometimes additional terms may apply. When you use an Amazon.ca Service (for example, Your Profile, Gift Cards, Amazon Video, Your Media Library, Amazon devices, or <Link to="/">Amazon applications</Link>), you will also be subject to the guidelines, terms and agreements applicable to that Amazon.ca Service ("Service Terms"). If these Conditions of Use are inconsistent with the Service Terms, those Service Terms will control.
                        </p>
                        <section>
                            <h2 className="csHelp__title">
                                PRIVACY
                            </h2>
                            <p>
                                Please review our <Link to="/">Privacy Notice</Link>, which also governs your use of the Amazon.ca Services, to understand our practices.
                            </p>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                ELECTRONIC COMMUNICATIONS
                            </h2>
                            <p>
                                When you use any Amazon.ca Service, or send emails, text messages, and other communications from your desktop or mobile device to us, you may be communicating with us electronically. You consent to receive communications from us electronically, such as emails, texts, mobile push notices, or notices and messages on this site or through the other Amazon.ca Services, such as our Message Centre, and you can retain copies of these communications for your records. You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing
                            </p>
                        </section>
                        <section>
                            <h2>
                                COPYRIGHT
                            </h2>
                            <p>
                                All content included in or made available through any Amazon.ca Service, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software is the property of Amazon.ca or its content suppliers and protected by Canadian and international copyright laws. The compilation of all content included in or made available through any Amazon.ca Service is the exclusive property of Amazon.ca and protected by Canadian and international copyright laws.
                            </p>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                TRADEMARKS
                            </h2>
                            <p>
                                <Link to="/">Click here to see a non-exhaustive list of Amazon trademarks</Link>. In addition, graphics, logos, page headers, button icons, scripts, and service names included in or made available through any Amazon.ca Service are trademarks or trade dress of Amazon.com, Inc., or its affiliates, in the United States and other countries. Amazon.com, Inc.'s or its affiliates trademarks and trade dress may not be used in connection with any product or service that is not Amazon.com, Inc.'s or its affiliates', in any manner that is likely to cause confusion among customers, or in any manner that disparages or discredits Amazon.com, Inc. or its affiliates. All other trademarks not owned by Amazon.com, Inc. or its affiliates that appear in any Amazon.ca Service are the property of their respective owners, who may or may not be affiliated with, connected to, or sponsored by Amazon.com, Inc. or its affiliates
                            </p>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                PATENTS
                            </h2>
                            <p>
                                One or more patents owned by Amazon.ca apply to the Amazon.ca Services and to the features and services accessible via the Amazon.ca Services. Portions of the Amazon Services operate under licence of one or more patents. <Link to="/">Click here to see a non-exhaustive list of applicable Amazon.ca patents and applicable licenced patents.</Link>
                            </p>
                            <p>
                                Learn more about what we are doing to ensure the safety and support of our customers, communities, and employees during this difficult time on the <Link to="/">Amazon Day 1 blog</Link>.
                            </p>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                LICENCE AND ACCESS
                            </h2>
                            <p>
                                Subject to your compliance with these Conditions of Use and any Service Terms, and your payment of any applicable fees, Amazon.ca or its content providers grant you a limited, non-exclusive, non-transferable, non-sublicensable licence to access and make personal and non-commercial use of the Amazon.ca Services. This licence does not include any resale or commercial use of any Amazon.ca Service or its contents; any collection and use of any product listings, descriptions, or prices; any derivative use of any Amazon.ca Service or its contents; any downloading copying, or other use of account information for the benefit of any third party; or any use of data mining, robots, or similar data-gathering and extraction tools. All rights not expressly granted to you in these Conditions of Use or any Service Terms are reserved and retained by Amazon.ca or its licensors, suppliers, publishers, rightsholders, or other content providers. No Amazon.ca Service, nor any part of any Amazon.ca Service, may be reproduced, duplicated, copied, sold, resold, visited, or otherwise exploited for any commercial purpose without the express written consent of Amazon.ca. You may not frame or utilize framing techniques to enclose any trademark, logo, or other proprietary information (including images, text, page layout, or form) of Amazon.ca without express written consent. You may not use any meta tags or any other "hidden text" utilizing Amazon.ca's name or trademarks without the express written consent of Amazon.ca. You may not misuse the Amazon.ca Services. You may use the Amazon.ca Services only as permitted by law. The licences granted by Amazon.ca terminate if you do not comply with these Conditions of Use or any Service Terms.
                            </p>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                YOUR ACCOUNT
                            </h2>
                            <p>
                                You may need your own Amazon account to use certain Amazon.ca Services, and you may be required to be logged in to the account and have a valid payment method associated with it. If there is a problem charging your selected payment method, we may charge any other valid payment method associated with your account. Click <Link to="/">here</Link> to manage your payment options. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account, and you agree to accept responsibility for all activities that occur under your account or password. Amazon.ca does sell products for children, but it sells them to adults who can purchase with a credit card or other permitted payment method. If you are under the age of majority in your province or territory of residence, you may use the Amazon.ca Services only with involvement of a parent or guardian. Amazon.ca reserves the right to refuse service, terminate accounts, terminate your rights to use Amazon.ca Services, remove or edit content, or cancel orders in its sole discretion.
                            </p>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                REVIEWS, COMMENTS, COMMUNICATIONS, AND OTHER CONTENT
                            </h2>
                            <p>
                                You may post reviews, comments, photos, videos, and other content; send e-cards and other communications; and submit suggestions, ideas, comments, questions, or other information, so long as the content is not illegal, obscene, threatening, defamatory, invasive of privacy, infringing of intellectual property rights (including publicity rights), or otherwise injurious to third parties or objectionable, and does not consist of or contain software viruses, political campaigning, commercial solicitation, chain letters, mass mailings, or any form of "spam" or unsolicited commercial electronic messages. You may not use a false email address, impersonate any person or entity, or otherwise mislead as to the origin of a card or other content. Amazon.ca reserves the right (but not the obligation) to remove or edit such content, but does not regularly review posted content.
                            </p>

                            <p>
                                If you do post content or submit material, and unless we indicate otherwise, you grant Amazon.ca a nonexclusive, royalty-free, perpetual, irrevocable, and fully sublicencable right to use, reproduce, modify, adapt, publish, perform, translate, create derivative works from, distribute and display such content throughout the world in any media. You grant Amazon.ca and sublicencees the right to use the name that you submit in connection with such content, if they choose. You represent and warrant that you own or otherwise control all of the rights to the content that you post; that the content is accurate; that use of the content you supply does not violate this policy and will not cause injury to any person or entity; and that you will indemnify Amazon.ca for all claims resulting from content you supply. Amazon.ca has the right but not the obligation to monitor and edit or remove any activity or content. Amazon.ca takes no responsibility and assumes no liability for any content posted by you or any third party.
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
                            <h3>Legal Policies</h3>
                            <ul className="csHelp__navTopics">
                                <li><b>Amazon.ca Conditions of Use</b></li>
                                <li>
                                    <Link to="/customer-display">Amazon.ca Privacy Notice</Link>
                                </li>
                                <li>
                                    <Link to="/customer-display">
                                        Non-Exhaustive List of Applicable Amazon/Affiliate Patents and Applicable Licensed Patents
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/customer-display">
                                        Non-Exhaustive List of Amazon Trademarks
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/customer-display">
                                        Amazon.ca Gift Card and Electronic Message Customization Service Terms
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

export default Covid19
