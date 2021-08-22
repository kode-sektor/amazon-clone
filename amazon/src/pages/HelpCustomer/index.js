import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../components/Layout/index'

import { CancelBtnLink } from '../../components/UI/Button'

import your_orders_box from '../../images/your-orders-box.png'
import return_and_refunds_box from '../../images/return-and-refunds-box.png'
import prime_clear_bg from '../../images/prime-clear-bg.png'
import payments_clear_bg from '../../images/payments-clear-bg.png'
import gateway_carrier from '../../images/gateway-carrier.png'
import profile from '../../images/profile.png'

import './index.css'

const HelpCustomer = () => {
    return (
        <Layout>
            <section className="switchLang">
                <p className="mb-0">
                    Vous voulez voir cette page en français ? <Link to="/switch-language"> Cliquez ici</Link>
                </p>
            </section>
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
                                Site Features
                            </Link>&nbsp;
                            <span>›</span>
                        </p>
                        <article className="csHelp__help">
                            <h1 className="csHelp__title">
                                Amazon And Our Planet
                            </h1>
                            <section>
                                <p className="csHelp--lead">
                                    At Amazon, we believe that innovation has the power to change the world. As we strive to become Earth's most customer-centric company, we constantly look for new ways to innovate on behalf of our different customers: individuals who shop our global websites, merchants who sell on our platform, developers who use our infrastructure to create their businesses, and creators of the books, music, films, games and other content we sell through our websites. We believe that our greatest contribution to the good of society comes directly from these core business activities.
                                </p>
                                <p>Page last updated in October 2020.</p>
                            </section>
                            <section>
                                <h2 className="csHelp__title">
                                    Amazon and the Environment
                                </h2>
                                <p>At Amazon, we're constantly looking for ways to further reduce our environmental impact.</p>
                                <p>Online shopping is inherently more environmentally friendly than traditional retailing. The efficiency of online shopping result in a greener shopping experience than traditional retailing. <Link to="" target="_blank">This study</Link> explains some of the benefits of the online shopping model.</p>
                            </section>
                            <section>
                                <h2 className="csHelp__title">
                                    Reducing Packaging Waste
                                </h2>
                                <p>We are always driving improvements in the sustainability of packaging across Amazon’s supply chain, starting with our own packaging and our own operations.</p>
                                <p>We pursue multi-year waste reduction initiatives to promote easy-to-open, 100% recyclable packaging and to ship products in their own packages without additional shipping boxes.</p>
                            </section>
                            <section>
                                <h2 className="csHelp__title">
                                    Eco-Friendly Building Design
                                </h2>
                                <p>Amazon's corporate headquarters in Seattle, Washington, USA are sustainable and energy-efficient. The buildings' interiors feature salvaged and locally sourced woods, energy-efficient lighting and composting and recycling alternatives, as well as public plazas and pockets of open green space outside of the buildings. Twenty of the buildings in our Seattle campus were built using LEED standards.</p>
                                <p>Many of Amazon's fulfillment centres around the world also have sustainable and eco-friendly interiors and exteriors. For example, Amazon.de's corporate offices in Munich, Germany, have been gold-certified as environmentally friendly by the German Sustainable Building Council, based on their energy-efficient interiors and use of sustainable building materials. Amazon's fulfillment center in Beijing, China, maximizes the use of natural lighting, saving thousands of kilowatt-hours of power usage each month. We're also experimenting with solar and fuel cell installations in our fulfillment centres and will continue to explore new technologies to help further reduce our environmental impact.</p>
                            </section>
                            <section>
                                <h2 className="csHelp__title">
                                    Responsible Sourcing
                                </h2>
                                <p>At Amazon, we work hard to ensure that every Amazon product our customers buy is made in a way that ensures respect for the rights of workers in Amazon’s supply chain and throughout our operations. Our teams work on a continuous improvement model, researching and identifying risks in places where we source and operate, and designing programs to ensure that we build the capability to understand and mitigate those risks.</p>
                                <p>Amazon is strongly committed to conducting our business in a lawful and ethical manner, including engaging with suppliers that are committed to the same principles. We require suppliers in our manufacturing supply chain to comply with our Supply Chain Standards. Amazon also expects our suppliers to hold their suppliers and subcontractors to the standards and practices covered by our Supplier Code of Conduct. Our products must be manufactured in a manner that meets or exceeds the expectations of Amazon and our customers as reflected in our Supplier Code of Conduct.</p>
                                <p>Here are some of the key areas we focus on: </p>
                                <ul>
                                    <li>
                                        <span className="a__list__item">Health and safety in production areas and any living quarters; </span>
                                    </li>
                                    <li>
                                        <span className="a__list__item">The right to legal wages and benefits; </span>
                                    </li>
                                    <li>
                                        <span className="a__list__item">Appropriate working hours and overtime pay; </span>
                                    </li>
                                    <li>
                                        <span className="a__list__item">Prevention of child labour or forced labour; and </span>
                                    </li>
                                    <li>
                                        <span className="a__list__item"> Fair and ethical treatment, including non-discrimination. </span>
                                    </li>
                                </ul>
                                <p>To ensure that our audit protocol and standards incorporate best-in-class practices, we benchmark industry best practices in the retail and electronics industries and continually review Amazon criteria against globally recognized international standards.</p>
                                <p>Amazon managers participate directly in many of our on-site audits. Audit reports and findings are regularly reviewed by senior leadership and corrective action plans are implemented as needed. We partner closely with our suppliers to drive continuous improvement in worker conditions. We train our suppliers on the standards and conduct required by our Supplier Code of Conduct.</p>
                            </section>
                            <section>
                                <h2>Packaging</h2>
                                <p>We want to optimize the overall customer packaging experience. This includes driving improvements in the sustainability of packaging across Amazon’s supply chain, starting with our own packaging and our own operations. </p>
                                <p>We continue to pursue multi-year waste reduction initiatives to promote easy-to-open, 100% recyclable packaging and to ship products in their own packages without additional shipping boxes. Such efforts also seek to eliminate hard plastic “clamshell” cases and the plastic-coated wire ties commonly used in toy packaging. Since 2015, we’ve saved more than 1.6 billion boxes and eliminated nearly 1 million tons of waste through our Frustration-Free Packaging programs.</p>
                                <ul>
                                    <li>
                                        <span className="a__list__item">Reduce prep, packing material and shipping supplies</span>
                                    </li>
                                    <li>
                                        <span className="a__list__item">Reduce our operational costs by increasing the use of recycled materials</span>
                                    </li>
                                    <li>
                                        <span className="a__list__item">Increase the overall density of the packages we ship – good for transportation savings and less waste for our customers</span>
                                    </li>
                                    <li>
                                        <span className="a__list__item">Reduce the things that get damaged in transit and eliminate wasted packaging</span>
                                    </li>
                                </ul>
                            </section>
                            <section>
                                <h2 className="csHelp__title">
                                    Our Global Operations Footprint
                                </h2>
                                <p>Amazon signed the Sustainable Fuel Buyers’ Principles, demonstrating our commitment to working with service providers to accelerate the transition to low-carbon commercial transportation solutions. For example, across Europe, Amazon is contracting with our service providers to launch our first low-pollution fleet, comprised of 130&nbsp;low-pollution, electric and natural gas vans and cars. We also have over 40&nbsp;electric scooters and e-cargo bikes that complete local urban deliveries.</p>
                                <p>We manage our own fleet of trailer equipment. In North America, this includes a mix of 53’&nbsp;trailers and 28’&nbsp;pups, which are equipped with aerodynamic skirts and PSI automatic tire inflation systems to maximize fuel efficiency in our North American fleet. In the UK, we are testing and investing in double-deck trailers, which increase the load capacity per trailer, reducing the total number of trailers on the road.</p>
                                <p>We have over 350,000&nbsp;employees and a presence across the globe. As part of our global footprint, we have focused on sustainable design in our offices and fulfillment centres worldwide.</p>
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
                                <h3>Site Features</h3>
                                <ul className="csHelp__navTopics">
                                    <li>
                                        <Link to="/customer-display">Amazon Community</Link>
                                    </li>
                                    <li>
                                        <Link to="/customer-display">Improve Your Recommendations</Link>
                                    </li>
                                    <li>
                                        <Link to="/customer-display">Recommendations</Link>
                                    </li>
                                    <li>
                                        <Link to="/customer-display">Remove Titles from Your Recommendations</Link>
                                    </li>
                                    <li>
                                        <Link to="/customer-display">What is Look inside the book?</Link>
                                    </li>
                                    <li>
                                        <Link to="/customer-display">What Is Search Inside the Book?</Link>
                                    </li>
                                    <li>
                                        <Link to="/customer-display">Amazon Best Sellers Rank</Link>
                                    </li>
                                    <li>
                                        <Link to="/customer-display">Manage Your Browsing History</Link>
                                    </li>
                                    <li>
                                        <Link to="/customer-display">Edit Your Browsing history</Link>
                                    </li>
                                    <li className="csHelp__navTopicLink--selected">Amazon and Our Planet</li>
                                    <li>
                                        <Link to="/customer-display">Submission of Business Proposals</Link>
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
        </Layout>
    )
}

export default HelpCustomer
