import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../components/Layout/index'

import { Pipe } from '../../components/UI/Icons'
import Popover from '../../components/UI/Popover'

import delight_feedback_icons from '../../images/delight-feedback-icons.png'
import kdp_logo_stacked from '../../images/kdp-logo-stacked.gif'

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
                                </div>
                                <div className="publication__videOverlay"></div>
                                <h1 class="a__spacing__top__medium a__color__state">
                                Self-publish eBooks and paperbacks for free with Kindle Direct Publishing, and reach millions of readers on Amazon.   
                                </h1>
                            </section>
                            <section className="col-4 px-0">

                            </section>
                        </div>
                    </section>
                </section>
            </main>
        </div>
    )
}

export default IndependentPublication
