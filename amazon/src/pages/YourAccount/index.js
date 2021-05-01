import React from 'react'

import Layout from '../../components/Layout'
import CarouselDetailed from '../../components/UI/Carousel/CarouselDetailed'
import { CardCell, CardCellLinks } from '../../components/UI/CardCell'

import Slider from '../../components/UI/Carousel/Carousel'

import { Row } from 'reactstrap'

import order from '../../images/order.png'
import security from '../../images/security.png'
import prime from '../../images/prime.png'
import address from '../../images/address.png'
import payment from '../../images/payment.png'
import gift_card from '../../images/gift-card.png'

import ameriwood_lumina from '../../images/products/ameriwood-home-lumina-fireplace-tv-stand-white.jpg'
import modern_cube from '../../images/products/baxton-studio-siskal-modern-cube-ottoman-white-set-of-2.jpg'
import monterey_tv_stand from '../../images/products/convenience-concepts-151401W-designs2Go-monterey-tv-stand.jpg'
import frosted_endtable from '../../images/products/global-furniture-clear-frosted-occasional-end-table.jpg'
import leather_swivel from '../../images/products/furmax-bar-stools-modern-pu-leather-swivel.jpg'
import faux_leather from '../../images/products/best-choice-products-faux-leather-modern-convertible.jpg'

import '../../css/styles/index.css'
import './index.css'


