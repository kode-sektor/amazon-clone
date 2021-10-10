import React from 'react'

import Layout from '../../components/Layout/index'

import { CardOne, CardTwo, CardThree, CardFour, CardFive, CardVideo } from '../../components/UI/Card'

import Slider from '../../components/UI/Carousel/Carousel'
import PrimaryCarousel from '../../components/UI/Carousel/PrimaryCarousel'
import CarouselDetailed from '../../components/UI/Carousel/CarouselDetailed'

import user_avatar from '../../images/user-avatar.jpg'
import card_gifting from '../../images/card-gifting.jpg'
import electronics_headphones from '../../images/categories/electronics-headphones.jpg'
import home_kitchen from '../../images/categories/home-kitchen.jpg'
import your_orders from '../../images/your-orders.jpg'
import desktop_small_big_card from '../../images/desktop-small-big-card.jpg'
import desktop_deals_pets from '../../images/desktop-deals-pets.jpg'
import home_and_kitchen from '../../images/home-and-kitchen.jpg'
import sandwich_toaster from '../../images/products/sandwich-toaster.jpg'      
import john_wick_3 from '../../images/videos/john-wick-3.jpg'      

import hero_slider_1 from '../../images/sliders/hero-slider-1.jpg'
import hero_slider_2 from '../../images/sliders/hero-slider-2.jpg'
import hero_slider_3 from '../../images/sliders/hero-slider-3.jpg'
import hero_slider_4 from '../../images/sliders/hero-slider-4.jpg'
import hero_slider_5 from '../../images/sliders/hero-slider-5.jpg'

import desktop_bubbler from '../../images/stores-and-programs/desktop-bubbler.jpg'
import mozart_fr_bubbler from '../../images/stores-and-programs/mozart-fr-bubbler.jpg'
import outlets_hoveler from '../../images/stores-and-programs/outlets-hoveler.png'
import registry from '../../images/stores-and-programs/registry.jpg'
import warehouse_deals_bubbler from '../../images/stores-and-programs/warehouse-deals-bubbler.jpg'
import coupon_bubbler from '../../images/stores-and-programs/coupon-bubbler.jpg'

import ultra_long_rgb_led_light_strips_50ft from '../../images/todays-deals/ultra-long-rgb-led-light-strips-50ft.jpg'
import knee_brace_support from '../../images/todays-deals/cambivo-knee-brace-support.jpg'
import columbia_and_winter_apparel_brands from '../../images/todays-deals/columbia-and-winter-apparel-brands.jpg'
import DELOMO_smart_interactive_cat_toy_ball from '../../images/todays-deals/DELOMO-smart-interactive-cat-toy-ball.jpg'
import govee_car_led_lights from '../../images/todays-deals/govee-car-led-lights.jpg'
import hp_chromebooks from '../../images/todays-deals/hp-chromebooks.jpg'
import SEALIGHT_H11_H8_H9_LED_headlight_bulbs from '../../images/todays-deals/SEALIGHT-H11-H8-H9-LED-headlight-bulbs.jpg'
import SMD_5050_RGB_light_strips_with_bluetooth_controller from '../../images/todays-deals/SMD-5050-RGB-light-strips-with-bluetooth-controller.jpg'
import stellar_floodlight_camera from '../../images/todays-deals/stellar-floodlight-camera.jpg'
import ticarve_cleaning_gel_for_car_detailing from '../../images/todays-deals/ticarve-cleaning-gel-for-car-detailing.jpg'
import TRMS_4000_counts_multimètre_voltage_tester from '../../images/todays-deals/TRMS-4000-counts-multimètre-voltage-tester.jpg'
import vankyo_gaming_headset_CM7000 from '../../images/todays-deals/vankyo-gaming-headset-CM7000.jpg'
import vansky_51_LEDs_blacklight_flashlight_pets_ultra_violet_urine_and_stain_detector from '../../images/todays-deals/vansky-51-LEDs-blacklight-flashlight-pets-ultra-violet-urine-and-stain-detector.jpg'
import waailu_compatible_for_apple_watch from '../../images/todays-deals/waailu-compatible-for-apple-watch.jpg'
import women_running_shoes_breathable_lightweight from '../../images/todays-deals/women-running-shoes-breathable-lightweight.jpg'

