import React, { useState } from 'react'

import { Row, Col, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText } from 'reactstrap'
import classnames from 'classnames'

import Layout from '../../components/Layout/index'
import BreadCrumb from '../../components/UI/BreadCrumb'
import { SearchButton, CancelBtnPrimary, OrderButton, BuyAgainBtn } from '../../components/UI/Button/'

import Popover from '../../components/UI/Popover'

import kichly_cheese_greater from '../../images/thumbnails/products/kichly-cheese-grater-for-kitchen-stainless-steel.jpg'


import './index.css'


const OrderHistory = () => {

    const [activeTab, setActiveTab] = useState('1')
    const [initTab, setInitTab] = useState(true)    // default active tab style

    const toggle = tab => {
        if (activeTab !== tab) { 
            setActiveTab(tab)
            setInitTab(false)   // On click of any tab, reset automatic styling of first nav tab
        }
    }

    return (
        <Layout>
            <section className="orders">
                <div className="orders__wrap">
                    <BreadCrumb />
                    <Row>
                        <Col xs="6">
                            <h1 className="a__spacing__medium">
                                Your Orders
                            </h1>
                        </Col>
                        <Col xs="6">
                            <form method="get" action="" class="form-container d-flex">
                                <div className="flex-grow-1">
                                    <label for="searchOrdersInput" className="sr-only">Search Your Orders:</label>
                                    <div className="a__search">
                                        <i className="a__icon a__icon__search"></i>
                                        <input type="search" placeholder="Search all orders" name="search" className="a__input__text field" />
                                    </div>
                                </div>
                                <SearchButton/>
                            </form>
                        </Col>
                    </Row>
                    <Nav tabs className="tab__switch a__spacing__medium">
                        <NavItem>
                            <NavLink
                                className={classnames({ active: (activeTab === '1' || initTab === true)})}
                                onClick={() => { toggle('1') }}
                            >
                                Orders
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle('2') }}
                            >
                                Buy Again
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '3' })}
                                onClick={() => { toggle('3') }}
                            >
                                Open Orders
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '4' })}
                                onClick={() => { toggle('4') }}
                            >
                                Cancelled Orders
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <section className="orders__placed a__spacing__base">
                        <span className="orders__count">
                            <b>11 orders </b>placed in 
                        </span>
                        <CancelBtnPrimary
                            text={<>past 3 months &nbsp; &nbsp; <i class="a__icon a__icon__dropdown"></i></>}
                        />
                    </section>
                    <TabContent activeTab={activeTab} className="tab__container">
                        <TabPane tabId="1" className="a__box__group a__spacing__base">
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
                                        <OrderButton
                                            text="Track package"
                                            flexWidth={"220px"}
                                        />
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
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="6">
                                    <Card body>
                                        <CardTitle>Special Title Treatment</CardTitle>
                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                        <Button>Go somewhere</Button>
                                    </Card>
                                </Col>
                                <Col sm="6">
                                    <Card body>
                                        <CardTitle>Special Title Treatment</CardTitle>
                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                        <Button>Go somewhere</Button>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row>
                                <Col sm="12">
                                    <h4>Tab 1 Contents</h4>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="4">
                            <Row>
                                <Col sm="12">
                                    <h4>Tab 1 Contents</h4>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </div>
            </section>
        </Layout>
    )
}

export default OrderHistory
