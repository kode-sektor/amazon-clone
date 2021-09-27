import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../components/Layout'
import Popover from '../../components/UI/Popover'
import Rating from '../../components/UI/Rating'
import LightBox from '../../components/UI/LightBox'
import {Line, LineTwo, LineThree } from '../../components/UI/Line'
import { BtnPill, CartBtn, ReportAbuse } from '../../components/UI/Button'
import { DropdownMenuMini } from '../../components/UI/DropdownMenu'

import Benefit from './Benefit'

import dp_desktop_headerhand_prime from '../../images/dp-desktop-headerhand-prime.png'
import marketingpage_prime1_cb from '../../images/marketing-page-prime1-cb.png'
import marketing_page_primefx from '../../images/marketing-page-primefx-cb.png'
import marketing_page_prime_3_cb from '../../images/marketing-page-prime-3-cb.png'
import marketing_page_extra_1_cb from '../../images/marketing-page-extra-1-cb.png'
import marketing_page_gc_cb from '../../images/marketing-page-gc-cb.png'
import marketing_page_instant_use from '../../images/marketing-page-instant-use.png'
import dp_footer_comp_all from '../../images/dp-footer-comp-all.png'

import './index.css'

const MastercardReward = () => {

    return (
        <Layout>
            <div className="a__container">
                <main className="mastercard--page">
                    <section className="mastercard__marketing">
                        <section className="mastercard__ad d-flex">
                            <section className="mastercard__adCreditCard">
                                <img src={dp_desktop_headerhand_prime} alt="dp desktop headerhand prime" />
                            </section>
                            <section className="mastercard__features">
                                <span className="a__size__large font-weight-bold">
                                    Amazon.ca Rewards Mastercard<sup>®</sup>
                                </span>
                                <header className="a__spacing__large">
                                    <span className="d-inline-block">
                                        <Popover
                                            trigger={
                                                <span style={{cursor: "pointer"}}>
                                                    <i className="a__icon a__icon__star a__star__4__5">
                                                        <span className="a__icon__alt">4 Stars </span>
                                                    </i>
                                                    <i className="a__icon a__icon__popover"></i>
                                                </span>
                                            }
                                            dropdown={
                                               <Rating
                                                    dropdown={true}     // dropdown===true shows the footer
                                                    avgRating={4.3}
                                                    totalRating={5}
                                                    globalRatings={"4,089"}
                                                    starFive={72}
                                                    starFour={10}
                                                    starThree={4}
                                                    starTwo={2}
                                                    starOne={12}
                                               />
                                            }
                                        />
                                    </span>&nbsp;
                                    <Link to="/" className="mastercard__ratingsCount">
                                        4,085  customer ratings
                                    </Link>
                                </header>
                                <span className="a__size__large font-weight-bold">
                                    Limited-time offer: $35 Gift Card, plus up to 5% back
                                </span>
                                <div className="a__spacing__mini"></div>
                                <span className="a__size__base">
                                    Get a $35 Gift Card<sup>◊</sup> instantly, plus up to 5% back at Amazon.ca, grocery stores, and restaurants for 6 months after approval, on first $3,000 in eligible purchases<sup>††</sup>
                                </span>
                            </section>
                            <section className="mastercard__offerDetails">
                                <section className="mastercard__offerConditions">
                                    <Link to="/" className="a__size__base a__link__normal" target="_blank" rel="noopener noreferrer">
                                        <sup>††</sup><sup>‡</sup>Offer Details
                                    </Link> |
                                    <Link to="/" className="a__size__base a__link__normal" target="_blank" rel="noopener noreferrer">
                                        <sup>††</sup><sup>‡</sup>Pricing & Terms
                                    </Link>
                                    <br/>
                                    <span className="a__size__base">
                                        Before applying, make sure you can say yes to the following:
                                        <br/>
                                        1. You are a Canadian Resident
                                        <br/>
                                        2. You are the age of majority in the province or territory where you live
                                    </span>
                                </section>
                                <div className="a__spacing__base text-center">
                                    <CartBtn
                                        text={"Apply now"}
                                    />
                                </div>
                                <section className="mastercard__offerLegal">
                                    <p className="a__size__mini mb-">
                                        By clicking ‘Apply Now’, you authorize and direct Amazon to share information with MBNA about you and your Amazon.ca account, including purchase and account history, Prime status and account identifiers, to assist MBNA in its evaluation of your application and, if you are approved, the maintenance, servicing and administration of your credit card account, as well as certain internal reporting and analytics. You also authorize and direct Amazon to share information about you and your device with MBNA’s service provider, TransUnion, for purposes of detecting and preventing fraud.
                                    </p>
                                </section>
                            </section>
                        </section>
                        <section className="mastercard__noFee text-center">
                            <span className="a__size__extra__large__ii font-weight-bold">
                                No annual fee
                            </span>
                        </section>
                        <section className="mastercard__benefits d-flex flex-wrap">
                            <Benefit
                                img={marketingpage_prime1_cb}
                                alt={"Amazon.ca and whole foods market stores"}
                                txt1={"2.5% back"}
                                txt2={"at Amazon.ca and Whole Foods Market stores"}
                                body={  
                                        <>
                                            After the welcome offer ends, eligible Prime members get 2.5% back on eligible purchases at Amazon.ca and Whole Foods Market stores. <sup>‡</sup>
                                        </>
                                    }
                            />
                            <Benefit
                                img={marketing_page_primefx}
                                alt={"On eligible foreign currency transactions"}
                                txt1={"2.5% back"}
                                txt2={"on eligible foreign currency transactions"}
                                body={  
                                        <>
                                            Always get 2.5% back on eligible foreign currency transactions to help cover foreign currency conversion fees. <sup>‡</sup>
                                        </>
                                    }
                            />
                            <Benefit
                                img={marketing_page_prime_3_cb}
                                alt={"Amazon.ca and whole foods market stores"}
                                txt1={"1% back"}
                                txt2={"everywhere else Mastercard is accepted"}
                                body={  
                                        <>
                                           After the welcome offer ends, get 1% back at grocery stores and restaurants. Always get 1% back on other eligible purchases. <sup>‡</sup>
                                        </>
                                    }
                            />
                            <Benefit
                                img={marketing_page_extra_1_cb}
                                alt={"Shop confidently with purchase benefits"}
                                txt2={"Shop confidently with purchase benefits"}
                                body={  
                                        <>
                                           Get Purchase Assurance, Extended Warranty Benefits**, $0 Fraud Liability, and more.
                                        </>
                                    }
                            />
                            <Benefit
                                img={marketing_page_gc_cb}
                                alt={"Savings with automatic $20 Amazon.ca Gift Cards"}
                                txt2={"Savings with automatic $20 Amazon.ca Gift Cards"}
                                body={  
                                        <>
                                           For every 2,000 points earned, we will apply a $20 Amazon.ca gift card to your linked Amazon.ca account for savings on millions of items at Amazon.ca.
                                        </>
                                    }
                            />
                            <Benefit
                                img={marketing_page_instant_use}
                                alt={"Start using your card instantly upon approval"}
                                txt2={"eStart using your card instantly upon approval"}
                                body={  
                                        <>
                                           Apply today and start using your credit card for up to 5% back on Amazon.ca instantly, for 6 months after approval††.
                                        </>
                                    }
                            />
                        </section>
                        <section className="mastercard__marketingBox">
                            <header className="a__spacing__large">
                                <span class="a__size__extra__large font-weight-bold">
                                    More to love
                                </span>
                            </header>
                            <ul>
                                <li className="a__spacing__small">
                                    <span className="a__size__base__plus">
                                        Available in all provinces, including Quebec
                                    </span>
                                </li>
                                <li className="a__spacing__small">
                                    <span className="a__size__base__plus">
                                        Redeem for millions of items at Amazon.ca
                                    </span>
                                </li>
                                <li className="a__spacing__small">
                                    <span className="a__size__base__plus">
                                        Manage your account anytime online or on your phone
                                    </span>
                                </li>
                                <li className="a__spacing__small">
                                    <span className="a__size__base__plus">
                                        Easy paperless billing available
                                    </span>
                                </li>
                            </ul>
                        </section>
                        <section className="mastercard__faq">
                            <header className="a__spacing__large">
                                <span class="a__size__extra__large font-weight-bold">
                                    Help
                                </span>
                            </header>
                            <ul className="ml-0">
                                <li className="a__spacing__small">
                                    <Link to="/">
                                        About Amazon.ca Rewards Mastercard Points
                                    </Link>
                                </li>
                                <li className="a__spacing__small">
                                    <Link to="/">
                                        Apply for an Amazon.ca Rewards Mastercard
                                    </Link>
                                </li>
                                <li className="a__spacing__small">
                                    <Link to="/">
                                        Foreign Currency Transactions when Using Amazon.ca Rewards Mastercard
                                    </Link>
                                </li>
                                <li className="a__spacing__small">
                                    <Link to="/">
                                        See all help
                                    </Link>
                                </li>
                            </ul>
                        </section>
                        <section className="mastercard__shopping d-flex justify-space-between">
                            <section className="mastercard__shoppingImg">
                                <img src={dp_footer_comp_all} alt="dp footer comp all" />
                            </section>
                            <section className="mastercard__shoppingApply">
                                <header className="a__size__large font-weight-bold">
                                    Apply now
                                </header><br/><br/>
                                <span className="a__size__base">
                                    Before applying, make sure you can say yes to the following:<br/>
                                </span>
                                <ol className="mb-0">
                                    <li>
                                       1. You are a Canadian Resident
                                    </li>
                                    <li>
                                       2. You are the age of majority in the province or territory where you live
                                    </li>
                                </ol>
                                <div className="mastercard__applyNow">
                                    <CartBtn
                                        text={"Apply Now"}
                                    />
                                </div>
                                <section className="mastercard__offerLegal">
                                    <p className="a__size__mini mb-">
                                        By clicking ‘Apply Now’, you authorize and direct Amazon to share information with MBNA about you and your Amazon.ca account, including purchase and account history, Prime status and account identifiers, to assist MBNA in its evaluation of your application and, if you are approved, the maintenance, servicing and administration of your credit card account, as well as certain internal reporting and analytics. You also authorize and direct Amazon to share information about you and your device with MBNA’s service provider, TransUnion, for purposes of detecting and preventing fraud.
                                    </p>
                                </section><br/><br/>
                                <span className="a__size__base__ii">
                                    Already a cardholder? <Link to="/" className="mastercard__offerLink">Manage your account online</Link>
                                </span>
                            </section>
                        </section>
                    </section>
                    <LineTwo/>
                    <section className="d-flex a__spacing__extra__large__ii">
                        <section className="mastercard__reviews">
                            <h2>Customer reviews</h2>
                            <Rating
                                avgRating={4.3}
                                totalRating={5}
                                globalRatings={"4,089"}
                                starFive={72}
                                starFour={10}
                                starThree={4}
                                starTwo={2}
                                starOne={12}
                            />
                            <Line/>
                            <h3 className="a__spacing__micro">Review this product</h3>
                            <p className="a__spacing__medium">
                                Share your thoughts with other customers
                            </p>
                            <BtnPill
                                text={"Write a customer review"}
                                stretch={true}
                            />
                            <LineThree/>
                        </section>
                        <section className="mastercard__comments flex-grow-1">
                            <section className="master__commentsMain a__spacing__medium">
                                <header className="master__commentsGallery a__spacing__medium">
                                    <h3>Reviews with images</h3>
                                </header>
                                <LightBox/>
                                <Link to="/">
                                    See all customer images
                                </Link>
                                <section className="mastercard__tags">
                                    <div className="a__spacing__extra__large__ii">
                                        <h3 className="a__spacing__base">Read reviews that mention</h3>
                                        <section className="mastercard__tagPanel">
                                            <Link to="/" className="mastercard__tagItem a__text__normal">
                                                <span>cash back</span>
                                                <span>gift cards</span>
                                                <span>easy to use</span>
                                                <span>foreign exchange</span>
                                                <span>mastercard</span>
                                                <span>rewards mastercard</span>
                                                <span>use the card</span>
                                                <span>credit cards</span>
                                                <span>great rewards</span>
                                                <span>right away</span>
                                                <span>much better</span>
                                                <span>credit score</span>
                                            </Link>
                                        </section>
                                    </div>
                                </section>
                                <section className="a__spacing__medium">
                                    <section className="a__spacing__small">
                                        <DropdownMenuMini
                                            optionList={ 
                                                <>
                                                    <option value="top-reviews">Top reviews</option>
                                                    <option value="most-recent">Most Recent</option>
                                                </>
                                            }
                                        />
                                    </section>
                                    <header className="a__section">
                                        <h3 className="a__spacing__medium a__spacing__top__large">
                                            Top reviews from Canada
                                        </h3>
                                    </header>
                                    <section className="mastercard__userComments a__spacing__large">
                                        <article className="mastercard__userComment a__section">
                                            <header className="d-flex align-content-center">
                                                <Link to="/" className="a__spacing__mini">
                                                    <span className="mastercard__avatar">
                                                        <img src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" className=""/>
                                                    </span>
                                                    <span className="mastercard__profileName d-inline-block">
                                                        Rusty
                                                    </span>
                                                </Link>
                                                <div className="mastercard__topFigure a__spacing__mini">
                                                    <span className="a__size__mini font-weight-bold a__color__link">
                                                        TOP 100 REVIEWS
                                                    </span>
                                                </div>
                                            </header>
                                            <section className="mastercard__title">
                                                <Link to="/" title="1.0 out of 5 stars" className="mastercard__titleStars">
                                                    <i className="a__icon a__icon__star__medium a__star__medium__1">
                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                    </i>
                                                </Link>
                                                <Link to="/" className="mastercard__titleText a__size__base a__color__base font-weight-bold">
                                                    Let me sum up everything here.... It's a 1% Amazon rewards card.
                                                </Link>
                                                <span className="d-block a__size__base a__color__secondary a__color__tertiary">
                                                    Reviewed in Canada on October 28, 2019
                                                </span>
                                            </section>
                                            <p className="mastercard__body a__size__base__ii a__spacing__small">
                                                To save you time, understanding, and ultimately your credit. I took the time to get all the information.<br/><br/>
                                                Fees:<br/>
                                                You can transfer your balance from one credit card to this one at a fee of 7.50$ for balance transfers or 1%.<br/>
                                                HOWEVER if you let MBNA do it for you, there is no fee.<br/>
                                                (No Annual Fee)<br/>
                                                (ATM Fees are 1% of your total withdrawl uncapped ($7.50 min.)<br/><br/>
                                                Warranty:<br/>
                                                This card has no extended warranty / insurance perks whatsoever.<br/><br/>
                                                Interest Rate:<br/>
                                                Purchases: 19.99%<br/>
                                                Balance transfers and access cheques: 22.99%<br/>
                                                Cash advances: 22.99%<br/><br/>
                                                Rewards:<br/>
                                                5% back for the first 6 months capped at $3,000 ( Spend 3K, get $150 ). After that its 1% rewards which can only be used on Amazon. Prime members get 2.5% cash back. (So you need to spend $3,280 just to get that $79 you spent on prime back as Amazon credits.)<br/><br/>
                                                Foreign Exchange Rates:<br/>
                                                2.5% (one way). If you buy something from abroad or even from amazon.com. You will pay an extra 2.5%. Now if you return said item, you don't get that 2.5% back.<br/><br/>
                                                All in all it's an OK credit card if you are a big Amazon shopper, but as far as rewards and Perks. Amazon could do better. I hope you found this review helpful. Thanks!
                                                <div className="a__expander__header a__expander__partial__collapse__header">
                                                    <div class="a__expander__content__fade"></div>
                                                    <Link to="javascript:void(0)" className="a__declarative">
                                                        <i className="a__icon a__icon__extender__expand"></i>
                                                        <span className="a__expander__prompt">Read more</span>
                                                    </Link>
                                                </div>
                                            </p>
                                            <p className="a__spacing__small">
                                                <span className="a__size__base__ii a__color__tertiary">
                                                    17,123 people found this helpful
                                                </span>
                                            </p>
                                            <span className="masterCard__helpful">
                                                <BtnPill
                                                    text={"Helpful"}
                                                />
                                            </span>
                                            <ReportAbuse/>
                                        </article>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                </main>
            </div>
        </Layout>
    )
}

export default MastercardReward