import JUXIAO_bluetooth_led_lights_strip_for_bedroom from '../../images/related-items/JUXIAO-bluetooth-led-lights-strip-for-bedroom.jpg'
import LED_light_strip_KIKO_color_changing_led_lights from '../../images/related-items/LED-light-strip-KIKO-color-changing-led-lights-21.3ft-x-6.5m.jpg'
import LED_strip_lights from '../../images/related-items/LED-strip-lights-16.4ft.jpg'
import LED_strip_lights_flexible_non_waterproof_50ft_x_15m from '../../images/related-items/LED-strip-lights-flexible-non-waterproof-50ft-x-15m.jpg'
import LED_strip_lights_XProject_LED_lights_for_bedroom_65ft from '../../images/related-items/LED-strip-lights-XProject-LED-lights-for-bedroom-65.6ft.jpg'
import Kokuji_LED_strip_lights_kit_656ft_x_20m from '../../images/related-items/Kokuji-LED-strip-lights-kit-65.6ft-x-20m.jpg'

import evergreen_gssusa from '../../images/categories/evergreen-gssusa.jpg'
import evergreen_kitchen from '../../images/categories/evergreen-kitchen.jpg'
import evergreen_pillows from '../../images/categories/evergreen-pillows.jpg'
import evergreen_earphones from '../../images/categories/evergreen-earphones.jpg'

import listerine_cool_mint_antiseptic_mouthwash from '../../images/products/listerine-cool-mint-antiseptic-mouthwash.jpg'

import amazon_basics from '../../images/amazon-basics/mac-laptop-charging-iphone.jpg'
import coffee_cup from '../../images/products/coffee-cup.jpg'

import apekx from '../../images/products/APEKX-wireless-bluetooth-5.0-sports-earbuds.jpg'
import basil_basket from '../../images/products/basil-cento-rear-basket-black.jpg'
import rack_black from '../../images/products/mega-cooling-rack-black.jpg'
import mirrycle from '../../images/products/mirrycle-incredibell-adjustabell-2-bike-bell.jpg'
import wilton_cake_pan from '../../images/products/wilton-9-x-13-inch-oblong-cake-pan.jpg'
import wilton_stick_8_cake_pan from '../../images/products/wilton-non-stick-8-inch-square-cake-pans.jpg'

import wacom_intuos from '../../images/products/wacom-intuos-graphics-drawing-tablet-7.9-x-6.3-black-(CTL4100).jpg'
import anker_4_port from '../../images/products/anker-4-port-USB-3.0-ultra-slim-data-hub-for-macbook-mac-pro-mini-iMac-surface-pro-XPS-notebook-PC-USB-flash.jpg'
import logitech_C920x_pro_HD_webcam from '../../images/products/logitech-C920x-pro-HD-webcam.jpg'
import nonda_USB_type_C_to_USB_3_adapter from '../../images/products/nonda-USB-type-C-to-USB-3.0-adapter.jpg'
import LUTER_barberology_comb_clipper from '../../images/products/LUTER-barberology-comb-clipper.jpg'
import sabrent_4_port_USB_3_hub from '../../images/products/sabrent-4-port-USB-3.0-hub-with-individual-LED-power-switches.jpg'

import harold_fine_strainer_nylon_mesh from '../../images/products/harold-imports-company-double-ear-fine-strainer-nylon-mesh.jpg'
import IMUSA_IMU_plastic_strainer_7_inch_black from '../../images/products/IMUSA-USA-IMU-71134-plastic-strainer-7-inch-black.jpg'
import UINKE_mesh_strainer_colander_sieve from '../../images/products/UINKE-4-pcs-fine-mesh-strainer-colander-sieve-sifter.jpg'
import starfrit_6_inch_mesh_strainer from '../../images/products/starfrit-092002-6-inch-mesh-strainer.jpg'
import uniware_3_sphere_set_strainers from '../../images/products/uniware-3-sphere-set-strainers-green-orange-&-red.jpg'
import masontops_kefir_caps_wide_mouth_mason_jar_lids from '../../images/products/masontops-kefir-caps-wide-mouth-mason-jar-lids.jpg'

