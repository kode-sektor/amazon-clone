import React, { useState } from 'react'

import { DropdownMenu } from 'reactstrap'


const CouponModal = () => {

    let path = ""
    path = window.location.pathname
    path = (path === "/promotions/details") ? ("promoModal") : ("")

    const [couponShow, setCouponShow] = useState(path)

    return (
        <DropdownMenu className={`coupon__popover ${couponShow}`}>
            <div className="a__popover__wrapper">
                <section className="a__popover__inner">
                    <h3 className="coupon__popoverHeading">
                        <b>Promotion Details</b>
                    </h3>
                    {couponShow !== "promoModal" && <br/>}
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
                        {couponShow === "promoModal" && (<><br/></>)}
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
    )
}

export default CouponModal
