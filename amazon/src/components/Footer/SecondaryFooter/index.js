import React from 'react'

import { Link } from 'react-router-dom'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

import amazon_module_logo from '../../../images/amazon-module-logo.svg'

import './index.css'

const SecondaryFooter = () => {

    return (
        <footer className="investor--footer">
            <section className="secondary__footerLogo d-flex">
                <section className="col-4">
                    <Link to="/">
                        <img src={amazon_module_logo} className="secondary__footerAmazonLogo" alt="About Amazon logo"/>
                    </Link>
                </section>
                <section className="secondary__footerSocials col-4">
                    <ul className="d-flex justify-content-between">
                        <li>
                            <Link to="/" className="secondary__footerSocialLink">
                                <FaFacebookF/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="secondary__footerSocialLink">
                                <FaInstagram/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="secondary__footerSocialLink">
                                <FaLinkedinIn/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="secondary__footerSocialLink">
                                <FaTwitter/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="secondary__footerSocialLink">
                                <FaYoutube/>
                            </Link>
                        </li>
                    </ul>
                </section>
                <section className="secondary__footerShop col-4 order-2 w-100">
                    <Link to="/" target="_blank">
                        Shop Amazon.com
                    </Link>
                </section>
            </section>
            <section className="secondary__footerNav">
                <div className="d-flex justify-content-between">
                    <section className="secondary__footerNavLinks col-2">
                        <h5 className="secondary__footerNavLinkTitle font-weight-light">
                            <Link to="/">Job Creation &amp; Investment</Link>
                        </h5>
                        <ul className="secondary__footerNavLinkItem ml-0">
                            <li>
                                <Link to="/">
                                    Explore job creation and investment
                                </Link>
                            </li>
                        </ul>
                    </section>
                    <section className="secondary__footerNavLinks col-2">
                        <h5 className="secondary__footerNavLinkTitle font-weight-light">
                            <Link to="/">Working At Amazon</Link>
                        </h5>
                        <ul className="secondary__footerNavLinkItem ml-0">
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
                    <section className="secondary__footerNavLinks col-2">
                        <h5 className="secondary__footerNavLinkTitle font-weight-light">
                            <Link to="/">Our Communities</Link>
                        </h5>
                        <ul className="secondary__footerNavLinkItem ml-0">
                            <li>
                                <Link to="/">
                                    Our communities
                                </Link>
                            </li>
                        </ul>
                    </section>
                    <section className="secondary__footerNavLinks col-2">
                        <h5 className="secondary__footerNavLinkTitle font-weight-light">
                            <Link to="/">Sustainability</Link>
                        </h5>
                        <ul className="secondary__footerNavLinkItem ml-0">
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
                    <section className="secondary__footerNavLinks col-2">
                        <h5 className="secondary__footerNavLinkTitle font-weight-light">
                            <Link to="/">Innovation</Link>
                        </h5>
                        <ul className="secondary__footerNavLinkItem ml-0">
                            <li>
                                <Link to="/">
                                    Our innovations
                                </Link>
                            </li>
                        </ul>
                    </section>
                    <section className="secondary__footerNavLinks col-2">
                        <h5 className="secondary__footerNavLinkTitle font-weight-light">
                            <Link to="/">Our Company</Link>
                        </h5>
                        <ul className="secondary__footerNavLinkItem ml-0">
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
            <section className="secondary__copyright text-center">
                <span className="secondary__copyrightLinks">
                    <Link to="http://amazon.com/" target="_blank">Amazon.com</Link>&nbsp;
                    <Link to="http://amazon.com/" target="_blank">Conditions of Use</Link>&nbsp;
                </span>
                © 1996-
                <span>2021</span> Amazon.com, Inc. - IR or its affiliates
            </section>
            <section className="secondary__copyright text-center">
                <span className="secondary__copyrightLinks">
                    <Link to="http://amazon.com/" target="_blank">Powered By Q4 Inc. 5.56.0.1</Link>
                </span>
            </section>
        </footer>
    )
}

export default SecondaryFooter
