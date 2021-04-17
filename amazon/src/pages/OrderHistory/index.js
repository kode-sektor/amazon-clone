import React, { useState } from 'react'

import { Row, Col, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText } from 'reactstrap'
import classnames from 'classnames'

import Layout from '../../components/Layout/index'
import BreadCrumb from '../../components/UI/BreadCrumb'
import { SearchButton, CancelBtnPrimary } from '../../components/UI/Button/'

import TabOrder from '../../components/UI/TabOrders'

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
