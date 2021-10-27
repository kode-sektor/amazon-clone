import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../components/Layout'
import { PageNavBreadCrumb } from '../../components/UI/BreadCrumb'
import Popover from '../../components/UI/Popover'  
import Rating from '../../components/UI/Rating'  
import { LineTwo, LineFour } from '../../components/UI/Line'
import { BestSellerBadge } from '../../components/UI/Badge'
import { BtnPillRoundedSm } from '../../components/UI/Button'
import CarouselDetailed from '../../components/UI/Carousel/CarouselDetailed'
import Slider from '../../components/UI/Carousel/Carousel'
import ProductList from '../../components/UI/ProductList'
import { DropdownMenuCart } from '../../components/UI/DropdownMenu'
import Reviews from '../../components/UI/Reviews'
import LightBox from '../../components/UI/LightBox'

import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton,
    AccordionItemPanel
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

import { Dropdown } from 'reactstrap'

import amazon_reload_1 from '../../images/amazon-reload-1.jpg'
import amazon_reload_2 from '../../images/amazon-reload-2.jpg'
import amazon_reload_phone_card from '../../images/amazon-reload-phone-card.jpg'
import amazon_rewards_mastercard from '../../images/amazon-rewards-mastercard.jpg'
import mens__fenian__claddagh__ring__gold from '../../images/mens-fenian-claddagh-ring-gold.jpg'
import icecarats__designer__jewelry__claddagh__ring from '../../images/icecarats-designer-jewelry-claddagh-ring.jpg'
import tree__and__birds__in__breeze__wall__decal from '../../images/tree-and-birds-in-breeze-wall-decal.jpg'
import oreck__upholstery__tool__buster__b__white from '../../images/oreck-upholstery-tool-buster-b-white.jpg'
import rypet__cat__halloween__costume from '../../images/rypet-cat-halloween-costume.jpg'
import ten__yellow__gold__mens__claddagh__ring from '../../images/10k-yellow-gold-mens-claddagh-ring.jpg'
import add__funds__amazon__gift__card__amazon__reload from '../../images/add-funds-amazon-gift-card-amazon-reload.png'
import manage_consolidate_shopping from '../../images/manage-consolidate-shopping.png'
import reload_wallet from '../../images/reload-wallet.png'
import auto_reload_dollars from '../../images/auto-reload-dollars.png'

import avatar from '../../images/avatar.png'
import avatar_emily from '../../images/avatar-emily.jpg'
import avatar_liam from '../../images/avatar-liam.jpg'

import './index.css'

