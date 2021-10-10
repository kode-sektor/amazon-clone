import React from 'react'
import { Link } from 'react-router-dom'

import { BrowseBoxSimple, BrowseBoxPrimary, BrowseCheckbox, BrowseBoxPlain } from '../../components/UI/BrowseBox'
import CouponCarousel from '../../components/UI/Carousel/CouponCarousel'
import Slider from '../../components/UI/Carousel/Carousel'
import { Grid_One } from '../../components/UI/Grid'
import { CardSix, CardSeven } from '../../components/UI/Card'
import SearchResult from '../../components/UI/SearchResult'
import { SeeAllResults } from '../../components/UI/Button'

import Layout from '../../components/Layout/index'

import university_personal_care from '../../images/banner/university-personal-care.jpg'
import neutrogena_ultra_sheer from '../../images/products/neutrogena-ultra-sheer.jpg'
import white_usb_charger from '../../images/products/white-usb-charger.jpg'
import loreal_paris from "../../images/banner/l'oreal-paris.jpg"

import water_gun_2_pack_970cc_high from '../../images/coupons/water-gun-2-pack-970cc-high.jpg'
import eastshining_upgraded from '../../images/coupons/eastshining-upgraded.jpg'
import beach_sand_toys_set_outdoor from '../../images/coupons/beach-sand-toys-set-outdoor.jpg'
import holy_stone_hs110d_fpv_rc_drone from '../../images/coupons/holy-stone-hs110d-fpv-rc-drone.jpg'
import aohu_hover_hockey_soccer from '../../images/coupons/aohu-hover-hockey-soccer.jpg'
import deerc_d_20_mini_drone_foldable from '../../images/coupons/deerc-d20-mini-drone-foldable.jpg'

import cetaphil from '../../images/brand/cetaphil.jpg'

