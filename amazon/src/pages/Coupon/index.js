import React, { useState } from 'react'
import { Link, Router } from 'react-router-dom'

import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap'

import Slider from '../../components/UI/Carousel/Carousel'
import CouponCarousel from '../../components/UI/Carousel/CouponCarousel'
import { DropdownMenuMini } from '../../components/UI/DropdownMenu'

import Layout from '../../components/Layout'

import scissors from '../../images/scissors-coupon.png'
import verticalBar from '../../images/vertical-bar-separator.jpg'

import subscribe_and_save from '../../images/coupon-subscribe-and-save.jpg'

import ameriwood_lumina from '../../images/products/ameriwood-home-lumina-fireplace-tv-stand-white.jpg'
import modern_cube from '../../images/products/baxton-studio-siskal-modern-cube-ottoman-white-set-of-2.jpg'
import monterey_tv_stand from '../../images/products/convenience-concepts-151401W-designs2Go-monterey-tv-stand.jpg'
import frosted_endtable from '../../images/products/global-furniture-clear-frosted-occasional-end-table.jpg'
import leather_swivel from '../../images/products/furmax-bar-stools-modern-pu-leather-swivel.jpg'
import faux_leather from '../../images/products/best-choice-products-faux-leather-modern-convertible.jpg'

