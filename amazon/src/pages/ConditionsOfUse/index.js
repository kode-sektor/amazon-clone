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
                        <section>
                            <h2 className="csHelp__title">
                                INTELLECTUAL PROPERTY COMPLAINTS
                            </h2>
                            <p>
                                Amazon.ca respects the intellectual property of others. If you believe that your intellectual property rights are being infringed, please follow our <Link to="/">Notice and Procedure for Making Claims of Copyright Infringement.</Link>
                            </p>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                RISK OF LOSS
                            </h2>
                            <p>
                                Risk of loss and title for items purchased from Amazon.ca pass to you upon our delivery to the carrier or, if such items must cross an international border, then risk of loss and title pass to you when they clear customs in Canada.
                            </p>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                RETURNS, REFUNDS AND TITLE
                            </h2>
                            <p>
                                Amazon.ca does not take title to returned items until the item arrives at our fulfillment centre. At our discretion, a refund may be issued without requiring a return. In this situation, Amazon.ca does not take title to the refunded item. If we receive items that do not meet the requirements of our return policies, including items returned past the eligible return window, opened items or damaged items, we may charge a restocking fee or issue a partial refund. Details about the restocking fees and partial refunds can be found on our <Link to="/">Refunds help page</Link>. For more information about our returns and refunds in general, please see our O<Link to="/">nline Returns Centre</Link>.
                            </p>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                PRODUCT DESCRIPTIONS
                            </h2>
                            <p>
                                Amazon.ca attempts to be as accurate as possible. However, Amazon.ca does not warrant that product descriptions or other content of any Amazon.ca Service is accurate, complete, reliable, current, or error-free. If a product offered by Amazon.ca itself is not as described, your sole remedy is to return it in unused condition.
                            </p>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                PRICING
                            </h2>
                            <p>
                                "List Price" means the suggested retail price of a product as provided by a manufacturer, supplier, or seller. We regularly check List Prices against prices recently found on Amazon.ca and other retailers. Certain products may have a "Was Price" displayed, which is determined using recent price history of the product on Amazon.ca.
                            </p>
                            <p>
                                With respect to items sold by Amazon.ca, we cannot confirm the price of an item until you offer to purchase the item by placing an order. Despite our best efforts, a small number of the items in our catalogue may be mispriced. If the correct price of an item sold by Amazon.ca is higher than our stated price, we will, at our discretion, either contact you for instructions before shipping or cancel your order and notify you of such cancellation. Other merchants may follow different policies in the event of a mispriced item.
                            </p>
                            <p>
                                We generally do not charge your credit card until after your order has entered the shipping process or, for digital products, until we make the digital product available to you.
                            </p>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                APP PERMISSIONS
                            </h2>
                            <p>
                                When you use apps created by Amazon.ca, such as the Amazon App or Kindle App, you may grant certain permissions to us for your device. Most mobile devices provide you with information about these permissions.
                            </p>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                SANCTIONS AND EXPORT POLICY
                            </h2>
                            <p>
                                You may not use any Amazon.ca Service if you are the subject of U.S. sanctions or of sanctions consistent with U.S. law imposed by the governments of the country where you are using Amazon.ca Services. You must comply with all U.S. or other export and re-export restrictions that may apply to goods, software (including Amazon Software), technology, and services.
                            </p>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                OTHER BUSINESSES
                            </h2>
                            <p>
                                Parties other than Amazon.ca operate stores, provide services or software, or sell product lines through the Amazon.ca Services. In addition, we provide links to the sites of affiliated companies and certain other businesses. If you purchase any of the products or services offered by these businesses or individuals, you are purchasing directly from those third parties, not from Amazon. We are not responsible for examining or evaluating, and we do not warrant the offerings of, any of these businesses or individuals (including the content of their Web sites). Amazon.ca does not assume any responsibility or liability for the actions, product, and content of all these and any other third parties. You should carefully review their privacy statements and other conditions of use.
                            </p>
                            <p>
                                THE LAWS OF CERTAIN JURISDICTIONS, INCLUDING QUEBEC'S CONSUMER PROTECTION ACT, DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR CONDITIONS OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE BELOW DISCLAIMERS, EXCLUSIONS, OR LIMITATIONS MIGHT NOT APPLY TO YOU, AND YOU MIGHT HAVE ADDITIONAL RIGHTS.
                            </p>
                            <p>
                                THE AMAZON.CA SERVICES AND ALL INFORMATION, CONTENT, MATERIALS, PRODUCTS (INCLUDING SOFTWARE) AND OTHER SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THE AMAZON SERVICES ARE PROVIDED BY AMAZON.CA ON AN "AS IS" AND "AS AVAILABLE" BASIS, UNLESS OTHERWISE SPECIFIED IN WRITING. AMAZON.CA MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THE AMAZON.CA SERVICES OR THE INFORMATION, CONTENT, MATERIALS, PRODUCTS (INCLUDING SOFTWARE) OR OTHER SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THE AMAZON.CA SERVICES, UNLESS OTHERWISE SPECIFIED IN WRITING. YOU EXPRESSLY AGREE THAT YOUR USE OF THE AMAZON.CA SERVICES IS AT YOUR SOLE RISK.
                            </p>
                            <p>
                                TO THE FULL EXTENT PERMISSIBLE BY LAW, AMAZON.CA DISCLAIMS ALL WARRANTIES AND CONDITIONS, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. AMAZON.CA DOES NOT WARRANT THAT THE AMAZON.CA SERVICES, INFORMATION, CONTENT, MATERIALS, PRODUCTS (INCLUDING SOFTWARE) OR OTHER SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THE AMAZON.CA SERVICES; ITS SERVERS OR ELECTRONIC COMMUNICATIONS SENT FROM AMAZON.CA ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. TO THE FULL EXTENT PERMISSIBLE BY LAW, AMAZON.CA WILL NOT BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING FROM THE USE OF ANY AMAZON.CA SERVICE OR FROM ANY INFORMATION, CONTENT, MATERIALS, PRODUCTS (INCLUDING SOFTWARE) OR OTHER SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH ANY AMAZON.CA SERVICE, INCLUDING, BUT NOT LIMITED TO, DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, AND CONSEQUENTIAL DAMAGES, UNLESS OTHERWISE SPECIFIED IN WRITING.
                            </p>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                DISPUTES
                            </h2>
                            <p>
                                (Not applicable to Quebec consumers) <b>Any dispute or claim relating in any way to your use of any Amazon.ca Service, or to any products or services sold or distributed by Amazon.ca or through Amazon.ca Services will be resolved by binding arbitration, rather than in court</b>, except that you may assert claims in small claims court if your claims qualify. The U.S. Federal Arbitration Act and U.S. federal arbitration law apply to this agreement.
                            </p>
                            <p>
                                <b>
                                    There is no judge or jury in arbitration, and court review of an arbitration award is limited. However, an arbitrator can award on an individual basis the same damages and relief as a court (including injunctive and declaratory relief or statutory damages), and must follow the terms of these Conditions of Use as a court would.
                                </b>
                            </p>
                            <p>
                                To begin an arbitration proceeding, you must send a letter requesting arbitration and describing your claim to our registered agent Corporation Service Company, 300 Deschutes Way SW, Suite 304, Tumwater, WA 98501. The arbitration will be conducted by the American Arbitration Association (AAA) under its rules, including the AAA's Supplementary Procedures for Consumer-Related Disputes. The AAA's rules are available at www.adr.org or by calling 1-800-778-7879. Payment of all filing, administration and arbitrator fees will be governed by the AAA's rules. We will reimburse those fees for claims totalling less than $10,000 unless the arbitrator determines the claims are frivolous. Likewise, Amazon.ca will not seek attorneys' fees and costs in arbitration unless the arbitrator determines the claims are frivolous. You may choose to have the arbitration conducted by telephone, based on written submissions, or in person in the county where you live or at another mutually agreed location.
                            </p>
                            <p>
                                <b>We each agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated or representative action</b>. If for any reason a claim proceeds in court rather than in arbitration <b>we each waive any right to a jury trial</b>. We also both agree that you or we may bring suit in court to enjoin infringement or other misuse of intellectual property rights.
                            </p>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                APPLICABLE LAW
                            </h2>
                            <p>
                                (Not applicable to Quebec consumers) By using any Amazon.ca Service, you agree that the U.S. Federal Arbitration Act, applicable U.S. federal law, and the laws of the state of Washington, United States, without regard to principles of conflict of laws, will govern these Conditions of Use and any dispute of any sort that might arise between you and Amazon.ca.
                            </p>
                            <p>
                                For Quebec consumers: These Conditions of Use and any dispute of any sort that might arise between you and Amazon.ca shall be governed by the laws of the Province of Quebec, without reference to its conflict of laws provisions, and the laws of Canada applicable therein, and any disputes will be submitted to the courts of competent jurisdiction of the District of Montreal (Quebec).
                            </p>
                            <p>
                                Please review our other policies, such as our pricing <Link to="/">policy</Link>, posted on the Amazon.ca site. These policies also govern your use of Amazon.ca Services. We reserve the right to make changes to our site, policies, Service Terms, and these Conditions of Use at any time. If any of these conditions shall be deemed invalid, void, or for any reason unenforceable, that condition shall be deemed severable and shall not affect the validity and enforceability of any remaining condition.
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
