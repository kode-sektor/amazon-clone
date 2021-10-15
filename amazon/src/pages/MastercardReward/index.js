import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import LightBoxModal from '../../components/UI/LightBox/LightBoxModal'

import Layout from '../../components/Layout'
import Popover from '../../components/UI/Popover'
import Rating from '../../components/UI/Rating'
import LightBox from '../../components/UI/LightBox'
import { LineTwo } from '../../components/UI/Line'
import { CartBtn } from '../../components/UI/Button'
import Reviews from '../../components/UI/Reviews'

import Benefit from './Benefit'

import dp_desktop_headerhand_prime from '../../images/dp-desktop-headerhand-prime.png'
import marketingpage_prime1_cb from '../../images/marketing-page-prime1-cb.png'
import marketing_page_primefx from '../../images/marketing-page-primefx-cb.png'
import marketing_page_prime_3_cb from '../../images/marketing-page-prime-3-cb.png'
import marketing_page_extra_1_cb from '../../images/marketing-page-extra-1-cb.png'
import marketing_page_gc_cb from '../../images/marketing-page-gc-cb.png'
import marketing_page_instant_use from '../../images/marketing-page-instant-use.png'
import dp_footer_comp_all from '../../images/dp-footer-comp-all.png'

import L61DDN5WdKQ from '../../images/L61DDN5WdKQ.jpg'
import L71RCZ2H6p from '../../images/L71RCZ2H6p.jpg'
import L61Dc5ySuuW from '../../images/L61Dc5ySuuW.jpg'
import L1WBw61t2Q from '../../images/L1WBw61t2Q.jpg'
import L81QYTeqjBLS from '../../images/L81QYTeqjBLS.jpg'
import L61P3LnSDBJLS from '../../images/L61P3LnSDBJLS.jpg'
import L814ze8S1DLS from '../../images/L814ze8S1DLS.jpg'
import L511COXBQmSL from '../../images/L511COXBQmSL.jpg'
import L71cYVGoNhvLS from '../../images/L71cYVGoNhvLS.jpg'
import L41t0t3d1YNLS from '../../images/L41t0t3d1YNLS.jpg'
import L61E3oEgHvdLS from '../../images/L61E3oEgHvdLS.jpg'
import LC1FENb8OOtSS from '../../images/LC1FENb8OOtSS.jpg'
import L71iT22dbyILS from '../../images/L71iT22dbyILS.jpg'
import L81Rr6WLY7PLpS from '../../images/L81Rr6WLY7PLpS.jpg'
import L41GsiEOPk5LS from '../../images/L41GsiEOPk5LS.jpg'
import LB1WOO0G7UTSS from '../../images/LB1WOO0G7UTSS.jpg'
import L21LlksaHxoLS from '../../images/L21LlksaHxoLS.jpg'
import L61wMhuIgUMLS from '../../images/L61wMhuIgUMLS.jpg'
import L81X648FretLS from '../../images/L81X648FretLS.jpg'
import L41J6VSYJRWLS from '../../images/L41J6VSYJRWLS.jpg'
import L31XeEI2l3mLSL from '../../images/L31XeEI2l3mLSL.jpg'
import L61snqzZr6iLS from '../../images/L61snqzZr6iLS.jpg'
import L81iiNzTmsCLS from '../../images/L81iiNzTmsCLS.jpg'
import L61AG8heN61LS from '../../images/L61AG8heN61LS.jpg'
import L91Mhs7vymDLS from '../../images/L91Mhs7vymDLS.jpg'
import L31YQ20rRh from '../../images/L31YQ20rRh.jpg'
import C1ooPYCncSSS from '../../images/C1ooPYCncSSS.jpg'
import L91l65qN2PeLS from '../../images/L91l65qN2PeLS.jpg'
import L31fplJqEgoLS from '../../images/L31fplJqEgoLS.jpg'
import L81zob2dN8LSL from '../../images/L81zob2dN8LSL.jpg' 
import LC1RsG3OIQSS from '../../images/LC1RsG3OIQSS.jpg' 
import L7181BvRP6YLS from '../../images/L7181BvRP6YLS.jpg' 
import L613FQhDRGLLSL from '../../images/L613FQhDRGLLSL.jpg'

