import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../components/Layout/index'
import Slider from '../../components/UI/Carousel/Carousel'
import CarouselDetailed from '../../components/UI/Carousel/CarouselDetailed'
import { DropdownMenuPrimary, DropdownMenuCart } from '../../components/UI/DropdownMenu'


import { Nav, NavItem, NavLink, Row, Col, Dropdown } from 'reactstrap'

import classnames from 'classnames'

import { BtnPill, CartBtn, CartBtnSecondary, CartBtnSmall } from '../../components/UI/Button'

import binoculars_tb from '../../images/thumbnails/products/gosky-10x42-roof-prism-binoculars-for-adults.jpg'
import binoculars from '../../images/products/gosky-10x42-roof-prism-binoculars-for-adults.jpg'

import ameriwood_lumina from '../../images/products/ameriwood-home-lumina-fireplace-tv-stand-white.jpg'
import modern_cube from '../../images/products/baxton-studio-siskal-modern-cube-ottoman-white-set-of-2.jpg'
import monterey_tv_stand from '../../images/products/convenience-concepts-151401W-designs2Go-monterey-tv-stand.jpg'
import frosted_endtable from '../../images/products/global-furniture-clear-frosted-occasional-end-table.jpg'
import leather_swivel from '../../images/products/furmax-bar-stools-modern-pu-leather-swivel.jpg'
import faux_leather from '../../images/products/best-choice-products-faux-leather-modern-convertible.jpg'


import './index.css'

