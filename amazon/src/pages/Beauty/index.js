import React from 'react'
import { Link } from 'react-router-dom'

import { BrowseBoxSimple, BrowseBoxPrimary, BrowseCheckbox, BrowseBoxPlain } from '../../components/UI/BrowseBox'

import Layout from '../../components/Layout/index'
    
const Beauty = () => {
    return (
        <Layout>
             <section className="a__container">
                <section className="d-flex mx-0 flex-fill">
                    <section className="electronics__browsebox browserBox">
                        <BrowseBoxSimple
                            title={"Featured Store"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Natural Beauty"
                                    },
                                    {
                                        href : "/",
                                        text : "Korean Beauty"
                                    },
                                    {
                                        href : "/",
                                        text : "Luxury Beauty"
                                    },
                                    {
                                        href : "/",
                                        text : "Men's Grooming"
                                    }
                                ]
                            }
                        />
                        <BrowseBoxSimple
                            title={"Shop by Category"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "All Beauty"
                                    },
                                    {
                                        href : "/",
                                        text : "Makeup"
                                    },
                                    {
                                        href : "/",
                                        text : "Nails"
                                    },
                                    {
                                        href : "/",
                                        text : "Skin Care"
                                    },
                                    {
                                        href : "/",
                                        text : "Fragrance"
                                    },
                                    {
                                        href : "/",
                                        text : "Hair Care"
                                    },
                                    {
                                        href : "/",
                                        text : "Tools & Accessories"
                                    },
                                    {
                                        href : "/",
                                        text : "Men's Grooming"
                                    },
                                    {
                                        href : "/",
                                        text : "Oral Care"
                                    },
                                    {
                                        href : "/",
                                        text : "Luxury Beauty"
                                    },
                                    {
                                        href : "/",
                                        text : "Luxury Makeup"
                                    },
                                    {
                                        href : "/",
                                        text : "Luxury Nails"
                                    },
                                    {
                                        href : "/",
                                        text : "Luxury Skin Care"
                                    },
                                    {
                                        href : "/",
                                        text : "Luxury Fragrance"
                                    },
                                    {
                                        href : "/",
                                        text : "Luxury Hair Care"
                                    },
                                    {
                                        href : "/",
                                        text : "Luxury Tools & Accessories"
                                    },
                                    {
                                        href : "/",
                                        text : "Luxury Men's Grooming"
                                    }
                                ]
                            }
                        />
                        <BrowseBoxSimple
                            title={"More to Explore"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Subscribe & Save Eligible"
                                    },
                                    {
                                        href : "/",
                                        text : "Save with Coupons"
                                    },
                                    {
                                        href : "/",
                                        text : "Deals and Markdowns"
                                    }
                                ]
                            }
                        />
                        <BrowseBoxPrimary
                            title={"Department"}
                            links={
                                [
                                    {
                                        text : "Beauty & Personal Care",
                                        indentClass : "a__indent__1"
                                    },
                                    {
                                        href : "/",
                                        text : "Bath & Body",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Makeup",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Skin Care",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Deodorants & Antiperspirants",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Hair Care",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Nails",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Fragrance",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Oral Care",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Tools & Accessories",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Tattooing Supplies",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Shaving & Hair Removal",
                                        indentClass : "a__indent__2"
                                    }
                                ]
                            }
                        />
                        <BrowseCheckbox
                            title={"Subscription Option"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Subscribe & Save"
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
                                        text : "FREE Shipping"
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
                                        text : "DAWN"
                                    },
                                    {
                                        href : "/",
                                        text : "HUGGIES"
                                    },
                                    {
                                        href : "/",
                                        text : "Q-tips"
                                    },
                                    {
                                        href : "/",
                                        text : "HYDRO SILK"
                                    },
                                    {
                                        href : "/",
                                        text : "Glad"
                                    },
                                    {
                                        href : "/",
                                        text : "Gum"
                                    },
                                    {
                                        href : "/",
                                        text : "Rael"
                                    },
                                    {
                                        href : "/",
                                        text : "DAWN"
                                    },
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
                                                            <span className="a__icon__alt">3 Stars &amp; Up</span>
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
                                                            <span className="a__icon__alt">2 Stars &amp; Up</span>
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
                                                            <span className="a__icon__alt">1 Stars &amp; Up</span>
                                                        </i>
                                                        <span className="a__size__small a__color__base" dir="auto"> &amp; Up</span>
                                                    </div>
                                               </>
                                    }
                                ]
                            }
                        />
                        <BrowseBoxPlain
                            title={"New Arrivals"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Last 30 days",
                                    },
                                    {
                                        href : "/",
                                        text : "Last 90 days",
                                    },
                                    {
                                        href : "/",
                                        text : "Coming Soon",
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
                                        text : "Layger"
                                    },
                                    {
                                        href : "/",
                                        text : "Fastmedia ship USA"
                                    },
                                    {
                                        href : "/",
                                        text : "Pharmapacks"
                                    },
                                    {
                                        href : "/",
                                        text : "DAILY SUPPLY"
                                    },
                                    {
                                        href : "/",
                                        text : "Mega Supplement Store"
                                    },
                                    {
                                        href : "/",
                                        text : "Ella Gray Beauty"
                                    },
                                    {
                                        href : "/",
                                        text : "Holistic Ave"
                                    },
                                    {
                                        href : "/",
                                        text : "2CA61 BYLF"
                                    },
                                    {
                                        href : "/",
                                        text : "HerbsPro"
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
                    </section>
                    <section className="apBrowse flex-fill"></section>
                </section>
            </section>
        </Layout>
    )
}

export default Beauty