import './index.css'

const MastercardReward = () => {

    const MastercardPage = ({childProps}) => {

        const { toggleModal, lightBoxPanel } = childProps

        const image1 = L61DDN5WdKQ
        const image2 = L71RCZ2H6p
        const image3 = L61Dc5ySuuW
        const image4 = L1WBw61t2Q
        const image5 = L81QYTeqjBLS
        const image6 = L61P3LnSDBJLS
        const image7 = L814ze8S1DLS
        const image8 = L511COXBQmSL
        const image9 = L71cYVGoNhvLS
        const image10 = L41t0t3d1YNLS
        const image11 = L61E3oEgHvdLS
        const image12 = LC1FENb8OOtSS
        const image13 = L71iT22dbyILS
        const image14 = L81Rr6WLY7PLpS
        const image15 = L41GsiEOPk5LS
        const image16 = LB1WOO0G7UTSS
        const image17 = L21LlksaHxoLS
        const image18 = L31XeEI2l3mLSL
        const image19 = L81iiNzTmsCLS
        const image20 = L61wMhuIgUMLS
        const image21 = L81X648FretLS
        const image22 = L41J6VSYJRWLS
        const image23 = L61snqzZr6iLS
        const image24 = L61AG8heN61LS
        const image25 = L91Mhs7vymDLS
        const image26 = L31YQ20rRh
        const image27 = C1ooPYCncSSS
        const image28 = L91l65qN2PeLS
        const image29 = L31fplJqEgoLS
        const image30 = LC1RsG3OIQSS
        const image31 = L81zob2dN8LSL
        const image32 = L7181BvRP6YLS
        const image33 = L613FQhDRGLLSL

        const images = [
            { 
                img : image1,
                rating : "1",
                heading : "terrible, horrible and zero star",
                customer : "Crazy Superman",
                date : "Dec 27, 2019",
                article : 
                        <>
                            My original credit card company was changing my card with new terms and condition. So I thought maybe this Amazon reward master card would be a good replacement. It turned out to be a huge and massive disaster. First of all, it took a long time to arrive after the approval. 2nd, after it arrive it was very difficult to activate. When I finally activated, it's not usable in any store except on Amazon.ca; so it is not a master card but more like a membership card for Amazon only. I thought OK, maybe it's their new product, so they need some time to set up. My nightmare hasn't fully mature until the payment date. I wasn't able to make payment to my account despite many attempts in their website, at my bank, with my iPhone bank app. On their statement, the account number are blocked. Even my bank can't figure out how to pay. My calls got into some kind of loop. I can't talk to human.  This credit card is just frustration times 1000!!!!! I wasted so much of my time dealing with this crab. Now, I am not able to make payment into my account. Instead of rewards, I'm going to get charge. If you are a support from MBNA, please contact me and help me. I need to make payment today!! PLEASE!!!!!
                        </>
            }, 
            {
                img : image2, 
                rating : "5",
                heading : "Good card for Prime Members",
                customer : "Pommetta",
                date : "Feb 01, 2020",
                article : 
                        <>
                            Good card for Prime members. Pair it with Rakuten and you can get some pretty good deals.<br/><br/>
                            Lots of commentary on FX but people are failing to mention that you get 2.5% back on all FX which neutralizes any fees. Not perfect but better than  most cards in Canada.
                        </>
            },
            {
                img : image3,
                rating : "1",
                heading : "Cannot register the card for the online service FOR ALMOST A MONTH!!!!",
                customer : "Michael S",
                date : "Apr 29, 2020",
                article : 
                        <>
                            It's a shame - during the COVID-19, when you need the online access the most, you cannot register your card because of the CONSTANT "The System Is Currently Unavailable" situation.<br/>
                            And that is for MORE THAN 3 WEEKS IN A ROW!!!!<br/><br/>
                            It's a shame!
                        </> 
            },
            {
                img : image4,
                rating : "5",
                heading : "Easy to use!",
                customer : "Kalman",
                date : "Jun 25, 2020",
                article : 
                        <>
                            Advantidge from the card!
                        </>
            },
            {
                img : image5,
                rating : "5",
                heading : "J ai 90",
                customer : "Marc lalande",
                date : "Jan 25, 2021",
                article : 
                        <>
                            Pour faire des cadeaux-
                        </>
            },
            {
                img : image6,
                rating : "5",
                heading : "Easy to use, a lot of perks for member",
                customer : "NikkiG",
                date : "Oct 22, 2020",
                article : 
                        <>
                            More discount using this card
                        </>
            },
            {
                img : image7,
                rating : "1",
                heading : "Horrible app ruins the experience!",
                customer : "Customer",
                date : "Nov 25, 2020",
                article : 
                        <>
                            The MBNA app is a total disgrace!<br/>
                            I can not believe that Amazon partner up with something like that!<br/>
                            Whoever developed this app should hang themselves.<br/>
                            This is late 2020 and their app is definitely not from this decade!<br/>
                            I have stopped using the card altogether and would suggest you steer away as well!
                        </>
            },
            {
                img : image8,
                rating : "3",
                heading : "Can't redeem the points",
                customer : "Nasr F.",
                date : "Jan 08, 2021",
                article : 
                        <>
                            After calling MBNA and stay waiting then transfer for more than one hour - all what I got is there is a button to redeem - my answer was there is no button to redeem - their answer that's strange - call Amazon. I did called Amazon waiting about 30 min., no answer. I hang-up <br/>
                            Reddition will go to the account when the system decide to do so !!!
                        </>
            },
            {
                img : image9,
                rating : "5",
                heading : "Gift",
                customer : "Manco",
                date : "Aug 22, 2020",
                article : 
                        <>
                        </>
            },
            {
                img : image10,
                rating : "1",
                heading : "DO NOT GET THIS CARD",
                customer : "Bobby K",
                date : "Nov 05, 2020",
                article : 
                        <>
                            I have yet to get through to their customer service department even after being on hold for an hour (twice)<br/>
                            Their website is always down as well. WIll I get a bill in the mail? Who knows? MBNA(TD bank) is terrible. I miss the old chase card.
                        </>
            },
            {
                img : image11,
                rating : "5",
                heading : "Easy Set up! Happy to be Collecting my rewards now!",
                customer : "Ruth",
                date : "May 29, 2021",
                article : 
                        <>
                            I should have applied for the Amazon Rewards MasterCard years ago. It just makes perfect sense. I’ve been shopping at Amazon for so many years and I would say it’s where I shop more then any other store.  Now I can collect points and get rewards where I’ll be able to use them. It was super easy to apply and super quick approval. It took about a week to get my card.
                        </>
            },
            {
                img : image12,
                rating : "3",
                heading : "Physical payment",
                customer : "Percival Pu",
                date : "Feb 13, 2021",
                article : 
                        <>
                            Can anybody tell me why there is a signal sign on the card which means I can tap to pay, but I cannot. POS terminal let me insert and pay, then it let me sign.  Is something wrong with my card or everyone got the same thing?
                        </>
            },
            {
                img : image13,
                rating : "5",
                heading : "Bluetooth works great, charges great amd plays your music",
                customer : "Chantal Abbors",
                date : "Apr 17, 2021",
                article : 
                        <>
                            I love this product it makes it so easy to use charge and Bluetooth works fanatic in my car. My Friemd likes it so much he bought one too.
                        </>
            },
            {
                img : image14,
                rating : "5",
                heading : "Best ever",
                customer : "Amazon Customer",
                date : "Jun 10, 2021",
                article : 
                        <>
                            The gun stand I purchased was the best ever performs exactly as advertised and for a reasonable price
                        </>
            },
            {
                img : image15,
                rating : "4",
                heading : "It pays to shop with Amazon MC",
                customer : "Megan Porter",
                date : "Apr 06, 2021",
                article : 
                        <>
                            Nice surprise when your credit card company lets you know you have a reward from using their credit card.
                        </>
            },
            {
                img : image16,
                rating : "5",
                heading : "A good Credit Card to keep in the wallet",
                customer : "RM",
                date : "Mar 03, 2021",
                article : 
                        <>
                            A good looking Master Card that can collect points to spend on Amazon shopping. I like it!
                        </>
            },
            {
                img : image17,
                rating : "5",
                heading : "very useful",
                customer : "Helen",
                date : "Jul 23, 2021",
                article : 
                        <>
                            I do not only use it for Amazon purchases, it does excellent work when I do shopping in Costco too. Like it.
                        </>
            },
            {
                img : image18,
                rating : "5",
                heading : "Yes....",
                customer : "Richard Boutin",
                date : "Feb 25, 2021",
                article : 
                        <>
                            ben sûr
                        </>
            },
            {
                img : image19,
                rating : "5",
                heading : "Alexa",
                customer : "Haymanot",
                date : "Sep 23, 2021",
                article : 
                        <>
                            Great device, sounds fantastic. Some have complained that it has trouble hearing you, I don't find this at all, it is very responsive.
                        </>
            },
            {
                img : image20,
                rating : "5",
                heading : "Amazon is amazing and served me well for many years!",
                customer : "Theresa",
                date : "Aug 14, 2021",
                article : 
                        <>
                            These products were priced well and add glam to my home and everyone that comes in knows I only shop Amazon!
                        </>
            },
            {
                img : image21,
                rating : "5",
                heading : "Amazon is amazing and served me well for many years!",
                customer : "Theresa",
                date : "Aug 14, 2021",
                article : 
                        <>
                            These products were priced well and add glam to my home and everyone that comes in knows I only shop Amazon!
                        </>
            },
            {
                img : image22,
                rating : "5",
                heading : "Great Card! Great Rewards!",
                customer : "Mr Z4",
                date : "Aug 12, 2021",
                article : 
                        <>
                            No Issues with the Card.
                        </>
            },
            {
                img : image23,
                rating : "5",
                heading : "Best card I’ve ever got",
                customer : "Maxime",
                date : "Feb 07, 2021",
                article : 
                        <>
                            Easy to used and safer than any cared !!
                        </>
            },
            {
                img : image24,
                rating : "5",
                heading : "great stuff",
                customer : "Ray Sotto",
                date : "Sep 08, 2021",
                article : 
                        <>
                            Best place tp buy dog food, way cheaper than Petsmart.
                        </>
            },
            {
                img : image25,
                rating : "5",
                heading : "Really a good product!",
                customer : "Hong",
                date : "May 19, 2021",
                article : 
                        <>
                            This is a wonderful product! It works just like what we want! Love it!
                        </>
            },
            {
                img : image26,
                rating : "5",
                heading : "Great rewards",
                customer : "Tony C",
                date : "Sep 19, 2021",
                article : 
                        <>
                        </>
            },
            {
                img : image27,
                rating : "5",
                heading : "Facile à utiliser",
                customer : "Chi Vinh Tran",
                date : "Sep 04, 2021",
                article : 
                        <>
                            5 étoiles pour utiliser achats dans Amazon avec bonne remise
                        </>
            },
            {
                img : image28,
                rating : "5",
                heading : "Great service",
                customer : "Umur Olcay",
                date : "Sep 22, 2021",
                article : 
                        <>
                            This is the child play space where I will place the sandbox
                        </>
            },
            {
                img : image29,
                rating : "5",
                heading : "merci",
                customer : "Bella",
                date : "Jul 20, 2021",
                article : 
                        <>
                            This is the child play space where I will place the sandbox
                        </>
            },
            {
                img : image30,
                rating : "5",
                heading : "It’s a one stop shop!",
                customer : "Catherine Ferrer",
                date : "Jun 22, 2021",
                article : 
                        <>
                            [[VIDEOID:10cb02d348563d37cefea4d25a5a252c]] I love to shop at Amazon. Very convenient.
                        </>
            },
            {
                img : image31,
                rating : "5",
                heading : "prompt service",
                customer : "Virginia Differenz",
                date : "May 25, 2021",
                article : 
                        <>
                            I completed a rug hooking to use on my cabin floor. There was plenty of yarn in every color required. The kit arrived very quickly to my post office.
                        </>
            },
            {
                img : image32,
                rating : "5",
                heading : "Nothing",
                customer : "James McDermott",
                date : "Apr 07, 2021",
                article : 
                        <>
                            Liked
                        </>
            },
            {
                img : image33,
                rating : "5",
                heading : "Computers",
                customer : "Alsaideeq Alsarwi ",
                date : "Sep 16, 2021",
                article : 
                        <>
                        </>
            }
        ]

        const [gallery, setGallery] = useState(images)
        const [galleryAll, setGalleryAll] = useState("")

        const showLightBoxGallery = (e, mode) => {
            e.preventDefault()
            // Click coming from the image tiles should prevent clash with gallery
            toggleModal("show stretched", "lightBoxReview") // show modal

            if (mode === "carousel") {  // mode is necessary to reset lightbox panel because it handles 
                                        // 2 content : the carousel and the gallery.
                setGalleryAll("")
            } else {
                setGalleryAll(images)   // different state to handle different content inside lightbox
            }
        }            

        return (
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
                                            style={"rating"}
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
                    {/* <section className="d-flex a__spacing__extra__large__ii">
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
                                <LightBox
                                    toggleModal={toggleModal}
                                    lightBoxPanel={lightBoxPanel}
                                    images={gallery}
                                    showLightBoxGallery={showLightBoxGallery}
                                />
                                <Link to="/" onClick={showLightBoxGallery}>
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
                    </section> */}
                    <Reviews
                        rating={
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
                        }
                        lightbox={
                            <LightBox
                                toggleModal={toggleModal}
                                lightBoxPanel={lightBoxPanel}
                                images={gallery}
                                showLightBoxGallery={showLightBoxGallery}
                            />
                        }
                        tags={
                                [
                                    {
                                        text : "cash back",
                                        href : "/"
                                    },
                                    {
                                        text : "gift cards",
                                        href : "/"
                                    },
                                    {
                                        text : "easy to use",
                                        href : "/"
                                    },
                                    {
                                        text : "foreign exchange",
                                        href : "/"
                                    },
                                    {
                                        text : "mastercard",
                                        href : "/"
                                    },
                                    {
                                        text : "rewards mastercard",
                                        href : "/"
                                    },
                                    {
                                        text : "use the card",
                                        href : "/"
                                    },
                                    {
                                        text : "credit cards",
                                        href : "/"
                                    },
                                    {
                                        text : "great rewards",
                                        href : "/"
                                    },
                                    {
                                        text : "right away",
                                        href : "/"
                                    },
                                    {
                                        text : "much better",
                                        href : "/"
                                    },
                                    {
                                        text : "credit score",
                                        href : "/"
                                    }
                                ]
                        }
                        country={"Canada"}
                        post={
                            [
                                {
                                    author : "Rusty",
                                    rating : "1",
                                    title : "Let me sum up everything here.... It's a 1% Amazon rewards card",
                                    date : "October 28, 2019",
                                    body : <>
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
                                            </>,
                                    helpful : "17,123"
                                }
                            ]
                        }
                    />
                </main>
                <LightBoxModal 
                    galleryList={galleryAll}
                    lightBoxPanel={lightBoxPanel}
                />
            </div>
        )
    }

    return (
        <Layout>
            <MastercardPage/>
        </Layout>
    )
}

export default MastercardReward