import vileda_easywring_power_refill from '../../images/products/vileda-easywring-power-refill.jpg'
import grace_folly_trucker_hat_for_snapback_mesh_caps from '../../images/products/grace-folly-trucker-hat-for-snapback-mesh-caps.jpg'
import vileda_easy_wring_refill from '../../images/products/vileda-easy-wring-refill.jpg'
import hilroy_premium_black_stitch_book from '../../images/products/hilroy-premium-black-collection-stitch-book-7-1-8-x-9-1-8.jpg'
import flex_fit_classic_snapback_hat from '../../images/products/flex-fit-mens-110-flexfit-classic-snapback-hat.jpg'
import DECKY_flat_bill_trucker_cap_lack from '../../images/products/DECKY-6-panel-flat-bill-trucker-cap-black.jpg'

import family_game_night from '../../images/categories/family-game-night.jpg'
import typing_on_mac from '../../images/categories/typing-on-mac.jpg'
import woman_works_with_laptop from '../../images/categories/woman-works-with-laptop.jpg'
import wall_tv from '../../images/categories/wall-tv.jpg'

import luigi_mansion from '../../images/video-games/luigi-mansion-3-standard-edition.jpg'
import mario_kart from '../../images/video-games/mario-kart-8-deluxe-switch-standard-edition.jpg'
import nintendo_switch from '../../images/video-games/nintendo-switch-animal-crossing-new-horizons-edition.jpg'
import super_mario from '../../images/video-games/super-mario-party-standard-edition.jpg'
import animal_crossing from '../../images/video-games/animal-crossing-new-horizons-standard-edition.jpg'

import ameriwood_lumina from '../../images/products/ameriwood-home-lumina-fireplace-tv-stand-white.jpg'
import modern_cube from '../../images/products/baxton-studio-siskal-modern-cube-ottoman-white-set-of-2.jpg'
import monterey_tv_stand from '../../images/products/convenience-concepts-151401W-designs2Go-monterey-tv-stand.jpg'
import frosted_endtable from '../../images/products/global-furniture-clear-frosted-occasional-end-table.jpg'
import leather_swivel from '../../images/products/furmax-bar-stools-modern-pu-leather-swivel.jpg'
import faux_leather from '../../images/products/best-choice-products-faux-leather-modern-convertible.jpg'

import './index.css'