const YourAccount = () => {
    
    return (
        <Layout>
            <section className="a__container">
                <div className="a__section">
                    <h1 className="a__spacing__base">
                        Your Account
                    </h1>
                    <Row tag="ul" className="card__cell__row align-items-stretch mx-0">
                        <CardCell 
                            heading={"Your Orders"}
                            text={"Track, return, or buy things again"}
                            cardCellImg={
                                [
                                    {
                                        img : order,
                                        alt : "your orders"
                                    }
                                ]
                            }
                        />
                        <CardCell 
                            heading={"Login & security"}
                            text={"Edit login, name, and cell phone number"}
                            cardCellImg={
                                [
                                    {
                                        img : security,
                                        alt : "login & security"
                                    }
                                ]
                            }
                        />
                        <CardCell 
                            heading={"Prime"}
                            text={"View benefits and payment settings"}
                            cardCellImg={
                                [
                                    {
                                        img : prime,
                                        alt : "prime"
                                    }
                                ]
                            }
                        />
                    </Row>
                    <Row tag="ul" className="card__cell__row align-items-stretch mx-0">
                        <CardCell 
                            heading={"Your Addresses"}
                            text={"Edit addresses for orders and gifts"}
                            cardCellImg={
                                [
                                    {
                                        img : address,
                                        alt : "your addresses"
                                    }
                                ]
                            }
                        />
                        <CardCell 
                            heading={"Your Payments"}
                            text={"Manage payment methods and settings, view balances and offers"}
                            cardCellImg={
                                [
                                    {
                                        img : payment,
                                        alt : "your payments"
                                    }
                                ]
                            }
                        />
                        <CardCell 
                            heading={"Gift Cards"}
                            text={"View balance or redeem a card"}
                            cardCellImg={
                                [
                                    {
                                        img : gift_card,
                                        alt : "gift cards"
                                    }
                                ]
                            }
                        />
                    </Row>
                    <hr class="a__spacing__extra__large a__spacing__top__extra__large a__divider__normal"/>
                    <Row tag="ul" className="card__cell__row align-items-stretch mx-0">
                        <CardCellLinks 
                            heading={"Digital content and devices"}
                            links={
                                [
                                    {
                                        href : "/amazon_drive",
                                        text : "Amazon Drive"
                                    },
                                    {
                                        href : "/apps_and_more",
                                        text : "Apps and more"
                                    },
                                    {
                                        href : "/prime_video_settings",
                                        text : "Prime Video settings"
                                    },
                                    {
                                        href : "/content_and_devices",
                                        text : "Content and devices"
                                    },
                                    {
                                        href : "/games_and_software",
                                        text : "Games and software"
                                    },
                                    {
                                        href : "/music_settings",
                                        text : "Music settings"
                                    }
                                ]
                            }
                        />
                        <CardCellLinks 
                            heading={"Email alerts, messages, and ads"}
                            links={
                                [
                                    {
                                        href : "/advertising_preferences",
                                        text : "Advertising preferences"
                                    },
                                    {
                                        href : "/communication_preferences",
                                        text : "Communication preferences"
                                    },
                                    {
                                        href : "/message_centre",
                                        text : "Message centre"
                                    },
                                    {
                                        href : "/alexa_shopping_notifications",
                                        text : "Alexa shopping notifications"
                                    },
                                    {
                                        href : "/deals_notifications",
                                        text : "Deals Notifications"
                                    }
                                ]
                            }
                        />
                        <CardCellLinks 
                            heading={"More ways to pay"}
                            links={
                                [
                                    {
                                        href : "/one_click_settings",
                                        text : "1-Click settings"
                                    },
                                    {
                                        href : "/amazon_credit_card",
                                        text : "Amazon Credit Card"
                                    },
                                    {
                                        href : "/coupons",
                                        text : "Coupons"
                                    },
                                    {
                                        href : "/shop_with_points",
                                        text : "Shop with Points"
                                    }
                                ]
                            }
                        />
                    </Row>
                    <Row tag="ul" className="card__cell__row align-items-stretch mx-0">
                        <CardCellLinks 
                            heading={"Ordering and shopping preferences"}
                            links={
                                [
                                    {
                                        href : "/amazon_tax_exemption_program",
                                        text : "Amazon tax exemption program"
                                    },
                                    {
                                        href : "/archived_orders",
                                        text : "Archived orders"
                                    },
                                    {
                                        href : "/language_settings",
                                        text : "Language settings"
                                    },
                                    {
                                        href : "/profile",
                                        text : "Profile"
                                    },
                                    {
                                        href : "/your_transactions",
                                        text : "Your transactions"
                                    }
                                ]
                            }
                        />
                        <CardCellLinks 
                            heading={"Other accounts"}
                            links={
                                [
                                    {
                                        href : "/amazon_business_registration ",
                                        text : "Amazon Business registration "
                                    },
                                    {
                                        href : "/seller",
                                        text : "Seller"
                                    },
                                    {
                                        href : "/amazon_web_services",
                                        text : "Amazon Web Services"
                                    },
                                    {
                                        href : "/login",
                                        text : "Login with Amazon"
                                    },
                                    {
                                        href : "/twitch_account_settings",
                                        text : "Twitch account settings"
                                    }
                                ]
                            }
                        />
                        <CardCellLinks 
                            heading={"Shopping programs and rentals"}
                            links={
                                [
                                    {
                                        href : "/manage_your_profiles",
                                        text : "Manage Your Profiles"
                                    },
                                    {
                                        href : "/subscribe_and_save",
                                        text : "Subscribe & Save"
                                    }
                                ]
                            }
                        />
                    </Row>
                    <Row tag="ul" className="card__cell__row align-items-stretch mx-0">
                        <CardCellLinks 
                            heading={"Subscriptions"}
                            links={
                                [
                                    {
                                        href : "/email",
                                        text : "Email"
                                    },
                                    {
                                        href : "/memberships_and_ubscriptions",
                                        text : "Memberships & Subscriptions"
                                    },
                                ]
                            }
                        />
                    </Row>
                </div>
            </section>
            <br/>
            <section className="browsing__history">
                <CarouselDetailed 
                    heading={
                        [
                            "Inspired by your browsing history", "Buy in other parts of the store"
                        ]
                    }
                    squished={true}
                    slider={
                        [
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
                            />,
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
                                            caption: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                            author: "Barack Obama",
                                            audible: true,
                                            bestSeller: true,
                                            freeTrial: true,
                                            category: "21st Century U.S. History"
                                        },
                                        {
                                            href: '/',
                                            src: leather_swivel,
                                            altText: "Furmax Bar Stools Modern Pu Leather Swivel Adjustable Hydraulic Bar Stool Square Counter Height Stool Set of 2(White)",
                                            caption: "Furmax Bar Stools Modern Pu Leather Swivel Adjustable Hydraulic Bar Stool Square Counter Height Stool Set of 2(White)",
                                            author: "Barack Obama",
                                            audible: true,
                                            bestSeller: true,
                                            freeTrial: true,
                                            category: "Memoirs"
                                        },
                                        {
                                            href: '/',
                                            src: frosted_endtable,
                                            altText: "Global Furniture Clear/Frosted Occasional End Table with Glossy White Legs",
                                            caption: "Global Furniture Clear/Frosted Occasional End Table with Glossy White Legs",
                                            author: "Barack Obama",
                                            audible: true,
                                            bestSeller: true,
                                            freeTrial : true,
                                            category: "Fantasy & Magic for Children"
                                        },
                                        {
                                            href: '/',
                                            src: monterey_tv_stand,
                                            altText: "Convenience Concepts 151401W Designs2Go Monterey TV Stand, White",
                                            caption: "Convenience Concepts 151401W Designs2Go Monterey TV Stand, White",
                                            author: "Barack Obama",
                                            audible: true,
                                            bestSeller: true,
                                            freeTrial: true,
                                            category: "Social Psychology & Interactions"
                                        },
                                        {
                                            href: '/',
                                            src: modern_cube,
                                            altText: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                            caption: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                            author: "Barack Obama",
                                            audible: true,
                                            bestSeller: true,
                                            freeTrial: true,
                                            category: "History of Canada"
                                        },
                                        {
                                            href: '/',
                                            src: ameriwood_lumina,
                                            altText: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                            caption: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                            author: "Barack Obama",
                                            audible: true,
                                            bestSeller: false,
                                            freeTrial: true,
                                            category: ""
                                        },
                                        {
                                            href: '/',
                                            src: ameriwood_lumina,
                                            altText: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                            caption: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                            author: "Barack Obama",
                                            audible: true,
                                            bestSeller: true,
                                            freeTrial : true,
                                            category: "21st Century U.S. History"
                                        },
                                        {
                                            href: '/',
                                            src: ameriwood_lumina,
                                            altText: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                            caption: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                            author: "Barack Obama",
                                            audible: true,
                                            bestSeller: true,
                                            freeTrial: true,
                                            category: "Memoirs"
                                        },
                                        {
                                            href: '/',
                                            src: modern_cube,
                                            altText: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                            caption: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                            author: "Barack Obama",
                                            audible: true,
                                            bestSeller: true,
                                            freeTrial: true,
                                            category: "Fantasy & Magic for Children"
                                        },
                                        {
                                            href: '/',
                                            src: modern_cube,
                                            altText: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                            caption: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                            author: "Barack Obama",
                                            audible: true,
                                            bestSeller: true,
                                            freeTrial: true,
                                            category: "Social Psychology & Interactions"
                                        },
                                        {
                                            href: '/',
                                            src: modern_cube,
                                            altText: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                            caption: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                            author: "Barack Obama",
                                            audible: true,
                                            bestSeller: true,
                                            freeTrial: true,
                                            category: "History of Canada"
                                        },
                                        {
                                            href: '/',
                                            src: modern_cube,
                                            altText: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                            caption: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                            author: "Barack Obama",
                                            audible: true,
                                            bestSeller: false,
                                            freeTrial: true,
                                            category: ""
                                        }
                                    ]
                                }
                            />
                        ]
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
        </Layout>
    )
}

export default YourAccount
