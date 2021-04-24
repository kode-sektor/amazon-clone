import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../components/Layout/index'

import { Row, Col } from 'reactstrap'

import DropdownMenuPrimary from '../../components/UI/DropdownMenu'
import { BtnPill } from '../../components/UI/Button'

import binoculars_tb from '../../images/thumbnails/products/gosky-10x42-roof-prism-binoculars-for-adults.jpg'
import binoculars from '../../images/products/gosky-10x42-roof-prism-binoculars-for-adults.jpg'

import './index.css'

const NavCart = () => {
    return (
        <Layout>
            <div className="navCart__wrap">
                <section className="navCart__banner a__spacing__medium">
                    <Link to="/" className="mx-auto navCart__banner__link d-block">
                        <div className="d-flex align-items-center">
                            <section className="navCart__banner__img a__section a__padding__base">
                                <img src={binoculars_tb} className="d-block"/>
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
                        <p className="navCart__switch__lang">
                            Vous voulez voir cette page en français ? <Link to="/"> Cliquez ici</Link>
                        </p>
                        <section className="navCart__active">
                            <div className="a__cardui mt-0">
                                <div className="a__cardui__body">
                                    <header className="navCart__header">
                                        <h1>Shopping Cart</h1>
                                        <button className="navCart__deselect">Deselect all items</button>
                                    </header>
                                    <form action="" className="navCart__form">
                                        <p className="a__spacing__top__micro text-right a-color-secondary">Price</p>
                                        <section className="navCart__cartItems a__spacing__mini">
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
                                                        <a href="/" className="d-block">
                                                            <img src={binoculars} alt={binoculars}/>
                                                        </a>
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
                                                <Col xs="2" className="text-right">
                                                    <p className="a__spacing__small">
                                                        <span className="a__size__medium a__color__base font-weight-bold">
                                                            $129.98
                                                        </span>
                                                    </p>    
                                                    <div className="a__box text-center d-inline-block h-auto">
                                                        <div className="a__box__inner a__padding__mini">
                                                            <a href="/" className="d-block">
                                                                <span className="a__size__small a__color__base">
                                                                    Save $20.00
                                                                </span>
                                                                <i className="a__icon a__icon__popover"></i>
                                                            </a>   
                                                            <a className="a__size__small">
                                                                Clip Coupon
                                                            </a>
                                                        </div>
                                                    </div>              
                                                </Col>
                                            </Row>
                                        </section>
                                        <section className="navCart__subtotal text-right">
                                            <span className="a__size__medium">Subtotal (1 item):</span>    
                                            <span className="a__size__medium a__color__base font-weight-bold">&nbsp;$129.98</span>
                                        </section>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </section>
                    <section className="navCart__checkout">
                    </section>
                </section>
            </div>
        </Layout>
    )
}

export default NavCart
