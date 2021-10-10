import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../components/Layout'
import { BrowseBoxPrimary } from '../../components/UI/BrowseBox'

import storefrontca_desktop from '../../images/banner/storefrontca-desktop.jpg'
import amex_tile from '../../images/amex-tile.jpg'
import td_tile from '../../images/td-tile.jpg'

import './index.css'

const ShopWithPoints = () => {

    const ShopWithPoint = () => (
        <section className="a__container">
            <section className="giftCards d-flex mx-0 flex-fill">
                <section className="giftCards__browsebox browserBox">
                    <BrowseBoxPrimary
                        title={"Department"}
                        links={
                            [
                                {
                                    text : "< Credit Cards",
                                    indentClass : "a__indent__1"
                                },
                                {
                                    href : "/",
                                    text : "Shop with Points",
                                    indentClass : "a__indent__2"
                                }
                            ]
                        }
                    />
                </section>
                <section className="apBrowse flex-fill">
                    <section>
                        <div className="bxc__grid__spacing__large">
                            <section className="bxc__grid__container bxc__grid__container__width__1500">
                                <section className="bxc__grid__row bxc__grid__row__light">
                                    <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={storefrontca_desktop} alt="Amazon.ca Shop with points"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="bxc__grid__row bxc__grid__row__light">
                                    <div className="bxc__grid__column bxc__grid__column__6__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <img src={amex_tile} alt="American Express"/>
                                                <div className="bxc__grid__text text-center bxc__grid__overlay__background  bxc__grid__text__light">
                                                    <h3>See details</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__6__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <img src={td_tile} alt="TD"/>
                                                <div className="bxc__grid__text text-center bxc__grid__overlay__background  bxc__grid__text__light">
                                                    <h3>See details</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </section>
                        </div>
                    </section>
                </section>
            </section>
        </section>
    )
    return (
        <Layout>
            <ShopWithPoint/>
        </Layout>
    )
}

export default ShopWithPoints