const NavCart = () => {

    const [coupondropdownOpen, setCoupondropdownOpen] = useState(false)    // account dropdown

    const [activeTab, setActiveTab] = useState('1')
    const [initTab, setInitTab] = useState(true)    // default active tab style

    // Acct dropdown
    const coupondropdown = () => setCoupondropdownOpen(couponDropdownOpen => !couponDropdownOpen)
    const coupondropdownEnter = () => setCoupondropdownOpen(true)
    const coupondropdownLeave = () => setCoupondropdownOpen(false)

    const toggle = tab => {
        if (activeTab !== tab) { 
            setActiveTab(tab)
            setInitTab(false)   // On click of any tab, reset automatic styling of first nav tab
        }
    }

    const NavCartPage = () => (
        <>
            <div className="navCart__wrap">
                <section className="navCart__banner a__spacing__medium">
                    <section className="a__box a__box__rounded a__alert a__alert__warning a__spacing__medium__plus">
                        <header className="a__box__inner a__alert__container">
                            <h4 className="a__alert__heading">
                                Important messages for items in your Cart:
                            </h4>
                            <i className="a__icon a__icon__alert"></i>
                            <p className="a__spacing__top__small mb-0 font-weight-bold">
                                1 item in your Saved Items has changed price.
                            </p>
                            <ul>
                                <li>
                                    <span>
                                        <Link to="/">
                                            Master Lock Cable Lock, Set Your Own Combination Bike Lock, 6 ft. Long, 8114D
                                        </Link> has decreased from <span className="a__color__price">CDN$20.67</span> to
                                        <span className="a__color__price"> CDN$20.65</span>
                                    </span>
                                </li>
                            </ul>
                        </header>
                    </section>
                    <Link to="/" className="mx-auto navCart__banner__link d-block">
                        <div className="d-flex align-items-center">
                            <section className="navCart__banner__img a__section a__padding__base">
                                <img src={binoculars_tb} alt={binoculars_tb} className="d-block"/>
                                <div className="text-center">
                                    <strong className="navCart__promo__amount"><span>$20</span> instant gift card</strong>
                                </div>
                            </section>
                            <section className="a__section a__padding__base">
                                <p>
                                    <strong>Kay,</strong> get a 
                                    <strong>
                                        <span style={{color: "var(--green-2)"}}>
                                            <span> $20</span> Amazon.ca Gift Card 
                                        </span>
                                    </strong> instantly, plus up to 5% back for 6 months <br/> after approval for the Amazon.ca Rewards Mastercard. 
                                </p>
                            </section>
                            <section className="a__section a__spacing__mini a__spacing__top__mini">
                                <table className="navCart__mathbox">
                                    <tbody>
                                        <tr>
                                            <td className="navCart__mathbox__label">
                                                Current Total:
                                            </td>

                                            <td className="text__right navCart__mathbox__value">
                                                $130.98
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="navCart__mathbox__label font-weight-bold">
                                                Savings after approval:
                                            </td>

                                            <td className="text-right navCart__mathbox__value font-weight-bold">
                                                <span class="maple-mathbox__sum-line">
                                                    - $20.00
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="a__color__price navCart__mathbox__label font-weight-bold">
                                                Cost After Savings:
                                            </td>

                                            <td className="a__color__price text-right navCart__mathbox__value font-weight-bold">
                                                $110.98
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>
                            <section className="navCart__learnMore a__section a__spacing__medium a__spacing__top__medium text-center">
                                <BtnPill/>
                            </section>
                        </div>
                    </Link>
                </section>
                <section className="navCart__list d-flex">
                    <section className="navCart__retail flex-grow-1">
                        <p className="navCart__switch__lang mb-0">
                            Vous voulez voir cette page en français ? <Link to="/"> Cliquez ici</Link>
                        </p>
                        <section className="navCart__active a__cardui mt-0 overflow-visible">
                            <div className="a__cardui__body">
                                <header className="navCart__header">
                                    <h1 className="pb-0">Shopping Cart</h1>
                                    <button className="navCart__deselect">Deselect all items</button>
                                </header>
                                <form action="" className="navCart__form">
                                    <p className="a__spacing__top__micro text-right a-color-secondary mb-0">Price</p>
                                    <section className="navCart__row a__spacing__mini">
                                        <Row className="a__spacing__base a__spacing__top__base mx-0">
                                            <Col xs="9" className="navCart__checkoutBox d-flex px-0">
                                                <section className="navCart__checkout__img d-flex align-items-center">
                                                    <span className="navCart__checkout__check">
                                                        <span className="a__checkbox a__checkbox__fancy d-block">
                                                            <label>         
                                                                <input type="checkbox" name="" value="" checked/>
                                                                <i className="a__icon a__icon__checkbox"></i>
                                                            </label>
                                                        </span>
                                                    </span>
                                                    <Link to="/" className="d-block">
                                                        <img src={binoculars} alt={binoculars}/>
                                                    </Link>
                                                </section>
                                                <section className="navCart__checkout__info flex-grow-1">
                                                    <h3 className="navCart__title a__size__medium font-weight-normal pb-0">Gosky 10x42 Roof Prism Binoculars for Adults, HD Professional Binoculars for Bird Watching Travel Stargazing Hunting Concerts Sports-BAK4 Prism FMC Lens-with Phone Mount Strap Carrying Bag</h3>
                                                    <span className="a__size__small a__color__success d-block">In Stock</span>
                                                    <span className="a__size__small a__color__secondary d-block">Sold by <a href="/">Gosky</a> and Fulfilled By Amazon.ca.</span>
                                                    <span className="a__size__small a__color__secondary d-block">Eligible for FREE Shipping</span>
                                                    <span className="a__size__small a__spacing__top__micro a__color__secondary d-block">
                                                        <label>
                                                            <input type="checkbox" name="" value=""/>
                                                            <i className="a__icon a__icon__checkbox"></i>
                                                            <span className="a__label a__checkbox__label"> This will be a gift
                                                                <span className="a__size__small">
                                                                    <Link to="/">
                                                                        <span className="a__size__small">&nbsp;Learn more
                                                                        </span>
                                                                    </Link>
                                                                </span>
                                                            </span>
                                                        </label>
                                                    </span>
                                                    <span className="a__size__small d-block">
                                                        <span className="font-weight-bold">Color Name: </span>
                                                        <span className="a__size__small">HD 10x42 binoculars</span>
                                                    </span>
                                                    <div className="navCart__actionLinks">
                                                        <DropdownMenuPrimary
                                                            optionList={ 
                                                                <>
                                                                    <option value="">Qty: 1</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                    <option value="6">6</option>
                                                                    <option value="7">7</option>
                                                                    <option value="8">8</option>
                                                                    <option value="9">9</option>
                                                                    <option value="10">10</option>
                                                                </>
                                                            }
                                                            squished={true}
                                                        />
                                                        <i className="a__icon a__icon__text__separator" role="img" aria-label="|"></i>
                                                        <button className="a__color__button__link a__size__small">Delete</button>
                                                        <i className="a__icon a__icon__text__separator" role="img" aria-label="|"></i>
                                                        <button className="a__color__button__link a__size__small">Save for later</button>
                                                        <i className="a__icon a__icon__text__separator" role="img" aria-label="|"></i>
                                                        <button className="a__color__button__link a__size__small">See more like this</button>
                                                    </div>
                                                </section>
                                            </Col>
                                            <Col xs="2" className="text-right ml-auto">
                                                <p className="a__spacing__small">
                                                    <span className="a__size__medium a__color__base font-weight-bold">
                                                        $129.98
                                                    </span>
                                                </p>    
                                                <Dropdown onMouseOver={coupondropdownEnter} onMouseLeave={coupondropdownLeave} isOpen={coupondropdownOpen} toggle={coupondropdown} direction="right" inNavbar>
                                                    <div className="a__box a__box__rounded text-center d-inline-block h-auto">
                                                        <div className="a__box__inner a__padding__mini">
                                                            <Link to="/" className="d-block">
                                                                <span className="a__size__small a__color__base">
                                                                    Save $20.00
                                                                </span>
                                                                <i className="a__icon a__icon__popover"></i>
                                                            </Link>   
                                                            <Link to="/" className="a__size__small">
                                                                Clip Coupon
                                                            </Link>
                                                        </div>
                                                    </div> 
                                                    <DropdownMenuCart
                                                        content={
                                                            <section className="a__popover__content d-flex">
                                                                <img alt="Gosky 10x42 Roof Prism Binoculars for Adults, HD Professional Binoculars for Bird Watching Travel Stargazing Hunting Concerts Sports-BAK4 Prism FMC Lens-with Phone Mount Strap Carrying Bag" src="https://m.media-amazon.com/images/I/61yZ3UZ9-9L._AA100_.jpg" className="productDropdown__img" height="100" width="100"/>
                                                                <section>
                                                                    <span className="a__size__medium a__spacing__base font-weight-bold">
                                                                        Save $20.00
                                                                    </span>
                                                                    <p className="a__size__small mb-0">
                                                                        Save an additional $20.00 on 1 of the eligible items for this coupon.<br/>
                                                                        <Link to="/" className="text-decoration-none">
                                                                            Terms and Conditions
                                                                        </Link>
                                                                        <br/>
                                                                        (Discount at Checkout)
                                                                    </p>
                                                                </section>
                                                            </section>
                                                        }
                                                        close={coupondropdownLeave}
                                                    />
                                                </Dropdown>
                                            </Col>
                                        </Row>
                                    </section>
                                    <section className="navCart__subtotal text-right">
                                        <span className="a__size__medium">Subtotal (1 item):</span>    
                                        <span className="a__size__medium a__color__base font-weight-bold">&nbsp;$129.98</span>
                                    </section>
                                </form>
                            </div>
                        </section>
                        <section className="navCart__active a__cardui mt-0">
                            <div className="a__cardui__body">
                                <header className="navCart__header a__spacing__top a__spacing__mini">
                                    <h2>Your Items</h2>
                                    <Nav tabs className="tab__switch a__spacing__mini a__spacing__top__mini">
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: (activeTab === '1' || initTab === true)})}
                                                onClick={() => { toggle('1') }}
                                            >
                                                Saved for later (4 items)
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active : activeTab === '2' })}
                                                onClick={() => { toggle('2') }}
                                            >
                                                Buy it again
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </header>
                                {activeTab === "1" && (
                                    <form action="" className="navCart__form">
                                        <section className="navCart__row a__spacing__mini">
                                            <Row className="a__spacing__base a__spacing__top__base mx-0">
                                                <Col xs="9" className="navCart__checkoutBox d-flex px-0">
                                                    <section className="navCart__checkout__img d-flex align-items-center">
                                                        <span className="navCart__checkout__check">
                                                            <span className="a__checkbox a__checkbox__fancy d-block">
                                                                <label>         
                                                                    <input type="checkbox" name="" value="" checked/>
                                                                    <i className="a__icon a__icon__checkbox"></i>
                                                                </label>
                                                            </span>
                                                        </span>
                                                        <Link to="/" className="d-block">
                                                            <img src={binoculars} alt={binoculars}/>
                                                        </Link>
                                                    </section>
                                                    <section className="navCart__checkout__info flex-grow-1">
                                                        <h3 className="navCart__title a__size__medium font-weight-normal pb-0">Gosky 10x42 Roof Prism Binoculars for Adults, HD Professional Binoculars for Bird Watching Travel Stargazing Hunting Concerts Sports-BAK4 Prism FMC Lens-with Phone Mount Strap Carrying Bag</h3>
                                                        <span className="a__size__small a__color__success d-block">In Stock</span>
                                                        <span className="a__size__small a__color__secondary d-block">Sold by <a href="/">Gosky</a> and Fulfilled By Amazon.ca.</span>

                                                        <section className="a__box h-auto a__alert__inline a__alert__inline__info">
                                                            <div className="a__box__inner a__alert__container">
                                                                <i className="a__icon a__icon__alert"></i>
                                                                <div className="a__alert__content a__color__base">We updated this item to the best offer currently available at Amazon. The price increased by $6.01.
                                                                    <a href="/"> Learn More</a>
                                                                </div>
                                                            </div>
                                                        </section>

                                                        <span className="a__size__small a__spacing__top__micro a__color__secondary d-block">
                                                            <label>
                                                                <input type="checkbox" name="" value=""/>
                                                                <i className="a__icon a__icon__checkbox"></i>
                                                                <span className="a__label a__checkbox__label"> This will be a gift
                                                                    <span className="a__size__small">
                                                                        <Link to="/">
                                                                            <span className="a__size__small">&nbsp;Learn more
                                                                            </span>
                                                                        </Link>
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </span>
                                                        <span className="a__size__small d-block">
                                                            <span className="font-weight-bold">Color Name: </span>
                                                            <span className="a__size__small">HD 10x42 binoculars</span>
                                                        </span>
                                                        <div className="navCart__actionLinks">
                                                            <DropdownMenuPrimary
                                                                optionList={ 
                                                                    <>
                                                                        <option value="">Qty: 1</option>
                                                                        <option value="1">1</option>
                                                                        <option value="2">2</option>
                                                                        <option value="3">3</option>
                                                                        <option value="4">4</option>
                                                                        <option value="5">5</option>
                                                                        <option value="6">6</option>
                                                                        <option value="7">7</option>
                                                                        <option value="8">8</option>
                                                                        <option value="9">9</option>
                                                                        <option value="10">10</option>
                                                                    </>
                                                                }
                                                                squished={true}
                                                            />
                                                            <i className="a__icon a__icon__text__separator" role="img" aria-label="|"></i>
                                                            <button className="a__color__button__link a__size__small">Delete</button>
                                                            <i className="a__icon a__icon__text__separator" role="img" aria-label="|"></i>
                                                            <button className="a__color__button__link a__size__small">Save for later</button>
                                                            <i className="a__icon a__icon__text__separator" role="img" aria-label="|"></i>
                                                            <button className="a__color__button__link a__size__small">See more like this</button>
                                                        </div>
                                                    </section>
                                                </Col>
                                                <Col xs="2" className="text-right ml-auto">
                                                    <p className="a__spacing__small">
                                                        <span className="a__size__medium a__color__base font-weight-bold">
                                                            $129.98
                                                        </span>
                                                    </p>    
                                                </Col>
                                            </Row>
                                        </section>
                                    </form>
                                )}
                                {activeTab === "2" && (
                                    <section className="navCart__buyItAgain a__spacing__top__base">
                                        <section className="navCart__row a__spacing__base">
                                            <Row className="mx-0">
                                                <Col xs="10" className="d-flex px-0">
                                                    <section className="navCart__buyItAgain__thumbnail">
                                                        <Link to="/">
                                                            <img alt="Yupoong Men&amp;#39;s YP Classics Trucker Mesh Cap, black, One Size" src="https://m.media-amazon.com/images/I/818hhTLmKoL._AC_AA180_.jpg" className="sc-product-image" height="180" width="180"/>
                                                        </Link>
                                                    </section>
                                                    <section className="navCart__buyItAgain__main flex-grow-1">
                                                        <h3 className="a__size__medium font-weight-bold pb-o">
                                                            <Link to="/">Yupoong Men's YP Classics Trucker Mesh Cap, black, One Size</Link>
                                                        </h3>
                                                        <span className="a__size__small a__color__success d-block">In Stock</span>
                                                        <CartBtnSecondary/>                                                        
                                                    </section>
                                                </Col>
                                                <Col xs="2" className="px-0">
                                                    <span className="a__spacing__mini a__size__medium a__color__price font-weight-bold">
                                                        $10.94
                                                    </span>
                                                </Col>
                                            </Row>
                                        </section>
                                    </section>
                                )}
                            </div>
                        </section>
                        <p className="a__size__small">               
                            The price and availability of items at Amazon.ca are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price. Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.
                        </p>
                       
                    </section>
                    <section className="navCart__checkout">
                        <div className="a__cardui mt-0">
                            <section className="a__cardui__body">
                                <form method="" className="navCart__proceedToCheckout">
                                    <div className="a__section">
                                        <section className="a__box a__alert__inline a__alert__inline__success">
                                            <div className="a__box__inner a__alert__container">
                                                <i className="a__icon a__icon__alert"></i>
                                                <div className="a__alert__content">
                                                    Your order qualifies for FREE shipping (excludes remote locations).
                                                    <span class="a-color-secondary">Choose this option at checkout.</span>
                                                    <Link to="/">Details</Link>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    <div className="a__section">
                                        <div className="navCart__checkout__subtotals a__spacing__mini">
                                            <span className="a__size__medium">Subtotal (1 item):</span>
                                            <span className="a__size__medium a__color__base font-weight-bold">&nbsp;$129.98</span>
                                        </div>
                                        <div className="a__spacing__base">
                                            <label>
                                                <input type="checkbox" name="" value=""/>
                                                <i className="a__icon a__icon__checkbox"></i>
                                                <span className="a__label a__checkbox__label"> This order contains a gift
                                                </span>
                                            </label>
                                        </div>
                                        <CartBtn/>
                                    </div>
                                </form>
                            </section>
                        </div>
                        <section className="a__spacing__large">
                            <div className="a__box">
                                <div className="a__box__inner">
                                    <h5 className="a__spacing__base">
                                        Buy it again
                                    </h5>
                                    <section className="a__section a__spacing__micro">
                                        <ul>
                                            <li className="a__spacing__medium">
                                                <Row>
                                                    <Col className="navCart__checkout__thumbnail">
                                                        <Link to="/">
                                                            <img src={binoculars_tb} alt={binoculars_tb} className="d-block"/>
                                                        </Link>
                                                    </Col>
                                                    <Col>
                                                        <Link to="/" className="navCart__checkout__prodTitle">
                                                            Gosky 10x42 Ro...
                                                        </Link>
                                                        <div className="a__icon__row a__spacing__none">
                                                            <Link to="/">
                                                                <span class="amzn__carousel__star"></span>
                                                                <span class="amzn__carousel__count"> 1,833 </span>
                                                            </Link>
                                                            <span class="a__color__price d-block">$269.99</span>
                                                            <span class="a__size__small a__color__secondary amzn__carousel__dateOfPurchase">Purchased Jan 2021 </span>
                                                            <p className="mb-0">Minimum quantity of 2 required.</p>
                                                            <CartBtnSmall/>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
                        </section>
                    </section>
                </section>
            </div>
            <CarouselDetailed 
                heading={"Buy it Again"}
                squished={true}
                slider={
                    <Slider 
                        type={"multiImage"}
                        carouselClass={"amzn__carousel"}
                        count={6}
                        price={true}
                        date={true}     // Later change to date={2020-07-09}
                        cartBtnSmall={true}
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
                        ]}
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
        </>
    )
    
    return (
        <Layout>
            <NavCartPage />
        </Layout>
    )
}

export default NavCart
