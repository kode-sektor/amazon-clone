import React from 'react'
import Layout from '../../components/Layout/index'

import Slider from './Carousel'

import './index.css'

import user_avatar from '../../images/user_avatar.jpg'
import card_gifting from '../../images/card_gifting.jpg'
import electronics_headphones from '../../images/electronics_headphones.jpg'
import home_kitchen from '../../images/home_kitchen.jpg'
import your_orders from '../../images/your_orders.jpg'

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
                                    <div className="sub__layout__inner__body__recently__viewed">
                                        <img alt="Gotham Steel Sandwich Maker, Toaster and Electric Panini Grill with Ultra Nonstick Copper Surface - Makes 2 Sandwiches in Minutes with Virtually No Clean Up, with Easy Cut Edges and Indicator Lights" src="https://m.media-amazon.com/images/I/41S4lanqmIL._AC_SL260_.jpg" class="hud-dashboard-card-v2-image"/>
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
                </div>
            </section>
        </Layout>
    )
 }

export default Home