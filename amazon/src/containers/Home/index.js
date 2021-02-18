import React from 'react'
import Layout from '../../components/Layout/index'

import Slider from './Carousel'

import './index.css'

import user_avatar from '../../images/user_avatar.jpg'

const Home = (props) => {
  return(
        <Layout>
            <Slider />
            <section className="sub__layout">
                <section className="sub__layout__card">
                    <div className="sub__layout__card__grid">
                        <div className="sub__layout__inner">
                            <h3 className="sub__layout__inner__header">
                                <a className="sub__layout__inner__header__avatar">
                                    <img className="user__avatar" src={user_avatar} alt="profile image" />
                                </a>
                                <div className="sub__layout__inner__header__greeting">
                                    <h2 className="sub__layout__inner__header__name">Hi, Kay</h2>
                                    <p>Customer since 2020</p>
                                </div>
                            </h3>
                            <section className="sub__layout__inner__body">
                                <p className="sub__layout__inner__intro__text">Top links for you</p>
                                <section className="sub__layout__inner__frame">
                                    <figure className="sub__layout__inner__categories">
                                        <div className="sub__layout__inner__categories__wrap">
                                            <div className="sub__layout__inner__innerwrap">
                                                <img alt="top categories recomendations" src="https://m.media-amazon.com/images/G/15/Gateway/orders._AC_SR120,80_.png"/>
                                                <a aria-label="top categories recomendations" href="https://www.amazon.ca/gp/css/order-history?"></a>
                                            </div>
                                            <figcaption>Your orders</figcaption>
                                        </div>
                                    </figure>
                                    <figure className="sub__layout__inner__categories">
                                        <div className="sub__layout__inner__categories__wrap">
                                            <div className="sub__layout__inner__innerwrap">
                                                <img alt="top categories recomendations" src="https://m.media-amazon.com/images/G/15/Gateway/orders._AC_SR120,80_.png"/>
                                                <a aria-label="top categories recomendations" href="https://www.amazon.ca/gp/css/order-history?"></a>
                                            </div>
                                            <figcaption>Your orders</figcaption>
                                        </div>
                                    </figure>
                                    <figure className="sub__layout__inner__categories">
                                        <div className="sub__layout__inner__categories__wrap">
                                            <div className="sub__layout__inner__innerwrap">
                                                <img alt="top categories recomendations" src="https://m.media-amazon.com/images/G/15/Gateway/orders._AC_SR120,80_.png"/>
                                                <a aria-label="top categories recomendations" href="https://www.amazon.ca/gp/css/order-history?"></a>
                                            </div>
                                            <figcaption>Your orders</figcaption>
                                        </div>
                                    </figure>
                                    <figure className="sub__layout__inner__categories">
                                        <div className="sub__layout__inner__categories__wrap">
                                            <div className="sub__layout__inner__innerwrap">
                                                <img alt="top categories recomendations" src="https://m.media-amazon.com/images/G/15/Gateway/orders._AC_SR120,80_.png"/>
                                                <a aria-label="top categories recomendations" href="https://www.amazon.ca/gp/css/order-history?"></a>
                                            </div>
                                            <figcaption>Your orders</figcaption>
                                        </div>
                                    </figure>
                                </section>
                            </section>
                        </div>
                    </div>
                </section>
            </section>
        </Layout>
    )
 }

export default Home