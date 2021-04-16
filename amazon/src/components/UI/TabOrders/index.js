import React from 'react'

import { Row, Col } from 'reactstrap'

import { OrderButton, BuyAgainBtn } from '../../UI/Button'
import Popover from '../Popover'

import kichly_cheese_greater from '../../../images/thumbnails/products/kichly-cheese-grater-for-kitchen-stainless-steel.jpg'

const TabOrder = ({tabHeader, tabBody}) => {
    return (
        <>
            <header className="tab__container__order a__box a__color__offset__background">
                <div className="a__box__inner d-flex tab__table">
                    <Row className="tab__table__details flex-grow-1 mx-0">
                        <Col xs="3" className="px-0">
                            <span className="a__size__mini a__color__secondary tab__container__label d-block">
                                Order placed
                            </span>
                            <span className="a__size__base  a__color__secondary">
                                March 22, 2021
                            </span>
                        </Col>
                        <Col xs="2" className="px-0">
                            <span className="a__size__mini a__color__secondary tab__container__label d-block">
                                Total
                            </span>
                            <span className="a__size__base  a__color__secondary">
                                CDN$ 12.42
                            </span>
                        </Col>
                        <Col xs="7" className="px-0">
                            <span className="a__size__mini a__color__secondary tab__container__label d-block">
                                Ship To
                            </span>
                            <Popover
                                trigger={
                                    <a href="javascript:void(0)" className="a__size__base">
                                        Ibiyemi Kayode Olagoke
                                        <i class="a__icon a__icon__popover"></i>
                                    </a>
                                }
                                dropdown={
                                    <ul className="order__address">
                                        <li className="order__address__name">Ibiyemi Kayode Olagoke</li>
                                        <li className="order__address__location">2222-2156 Danforth Ave</li>
                                        <li className="order__address__city">Toronto, ON M4C 1K3</li>
                                        <li className="order__address__country">Canada</li>
                                        <li className="order__address">Phone: <span dir="ltr"> +1-647-XXX-XXXX</span></li>
                                    </ul>
                                }
                            />
                        </Col>
                    </Row>
                    <section className="tab__table__invoice a__size__base a__color__secondary text-right">
                        <section className="a__size__mini">
                            <span className="a__color__secondary tab__container__label">
                                Order #
                            </span>
                            <span class="a__color__secondary tab__container__value">
                                <bdi dir="ltr">702-2561815-6185804</bdi>
                            </span>
                        </section>
                        <section className="a__size__base">
                            <ul className="d-flex justify-content-end">
                                <li>
                                    <a href="/order__details">View order details 
                                        <i class="a__icon a__icon__text__separator" role="img"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">Invoice <i className="a__icon a__icon__popover"></i></a>
                                </li>
                            </ul>
                        </section>
                    </section>
                </div>  
            </header>
            <section className="tab__body a__box">
                <div className="a__box__inner">
                    <Row className="mx-0">
                        <section className="tab__body__delivery flex-grow-1">
                            <span class="a__size__medium a__color__base a__text__bold d-block">
                                Delivered Mar 23, 2021
                            </span>
                            <span>
                                Package was left near the front door or porch
                            </span>
                        </section>
                        <span>
                            <OrderButton
                                text="Track package"
                                width={"220px"}
                            />
                        </span>
                    </Row>
                    <Row className="mx-0">
                        <section className="a__spacing__top__medium flex-grow-1">
                            <div className="tab__order__products d-flex">
                                <section className="tab__order__productDetails flex-grow-1">
                                    <div className="tab__order__productDetail d-flex">
                                        <section className="tab__order__thumbnail">
                                            <a href="/">
                                                <img src={kichly_cheese_greater} alt={kichly_cheese_greater} />
                                            </a>
                                        </section>
                                        <section className="tab__order__details">
                                            <a className="" href="#">
                                                KICHLY Cheese Grater for Kitchen Stainless Steel 6-Sides - Easy to Use and Non-Slip Base
                                            </a>
                                            <p className="a__size__small mb-0">
                                                Return eligible through Apr 22, 2021
                                            </p>
                                            <p className="a__spacing__top__micro a__spacing__micro mb-0">
                                                <i class="a__icon a__icon__addon">Add-on Item</i>
                                            </p>
                                            <BuyAgainBtn
                                                text={"Buy it again"}
                                            />
                                        </section>
                                    </div>
                                </section>
                                <section className="tab__buttongroup__list">
                                    <OrderButton
                                        link="/"
                                        text="Return items"
                                        width={"220px"}
                                    />
                                    <OrderButton
                                        link="/"
                                        text="Share gift receipt"
                                        width={"220px"}
                                    />
                                    <OrderButton
                                        link="/"
                                        text="Ask a Product-Related Question"
                                        width={"220px"}
                                    />
                                    <OrderButton
                                        link="/"
                                        text="Leave seller feedback"
                                        width={"220px"}
                                    />
                                    <OrderButton
                                        link="/"
                                        text="Write a product review"
                                        width={"220px"}
                                    />
                                    <OrderButton
                                        link="/"
                                        text="Archive order"
                                        width={"220px"}
                                    />
                                </section>
                            </div>
                        </section>
                    </Row>
                </div>
            </section> 
        </>
    )
}

export default TabOrder
