import React, { useState, useEffect } from 'react'

import { Row, Col, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import classnames from 'classnames'

import Cart from '../../components/UI/Cart'
import Slider from '../../components/UI/Carousel/Carousel'
import CardOrder from '../../components/UI/Card/CardOrder'
import CarouselDetailed from '../../components/UI/Carousel/CarouselDetailed'

import Layout from '../../components/Layout/index'
import BreadCrumb from '../../components/UI/BreadCrumb'
import { SearchButton, CancelBtnPrimary } from '../../components/UI/Button/'

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
import hilroy_coil from '../../images/thumbnails/products/hilroy-coil-1-subject-wide-ruled-notebook.jpg'

import './index.css'

const OrderHistory = () => {

    let windowId = window.location.search
    let params = new URLSearchParams(windowId)

    // Click on 'buy-again' should automatically activate tab
    windowId = (params.get("buy-again") === "true" ? "2" : "1") 

    const [queryId, setQueryId] = useState(windowId)
    
    const [activeTab, setActiveTab] = useState(windowId || '1')
    const [initTab, setInitTab] = useState(true)    // default active tab style
    const [fullWidthClass, setFullWidthClass] = useState(windowId === "2" ? "stretch" : "")   // layout adjustment

    const toggle = tab => {
        if (activeTab !== tab) { 
            if (tab === '2') {
                setFullWidthClass('stretch')
            }  else  {
                setFullWidthClass('')
            }
            setActiveTab(tab)
            // setInitTab(false)   // On click of any tab, reset automatic styling of first nav tab
        }
    }

    return (
        <Layout>
            <section className={`orders ${fullWidthClass}`}>
                <div className={activeTab === "3" || activeTab === "4" ? "orders__wrap mx-auto" : "orders__wrap"}>
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
                                    className={classnames({ active: (activeTab === '1')})}
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
                    {
                        activeTab === '3' && (
                            <span className="orders__count a__spacing__base">
                                1 open order
                            </span>
                        )
                    }
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
                                mode={"orders"}
                            />
                        </TabPane>
                        <TabPane tabId="2">
                            <div className="stretch d-flex">
                                <Row className="row-no-gutters mx-0 justify-content-center">
                                    <CardOrder 
                                        column="2"
                                        src={rogaine_mens_hair}
                                        alt={rogaine_mens_hair}
                                        title={"Rogaine Men’s Hair Loss & Thinning Treatment for Hair…"}
                                        price={"81.99"}
                                        costPerGrams={"0.46"}
                                        shipping={"5.98"}
                                    />
                                    <CardOrder 
                                        column="2"
                                        src={rogaine_mens_hair}
                                        alt={rogaine_mens_hair}
                                        title={"Rogaine Men’s Hair Loss & Thinning Treatment for Hair…"}
                                        price={"81.99"}
                                        costPerGrams={"0.46"}
                                        shipping={"5.98"}
                                    />
                                    <CardOrder 
                                        column="2"
                                        src={rogaine_mens_hair}
                                        alt={rogaine_mens_hair}
                                        title={"Rogaine Men’s Hair Loss & Thinning Treatment for Hair…"}
                                        price={"81.99"}
                                        costPerGrams={"0.46"}
                                        shipping={"5.98"}
                                    />
                                    <CardOrder 
                                        column="2"
                                        src={rogaine_mens_hair}
                                        alt={rogaine_mens_hair}
                                        title={"Rogaine Men’s Hair Loss & Thinning Treatment for Hair…"}
                                        price={"81.99"}
                                        costPerGrams={"0.46"}
                                        shipping={"5.98"}
                                    />
                                    <CardOrder 
                                        column="2"
                                        src={rogaine_mens_hair}
                                        alt={rogaine_mens_hair}
                                        title={"Rogaine Men’s Hair Loss & Thinning Treatment for Hair…"}
                                        price={"81.99"}
                                        costPerGrams={"0.46"}
                                        shipping={"5.98"}
                                    />
                                    <CardOrder 
                                        column="2"
                                        src={rogaine_mens_hair}
                                        alt={rogaine_mens_hair}
                                        title={"Rogaine Men’s Hair Loss & Thinning Treatment for Hair…"}
                                        price={"81.99"}
                                        costPerGrams={"0.46"}
                                        shipping={"5.98"}
                                    />
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
                                mode={"openOrders"}
                            />
                        </TabPane>
                        <TabPane tabId="4">
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
                                            deliveryDate : "Cancelled",
                                            product: "KICHLY Cheese Grater for Kitchen Stainless Steel 6-Sides - Easy to Use and Non-Slip Base",
                                        }
                                    ]
                                }
                                mode={"cancelledOrders"}
                            />
                        </TabPane>
                    </TabContent>
                </div>
                {activeTab === "1" && (
                    <section className="cart">
                        <div className="a__box">
                            <div className="cart__wrap a__box__inner a__padding__base">
                                <h3 className="a__spacing__base">Buy it again</h3>
                                <ul>
                                    <Cart
                                        img={hilroy_coil}
                                        title={"Hilroy Ruled Refill Paper, 3 Hole Punched, 10-7…"}
                                        altTitle={"Hilroy Ruled Refill Paper, 3 Hole Punched, 10-7/8 X 8-3/8 Inches, 150 Sheets, White (77193)"}
                                        price={"2.26"}
                                        date={"Sep 2020"}
                                    />
                                </ul>
                            </div>
                        </div>
                    </section>
                )}
            </section>
            <section>
                {activeTab === "3" && (
                    <>
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
                    </>
                )}
                {activeTab === "4" && (
                    <>
                    <hr className="card__break"/>
                    <CarouselDetailed 
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
                </>
                )}
            </section>
        </Layout>
    )
}

export default OrderHistory
