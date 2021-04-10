import React from 'react'

import Layout from '../../components/Layout'
import { CardCell, CardCellLinks } from '../../components/UI/CardCell'

import { Row, Col } from 'reactstrap'

import order from '../../images/order.png'
import security from '../../images/security.png'
import prime from '../../images/prime.png'
import address from '../../images/address.png'
import payment from '../../images/payment.png'
import gift_card from '../../images/gift-card.png'

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
        </Layout>
    )
}

export default YourAccount
