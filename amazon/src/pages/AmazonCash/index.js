import React from 'react'

import Layout from '../../components/Layout'
import { BrowseBoxSimple, BrowseBoxPrimary, BrowseCheckbox, BrowseBoxPlain } from '../../components/UI/BrowseBox'

import Helpful from './Helpful'

import { Link } from 'react-router-dom'

import amazon_cash from '../../images/amazon-cash.png'
import exchange_money from '../../images/exchange-money.jpg'
import steps_spot_sign_in_at from '../../images/steps-spot-sign-in-at.png'
import steps_spot_bc_or_phone_at from '../../images/steps-spot-bc-or-phone-at.png'

import steps_spot_cashier_at from '../../images/steps-spot-cashier-at.png'
import steps_spot_add_money_at from '../../images/steps-spot-add-money-at.png'
import steps_spot_shop_at from '../../images/steps-spot-shop-at.png'
import cash_icon_tips_phone_multi from '../../images/cash-icon-tips-phone-multi.png'
import canada_post_logo_en from '../../images/canada-post-logo-en.jpg'
import seven_eleven_logo from '../../images/7-eleven-logo.png'
import circle_k_logo from '../../images/circle-k-logo.png'
import hasty_market_logo from '../../images/hasty-market-logo.png'
import mobile_logo from '../../images/mobile-logo.png'
import red_apple_logo from '../../images/red-apple-logo.png'
import the_bargain_shop_logo from '../../images/the-bargain-shop-logo.png'
import super_sagamie_logo_two from '../../images/super-sagamie-logo-2.png'
import macewen_logo from '../../images/macewen-logo.png' 
import new_prepay_logo from '../../images/new-prepay-logo.png' 
import cash_icon from '../../images/cash-icon.png' 

import './index.css'