import getihu_car_phone from '../../images/coupons/getihu-car-phone-holder-universal.jpg'
import selfie_stick_tripod from '../../images/coupons/selfie-stick-tripod-ubeesize-51.jpg'
import arccra_iphone_charger from '../../images/coupons/arccra-iphone-charger.jpg'
import fast_wireless_charger from '../../images/coupons/fast-wireless-charger-nanami.jpg'
import lisen_phone_holder_car from '../../images/coupons/lisen-phone-holder-car.jpg'
import upgraded_1080p_webcam_2021 from '../../images/coupons/2021-upgraded-1080p-webcam.jpg'
import water_gun_2_pack_970cc_high from '../../images/coupons/water-gun-2-pack-970cc-high.jpg'
import eastshining_upgraded from '../../images/coupons/eastshining-upgraded.jpg'
import beach_sand_toys_set_outdoor from '../../images/coupons/beach-sand-toys-set-outdoor.jpg'
import holy_stone_hs110d_fpv_rc_drone from '../../images/coupons/holy-stone-hs110d-fpv-rc-drone.jpg'
import aohu_hover_hockey_soccer from '../../images/coupons/aohu-hover-hockey-soccer.jpg'
import deerc_d_20_mini_drone_foldable from '../../images/coupons/deerc-d20-mini-drone-foldable.jpg'
import flexi_hose_upgraded from '../../images/coupons/flexi-hose-upgraded.jpg'
import lefant_robot_vacuum_cleaner from '../../images/coupons/lefant-robot-vacuum-cleaner.jpg'
import fifty_ft_led_light_strips_vilsom from '../../images/coupons/50ft-led-light-strips-vilsom.jpg'
import teckin_smart_plug_mini_wifi_outlet from '../../images/coupons/teckin-smart-plug-mini-wifi-outlet.jpg'
import bestpresso_coffee_for_nespresso_original from '../../images/coupons/bestpresso_coffee_for_nespresso_original.jpg'
import organic_plant_based_canadian_protein from '../../images/coupons/organic-plant-based-canadian-protein.jpg'
import pureshrooms_mushroom_coffee from '../../images/coupons/pureshrooms-mushroom-coffee.jpg'
import ground_coffee_medium_roast from '../../images/coupons/ground-coffee-medium-roast.jpg'
import traditional_ghee_clarified_butter from '../../images/coupons/traditional-ghee-clarified-butter.jpg'
import pureshrooms_mushroom_coffee_immune_booster from '../../images/coupons/pureshrooms-mushroom-coffee-immune-booster.jpg'
import patpet_dog_training_collar_dog_shock from '../../images/coupons/patpet-dog-training-collar-dog-shock.jpg'
import beyond_grain_free_ground_entrée from '../../images/coupons/beyond-grain-free-ground-entrée.jpg'
import three_feet_retractable_combination_cable_lock from '../../images/coupons/3-feet-retractable-combination-cable-lock.jpg'
import dog_water_vest_dog_life_jacket_vest from '../../images/coupons/dog-water-vest-dog-life-jacket-vest.jpg'
import mr_bens_ear_tonic_cleanser from '../../images/coupons/mr-bens-ear-tonic-cleanser.jpg'
import umidigi_smart_watch_fitness_tracker from '../../images/coupons/umidigi-smart-watch-fitness-tracker.jpg'
import shylero_beach_bag_100pcnt_waterproof from '../../images/coupons/shylero-beach-bag-100%-waterproof.jpg'
import feisedy_vintage_square_cat_eye from '../../images/coupons/feisedy-vintage-square-cat-eye.jpg'
import handbags_for_women_uncle_y_shoulder from '../../images/coupons/handbags-for-women-uncle-y-shoulder.jpg'
import fullmosa_compatible_for_apple_watch_band from '../../images/coupons/fullmosa-compatible-for-apple-watch-band.jpg'
import smart_watch_smartwatch_for_men from '../../images/coupons/smart-watch-smartwatch-for-men.jpg'
import nail_clippers_set_aw_union_fingernail from '../../images/coupons/nail-clippers-set-aw-union-fingernail.jpg'
import mouth_guard_for_grinding_teeth from '../../images/coupons/mouth-guard-for-grinding-teeth.jpg'
import fairywill_teeth_whitening_strips from '../../images/coupons/fairywill-teeth-whitening-strips.jpg'
import neutrogena_daily_foaming_facia from '../../images/coupons/neutrogena-daily-foaming-facial.jpg'
import water_flossers_for_teeth_fairywill_300ml from '../../images/coupons/water-flossers-for-teeth-fairywill-300ml.jpg'
import muscle_massage_gun_deep_tissue_percussion from '../../images/coupons/muscle-massage-gun-deep-tissue-percussion.jpg'
import creatine_monohydrate_powder_muscletech from '../../images/coupons/creatine-monohydrate-powder-muscletech.jpg'
import blood_pressure_monitor_for_home_use from '../../images/coupons/blood-pressure-monitor-for-home-use.jpg'
import contour_pillow_for_sleeping from '../../images/coupons/contour-pillow-for-sleeping.jpg'
import naipo_neck_massager_back_massager from '../../images/coupons/naipo-neck-massager-back-massager.jpg'
import muscle_massage_gun_deep_tissue_percussion_massager from '../../images/coupons/muscle-massage-gun-deep-tissue-percussion-massager.jpg'
import flexi_hose_upgraded_expandable_garden_hose from '../../images/coupons/flexi-hose-upgraded-expandable-garden-hose.jpg'
import getihu_car_phone_holder_universal_dashboard from '../../images/coupons/getihu-car-phone-holder-universal-dashboard.jpg'
import twenty_vitamin_c_serum_60_ml from '../../images/coupons/20-vitamin-c-serum-60-ml.jpg'
import non_medical_face_mask_50_individually_wrapped from '../../images/coupons/non-medical-face-mask-50-individually-wrapped.jpg'
import renpho_bluetooth_body_fat_scale_smart_digital_bathroom from '../../images/coupons/renpho-bluetooth-body-fat-scale-smart-digital-bathroom.jpg'
import digital_instant_read_meat_thermometer from '../../images/coupons/digital-instant-read-meat-thermometer.jpg'
import selfie_stick_tripod_ubeesize from '../../images/coupons/selfie-stick-tripod-ubeesize.jpg'
import aveeno_calm_restore_nourishing_oat_cleanser from '../../images/coupons/aveeno-calm-restore-nourishing-oat-cleanser.jpg'
import thefitlife_exercise_and_resistance_bands from '../../images/coupons/thefitlife-exercise-and-resistance-bands.jpg'
import lefant_robot_vacuum_cleaner_auto_robotic from '../../images/coupons/lefant-robot-vacuum-cleaner-auto-robotic.jpg'
import arccra_iphone_charger_10ft_6ft_3ft from '../../images/coupons/arccra-iphone-charger-10ft+6ft+3ft.jpg'
import massage_gun_for_athletes_portable_body_muscle from '../../images/coupons/massage-gun-for-athletes-portable-body-muscle.jpg'
import bedsure_satin_pillowcase_for_hair_and_skin from '../../images/coupons/bedsure-satin-pillowcase-for-hair-and-skin.jpg'
import fast_wireless_charger_nanami_qi_charging_pad from '../../images/coupons/fast-wireless-charger-nanami-qi-charging-pad.jpg'
import thefitlife_best_expandable_garden_hose from '../../images/coupons/thefitlife-best-expandable-garden-hose.jpg'
import neutrogena_hydroboost_facial_gel_cream from '../../images/coupons/neutrogena-hydroboost-facial-gel-cream.jpg'
import five_defenders_organic_mushroom_extract from '../../images/coupons/5-defenders-organic-mushroom-extract.jpg'
import enaskin_dark_spot_corrector_remover_for_face from '../../images/coupons/enaskin-dark-spot-corrector-remover-for-face.jpg'
import lisen_phone_holder_car_strong_clip_magnetic_phone from '../../images/coupons/lisen-phone-holder-car-strong-clip-magnetic-phone.jpg'
import lintelek_smart_watch_full_touch_screen_smartwatch from '../../images/coupons/lintelek-smart-watch-full-touch-screen-smartwatch.jpg'
import night_light_projector_with_remote_control from '../../images/coupons/night-light-projector-with-remote-control.jpg'
import deconovo_room_darkening_thermal_insulated_grommet from '../../images/coupons/deconovo-room-darkening-thermal-insulated-grommet.jpg'
import nicetown_living_room_velvet_curtains from '../../images/coupons/nicetown-living-room-velvet-curtains.jpg'
import wireless_earbuds_bluetooth_active_noise_cancelling from '../../images/coupons/wireless-earbuds-bluetooth-active-noise-cancelling.jpg'
import femometer_forehead_thermometer_non_touch from '../../images/coupons/femometer-forehead-thermometer-non-touch.jpg'
import side_sleeper_contour_memory_foam_pillow from '../../images/coupons/side-sleeper-contour-memory-foam-pillow.jpg'
import upgraded_1080p_webcam_with_microphone_2021 from '../../images/coupons/2021-upgraded-1080p-webcam.jpg'
import patpet_dog_training_collar_dog_shock_collar from '../../images/coupons/patpet-dog-training-collar-dog-shock.jpg'
import one_a_day_mens_gummies_multivitamin from '../../images/coupons/one-a-day-mens-gummies-multivitamin.jpg'
import webcam_with_microphone_updated_full_hd_1080p from '../../images/coupons/webcam-with-microphone-updated-full-hd-1080p.jpg'
import car_charger_iniu_2_port_total_60w_qc3_5a_pd from '../../images/coupons/car-charger-iniu-2-port-total-60w-qc3.0-5a-pd.jpg'
import hybrid_active_noise_cancelling_headphones from '../../images/coupons/hybrid-active-noise-cancelling-headphones.jpg'
import phone_charger_5pack_3ft_3ft_6ft_6ft_10ft from '../../images/coupons/phone-charger-5pack-3ft-3ft-6ft-6ft-10ft.jpg'
import milk_frother_usb_rechargeable_electric_foam from '../../images/coupons/milk-frother-usb-rechargeable-electric-foam.jpg'
import restoralax_powder_laxative_effective_relief_no_taste from '../../images/coupons/restoralax-powder-laxative-effective-relief-no-taste.jpg'
import led_light_strips_vilsom_1_roll_of_15m_50ft from '../../images/coupons/50ft-led-light-strips-vilsom-1-roll-of-15m.jpg'
import nail_clippers_set_aw_union_fingernail_and_toenail_clipper from '../../images/coupons/nail-clippers-set-aw-union-fingernail-and-toenail-clipper.jpg'
import neutrogena_daily_foaming_facial_cleanser from '../../images/coupons/neutrogena-daily-foaming-facial-cleanser.jpg'
import aveeno_calm_restore_triple_oat_serum_29ml from '../../images/coupons/aveeno-calm+restore-triple-oat-serum-29ml.jpg'
import esr_air_armor_case_compatible_with_iphone_12 from '../../images/coupons/esr-air-armor-case-compatible-with-iphone-12.jpg'
import tilting_tv_wall_mount_bracket_low_profile_for_most_23_55 from '../../images/coupons/tilting-tv-wall-mount-bracket-low-profile-for-most-23-55.jpg'
import bluetooth_wireless_earbuds_enacfire_e90 from '../../images/coupons/bluetooth-wireless-earbuds-enacfire-e90.jpg'
import wireless_earbuds_vankyo_x400 from '../../images/coupons/wireless-earbuds-vankyo-x400.jpg'
import trojan_h20_sensitive_touch_aloe_infused_water_based from '../../images/coupons/trojan-h20-sensitive-touch-aloe-infused-water-based.jpg'
import eufy_security_eufycam_2c_2_cam_kit from '../../images/coupons/eufy-security-eufycam-2c-2-cam-kit.jpg'
import bbq_grill_accessories_bbq_tools_set from '../../images/coupons/bbq-grill-accessories-bbq-tools-set.jpg'
import iniu_usb_c_cable_5_pack_3_1a_qc3 from '../../images/coupons/iniu-usb-c-cable-5-pack-3.1a-qc3.0.jpg'
import shower_head_sr_sun_rise_6_settings_4_8 from '../../images/coupons/shower-head-sr-sun-rise-6-settings-4.8.jpg'