const BalanceReload = () => {

    const BalanceReloadPage = ({childProps}) => {

        const {toggleModal, lightBoxPanel} = childProps

        // console.log(childProps)

        const [managedropdownOpen, setManagedropdownOpen] = useState(false)
        const [consolidatedropdownOpen, setConsolidatedropdownOpen] = useState(false)
        const [shoppingdropdownOpen, setShoppingdropdownOpen] = useState(false)
    
        // ManageBudgetCircle dropdown
        const managedropdown = () => setManagedropdownOpen(managedropdownOpen => !managedropdownOpen)
        const managedropdownEnter = () => setManagedropdownOpen(true)
        const managedropdownLeave = () => setManagedropdownOpen(false)
    
        // ConsolidateBalancesCircle dropdown
        const consolidatedropdown = () => setConsolidatedropdownOpen(consolidatedropdownOpen => !consolidatedropdownOpen)
        const consolidatedropdownEnter = () => setConsolidatedropdownOpen(true)
        const consolidatedropdownLeave = () => setConsolidatedropdownOpen(false)
    
        // EasyShoppingCircle dropdown
        const shoppingdropdown = () => setShoppingdropdownOpen(shoppingdropdownOpen => !shoppingdropdownOpen)
        const shoppingdropdownEnter = () => setShoppingdropdownOpen(true)
        const shoppingdropdownLeave = () => setShoppingdropdownOpen(false)

        const image1 = amazon_reload_phone_card

        const images = [
            { 
                img : image1,
                rating : "5",
                heading : "terrible, horrible and zero star",
                customer : "benoit",
                date : "Feb 06, 2021",
                article : 
                        <>
                            tout tais ok
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

        return(
            <>
                <section className="balance__reload--page">
                    <PageNavBreadCrumb
                        items={
                            [
                                {
                                    text : "Credit cards",
                                    href : "/"
                                },
                                {
                                    text : "Shop with Points",
                                    href : "/"
                                }
                            ]
                        }
                    />
                    <main className="balance__reload">
                        <div className="row mx-0">
                            <section>
                                <div className="balance__reloadMainImg d-flex">
                                    <section className="balance__reloadAlt">
                                        <ul className="a__spacing__top__extra__large ml-0">
                                            <li className="a__spacing__small">
                                                <span className="a__list__item">
                                                    <span className="a__button a__button__toggle a__button__thumbnail">
                                                        <span className="a__button__inner">
                                                            <input type="text" className="a__button__input" />
                                                            <span className="a__button__text">
                                                                <img src={amazon_reload_1} />
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </li>
                                            <li className="a__spacing__small">
                                                <span className="a__list__item">
                                                    <span className="a__button a__button__toggle a__button__thumbnail">
                                                        <span className="a__button__inner">
                                                            <input type="text" className="a__button__input" />
                                                            <span className="a__button__text">
                                                                <img src={amazon_reload_2}/>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </li>
                                        </ul>
                                    </section>
                                    <section className="balance__reloadImg">
                                        <section className="balance__reloadTopImg a__spacing__base">
                                            <div className="balance__reloadTop d-flex align-items-center">
                                                <img src={amazon_reload_phone_card} alt="Amazon Reload" />
                                            </div>
                                        </section>
                                        <section className="text-center">
                                            <div className="balance__caption a__color__secondary">
                                                Click to open expanded view
                                            </div>
                                        </section>
                                    </section>
                                </div>
                            </section>
                            <section className="balance__amazonReload col">
                                <h1 className="a__size__large a__spacing__none">
                                    Amazon Reload
                                </h1>
                                <section>
                                    <Link to="/">Brand: Amazon.com.ca, Inc.</Link>
                                </section>
                                <section>
                                    <span className="d-inline-block">
                                        <Popover 
                                            trigger={
                                                <Link to="/">
                                                    <i className="a__icon a__icon__star a__star__4__5">
                                                        <span className="a__icon__alt">4.7 out of 5 stars</span>
                                                    </i>
                                                    <i className="a__icon a__icon__popover"></i>
                                                </Link>
                                            }
                                            dropdown={
                                                <Rating
                                                    dropdown={true}     // dropdown===true shows the footer
                                                    avgRating={4.3}
                                                    totalRating={5}
                                                    globalRatings={"3,670"}
                                                    starFive={85}
                                                    starFour={6}
                                                    starThree={3}
                                                    starTwo={1}
                                                    starOne={4}
                                                />
                                            }
                                            style={"rating"}
                                        />
                                    </span>
                                    &nbsp; &nbsp; &nbsp;
                                    <Link to="/" className="a__size__base">
                                        3,670 ratings
                                    </Link>
                                </section>
                                <section>
                                    <LineFour />
                                    <h2>
                                        Add funds directly to your Amazon Gift Card balance
                                    </h2>
                                </section>
                                <section className="balance__bestSeller">
                                    <BestSellerBadge/>
                                </section>
                                <section className="balance__twisterFeature">
                                    <section className="a__cardui p-0 m-0">
                                        <div className="a__cardui__body p-0">
                                            <hr className="a__spacing__none" />
                                            <section className="balance__twisterInline">
                                                <span className="a__size__base a__color__secondary">
                                                    Gift amount:
                                                </span>
                                                <span className="balance__twisterInlineDim a__size__base font-weight-bold">
                                                    1
                                                </span>
                                            </section>
                                            <hr className="a__spacing__none" />
                                            <section className="balance__twisterInline">
                                                <span className="a__size__base a__color__secondary">
                                                    Design name:
                                                </span>
                                                <span className="balance__twisterInlineDim a__size__base font-weight-bold">
                                                    Amazon One-Time Reload
                                                </span>
                                            </section>
                                            <hr className="a__spacing__none" />
                                        </div>
                                    </section>
                                    <section className="a__spacing__medium a__spacing__top__small">
                                        <ul className="a__unordered__list a__spacing__mini">
                                            <li>
                                                <span className="a__list__item">
                                                    Reload using your credit, debit or prepaid gift card and then use your balance to shop millions of items on Amazon.
                                                </span>
                                            </li>
                                            <li>
                                                <span className="a__list__item">
                                                    Add funds to your Amazon Gift Card balance, then use your balance to manage how much you spend while shopping.
                                                </span>
                                            </li>
                                            <li>
                                                <span className="a__list__item">
                                                    Save up for a purchase by adding funds to your Gift Card balance.
                                                </span>
                                            </li>
                                            <li>
                                                <span className="a__list__item">
                                                    Checkout faster when you reload to your Gift Card balance in advance.
                                                </span>
                                            </li>
                                            <li>
                                                <span className="a__list__item">
                                                    Set up Auto-Reload to automatically reload to your Gift Card Balance on a particular date, week, month or when your balance gets low.
                                                </span>
                                            </li>
                                            <li>
                                                <span className="a__list__item">
                                                    Reloaded funds never expire and have no fees.
                                                </span>
                                            </li>
                                            <li>
                                                <span className="a__list__item">
                                                    Amazon Reload purchases are not refundable or redeemable for cash, except as required by law.
                                                </span>
                                            </li>
                                        </ul>
                                    </section>
                                </section>
                            </section>
                            <section className="balance__calculator col">
                                <section className="a__box h-auto">
                                    <div className="a__box__inner a__padding__small">
                                        <form action="" className="a__spacing__small">
                                            <div>
                                                <label htmlFor="a__form__label">Amount</label>
                                                <ul className="a__unordered__list a__nostyle a__button__list a__horizontal">
                                                    <li>
                                                        <span className="a__list__item">
                                                            <span className="a__button a__button__toggle">
                                                                <span className="a__button__inner">
                                                                    <button className="a__button__text" type="button" value="25.0">
                                                                        $25
                                                                    </button>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="a__list__item">
                                                            <span className="a__button a__button__toggle">
                                                                <span className="a__button__inner">
                                                                    <button className="a__button__text" type="button" value="50.0">
                                                                        $50
                                                                    </button>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="a__list__item">
                                                            <span className="a__button a__button__toggle">
                                                                <span className="a__button__inner">
                                                                    <button className="a__button__text" type="button" value="100.0">
                                                                        $100
                                                                    </button>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li className="a__spacing__top__small">
                                                        <span className="a__list__item">
                                                            <div className="a__input__text__addon__group__wrapper">
                                                                <div className="a__input__text__addon__group a__width__base reload__custom__amount__addon__group">
                                                                    <span className="a__input__text__addon">
                                                                        $
                                                                    </span>
                                                                    <input type="text" className="a__input__text a__width__base" placeholder="Other" />
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </li>
                                                </ul>
                                                <div className="a__spacing__small"></div>
                                            </div>
                                            <BtnPillRoundedSm />
                                        </form>
                                    </div>
                                </section>
                                <section className="a__spacing__small a__spacing__top__base a__padding__small text-center">
                                    <Link to="/" className="a__spacing__base">
                                        Set up Auto-Reload
                                    </Link>
                                </section>
                            </section>
                            <section className="unified__widget__rcmBody a__spacing__top__medium">
                                <Link to="/" className="welcome__link">
                                    <b>Amazon Business Canada </b>
                                </Link>
                                : Business-only pricing, quantity discounts and free shipping across Canada.
                                <Link to="/" className="welcome__link">
                                    <b> Register for a free account today. </b>
                                </Link>
                            </section>
                        </div>
                        <hr className="bucket__divider" />
                        <section className="a__spacing__large">
                            <CarouselDetailed 
                                heading={"Customers who viewed this item also viewed"}
                                squished={true}
                                border={false}
                                slider={
                                    <Slider 
                                        type={"multiImage"}
                                        carouselClass={"amzn__carousel"}
                                        count={7}
                                        price={true}
                                        carouselID={"amzn__gift__cards"}
                                        reorderStarPrice={true}
                                        items={
                                                [
                                                    {
                                                        href: '/',
                                                        src: amazon_rewards_mastercard,
                                                        altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                        caption: "Amazon.ca eGift Card",
                                                        price: "1 offer from $19.00"
                                                    },
                                                    {
                                                        href: '/',
                                                        src: mens__fenian__claddagh__ring__gold,
                                                        altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                        caption: "Amazon.ca eGift Card",
                                                        price: 40.00
                                                    },
                                                    {
                                                        href: '/',
                                                        src: icecarats__designer__jewelry__claddagh__ring,
                                                        altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                        caption: "Amazon.ca eGift Card",
                                                        price: 40.00
                                                    },
                                                    {
                                                        href: '/',
                                                        src: tree__and__birds__in__breeze__wall__decal,
                                                        altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                        caption: "Amazon.ca eGift Card",
                                                        price: 40.00
                                                    },
                                                    {
                                                        href: '/',
                                                        src: oreck__upholstery__tool__buster__b__white,
                                                        altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                        caption: "Amazon.ca eGift Card",
                                                        price: 40.00
                                                    },
                                                    {
                                                        href: '/',
                                                        src: rypet__cat__halloween__costume,
                                                        altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                        caption: "Amazon.ca eGift Card",
                                                        price: 40.00
                                                    },
                                                    {
                                                        href: '/',
                                                        src: ten__yellow__gold__mens__claddagh__ring,
                                                        altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                        caption: "Amazon.ca eGift Card",
                                                        price: 40.00
                                                    }
                                                ]
                                            }
                                    />
                                }
                            />
                        </section>
                        <hr className="bucket__divider" />
                        <section>
                            <ProductList 
                                amount={"1"}
                                name={"Amazon One-Time Reload"}
                                date={"Sept. 9 2020"}
                                manufacturer={"Amazon"}
                                asin={"B08F4ZZ8NV"}
                                modelno={"VariableReload"}
                                rank={"1"}
                            />
                        </section>
                        <section className="a__spacing__large">
                            <hr className="bucket__divider" />
                            <h2>From the manufacturer</h2>
                            <section className="balance__amazonReload d-flex align-items-center">
                                <section className="balance__amazonReloadHeader d-flex flex-column col-6">
                                    <h1 class="font-weight-bold">
                                        Amazon Reload
                                    </h1>
                                    <p>
                                        With Amazon Reload, you can add funds quickly and easily using your credit, debit, or prepaid gift card and then use your balance toward millions of items on Amazon.
                                    </p>
                                </section>'
                                <section className="col-6">
                                    <img src={add__funds__amazon__gift__card__amazon__reload} alt="Add funds to your Amazon Gift Card balance with Amazon Reload." />
                                </section>
                            </section>
                            <section className="position-relative">
                                <img src={manage_consolidate_shopping} alt="Manage your budget | Consolidate your balances | Fast, easy shopping on Amazon" />
                                <div className="manageBudgetCircle">
                                    <span className="shoppingHoverPoint">
                                        <Dropdown onMouseOver={managedropdownEnter} onMouseLeave={managedropdownLeave} isOpen={managedropdownOpen} toggle={managedropdown} direction="right" inNavbar>
                                        <DropdownMenuCart
                                            content={
                                                <section className="a__popover__content">
                                                    <p className="font-weight-bold p__bottom">
                                                        Manage your budget
                                                    </p>
                                                    <p>
                                                        Add any amount to your Amazon Gift Card balance to create a budget. Then, use your balance to keep track of your spending on Amazon.
                                                    </p>
                                                </section>
                                            }
                                            close={managedropdownLeave}
                                            />
                                        </Dropdown>
                                    </span>
                                </div>
                                <div className="consolidateBalancesCircle">
                                    <span className="shoppingHoverPoint">
                                        <Dropdown onMouseOver={consolidatedropdownEnter} onMouseLeave={consolidatedropdownLeave} isOpen={consolidatedropdownOpen} toggle={consolidatedropdown} direction="right" inNavbar>
                                        <DropdownMenuCart
                                            content={
                                                <section className="a__popover__content">
                                                    <p className="font-weight-bold p__bottom">
                                                        Consolidate your balances
                                                    </p>
                                                    <p>
                                                        Combine the balances of multiple prepaid cards in your Amazon Gift Card balance. Amazon charges no fees on your balance and it never expires.
                                                    </p>
                                                </section>
                                            }
                                            close={consolidatedropdownLeave}
                                            />
                                        </Dropdown>
                                    </span>
                                </div>
                                <div className="easyShoppingCircle">
                                    <span className="shoppingHoverPoint">
                                        <Dropdown onMouseOver={shoppingdropdownEnter} onMouseLeave={shoppingdropdownLeave} isOpen={shoppingdropdownOpen} toggle={shoppingdropdown} direction="left" inNavbar>
                                            <DropdownMenuCart
                                                content={
                                                    <section className="a__popover__content">
                                                        <p className="font-weight-bold p__bottom">
                                                            Fast, easy shopping on Amazon
                                                        </p>
                                                        <p>
                                                            Check out using your Amazon Gift Card balance for a quick and convenient shopping experience.
                                                        </p>
                                                    </section>
                                                }
                                                close={shoppingdropdownLeave}
                                                direction={"right"}
                                            />
                                        </Dropdown>
                                    </span>
                                </div>
                            </section>
                            <section className="balance__premium">
                                <h2 className="balance__premiumHeading font-weight-bold text-center h1">
                                    Two easy ways to add funds to your balance
                                </h2>
                                <section className="d-flex">
                                    <section className="balance__premiumBox col">
                                        <div>
                                            <img src={reload_wallet} alt="reloaad" />
                                        </div>
                                        <h3 className="balance__premiumBoxHeading font-weight-bold">
                                            Reload
                                        </h3>
                                        <p className="balance__colDesc">
                                            With Reload, you can add funds to your Amazon Gift Card balance with a one-time, manual reload on a date of your choice.
                                        </p>
                                    </section>
                                    <section className="balance__premiumBox col">
                                        <div>
                                            <img src={auto_reload_dollars} alt="reloaad" />
                                        </div>
                                        <h3 className="balance__premiumBoxHeading font-weight-bold">
                                            Auto-Reload
                                        </h3>
                                        <p className="balance__colDesc">
                                            Want to set it and forget it? You can set up Auto-Reload to schedule automated fund transfers to your balance--either when your funds drop below a certain amount or on a regularly scheduled daily, weekly, or monthly basis.
                                        </p>
                                    </section>
                                </section>
                            </section>
                            <section className="balance__faq">
                                <Accordion className="accordion__faq"
                                    allowZeroExpanded={true}
                                >
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                <p>How does it work?</p>
                                                <span className="faq__arrow"></span>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>Each reload transaction adds on Amazon Gift Card to your Amazon Gift Card balance.</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                <p>
                                                    Are there any maintenance fees for the funds I reload and does the balance I reload expire?
                                                </p>
                                                <span className="faq__arrow"></span>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                No. Amazon does not charge any fees for your balance and there is no expiration date for the balance you reload.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                <p>
                                                    What can I use my balance to shop for?
                                                </p>
                                                <span className="faq__arrow"></span>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                You can use your balance toward eligible items on Amazon, including physical products, digital content, and offers from third-party merchants.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                <p>
                                                    Can I change my Auto-Reload setting?
                                                </p>
                                                <span className="faq__arrow"></span>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Yes. Go to the Your Account View Gift Card balance page to change the amount of the Auto-Reload, the amount to trigger the Auto-Reload, or to turn off Auto-Reload.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                <p>
                                                    Can I refund the balance that I reload to my account?
                                                </p>
                                                <span className="faq__arrow"></span>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                No, the balance you reload is not refundable or redeemable for cash, except as required by law. However, you can use it to buy physical and digital items on Amazon.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            </section>
                            <section className="balance__reviews">
                                <hr />
                                <LineTwo />
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
                                    showLightBoxGallery={showLightBoxGallery}
                                    tags={
                                            [
                                                {
                                                    text : "easy to use",
                                                    href : "/"
                                                },
                                                {
                                                    text : "gift cards",
                                                    href : "/"
                                                },
                                                {
                                                    text : "card balance",
                                                    href : "/"
                                                },
                                                {
                                                    text : "super easy",
                                                    href : "/"
                                                },
                                                {
                                                    text : "right away",
                                                    href : "/"
                                                },
                                                {
                                                    text : "make a purchase",
                                                    href : "/"
                                                },
                                                {
                                                    text : "service said",
                                                    href : "/"
                                                },
                                                {
                                                    text : "prepaid cards",
                                                    href : "/"
                                                },
                                                {
                                                    text : "buy something",
                                                    href : "/"
                                                },
                                                {
                                                    text : "purchase sold",
                                                    href : "/"
                                                },
                                                {
                                                    text : "easy peasy",
                                                    href : "/"
                                                },
                                                {
                                                    text : "money back",
                                                    href : "/"
                                                },
                                                {
                                                    text : "visa gift",
                                                    href : "/"
                                                },
                                                {
                                                    text : "prepaid credit",
                                                    href : "/"
                                                }
                                            ]
                                    }
                                    country={"Canada"}
                                    post={
                                            [
                                                {
                                                    avatar : avatar,
                                                    author : "David Wu",
                                                    rating : "3",
                                                    title : "After reloading gift card, the promoted Amazon Credit can only be seen in next checkout",
                                                    date : "October 28, 2019",
                                                    body : <>
                                                                I reloaded $100 that comes with $5 promoted Amazon Credit. I thought that $5 credit should be in my gift card balance but I could not find it. After contacting the customer service, she said the credit can only be seen in the next purchase checkout screen if the the purchase is 'sold' and 'shipped' by Amazon. Other than under this condition, there is no place you can check your Amazon Credit. This also means, it will NOT show on the checkout page if the seller is 3rd party.
                                                        </>,
                                                helpful : "108"
                                                },
                                                {
                                                    avatar : avatar,
                                                    author : "Steven",
                                                    rating : "1",
                                                    title : "Very bad, don’t buy it, it’s not refundable",
                                                    date : "January 1, 2021",
                                                    body : <>
                                                                I reloaded $100 that comes with $5 promoted Amazon Credit. I thought that $5 credit should be in my gift card balance but I could not find it. After contacting the customer service, she said the credit can only be seen in the next purchase checkout screen if the the purchase is 'sold' and 'shipped' by Amazon. Other than under this condition, there is no place you can check your Amazon Credit. This also means, it will NOT show on the checkout page if the seller is 3rd party.
                                                        </>,
                                                    helpful : "66"
                                                },
                                                {
                                                    avatar : avatar,
                                                    author : "Azuki",
                                                    rating : "1",
                                                    title : "Why this new thing",
                                                    date : "December 23, 2020",
                                                    body : <>
                                                                the old reload was better
                                                                I almost accidentally added 100$ when I meant a few $
                                                                Seems like it will happen to a lot of people
                                                                Should make the buttons bigger..
                                                                Edit: Also seem to take longer to get my funds
                                                        </>,
                                                    helpful : "64"
                                                },
                                                {
                                                    avatar : avatar,
                                                    author : "Matt",
                                                    rating : "1",
                                                    title : "Accidentally loaded money from CC",
                                                    date : "December 26, 2020",
                                                    body : <>
                                                                Accidentally loaded money from my CC instead of gift card. No option to cancel the processing. Should allow to claim gift card code here instead of loading money from cc. PIA. Disappointed
                                                        </>,
                                                    helpful : "65"
                                                },
                                                {
                                                    avatar : avatar,
                                                    author : "Amazon Customer",
                                                    rating : "1",
                                                    title : "Don't buy",
                                                    date : "January 5, 2021",
                                                    body : <>
                                                                This sounds like a scam to me. Amazon showed if I reload the gift card, the item that I was about to but would be $5 cheaper. So I did! But the $5 discount won't be applied immediately. It takes up to 24 hours. I learnt that after I reloaded my gift card. Now that item I wanted to buy is more expensive! I'm so disappointed with your marketing Amazon!
                                                        </>,
                                                    helpful : "56"
                                                },
                                                {
                                                    avatar : avatar_emily,
                                                    author : "Emily",
                                                    rating : "1",
                                                    title : "Discount didnt reflected",
                                                    date : "February 16, 2021",
                                                    body : <>
                                                                It said that pay $95 instead of $100. But I paid $100. $5 credit didnt reflected my order. It is hype
                                                        </>,
                                                    helpful : "49"
                                                },
                                                {
                                                    avatar : avatar_liam,
                                                    author : "	Liam Cafferty",
                                                    topReviewer : "1000",
                                                    rating : "5",
                                                    title : "Why am I reviewing this?",
                                                    date : "December 27, 2020",
                                                    body :  <>
                                                                I like the convenience of reloading, and paying with, my Amazon Gift Card.<br/>
                                                                I'm not sure why they suggested that I write a review about it.<br/>
                                                                Hmmm...
                                                            </>,
                                                    helpful : "29"
                                                },
                                                {
                                                    avatar : avatar,
                                                    author : "EmRae",
                                                    rating : "1",
                                                    title : "Works...or does it?!?!",
                                                    date : "December 28, 2020",
                                                    body : <>
                                                                Sure, it's super easy peasy to use & reload!! That gets ⭐⭐⭐⭐⭐! However, the fact that I qualified but yet did NOT get the $5.00 was a little disappointing! Hence the ⭐... sorry!
                                                        </>,
                                                    helpful : "20"
                                                }
                                        ]
                                    }
                                />
                            </section>
                        </section>
                    </main>
                </section>
                <section className="balance__recommendation">
                </section>
                <section className="rhf__border">
                    <CarouselDetailed 
                        heading={"Because you shopped for similar items"}
                        squished={true}
                        slider={
                            <Slider 
                                type={"multiImage"}
                                carouselClass={"amzn__carousel"}
                                count={7}
                                price={true}
                                carouselID={"amzn__gift__cards"}
                                reorderStarPrice={true}
                                items={
                                        [
                                            {
                                                href: '/',
                                                src: amazon_rewards_mastercard,
                                                altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                caption: "Amazon.ca eGift Card",
                                                price: "1 offer from $19.00"
                                            },
                                            {
                                                href: '/',
                                                src: mens__fenian__claddagh__ring__gold,
                                                altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                caption: "Amazon.ca eGift Card",
                                                price: 40.00
                                            },
                                            {
                                                href: '/',
                                                src: icecarats__designer__jewelry__claddagh__ring,
                                                altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                caption: "Amazon.ca eGift Card",
                                                price: 40.00
                                            },
                                            {
                                                href: '/',
                                                src: tree__and__birds__in__breeze__wall__decal,
                                                altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                caption: "Amazon.ca eGift Card",
                                                price: 40.00
                                            },
                                            {
                                                href: '/',
                                                src: oreck__upholstery__tool__buster__b__white,
                                                altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                caption: "Amazon.ca eGift Card",
                                                price: 40.00
                                            },
                                            {
                                                href: '/',
                                                src: rypet__cat__halloween__costume,
                                                altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                caption: "Amazon.ca eGift Card",
                                                price: 40.00
                                            },
                                            {
                                                href: '/',
                                                src: ten__yellow__gold__mens__claddagh__ring,
                                                altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                caption: "Amazon.ca eGift Card",
                                                price: 40.00
                                            }
                                        ]
                                }
                            />
                        }
                    />
                    <CarouselDetailed 
                        heading={"Related to your shopping trends"}
                        squished={true}
                        slider={
                            <Slider 
                                type={"multiImage"}
                                carouselClass={"amzn__carousel"}
                                count={7}
                                price={true}
                                carouselID={"amzn__gift__cards"}
                                reorderStarPrice={true}
                                items={
                                        [
                                            {
                                                href: '/',
                                                src: amazon_rewards_mastercard,
                                                altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                caption: "Amazon.ca eGift Card",
                                                price: "1 offer from $19.00"
                                            },
                                            {
                                                href: '/',
                                                src: mens__fenian__claddagh__ring__gold,
                                                altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                caption: "Amazon.ca eGift Card",
                                                price: 40.00
                                            },
                                            {
                                                href: '/',
                                                src: icecarats__designer__jewelry__claddagh__ring,
                                                altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                caption: "Amazon.ca eGift Card",
                                                price: 40.00
                                            },
                                            {
                                                href: '/',
                                                src: tree__and__birds__in__breeze__wall__decal,
                                                altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                caption: "Amazon.ca eGift Card",
                                                price: 40.00
                                            },
                                            {
                                                href: '/',
                                                src: oreck__upholstery__tool__buster__b__white,
                                                altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                caption: "Amazon.ca eGift Card",
                                                price: 40.00
                                            },
                                            {
                                                href: '/',
                                                src: rypet__cat__halloween__costume,
                                                altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                caption: "Amazon.ca eGift Card",
                                                price: 40.00
                                            },
                                            {
                                                href: '/',
                                                src: ten__yellow__gold__mens__claddagh__ring,
                                                altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                caption: "Amazon.ca eGift Card",
                                                price: 40.00
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
                                items={
                                    [
                                        {
                                            href: '/',
                                            src: amazon_rewards_mastercard,
                                            altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                            caption: "Amazon.ca eGift Card",
                                            price: "1 offer from $19.00"
                                        },
                                        {
                                            href: '/',
                                            src: mens__fenian__claddagh__ring__gold,
                                            altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                            caption: "Amazon.ca eGift Card",
                                            price: 40.00
                                        },
                                        {
                                            href: '/',
                                            src: icecarats__designer__jewelry__claddagh__ring,
                                            altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                            caption: "Amazon.ca eGift Card",
                                            price: 40.00
                                        },
                                        {
                                            href: '/',
                                            src: tree__and__birds__in__breeze__wall__decal,
                                            altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                            caption: "Amazon.ca eGift Card",
                                            price: 40.00
                                        },
                                        {
                                            href: '/',
                                            src: oreck__upholstery__tool__buster__b__white,
                                            altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                            caption: "Amazon.ca eGift Card",
                                            price: 40.00
                                        },
                                        {
                                            href: '/',
                                            src: rypet__cat__halloween__costume,
                                            altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                            caption: "Amazon.ca eGift Card",
                                            price: 40.00
                                        },
                                        {
                                            href: '/',
                                            src: ten__yellow__gold__mens__claddagh__ring,
                                            altText: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                            caption: "Amazon.ca eGift Card",
                                            price: 40.00
                                        }
                                    ]
                                }
                            />
                        }
                    />
                </section>
            </>
        )    
    }

    return (
        <Layout>
            <BalanceReloadPage />
        </Layout>
    )
}

export default BalanceReload
