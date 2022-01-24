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

    const PrivacyNoticePage = () => (
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
                                What Choices Do I Have?
                            </h2>
                            <p>
                                If you have any questions as to how we collect and use your personal information, please contact our Customer Service. Many of our Amazon Services also include settings that provide you with options as to how your information is being used.right (but not the obligation) to remove or edit such content, but does not regularly review posted content.
                            </p>
                            <p></p>
                            <ul>
                                <li>
                                    <span className="a__list__item">
                                        As described above, you can choose not to provide certain information, but then you might not be able to take advantage of many of the Amazon Services.
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        You can add or update certain information on pages such as those referenced in What <Link to="/">Information Can I Access?</Link>. When you update information, we usually keep a copy of the prior version for our records.
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        If you do not want to receive email or other communications from us, please adjust your <Link to="/">Customer Communication Preferences</Link>. If you don’t want to receive in-app notifications from us, please adjust your notification settings in the app or device.
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        If you do not want to see interest-based ads, please adjust your <Link to="/">Advertising Preferences</Link>.
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        The Help feature on most browsers and devices will tell you how to prevent your browser or device from accepting new cookies or other identifiers, how to have the browser notify you when you receive a new cookie, or how to block cookies altogether. Because cookies and identifiers allow you to take advantage of some essential features of Amazon Services, we recommend that you leave them turned on. For instance, if you block or otherwise reject our cookies, you will not be able to add items to your Shopping Cart, proceed to Checkout, or use any Services that require you to Sign in. For more information about cookies and other identifiers, see our <Link to="/">Cookies Notice</Link>.
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        If you want to browse our websites without linking the browsing history to your account, you may do so by logging out of your account <Link to="/">here</Link> and blocking cookies on your browser.
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        You will also be able to opt out of certain other types of data usage by updating your settings on the applicable Amazon website (e.g., in "Manage Your Content and Devices"), device, or application. For more information <Link to="/">click here</Link>. Most non-Amazon devices also provide users with the ability to change device permissions (e.g., disable/access location services, contacts). For most devices, these controls are located in the device's settings menu. If you have questions about how to change your device permissions on devices manufactured by third parties, we recommend you contact your mobile service carrier or your device manufacturer.
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        If you are a seller, you can add or update certain information in <Link to="/">Seller Central</Link>, update your account information by accessing your <Link to="/">Seller Account Information</Link>, and adjust your email or other communications you receive from us by updating your <Link to="/">Notification Preferences</Link>.
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                    If you are an author, you can add or update the information you have provided in the Author Portal and Author Central by accessing your accounts in the <Link to="/">Author Portal</Link> and <Link to="/">Author Central</Link>, respectively.
                                    </span>
                                </li>
                            </ul>
                            <p>
                                In addition, to the extent required by applicable law, you may have the right to request access to or correction of your personal data. If you wish to do any of these things, please go to <Link to="/">Request My Personal Information</Link> or contact Customer Service. Depending on your data choices, certain services may be limited or unavailable.
                            </p>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                Are Children Allowed to Use Amazon Services?
                            </h2>
                            <p>
                                Amazon does not sell products for purchase by children. We sell children's products for purchase by adults. If you are under 18, you may use Amazon Services only with the involvement of a parent or guardian.
                            </p>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                Conditions of Use, Notices, and Revisions
                            </h2>
                            <p>
                                If you choose to use Amazon Services, your use and any dispute over privacy is subject to this Notice and our <Link to="/">Conditions of Use</Link>, including limitations on damages, resolution of disputes, and application of the law of the state of Washington
                            </p>
                            <p>
                                If you have any concern about privacy at Amazon, please <Link to="/">Contact Us</Link> with a thorough description, and we will try to resolve the issue for you.Further, the Amazon Canada Privacy Officer can be contacted at canada-privacy-officer@amazon.com or by mail at ATTN: Amazon.ca Privacy Officer, 120 Bremner Blvd, Toronto, ON M5J 0A1.
                            </p>
                            <p>
                                Our business changes constantly, and our Privacy Notice will change also. You should check our website frequently to see recent changes. Unless stated otherwise, our current Privacy Notice applies to all information that we have about you and your account. We stand behind the promises we make, however, and will never materially change our policies and practices to make them less protective of customer information collected in the past without the consent of affected customers.
                            </p>
                        </section>
                        <section>
                            <h2 className="csHelp__title">
                                Related Practices and Information
                            </h2>
                            <ul>
                                <li>
                                    <span className="a__list__item">
                                        <Link to="/" target="_self">Conditions of Use</Link>
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        <Link to="/" target="_self">Seller Program Policies</Link>
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        <Link to="/" target="_self">Help department</Link>
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        <Link to="/" target="_self">Most Recent Purchases</Link>
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        <Link to="/" target="_self">Your Profile and Community Guidelines</Link>
                                    </span>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="csHelp__title">
                                Examples of Information Collected
                            </h2>
                            <p>
                                <strong>
                                    Information You Give Us When You Use Amazon Services
                                </strong>
                            </p>
                            <p>You provide information to us when you:</p>
                            <ul>
                                <li>
                                    <span className="a__list__item">
                                        search or shop for products or services in our stores;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        add or remove an item from your cart, or place an order through or use Amazon Services;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        download, stream, view, or use content on a device or through a service or application on a device;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        provide information in Your Account (and you might have more than one if you have used more than one email address or mobile number when shopping with us) or Your Profile;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        talk to or otherwise interact with our Alexa Voice service;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        upload your contacts;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        configure your settings on, provide data access permissions for, or interact with an Amazon device or service;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        provide information in your <Link to="/">Seller Account, Kindle Direct Publishing (KDP), Developer account</Link>, or any other account we make available that allows you to develop or offer software, goods, or services to Amazon customers;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        offer your products or services on or through Amazon Services;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        communicate with us by phone, email, or otherwise;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        complete a questionnaire, a support ticket, or a contest entry form;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        upload or stream images, videos or other files to Prime Photos, Amazon Drive, or other Amazon Services;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        use our services such as Prime Video;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        compile Playlists, Watchlists, <Link to="/">Wish Lists</Link> or other gift registries;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        participate in Discussion Boards or other community features;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        provide and rate <Link to="/">Reviews</Link>;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        specify a Special Occasion Reminder; or
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        employ <Link to="/">Product Availability Alerts</Link>, such as Available to Order Notifications.
                                    </span>
                                </li>
                            </ul>
                            <p></p>
                            <p>
                                <strong>
                                    As a result of those actions, you might supply us with such information as:
                                </strong>
                            </p>
                            <p></p>
                            <ul>
                                <li>
                                    <span className="a__list__item">
                                        identifying information such as your name, address, and phone numbers;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        payment information;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        your age;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        your location information;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        your IP address;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        people, addresses and phone numbers listed in your Addresses;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        email addresses of your friends and other people;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        content of reviews and emails to us;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        personal description and photograph in Your Profile;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        voice recordings when you speak to Alexa;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        images and videos collected or stored in connection with Amazon Services;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        information and documents regarding identity, including Social Security and driver's licence numbers;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        corporate and financial information;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        credit history information; and
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        device log files and configurations, including Wi-Fi credentials, if you choose to automatically    synchronize them with your other Amazon devices.
                                    </span>
                                </li>
                            </ul>
                            <p></p>
                            <p>
                                <strong>
                                    Automatic Information
                                </strong>
                            </p>
                            <p>Examples of the information we collect and analyze include:</p>
                            <ul>
                                <li>
                                    <span className="a__list__item">
                                        the internet protocol (IP) address used to connect your computer to the internet;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        login, email address, and password;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        the location of your device or computer;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        content interaction information, such as content downloads, streams, and playback details, including duration and number of simultaneous streams and downloads, and network details for streaming and download quality, including information about your internet service provider;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        device metrics such as when a device is in use, application usage, connectivity data, and any errors or event failures;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        Amazon Services metrics (e.g., the occurrences of technical errors, your interactions with service features and content, your settings preferences and backup information, location of your device running an application, information about uploaded images and files such as the file name, dates, times and location of your images);
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        version and time zone settings;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        purchase and content use history, which we sometimes aggregate with similar information from other customers to create features like Top Sellers;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        the full Uniform Resource Locator (URL) clickstream to, through, and from our websites, including date and time; products and content you viewed or searched for; page response times, download errors, length of visits to certain pages, and page interaction information (such as scrolling, clicks, and mouse overs);
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        phone numbers used to call our customer service number; and
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        images or videos when you shop in our stores, or stores using Amazon Services.
                                    </span>
                                </li>
                            </ul>
                            <p></p>
                            <p>
                                We may also use device identifiers, cookies, and other technologies on devices, applications, and our web pages to collect browsing, usage, or other technical information.
                            </p>
                            <p>
                                <strong>
                                    Information from Other Sources
                                </strong>
                            </p>
                            <p>Examples of the information we collect and analyze include:</p>
                            <p></p>
                            <ul>
                                <li>
                                    <span className="a__list__item">
                                        updated delivery and address information from our carriers or other third parties, which we use to correct our records and deliver your next purchase or communication more easily;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        account information, purchase or redemption information, and page-view information from some merchants with which we operate co-branded businesses or for which we provide technical, fulfillment, advertising, or other services;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        information about your interactions with products and services offered by our subsidiaries;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        search results and links, including paid listings (such as Sponsored Links);
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        information about internet-connected devices and services linked with Alexa; and
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        credit history information from credit bureaus, which we use to help prevent and detect fraud and to offer certain credit or financial services to some customers.
                                    </span>
                                </li>
                            </ul>
                            <p></p>
                            <p>
                                <strong>
                                    Information You Can Access
                                </strong>
                            </p>
                            <p>Examples of information you can access through Amazon Services include:</p>
                            <p></p>
                            <ul>
                                <li>
                                    <span className="a__list__item">
                                        status of recent orders (including subscriptions);
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        your complete order history;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        personally identifiable information (including name, email, password, and address book);
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        payment settings (including payment card information, promotional certificate and gift card balances, and 1-Click settings);
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        email notification settings (including Product Availability Alerts, Delivers, Special Occasion Reminders and newsletters);
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        recommendations and the products you recently viewed that are the basis for recommendations (including Recommended for You and Improve Your Recommendations);
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        shopping lists and gift registries (including Wish Lists and Baby and Wedding Registries);
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        your content, devices, services, and related settings, and communications and personalized advertising preferences;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        content that you recently viewed;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        voice recordings associated with your account;
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        Your Profile (including your product Reviews, Recommendations, Reminders and personal profile);
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        If you are a seller, you can access your account and other information, and adjust your communications preferences, by updating your account in <Link to="/">Seller Central</Link>.
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        If you are an author, you can access your account and other information, and update your accounts, on the <Link to="/">Kindle Direct Publishing (KDP)</Link> or <Link to="/">Author Central</Link> website, as applicable.
                                    </span>
                                </li>
                                <li>
                                    <span className="a__list__item">
                                        If you are a developer participating in our Developer Services Program, you can access your account and other information, and adjust your communications preferences, by updating your accounts in the <Link to="/">Developer Services Portal</Link>.
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
            <PrivacyNoticePage/>
        </Layout>
    )
}

export default PrivacyNotice
