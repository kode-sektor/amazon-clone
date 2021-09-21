import React from 'react'
import { Link } from 'react-router-dom'

import PublicationList from './PublicationList'

import { Pipe } from '../../components/UI/Icons'
import Popover from '../../components/UI/Popover'
import SignIn from '../../components/UI/SignIn'

import kdp_logo_stacked from '../../images/kdp-logo-stacked.gif'
import amazon_kindle from '../../images/amazon-kindle.gif'

import './index.css'

const IndependentPublication = () => {
    return (
        <div className="publication--page">
            <header className="a__section header__row mw-100 mb-0">
                <div className="d-flex header__content">
                    <section className="col-6">
                        <span className="font-weight-bold a__size__medium a__color__state">
                            NEW!
                        </span>&nbsp;
                        KDP Select Global Fund for August is $39.6 Million.&nbsp;
                        <Link to="/" target="_blank">Learn more</Link>
                    </section>
                    <section className="header__contentLinks col-6 text-right">
                        <Link to="/">Your Account</Link>
                        <Pipe />
                        <span className="header__contentLinkItem d-inline-block">
                            <Popover
                                trigger={
                                    <Link to="/" className="a__size__base">
                                        English
                                        <i class="a__icon a__icon__popover"></i>
                                    </Link>
                                }
                                dropdown={
                                    <ul className="ml-0">
                                        <li>
                                            <Link to="/"><b>English</b></Link>
                                        </li>
                                        <li>
                                            <Link to="/">Deutsch</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Français</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Español</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Italiano</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Português</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Nederlands</Link>
                                        </li>
                                    </ul>
                                }
                            />
                        </span>
                        <Pipe />
                        <Link to="/">Help</Link>
                        <Pipe />
                        <Link to="/">Sign Out</Link>
                        <span className="header__contentLinkItem header__contentLinkFeedback d-inline-block">
                            <Popover 
                                trigger={
                                    <Link to="/">
                                        <img alt="delight feedback icons" src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel._V192234675_.gif" className="mallomar-delight-feedback-icons"/>
                                        <i class="a__icon a__icon__popover"></i>
                                    </Link>
                                }
                                dropdown={
                                    <section>
                                        <h4 className="a__spacing__small">
                                            Please rate your experience using this page
                                        </h4>
                                        <section className="row mx-0">
                                            <section className="col-4 mx-0">
                                                <img alt="" src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel._V192234675_.gif" className="mallomar-delight-feedback-icons-large-delighted mallomar-delight-feedback-icons-large-delighted" />
                                                <br/>
                                                <span className="font-weight-bold">Delighted</span>
                                            </section>
                                            <section className="col-4 mx-0">
                                                <img alt="" src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel._V192234675_.gif" className="mallomar-delight-feedback-icons-large-satisfied mallomar-delight-feedback-icons-large-satisfied" />
                                                <br/>
                                                <span className="font-weight-bold">Satisfied</span>
                                            </section>
                                            <section className="col-4 mx-0">
                                                <img alt="" src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel._V192234675_.gif" className="mallomar-delight-feedback-icons-large-disappointed mallomar-delight-feedback-icons-large-disappointed" />
                                                <br/>
                                                <span className="font-weight-bold">Disappointed</span>
                                            </section>
                                        </section>
                                    </section>
                                }
                            />
                        </span>
                    </section>
                </div>
            </header>
            <br/>
            <main>
                <section className="publication__banner">
                    <img src={kdp_logo_stacked} alt="Self-publish eBooks and paperbacks with Amazon Kindle Direct Publishing for free"/>
                </section>
                <section className="publication__central row">
                    <section className="publication__centre col-10 offset-1">
                        <div className="row">
                            <section className="col-8 px-0">
                                <div className="publication__centralVid">
                                    <video className="publication__video" id="7" preload="auto" src="https://m.media-amazon.com/images/G/01/otp/general/airy/kdpLanding_EN_US._CB1536872220_.mp4"></video>
                                    <div className="publication__videOverlay"></div>
                                </div>
                                <h1 class="a__spacing__top__medium a__color__state">
                                    Self-publish eBooks and paperbacks for free with Kindle Direct Publishing, and reach millions of readers on Amazon.   
                                </h1>
                                <p className="a__spacing__top__medium">
                                    <span className="home__point__emphasis">
                                        Get to market fast.
                                    </span>
                                    Publishing takes less than 5 minutes and your book appears on Kindle stores worldwide within 24-48 hours.
                                </p>
                                <p className="a__spacing__top__medium">
                                    <span className="home__point__emphasis">
                                        Make more money.
                                    </span>
                                    Earn up to 70% royalty on sales to customers in the US, Canada, UK, Germany, India, France, Italy, Spain, Japan, Brazil, Mexico, Australia and more. Enroll in KDP Select and earn more money through Kindle Unlimited and the Kindle Owners' Lending Library.
                                </p>
                                <p className="a__spacing__top__medium">
                                    <span className="home__point__emphasis">
                                        Keep control.
                                    </span>
                                    Keep control of your rights and set your own list prices. Make changes to your books at any time.
                                </p>
                                <p className="a__spacing__top__medium">
                                    <span className="home__point__emphasis">
                                        Publish in digital and print.
                                    </span>
                                    Publish Kindle eBooks and paperbacks for free on KDP.
                                </p>
                                <p className="a__spacing__top__medium">
                                    <span className="home__point__emphasis">
                                        Get started today!
                                    </span>&nbsp;
                                    Self-publish with KDP for free. <Link to="/" className="text-decoration-underline">Learn how easy it is</Link>
                                </p>
                            </section>
                            <section className="publication__panels col-4">
                                <SignIn/>
                                <section>
                                    <div className="a__box a__spacing__top__medium a__color__alternate__background">
                                        <div className="a__box__inner">
                                            <header className="col">
                                                <h4 className="a__size__medium__ii a__spacing__medium text-center">
                                                    Learn more about publishing popular content on KDP:   
                                                </h4>
                                            </header>
                                            <section className="a__box__group">
                                                <div className="a__box a__first">
                                                    <PublicationList
                                                        link={"/"}
                                                        text={"Business & Investing"}
                                                    />
                                                </div>
                                                <div className="a__box">
                                                    <PublicationList
                                                        link={"/"}
                                                        text={"Comics & Graphic Novels"}
                                                    />
                                                </div>
                                                <div className="a__box">
                                                    <PublicationList
                                                        link={"/"}
                                                        text={"Education & Textbooks"}
                                                    />
                                                </div>
                                                <div className="a__box">
                                                    <PublicationList
                                                        link={"/"}
                                                        text={"KDP Kids"}
                                                    />
                                                </div>
                                                <div className="a__box">
                                                    <PublicationList
                                                        link={"/"}
                                                        text={"Kindle Vella - NEW!"}
                                                    />
                                                </div>
                                                <div className="a__box">
                                                    <PublicationList
                                                        link={"/"}
                                                        text={"Literature & Fiction"}
                                                    />
                                                </div>
                                                <div className="a__box">
                                                    <PublicationList
                                                        link={"/"}
                                                        text={"Mystery, Thriller & Suspense"}
                                                    />
                                                </div>
                                                <div className="a__box">
                                                    <PublicationList
                                                        link={"/"}
                                                        text={"Non-fiction"}
                                                    />
                                                </div>
                                                <div className="a__box">
                                                    <PublicationList
                                                        link={"/"}
                                                        text={"Non-fiction"}
                                                    />
                                                </div>
                                                <div className="a__box">
                                                    <PublicationList
                                                        link={"/"}
                                                        text={"Romance"}
                                                    />
                                                </div>
                                                <div className="a__box">
                                                    <PublicationList
                                                        link={"/"}
                                                        text={"Science Fiction & Fantasy"}
                                                    />
                                                </div>
                                                <div className="a__box">
                                                    <PublicationList
                                                        link={"/"}
                                                        text={"Teens & Young Adult"}
                                                    />
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </section>
                            </section>
                        </div>
                    </section>
                </section>
            </main>
            <footer className="publication--footer row">
                <section className="col-1">
                    <Link to="/">
                        <img src={amazon_kindle} alt="Amazon Kindle"/>
                    </Link>
                </section>
                <section className="publication__footerCopyright col-3">
                    © 1996-2021, Amazon.com, Inc. or its affiliates. All Rights Reserved.<br/><br/>
                    Amazon and Kindle are trademarks of Amazon.com Inc. or its affiliates.
                </section>
                <section className="publication__footerSmLinks col-1">
                    <Link to="/" className="publication__footerSmLinks--facebook"></Link>
                </section>
                <section className="publication__footerSmLinks col-1">
                    <Link to="/" className="publication__footerSmLinks--twitter"></Link>
                </section>
                <section className="col-6 px-0 mx-0 row">
                    <section className="col-3">
                        <Link to="/" className="publication__footerLink" target="_blank">
                            <b className="">KDP Select</b>
                            <br/>
                            Earn more money and 
                            <br/>
                            reach new readers
                        </Link>
                    </section>
                    <section className="col-3">
                        <Link to="/" className="publication__footerLink" target="_blank">
                            <b className="">KDP Community</b>
                            <br/>
                            Connect with experts 
                            <br/>
                            and fellow authors
                        </Link>
                    </section>
                    <section className="col-3">
                        <Link to="/" className="publication__footerLink" target="_blank">
                            <b className="">CreateSpace</b>
                            <br/>
                            Indie print publishing 
                            <br/>
                            made easy
                        </Link>
                    </section>
                    <section className="col-3">
                        <Link to="/" className="publication__footerLink" target="_blank">
                            <b className="">ACX</b>
                            <br/>
                            Indie audiobook publishing 
                            <br/>
                            made easy
                        </Link>
                    </section>
                </section>
                <section className="publication__footerSecondary d-flex text-center justify-content-center">
                    <Link to="/" target="_blank" rel="noopener">KDP Terms and Conditions</Link>&nbsp;|&nbsp;
                    <Link to="/" target="_blank" rel="noopener">Privacy Notice</Link>&nbsp;|&nbsp;
                    <Link to="/" target="_blank" rel="noopener">Conditions of use</Link>&nbsp;|&nbsp;
                    <Link to="/" target="_blank" rel="noopener">Contact Us</Link>&nbsp;|&nbsp;
                    <Link to="/" target="_blank" rel="noopener">Join Our Team</Link>&nbsp;|&nbsp;
                    <Link to="/" target="_blank" rel="noopener">kdp.amazon.co.jp</Link>
                </section>
            </footer>
        </div>
    )
}

export default IndependentPublication
