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
import john_wick_3 from '../../images/videos/john_wick_3.jpg'      

import hero_slider_1 from '../../images/sliders/hero_slider_1.jpg'
import hero_slider_2 from '../../images/sliders/hero_slider_2.jpg'
import hero_slider_3 from '../../images/sliders/hero_slider_3.jpg'
import hero_slider_4 from '../../images/sliders/hero_slider_4.jpg'
import hero_slider_5 from '../../images/sliders/hero_slider_5.jpg'

import desktop_bubbler from '../../images/stores-and-programs/desktop_bubbler.jpg'
import mozart_fr_bubbler from '../../images/stores-and-programs/mozart_fr_bubbler.jpg'
import outlets_hoveler from '../../images/stores-and-programs/outlets_hoveler.png'
import registry from '../../images/stores-and-programs/registry.jpg'
import warehouse_deals_bubbler from '../../images/stores-and-programs/warehouse_deals_bubbler.jpg'
import coupon_bubbler from '../../images/stores-and-programs/coupon_bubbler.jpg'



const Home = (props) => {

  return(

        <Layout>

            <Slider 
                items={[
                    {

                        href: '/',
                        src: hero_slider_1,
                        altText: "Slide 1",
                        caption: "Slide 1"
                    },
                    {

                        href: '/',
                        src: hero_slider_2,
                        altText: "Slide 2",
                        caption: "Slide 2"
                    },
                    {

                        href: '/',
                        src: hero_slider_3,
                        altText: "Slide 3",
                        caption: "Slide 3"
                    },
                    {

                        href: '/',
                        src: hero_slider_4,
                        altText: "Slide 4",
                        caption: "Slide 4"
                    },
                    {

                        href: '/',
                        src: hero_slider_5,
                        altText: "Slide 5",
                        caption: "Slide 5"
                    }
                ]}
            />

            <section className="sub__layout">

                <section className="sub__layout__card">
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
                        slug={"John-Wick-3-Parabellum"}
                        img={john_wick_3}
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
                </section>

                <section className="secondary__layout">
                        
                    <Slider 
                        type={"multiImage"}
                        count={6}
                        items={[
                            {

                                href: '/',
                                src: coupon_bubbler,
                                altText: "Coupons",
                                caption: "Coupons"
                            },
                            {

                                href: '/',
                                src: warehouse_deals_bubbler,
                                altText: "Warehouse Deals",
                                caption: "Warehouse Deals"
                            },
                            {

                                href: '/',
                                src: registry,
                                altText: "Registry",
                                caption: "Registry"
                            },
                            {

                                href: '/',
                                src: outlets_hoveler,
                                altText: "Outlet",
                                caption: "Outlet"
                            },
                            {

                                href: '/',
                                src: mozart_fr_bubbler,
                                altText: "Switch To French",
                                caption: "Switch To French"
                            },
                            {

                                href: '/',
                                src: desktop_bubbler,
                                altText: "Subscribe & Save",
                                caption: "Subscribe & Save"
                            }
                        ]}
                    />

                </section>

            </section>

        </Layout>
    )
 }

export default Home