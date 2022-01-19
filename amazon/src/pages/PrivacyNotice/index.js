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
                        <Link to="/">
                            Legal Policies
                        </Link>&nbsp;
                        <span>›</span>
                    </p>
                    <article className="csHelp__help">
                        <h1 className="csHelp__title">
                            Amazon.ca Privacy Notice
                        </h1>
                        <section>
                            <p className="csHelp--lead"></p>
                            <p className="p__bottom">
                                <b>Last updated: May 14, 2021.</b> <Link to="/">Click here</Link> to see prior version.
                            </p>
                        </section>
                        <p>
                            We know that you care how information about you is used and shared, and we appreciate your trust that we will do so carefully and sensibly. This Privacy Notice describes how Amazon.com.ca, Inc. and its affiliates (collectively "Amazon") collect and process your personal information through Amazon websites, devices, products, services, online and physical stores, and applications that reference this Privacy Notice (together "Amazon Services"). By using Amazon Services you are consenting to the practices described in this Privacy Notice.
                        </p>
                        <p></p>
                        <ul>
                            <li>
                                <span className="a__list__item">
                                    <Link to="/">What Personal Information About Customers Does Amazon Collect?</Link>
                                </span>
                            </li>
                            <li>
                                <span className="a__list__item">
                                    <Link to="/">For What Purposes Does Amazon Use Your Personal Information?</Link>
                                </span>
                            </li>
                            <li>
                                <span className="a__list__item">
                                    <Link to="/">What About Cookies and Other Identifiers?</Link>
                                </span>
                            </li>
                            <li>
                                <span className="a__list__item">
                                    <Link to="/">Does Amazon Share Your Personal Information?</Link>
                                </span>
                            </li>
                            <li>
                                <span className="a__list__item">
                                    <Link to="/">How Secure Is Information About Me?</Link>
                                </span>
                            </li>
                            <li>
                                <span className="a__list__item">
                                    <Link to="/">What About Advertising?</Link>
                                </span>
                            </li>
                            <li>
                                <span className="a__list__item">
                                    <Link to="/">What Information Can I Access?</Link>
                                </span>
                            </li>
                            <li>
                                <span className="a__list__item">
                                    <Link to="/">What Choices Do I Have?</Link>
                                </span>
                            </li>
                            <li>
                             <span className="a__list__item">
                                 <Link to="/">Are Children Allowed to Use Amazon Services?</Link>
                                </span>
                            </li>
                            <li>
                                <span className="a__list__item">
                                    <Link to="/">Conditions of Use, Notices, and Revisions</Link>
                                </span>
                            </li>
                            <li>
                                <span className="a__list__item">
                                    <Link to="/">Related Practices and Information</Link>
                                </span>
                            </li>
                            <li>
                                <span className="a__list__item">
                                    <Link to="/">Examples of Information Collected</Link>
                                </span>
                            </li>
                            </ul>
                        <section>
                            <h2 className="csHelp__title">
                                What Personal Information About Customers Does Amazon Collect?
                            </h2>
                            <p>
                                We collect your personal information in order to provide and continually improve our products and services.
                            </p>
                            <p>Here are the types of personal information we collect:</p>
                            <p></p>
                            <ul>
                                <li>
                                    <span className="a__list__item">
                                        <strong>Information You Give Us.</strong> We receive and store any information you provide in relation to Amazon Services. <span><Link to="/" target="_self">Click here</Link> to see examples of what we collect.</span> You can choose not to provide certain information, but then you might not be able to take advantage of many of our Amazon Services.
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        <strong>Automatic Information.</strong> We automatically collect and store certain types of information about your use of Amazon Services, including information about your interaction with content and services available through Amazon Services. Like many websites, we use "cookies" and other unique identifiers, and we obtain certain types of information when your web browser or device accesses Amazon Services and other content served by or on behalf of Amazon on other websites. <span><Link className="same_window" to="/" target="_self">Click here</Link> to see examples of what we collect.</span>
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        <strong>Information from Other Sources.</strong> We might receive information about you from other sources, such as updated delivery and address information from our carriers, which we use to correct our records and deliver your next purchase more easily. <span><Link className="same_window" to="/" target="_self">Click here</Link> to see additional examples of the information we receive.</span>
                                    </span>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                For What Purposes Does Amazon Use Your Personal Information?
                            </h2>
                            <p>
                                We use your personal information to operate, provide, develop, and improve the products and services that we offer our customers. These purposes include:
                            </p>
                            <p></p>
                            <ul>
                                <li>
                                    <span className="a__list__item">
                                        <strong>Purchase and delivery of products and services.</strong> We use your personal information to take and handle orders, deliver products and services, process payments, and communicate with you about orders, products and services, and promotional offers.
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        <strong>Provide, troubleshoot, and improve Amazon Services.</strong> We use your personal information to provide functionality, analyze performance, fix errors, and improve the usability and effectiveness of the Amazon Services.
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        <strong>Recommendations and personalization.</strong> We use your personal information to recommend features, products, and services that might be of interest to you, identify your preferences, and personalize your experience with Amazon Services.
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        <strong>Provide voice, image and camera services.</strong> When you use our voice, image and camera services, we use your voice input, images, videos, and other personal information to respond to your requests, provide the requested service to you, and improve our services. <br />
                                        <span>
                                            For more information about Alexa voice services, <Link to="/" target="_blank">click here</Link>.
                                        </span>
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        <strong>Comply with legal obligations.</strong> In certain cases, we collect and use your personal information to comply with laws. For instance, we collect from sellers information regarding place of establishment and bank account information for identity verification and other purposes.
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        <strong>Communicate with you.</strong> We use your personal information to communicate with you in relation to Amazon Services via different channels (e.g., by phone, email, chat).
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        <strong>Advertising.</strong> We use your personal information to display interest-based ads for features, products, and services that might be of interest to you. We do not use information that personally identifies you to display interest-based ads. To learn more, please read our <Link to="/">Interest-Based Ads policy.</Link>
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        <strong>Fraud Prevention and Credit Risks.</strong> We use personal information to prevent and detect fraud and abuse in order to protect the security of our customers, Amazon, and others. We may also use scoring methods to assess and manage credit risks.
                                    </span>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h2>
                                What About Cookies and Other Identifiers?
                            </h2>
                            <p>
                                To enable our systems to recognize your browser or device and to provide and improve Amazon Services, we use cookies and other identifiers. For more information about cookies and how we use them, please read our <Link to="/">Cookies Notice.</Link>
                            </p>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                Does Amazon Share Your Personal Information?
                            </h2>
                            <p>
                                Information about our customers is an important part of our business, and we are not in the business of selling our customers' personal information to others. We share customers' personal information only as described below and with subsidiaries Amazon.com, Inc. controls that either are subject to this Privacy Notice or follow practices at least as protective as those described in this Privacy Notice.
                            </p>
                            <p></p>
                            <ul>
                                <li>
                                    <span className="a__list__item">
                                        <strong>Transactions involving Third Parties.</strong> We make available to you services, products, applications, or skills provided by third parties for use on or through Amazon Services. For example, you can order products from third parties through our stores, download applications from third-party application providers from our App Store, and enable third-party skills through our Alexa services. We also offer services or sell product lines jointly with third-party businesses, such as co-branded credit cards. You can tell when a third party is involved in your transactions, and we share customers’ personal information related to those transactions with that third party.
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        <strong>Third-Party Service Providers.</strong> We employ other companies and individuals to perform functions on our behalf. Examples include fulfilling orders for products or services, delivering packages, sending postal mail and email, removing repetitive information from customer lists, analyzing data, providing marketing assistance, providing search results and links (including paid listings and links), processing payments, transmitting content, scoring, assessing and managing credit risk, and providing customer service. These third-party service providers have access to personal information needed to perform their functions, but may not use it for other purposes.
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        <strong>Recommendations and personalization.</strong> We use your personal information to recommend features, products, and services that might be of interest to you, identify your preferences, and personalize your experience with Amazon Services.
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        <strong>Business Transfers.</strong> As we continue to develop our business, we might sell or buy other businesses or services. In such transactions, customer information generally is one of the transferred business assets but remains subject to the promises made in any pre-existing Privacy Notice (unless, of course, the customer consents otherwise). Also, in the unlikely event that Amazon.com.ca, Inc. or substantially all of its assets are acquired, customer information will of course be one of the transferred assets.
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        <strong>Protection of Amazon and Others.</strong> We disclose account and other personal information when we believe disclosing is appropriate to comply with the law; enforce or apply our <Link to="/">Conditions of Use</Link> and other agreements; or protect the rights, property, or safety of Amazon, our users, or others. This includes exchanging information with other companies and organizations for fraud protection and credit risk reduction.
                                    </span>
                                </li>
                            </ul>
                            <p></p>
                            <p>
                                Other than as set out above, you will receive notice when personal information about you might be shared with third parties, and you will have an opportunity to choose not to share the information.
                            </p>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                How Secure Is Information About Me?
                            </h2>
                            <p>
                                We design our systems with your security and privacy in mind.
                            </p>
                            <ul>
                                <li>
                                    <span className="a__list__item">
                                        We work to protect the security of your personal information during transmission by using encryption protocols and software.
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        We follow the Payment Card Industry Data Security Standard (PCI DSS) when handling credit card data.
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        We maintain physical, electronic, and procedural safeguards in connection with the collection, storage, and disclosure of personal customer information. Our security procedures mean that we may occasionally request proof of identity before we disclose personal information to you.
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        Our devices offer security features to protect them against unauthorized access and loss of data. You can control these features and configure them based on your needs. <Link to="/">Click here</Link> for more information on how to manage the security settings of your device.
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        It is important for you to protect against unauthorized access to your password and to your computers, devices, and applications. Be sure to sign off when finished using a shared computer. <Link to="/">Click here</Link> for more information on how to sign off.
                                    </span>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                What About Advertising?
                            </h2>
                            <p></p>
                            <ul>
                                <li>
                                    <span className="a__list__item">
                                        <strong>Third-Party Advertisers and Links to Other Websites</strong> Amazon Services may include third-party advertising and links to other websites and apps. Third-party advertising partners may collect information about you when you interact with their content, advertising, and services. For more information about third-party advertising at Amazon, including interest-based ads, please read our <Link to="/">Interest-Based Ads policy</Link>. To adjust your advertising preferences, please go to the <Link to="/">Advertising Preferences</Link> page.
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        <strong>Use of Third-Party Advertising Services.</strong> We provide ad companies with information that allows them to serve you with more useful and relevant Amazon ads and to measure their effectiveness. We never share your name or other information that directly identifies you when we do this. Instead, we use an advertising identifier like a cookie or other device identifier. For example, if you have already downloaded one of our apps, we will share your advertising identifier and data about that event so that you will not be served an ad to download the app again. Some ad companies also use this information to serve you relevant ads from other advertisers. You can learn more about how to opt-out of interest-based advertising by going to the <Link to="/">Advertising Preferences</Link> page.
                                    </span>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                What Information Can I Access?
                            </h2>
                            <p>
                                You can access your information, including your name, address, payment options, profile information, Prime membership, household settings, and purchase history in the Your Account section of the website. <Link to="/">Click here</Link> for a list of examples that you can access.
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
                                <b>We each agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a className, consolidated or representative action</b>. If for any reason a claim proceeds in court rather than in arbitration <b>we each waive any right to a jury trial</b>. We also both agree that you or we may bring suit in court to enjoin infringement or other misuse of intellectual property rights.
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
                        <section>
                            <h2 className="csHelp__title">
                                OUR ADDRESS
                            </h2>
                            <p></p>
                            <pre>
                                Amazon.com.ca, Inc. <br />
                                &emsp; &emsp; P.O. Box 81226 <br />
                                &emsp; &emsp; Seattle, WA 98108-1226 <br />
                                &emsp; &emsp; USA
                            </pre>
                            <p></p>
                            <p>
                                <Link to="/" target="_blank">https://www.amazon.ca</Link>
                            </p>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                ADDITIONAL AMAZON SOFTWARE TERMS
                            </h2>
                            <p>
                                The following terms (“Software Terms”) apply to any software (including any updates or upgrades to the software) and any related documentation we make available to you in connection with Amazon.ca Services (the "Amazon Software").
                            </p>
                            <p>
                                <br />
                            </p>
                            <ol>
                                <li>
                                    <span className="a__list__item"> 
                                        <strong>Use of the Amazon Software</strong>. You may use Amazon Software solely for purposes of enabling you to use the Amazon.ca Services as provided by Amazon.ca, and as permitted by these Conditions of Use and any Service Terms. You may not incorporate any portion of the Amazon Software into other programs or compile any portion of it in combination with other programs, or otherwise copy (except to exercise rights granted in this section), modify, create derivative works of, distribute, assign any rights to, or licence the Amazon Software in whole or in part. All software used in any Amazon Service is the property of Amazon.ca or its software suppliers and is protected by Canadian and international copyright laws.
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        <strong>Use of Third Party Services</strong>. When you use the Amazon Software, you may also be using the services of one or more third parties, such as a wireless carrier or a mobile software provider. Your use of these third party services may be subject to the separate policies, terms of use, and fees of these third parties.
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        <strong>No Reverse Engineering</strong>. You may not reverse engineer, decompile or disassemble, tamper with, or bypass any security associated with the Amazon Software, whether in whole or in part.
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        <strong>Updates</strong>. We may offer automatic or manual updates to the Amazon Software at any time and without notice to you.
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        <strong>Export Regulations</strong>. You must comply with all export and re-export restrictions and regulations of the U.S. Department of Commerce, Foreign Affairs and International Trade Canada, and other U.S. and Canadian agencies and authorities that may apply to the Amazon Software.
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        <strong>Conflicts</strong>. In the event of any conflict between these Conditions of Use and any other Amazon or third-party terms applicable to any portion of Amazon Software, such as open-source licence terms, such other terms will control as to that portion of the Amazon Software and to the extent of the conflict.
                                    </span>
                                </li>
                            </ol>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                NOTICE AND PROCEDURE FOR MAKING CLAIMS OF INTELLECTUAL PROPERTY INFRINGEMENT
                            </h2>
                            <p>
                                If you believe that your intellectual property rights have been infringed, please submit your complaint using our online form. This form may be used to report all types of intellectual property claims including, but not limited to, copyright, trademark, and patent claims.
                            </p>
                            <p>
                                We respond quickly to the concerns of rights owners about any alleged infringement, and we terminate repeat infringers in appropriate circumstances.
                            </p>
                            <p>
                                We offer the following alternative to our online form for copyright complaints only. You may submit written claims of copyright infringement to our Copyright Agent at:
                            </p>
                            <pre>
                                Copyright Agent <br />
                                Amazon.ca Legal Department <br />
                                P.O. Box 81226 <br />
                                Seattle, WA 98108 <br />
                                USA <br />
                                Phone: (206) 266-4064 <br />
                                Email: copyright@amazon.com <br /> <br />

                                Courier address: <br />
                                Copyright Agent <br />
                                Amazon.ca Legal Department <br />
                                2021 7th Avenue <br />
                                Seattle, WA 98121 <br />
                                USA
                            </pre>
                            <p></p>
                            <p>
                                Written claims concerning copyright infringement must include the following information:
                            </p>
                            <ul>
                                <li>
                                    <span className="a__list__item">
                                        A physical or electronic signature of the person authorized to act on behalf of the owner of the copyright interest;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        A description of the copyrighted work that you claim has been infringed upon;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        A description of where the material that you claim is infringing is located on the site;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        Your address, telephone number, and email address;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        A statement by you that you have a good-faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        A statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf.
                                    </span>
                                </li>
                            </ul>
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
                                <li>Amazon.ca Conditions of Use</li>
                                <li>
                                    <Link to="/customer-display">
                                        <b>Amazon.ca Privacy Notice</b>
                                    </Link>
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

export default PrivacyNotice
