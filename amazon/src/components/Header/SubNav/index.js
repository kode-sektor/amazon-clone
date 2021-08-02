import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { subMenu } from '../../../utilities/data'

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
                <ul className="subNav">
                    {
                        subMenu.map((obj, index) => {
                            // Hide amazon.ca except on 'your_account' page
                            if (index === 0) {
                                return (
                                    <li className={(queryID === "/your_account") ? "" : "d-none"}>
                                        <NavLink to={obj.href}>{obj.text}</NavLink>
                                    </li>
                                )
                            } else if (index === 1) {
                                return (
                                    <li>
                                        <NavLink to={obj.href} className={(queryID === "/your_account") ? "" : "active"}>{obj.text}</NavLink>
                                    </li>
                                )
                            } else if (index === 2) {
                                return (
                                    <li className={(queryID === "/your_account") ? "d-none" : ""}>
                                        <NavLink to={obj.href}>{obj.text}</NavLink>
                                    </li>
                                )
                            } else {
                                return (
                                    <li>
                                        <NavLink to={obj.href}>{obj.text}</NavLink>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            }
        </nav>
    )
}

export default SubNav