const Beauty = () => {
    
    const BeautyPage = () => (
        <section className="a__container">
            <section className="d-flex mx-0 flex-fill">
                <section className="beauty__browsebox browserBox">
                    <BrowseBoxSimple
                        title={"Featured Store"}
                        links={
                            [
                                {
                                    href : "/",
                                    text : "Natural Beauty"
                                },
                                {
                                    href : "/",
                                    text : "Korean Beauty"
                                },
                                {
                                    href : "/",
                                    text : "Luxury Beauty"
                                },
                                {
                                    href : "/",
                                    text : "Men's Grooming"
                                }
                            ]
                        }
                    />
                    <BrowseBoxSimple
                        title={"Shop by Category"}
                        links={
                            [
                                {
                                    href : "/",
                                    text : "All Beauty"
                                },
                                {
                                    href : "/",
                                    text : "Makeup"
                                },
                                {
                                    href : "/",
                                    text : "Nails"
                                },
                                {
                                    href : "/",
                                    text : "Skin Care"
                                },
                                {
                                    href : "/",
                                    text : "Fragrance"
                                },
                                {
                                    href : "/",
                                    text : "Hair Care"
                                },
                                {
                                    href : "/",
                                    text : "Tools & Accessories"
                                },
                                {
                                    href : "/",
                                    text : "Men's Grooming"
                                },
                                {
                                    href : "/",
                                    text : "Oral Care"
                                },
                                {
                                    href : "/",
                                    text : "Luxury Beauty"
                                },
                                {
                                    href : "/",
                                    text : "Luxury Makeup"
                                },
                                {
                                    href : "/",
                                    text : "Luxury Nails"
                                },
                                {
                                    href : "/",
                                    text : "Luxury Skin Care"
                                },
                                {
                                    href : "/",
                                    text : "Luxury Fragrance"
                                },
                                {
                                    href : "/",
                                    text : "Luxury Hair Care"
                                },
                                {
                                    href : "/",
                                    text : "Luxury Tools & Accessories"
                                },
                                {
                                    href : "/",
                                    text : "Luxury Men's Grooming"
                                }
                            ]
                        }
                    />
                    <BrowseBoxSimple
                        title={"More to Explore"}
                        links={
                            [
                                {
                                    href : "/",
                                    text : "Subscribe & Save Eligible"
                                },
                                {
                                    href : "/",
                                    text : "Save with Coupons"
                                },
                                {
                                    href : "/",
                                    text : "Deals and Markdowns"
                                }
                            ]
                        }
                    />
                    <BrowseBoxPrimary
                        title={"Department"}
                        links={
                            [
                                {
                                    text : "Beauty & Personal Care",
                                    indentClass : "a__indent__1"
                                },
                                {
                                    href : "/",
                                    text : "Bath & Body",
                                    indentClass : "a__indent__2"
                                },
                                {
                                    href : "/",
                                    text : "Makeup",
                                    indentClass : "a__indent__2"
                                },
                                {
                                    href : "/",
                                    text : "Skin Care",
                                    indentClass : "a__indent__2"
                                },
                                {
                                    href : "/",
                                    text : "Deodorants & Antiperspirants",
                                    indentClass : "a__indent__2"
                                },
                                {
                                    href : "/",
                                    text : "Hair Care",
                                    indentClass : "a__indent__2"
                                },
                                {
                                    href : "/",
                                    text : "Nails",
                                    indentClass : "a__indent__2"
                                },
                                {
                                    href : "/",
                                    text : "Fragrance",
                                    indentClass : "a__indent__2"
                                },
                                {
                                    href : "/",
                                    text : "Oral Care",
                                    indentClass : "a__indent__2"
                                },
                                {
                                    href : "/",
                                    text : "Tools & Accessories",
                                    indentClass : "a__indent__2"
                                },
                                {
                                    href : "/",
                                    text : "Tattooing Supplies",
                                    indentClass : "a__indent__2"
                                },
                                {
                                    href : "/",
                                    text : "Shaving & Hair Removal",
                                    indentClass : "a__indent__2"
                                }
                            ]
                        }
                    />
                    <BrowseCheckbox
                        title={"Subscription Option"}
                        links={
                            [
                                {
                                    href : "/",
                                    text : "Subscribe & Save"
                                }
                            ]
                        }
                    />
                    <BrowseCheckbox
                        title={"Amazon Prime"}
                        links={
                            [
                                {
                                    href : "/",
                                    text : <>
                                                <i className="a__icon a__icon__prime a__icon__medium apb__browse__refinements__icon" role="presentation"></i>
                                            </>
                                }
                            ]
                        }
                    />
                    <BrowseBoxPlain
                        title={"Shipping Option"}
                        links={
                            [
                                {
                                    href : "/",
                                    text : "FREE Shipping"
                                }
                            ]
                        }
                    />
                    <BrowseCheckbox
                        title={"From Our Brands"}
                        links={
                            [
                                {
                                    href : "/",
                                    text : "Our Brands"
                                }
                            ]
                        }
                    />
                    <BrowseCheckbox
                        title={"Featured Brands"}
                        links={
                            [
                                {
                                    href : "/",
                                    text : "DAWN"
                                },
                                {
                                    href : "/",
                                    text : "HUGGIES"
                                },
                                {
                                    href : "/",
                                    text : "Q-tips"
                                },
                                {
                                    href : "/",
                                    text : "HYDRO SILK"
                                },
                                {
                                    href : "/",
                                    text : "Glad"
                                },
                                {
                                    href : "/",
                                    text : "Gum"
                                },
                                {
                                    href : "/",
                                    text : "Rael"
                                },
                                {
                                    href : "/",
                                    text : "DAWN"
                                },
                            ]
                        }
                    />
                    <BrowseBoxPlain
                        title={"Avg. Customer Review"}
                        links={
                            [
                                {
                                    href : "/",
                                    text : <>
                                                <div aria-label="4 Stars &amp; Up">
                                                    <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                    </i>
                                                    <span className="a__size__small a__color__base" dir="auto"> &amp; Up</span>
                                                </div>
                                            </>
                                },
                                {
                                    href : "/",
                                    text : <>
                                                <div aria-label="4 Stars &amp; Up">
                                                    <i className="a__icon a__icon__star__medium a__star__medium__3">
                                                        <span className="a__icon__alt">3 Stars &amp; Up</span>
                                                    </i>
                                                    <span className="a__size__small a__color__base" dir="auto"> &amp; Up</span>
                                                </div>
                                            </>
                                },
                                {
                                    href : "/",
                                    text : <>
                                                <div aria-label="4 Stars &amp; Up">
                                                    <i className="a__icon a__icon__star__medium a__star__medium__2">
                                                        <span className="a__icon__alt">2 Stars &amp; Up</span>
                                                    </i>
                                                    <span className="a__size__small a__color__base" dir="auto"> &amp; Up</span>
                                                </div>
                                            </>
                                },
                                {
                                    href : "/",
                                    text : <>
                                                <div aria-label="4 Stars &amp; Up">
                                                    <i className="a__icon a__icon__star__medium a__star__medium__1">
                                                        <span className="a__icon__alt">1 Stars &amp; Up</span>
                                                    </i>
                                                    <span className="a__size__small a__color__base" dir="auto"> &amp; Up</span>
                                                </div>
                                            </>
                                }
                            ]
                        }
                    />
                    <BrowseBoxPlain
                        title={"New Arrivals"}
                        links={
                            [
                                {
                                    href : "/",
                                    text : "Last 30 days",
                                },
                                {
                                    href : "/",
                                    text : "Last 90 days",
                                },
                                {
                                    href : "/",
                                    text : "Coming Soon",
                                }
                            ]
                        }
                    />
                    <BrowseBoxPlain
                        title={"Price"}
                        links={
                            [
                                {
                                    href : "/",
                                    text : "Under $25",
                                },
                                {
                                    href : "/",
                                    text : "$25 to $50",
                                },
                                {
                                    href : "/",
                                    text : "$50 to $100",
                                },
                                {
                                    href : "/",
                                    text : "$100 to $200",
                                },
                                {
                                    href : "/",
                                    text : "$200 to above",
                                },
                            ]
                        }
                    />
                    <BrowseCheckbox
                        title={"Deals"}
                        links={
                            [
                                {
                                    href : "/",
                                    text : "Today's Deals"
                                }
                            ]
                        }
                    />
                    <BrowseCheckbox
                        title={"Seller"}
                        links={
                            [
                                {
                                    href : "/",
                                    text : "Amazon.ca"
                                },
                                {
                                    href : "/",
                                    text : "Layger"
                                },
                                {
                                    href : "/",
                                    text : "Fastmedia ship USA"
                                },
                                {
                                    href : "/",
                                    text : "Pharmapacks"
                                },
                                {
                                    href : "/",
                                    text : "DAILY SUPPLY"
                                },
                                {
                                    href : "/",
                                    text : "Mega Supplement Store"
                                },
                                {
                                    href : "/",
                                    text : "Ella Gray Beauty"
                                },
                                {
                                    href : "/",
                                    text : "Holistic Ave"
                                },
                                {
                                    href : "/",
                                    text : "2CA61 BYLF"
                                },
                                {
                                    href : "/",
                                    text : "HerbsPro"
                                }
                            ]
                        }
                    />
                    <BrowseCheckbox
                        title={"Availability"}
                        links={
                            [
                                {
                                    href : "/",
                                    text : "Include Out of Stock"
                                }
                            ]
                        }
                    />
                </section>
                <section className="apBrowse flex-fill">
                    <h1 className="bxc__grid__spacing__large">
                        <b>Beauty Store</b>
                    </h1>
                    <section className="bxc__grid__spacing__large">
                        <div className="bxc__grid__container bxc__grid__container__width__1500">
                            <div className="bxc__grid__row bxc__grid__row__light">
                                <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light">
                                            <Link to="/">
                                                <img src={university_personal_care} alt="Off to University Personal Care"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <section className="bx__root">
                            <Link to="/">
                                <div className="root__bannerx0__base bannerx0__root__bgTreatment bannerx0__Xwide__default">
                                    <section className="bannerx0__copy__layout bannerx0__copy__base bannerx0__copy bannerx0__copy__bgTreatment bannerx0__ie__copy__Xwide__default" style={{fontSize : "20px"}}>
                                        <div className="bannerx0__copy__content bannerx0__copy__content__base gift__image__container">
                                            <div className="bannerx0__headline">
                                                Face the Sun with Protection 
                                            </div>
                                            <div className="bannerx0__subtext">
                                                Neutrogena & Aveeno 
                                            </div>
                                            <div className="bannerx0__cta gift__image bannerx0__cta__arrow__right">
                                                <span>Shop now</span>
                                            </div>
                                        </div>
                                    </section>
                                    <section className="bannerx0__background__image bannerx0__ie__background__image__Xwide__default bannerx0__background__image__bgTreatment">
                                        <img src={neutrogena_ultra_sheer} alt="" />
                                    </section>
                                </div>
                            </Link>
                        </section>
                    </section>
                    <section>
                        <Grid_One   
                            title={"Featured categories"}
                            item={  /* Usually in 5's */
                                [
                                    {
                                        img : white_usb_charger,
                                        caption : 
                                            <>
                                                Accessories &amp; Supplies
                                            </>
                                        ,
                                        categories: [
                                                {
                                                    link : "/",
                                                    caption : "Cell Phone Accessories"
                                                },
                                                {
                                                    link : "/",
                                                    caption : "Computer Accessories"
                                                },
                                                {
                                                    link : "/",
                                                    caption : "Home Audio &amp; Video Accessories"
                                                }
                                        ]
                                    },
                                    {
                                        img : white_usb_charger,
                                        caption : 
                                            <>
                                                Accessories &amp; Supplies
                                            </>
                                        ,
                                        categories: [
                                                {
                                                    link : "/",
                                                    caption : "Cell Phone Accessories"
                                                },
                                                {
                                                    link : "/",
                                                    caption : "Computer Accessories"
                                                },
                                                {
                                                    link : "/",
                                                    caption : "Home Audio &amp; Video Accessories"
                                                }
                                        ]
                                    },
                                    {
                                        img : white_usb_charger,
                                        caption : 
                                            <>
                                                Accessories &amp; Supplies
                                            </>
                                        ,
                                        categories: [
                                                {
                                                    link : "/",
                                                    caption : "Cell Phone Accessories"
                                                },
                                                {
                                                    link : "/",
                                                    caption : "Computer Accessories"
                                                },
                                                {
                                                    link : "/",
                                                    caption : "Home Audio & Video Accessories"
                                                }
                                        ]
                                    },
                                    {
                                        img : white_usb_charger,
                                        caption : 
                                            <>
                                                Accessories &amp; Supplies
                                            </>
                                        ,
                                        categories: [
                                                {
                                                    link : "/",
                                                    caption : "Cell Phone Accessories"
                                                },
                                                {
                                                    link : "/",
                                                    caption : "Computer Accessories"
                                                },
                                                {
                                                    link : "/",
                                                    caption : "Home Audio & Video Accessories"
                                                }
                                        ]
                                    },
                                    {
                                        img : white_usb_charger,
                                        caption : 
                                            <>
                                                Accessories &amp; Supplies
                                            </>
                                        ,
                                        categories: [
                                                {
                                                    link : "/",
                                                    caption : "Cell Phone Accessories"
                                                },
                                                {
                                                    link : "/",
                                                    caption : "Computer Accessories"
                                                },
                                                {
                                                    link : "/",
                                                    caption : "Home Audio & Video Accessories"
                                                }
                                        ]
                                    }
                                ]
                            }
                        />
                    </section>
                    <section>
                        <CardSix
                            title={"Recommended for you"}
                            items={
                                [
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817"
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817"
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817"
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817"
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817"
                                        }
                                    }
                                ]
                            }
                        />
                    </section>
                    <section>
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
                    </section>
                    <section>
                        <CardSix
                            title={"Most Wished For"}
                            link={"/"}
                            items={
                                [
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817"
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817"
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817"
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817"
                                        }
                                    }
                                ]
                            }
                        />  
                    </section>
                    <section>
                        <CardSix
                            title={"Hot New Releases"}
                            link={"/"}
                            items={
                                [
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817"
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817"
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817"
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817"
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817"
                                        }
                                    }
                                ]
                            }
                        />
                    </section>
                    <section>
                        <CardSix
                            title={"Best Sellers"}
                            link={"/"}
                            items={
                                [
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817",
                                            bestSeller : 1
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817",
                                            bestSeller : 2
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817",
                                            bestSeller : 3
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817"
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817"
                                        }
                                    }
                                ]
                            }
                        />
                    </section>
                    <section>
                        <CardSix
                            title={"Under $25"}
                            link={"/"}
                            items={
                                [
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817",
                                            bestSeller : 1
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817",
                                            bestSeller : 2
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817",
                                            bestSeller : 3
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817"
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817"
                                        }
                                    }
                                ]
                            }
                        />
                    </section>
                    <section>
                        <CardSix
                            title={"Most Gifted"}
                            link={"/"}
                            items={
                                [
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            rating : "4__5",
                                            count : "2,817"
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            rating : "4__5",
                                            count : "2,817"
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            rating : "4__5",
                                            count : "2,817"
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            rating : "4__5",
                                            count : "2,817"
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            rating : "4__5",
                                            count : "2,817"
                                        }
                                    }
                                ]
                            }
                        />
                    </section>
                    <section>   
                        <CardSix
                            title={"Featured Deals"}
                            link={"/"}
                            type={"featured"}
                            items={ 
                                [   
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817",
                                            bestSeller : 1,
                                            percentage_off : 20
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817",
                                            bestSeller : 2
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817",
                                            bestSeller : 3
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817"
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817"
                                        }
                                    }
                                ]
                            }
                        />
                    </section>
                    <section>
                        <div className="bxc__grid__spacing__large">
                            <section className="bxc__grid__spacing__large">
                                <div className="bxc__grid__container bxc__grid__container__width__1500">
                                    <div className="bxc__grid__row bxc__grid__row__light">
                                        <div className="bxc__grid__column bxc__grid__column__4__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={loreal_paris} alt="L'Oreal Paris"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bxc__grid__column bxc__grid__column__4__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={loreal_paris} alt="L'Oreal Paris"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bxc__grid__column bxc__grid__column__4__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={loreal_paris} alt="L'Oreal Paris"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="a__divider__normal" />
                                    <div className="bxc__grid__row bxc__grid__row__light">
                                        <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__row bxc__grid__row__light">
                                        <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__row bxc__grid__row__light">
                                        <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                            <div className="bxc__grid__content bxc__grid__content__light">
                                                <div className="bxc__grid__image bxc__grid__image__light">
                                                    <Link to="/">
                                                        <img src={cetaphil} alt="Cetaphil"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                    <section>
                        <CardSix
                            title={"Lightning Deals"}
                            link={"/"}
                            type={"lightning"}
                            items={
                                [
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            deal : 43,
                                            rating : "4__5",
                                            count : "2,817",
                                            percentage_off : 20
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            deal : 43,
                                            rating : "4__5",
                                            count : "2,817"
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            deal : 43,
                                            rating : "4__5",
                                            count : "2,817"
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            deal : 43,
                                            rating : "4__5",
                                            count : "2,817"
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            deal : 43,
                                            rating : "4__5",
                                            count : "2,817"
                                        }
                                    }
                                ]
                            }
                        />
                    </section>
                    <SearchResult
                        range={"1-12"}
                        total={"100,000"}
                        title={"Electronics"}
                    />
                    <section>
                        <CardSeven
                            title={"Best Sellers"}
                            link={"/"}
                            items={
                                [
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817",
                                            arrival_date : "Wednesday, July 21",
                                            manufacturer : "Apple",
                                            shipping_link : "/",
                                            arrival_link : "/"
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817",
                                            bestSeller : "BestSeller",
                                            category : "Stereo Headphones",
                                            arrival_date : "Wednesday, July 21",
                                            manufacturer : "Apple",
                                            shipping_link : "/",
                                            arrival_link : "/"
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817",
                                            bestSeller : "BestSeller",
                                            category : "Stereo Headphones",
                                            arrival_date : "Wednesday, July 21",
                                            manufacturer : "Apple",
                                            shipping_link : "/",
                                            arrival_link : "/"
                                        }
                                    }
                                ]
                            }
                        />
                    </section>
                    <section>
                        <CardSeven
                            title={"Best Sellers"}
                            link={"/"}
                            items={
                                [
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817",
                                            arrival_date : "Wednesday, July 21",
                                            manufacturer : "Apple",
                                            shipping_link : "/",
                                            arrival_link : "/"
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817",
                                            bestSeller : "BestSeller",
                                            category : "Stereo Headphones",
                                            arrival_date : "Wednesday, July 21",
                                            manufacturer : "Apple",
                                            shipping_link : "/",
                                            arrival_link : "/"
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817",
                                            bestSeller : "BestSeller",
                                            category : "Stereo Headphones",
                                            arrival_date : "Wednesday, July 21",
                                            manufacturer : "Apple",
                                            shipping_link : "/",
                                            arrival_link : "/"
                                        }
                                    }
                                ]
                            }
                        />
                    </section>
                    <section className="last">
                        <CardSeven
                            title={"Best Sellers"}
                            link={"/"}
                            items={
                                [
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817",
                                            arrival_date : "Wednesday, July 21",
                                            manufacturer : "Apple",
                                            shipping_link : "/",
                                            arrival_link : "/"
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817",
                                            bestSeller : "BestSeller",
                                            category : "Stereo Headphones",
                                            arrival_date : "Wednesday, July 21",
                                            manufacturer : "Apple",
                                            shipping_link : "/",
                                            arrival_link : "/"
                                        }
                                    },
                                    {
                                        item : {
                                            img : white_usb_charger,
                                            alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                            title : "Apple AirPods with Charging Case",
                                            price : 159,
                                            price_fraction : 98,
                                            old_price : 177.00,
                                            rating : "4__5",
                                            count : "2,817",
                                            bestSeller : "BestSeller",
                                            category : "Stereo Headphones",
                                            arrival_date : "Wednesday, July 21",
                                            manufacturer : "Apple",
                                            shipping_link : "/",
                                            arrival_link : "/"
                                        }
                                    }
                                ]
                            }
                        />
                    </section>
                    <SeeAllResults />
                </section>
            </section>
        </section>
    )

    return (
        <Layout>
            <BeautyPage />
        </Layout>
    )
}

export default Beauty
