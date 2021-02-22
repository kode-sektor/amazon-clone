import React from 'react'
import Layout from '../../components/Layout/index'

import { Card_One, Card_Two, Card_Three, Card_Four, Card_Video } from '../../components/UI/Card'

import Slider from './Carousel'

import './index.css'

import user_avatar from '../../images/user_avatar.jpg'
import card_gifting from '../../images/card_gifting.jpg'
import electronics_headphones from '../../images/categories/electronics_headphones.jpg'
import home_kitchen from '../../images/categories/home_kitchen.jpg'
import your_orders from '../../images/your_orders.jpg'
import desktop_small_big_card from '../../images/desktop_small_big_card.jpg'
import desktop_deals_pets from '../../images/desktop_deals_pets.jpg'
import home_and_kitchen from '../../images/home_and_kitchen.jpg'
import sandwich_toaster from '../../images/products/sandwich_toaster.jpg'

const Home = (props) => {
  return(
        <Layout>
            <Slider />
            <section className="sub__layout">
                <div className="sub__layout__card">
                    <Card_One
                        name="Kay"
                        date={"2020"}
                        img={[ 
                            {
                                avatar : user_avatar,
                                img_one : { 
                                    img : your_orders,
                                    href : "https://www.amazon.ca/gp/css/order-history?",
                                    alt : "top categories recomendations"
                                },
                                img_two : {
                                    img : card_gifting,
                                    href : "https://www.amazon.ca/gp/css/order-history?",
                                    alt : "top categories recomendations"
                                },
                                img_three : {
                                    img : electronics_headphones,
                                    href : "https://www.amazon.ca/gp/css/order-history?",
                                    alt : "top categories recomendations"
                                },
                                img_four : {
                                    img : home_kitchen,
                                    href : "https://www.amazon.ca/gp/css/order-history?",
                                    alt : "top categories recomendations"
                                }
                            }
                        ]}
                    />
                    <Card_Two 
                        title={"Recently Viewed"}
                        img={[
                            {
                                href : sandwich_toaster,
                                alt : "Gotham Steel Sandwich Maker, Toaster and Electric Panini Grill with Ultra Nonstick Copper Surface - Makes 2 Sandwiches in Minutes with Virtually No Clean Up, with Easy Cut Edges and Indicator Lights",
                                link : "/gp/product/B07MM2RVM5",
                            }
                        ]}
                        date={"Sun, Feb 14"}
                    />
                    <Card_Three
                        title={"Shop top-rated fashion"}
                        img={desktop_small_big_card}
                        alt={"Gotham Steel Sandwich Maker, Toaster and Electric Panini Grill with Ultra Nonstick Copper Surface - Makes 2 Sandwiches in Minutes with Virtually No Clean Up, with Easy Cut Edges and Indicator Lights"}
                        link={"/history"}
                        linktxt={"Shop Now"}
                    />
                    
                    <Card_Four
                        title={"Looking for a gift?"}
                        text={"Find personalized gift ideas for everyone on your list."}
                        catLink={"/gifts"}
                    />

                    <hr className="card__break"/>

                    <Card_Video
                        title={"John Wick 3: Parabellum"}
                        img={"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/d1df7bdf7c76eec04489aa7931026362fed5284766e091f85c8594851526cd3d._RI_V_TTW_QL40_AC_SL792_.jpg"}
                    />

                    <Card_Three
                        title={"Shop our Pets store"}
                        img={desktop_deals_pets}
                        alt={"Shop our Pets store"}
                        link={"/pet-deals"}
                        linktxt={"See More"}
                    />

                    <Card_Three
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