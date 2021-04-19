import React, { useState } from 'react'

import { Row, Col, TabContent, TabPane, Nav, NavItem, NavLink, Card, 
    Button, CardTitle, CardText, CardImg, CardBody, CardSubtitle } from 'reactstrap'
import classnames from 'classnames'

import Slider from '../../components/UI/Carousel/Carousel'

import CarouselDetailed from '../../components/UI/Carousel/CarouselDetailed'


import Layout from '../../components/Layout/index'
import BreadCrumb from '../../components/UI/BreadCrumb'
import { SearchButton, CancelBtnPrimary, AddToCart } from '../../components/UI/Button/'

import TabOrder from '../../components/UI/TabOrders'

import hp_chromebooks from '../../images/todays-deals/hp-chromebooks.jpg'
import women_running_shoes_breathable_lightweight from '../../images/todays-deals/women-running-shoes-breathable-lightweight.jpg'
import ameriwood_lumina from '../../images/products/ameriwood-home-lumina-fireplace-tv-stand-white.jpg'
import modern_cube from '../../images/products/baxton-studio-siskal-modern-cube-ottoman-white-set-of-2.jpg'
import monterey_tv_stand from '../../images/products/convenience-concepts-151401W-designs2Go-monterey-tv-stand.jpg'
import frosted_endtable from '../../images/products/global-furniture-clear-frosted-occasional-end-table.jpg'
import leather_swivel from '../../images/products/furmax-bar-stools-modern-pu-leather-swivel.jpg'
import faux_leather from '../../images/products/best-choice-products-faux-leather-modern-convertible.jpg'
import rogaine_mens_hair from '../../images/products/rogaine-mens-hair-loss-and-thinning-treatment-for-hair-regrowth.jpg'

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
                    <section className="orders__breadcrumb">
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
                                                    <CardImg top width="100%" src={rogaine_mens_hair} alt="Card image cap" />
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
                                                </CardBody>
                                                <AddToCart
                                                    mTop={"mt-auto"}
                                                />
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
                                                </CardBody>
                                                <AddToCart
                                                    mTop={"mt-auto"}
                                                />
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
                                                </CardBody>
                                                <AddToCart
                                                    mTop={"mt-auto"}
                                                />
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col sm="2" className="card__holder justify-content-center flex-grow-1 px-0">
                                        <Card className="justify-space-between">
                                            <div className="card__closed d-flex flex-column flex-grow-1">
                                                <div className="card__closed__imgContainer text-center">
                                                    <CardImg top width="100%" src={rogaine_mens_hair} alt="Card image cap" />
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
                                                </CardBody>
                                                <AddToCart
                                                    mTop={"mt-auto"}
                                                />
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
                                                </CardBody>
                                                <AddToCart
                                                    mTop={"mt-auto"}
                                                />
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
                                                </CardBody>
                                                <AddToCart
                                                    mTop={"mt-auto"}
                                                />
                                            </div>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                            <h2 className="a__spacing__none a__size__large font-weight-bold orders__title">Popular Reorders</h2>
                            <section className="order__store">
                                <CarouselDetailed 
                                    heading={"Buy in other parts of the store"}
                                    squished={true}
                                    slider={
                                        <Slider 
                                            type={"multiImage"}
                                            carouselClass={"amzn__carousel"}
                                            count={5}
                                            order={true}
                                            items={
                                                    [
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
                                                        }
                                                    ]
                                                }
                                        />
                                    }
                                />
                                <hr className="card__break"/>
                                <CarouselDetailed 
                                    heading={"More everyday essentials to explore"}
                                    squished={true}
                                    slider={
                                        <Slider 
                                            type={"multiImage"}
                                            carouselClass={"amzn__carousel"}
                                            count={5}
                                            addToCart={true}
                                            items={
                                                    [
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
                                                        }
                                                    ]
                                                }
                                        />
                                    }
                                />
                                <hr className="card__break"/>
                                <CarouselDetailed 
                                    heading={"Deals on frequently repurchased items"}
                                    squished={true}
                                    slider={
                                        <Slider 
                                            type={"multiImage"}
                                            carouselClass={"amzn__carousel"}
                                            count={5}
                                            price={true}
                                            addToCart={true}
                                            items={
                                                    [
                                                        {
                                                            href: '/',
                                                            src: faux_leather,
                                                            altText: "FBest Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                                            caption: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                                            prime: true
                                                        },
                                                        {
                                                            href: '/',
                                                            src: leather_swivel,
                                                            altText: "Furmax Bar Stools Modern Pu Leather Swivel Adjustable Hydraulic Bar Stool Square Counter Height Stool Set of 2(White)",
                                                            caption: "Furmax Bar Stools Modern Pu Leather Swivel Adjustable Hydraulic Bar Stool Square Counter Height Stool Set of 2(White)",
                                                            prime: true
                                                        },
                                                        {
                                                            href: '/',
                                                            src: frosted_endtable,
                                                            altText: "Global Furniture Clear/Frosted Occasional End Table with Glossy White Legs",
                                                            caption: "Global Furniture Clear/Frosted Occasional End Table with Glossy White Legs",
                                                            prime: true,
                                                            buyingOptions: true
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
                                                        }
                                                    ]
                                                }
                                        />
                                    }
                                />
                                <hr className="card__break"/>
                                <CarouselDetailed 
                                    heading={"Buy it again"}
                                    squished={true}
                                    slider={
                                        <Slider 
                                            type={"multiImage"}
                                            carouselClass={"amzn__carousel"}
                                            count={6}
                                            price={true}
                                            category={true}
                                            items={
                                                    [
                                                        {
                                                            href: '/',
                                                            src: faux_leather,
                                                            altText: "FBest Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                                            caption: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                                            category: "Dental Floss"
                                                        },
                                                        {
                                                            href: '/',
                                                            src: leather_swivel,
                                                            altText: "Furmax Bar Stools Modern Pu Leather Swivel Adjustable Hydraulic Bar Stool Square Counter Height Stool Set of 2(White)",
                                                            caption: "Furmax Bar Stools Modern Pu Leather Swivel Adjustable Hydraulic Bar Stool Square Counter Height Stool Set of 2(White)",
                                                            category: "Dental Floss"
                                                        },
                                                        {
                                                            href: '/',
                                                            src: frosted_endtable,
                                                            altText: "Global Furniture Clear/Frosted Occasional End Table with Glossy White Legs",
                                                            caption: "Global Furniture Clear/Frosted Occasional End Table with Glossy White Legs",
                                                            category: "Dental Floss"
                                                        },
                                                        {
                                                            href: '/',
                                                            src: monterey_tv_stand,
                                                            altText: "Convenience Concepts 151401W Designs2Go Monterey TV Stand, White",
                                                            caption: "Convenience Concepts 151401W Designs2Go Monterey TV Stand, White",
                                                            category: "Dental Floss"
                                                        },
                                                        {
                                                            href: '/',
                                                            src: modern_cube,
                                                            altText: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                                            caption: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                                            category: "Dental Floss"
                                                        },
                                                        {
                                                            href: '/',
                                                            src: hp_chromebooks,
                                                            altText: "hp chromebooks",
                                                            caption: "hp chromebooks",
                                                            category: "Dental Floss"
                                                        },
                                                        {
                                                            href: '/',
                                                            src: ameriwood_lumina,
                                                            altText: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                                            caption: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                                            category: "Dental Floss"
                                                        },
                                                        {
                                                            href: '/',
                                                            src: ameriwood_lumina,
                                                            altText: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                                            caption: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                                            category: "Dental Floss"
                                                        },
                                                        {
                                                            href: '/',
                                                            src: ameriwood_lumina,
                                                            altText: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                                            caption: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                                            category: "Dental Floss"
                                                        },
                                                        {
                                                            href: '/',
                                                            src: modern_cube,
                                                            altText: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                                            caption: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                                            category: "Dental Floss"
                                                        },
                                                        {
                                                            href: '/',
                                                            src: modern_cube,
                                                            altText: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                                            caption: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                                            category: "Dental Floss"
                                                        },
                                                        {
                                                            href: '/',
                                                            src: women_running_shoes_breathable_lightweight,
                                                            altText: "women running shoes breathable lightweight",
                                                            caption: "women running shoes breathable lightweight",
                                                            category: "Dental Floss"
                                                        }
                                                    ]
                                                }
                                        />
                                    }
                                />
                                <hr className="card__break"/>
                                <CarouselDetailed 
                                    heading={"Explore more items"}
                                    squished={true}
                                    slider={
                                        <Slider 
                                            type={"multiImage"}
                                            carouselClass={"amzn__carousel"}
                                            count={6}
                                            price={true}
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
                                <hr className="card__break"/>
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
