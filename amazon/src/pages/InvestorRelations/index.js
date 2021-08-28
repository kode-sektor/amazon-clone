import React from 'react'
import { Link } from 'react-router-dom'

import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import { AiFillCaretRight } from 'react-icons/ai'

import SecondaryHeader from '../../components/Header/SecondaryHeader'
import SecondaryBreadCrumb from '../../components/UI/BreadCrumb/SecondaryBreadCrumb'

import amazon_module_logo from '../../images/amazon-module-logo.svg'

import './index.css'

const InvestorRelations = () => {

    return (
        <div className="investor--page">
            <SecondaryHeader/>
            <section className="investor__banner"></section>
            <main className="investor--layout d-flex">
                <section className="investor__navContainer col-4">
                    <header className="investor__breadcrumb">
                        <section className="investor__moduleBreadcrumb">
                            <SecondaryBreadCrumb
                                links={
                                    [
                                        {
                                            href : "/",
                                            text : "Amazon"
                                        },
                                        {
                                            href : "/",
                                            text : "Investor Relations"
                                        }
                                    ]
                                }
                            />
                        </section>
                    </header>
                    <section className="investor__news">
                        <nav className="investor__nav">
                            <ul class="investor__navList">
                                <li>
                                    <Link to="/">Annual reports, proxies and shareholder letters</Link>
                                </li>
                                <li>
                                    <Link to="/">Quarterly results</Link>
                                </li>
                                <li>
                                    <Link to="/">SEC filings</Link>
                                </li>
                                <li>
                                    <Link to="/">Press releases</Link>
                                </li>
                                <li>
                                    <Link to="/">FAQs</Link>
                                </li>
                                <li>
                                    <Link to="/">Corporate governance</Link>
                                </li>
                                <li>
                                    <Link to="/">Officers and directors</Link>
                                </li>
                                <li>
                                    <Link to="/">Contact us and request documents</Link>
                                </li>
                                <li>
                                    <Link to="/">Events</Link>
                                </li>
                            </ul>
                        </nav>
                    </section>
                </section>
                <section className="investor__articleLinks col-8">
                    <section className="investor__amznStockEmbedded">
                        <div className="d-flex align-items-center flex-wrap">
                            <section className="col-6">
                                <div className="investor__amznStockHeader">
                                    NASDAQ: AMZN
                                </div>
                                <div className="investor__amznStockHeader">
                                    + 12.20 (0.38%)
                                </div>
                            </section>
                            <section className="investor__amznStockPrice col-6">3,199.95</section>
                            <section className="investor__amznStockDate">
                                Aug 20, 2021 4:00 PM EST. Pricing delayed by 20 minutes.
                            </section>
                        </div>
                    </section>
                    <section className="investor__moduleNews">
                        <section className="d-flex">
                            <article className="investor__newsItem col-6">
                                <div className="investor__newsItem--module">
                                    <header>
                                        <section className="investor__newsDateItem">
                                            April 29, 2021
                                        </section>
                                        <section className="investor__newsHeadline">
                                            Amazon.com Announces First Quarter Results
                                        </section>
                                    </header>
                                    <section className="investor__newsBody">
                                        <p className="mb-0">
                                            Amazon.com, Inc. (NASDAQ: AMZN) today announced financial results for its first quarter ended March 31, 2021. Operating cash flow increased 69% to $67.2 billion for th...
                                        </p>
                                    </section>
                                    <Link to="/" className="investor__viewLink">
                                        Continue Reading
                                    </Link>
                                </div>
                            </article>
                            <article className="investor__newsItem col-6">
                                <div className="investor__newsItem--module">
                                    <header>
                                        <section className="investor__newsDateItem">
                                            April 29, 2021
                                        </section>
                                        <section className="investor__newsHeadline">
                                            Amazon.com Announces First Quarter Results
                                        </section>
                                    </header>
                                    <section className="investor__newsBody">
                                        <p className="mb-0">
                                            Amazon.com, Inc. (NASDAQ: AMZN) today announced financial results for its first quarter ended March 31, 2021. Operating cash flow increased 69% to $67.2 billion for th...
                                        </p>
                                    </section>
                                    <Link to="/" className="investor__viewLink">
                                        Continue Reading
                                    </Link>
                                </div>
                            </article>
                        </section>
                        <section className="d-flex">
                            <article className="investor__newsItem col-6">
                                <div className="investor__newsItem--module">
                                    <header>
                                        <section className="investor__newsDateItem">
                                            April 29, 2021
                                        </section>
                                        <section className="investor__newsHeadline">
                                            Amazon.com Announces First Quarter Results
                                        </section>
                                    </header>
                                    <section className="investor__newsBody">
                                        <p className="mb-0">
                                            Amazon.com, Inc. (NASDAQ: AMZN) today announced financial results for its first quarter ended March 31, 2021. Operating cash flow increased 69% to $67.2 billion for th...
                                        </p>
                                    </section>
                                    <Link to="/" className="investor__viewLink">
                                        Continue Reading
                                    </Link>
                                </div>
                            </article>
                            <article className="investor__newsItem col-6">
                                <div className="investor__newsItem--module">
                                    <header>
                                        <section className="investor__newsDateItem">
                                            April 29, 2021
                                        </section>
                                        <section className="investor__newsHeadline">
                                            Amazon.com Announces First Quarter Results
                                        </section>
                                    </header>
                                    <section className="investor__newsBody">
                                        <p className="mb-0">
                                            Amazon.com, Inc. (NASDAQ: AMZN) today announced financial results for its first quarter ended March 31, 2021. Operating cash flow increased 69% to $67.2 billion for th...
                                        </p>
                                    </section>
                                    <Link to="/" className="investor__viewLink">
                                        Continue Reading
                                    </Link>
                                </div>
                            </article>
                        </section>
                    </section>
                </section>
            </main>
            <footer className="investor--footer">
                <section className="investor__footerLogo d-flex">
                    <section className="col-4">
                        <Link to="/">
                            <img src={amazon_module_logo} className="investor__footerAmazonLogo" alt="About Amazon logo"/>
                        </Link>
                    </section>
                    <section className="investor__footerSocials col-4">
                        <ul className="d-flex justify-content-between">
                            <li>
                                <Link to="/" className="investor__footerSocialLink">
                                    <FaFacebookF/>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="investor__footerSocialLink">
                                    <FaInstagram/>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="investor__footerSocialLink">
                                    <FaLinkedinIn/>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="investor__footerSocialLink">
                                    <FaTwitter/>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="investor__footerSocialLink">
                                    <FaYoutube/>
                                </Link>
                            </li>
                        </ul>
                    </section>
                    <section className="investor__footerShop col-4 order-2 w-100">
                        <Link to="/" target="_blank">
                            Shop Amazon.com
                        </Link>
                    </section>
                </section>
                <section className="investor__footerNav">
                    <div className="d-flex justify-content-between">
                        <section className="investor__footerNavLinks col-2">
                            <h5 className="investor__footerNavLinkTitle font-weight-light">
                                <Link to="/">Job Creation &amp; Investment</Link>
                            </h5>
                            <ul className="investor__footerNavLinkItem ml-0">
                                <li>
                                    <Link to="/">
                                        Explore job creation and investment
                                    </Link>
                                </li>
                            </ul>
                        </section>
                        <section className="investor__footerNavLinks col-2">
                            <h5 className="investor__footerNavLinkTitle font-weight-light">
                                <Link to="/">Working At Amazon</Link>
                            </h5>
                            <ul className="investor__footerNavLinkItem ml-0">
                                <li>
                                    <Link to="/">
                                        Explore working at Amazon
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Amazon offices
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Get to know us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Opportunities for veterans
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Our culture
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                    Jobs
                                    </Link>
                                </li>
                            </ul>
                        </section>
                        <section className="investor__footerNavLinks col-2">
                            <h5 className="investor__footerNavLinkTitle font-weight-light">
                                <Link to="/">Our Communities</Link>
                            </h5>
                            <ul className="investor__footerNavLinkItem ml-0">
                                <li>
                                    <Link to="/">
                                        Our communities
                                    </Link>
                                </li>
                            </ul>
                        </section>
                        <section className="investor__footerNavLinks col-2">
                            <h5 className="investor__footerNavLinkTitle font-weight-light">
                                <Link to="/">Sustainability</Link>
                            </h5>
                            <ul className="investor__footerNavLinkItem ml-0">
                                <li>
                                    <Link to="/">
                                        Explore sustainability
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Packaging
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Sustainability Question Bank
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Explore sustainability
                                    </Link>
                                </li>
                            </ul>
                        </section>
                        <section className="investor__footerNavLinks col-2">
                            <h5 className="investor__footerNavLinkTitle font-weight-light">
                                <Link to="/">Innovation</Link>
                            </h5>
                            <ul className="investor__footerNavLinkItem ml-0">
                                <li>
                                    <Link to="/">
                                        Our innovations
                                    </Link>
                                </li>
                            </ul>
                        </section>
                        <section className="investor__footerNavLinks col-2">
                            <h5 className="investor__footerNavLinkTitle font-weight-light">
                                <Link to="/">Our Company</Link>
                            </h5>
                            <ul className="investor__footerNavLinkItem ml-0">
                                <li>
                                    <Link to="/">
                                        Investors
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Press Center
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        The Spheres
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Select awards and recognition
                                    </Link>
                                </li>
                            </ul>
                        </section>
                    </div>
                </section>
                <section className="investor__copyright text-center">
                    <span className="investor__copyrightLinks">
                        <Link to="http://amazon.com/" target="_blank">Amazon.com</Link>&nbsp;
                        <Link to="http://amazon.com/" target="_blank">Conditions of Use</Link>&nbsp;
                    </span>
                    © 1996-
                    <span>2021</span> Amazon.com, Inc. - IR or its affiliates
                </section>
                <section className="investor__copyright text-center">
                    <span className="investor__copyrightLinks">
                        <Link to="http://amazon.com/" target="_blank">Powered By Q4 Inc. 5.56.0.1</Link>
                    </span>
                </section>
            </footer>
        </div>
    )
}

export default InvestorRelations