import back_arrow from '../../images/amazon-back-arrow.png'

// import nail_clippers_set_aw_union_fingernail from '../../images/coupons/nail-clippers-set_aw-union-fingernail.jpg'

import './index.css'


const Coupon = () => {

    const [popoverCoupon, setPopoverCoupon] = useState(false)

    const couponEnter = () => setPopoverCoupon(true)
    const couponLeave = () => setPopoverCoupon(false)

    return (
        <Layout>
            <section className="a__container">
                <section className="row mx-0 coupon">
                    <Link to="/">
                        <img src={scissors} className="coupon__scissors"/>
                    </Link>
                    <span>
                        <span className="a__size__large coupon__barText">
                            Kay's Coupons
                        </span>
                        <img alt={verticalBar} src={verticalBar}/>
                        <section className="coupon__columnTxt">
                            <div>
                                <span className="a__size__small a__color__secondary">
                                Clipped
                                </span>
                            </div>
                            <div>
                                <span className="a__size__large a__color__base">0</span>
                                <span className="a__size__large a__color__base"> Coupons</span>  
                            </div>
                        </section>
                        <section className="coupon__barColumnTxt">
                            <span className="a__size__mini a__color__secondary">
                                Discounts applied at checkout or on first subscription. Some coupons may only be available to Prime members.&nbsp;
                                <UncontrolledDropdown onMouseOver={couponEnter} onMouseLeave={couponLeave} isOpen={popoverCoupon} toggle={""} inNavbar>
                                    <DropdownToggle nav tag="span" className="a__color__link">
                                        Some restrictions apply.
                                        <i className="a__icon a__icon__popover"></i>
                                    </DropdownToggle>
                                    <DropdownMenu className="coupon__popover">
                                        <div className="a__popover__wrapper">
                                            <section className="a__popover__inner">
                                                <h3 className="coupon__popoverHeading">
                                                    <b>Promotion Details</b>
                                                </h3>
                                                <br/>
                                                <section>
                                                    <strong>How to Redeem the Coupon:</strong><br/>
                                                    Click on the "Clip Coupon" button for a qualifying item and:
                                                    <ol>
                                                        <li>For a "One Time Delivery" coupon, add the eligible item to your Cart by clicking "Add to Cart" on the item detail page. Your coupon discount will apply to your item and appear on the final order checkout page.</li>
                                                        <li>For a subscription coupon, select "Subscribe & Save" and set delivery quantity and frequency. Your coupon discount will apply to your first item delivery and appear on the "Review Your Subscription Details" page.</li>
                                                    </ol>
                                                </section>
                                                <section className="coupon__terms">
                                                    <strong>Terms and Conditions:</strong>
                                                    <ul>
                                                        <li>
                                                            Coupons are valid for a limited time only. Amazon reserves the right to modify or cancel coupons at any time.
                                                        </li>
                                                        <li>
                                                            You must purchase the qualifying items added to your Cart when the coupon is in effect for the discount to apply.
                                                        </li>
                                                        <li>
                                                            If you later modify or cancel the subscription or delivery date for the qualifying item, the discount will not apply.
                                                        </li>
                                                        <li>
                                                            The coupon applies only to qualifying items displaying the coupon offer.
                                                        </li>
                                                        <li>
                                                            The coupon may only be used on www.amazon.ca for purchase of products shipped and sold by Amazon.ca.
                                                        </li>
                                                        <li>
                                                            The promotion is limited to one coupon per customer.
                                                        </li>
                                                        <li>
                                                            Promotion may not be combinable with mail-in rebates.
                                                        </li>
                                                        <li>
                                                            If you return any of the items purchased with a coupon, the coupon discount or value may be subtracted from the return credit.
                                                        </li>
                                                        <li>
                                                            Applicable shipping and handling charges apply to all products.
                                                        </li>
                                                        <li>
                                                            Add-on Items require a minimum purchase. Click <a href="https://www.amazon.ca/gp/help/customer/display.html/?nodeId=201115110">here</a> for details.
                                                        </li>
                                                        <li>
                                                            Offer good while supplies last.
                                                        </li>
                                                        <li>
                                                            Void where prohibited.
                                                        </li>
                                                        <li>
                                                            Consumer is required to pay any applicable sales tax related to the use of the coupon.
                                                        </li>
                                                    </ul>
                                                </section>
                                            </section>
                                        </div>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </span>
                        </section>
                    </span>
                </section>
                <section className="coupon__items d-flex mx-0 flex-fill">
                    <section className="coupon__subscribe">
                        <img src={subscribe_and_save} width="180" alt="Subscribe &amp; Save" height="120"/>
                    </section>
                    <section className="coupon__apBrowse">
                        <h1 className="coupon__apBrowseHeading">
                            <b>Amazon Coupons</b>
                        </h1>
                        <p className="coupon__paraText">
                            Sign in to see all your available coupons. To redeem a coupon, click on a time-limited coupon below and then add the item to your cart. The discount will be automatically applied when you check out. Some coupons may be available to Prime members only.&nbsp;
                            <Link to="/" className="a__color__link">Some restrictions apply.</Link>
                        </p>
                        <section className="coupon__shoveler">
                            <CouponCarousel
                                heading={<>Electronics &amp; Wireless</>}
                                sort={"Sort by Category"}
                                optionList={ 
                                    <>
                                        <option aria-label="newest" value="newest">Newest</option> 
                                        <option aria-label="oldest" value="oldest">Oldest</option>
                                        <option aria-label="expiringSoon" value="expiringSoon">Expiring Soon</option>
                                        <option aria-label="mostPopular" value="mostPopular" selected="selected">Most Popular</option> 
                                        <option aria-label="highToLowDiscountValue" value="highToLowDiscountValue">
                                            Discount Percentage
                                        </option> 
                                    </>
                                }
                                slider={
                                    <Slider 
                                        type={"coupon"}
                                        carouselClass={"amzn__carousel"}
                                        count={6}
                                        items={
                                            [
                                                {
                                                    href: '/',
                                                    src: getihu_car_phone,
                                                    save: 2, 
                                                    altText: "Getihu Car Phone",
                                                    caption: "Getihu Car Phone"
                                                },
                                                {
                                                    href: '/',
                                                    src: selfie_stick_tripod,
                                                    save: 2, 
                                                    altText: "Selfie Stick Tripod",
                                                    caption: "Selfie Stick Tripod"
                                                },
                                                {
                                                    href: '/',
                                                    src: arccra_iphone_charger,
                                                    save: 2, 
                                                    altText: "Arccra iPhone Charger",
                                                    caption: "Arccra iPhone Charger"
                                                },
                                                {
                                                    href: '/',
                                                    src: fast_wireless_charger,
                                                    save: 2, 
                                                    altText: "Fast Wireless Charger",
                                                    caption: "Fast Wireless Charger"
                                                },
                                                {
                                                    href: '/',
                                                    src: lisen_phone_holder_car,
                                                    save: 2, 
                                                    altText: "Lisen Phoneholder Car",
                                                    caption: "Lisen Phoneholder Car"
                                                },
                                                {
                                                    href: '/',
                                                    src: upgraded_1080p_webcam_2021,
                                                    save: 2, 
                                                    altText: "Upgraded 1080p Webcam 2021",
                                                    caption: "Upgraded 1080p Webcam 2021"
                                                }
                                            ]
                                        }
                                    />
                                }
                            />
                            <CouponCarousel
                                heading={<>Toys &amp; Games</>}
                                sort={"Sort by Category"}
                                optionList={ 
                                    <>
                                        <option aria-label="newest" value="newest">Newest</option> 
                                        <option aria-label="oldest" value="oldest">Oldest</option>
                                        <option aria-label="expiringSoon" value="expiringSoon">Expiring Soon</option>
                                        <option aria-label="mostPopular" value="mostPopular" selected="selected">Most Popular</option> 
                                        <option aria-label="highToLowDiscountValue" value="highToLowDiscountValue">
                                            Discount Percentage
                                        </option> 
                                    </>
                                }
                                slider={
                                    <Slider 
                                        type={"coupon"}
                                        carouselClass={"amzn__carousel"}
                                        count={6}
                                        items={
                                            [
                                                {
                                                    href: '/',
                                                    src: water_gun_2_pack_970cc_high,
                                                    save: 2, 
                                                    altText: "Water Gun 2 Pack 970cc High",
                                                    caption: "Water Gun 2 Pack 970cc High"
                                                },
                                                {
                                                    href: '/',
                                                    src: eastshining_upgraded,
                                                    save: 2, 
                                                    altText: "Eastshining Upgraded",
                                                    caption: "Eastshining Upgraded"
                                                },
                                                {
                                                    href: '/',
                                                    src: beach_sand_toys_set_outdoor,
                                                    save: 2, 
                                                    altText: "Beach Sand Toys Set Outdoor",
                                                    caption: "Beach Sand Toys Set Outdoor"
                                                },
                                                {
                                                    href: '/',
                                                    src: holy_stone_hs110d_fpv_rc_drone,
                                                    save: 2, 
                                                    altText: "Holy Stone HS110D FPV RC Drone",
                                                    caption: "Holy Stone HS110D FPV RC Drone"
                                                },
                                                {
                                                    href: '/',
                                                    src: aohu_hover_hockey_soccer,
                                                    save: 2, 
                                                    altText: "Aohu Hover Hockey Soccer",
                                                    caption: "Aohu Hover Hockey Soccer"
                                                },
                                                {
                                                    href: '/',
                                                    src: deerc_d_20_mini_drone_foldable,
                                                    save: 2, 
                                                    altText: "Deerc d20 Mini Drone Foldable",
                                                    caption: "Deerc d20 Mini Drone Foldable"
                                                }
                                            ]
                                        }
                                    />
                                }
                            />
                            <CouponCarousel
                                heading={<>Home, Garden &amp; Tools</>}
                                sort={"Sort by Category"}
                                optionList={ 
                                    <>
                                        <option aria-label="newest" value="newest">Newest</option> 
                                        <option aria-label="oldest" value="oldest">Oldest</option>
                                        <option aria-label="expiringSoon" value="expiringSoon">Expiring Soon</option>
                                        <option aria-label="mostPopular" value="mostPopular" selected="selected">Most Popular</option> 
                                        <option aria-label="highToLowDiscountValue" value="highToLowDiscountValue">
                                            Discount Percentage
                                        </option> 
                                    </>
                                }
                                slider={
                                    <Slider 
                                        type={"coupon"}
                                        carouselClass={"amzn__carousel"}
                                        count={6}
                                        items={
                                            [
                                                {
                                                    href: '/',
                                                    src: flexi_hose_upgraded,
                                                    save: 2, 
                                                    altText: "Flexi Hose Upgraded",
                                                    caption: "Flexi Hose Upgraded"
                                                },
                                                {
                                                    href: '/',
                                                    src: lefant_robot_vacuum_cleaner,
                                                    save: 2, 
                                                    altText: "Lefant Robot Vacuum Cleaner",
                                                    caption: "Lefant Robot Vacuum Cleaner"
                                                },
                                                {
                                                    href: '/',
                                                    src: side_sleeper_contour_memory_foam_pillow,
                                                    save: 2, 
                                                    altText: "Side Sleeper Contour Memory Foam Pillow",
                                                    caption: "Side Sleeper Contour Memory Foam Pillow"
                                                },
                                                {
                                                    href: '/',
                                                    src: fifty_ft_led_light_strips_vilsom,
                                                    save: 2, 
                                                    altText: "Fifty ft Led Light Strips Vilsom",
                                                    caption: "Fifty ft Led Light Strips Vilsom"
                                                },
                                                {
                                                    href: '/',
                                                    src: teckin_smart_plug_mini_wifi_outlet,
                                                    save: 2, 
                                                    altText: "Teckin Smart Plug Mini Wifi Outlet",
                                                    caption: "Teckin Smart Plug Mini Wifi Outlet"
                                                },
                                                {
                                                    href: '/',
                                                    src: water_gun_2_pack_970cc_high,
                                                    save: 2, 
                                                    altText: "Water Gun 2 Pack 970cc High",
                                                    caption: "Water Gun 2 Pack 970cc High"
                                                }
                                            ]
                                        }
                                    />
                                }
                            />
                            <CouponCarousel
                                heading={<>Grocery</>}
                                sort={"Sort by Category"}
                                optionList={ 
                                    <>
                                        <option aria-label="newest" value="newest">Newest</option> 
                                        <option aria-label="oldest" value="oldest">Oldest</option>
                                        <option aria-label="expiringSoon" value="expiringSoon">Expiring Soon</option>
                                        <option aria-label="mostPopular" value="mostPopular" selected="selected">Most Popular</option> 
                                        <option aria-label="highToLowDiscountValue" value="highToLowDiscountValue">
                                            Discount Percentage
                                        </option> 
                                    </>
                                }
                                slider={
                                    <Slider 
                                        type={"coupon"}
                                        carouselClass={"amzn__carousel"}
                                        count={6}
                                        items={
                                            [
                                                {
                                                    href: '/',
                                                    src: bestpresso_coffee_for_nespresso_original,
                                                    save: 2, 
                                                    altText: "Bestpresso Coffee for Nespresso Original",
                                                    caption: "Bestpresso Coffee for Nespresso Original"
                                                },
                                                {
                                                    href: '/',
                                                    src: organic_plant_based_canadian_protein,
                                                    save: 2, 
                                                    altText: "Organic Plant Based Canadian Protein",
                                                    caption: "Organic Plant Based Canadian Protein"
                                                },
                                                {
                                                    href: '/',
                                                    src: pureshrooms_mushroom_coffee,
                                                    save: 2, 
                                                    altText: "Pureshrooms Mushroom Coffee",
                                                    caption: "Pureshrooms Mushroom Coffee"
                                                },
                                                {
                                                    href: '/',
                                                    src: ground_coffee_medium_roast,
                                                    save: 2, 
                                                    altText: "Ground Coffee Medium Roast",
                                                    caption: "Ground Coffee Medium Roast"
                                                },
                                                {
                                                    href: '/',
                                                    src: traditional_ghee_clarified_butter,
                                                    save: 2, 
                                                    altText: "Traditional Ghee Clarified Butter",
                                                    caption: "Traditional Ghee Clarified Butter"
                                                },
                                                {
                                                    href: '/',
                                                    src: pureshrooms_mushroom_coffee_immune_booster,
                                                    save: 2, 
                                                    altText: "Pureshrooms Mushroom Coffee Immune Booster",
                                                    caption: "Pureshrooms Mushroom Coffee Immune Booster"
                                                }
                                            ]
                                        }
                                    />
                                }
                            />
                            <CouponCarousel
                                heading={<>Pets</>}
                                sort={"Sort by Category"}
                                optionList={ 
                                    <>
                                        <option aria-label="newest" value="newest">Newest</option> 
                                        <option aria-label="oldest" value="oldest">Oldest</option>
                                        <option aria-label="expiringSoon" value="expiringSoon">Expiring Soon</option>
                                        <option aria-label="mostPopular" value="mostPopular" selected="selected">Most Popular</option> 
                                        <option aria-label="highToLowDiscountValue" value="highToLowDiscountValue">
                                            Discount Percentage
                                        </option> 
                                    </>
                                }
                                slider={
                                    <Slider 
                                        type={"coupon"}
                                        carouselClass={"amzn__carousel"}
                                        count={6}
                                        items={
                                            [
                                                {
                                                    href: '/',
                                                    src: patpet_dog_training_collar_dog_shock,
                                                    save: 2, 
                                                    altText: "Patpet Dog Training Collar Dog Shock",
                                                    caption: "Patpet Dog Training Collar Dog Shock"
                                                },
                                                {
                                                    href: '/',
                                                    src: patpet_dog_training_collar_dog_shock,
                                                    save: 2, 
                                                    altText: "Patpet Dog Training Collar Dog Shock",
                                                    caption: "Patpet Dog Training Collar Dog Shock"
                                                },
                                                {
                                                    href: '/',
                                                    src: patpet_dog_training_collar_dog_shock,
                                                    save: 2, 
                                                    altText: "Patpet Dog Training Collar Dog Shock",
                                                    caption: "Patpet Dog Training Collar Dog Shock"
                                                },
                                                {
                                                    href: '/',
                                                    src: patpet_dog_training_collar_dog_shock,
                                                    save: 2, 
                                                    altText: "Patpet Dog Training Collar Dog Shock",
                                                    caption: "Patpet Dog Training Collar Dog Shock"
                                                },
                                                {
                                                    href: '/',
                                                    src: patpet_dog_training_collar_dog_shock,
                                                    save: 2, 
                                                    altText: "Patpet Dog Training Collar Dog Shock",
                                                    caption: "Patpet Dog Training Collar Dog Shock"
                                                },
                                                {
                                                    href: '/',
                                                    src: patpet_dog_training_collar_dog_shock,
                                                    save: 2, 
                                                    altText: "Patpet Dog Training Collar Dog Shock",
                                                    caption: "Patpet Dog Training Collar Dog Shock"
                                                }
                                            ]
                                        }
                                    />
                                }
                            />
                            <CouponCarousel
                                heading={<>Fashion &amp; Accessories</>}
                                sort={"Sort by Category"}
                                optionList={ 
                                    <>
                                        <option aria-label="newest" value="newest">Newest</option> 
                                        <option aria-label="oldest" value="oldest">Oldest</option>
                                        <option aria-label="expiringSoon" value="expiringSoon">Expiring Soon</option>
                                        <option aria-label="mostPopular" value="mostPopular" selected="selected">Most Popular</option> 
                                        <option aria-label="highToLowDiscountValue" value="highToLowDiscountValue">
                                            Discount Percentage
                                        </option> 
                                    </>
                                }
                                slider={
                                    <Slider 
                                        type={"coupon"}
                                        carouselClass={"amzn__carousel"}
                                        count={6}
                                        items={
                                            [
                                                {
                                                    href: '/',
                                                    src: umidigi_smart_watch_fitness_tracker,
                                                    save: 2, 
                                                    altText: "Umidigi Smart Watch Fitness Tracker",
                                                    caption: "Umidigi Smart Watch Fitness Tracker"
                                                },
                                                {
                                                    href: '/',
                                                    src: umidigi_smart_watch_fitness_tracker,
                                                    save: 2, 
                                                    altText: "Umidigi Smart Watch Fitness Tracker",
                                                    caption: "Umidigi Smart Watch Fitness Tracker"
                                                },
                                                {
                                                    href: '/',
                                                    src: umidigi_smart_watch_fitness_tracker,
                                                    save: 2, 
                                                    altText: "Umidigi Smart Watch Fitness Tracker",
                                                    caption: "Umidigi Smart Watch Fitness Tracker"
                                                },
                                                {
                                                    href: '/',
                                                    src: umidigi_smart_watch_fitness_tracker,
                                                    save: 2, 
                                                    altText: "Umidigi Smart Watch Fitness Tracker",
                                                    caption: "Umidigi Smart Watch Fitness Tracker"
                                                },
                                                {
                                                    href: '/',
                                                    src: umidigi_smart_watch_fitness_tracker,
                                                    save: 2, 
                                                    altText: "Umidigi Smart Watch Fitness Tracker",
                                                    caption: "Umidigi Smart Watch Fitness Tracker"
                                                },
                                                {
                                                    href: '/',
                                                    src: umidigi_smart_watch_fitness_tracker,
                                                    save: 2, 
                                                    altText: "Umidigi Smart Watch Fitness Tracker",
                                                    caption: "Umidigi Smart Watch Fitness Tracker"
                                                }
                                            ]
                                        }
                                    />
                                }
                            />
                            <CouponCarousel
                                heading={<>Beauty</>}
                                sort={"Sort by Category"}
                                optionList={ 
                                    <>
                                        <option aria-label="newest" value="newest">Newest</option> 
                                        <option aria-label="oldest" value="oldest">Oldest</option>
                                        <option aria-label="expiringSoon" value="expiringSoon">Expiring Soon</option>
                                        <option aria-label="mostPopular" value="mostPopular" selected="selected">Most Popular</option> 
                                        <option aria-label="highToLowDiscountValue" value="highToLowDiscountValue">
                                            Discount Percentage
                                        </option> 
                                    </>
                                }
                                slider={
                                    <Slider 
                                        type={"coupon"}
                                        carouselClass={"amzn__carousel"}
                                        count={6}
                                        items={
                                            [
                                                {
                                                    href: '/',
                                                    src: neutrogena_daily_foaming_facia,
                                                    save: 2, 
                                                    altText: "Neutrogena Daily Foaming Facia",
                                                    caption: "Neutrogena Daily Foaming Facia"
                                                },
                                                {
                                                    href: '/',
                                                    src: neutrogena_daily_foaming_facia,
                                                    save: 2, 
                                                    altText: "Neutrogena Daily Foaming Facia",
                                                    caption: "Neutrogena Daily Foaming Facia"
                                                },
                                                {
                                                    href: '/',
                                                    src: neutrogena_daily_foaming_facia,
                                                    save: 2, 
                                                    altText: "Neutrogena Daily Foaming Facia",
                                                    caption: "Neutrogena Daily Foaming Facia"
                                                },
                                                {
                                                    href: '/',
                                                    src: neutrogena_daily_foaming_facia,
                                                    save: 2, 
                                                    altText: "Neutrogena Daily Foaming Facia",
                                                    caption: "Neutrogena Daily Foaming Facia"
                                                },
                                                {
                                                    href: '/',
                                                    src: neutrogena_daily_foaming_facia,
                                                    save: 2, 
                                                    altText: "Neutrogena Daily Foaming Facia",
                                                    caption: "Neutrogena Daily Foaming Facia"
                                                },
                                                {
                                                    href: '/',
                                                    src: neutrogena_daily_foaming_facia,
                                                    save: 2, 
                                                    altText: "Neutrogena Daily Foaming Facia",
                                                    caption: "Neutrogena Daily Foaming Facia"
                                                }
                                            ]
                                        }
                                    />
                                    
                                }
                            />
                            <CouponCarousel
                                heading={<>Health &amp; Personal Care</>}
                                sort={"Sort by Category"}
                                optionList={ 
                                    <>
                                        <option aria-label="newest" value="newest">Newest</option> 
                                        <option aria-label="oldest" value="oldest">Oldest</option>
                                        <option aria-label="expiringSoon" value="expiringSoon">Expiring Soon</option>
                                        <option aria-label="mostPopular" value="mostPopular" selected="selected">Most Popular</option> 
                                        <option aria-label="highToLowDiscountValue" value="highToLowDiscountValue">
                                            Discount Percentage
                                        </option> 
                                    </>
                                }
                                slider={
                                    <Slider 
                                        type={"coupon"}
                                        carouselClass={"amzn__carousel"}
                                        count={6}
                                        items={
                                            [
                                                {
                                                    href: '/',
                                                    src: muscle_massage_gun_deep_tissue_percussion,
                                                    save: 2, 
                                                    altText: "Muscle Massage Gun Deep Tissue Percussion",
                                                    caption: "Muscle Massage Gun Deep Tissue Percussion"
                                                },
                                                {
                                                    href: '/',
                                                    src: muscle_massage_gun_deep_tissue_percussion,
                                                    save: 2, 
                                                    altText: "Muscle Massage Gun Deep Tissue Percussion",
                                                    caption: "Muscle Massage Gun Deep Tissue Percussion"
                                                },
                                                {
                                                    href: '/',
                                                    src: muscle_massage_gun_deep_tissue_percussion,
                                                    save: 2, 
                                                    altText: "Muscle Massage Gun Deep Tissue Percussion",
                                                    caption: "Muscle Massage Gun Deep Tissue Percussion"
                                                },
                                                {
                                                    href: '/',
                                                    src: muscle_massage_gun_deep_tissue_percussion,
                                                    save: 2, 
                                                    altText: "Muscle Massage Gun Deep Tissue Percussion",
                                                    caption: "Muscle Massage Gun Deep Tissue Percussion"
                                                },
                                                {
                                                    href: '/',
                                                    src: muscle_massage_gun_deep_tissue_percussion,
                                                    save: 2, 
                                                    altText: "Muscle Massage Gun Deep Tissue Percussion",
                                                    caption: "Muscle Massage Gun Deep Tissue Percussion"
                                                },
                                                {
                                                    href: '/',
                                                    src: muscle_massage_gun_deep_tissue_percussion,
                                                    save: 2, 
                                                    altText: "Muscle Massage Gun Deep Tissue Percussion",
                                                    caption: "Muscle Massage Gun Deep Tissue Percussion"
                                                }
                                            ]
                                        }
                                    />
                                    
                                }
                            />
                            <section className="coupon__box">
                                <header className="coupon__boxHeader">
                                    <img src={back_arrow} alt={back_arrow} className="amzn__backArrow"/>
                                    <span className="a__size__medium a__color__tertiary">
                                        Coupons homepage
                                    </span>
                                    <img alt="" src="https://images-na.ssl-images-amazon.com/images/G/15/software/coupons/right_arrow_separator._CB485936828_.jpg" className="vpc_category_bar_header_right_carrot" height="12px" width="8px" style="
    /* border:  3px solid brown; */
"></img>
                                </header>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </Layout>
    )
}

export default Coupon
