import React from 'react'

import { Link } from 'react-router-dom'

import './index.css'

import { BtnPrimary } from '../../UI/Button'

const AccountMenu = () => {
    return (
        <>
            <div className="nav__arrow null" style={{ left: "628px" }}>
                <div className="nav__arrow__inner"></div>
            </div>
            <div className="navigationbar__account__flyout__content">
                <div className="navigationbar__buy__again">
                    <h3 className="navigationbar__account__heading mb-0 a__size__medium">Buy it again</h3>
                    <p>
                        <Link to="http://www.amazon.ca/gp/buyagain" className="a__size__base">View All &amp; Manage</Link>
                    </p>
                    <ul className="navigationbar__recent__purchases">
                        <li>
                            <div className="navigationbar__recent__grid">
                                <div className="navigationbar__recent__grid__inner">
                                    <div className="navigationbar__recent__avatar">
                                        <Link to="/">
                                            <img alt="" src="https://images-na.ssl-images-amazon.com/images/I/71b2NGKl2iL._AC_UL75_SR75,75_.jpg" className="a-dynamic-image" height="75" width="75"/>
                                        </Link>
                                    </div>
                                    <div className="navigationbar__recent__details">
                                        <Link to="/" className="navigationbar__avatar__link">
                                            Listerine Cool Mint Antiseptic Mouthwash for Gingivitis and Bad…
                                        </Link>
                                        <div className="navigationbar__recent__pricing d-none">
                                            <Link to="/product-reviews/B00PQKRJY4/ref=pd_nav_hcs" title="4.8 out of 5 stars">
                                                <i className="navigationbar__recent__icon">
                                                    <span className="navigationbar__recent__icon__alt">4.8 out of 5 stars</span>
                                                </i>
                                            </Link>
                                            <Link to="/product-reviews/B00PQKRJY4" className="navigationbar__review__no">811</Link>
                                        </div>
                                        <div className="w-100">
                                            <Link to="/Listerine-Antiseptic-Mouthwash-Gingivitis-Breath/dp/B00PQKRJY4/ref=pd_nav" className="a__text__normal">
                                                <span className="a__size__base a__color__price">
                                                    <span className="">$7.96</span>
                                                </span>&nbsp;
                                                <span className="amzn__prime__badge">
                                                    <span className="amzn__prime__badge__icon"></span>
                                                </span>
                                            </Link>   
                                        </div>
                                        <div className="navigationbar__cart__form">
                                            <form method="post" action="/gp/item-dispatch/ref=pd_nav">
                                                <input type="hidden" name="session-id" value="138-430-95" />
                                                <input type="hidden" name="quantity.B00PQKRJY4" value="1" /> 
                                                <input type="hidden" name="asin.B00PQKRJY4" value="B00PQKRJY4" /> 
                                                <input type="hidden" name="offeringID.B00PQKRJY4" value="" /> 
                                                <input type="hidden" name="discoveredAsins.1" value="B00PQKRJY4" /> 
                                                <input type="hidden" name="CSRF" value="" />
                                                <BtnPrimary/>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="navigationbar__wishlist">
                    <h3 className="navigationbar__account__heading">Your Lists</h3>
                    <div className="navigationbar__account__empty">
                        <span className="navigationbar__account__empty__heading">Oops!</span>
                        <p className="navigationbar__account__empty__text">Your list is empty</p>
                        <Link to="/gp/registry/wishlist/?ref_=nav_err_empty_wishlist" className="navigationbar__account__empty__button">
                            <span>Your Wish List</span>
                        </Link>
                    </div>
                    <Link to="/gp/registry/wishlist?triggerElementID=createList" className="navigationbar__account__empty__link">
                        <span>Create a Wish List</span>
                    </Link>
                    <Link to="/gp/registry/search.html?type=wishlist" className="navigationbar__account__empty__link">
                        <span>Find a Wish List</span>
                    </Link> 
                    <Link to="/wishlist/universal?ref_=nav_ListFlyout_gno_listpop_uwl" className="navigationbar__account__empty__link">
                        <span>Wish from Any Website</span>
                    </Link> 
                    <Link to="/gcx/-/gfhz/?_encoding=UTF8&amp;ref_=nav_wishlist_gf" className="navigationbar__account__empty__link">
                        <span>Find a Gift</span>
                    </Link>
                    <Link to="/baby-reg/homepage?ref_=nav_ListFlyout_gno_listpop_br" className="navigationbar__account__empty__link">
                        <span>Baby Registry</span>
                    </Link>
                    <Link to="/wedding/home?ref_=nav_ListFlyout_wr" className="navigationbar__account__empty__link">
                        <span>Wedding Registry</span>
                    </Link> 
                    <Link to="/discover" className="navigationbar__account__empty__link">
                        <span>Discover Your Style</span>
                    </Link> 
                    <Link to="/showroom?ref_=nav_ListFlyout_srm_your_desk_wl_ca" className="navigationbar__account__empty__link">
                        <span>Explore Showroom</span>
                    </Link>
                </div>
                <div className="navigationbar__your__account">
                    <h3 className="navigationbar__account__heading">Your Account</h3>
                    <Link to="/gp/css/homepage.html?ref_=nav_AccountFlyout_ya" className="navigationbar__account__empty__link">
                        <span>Your Account</span>
                    </Link> 
                    <Link id="nav_prefetch_yourorders" to="/gp/css/order-history?ref_=nav_AccountFlyout_orders" className="navigationbar__account__empty__link">
                        <span>Your Orders</span>
                    </Link>
                    <Link to="/gp/yourstore?ref_=nav_AccountFlyout_recs" className="navigationbar__account__empty__link">
                        <span>Your Recommendations</span>
                    </Link> 
                    <Link to="/auto-deliveries?ref_=nav_AccountFlyout_sns" className="navigationbar__account__empty__link">
                        <span>Your Subscribe &amp; Save Items</span>
                    </Link> 
                    <Link to="/gp/primecentral?ref_=nav_AccountFlyout_prime" className="navigationbar__account__empty__link">
                        <span>Your Prime Membership</span>
                    </Link> 
                    <Link to="/hz5/yourmembershipsandsubscriptions?ref_=nav_AccountFlyout_digital_subscriptions" className="navigationbar__account__empty__link">
                        <span>Memberships &amp; Subscriptions</span>
                    </Link> 
                    <Link to="/dp/B07MJM4F44?plattr=CACBCCNAVACC&amp;ref_=nav_cbcc_ca_account" className="navigationbar__account__empty__link">
                        <span>Your Amazon Credit Card</span>
                    </Link> 
                    <Link to="/business/register/org/landing?ref_=nav_AccountFlyout_b2b_reg" className="navigationbar__account__empty__link">
                        <span>Register for a Business Account</span>
                    </Link>
                    <Link to="/hz/mycd/myx?ref_=nav_AccountFlyout_myk" className="navigationbar__account__empty__link">
                        <span>Manage Your Content and Devices</span>
                    </Link>
                    <Link to="https://music.amazon.ca?ref=nav_youraccount_cldplyr" className="navigationbar__account__empty__link">
                        <span>Your Music Library</span>
                    </Link>
                    <Link to="/gp/video/ssoredirect?pvp=/ref%3Dnav_youraccount_apv&amp;ref_=nav_AccountFlyout__apv" className="navigationbar__account__empty__link">
                        <span>Your Prime Video</span>
                    </Link> 
                    <Link to="/clouddrive?ref_=nav_AccountFlyout_clddrv" className="navigationbar__account__empty__link">
                        <span>Your Amazon Drive</span>
                    </Link> 
                    <Link to="/gp/mas/your-account/myapps?ref_=nav_AccountFlyout_aad" className="navigationbar__account__empty__link">
                        <span>Your Apps &amp; Devices </span>
                    </Link>
                    <Link to="#" id="nav-item-switch-account" className="navigationbar__account__empty__link">
                        <span>Switch Accounts</span>
                    </Link> 
                    <Link to="#" id="nav-item-signout" className="navigationbar__account__empty__link">
                        <span>Sign Out</span>
                    </Link>
                </div>
            </div>
            <div className="nav-flyout-buffer-left" style={{left: "-276px"}}></div>
            <div className="nav-flyout-buffer-right"></div>
            <div className="nav-flyout-buffer-top" style={{left: "-266px"}}></div>
            <div className="nav-flyout-buffer-bottom" style={{left: "-266px"}}></div>
        </>
    )
}

export default AccountMenu
