import React, { useState } from 'react'
import { Link, Router } from 'react-router-dom'

import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap'

import Layout from '../../components/Layout'

import scissors from '../../images/scissors-coupon.png'
import verticalBar from '../../images/vertical-bar-separator.jpg'

import subscribe_and_save from '../../images/coupon-subscribe-and-save.jpg'

import './index.css'


const Coupon = () => {

    const [popoverCoupon, setPopoverCoupon] = useState(false)

    const couponEnter = () => setPopoverCoupon(true)
    const couponLeave = () => setPopoverCoupon(false)

    return (
        <Layout>
            <section className="a__container">
                <section className="row mx-0 coupon">
                    <Link to="/">
                        <img src={scissors} className="coupon__scissors"/>
                    </Link>
                    <span>
                        <span className="a__size__large coupon__barText">
                            Kay's Coupons
                        </span>
                        <img alt={verticalBar} src={verticalBar}/>
                        <section className="coupon__columnTxt">
                            <div>
                                <span className="a__size__small a__color__secondary">
                                Clipped
                                </span>
                            </div>
                            <div>
                                <span className="a__size__large a__color__base">0</span>
                                <span className="a__size__large a__color__base"> Coupons</span>  
                            </div>
                        </section>
                        <section className="coupon__barColumnTxt">
                            <span className="a__size__mini a__color__secondary">
                                Discounts applied at checkout or on first subscription. Some coupons may only be available to Prime members.&nbsp;
                                <UncontrolledDropdown onMouseOver={couponEnter} onMouseLeave={couponLeave} isOpen={popoverCoupon} toggle={""} inNavbar>
                                    <DropdownToggle nav tag="span" className="a__color__link">
                                        Some restrictions apply.
                                        <i className="a__icon a__icon__popover"></i>
                                    </DropdownToggle>
                                    <DropdownMenu className="coupon__popover">
                                        <div className="a__popover__wrapper">
                                            <section className="a__popover__inner">
                                                <h3 className="coupon__popoverHeading">
                                                    <b>Promotion Details</b>
                                                </h3>
                                                <br/>
                                                <section>
                                                    <strong>How to Redeem the Coupon:</strong><br/>
                                                    Click on the "Clip Coupon" button for a qualifying item and:
                                                    <ol>
                                                        <li>For a "One Time Delivery" coupon, add the eligible item to your Cart by clicking "Add to Cart" on the item detail page. Your coupon discount will apply to your item and appear on the final order checkout page.</li>
                                                        <li>For a subscription coupon, select "Subscribe & Save" and set delivery quantity and frequency. Your coupon discount will apply to your first item delivery and appear on the "Review Your Subscription Details" page.</li>
                                                    </ol>
                                                </section>
                                                <section className="coupon__terms">
                                                    <strong>Terms and Conditions:</strong>
                                                    <ul>
                                                        <li>
                                                            Coupons are valid for a limited time only. Amazon reserves the right to modify or cancel coupons at any time.
                                                        </li>
                                                        <li>
                                                            You must purchase the qualifying items added to your Cart when the coupon is in effect for the discount to apply.
                                                        </li>
                                                        <li>
                                                            If you later modify or cancel the subscription or delivery date for the qualifying item, the discount will not apply.
                                                        </li>
                                                        <li>
                                                            The coupon applies only to qualifying items displaying the coupon offer.
                                                        </li>
                                                        <li>
                                                            The coupon may only be used on www.amazon.ca for purchase of products shipped and sold by Amazon.ca.
                                                        </li>
                                                        <li>
                                                            The promotion is limited to one coupon per customer.
                                                        </li>
                                                        <li>
                                                            Promotion may not be combinable with mail-in rebates.
                                                        </li>
                                                        <li>
                                                            If you return any of the items purchased with a coupon, the coupon discount or value may be subtracted from the return credit.
                                                        </li>
                                                        <li>
                                                            Applicable shipping and handling charges apply to all products.
                                                        </li>
                                                        <li>
                                                            Add-on Items require a minimum purchase. Click <a href="https://www.amazon.ca/gp/help/customer/display.html/?nodeId=201115110">here</a> for details.
                                                        </li>
                                                        <li>
                                                            Offer good while supplies last.
                                                        </li>
                                                        <li>
                                                            Void where prohibited.
                                                        </li>
                                                        <li>
                                                            Consumer is required to pay any applicable sales tax related to the use of the coupon.
                                                        </li>
                                                    </ul>
                                                </section>
                                            </section>
                                        </div>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </span>
                        </section>
                    </span>
                </section>
                <section className="coupon__items d-flex mx-0 flex-fill">
                    <section className="coupon__subscribe">
                        <img src={subscribe_and_save} width="180" alt="Subscribe &amp; Save" height="120"/>
                    </section>
                    <section className="coupon__apBrowse">
                        <h1 className="coupon__apBrowseHeading">
                            <b>Amazon Coupons</b>
                        </h1>
                        <p className="coupon__paraText">
                            Sign in to see all your available coupons. To redeem a coupon, click on a time-limited coupon below and then add the item to your cart. The discount will be automatically applied when you check out. Some coupons may be available to Prime members only.&nbsp;
                            <Link to="/" className="a__color__link">Some restrictions apply.</Link>
                        </p>
                        <section className="coupon__shoveler">
                            <header className="coupon__shovelerHeading d-flex mx-0 justify-content-space-between">
                                <h3 className="coupon__shovelerHeadingTxt text-bold"> Electronics &amp; Wireless</h3>
                                <section className="coupon__shovelerSort">
                                    <span aria-label="Sort by Category: " className="coupon-shoveler-sort-title"> 
                                        &nbsp;Sort by Category:&nbsp;
                                    </span>
                                    <span className="a-dropdown-container">
                                        <select name="sortDropDown" autocomplete="off" tabindex="0" className="a-native-dropdown">
	                                        <option aria-label="newest" value="newest">Newest</option> 
	                                        <option aria-label="oldest" value="oldest">Oldest</option>
	                                        <option aria-label="expiringSoon" value="expiringSoon">Expiring Soon</option>
	                                        <option aria-label="mostPopular" value="mostPopular" selected="">Most Popular</option> 
	                                        <option aria-label="highToLowDiscountValue" value="highToLowDiscountValue">
	                                            Discount Percentage
                                            </option> 
	                                    </select>
                                        <span tabindex="-1" aria-label="Sort by Category: " className="a-button a-button-dropdown a-button-small coupon-shoveler-sort-select" aria-hidden="true" style="min-width: 0.6%;">
                                            <span className="a-button-inner">
                                                <span class="a-button-text a-declarative" data-action="a-dropdown-button" role="button" aria-hidden="true">
                                                    <span className="a-dropdown-prompt">Most Popular</span>
                                                </span>
                                            <i className="a-icon a-icon-dropdown"></i>
                                            </span>
                                        </span>
                                    </span>
                                </section>
                            </header>
                        </section>
                    </section>
                </section>
            </section>
        </Layout>
    )
}

export default Coupon
