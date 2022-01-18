import React from 'react'
import { Link } from 'react-router-dom'

import Accordian from '../../components/Footer/ModalLang/Accordion'
import Layout from '../../components/Layout/index'
import Popover from '../../components/UI/Popover'
import { SearchButton } from '../../components/UI/Button'

import CarouselDetailed from '../../components/UI/Carousel/CarouselDetailed'
import Slider from '../../components/UI/Carousel/Carousel'

import amazon_rewards_mastercard from '../../images/amazon-rewards-mastercard.jpg'
import mens__fenian__claddagh__ring__gold from '../../images/mens-fenian-claddagh-ring-gold.jpg'
import icecarats__designer__jewelry__claddagh__ring from '../../images/icecarats-designer-jewelry-claddagh-ring.jpg'
import tree__and__birds__in__breeze__wall__decal from '../../images/tree-and-birds-in-breeze-wall-decal.jpg'
import oreck__upholstery__tool__buster__b__white from '../../images/oreck-upholstery-tool-buster-b-white.jpg'
import rypet__cat__halloween__costume from '../../images/rypet-cat-halloween-costume.jpg'
import ten__yellow__gold__mens__claddagh__ring from '../../images/10k-yellow-gold-mens-claddagh-ring.jpg'

const Returns = () => {

    const ReturnPage = () => (
        <>
            <div className="a__container a__color__alternate__background">
                <section className="page__content__container">
                    <section className="position-relative row a__spacing__double__large a__spacing__top__extra__large ">
                        <section className="col-8">
                            <section className="a__spacing__small a__padding__medium a__color__base__background">
                                <h1 className="a__section">
                                    Return items that you ordered
                                </h1>
                                <p className="a__spacing__small">
                                    You can return many items sold on Amazon. When you return an item, you may see different return options depending on the seller, item, or reason for return.
                                </p>
                                <section className="a__spacing__small a__padding__small">
                                    <Link to="/" className="text-right d-block ml-auto">
                                        VIEW ORDERS
                                    </Link>
                                </section>
                            </section>
                            <section className="a__spacing__small a__padding__medium a__color__base__background">
                                <h1 className="a__section">
                                    Gift Returns
                                </h1>
                                <p className="a__spacing__small">
                                    <b>Order number</b> e.g. 123-1234567-1234567 &nbsp; 
                                    <span className="d-inline-block">
                                        <Popover 
                                            trigger={
                                                <Link to="/">
                                                    How do I find this?
                                                    <i className="a__icon a__icon__popover"></i>
                                                </Link>
                                            }
                                            dropdown={
                                                <>
                                                    <section className="a__section">
                                                        <h1 className="a__size__medium font-weight-bold">
                                                            How do I find this?
                                                        </h1>
                                                    </section>
                                                    <span style={{fontSize : "14px"}}>
                                                        The order number or Order ID is a 17-digit code found on the packing slip that came with your item(s).
                                                    </span>
                                                </>
                                            }
                                            styling={"larger"}
                                        />
                                    </span>
                                </p>
                                <section className="a__spacing__top__small">
                                    <form action="/" className="p__bottom">
                                        <input type="text" maxLength="19" autoComplete="off" placeholder="Order number (with dashes)" spellCheck="false" name="orderId" className="col-8 a__input__text" />
                                        <span className="d-inline-block a__spacing__top__base">
                                            <SearchButton
                                                text={"Search"}
                                            />
                                        </span>
                                    </form>
                                </section>
                            </section>
                        </section>
                        <section className="col-4">
                            <section className="a__padding__medium a__color__base__background">
                                <h1 className="a__section">
                                    Manage Returns
                                </h1>
                                <p className="a__spacing__small">
                                    Print return labels and check the status of your recent returns
                                </p>
                                <section className="a__spacing__small a__padding__small">
                                    <Link to="/" className="text-right d-block ml-auto">
                                        VIEW MORE RETURNS
                                    </Link>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </div>
            <section className="a__spacing__small">
                <section className="a__padding__extra__large a__color__base__background">
                    <div className="a__padding__medium">
                        <h1 className="a__section__ii">
                            Frequently Asked Questions
                        </h1>
                        <section className="a__spacing__small">
                            <Accordian 
                                items={
                                        [
                                            {
                                                heading: "What can I return?",
                                                panel: 
                                                        <p>
                                                            You may return most new, unopened items sold and fulfilled by Amazon within 30 days of delivery for a full refund. For the 2021 holiday season, most of the items purchased between 1 October and 31 December 2021 can be returned until 31 January, 2022. <Link to="/">Learn more about Return Policy</Link>
                                                        </p>
                                            },
                                            {
                                                heading: "When will I get my refund?",
                                                panel: 
                                                        <p>
                                                            Usually in about 2-3 weeks. Most refunds are fully refunded in 3-5 days after we receive and process your return. Learn more about <Link to="/">Return Estimates</Link>
                                                        </p>
                                            },
                                            {
                                                heading: "Does Amazon do replacements?",
                                                panel: 
                                                        <>
                                                            <p>
                                                                We can only replace the exact item and version you ordered, and you are responsible to return the damaged item within 30 days. If you want to exchange for a different item, you will need to return the item and place a new order.</p>
                                                            <p>Learn more about 
                                                                <Link to="/">Replacement Policy</Link>
                                                            </p>
                                                        </>
                                            }
                                        ]
                                }
                                styling={"accordionSimple"}
                                allowMultipleExpanded={true}
                            />
                        </section>
                        <section>
                            <span className="a__color__base">
                                For detailed information on return policy see
                            </span>
                            <Link className="a__link__normal" href="/">
                                <span class="a__color__link">
                                    &nbsp;Returns &amp; Refunds
                                </span>
                            </Link>
                        </section>
                    </div>
                </section>
                <section>
                    <hr />
                </section>
                <section className="a__padding__extra__large">
                    <div className="a__spacing__small">
                        <div className="a__padding__medium">
                            <h1 className="a__section__ii">
                                Did you know...
                            </h1>
                            <section className="row a__spacing__small">
                                <section className="col-8 a__color__base">
                                    <p>
                                        Been holding on to something past its return date? You can sell it online at Amazon.ca! To list a book, CD, cassette, DVD, video, or video game for sale, find its exact match on our site and click the "Sell yours here" button. It's easy.
                                    </p>
                                </section>
                                <section className="col-4">
                                    <Link to="/">
                                        Sell your stuff!
                                    </Link>
                                </section>
                            </section>
                        </div>
                    </div>
                </section>
                <section className="rhf__frame">
                    <div className="rhf__border">
                        <div className="rhf__shoveler">
                            <div className="a__spacing__large">
                                <CarouselDetailed 
                                    heading={
                                        ["Recommended popular audiobooks", "Buy it again"]
                                    }
                                    squished={true}
                                    border={false}
                                    slider={
                                        [
                                            <Slider 
                                                type={"multi-image"}
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
                                                            },
                                                        ]
                                                    }
                                            />,
                                            <Slider 
                                                type={"multi-image"}
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
                                                            },
                                                        ]
                                                    }
                                            />
                                        ]
                                    }
                                    heading_two={"Your browsing history"}
                                    heading_two_link={<>View or edit your browsing history &nbsp; &nbsp;›</>}
                                    slider_two={
                                        <Slider 
                                            type={"multi-image"}
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
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )

    return (
        <Layout>
            <ReturnPage />
        </Layout>
    )
}

export default Returns