const Home = () => {

    // const [dropdownOpen, setOpen] = useState(false)
    // const toggle = () => setOpen(!dropdownOpen)
    
    const HomePage = () => (
        <div className="home--page">
            <Slider 
                items={
                    [
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
                    ]
                }
            />
            <section className="sub__layout">
                <section className="sub__layout__card">
                    <CardOne
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
                        cardClass={"grid__card"}
                    />
                    <CardTwo 
                        title={"Recently Viewed"}
                        img={[
                            {
                                href : sandwich_toaster,
                                alt : "Gotham Steel Sandwich Maker, Toaster and Electric Panini Grill with Ultra Nonstick Copper Surface - Makes 2 Sandwiches in Minutes with Virtually No Clean Up, with Easy Cut Edges and Indicator Lights",
                                link : "/gp/product/B07MM2RVM5",
                            }
                        ]}
                        date={"Sun, Feb 14"}
                        cardClass={"block__card"}
                    />
                    <CardThree
                        title={"Shop top-rated fashion"}
                        img={desktop_small_big_card}
                        alt={"Gotham Steel Sandwich Maker, Toaster and Electric Panini Grill with Ultra Nonstick Copper Surface - Makes 2 Sandwiches in Minutes with Virtually No Clean Up, with Easy Cut Edges and Indicator Lights"}
                        link={"/history"}
                        linktxt={"Shop Now"}
                    />
                    <CardFour
                        title={"Looking for a gift?"}
                        text={"Find personalized gift ideas for everyone on your list."}
                        catLink={"/gifts"}
                    />
                    <hr className="card__break"/>
                    <CardVideo
                        title={"John Wick 3: Parabellum"}
                        slug={"John-Wick-3-Parabellum"}
                        img={john_wick_3}
                    />
                    <CardThree
                        title={"Shop our Pets store"}
                        img={desktop_deals_pets}
                        alt={"Shop our Pets store"}
                        link={"/pet-deals"}
                        linktxt={"See More"}
                    />
                    <CardThree
                        title={"Shop deals in Home & Kitchen"}
                        img={home_and_kitchen}
                        alt={"Shop deals in Home & Kitchen"}
                        link={"/home-and-kitchen"}
                        linktxt={"Shop Now"}
                    />
                </section>
                <section className="secondary__layout">
                    <PrimaryCarousel 
                        heading={"Browse stores, programs, and more"}
                        link={"Explore more"}
                        slider={
                            <Slider 
                                type={"multiImage"}
                                carouselClass={"amzn__carousel"}
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
                        }
                    />
                    <hr className="card__break"/>
                    <PrimaryCarousel 
                        heading={"Today's Deals"}
                        link={"See all deals"}
                        slider={
                            <Slider 
                                type={"multiImage"}
                                carouselClass={"amzn__carousel"}
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
                        }
                    />
                    <hr className="card__break"/>
                    <PrimaryCarousel 
                        heading={"Related to items that you've viewed"}
                        link={"See more"}
                        slider={
                            <Slider 
                                type={"multiImage"}
                                carouselClass={"amzn__carousel"}
                                count={6}
                                items={[
                                    {
                                        href: '/',
                                        src: JUXIAO_bluetooth_led_lights_strip_for_bedroom,
                                        altText: "JUXIAO bluetooth led lights strip for bedroom",
                                        caption: "JUXIAO bluetooth led lights strip for bedroom"
                                    },
                                    {
                                        href: '/',
                                        src: LED_light_strip_KIKO_color_changing_led_lights,
                                        altText: "LED light strip KIKO color changing led lights",
                                        caption: "LED light strip KIKO color changing led lights"
                                    },
                                    {
                                        href: '/',
                                        src: LED_strip_lights_flexible_non_waterproof_50ft_x_15m,
                                        altText: "LED strip lights flexible non waterproof 50ft x 15m",
                                        caption: "LED strip lights flexible non waterproof 50ft x 15m"
                                    },
                                    {

                                        href: '/',
                                        src: LED_strip_lights_XProject_LED_lights_for_bedroom_65ft,
                                        altText: "LED strip lights XProject LED lights for bedroom 65ft",
                                        caption: "LED strip lights XProject LED lights for bedroom 65ft"
                                    },
                                    {
                                        href: '/',
                                        src: Kokuji_LED_strip_lights_kit_656ft_x_20m,
                                        altText: "Kokuji LED strip lights kit 656ft x 20m",
                                        caption: "Kokuji LED strip lights kit 656ft x 20m"
                                    },
                                    {
                                        href: '/',
                                        src: LED_strip_lights,
                                        altText: "LED strip lights",
                                        caption: "LED strip lights"
                                    }
                                ]}
                            />
                        }
                    />
                    <hr className="card__break"/>
                    <CardFive
                        name="Kay"
                        img={[ 
                            {
                                img_one : { 
                                    img : evergreen_gssusa,
                                    href : "https://www.amazon.ca/gp/css/order-history?",
                                    alt : "Home"
                                },
                                img_two : {
                                    img : evergreen_kitchen,
                                    href : "https://www.amazon.ca/gp/css/order-history?",
                                    alt : "Kitchen"
                                },
                                img_three : {
                                    img : evergreen_pillows,
                                    href : "https://www.amazon.ca/gp/css/order-history?",
                                    alt : "Auto"
                                },
                                img_four : {
                                    img : evergreen_earphones,
                                    href : "https://www.amazon.ca/gp/css/order-history?",
                                    alt : "Categories"
                                }
                            }
                        ]}
                    />
                    <CardThree
                        title={"Shop top-rated fashion"}
                        img={listerine_cool_mint_antiseptic_mouthwash}
                        alt={"Listerine Cool Mint Antisteptic MouthWash - 1.5L"}
                        link={"/history"}
                        rating={5}
                        linktxt={"See more products to review"}
                        cardClass={"block__card"}
                    />
                    <CardThree
                        title={"Amazon Basics"}
                        img={amazon_basics}
                        alt={"Amazon Basics"}
                        link={"/history"}
                        linktxt={"Shop the AmazonBasics store"}
                        cardClass={"fluid__card"}
                    />
                    <CardThree
                        title={"Explore our Coffee Shop"}
                        img={coffee_cup}
                        alt={"Explore our Coffee Shop"}
                        link={"/history"}
                        linktxt={"Shop best-selling coffee"}
                        cardClass={"fluid__card"}
                    />
                    <hr className="card__break"/>
                    <PrimaryCarousel 
                        heading={"Inspired by your purchases"}
                        slider={
                            <Slider 
                                type={"multiImage"}
                                carouselClass={"amzn__carousel"}
                                count={6}
                                items={[
                                    {
                                        href: '/',
                                        src: apekx,
                                        altText: "APEKX wireless bluetooth 5.0 sports earbuds",
                                        caption: "APEKX wireless bluetooth 5.0 sports earbuds"
                                    },
                                    {
                                        href: '/',
                                        src: basil_basket,
                                        altText: "basil cento rear basket black",
                                        caption: "basil cento rear basket black"
                                    },
                                    {
                                        href: '/',
                                        src: rack_black,
                                        altText: "mega cooling rack black",
                                        caption: "mega cooling rack black"
                                    },
                                    {
                                        href: '/',
                                        src: wilton_cake_pan,
                                        altText: "wilton 9-x-13 inch oblong cake pan",
                                        caption: "wilton 9-x-13 inch oblong cake pan"
                                    },
                                    {
                                        href: '/',
                                        src: mirrycle,
                                        altText: "mirrycle-incredibell-adjustabell-2-bike-bell",
                                        caption: "mirrycle-incredibell-adjustabell-2-bike-bell"
                                    },
                                    {
                                        href: '/',
                                        src: wilton_stick_8_cake_pan,
                                        altText: "wilton non stick 8 inch square cake pans",
                                        caption: "wilton non stick 8 inch square cake pans"
                                    }
                                ]}
                            />
                        }
                    />
                    <hr className="card__break"/>
                    <PrimaryCarousel 
                        heading={"Inspired by your shopping trends"}
                        slider={
                            <Slider 
                                type={"multiImage"}
                                carouselClass={"amzn__carousel"}
                                count={6}
                                items={[
                                    {
                                        href: '/',
                                        src: wacom_intuos,
                                        altText: "wacom intuos graphics drawing tablet 7.9 x 6.3 black (CTL4100)",
                                    },
                                    {
                                        href: '/',
                                        src: anker_4_port,
                                        altText: "anker 4 port USB 3.0 ultra slim data hub for macbook mac pro mini iMac surface pro XPS notebook PC USB flash",
                                    },
                                    {
                                        href: '/',
                                        src: nonda_USB_type_C_to_USB_3_adapter,
                                        altText: "nonda USB type C to USB 3.0 adapter",
                                    },
                                    {
                                        href: '/',
                                        src: logitech_C920x_pro_HD_webcam,
                                        altText: "logitech-C920x-pro-HD-webcam.jpg",
                                    },
                                    {
                                        href: '/',
                                        src: LUTER_barberology_comb_clipper,
                                        altText: "LUTER barberology comb clipper",
                                    },
                                    {
                                        href: '/',
                                        src: sabrent_4_port_USB_3_hub,
                                        altText: "sabrent 4 port USB 3.0 hub with individual LED power switches",
                                    }
                                ]}
                            />
                        }
                    />
                    <hr className="card__break"/>
                    <PrimaryCarousel 
                        heading={"Inspired by your shopping trends in Home, Garden & Tools"}
                        slider={
                            <Slider 
                                type={"multiImage"}
                                carouselClass={"amzn__carousel"}
                                count={6}
                                items={[
                                    {
                                        href: '/',
                                        src: harold_fine_strainer_nylon_mesh,
                                        altText: "harold imports company double ear fine strainer nylon mesh",
                                    },
                                    {
                                        href: '/',
                                        src: IMUSA_IMU_plastic_strainer_7_inch_black,
                                        altText: "IMUSA USA IMU 71134 plastic strainer 7 inch black",
                                    },
                                    {
                                        href: '/',
                                        src: UINKE_mesh_strainer_colander_sieve,
                                        altText: "UINKE 4 pcs fine mesh strainer colander sieve sifter",
                                    },
                                    {
                                        href: '/',
                                        src: starfrit_6_inch_mesh_strainer,
                                        altText: "starfrit 092002 6 inch mesh strainer",
                                    },
                                    {
                                        href: '/',
                                        src: uniware_3_sphere_set_strainers,
                                        altText: "uniware 3 sphere set strainers green orange & red",
                                    },
                                    {
                                        href: '/',
                                        src: masontops_kefir_caps_wide_mouth_mason_jar_lids,
                                        altText: "masontops kefir caps wide mouth mason jar lids",
                                    }
                                ]}
                            />
                        }
                    />
                    <hr className="card__break"/>
                    <PrimaryCarousel 
                        heading={"Recommended items other customers often buy again"}
                        slider={
                            <Slider 
                                type={"multiImage"}
                                carouselClass={"amzn__carousel"}
                                count={6}
                                items={[
                                    {
                                        href: '/',
                                        src: vileda_easywring_power_refill,
                                        altText: "vileda easywring power refill",
                                    },
                                    {
                                        href: '/',
                                        src: grace_folly_trucker_hat_for_snapback_mesh_caps,
                                        altText: "grace folly trucker hat for snapback mesh caps",
                                    },
                                    {
                                        href: '/',
                                        src: vileda_easy_wring_refill,
                                        altText: "vileda easy wring refill",
                                    },
                                    {
                                        href: '/',
                                        src: hilroy_premium_black_stitch_book,
                                        altText: "hilroy premium black collection stitch book 7-1-8 x 9-1-8",
                                    },
                                    {
                                        href: '/',
                                        src: flex_fit_classic_snapback_hat,
                                        altText: "flex fit mens 110 flexfit classic snapback hat",
                                    },
                                    {
                                        href: '/',
                                        src: DECKY_flat_bill_trucker_cap_lack,
                                        altText: "DECKY 6 panel flat bill trucker cap black",
                                    }
                                ]}
                            />
                        }
                    />
                    <hr className="card__break"/>
                    <CardThree
                        title={"Electronics & Accessories"}
                        img={wall_tv}
                        alt={"Wall TV"}
                        link={"/history"}
                        linktxt={"Shop now"}
                        cardClass={"fluid__card"}
                    />
                    <CardThree
                        title={"Upgrade your home office"}
                        img={woman_works_with_laptop}
                        alt={"woman works with laptop"}
                        link={"/history"}
                        linktxt={"Shop now"}
                        cardClass={"fluid__card"}
                    />
                    <CardThree
                        title={"Discover like-new computers"}
                        img={typing_on_mac}
                        alt={"typing on mac"}
                        link={"/history"}
                        linktxt={"Shop Amazon Renewed"}
                        cardClass={"fluid__card"}
                    />
                    <CardThree
                        title={"Family game night"}
                        img={family_game_night}
                        alt={"family game night"}
                        link={"/history"}
                        linktxt={"Shop now"}
                        cardClass={"fluid__card"}
                        supportingTxt={"Explore toys and games to play with the family."}
                    />
                    <hr className="card__break"/>
                    <PrimaryCarousel 
                        heading={"Most wished for in Video Games"}
                        squished={true}
                        slider={
                            <Slider 
                                type={"multiImage"}
                                carouselClass={"amzn__carousel"}
                                count={5}
                                items={[
                                    {
                                        href: '/',
                                        src: luigi_mansion,
                                        altText: "luigi mansion 3 standard edition",
                                        caption: "luigi mansion 3 standard edition"
                                    },
                                    {
                                        href: '/',
                                        src: mario_kart,
                                        altText: "mario kart 8 deluxe switch standard edition",
                                        caption: "mario kart 8 deluxe switch standard edition"
                                    },
                                    {
                                        href: '/',
                                        src: nintendo_switch,
                                        altText: "nintendo switch animal crossing new horizons edition",
                                        caption: "nintendo switch animal crossing new horizons edition"
                                    },
                                    {
                                        href: '/',
                                        src: super_mario,
                                        altText: "super mario party standard edition",
                                        caption: "super mario party standard edition"
                                    },
                                    {
                                        href: '/',
                                        src: animal_crossing,
                                        altText: "animal crossing new horizons standard edition",
                                        caption: "animal crossing new horizons standard edition"
                                    }
                                ]}
                            />
                        }
                    />
                </section>
            </section>
            <hr className="section__break"/>
            <section className="browsing__history">
                <CarouselDetailed 
                    heading={"Inspired by your browsing history"}
                    squished={true}
                    slider={
                        <Slider 
                            type={"multiImage"}
                            carouselClass={"amzn__carousel"}
                            count={6}
                            items={
                                [
                                    {
                                        href: '/',
                                        src: faux_leather,
                                        altText: "FBest Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                        caption: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White"
                                    },
                                    {
                                        href: '/',
                                        src: leather_swivel,
                                        altText: "Furmax Bar Stools Modern Pu Leather Swivel Adjustable Hydraulic Bar Stool Square Counter Height Stool Set of 2(White)",
                                        caption: "Furmax Bar Stools Modern Pu Leather Swivel Adjustable Hydraulic Bar Stool Square Counter Height Stool Set of 2(White)"
                                    },
                                    {
                                        href: '/',
                                        src: frosted_endtable,
                                        altText: "Global Furniture Clear/Frosted Occasional End Table with Glossy White Legs",
                                        caption: "Global Furniture Clear/Frosted Occasional End Table with Glossy White Legs"
                                    },
                                    {
                                        href: '/',
                                        src: monterey_tv_stand,
                                        altText: "Convenience Concepts 151401W Designs2Go Monterey TV Stand, White",
                                        caption: "Convenience Concepts 151401W Designs2Go Monterey TV Stand, White"
                                    },
                                    {
                                        href: '/',
                                        src: modern_cube,
                                        altText: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                        caption: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2"
                                    },
                                    {
                                        href: '/',
                                        src: ameriwood_lumina,
                                        altText: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                        caption: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White"
                                    },
                                    {
                                        href: '/',
                                        src: ameriwood_lumina,
                                        altText: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                        caption: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White"
                                    },
                                    {
                                        href: '/',
                                        src: ameriwood_lumina,
                                        altText: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                        caption: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White"
                                    },
                                    {
                                        href: '/',
                                        src: modern_cube,
                                        altText: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                        caption: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2"
                                    },
                                    {
                                        href: '/',
                                        src: modern_cube,
                                        altText: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                        caption: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2"
                                    },
                                    {
                                        href: '/',
                                        src: modern_cube,
                                        altText: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                        caption: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2"
                                    },
                                    {
                                        href: '/',
                                        src: modern_cube,
                                        altText: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                        caption: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2"
                                    }
                                ]
                            }
                        />
                    }
                    heading_two={"Your browsing history"}
                    heading_two_link={<>View or edit your browsing history &nbsp; &nbsp;›</>}
                    slider_two={
                        <Slider 
                            type={"multiImage"}
                            carouselClass={"amzn__carousel"}
                            count={8}
                            items={[
                                {
                                    href: '/',
                                    src: faux_leather,
                                    altText: "FBest Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                    caption: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White"
                                },
                                {
                                    href: '/',
                                    src: leather_swivel,
                                    altText: "Furmax Bar Stools Modern Pu Leather Swivel Adjustable Hydraulic Bar Stool Square Counter Height Stool Set of 2(White)",
                                    caption: "Furmax Bar Stools Modern Pu Leather Swivel Adjustable Hydraulic Bar Stool Square Counter Height Stool Set of 2(White)"
                                },
                                {
                                    href: '/',
                                    src: frosted_endtable,
                                    altText: "Global Furniture Clear/Frosted Occasional End Table with Glossy White Legs",
                                    caption: "Global Furniture Clear/Frosted Occasional End Table with Glossy White Legs"
                                },
                                {
                                    href: '/',
                                    src: monterey_tv_stand,
                                    altText: "Convenience Concepts 151401W Designs2Go Monterey TV Stand, White",
                                    caption: "Convenience Concepts 151401W Designs2Go Monterey TV Stand, White"
                                },
                                {
                                    href: '/',
                                    src: modern_cube,
                                    altText: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                    caption: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2"
                                },
                                {
                                    href: '/',
                                    src: ameriwood_lumina,
                                    altText: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                    caption: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White"
                                },
                                {
                                    href: '/',
                                    src: ameriwood_lumina,
                                    altText: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                    caption: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White"
                                },
                                {
                                    href: '/',
                                    src: ameriwood_lumina,
                                    altText: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                    caption: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White"
                                }
                            ]}
                        />
                    }
                />
            </section>
        </div>
    )

    return (
        <Layout>
            <HomePage />
        </Layout>
    )

 }

export default Home