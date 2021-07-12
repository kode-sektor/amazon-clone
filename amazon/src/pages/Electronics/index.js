import React from 'react'
import { Link } from 'react-router-dom'

import { BrowseBoxSimple, BrowseCheckbox, BrowseBoxPrimary, BrowseBoxPlain } from '../../components/UI/BrowseBox'

import Layout from '../../components/Layout/index'

import './index.css'

const Electronics = () => {
    return (
        <Layout>
            <section className="a__container">
                <section className="d-flex mx-0 flex-fill">
                    <section className="electronics__lang browserBox">
                        <BrowseBoxPrimary
                            title={"Department"}
                            links={
                                [
                                    {
                                        text : "Electronics",
                                        indentClass : "a__indent__1" 
                                    },
                                    {
                                        text : "Accessories & Supplies",
                                        href : "/",
                                        indentClass : "a__indent__2" 
                                    },
                                    {
                                        text : "Camera, Photo & Video",
                                        href : "/",
                                        indentClass : "a__indent__2" 
                                    },
                                    {
                                        text : "Car & Vehicle Electronics",
                                        href : "/",
                                        indentClass : "a__indent__2" 
                                    },
                                    {
                                        text : "Cell Phones & Accessories",
                                        href : "/",
                                        indentClass : "a__indent__2" 
                                    },
                                    {
                                        text : "Computers & Accessories",
                                        href : "/",
                                        indentClass : "a__indent__2" 
                                    },
                                    {
                                        text : "eBook Readers & Accessories",
                                        href : "/",
                                        indentClass : "a__indent__2" 
                                    },
                                    {
                                        text : "GPS & Navigation",
                                        href : "/",
                                        indentClass : "a__indent__2" 
                                    },
                                    {
                                        text : "Headphones",
                                        href : "/",
                                        indentClass : "a__indent__2" 
                                    },
                                    {
                                        text : "Home Audio",
                                        href : "/",
                                        indentClass : "a__indent__2" 
                                    },
                                    {
                                        text : "Household Batteries, Chargers & Power Supplies",
                                        href : "/",
                                        indentClass : "a__indent__2" 
                                    },
                                    {
                                        text : "Office Electronics",
                                        href : "/",
                                        indentClass : "a__indent__2" 
                                    },
                                    {
                                        text : "Portable Audio & Video",
                                        href : "/",
                                        indentClass : "a__indent__2" 
                                    },
                                    {
                                        text : "Power Accessories",
                                        href : "/",
                                        indentClass : "a__indent__2" 
                                    },
                                    {
                                        text : "Radio Communication",
                                        href : "/",
                                        indentClass : "a__indent__2" 
                                    },
                                    {
                                        text : "Security & Surveillance",
                                        href : "/",
                                        indentClass : "a__indent__2" 
                                    },
                                    {
                                        text : "Telephones & Accessories",
                                        href : "/",
                                        indentClass : "a__indent__2" 
                                    },
                                    {
                                        text : "Televisions & Video",
                                        href : "/",
                                        indentClass : "a__indent__2" 
                                    },
                                    {
                                        text : "Wearable Technology",
                                        href : "/",
                                        indentClass : "a__indent__2" 
                                    }
                                ]
                            }
                        />
                        <BrowseCheckbox
                            title={"Amazon Prime"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : <>
                                                  <i className="a__icon a__icon__prime a__icon__medium apb__browse__refinements__icon" role="presentation"></i>
                                               </>
                                    }
                                ]
                            }
                        />
                        <BrowseBoxPlain
                            title={"Shipping Option"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "FREE Shipping",
                                    }
                                ]
                            }
                        />
                        <BrowseCheckbox
                            title={"From Our Brands"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Our Brands"
                                    }
                                ]
                            }
                        />
                        <BrowseCheckbox
                            title={"Featured Brands"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Amazon"
                                    },
                                    {
                                        href : "/",
                                        text : "LK"
                                    },
                                    {
                                        href : "/",
                                        text : "JETech"
                                    },
                                    {
                                        href : "/",
                                        text : "ilikable"
                                    },
                                    {
                                        href : "/",
                                        text : "AmazonBasics"
                                    },
                                    {
                                        href : "/",
                                        text : "Apple"
                                    },
                                    {
                                        href : "/",
                                        text : "HolyHigh"
                                    }
                                ]
                            }
                        />
                        <BrowseBoxPlain
                            title={"Avg. Customer Review"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : <>
                                                    <div aria-label="4 Stars &amp; Up">
                                                        <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                            <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                        </i>
                                                        <span className="a__size__small a__color__base" dir="auto"> &amp; Up</span>
                                                    </div>
                                               </>
                                    },
                                    {
                                        href : "/",
                                        text : <>
                                                    <div aria-label="4 Stars &amp; Up">
                                                        <i className="a__icon a__icon__star__medium a__star__medium__3">
                                                            <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                        </i>
                                                        <span className="a__size__small a__color__base" dir="auto"> &amp; Up</span>
                                                    </div>
                                               </>
                                    },
                                    {
                                        href : "/",
                                        text : <>
                                                    <div aria-label="4 Stars &amp; Up">
                                                        <i className="a__icon a__icon__star__medium a__star__medium__2">
                                                            <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                        </i>
                                                        <span className="a__size__small a__color__base" dir="auto"> &amp; Up</span>
                                                    </div>
                                               </>
                                    },
                                    {
                                        href : "/",
                                        text : <>
                                                    <div aria-label="4 Stars &amp; Up">
                                                        <i className="a__icon a__icon__star__medium a__star__medium__1">
                                                            <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                        </i>
                                                        <span className="a__size__small a__color__base" dir="auto"> &amp; Up</span>
                                                    </div>
                                               </>
                                    }
                                ]
                            }
                        />
                        <BrowseBoxPlain
                            title={"Price"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Under $25",
                                    },
                                    {
                                        href : "/",
                                        text : "$25 to $50",
                                    },
                                    {
                                        href : "/",
                                        text : "$50 to $100",
                                    },
                                    {
                                        href : "/",
                                        text : "$100 to $200",
                                    },
                                    {
                                        href : "/",
                                        text : "$200 to above",
                                    },
                                ]
                            }
                        />
                        <BrowseCheckbox
                            title={"Deals"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Today's Deals"
                                    }
                                ]
                            }
                        />
                        <BrowseCheckbox
                            title={"Seller"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Amazon.ca"
                                    },
                                    {
                                        href : "/",
                                        text : "NAZO MART"
                                    },
                                    {
                                        href : "/",
                                        text : "Layger"
                                    },
                                    {
                                        href : "/",
                                        text : "Warehouse Deals"
                                    },
                                    {
                                        href : "/",
                                        text : "Canada Direct - Often Ships Same Day"
                                    },
                                    {
                                        href : "/",
                                        text : "OneDealOutlet Canada"
                                    },
                                    {
                                        href : "/",
                                        text : "Triplenet Pricing INC"
                                    },
                                    {
                                        href : "/",
                                        text : "Brand Name Beat"
                                    },
                                    {
                                        href : "/",
                                        text : "iSanek"
                                    },
                                    {
                                        href : "/",
                                        text : "Deal Targets"
                                    }
                                ]
                            }
                        />
                        <BrowseCheckbox
                            title={"Availability"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Include Out of Stock"
                                    }
                                ]
                            }
                        />
                        <BrowseBoxSimple 
                            title={"Handpicked Electronics"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Cameras"
                                    },
                                    {
                                        href : "/",
                                        text : "Laptops"
                                    },
                                    {
                                        href : "/",
                                        text : "Desktops"
                                    },
                                    {
                                        href : "/",
                                        text : "Headphones"
                                    },
                                    {
                                        href : "/",
                                        text : "TVs"
                                    },
                                    {
                                        href : "/",
                                        text : "Speakers"
                                    },
                                    {
                                        href : "/",
                                        text : "Projectors"
                                    },
                                    {
                                        href : "/",
                                        text : "Routers"
                                    },
                                    {
                                        href : "/",
                                        text : "Printers"
                                    }
                                ]
                            }
                        />
                    </section>
                    <section className="apBrowse flex-fill">

                    </section>
                </section>
            </section>
        </Layout>
    )
}

export default Electronics
