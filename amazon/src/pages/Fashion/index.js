import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../components/Layout'
import ProgressiveSubNav from '../../components/Header/ProgressiveSubNav'

import women from '../../images/nav/women.gif'
import men from '../../images/nav/men.gif'
import girls from '../../images/nav/girls.gif'
import boys from '../../images/nav/boys.gif'
import baby from '../../images/nav/baby.gif'
import luggage from '../../images/nav/luggage.gif'
import highly_rated_favourites from '../../images/highly-rated-favourites.jpg'
import mens_fashion_favourites from '../../images/mens-fashion-favourites.jpg'
import coveted_womens_styles from '../../images/coveted-womens-styles.jpg'

import amazon_essentials_womens_denim from '../../images/amazon-essentials-womens-denim.jpg'
import easy_dresses from '../../images/easy-dresses.jpg'
import go_to_shirts from '../../images/go-to-shirts.jpg'
import mens_style_staples from '../../images/mens-style-staples.jpg'
import womens_must_see_deals from '../../images/womens-must-see-deals.jpg'
import mens_must_see_deals from '../../images/mens-must-see-deals.jpg'
import get_fit_at_home from '../../images/get-fit-at-home.jpg'
import shop_by_price from '../../images/shop-by-price.jpg'

import shop_womens from '../../images/nav/shop-womens.jpg'
import dresses_under_30 from '../../images/nav/dresses-under-30.jpg'
import lounge_under_25 from '../../images/nav/lounge-under-25.jpg'
import boots_under_75 from '../../images/nav/boots-under-75.jpg'
import coats_and_jackets_under_50 from '../../images/nav/coats-and-jackets-under-50.jpg'
import activewear_under_30 from '../../images/nav/activewear-under-30.jpg'

import shop_mens from '../../images/nav/shop-mens.jpg'
import tees_under_25 from '../../images/nav/tees-under-25.jpg'
import sneakers_under_50 from '../../images/nav/sneakers-under-50.jpg'

import './index.css'

