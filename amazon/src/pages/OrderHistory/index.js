import React, { useState } from 'react'

import { Row, Col, TabContent, TabPane, Nav, NavItem, NavLink, Card, 
    Button, CardTitle, CardText, CardImg, CardBody, CardSubtitle } from 'reactstrap'
import classnames from 'classnames'

import Layout from '../../components/Layout/index'
import BreadCrumb from '../../components/UI/BreadCrumb'
import { SearchButton, CancelBtnPrimary, AddToCart } from '../../components/UI/Button/'

import TabOrder from '../../components/UI/TabOrders'

import './index.css'


const OrderHistory = () => {

    const [activeTab, setActiveTab] = useState('1')
    const [initTab, setInitTab] = useState(true)    // default active tab style
    const [fullWidthClass, setFullWidthClass] = useState('')   // layout adjustment

    const toggle = tab => {
        if (activeTab !== tab) { 
            if (tab === '2') {
                setFullWidthClass('stretch')
            }  else  {
                setFullWidthClass('')
            }
            setActiveTab(tab)
            setInitTab(false)   // On click of any tab, reset automatic styling of first nav tab
        }
    }

    return (
        <Layout>
            <section className={`orders ${fullWidthClass}`}>
                <div className="orders__wrap">
                    <section className="order__breadcrumb">
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
                    </section>
                    {activeTab === '1' && (
                        <section className="orders__placed a__spacing__base">
                            <span className="orders__count">
                                <b>11 orders </b>placed in 
                            </span>
                            <CancelBtnPrimary
                                text={<>past 3 months &nbsp; &nbsp; <i class="a__icon a__icon__dropdown"></i></>}
                            />
                        </section>
                    )}
                    <TabContent activeTab={activeTab} className="tab__container">
                        <TabPane tabId="1" className="a__box__group a__spacing__base">
                            <TabOrder
                                tabHeading={
                                    [
                                        {
                                            orderDate : "March 22, 2021",
                                            orderTotal : 12.42,
                                            orderID : "702-2561815-6185804",
                                            user : { 
                                                name : "Ibiyemi Kayode Olagoke",
                                                location : "2222-2156 Danforth Ave",
                                                city : "2222-2156 Danforth Ave",
                                                country : "Canada",
                                                phone : "+1-647-XXX-XXXX"
                                            },
                                        }
                                    ]
                                }
                                tabBody = {
                                    [
                                        {
                                            deliveryDate : "Mar 23, 2021",
                                            product: "KICHLY Cheese Grater for Kitchen Stainless Steel 6-Sides - Easy to Use and Non-Slip Base",
                                            packageMsg : "Package was left near the front door or porch",
                                            returnDate : "May 2, 2021",
                                            addOn : true,
                                            giftOrder : true
                                        }
                                    ]
                                }
                            />
                        </TabPane>
                        <TabPane tabId="2">
                            <div className="stretch d-flex">
                                <Row className="row-no-gutters mx-0 justify-content-center">
                                    <Col sm="2" className="card__holder justify-content-center flex-grow-1 px-0">
                                        <Card className="justify-space-between">
                                            <div className="card__closed d-flex flex-column flex-grow-1">
                                                <div className="card__closed__imgContainer text-center">
                                                    <CardImg top width="100%" src="https://m.media-amazon.com/images/I/71FIE9XkXiL._AC_SY180_.jpg" alt="Card image cap" />
                                                </div>
                                                <CardBody className="p-0">
                                                    <CardTitle tag="h5" className="a__color__base a__size__base a__text__normal">Rogaine Men’s Hair Loss &amp; Thinning Treatment for Hair…</CardTitle>
                                                    <CardSubtitle tag="h6" className="a__price" data-a-size="m" data-a-color="base">
                                                        <span className="a__price__symbol">$</span>81.99&nbsp;
                                                        <span className="a__size__small a__color__secondary a__text__normal">
                                                            ​($0.46​/​grams)
                                                        </span>
                                                    </CardSubtitle>
                                                    <CardText className="a__size__small a__color__secondary">+ $5.98 shipping</CardText>
                                                    <AddToCart/>
                                                </CardBody>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col sm="2" className="card__holder justify-content-center flex-grow-1 px-0">
                                        <Card className="justify-space-between">
                                            <div className="card__closed d-flex flex-column flex-grow-1">
                                                <div className="card__closed__imgContainer text-center">
                                                    <CardImg top width="100%" src="https://m.media-amazon.com/images/I/71FIE9XkXiL._AC_SY180_.jpg" alt="Card image cap" />
                                                </div>
                                                <CardBody className="p-0">
                                                    <CardTitle tag="h5" className="a__color__base a__size__base a__text__normal">Rogaine Men’s Hair Loss &amp; Thinning Treatment for Hair…</CardTitle>
                                                    <CardSubtitle tag="h6" className="a__price" data-a-size="m" data-a-color="base">
                                                        <span className="a__price__symbol">$</span>81.99&nbsp;
                                                        <span className="a__size__small a__color__secondary a__text__normal">
                                                            ​($0.46​/​grams)
                                                        </span>
                                                    </CardSubtitle>
                                                    <CardText className="a__size__small a__color__secondary">+ $5.98 shipping</CardText>
                                                    <AddToCart/>
                                                </CardBody>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col sm="2" className="card__holder justify-content-center flex-grow-1 px-0">
                                        <Card className="justify-space-between">
                                            <div className="card__closed d-flex flex-column flex-grow-1">
                                                <div className="card__closed__imgContainer text-center">
                                                    <CardImg top width="100%" src="https://m.media-amazon.com/images/I/71FIE9XkXiL._AC_SY180_.jpg" alt="Card image cap" />
                                                </div>
                                                <CardBody className="p-0">
                                                    <CardTitle tag="h5" className="a__color__base a__size__base a__text__normal">Rogaine Men’s Hair Loss &amp; Thinning Treatment for Hair…</CardTitle>
                                                    <CardSubtitle tag="h6" className="a__price" data-a-size="m" data-a-color="base">
                                                        <span className="a__price__symbol">$</span>81.99&nbsp;
                                                        <span className="a__size__small a__color__secondary a__text__normal">
                                                            ​($0.46​/​grams)
                                                        </span>
                                                    </CardSubtitle>
                                                    <CardText className="a__size__small a__color__secondary">+ $5.98 shipping</CardText>
                                                    <AddToCart/>
                                                </CardBody>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col sm="2" className="card__holder justify-content-center flex-grow-1 px-0">
                                        <Card className="justify-space-between">
                                            <div className="card__closed d-flex flex-column flex-grow-1">
                                                <div className="card__closed__imgContainer text-center">
                                                    <CardImg top width="100%" src="https://m.media-amazon.com/images/I/71FIE9XkXiL._AC_SY180_.jpg" alt="Card image cap" />
                                                </div>
                                                <CardBody className="p-0">
                                                    <CardTitle tag="h5" className="a__color__base a__size__base a__text__normal">Rogaine Men’s Hair Loss &amp; Thinning Treatment for Hair…</CardTitle>
                                                    <CardSubtitle tag="h6" className="a__price" data-a-size="m" data-a-color="base">
                                                        <span className="a__price__symbol">$</span>81.99&nbsp;
                                                        <span className="a__size__small a__color__secondary a__text__normal">
                                                            ​($0.46​/​grams)
                                                        </span>
                                                    </CardSubtitle>
                                                    <CardText className="a__size__small a__color__secondary">+ $5.98 shipping</CardText>
                                                    <AddToCart/>
                                                </CardBody>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col sm="2" className="card__holder justify-content-center flex-grow-1 px-0">
                                        <Card className="justify-space-between">
                                            <div className="card__closed d-flex flex-column flex-grow-1">
                                                <div className="card__closed__imgContainer text-center">
                                                    <CardImg top width="100%" src="https://m.media-amazon.com/images/I/71FIE9XkXiL._AC_SY180_.jpg" alt="Card image cap" />
                                                </div>
                                                <CardBody className="p-0">
                                                    <CardTitle tag="h5" className="a__color__base a__size__base a__text__normal">Rogaine Men’s Hair Loss &amp; Thinning Treatment for Hair…</CardTitle>
                                                    <CardSubtitle tag="h6" className="a__price" data-a-size="m" data-a-color="base">
                                                        <span className="a__price__symbol">$</span>81.99&nbsp;
                                                        <span className="a__size__small a__color__secondary a__text__normal">
                                                            ​($0.46​/​grams)
                                                        </span>
                                                    </CardSubtitle>
                                                    <CardText className="a__size__small a__color__secondary">+ $5.98 shipping</CardText>
                                                    <AddToCart/>
                                                </CardBody>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col sm="2" className="card__holder justify-content-center flex-grow-1 px-0">
                                        <Card className="justify-space-between">
                                            <div className="card__closed d-flex flex-column flex-grow-1">
                                                <div className="card__closed__imgContainer text-center">
                                                    <CardImg top width="100%" src="https://m.media-amazon.com/images/I/71FIE9XkXiL._AC_SY180_.jpg" alt="Card image cap" />
                                                </div>
                                                <CardBody className="p-0">
                                                    <CardTitle tag="h5" className="a__color__base a__size__base a__text__normal">Rogaine Men’s Hair Loss &amp; Thinning Treatment for Hair…</CardTitle>
                                                    <CardSubtitle tag="h6" className="a__price" data-a-size="m" data-a-color="base">
                                                        <span className="a__price__symbol">$</span>81.99&nbsp;
                                                        <span className="a__size__small a__color__secondary a__text__normal">
                                                            ​($0.46​/​grams)
                                                        </span>
                                                    </CardSubtitle>
                                                    <CardText className="a__size__small a__color__secondary">+ $5.98 shipping</CardText>
                                                    <AddToCart/>
                                                </CardBody>
                                            </div>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                            <h2 className="a__spacing__none a__size__large font-weight-bold orders__title">Popular Reorders</h2>
                            <section className="order__store">
                                
                            </section>
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
