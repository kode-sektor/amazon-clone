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

import ultra_long_rgb_led_light_strips_50ft from '../../images/todays-deals/ultra_long_rgb_led_light_strips_50ft.jpg'
import knee_brace_support from '../../images/todays-deals/cambivo_knee_brace_support.jpg'
import columbia_and_winter_apparel_brands from '../../images/todays-deals/columbia_and_winter_apparel_brands.jpg'
import DELOMO_smart_interactive_cat_toy_ball from '../../images/todays-deals/DELOMO_smart_interactive_cat_toy_ball.jpg'
import govee_car_led_lights from '../../images/todays-deals/govee_car_led_lights.jpg'
import hp_chromebooks from '../../images/todays-deals/hp_chromebooks.jpg'
import SEALIGHT_H11_H8_H9_LED_headlight_bulbs from '../../images/todays-deals/SEALIGHT_H11_H8_H9_LED_headlight_bulbs.jpg'
import SMD_5050_RGB_light_strips_with_bluetooth_controller from '../../images/todays-deals/SMD_5050_RGB_light_strips_with_bluetooth_controller.jpg'
import stellar_floodlight_camera from '../../images/todays-deals/stellar_floodlight_camera.jpg'
import ticarve_cleaning_gel_for_car_detailing from '../../images/todays-deals/ticarve_cleaning_gel_for_car_detailing.jpg'
import TRMS_4000_counts_multimètre_voltage_tester from '../../images/todays-deals/TRMS_4000_counts_multimètre_voltage_tester.jpg'
import vankyo_gaming_headset_CM7000 from '../../images/todays-deals/vankyo_gaming_headset_CM7000.jpg'
import vansky_51_LEDs_blacklight_flashlight_pets_ultra_violet_urine_and_stain_detector from '../../images/todays-deals/vansky_51_LEDs_blacklight_flashlight_pets_ultra_violet_urine_and_stain_detector.jpg'
import waailu_compatible_for_apple_watch from '../../images/todays-deals/waailu_compatible_for_apple_watch.jpg'
import women_running_shoes_breathable_lightweight from '../../images/todays-deals/women_running_shoes_breathable_lightweight.jpg'



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

                    <div className="secondary__slider">
                        <div className="secondary__layout__inner">
                            <header className="secondary__slider__header">
                                <h2 className="secondary__slider__heading">Browse stores, programs, and more</h2>
                                <a href="/" className="explore__more">Explore more</a>
                            </header>
                            <Slider 
                                type={"multiImage"}
                                carouselClass={"secondary__carousel"}
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
                        </div>
                    </div>
                    <hr className="card__break"/>
                    <div className="secondary__slider ">
                        <div className="secondary__layout__inner deals">
                            <header className="secondary__slider__header">
                                <h2 className="secondary__slider__heading">Today's Deals</h2>
                                <a href="/" className="explore__more">See all deals</a>
                            </header>
                            <Slider 
                                type={"multiImage"}
                                carouselClass={"secondary__carousel"}
                                count={6}
                                items={[
                                    {

                                        href: '/',
                                        src: ultra_long_rgb_led_light_strips_50ft,
                                        altText: "ultra long rgb led light strips 50ft",
                                        caption: "ultra long rgb led light strips 50ft"
                                    },
                                    {

                                        href: '/',
                                        src: knee_brace_support,
                                        altText: "knee brace support",
                                        caption: "knee brace support"
                                    },
                                    {

                                        href: '/',
                                        src: columbia_and_winter_apparel_brands,
                                        altText: "columbia and winter apparel brands",
                                        caption: "columbia and winter apparel brands"
                                    },
                                    {

                                        href: '/',
                                        src: DELOMO_smart_interactive_cat_toy_ball,
                                        altText: "DELOMO smart interactive cat toy ball",
                                        caption: "DELOMO smart interactive cat toy ball"
                                    },
                                    {

                                        href: '/',
                                        src: govee_car_led_lights,
                                        altText: "govee car led lights",
                                        caption: "govee car led lights"
                                    },
                                    {

                                        href: '/',
                                        src: hp_chromebooks,
                                        altText: "hp chromebooks",
                                        caption: "hp chromebooks"
                                    },
                                    {

                                        href: '/',
                                        src: SEALIGHT_H11_H8_H9_LED_headlight_bulbs,
                                        altText: "SEALIGHT H11 H8 H9 LED headlight_bulbs",
                                        caption: "SEALIGHT H11 H8 H9 LED headlight_bulbs"
                                    },
                                    {

                                        href: '/',
                                        src: SMD_5050_RGB_light_strips_with_bluetooth_controller,
                                        altText: "SMD 5050 RGB light strips with bluetooth controller",
                                        caption: "SMD 5050 RGB light strips with bluetooth controller"
                                    },
                                    {

                                        href: '/',
                                        src: stellar_floodlight_camera,
                                        altText: "stellar floodlight camera",
                                        caption: "stellar floodlight camera"
                                    },
                                    {

                                        href: '/',
                                        src: ticarve_cleaning_gel_for_car_detailing,
                                        altText: "ticarve cleaning gel for car detailing",
                                        caption: "ticarve cleaning gel for car detailing"
                                    },
                                    {

                                        href: '/',
                                        src: TRMS_4000_counts_multimètre_voltage_tester,
                                        altText: "TRMS 4000 counts multimètre voltage tester",
                                        caption: "TRMS 4000 counts multimètre voltage tester"
                                    },
                                    {

                                        href: '/',
                                        src: vankyo_gaming_headset_CM7000,
                                        altText: "vankyo gaming headset CM7000",
                                        caption: "vankyo gaming headset CM7000"
                                    },
                                    {

                                        href: '/',
                                        src: vansky_51_LEDs_blacklight_flashlight_pets_ultra_violet_urine_and_stain_detector,
                                        altText: "vansky 51 LEDs blacklight flashlight pets ultra violet urine and stain detector",
                                        caption: "vansky 51 LEDs blacklight flashlight pets ultra violet urine and stain detector"
                                    },
                                    {

                                        href: '/',
                                        src: waailu_compatible_for_apple_watch,
                                        altText: "waailu compatible for apple watch",
                                        caption: "waailu compatible for apple watch"
                                    },
                                    {

                                        href: '/',
                                        src: women_running_shoes_breathable_lightweight,
                                        altText: "women running shoes breathable lightweight",
                                        caption: "women running shoes breathable lightweight"
                                    }
                                ]}
                            />
                        </div>
                    </div>
                        
                </section>

            </section>

        </Layout>
    )
 }

export default Home