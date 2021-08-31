import React from 'react'
import { Link } from 'react-router-dom'

import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

import SecondaryHeader from '../../components/Header/SecondaryHeader'
import SecondaryBreadCrumb from '../../components/UI/BreadCrumb/SecondaryBreadCrumb'
import SecondaryNav from '../../components/UI/Nav/SecondaryNav'
import SecondaryFooter from '../../components/Footer/SecondaryFooter'

import './index.css'

const InvestorRelations = () => {

    return (
        <div className="investor--page">
            <SecondaryHeader/>
            <section className="investor__banner"></section>
            <main className="investor--layout d-flex">
                <section className="investor__navContainer col-4">
                    <header className="investor__breadcrumb">
                        <SecondaryBreadCrumb
                            links={
                                    [
                                        {
                                            href : "/",
                                            text : "About Amazon"
                                        },
                                        {
                                            href : "/",
                                            text : "Investor Relations"
                                        }
                                    ]
                                }
                        />
                    </header>
                    <section className="investor__news">
                        <nav className="secondary__nav investor__nav">
                            <SecondaryNav
                                links={
                                    [
                                        {
                                            href : "/",
                                            text : "Annual reports, proxies and shareholder letters"
                                        },
                                        {
                                            href : "/",
                                            text : "Quarterly results"
                                        },
                                        {
                                            href : "/",
                                            text : "SEC filings"
                                        },
                                        {
                                            href : "/",
                                            text : "Press releases"
                                        },
                                        {
                                            href : "/",
                                            text : "FAQs"
                                        },
                                        {
                                            href : "/",
                                            text : "Corporate governance"
                                        },
                                        {
                                            href : "/",
                                            text : "Officers and directors"
                                        },
                                        {
                                            href : "/",
                                            text : "Contact us and request documents"
                                        },
                                        {
                                            href : "/",
                                            text : "Events"
                                        }
                                    ]
                                }
                            />
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
            <SecondaryFooter/>
        </div>
    )
}

export default InvestorRelations
