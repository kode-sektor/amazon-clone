import React from 'react'

import { Row, Col } from 'reactstrap'

import { OrderButton, BuyAgainBtn, PrimaryBtn } from '../../UI/Button'
import Popover from '../Popover'

import './index.css'

import kichly_cheese_greater from '../../../images/thumbnails/products/kichly-cheese-grater-for-kitchen-stainless-steel.jpg'
import gift_icon from '../../../images/thumbnails/icons/gift-icon.png'


const TabOrder = ({tabHeading, tabBody, mode}) => {

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
                                {tabHeading[0].orderDate}
                            </span>
                        </Col>
                        <Col xs="2" className="px-0">
                            <span className="a__size__mini a__color__secondary tab__container__label d-block">
                                Total
                            </span>
                            <span className="a__size__base  a__color__secondary">
                            { mode !== "cancelledOrders" && (
                                `CDN$ ${tabHeading[0].orderTotal}`
                            )}
                            { mode === "cancelledOrders" && (
                                `CDN$ 0.00`
                            )}
                            </span>
                        </Col>
                        <Col xs="7" className="px-0">
                            <span className="a__size__mini a__color__secondary tab__container__label d-block">
                                Ship To
                            </span>
                            <Popover
                                trigger={
                                    <a href="javascript:void(0)" className="a__size__base">
                                        {tabHeading[0].user.name}
                                        <i class="a__icon a__icon__popover"></i>
                                    </a>
                                }
                                dropdown={
                                    <ul className="order__address">
                                        <li className="order__address__name">{tabHeading[0].user.name}</li>
                                        <li className="order__address__location">{tabHeading[0].user.location}</li>
                                        <li className="order__address__city">{tabHeading[0].user.city}</li>
                                        <li className="order__address__country">{tabHeading[0].user.country}</li>
                                        <li className="order__address">Phone: <span dir="ltr">{tabHeading[0].user.phone}</span></li>
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
                                {mode !== "cancelledOrders" && (
                                    <>
                                        <li>
                                            <a href="/order__details">View order details 
                                                <i class="a__icon a__icon__text__separator" role="img"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">Invoice <i className="a__icon a__icon__popover"></i></a>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </section>
                    </section>
                </div>  
            </header>
            {
                Array.from(tabBody).map((index, value) => {
                    return (
                        <section className="tab__body a__box">
                            {tabBody[0].giftOrder === true && (
                                <section className="a__box tab__extra">
                                    <div className="a__box__inner a__padding__small">
                                        <img src={gift_icon} alt="gift icon" className="amzn__gift__icon" height="16" width="16"/>
                                        <span class="a__color__secondary gift__text">This is a gift order</span>
                                    </div>
                                </section>
                            )}
                            <div className="a__box__inner">
                                <Row className="mx-0">
                                    <section className="tab__body__delivery flex-grow-1">
                                        <span className="a__size__medium a__color__base a__text__bold d-block">
                                            {tabBody[0].deliveryDate}
                                        </span>
                                        <span>
                                            {tabBody[0].packageMsg}
                                        </span>
                                    </section>
                                    <span>
                                        {mode === "orders" && (
                                            <OrderButton
                                                text="Track package"
                                                width={"220px"}
                                            />
                                        )}
                                        {mode === "openOrders" && (
                                            <PrimaryBtn
                                                text="Track package"
                                                width={"220px"}
                                            /> 
                                        )}
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
                                                            {tabBody[0].product}
                                                        </a>
                                                        <p className="a__size__small mb-0">
                                                        {tabBody[0].returnDate && (`Return eligible through ${tabBody[0].returnDate}`)} 
                                                        </p>
                                                        {tabBody[0].returnDate && (
                                                            <p className="a__spacing__top__micro a__spacing__micro mb-0">
                                                                <i class="a__icon a__icon__addon">Add-on Item</i>
                                                            </p>
                                                        )}
                                                        <BuyAgainBtn
                                                            text={"Buy it again"}
                                                            grey={mode === "cancelledOrders" ? "true" : false}
                                                        />
                                                    </section>
                                                </div>
                                            </section>
                                            <section className="tab__buttongroup__list">
                                                {mode === "openOrders" && (
                                                    <OrderButton
                                                        link="/"
                                                        text="Cancel items"
                                                        width={"220px"}
                                                    />
                                                )}
                                                {mode === "orders" && (
                                                    <OrderButton
                                                        link="/"
                                                        text="Return items"
                                                        width={"220px"}
                                                    />
                                                )}
                                                {mode === "orders" && (
                                                    <OrderButton
                                                        link="/"
                                                        text="Share gift receipt"
                                                        width={"220px"}
                                                    />
                                                )}
                                                {(mode === "orders" || mode ==="openOrders") && (
                                                    <OrderButton
                                                        link="/"
                                                        text="Ask a Product-Related Question"
                                                        width={"220px"}
                                                    />
                                                )}
                                                {mode === "orders" && (
                                                    <OrderButton
                                                        link="/"
                                                        text="Leave seller feedback"
                                                        width={"220px"}
                                                    />
                                                )}
                                                {mode === "orders" && (
                                                    <OrderButton
                                                        link="/"
                                                        text="Write a product review"
                                                        width={"220px"}
                                                    />
                                                )}
                                                {(mode === "orders" || mode === "openOrders" || mode === "cancelledOrders") && (
                                                    <OrderButton
                                                        link="/"
                                                        text="Archive order"
                                                        width={"220px"}
                                                    />
                                                )}
                                            </section>
                                        </div>
                                    </section>
                                </Row>
                            </div>
                        </section> 
                    )
                }
            )}
        </>
    )
}

export default TabOrder
