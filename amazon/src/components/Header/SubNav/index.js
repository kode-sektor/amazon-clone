import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { subMenu } from '../../../utilities/data'

import handmade_logo from '../../../images/nav/handmade_logo_.png'

import './index.css'

const SubNav = () => {

    const [queryID, setQueryID] = useState("")

    useEffect(() => {
        setQueryID(window.location.pathname)
    }, [])

    return (
        <nav>
            {
                (queryID === "/" || queryID === "/fashion") ?     // Do not display subnav if homepage
                ""
                :
                (queryID === "/electronics") ?     
                <ul className="subNav">
                    <li>
                        <NavLink to="/electronics">Electronics</NavLink>
                    </li>
                    <li>
                        <NavLink to="/beauty">Deals</NavLink>
                    </li>
                    <li>
                        <NavLink to="/best-sellers">Best Sellers</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tv-and-home-theatre">TV &amp; Home Theatre</NavLink>
                    </li>
                    <li>
                        <NavLink to="/camera-and-photo">Camera &amp; Photo</NavLink>
                    </li>
                    <li>
                        <NavLink to="/computers-and-tablets">Computers &amp; Tablets</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cellphones-and-accessories">Cell Phones &amp; Accessories</NavLink>
                    </li>
                    <li>
                        <NavLink to="/headphones-and-speakers">Headphones &amp; Speakers</NavLink>
                    </li>
                    <li>
                        <NavLink to="/car-electronics">Car Electronics</NavLink>
                    </li>
                    <li>
                        <NavLink to="/musical-instrument">Musical Instruments</NavLink>
                    </li>
                    <li>
                        <NavLink to="/office-and-school-supplies">Office &amp; School Supplies</NavLink>
                    </li>
                </ul> 
                :
                (queryID === "/gift-cards") ?     
                <ul className="subNav">
                    <li>
                        <NavLink to="/gift-cards">Gift Cards</NavLink>
                    </li>
                    <li>
                        <NavLink to="/best-sellers">Best Sellers</NavLink>
                    </li>
                    <li>
                        <NavLink to="/birthdays">Birthdays</NavLink>
                    </li>
                    <li>
                        <NavLink to="/redeem-gift-cards">Redeem Gift Cards</NavLink>
                    </li>
                    <li>
                        <NavLink to="/view-your-balance">View Your Balance</NavLink>
                    </li>
                    <li>
                        <NavLink to="/reload-your-balance">Reload Your Balance</NavLink>
                    </li>
                    <li>
                        <NavLink to="/by-brand">By Brand</NavLink>
                    </li>
                    <li>
                        <NavLink to="/by-occasion">By Occasion</NavLink>
                    </li>
                    <li>
                        <NavLink to="/for-business">For Business</NavLink>
                    </li>
                    <li>
                        <NavLink to="/amazon-cash">Amazon Cash</NavLink>
                    </li>
                    <li>
                        <NavLink to="/find-a-gift">Find a Gift</NavLink>
                    </li>
                </ul>
                :
                (queryID === "/health") ?
                <ul className="subNav">
                    <li>
                        <NavLink to="/health">Health &amp; Personal Care</NavLink>
                    </li>
                    <li>
                        <NavLink to="/deals">Deals</NavLink>
                    </li>
                    <li>
                        <NavLink to="/bestsellers">Bestsellers</NavLink>
                    </li>
                    <li>
                        <NavLink to="/baby">Baby &amp; Child Care</NavLink>
                    </li>
                    <li>
                        <NavLink to="/nutrition">Nutrition &amp; Wellness</NavLink>
                    </li>
                    <li>
                        <NavLink to="/health-care">Health Care</NavLink>
                    </li>
                    <li>
                        <NavLink to="/household">Household Supplies</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sexual-wellness">Sexual Wellness</NavLink>
                    </li>
                    <li>
                        <NavLink to="/subscribe-and-save">Subscribe &amp; Save</NavLink>
                    </li>
                </ul>     
                :
                (queryID === "/beauty") ?
                <ul className="subNav">
                    <li>
                        <NavLink to="/beauty">Beauty</NavLink>
                    </li>
                    <li>
                        <NavLink to="/luxury-beauty">Luxury Beauty</NavLink>
                    </li>
                    <li>
                        <NavLink to="/makeup">Makeup</NavLink>
                    </li>
                    <li>
                        <NavLink to="/skin-care">Skin Care</NavLink>
                    </li>
                    <li>
                        <NavLink to="/hair-care">Hair Care</NavLink>
                    </li>
                    <li>
                        <NavLink to="/fragrance">Fragrance</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tools-and-accessories">Tools &amp; Accessories</NavLink>
                    </li>
                    <li>
                        <NavLink to="/oral-care">Oral Care</NavLink>
                    </li>
                    <li>
                        <NavLink to="/mens-grooming">Men's Grooming</NavLink>
                    </li>
                    <li>
                        <NavLink to="/bestsellers">Bestsellers</NavLink>
                    </li>
                    <li>
                        <NavLink to="/deals">Deals</NavLink>
                    </li>
                    <li>
                        <NavLink to="/subscribe-and-save">Subscribe &amp; Save</NavLink>
                    </li>
                </ul>
                :
                (queryID === "/pet-supplies") ?
                <ul className="subNav">
                    <li>
                        <NavLink to="/pet-supplies">Pet Supplies</NavLink>
                    </li>
                    <li>
                        <NavLink to="/bestsellers">Bestsellers</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dogs">Dogs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cats">Cats</NavLink>
                    </li>
                    <li>
                        <NavLink to="/small-animals">Small Animals</NavLink>
                    </li>
                    <li>
                        <NavLink to="/fish-aquatics">Fish &amp; Aquatics</NavLink>
                    </li>
                    <li>
                        <NavLink to="/birds">Birds</NavLink>
                    </li>
                    <li>
                        <NavLink to="/brands">Brands</NavLink>
                    </li>
                    <li>
                        <NavLink to="/deals">Deals</NavLink>
                    </li>
                    <li>
                        <NavLink to="/subscribe-and-save">Subscribe &amp; Save</NavLink>
                    </li>
                    <li>
                        <NavLink to="/pet-profile">Pet Profile</NavLink>
                    </li>
                </ul>
                :
                (queryID === "/sports-and-outdoors") ?
                <ul className="subNav">
                    <li>
                        <NavLink to="/sports-and-outdoors">Sports &amp; Outdoors</NavLink>
                    </li>
                    <li>
                        <NavLink to="/exercise-and-fitness">Exercise &amp; Fitness</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sports-apparel">Sports Apparel</NavLink>
                    </li>
                    <li>
                        <NavLink to="/outdoors">Outdoors</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cycling">Cycling</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sports-technology">Sports Technology</NavLink>
                    </li>
                    <li>
                        <NavLink to="/golf">Golf</NavLink>
                    </li>
                    <li>
                        <NavLink to="/hunting-and-fishing">Hunting &amp; Fishing</NavLink>
                    </li>
                    <li>
                        <NavLink to="/fan-shop">Fan Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/deals">Deals</NavLink>
                    </li>
                </ul>
                :
                (queryID === "/books") ?
                <ul className="subNav">
                    <li>
                        <NavLink to="/books">Books</NavLink>
                    </li>
                    <li>
                        <NavLink to="/advanced-search">Advanced Search</NavLink>
                    </li>
                    <li>
                        <NavLink to="/todays-deals">Today's Deals</NavLink>
                    </li>
                    <li>
                        <NavLink to="/new-releases">New Releases</NavLink>
                    </li>
                    <li>
                        <NavLink to="/amazon-charts">Amazon Charts</NavLink>
                    </li>
                    <li>
                        <NavLink to="/best-sellers-more">Best Sellers &amp; More</NavLink>
                    </li>
                    <li>
                        <NavLink to="/globe-mail-best-sellers">The Globe &amp; Mail Best Sellers</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ny-times-best-sellers">New York Times Best Sellers</NavLink>
                    </li>
                    <li>
                        <NavLink to="/best-books-month">Best Books of the Month</NavLink>
                    </li>
                    <li>
                        <NavLink to="/childrens-books">Children's Books</NavLink>
                    </li>
                    <li>
                        <NavLink to="/textbooks">Textbooks</NavLink>
                    </li>
                </ul>
                :
                (queryID === "/your-store") ?
                <ul className="subNav">
                    <li>
                        <NavLink to="/textbooks">Your Store</NavLink>
                    </li>
                    <li>
                        <NavLink to="/textbooks">Your Browsing History</NavLink>
                    </li>
                    <li>
                        <NavLink to="/textbooks">Recommended For You</NavLink>
                    </li>
                    <li>
                        <NavLink to="/textbooks">Improve Your Recommendations</NavLink>
                    </li>
                    <li>
                        <NavLink to="/textbooks">Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/textbooks">Learn More</NavLink>
                    </li>
                </ul>
                :
                (queryID === "/home-improvement") ? 
                <ul className="subNav">
                    <li>
                        <NavLink to="/home-improvement">Tools &amp; Home Improvement</NavLink>
                    </li>   
                    <li>
                        <NavLink to="/best-sellers">Best Sellers</NavLink>
                    </li>   
                    <li>
                        <NavLink to="/power-and-hand-tools">Power &amp; Hand Tools</NavLink>
                    </li>   
                    <li>
                        <NavLink to="/lighting-and-ceiling-fans">Lighting &amp; Ceiling Fans</NavLink>
                    </li>   
                    <li>
                        <NavLink to="/kitchen-and-bath-fixtures">Kitchen &amp; Bath Fixtures</NavLink>
                    </li>   
                    <li>
                        <NavLink to="/plumbing">Plumbing</NavLink>
                    </li>   
                    <li>
                        <NavLink to="/safety-and-security">Safety &amp; Security</NavLink>
                    </li>   
                    <li>
                        <NavLink to="/smart-home">Smart Home</NavLink>
                    </li>   
                    <li>
                        <NavLink to="/deals">Deals</NavLink>
                    </li>   
                </ul>
                :
                (queryID === "/handmade") ? 
                <ul className="subNav__handMade">
                    <li>
                        <NavLink to="/gifts">
                            <img src={handmade_logo} alt="handmade logo"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/gifts">
                            <span>Gifts</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/gifts">
                            <span>Jewellery</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/gifts">
                            <span>Home Decor</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/gifts">
                            <span>Kitchen &amp; Dining</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/gifts">
                            <span>Clothing, Shoes &amp; Accessories</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/gifts">
                            <span>Sell on Handmade</span>
                        </NavLink>
                    </li>
                </ul>
                :
                (queryID === "/amazon-hub" || queryID === "/shop-with-points") ? 
                <ul className="subNav">
                    <li>
                        <NavLink to="/todays-deals"><b>Today's Deals</b></NavLink>
                    </li>
                    <li>
                        <NavLink to="/watched-deals">Watched Deals</NavLink>
                    </li>
                    <li>
                        <NavLink to="/outlet-deals">Outlet Deals</NavLink>
                    </li>
                    <li>
                        <NavLink to="/warehouse-deals">Warehouse Deals</NavLink>
                    </li>
                    <li>
                        <NavLink to="/coupons">Coupons</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ebook-deals">eBook Deals</NavLink>
                    </li>
                    <li>
                        <NavLink to="/subscribe-and-save">Subscribe &amp; Save</NavLink>
                    </li>
                </ul>
                :                
                // <ul className="subNav">
                //     {
                //         subMenu.map((obj, index) => {
                //             // Hide amazon.ca except on 'your_account' page
                //             if (index === 0) {
                //                 return (
                //                     <li className={(queryID === "/your_account") ? "" : "d-none"}>
                //                         <NavLink to={obj.href}>{obj.text}</NavLink>
                //                     </li>
                //                 )
                //             } else if (index === 1) {
                //                 return (
                //                     <li>
                //                         <NavLink to={obj.href} className={(queryID === "/order-history" || queryID === "/prime" ) ? "active" : ""}>{obj.text}</NavLink>
                //                     </li>
                //                 )
                //             } else if (index === 2) {
                //                 return (
                //                     <li className={(queryID === "/your_account") ? "d-none" : ""}>
                //                         <NavLink to={obj.href}>{obj.text}</NavLink>
                //                     </li>
                //                 )
                //             } else {
                //                 return (
                //                     <li>
                //                         <NavLink to={obj.href}>{obj.text}</NavLink>
                //                     </li>
                //                 )
                //             }
                //         })
                //     }
                // </ul>
                ""
            }
        </nav>
    )
}

export default SubNav
