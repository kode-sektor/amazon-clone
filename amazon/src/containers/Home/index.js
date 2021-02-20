import React from 'react'
import Layout from '../../components/Layout/index'

import { Card_One } from '../../components/UI/Card'

import Slider from './Carousel'

import './index.css'

import user_avatar from '../../images/user_avatar.jpg'
import card_gifting from '../../images/card_gifting.jpg'
import electronics_headphones from '../../images/electronics_headphones.jpg'
import home_kitchen from '../../images/home_kitchen.jpg'
import your_orders from '../../images/your_orders.jpg'
import desktop_small_big_card from '../../images/desktop_small_big_card.jpg'
import desktop_deals_pets from '../../images/desktop_deals_pets.jpg'
import home_and_kitchen from '../../images/home_and_kitchen.jpg'

const Home = (props) => {
  return(
        <Layout>
            <Slider />
            <section className="sub__layout">
                <div className="sub__layout__card">
                    <section className="sub__layout__card__grid">
                        <div className="sub__layout__inner">
                            <h2 className="sub__layout__inner__header">
                                <a className="sub__layout__inner__header__avatar">
                                    <img className="user__avatar" src={user_avatar} alt="profile image" />
                                </a>
                                <div className="sub__layout__inner__header__greeting">
                                    <span className="sub__layout__inner__header__title">Hi, Kay</span>
                                    <span className="sub__layout__inner__header__reg">Customer since 2020</span>
                                </div>
                            </h2>
                            <section className="sub__layout__inner__body">
                                <p className="sub__layout__inner__intro__text">Top links for you</p>
                                <section className="sub__layout__inner__frame">
                                    <figure className="sub__layout__inner__categories">
                                        <div className="sub__layout__inner__categories__wrap">
                                            <div className="sub__layout__inner__innerwrap">
                                                <img alt="top categories recomendations" src={your_orders}/>
                                                <a aria-label="top categories recomendations" href="https://www.amazon.ca/gp/css/order-history?"></a>
                                            </div>
                                            <figcaption>Your Orders</figcaption>
                                        </div>
                                    </figure>
                                    <figure className="sub__layout__inner__categories">
                                        <div className="sub__layout__inner__categories__wrap">
                                            <div className="sub__layout__inner__innerwrap">
                                                <img alt="top categories recomendations" src={card_gifting}/>
                                                <a aria-label="top categories recomendations" href="https://www.amazon.ca/gp/css/order-history?"></a>
                                            </div>
                                            <figcaption>Gift Finder</figcaption>
                                        </div>
                                    </figure>
                                    <figure className="sub__layout__inner__categories">
                                        <div className="sub__layout__inner__categories__wrap">
                                            <div className="sub__layout__inner__innerwrap">
                                                <img alt="top categories recomendations" src={electronics_headphones}/>
                                                <a aria-label="top categories recomendations" href="https://www.amazon.ca/gp/css/order-history?"></a>
                                            </div>
                                            <figcaption>Electronics</figcaption>
                                        </div>
                                    </figure>
                                    <figure className="sub__layout__inner__categories">
                                        <div className="sub__layout__inner__categories__wrap">
                                            <div className="sub__layout__inner__innerwrap">
                                                <img alt="top categories recomendations" src={home_kitchen}/>
                                                <a aria-label="top categories recomendations" href="https://www.amazon.ca/gp/css/order-history?"></a>
                                            </div>
                                            <figcaption>Home &amp; Kitchen</figcaption>
                                        </div>
                                    </figure>
                                </section>
                            </section>
                        </div>
                    </section>
                    <section className="sub__layout__card__grid">
                        <div className="sub__layout__inner">
                            <h2 className="sub__layout__inner__header">
                                <span className="sub__layout__inner__header__title">Recently Viewed</span>
                            </h2>
                            <section className="sub__layout__inner__body">
                                <a href="/gp/product/B07MM2RVM5">
                                    <div className="sub__layout__inner__body__fluid__img">
                                        <img alt="Gotham Steel Sandwich Maker, Toaster and Electric Panini Grill with Ultra Nonstick Copper Surface - Makes 2 Sandwiches in Minutes with Virtually No Clean Up, with Easy Cut Edges and Indicator Lights" src="https://m.media-amazon.com/images/I/41S4lanqmIL._AC_SL260_.jpg"/>
                                    </div>
                                </a>
                                <div className="sub__layout__inner__timeline">
                                    <div class="sub__layout__inner__timelinedot"></div>
                                    <div class="sub__layout__inner__timelineline"></div>

                                    <p class="sub__layout__inner__timelinedate">Sun, Feb 14</p>
                                    <p className="sub__layout__card__grid__footer">
                                        <a href="/history">See your browsing history</a>
                                    </p>
                                </div>
                            </section>
                        </div>
                    </section>
                    <Card_One
                        title={"Shop top-rated fashion"}
                        img={desktop_small_big_card}
                        alt={"Gotham Steel Sandwich Maker, Toaster and Electric Panini Grill with Ultra Nonstick Copper Surface - Makes 2 Sandwiches in Minutes with Virtually No Clean Up, with Easy Cut Edges and Indicator Lights"}
                        link={"/history"}
                        linktxt={"Shop Now"}
                    />
                    <section className="sub__layout__card__grid gift">
                        <div className="sub__layout__inner">
                            <h2 className="sub__layout__inner__header">
                                <span className="sub__layout__inner__header__title">Looking for a gift?</span>
                            </h2>
                            <section className="sub__layout__inner__body">
                                <p>Find personalized gift ideas for everyone on your list.</p>
                                <p className="sub__layout__card__grid__footer">
                                    <a href="/history">Explore Now</a>
                                </p>
                            </section>
                        </div>
                    </section>

                    <hr className="card__break"/>

                    <section className="sub__layout__card__grid grid__half">
                        <div className="prime__video">
                            <h2 className="prime__video__header">
                                <span className="prime__video__title">Prime Video: Recommended for you</span>
                                <span className="prime__video__maintitle">John Wick 3: Parabellum</span>
                            </h2>
                            <section className="prime__video__ui__card">
                                <div className="prime__video__img"></div>
                                <a href="/">
                                    <div className="prime__video__imgLink">
                                        <img className="prime__video__image" src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/d1df7bdf7c76eec04489aa7931026362fed5284766e091f85c8594851526cd3d._RI_V_TTW_QL40_AC_SL792_.jpg" alt="John Wick 3: Parabellum"/>
                                    </div>
                                    <div className="prime__gradient"></div>
                                </a>
                            </section>
                            <div className="sub__layout__inner__timeline">
                                <p className="sub__layout__card__grid__footer">
                                    <a href="/history">Shop Now</a>
                                </p>
                            </div>
                        </div>
                    </section>

                    <Card_One
                        title={"Shop our Pets store"}
                        img={desktop_deals_pets}
                        alt={"Shop our Pets store"}
                        link={"/pet-deals"}
                        linktxt={"See More"}
                    />

                    <Card_One
                        title={"Shop deals in Home & Kitchen"}
                        img={home_and_kitchen}
                        alt={"Shop deals in Home & Kitchen"}
                        link={"/home-and-kitchen"}
                        linktxt={"Shop Now"}
                    />

                </div>
            </section>
        </Layout>
    )
 }

export default Home