const Fashion = () => {

    const FashionPage = () => (
        <>
            <ProgressiveSubNav />
            <section className="a__container">
                <section className="navSub">
                    <section className="sl__sobe__card__desktop navSub__menu">
                        <div className="sobe__d__b__2__container">
                            <div className="sobe__d__b__2__carousel" userinputtype="mouse">
                                <div className="sl__sobe__carousel__header">
                                    <h2>Shop by category</h2>
                                </div>
                                <div className="sobe__d__b__2__carousel__viewport__container">
                                    <div className="sl__sobe__carousel__viewport">
                                        <div className="sl__sobe__carousel__viewport__row">
                                            <ol className="sl__sobe__carousel__viewport__row__inner">
                                                <li className="sl__sobe__carousel__sub__card">
                                                    <Link to="/" className="sl__sobe__carousel__sub__card__image">
                                                        <img src={women} className="sl__sobe__carousel__sub__card__img" style={{"max-width" : "75%",
    "max-height" : "75%"}} alt="women" />
                                                    <div className="sl__sobe__carousel__sub__card__image__overlay"></div>
                                                    </Link>
                                                </li>
                                                <li className="sl__sobe__carousel__sub__card">
                                                    <Link to="/" className="sl__sobe__carousel__sub__card__image">
                                                        <img src={men} className="sl__sobe__carousel__sub__card__img" style={{"max-width" : "75%",
    "max-height" : "75%"}} alt="men" />
                                                    <div className="sl__sobe__carousel__sub__card__image__overlay"></div>
                                                    </Link>
                                                </li>
                                                <li className="sl__sobe__carousel__sub__card">
                                                    <Link to="/" className="sl__sobe__carousel__sub__card__image">
                                                        <img src={girls} className="sl__sobe__carousel__sub__card__img" style={{"max-width" : "75%",
    "max-height" : "75%"}} alt="girls" />
                                                    <div className="sl__sobe__carousel__sub__card__image__overlay"></div>
                                                    </Link>
                                                </li>
                                                <li className="sl__sobe__carousel__sub__card">
                                                    <Link to="/" className="sl__sobe__carousel__sub__card__image">
                                                        <img src={boys} className="sl__sobe__carousel__sub__card__img" style={{"max-width" : "75%",
    "max-height" : "75%"}} alt="boys" />
                                                    <div className="sl__sobe__carousel__sub__card__image__overlay"></div>
                                                    </Link>
                                                </li>
                                                <li className="sl__sobe__carousel__sub__card">
                                                    <Link to="/" className="sl__sobe__carousel__sub__card__image">
                                                        <img src={baby} className="sl__sobe__carousel__sub__card__img" style={{"max-width" : "75%",
    "max-height" : "75%"}} alt="baby" />
                                                    <div className="sl__sobe__carousel__sub__card__image__overlay"></div>
                                                    </Link>
                                                </li>
                                                <li className="sl__sobe__carousel__sub__card">
                                                    <Link to="/" className="sl__sobe__carousel__sub__card__image">
                                                        <img src={luggage} className="sl__sobe__carousel__sub__card__img" style={{"max-width" : "75%",
    "max-height" : "75%"}} alt="luggage" />
                                                    <div className="sl__sobe__carousel__sub__card__image__overlay"></div>
                                                    </Link>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="bxc__grid__spacing__large">
                    <div className="bxc__grid__container bxc__grid__container__width__1500">
                        <div className="bxc__grid__row bxc__grid__row__light">
                            <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                <div className="bxc__grid__content bxc__grid__content__light">
                                    <div className="bxc__grid__image bxc__grid__image__light">
                                        <Link to="/">
                                            <img src={highly_rated_favourites} alt="highly rated favourites"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bxc__grid__row bxc__grid__row__light">
                            <div className="bxc__grid__column bxc__grid__column__6__of__12 bxc__grid__column__light">
                                <div className="bxc__grid__content bxc__grid__content__light">
                                    <div className="bxc__grid__image bxc__grid__image__light">
                                        <Link to="/">
                                            <img src={mens_fashion_favourites} alt="Off to University Personal Care"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="bxc__grid__column bxc__grid__column__6__of__12 bxc__grid__column__light">
                                <div className="bxc__grid__content bxc__grid__content__light">
                                    <div className="bxc__grid__image bxc__grid__image__light">
                                        <Link to="/">
                                            <img src={coveted_womens_styles} alt="Off to University Personal Care"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="fashionGallery">
                    <section className="bxc__grid__spacing__large">
                        <div className="bxc__grid__container bxc__grid__container__width__1500">
                            <div className="bxc__grid__row bxc__grid__row__light">
                                <div className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light">
                                            <Link to="/">
                                                <img src={amazon_essentials_womens_denim} alt="highly rated favourites"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light">
                                            <Link to="/">
                                                <img src={easy_dresses} alt="highly rated favourites"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light">
                                            <Link to="/">
                                                <img src={go_to_shirts} alt="highly rated favourites"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light">
                                            <Link to="/">
                                                <img src={mens_style_staples} alt="highly rated favourites"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bxc__grid__row bxc__grid__row__light ">
                                <div className="bxc__grid__column bxc__grid__column__4__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light">
                                            <Link to="/">
                                                <img src={womens_must_see_deals} alt="Off to University Personal Care"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="bxc__grid__column bxc__grid__column__4__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light">
                                            <Link to="/">
                                                <img src={mens_must_see_deals} alt="Off to University Personal Care"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="bxc__grid__column bxc__grid__column__4__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light">
                                            <Link to="/">
                                                <img src={get_fit_at_home} alt="Off to University Personal Care"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <section className="fashionShopByPrice">
                                <div className="bxc__grid__row bxc__grid__row__light">
                                    <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={shop_by_price} alt="shop by price"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bxc__grid__row bxc__grid__row__light bxc__grid__no__gutter">
                                    <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <img src={shop_womens} alt="shop womens"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={dresses_under_30} alt="dresses under $30"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={lounge_under_25} alt="lounge under $25"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={boots_under_75} alt="boots under $75"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={coats_and_jackets_under_50} alt="coats and jackets under $50"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={activewear_under_30} alt="activewear under $30"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bxc__grid__row bxc__grid__row__light bxc__grid__no__gutter">
                                    <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <img src={shop_mens} alt="Shop Mens"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={tees_under_25} alt="Tees under $25"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={lounge_under_25} alt="lounge under $25"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={sneakers_under_50} alt="sneakers under $50"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={coats_and_jackets_under_50} alt="coats and jackets under $50"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={activewear_under_30} alt="activewear under $30"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                </section>
            </section>
        </>
    )

    return (
        <Layout>
            <FashionPage />
        </Layout>
    )
}

export default Fashion