const AmazonCash = () => {

    const AmazonCashPage = () => (

        <section className="a__container amazonCash">
            <section className="d-flex mx-0 flex-fill">
                <section className="browserBox">
                    <BrowseBoxSimple
                        title={"Amazon Cash"}
                        links={
                            [
                                {
                                    href : "/",
                                    text : "Overview"
                                },
                                {
                                    href : "/",
                                    text : "Find a location"
                                },
                                {
                                    href : "/",
                                    text : "Get your barcode"
                                },
                                {
                                    href : "/",
                                    text : "Confirm your number"
                                },
                                {
                                    href : "/",
                                    text : "View your Amazon Balance"
                                },
                                {
                                    href : "/",
                                    text : "Frequently Asked Questions"
                                }
                            ]
                        }
                        style="squished"
                    />
                    <BrowseBoxSimple
                        title={"Amazon Payment Products"}
                        links={
                            [
                                {
                                    href : "/",
                                    text : "Shop with Points"
                                },
                                {
                                    href : "/",
                                    text : "Reload your Balance"
                                },
                                {
                                    href : "/",
                                    text : "Amazon Currency Converter"
                                }
                            ]
                        }
                        style="squished"
                    />
                    <BrowseBoxSimple
                        title={"Gift Cards"}
                        links={
                            [
                                {
                                    href : "/",
                                    text : "Shop all Gift Cards"
                                },
                                {
                                    href : "/",
                                    text : "Email a Gift Card"
                                },
                                {
                                    href : "/",
                                    text : "Redeem a Gift Card"
                                }
                            ]
                        }
                        style="squished"
                    />
                </section>
                <section className="apBrowse flex-fill">
                    <section className="amazonCash__hero padding__top__minibase__ii">
                        <div className="columns__container columns__container--half columns__container--full__width">
                            <section className="column">
                                <div className="padding__bottom__mini">
                                    <img src={amazon_cash} alt="Amazon Cash logo" title="Amazon Cash logo" style={{height: "50px"}} />
                                </div>
                                <h1 className="heading color__light">
                                    <span className="text__color__picker color__dark">
                                        Use Amazon Cash to shop with cash on Amazon.ca
                                    </span>
                                </h1>
                                <section className="padding__top__mini padding__bottom__mini">
                                    <h2 className="heading__size--xtra-xtra-small color__normal">
                                        <span className="text__color__picker color__dark">
                                            Use Amazon Cash to conveniently shop on Amazon.ca without a debit or credit card
                                        </span>
                                    </h2>
                                </section>
                                <section className="padding__top__minibase">
                                    <Link to="/" className="link__type__button">
                                        Find out how
                                    </Link>
                                </section>
                            </section>
                            <section className="column">
                                <img src={exchange_money} alt="While at a retail store, a clerk gives change to a customer." />
                            </section>
                        </div>
                    </section>
                    <section className="has__max__width__ii padding__top__base padding__bottom__base">
                        <div className="columns__container columns__container__single columns__container--full__width">
                            <section className="column" style={{width: "66.66667%", margin: "auto"}}>
                                <div className="padding__top__xsmall">
                                    <h2 className="align-center heading__size__normal color__normal">
                                        <strong>What is Amazon Cash?</strong>
                                    </h2>
                                </div>
                                <p className="text__size--medium color__normal p-bottom">
                                    You can visit participating store locations to add a Gift Card Balance to your Amazon Account. Present your barcode or phone number to a cashier. (If the store has a kiosk or ATM, you can use it instead to enter your phone number.) 
                                    <br/>
                                    <br/>
                                    Add between $5 - $500.
                                </p>
                                <Link to="/" className="link__type__normal">
                                    See the details
                                </Link>
                            </section>
                        </div>
                    </section>
                    <section className="amazon__cashBenefits padding__top__large padding__bottom__large">
                        <div className="columns__container columns__container--limit-width columns__container--single">
                            <section className="column">
                                <h2 className="color__normal heading__size--normal text-center">
                                    <span className="text__color__picker color__white">
                                        <strong>Benefits</strong>
                                    </span>
                                </h2>
                                <h3 className="heading__size--xtra-small color__white text-center padding__bottom__mini">
                                    <strong>Why should you use Amazon Cash?</strong>
                                </h3>
                            </section>
                            <section className="padding__bottom__xsmall">
                                <div className="line line__width--medium"></div>
                            </section>
                            <section className="padding__bottom__small d-flex">
                                <section className="amazon__cashBenefitCol col column">
                                    <h4 className="text text__size--medium color__white p-bottom">
                                        <strong>It’s convenient</strong>
                                    </h4>
                                    <p className="text color__white text__size--medium">
                                        Shop on Amazon without a debit or credit card. Amazon Cash is available at thousands of participating stores.
                                    </p>
                                </section>
                                <section className="amazon__cashBenefitCol col column">
                                    <h4 className="text text__size--medium color__white p-bottom">
                                        <strong>It's interest-free</strong>
                                    </h4>
                                    <p className="text color__white text__size--medium">
                                        We don’t charge any fees or interest.
                                    </p>
                                </section>
                                <section className="amazon__cashBenefitCol col column">
                                    <h4 className="text text__size--medium color__white p-bottom">
                                        <strong>It’s good for budgeting</strong>
                                    </h4>
                                    <p className="text color__white text__size--medium">
                                        Keep track of what you spend by loading a set amount into your Amazon Account.
                                    </p>
                                </section>
                                <section className="amazon__cashBenefitCol col column">
                                    <h4 className="text text__size--medium color__white p-bottom">
                                        <strong>It’s secure</strong>
                                    </h4>
                                    <p className="text color__white text__size--medium">
                                        Amazon Cash uses a unique personal barcode or your verified phone number to add Amazon Gift Cards to your Amazon Account.
                                    </p>
                                </section>
                            </section>
                        </div>
                    </section>
                    <section>
                        <section className="padding__top__large">
                            <div className="columns__container columns__container--single columns__container--full-width">
                                <div className="has__max__width__ii">
                                    <div className="column">
                                        <h2 className="color__normal heading__size--normal text-center">
                                            <strong>How it works</strong>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="columns__container columns__container--collapsed columns__container--third columns__container--full-width">
                            <div className="padding__left__xlarge padding__bottom__minibase padding__right__xlarge">
                                <div className="column">
                                    <div className="text-center">
                                        <img className="amazon__worksImg" src={steps_spot_sign_in_at} alt="Illustration representing an Amazon Account." />
                                    </div>
                                    <section className="padding__top__small">
                                        <p class="text color__dark text__size--medium">
                                            <strong>Step 1</strong>
                                        </p>
                                    </section>
                                    <section className="padding__bottom__xlarge">
                                        <p className="text color__dark text__size--medium">
                                            Sign into your
                                            <Link to="/">
                                                <strong>Amazon account</strong>
                                            </Link> or
                                            <Link to="/">
                                                <strong>create an account</strong>
                                            </Link>
                                        </p>
                                    </section>
                                </div>
                            </div>
                            <div className="padding__left__xlarge padding__bottom__minibase padding__right__xlarge">
                                <div className="column">
                                    <div className="text-center">
                                        <img className="amazon__worksImg" src={steps_spot_bc_or_phone_at} alt="Amazon Account illustration." />
                                    </div>
                                    <section className="padding__top__small">
                                        <p class="text color__dark text__size--medium">
                                            <strong>Step 2</strong>
                                        </p>
                                    </section>
                                    <section className="padding__bottom__xlarge">
                                        <p className="text color__dark text__size--medium">
                                            Get your  
                                            <Link to="/">
                                                <strong>&nbsp;barcode</strong>
                                            </Link> or verify your
                                            <Link to="/">
                                                <strong>phone number with Amazon</strong>.
                                            </Link>
                                            You’ll use one of these when you visit a store.
                                        </p>
                                    </section>
                                </div>
                            </div>
                            <div className="padding__left__xlarge padding__bottom__minibase padding__right__xlarge">
                                <div className="column">
                                    <div className="text-center">
                                        <img className="amazon__worksImg" src={steps_spot_sign_in_at} alt="Illustration representing an Amazon Account." />
                                    </div>
                                    <section className="padding__top__small">
                                        <p class="text color__dark text__size--medium">
                                            <strong>Step 3</strong>
                                        </p>
                                    </section>
                                    <section className="padding__bottom__xlarge">
                                        <p className="text color__dark text__size--medium">
                                            Visit a &nbsp;
                                            <Link to="/">
                                                <strong>participating store.</strong>&nbsp;
                                            </Link>
                                            Bring money along with your barcode or phone number.
                                        </p>
                                    </section>
                                </div>
                            </div>
                            <div className="padding__left__xlarge padding__bottom__minibase padding__right__xlarge">
                                <div className="column">
                                    <div className="text-center">
                                        <img className="amazon__worksImg" src={steps_spot_cashier_at} alt="Cash register." />
                                    </div>
                                    <section className="padding__top__small">
                                        <p class="text color__dark text__size--medium">
                                            <strong>Step 4</strong>
                                        </p>
                                    </section>
                                    <section className="padding__bottom__xlarge">
                                        <p className="text color__dark text__size--medium">
                                            Ask the cashier for Amazon Cash. Give them your barcode or phone number. (Optional: If available, you can add cash at a kiosk or ATM, using your phone number.)
                                        </p>
                                    </section>
                                </div>
                            </div>
                            <div className="padding__left__xlarge padding__bottom__minibase padding__right__xlarge">
                                <div className="column">
                                    <div className="text-center">
                                        <img className="amazon__worksImg" src={steps_spot_add_money_at} alt="Wallet with bills hanging out." />
                                    </div>
                                    <section className="padding__top__small">
                                        <p class="text color__dark text__size--medium">
                                            <strong>Step 5</strong>
                                        </p>
                                    </section>
                                    <section className="padding__bottom__xlarge">
                                        <p className="text color__dark text__size--medium">
                                            Add between $5 – $500. Your Amazon Account will reflect the amount immediately.
                                        </p>
                                    </section>
                                </div>
                            </div>
                            <div className="padding__left__xlarge padding__bottom__minibase padding__right__xlarge">
                                <div className="column">
                                    <div className="text-center">
                                        <img className="amazon__worksImg" src={steps_spot_shop_at} alt="Tablet and desktop computer screen, both displaying a shopping cart." />
                                    </div>
                                    <section className="padding__top__small">
                                        <p class="text color__dark text__size--medium">
                                            <strong>Step 6</strong>
                                        </p>
                                    </section>
                                    <section className="padding__bottom__xlarge">
                                        <p className="text color__dark text__size--medium">
                                            Shop on Amazon.ca with your new loaded balance.
                                        </p>
                                    </section>
                                </div>
                            </div>
                        </section>
                        <section>
                            <section className="padding__bottom__small">
                                <div className="column">
                                    <div className="padding__bottom__small"></div>
                                    <div className="text-center">
                                         <Link to="/" className="link__type__button">
                                            Find a store
                                         </Link>
                                    </div>
                                </div>
                            </section>
                            <section className="background__color__amazon__light__orange padding__bottom__small padding__top__large">
                                <div className="columns__wrapper">
                                    <div className="columns__container columns__container--single columns__container--full-width columns__container--collapsed">
                                        <h2 className="text-center color__normal heading__size--small">
                                            <strong>A few tips for using Amazon Cash</strong>   
                                        </h2>
                                    </div>
                                </div>
                            </section>
                            <section className="background__color__amazon__light__orange padding__bottom__small">
                                <div className="columns__wrapper">
                                    <div className="columns__container columns__container--fourth columns__container--full-width columns__container--collapsed">
                                        <section className="padding__left__xlarge padding__bottom__large padding__right__xlarge">
                                            <div className="column">
                                                <div className="padding__bottom__minibase text-center">
                                                    <img className="amazonCash__tipsIcon" src={cash_icon_tips_phone_multi} alt="Smartphone" />
                                                </div>
                                                <p className="text color__dark text__size--medium">
                                                    <strong>Tip 1: </strong>
                                                    To use a phone number with Amazon Cash, you must add it to your Amazon account. If it’s already added, you must confirm and verify it. 
                                                    <Link to="/">
                                                        <strong>Get started.</strong>
                                                    </Link>
                                                </p>
                                            </div>
                                        </section>
                                        <section className="padding__left__xlarge padding__bottom__large padding__right__xlarge">
                                            <div className="column">
                                                <div className="padding__bottom__minibase text-center">
                                                    <img className="amazonCash__tipsIcon" src={cash_icon_tips_phone_multi} alt="Smartphone" />
                                                </div>
                                                <p className="text color__dark text__size--medium">
                                                    <strong>Tip 2: </strong>
                                                    Printing your barcode or saving it to your smartphone might make it easier to retrieve during store visits. 
                                                    <Link to="/">
                                                        <strong>Learn How.</strong>
                                                    </Link>
                                                </p>
                                            </div>
                                        </section>
                                        <section className="padding__left__xlarge padding__bottom__large padding__right__xlarge">
                                            <div className="column">
                                                <div className="padding__bottom__minibase text-center">
                                                    <img className="amazonCash__tipsIcon" src={cash_icon_tips_phone_multi} alt="Smartphone" />
                                                </div>
                                                <p className="text color__dark text__size--medium">
                                                    <strong>Tip 3: </strong>
                                                    Some stores support both barcodes and phone numbers, while some don’t. 
                                                    <Link to="/">
                                                        <strong>When you search for a store, </strong>
                                                    </Link>
                                                    you can filter whether the store supports barcodes, phone numbers, or both.
                                                </p>
                                            </div>
                                        </section>
                                        <section className="padding__left__xlarge padding__bottom__large padding__right__xlarge">
                                            <div className="column">
                                                <div className="padding__bottom__minibase text-center">
                                                    <img className="amazonCash__tipsIcon" src={cash_icon_tips_phone_multi} alt="Smartphone" />
                                                </div>
                                                <p className="text color__dark text__size--medium">
                                                    <strong>Tip 4: </strong>
                                                    Each Amazon Cash transaction adds an Amazon.ca Gift Card to your Amazon Account in seconds. 
                                                    <Link to="/">
                                                        <strong>View Terms and Conditions</strong>
                                                    </Link>
                                                </p>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </section>
                            <section className="columns__container columns__container--single columns__container--full-width">
                                <div className="column">
                                    <h2 className="heading__size--small color__normal text-center">
                                        <strong>Featured retailers</strong>
                                    </h2>
                                </div>
                            </section>
                            <section className="amazonCash__retailers has__max__width__ii">
                                <div className="columns__wrapper">
                                    <div className="columns__container columns__container--fourth columns__container--full-width text-center">
                                        <section className="column">
                                            <div className="padding__top__base">
                                                <img src={canada_post_logo_en} alt="Canada Post logo" />
                                            </div>
                                        </section>
                                        <section className="column">
                                            <div className="padding__top__base">
                                                <img src={seven_eleven_logo} alt="7-11 logo" title="7-11 logo" style={{height : "50px"}} />
                                            </div>
                                        </section>
                                        <section className="column">
                                            <div className="padding__top__base">
                                                <img src={circle_k_logo} alt="Circle K logo" title="Circle K logo" style={{height : "50px"}} />
                                            </div>
                                        </section>
                                        <section className="column">
                                            <div className="padding__top__base">
                                                <img src={hasty_market_logo} alt="Hasty Market logo" title="Hasty Market logo" style={{height : "50px"}} />
                                            </div>
                                        </section>
                                        <section className="column">
                                            <div className="padding__top__base">
                                                <img src={mobile_logo} alt="Mobil logo" title="Mobil logo" style={{height : "50px"}} />
                                            </div>
                                        </section>
                                        <section className="column">
                                            <div className="padding__top__base">
                                                <img src={red_apple_logo} alt="redapple logo" title="redapple logo" style={{height : "50px"}} />
                                            </div>
                                        </section>
                                        <section className="column">
                                            <div className="padding__top__base">
                                                <img src={the_bargain_shop_logo} alt="The Bargain! Shop logo" title="The Bargain! Shop logo" style={{height : "50px"}} />
                                            </div>
                                        </section>
                                        <section className="column">
                                            <div className="padding__top__base">
                                                <img src={super_sagamie_logo_two} alt="Super Sagamie logo" title="Super Sagamie logo" style={{height : "50px"}} />
                                            </div>
                                        </section>
                                        <section className="column">
                                            <div className="padding__top__base">
                                                <img src={macewen_logo} alt="MacEwen logo" title="MacEwen logo" style={{height : "50px"}} />
                                            </div>
                                        </section>
                                        <section className="column">
                                            <div className="padding__top__base">
                                                <img src={new_prepay_logo} alt="Now Prepay logo" title="Now Prepay logo" style={{height : "50px"}} />
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </section>
                            <section className="has__max__width__ii">
                                <div className="column">
                                    <p className="text-center text__size--medium color__normal">
                                        <strong>Ready to get started?</strong>
                                    </p>
                                    <div className="text-center">
                                        <Link to="/" className="link__type__button">
                                            Find a store
                                        </Link>
                                    </div>
                                </div>
                            </section>
                            <section className="background__color__gray">
                                <div className="columns__wrapper">
                                    <div className="columns__container columns__container--single columns__container--full-width">
                                        <div className="column">
                                            <div className="padding__bottom__base">
                                                <h2 className="text-center color__normal heading__size--small">
                                                    <strong>Helpful Pages</strong>
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="amazonCash__helpful background__color__gray padding__bottom__small">
                                <div className="columns__wrapper">
                                    <div className="columns__container columns__container--fourth columns__container--full-width columns__container--collapsed">
                                        <Helpful
                                            href={"/"}
                                            img={cash_icon}
                                            alt={"Legal document icon representing Terms and Conditions"}
                                            heading={"Terms and Conditions"}
                                            body={"Read all the terms and conditions for using Amazon Cash."}
                                        />
                                        <Helpful
                                            href={"/"}
                                            img={cash_icon}
                                            alt={"Legal document icon representing Terms and Conditions"}
                                            heading={"FAQs"}
                                            body={"Find answers to common questions"}
                                        />
                                        <Helpful
                                            href={"/"}
                                            img={cash_icon}
                                            alt={"Legal document icon representing Terms and Conditions"}
                                            heading={"Barcode"}
                                            body={"Download or print your Amazon Cash barcode."}
                                        />
                                        <Helpful
                                            href={"/"}
                                            img={cash_icon}
                                            alt={"Legal document icon representing Terms and Conditions"}
                                            heading={"Amazon Balance"}
                                            body={"Review how much is in your balance."}
                                        />
                                    </div>
                                </div>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )

    return (
        <Layout>
            <AmazonCashPage />
        </Layout>
    )
}

export default AmazonCash
