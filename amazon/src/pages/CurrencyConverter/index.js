import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../components/Layout'
import { BrowseBoxSimple } from '../../components/UI/BrowseBox'

import accb_banner_desktop_en from '../../images/banner/accb-banner-desktop-en.png'
import accb_benefits_desktop_en from '../../images/banner/accb-benefits-desktop-en.png'
import accb_currencies_desktop_en from '../../images/banner/accb-currencies-desktop-en.png'
import accb_payment_methods_desktop_en from '../../images/banner/accb-payment-methods-desktop-en.png'
import accb_faq_desktop_en from '../../images/banner/accb-faq-desktop-en.png'

const CurrencyConverter = () => {

    const CurrencyConverterPage = () => {

        return (
            <section className="a__container">
                <section className="d-flex mx-0 flex-fill">
                    <section className="beauty__browsebox browserBox">
                        <BrowseBoxSimple
                            title={"By Product Group"}
                            links={
                                [
                                    {
                                        href : "/books",
                                        text : "Books"
                                    },
                                    {
                                        href : "/movies-and-tv",
                                        text : "Movies & TV"
                                    },
                                    {
                                        href : "/music",
                                        text : "Music"
                                    },
                                    {
                                        href : "/electronics",
                                        text : "Electronics"
                                    },
                                    {
                                        href : "/toys",
                                        text : "Toys"
                                    },
                                    {
                                        href : "/kitchen-and-dining",
                                        text : "Kitchen & Dining"
                                    },
                                    {
                                        href : "/sports-and-outdoors",
                                        text : "Sports & Outdoors"
                                    },
                                    {
                                        href : "/video-games",
                                        text : "Video Games"
                                    },
                                    {
                                        href : "/watches",
                                        text : "Watches"
                                    },
                                    {
                                        href : "/beauty",
                                        text : "Beauty"
                                    },
                                    {
                                        href : "/tools-and-home-improvement",
                                        text : "Tools & Home Improvement"
                                    },
                                    {
                                        href : "/the-baby-store",
                                        text : "The Baby Store"
                                    }
                                ]
                            }
                        />
                    </section>
                    <section className="apBrowse flex-fill">
                        <section className="bxc__grid__spacing__large">
                            <div className="bxc__grid__container bxc__grid__container__width__1500">
                                <div className="bxc__grid__row bxc__grid__row__light">
                                    <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={accb_banner_desktop_en} alt="Shop stress-free, using your local currency"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bxc__grid__row bxc__grid__row__light">
                                    <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={accb_benefits_desktop_en} alt="Currency Converter Value Propositions: Comfort, Transparency, Protection"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bxc__grid__row bxc__grid__row__light">
                                    <div className="bxc__grid__column bxc__grid__column__4__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={accb_currencies_desktop_en} alt="Supported Currencies"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__4__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={accb_payment_methods_desktop_en} alt="Payment Methods"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__4__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={accb_faq_desktop_en} alt="Currency Converter Value Propositions: Comfort, Transparency, Protection"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bxc__grid__row bxc__grid__row__light">
                                    <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <hr/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bxc__grid__row bxc__grid__row__light">
                                    <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light bxc__grid__text--beauty">
                                                <h2>
                                                    Amazon Currency Converter
                                                </h2>
                                                <p className="p__bottom">
                                                    With Amazon Currency Converter, you can review and place eligible orders in your local currency at checkout. You’ll be able to see the applicable exchange rate below your order total, which includes all Amazon fees and charges related to the use of service. In some cases, your bank may still charge you a fee. Please contact your bank in regards to these fees.
                                                </p>
                                                <Link to="/" className="a__link__emphasis">
                                                    Learn more
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>
                </section>
            </section>
        )
    }

    return (
        <Layout>
            <CurrencyConverterPage/>
        </Layout>
    )
}

export default CurrencyConverter
