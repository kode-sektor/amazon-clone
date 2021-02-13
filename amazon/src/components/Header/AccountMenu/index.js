import React from 'react'
import './index.css'

const AccountMenu = () => {
    return (
        <>
            <div className="nav__arrow null" style={{position: "absolute", left: "628px"}}>
                <div className="nav__arrow__inner"></div>
            </div>
            <div className="navigationbar__account__flyout__content">
                <div className="navigationbar__buy__again">
                    <h3 className="navigationbar__account__heading">Buy it again</h3>
                    <ul className="navigationbar__recent__purchases">
                        <li>
                            <div className="navigationbar__recent__grid">
                                <div className="navigationbar__recent__grid__inner">
                                    <div className="navigationbar__recent__avatar">
                                        <a href="">
                                            <img alt="" src="https://images-na.ssl-images-amazon.com/images/I/71b2NGKl2iL._AC_UL75_SR75,75_.jpg" className="a-dynamic-image" height="75" width="75"/>
                                        </a>
                                    </div>
                                    <div className="navigationbar__recent__details">
                                        <a className="navigationbar__avatar__link" href="#">
                                            Listerine Cool Mint Antiseptic Mouthwash for Gingivitis and Bad…
                                        </a>
                                        <div className="navigationbar__recent__pricing d-none">
                                            <a title="4.8 out of 5 stars" href="/product-reviews/B00PQKRJY4/ref=pd_nav_hcs">
                                                <i className="navigationbar__recent__icon">
                                                    <span className="navigationbar__recent__icon__alt">4.8 out of 5 stars</span>
                                                </i>
                                            </a>
                                            <a className="navigationbar__review__no" href="/product-reviews/B00PQKRJY4">811</a>
                                        </div>
                                        <div className="w-100">
                                            <a className="a__text__normal" href="/Listerine-Antiseptic-Mouthwash-Gingivitis-Breath/dp/B00PQKRJY4/ref=pd_nav">
                                                <span className="a__size__base a__color__price">
                                                    <span className="">CDN$7.96</span>
                                                </span>
                                            </a>   
                                        </div>
                                        <div className="navigationbar__cart__form">
                                            <form method="post" action="/gp/item-dispatch/ref=pd_nav">
                                                <input type="hidden" name="session-id" value="138-430-95" />
                                                <input type="hidden" name="quantity.B00PQKRJY4" value="1" /> 
                                                <input type="hidden" name="asin.B00PQKRJY4" value="B00PQKRJY4" /> 
                                                <input type="hidden" name="offeringID.B00PQKRJY4" value="" /> 
                                                <input type="hidden" name="discoveredAsins.1" value="B00PQKRJY4" /> 
                                                <input type="hidden" name="CSRF" value="" />
                                                
                                                <span className="a__button a__button__primary a__button__small">
                                                    <span className="a__button__inner">
                                                        <input name="submit.addToCart" className="a__button__input" type="submit" value="Add to Cart" />
                                                        <span className="a__button__text" aria-hidden="true">Add to Cart</span>
                                                    </span>
                                                </span>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="see__more__link">
                        <a href="http://www.amazon.ca/gp/buyagain">View All &amp; Manage</a>
                    </div>
                </div>
                <div className="navigationbar__wishlist">
                    <h3 className="navigationbar__account__heading">Your Lists</h3>
                    <div className="navigationbar__account__empty">
                        <span className="navigationbar__account__empty__heading">Oops!</span>
                        <p className="navigationbar__account__empty__text">Your list is empty</p>
                        <a href="/gp/registry/wishlist/?ref_=nav_err_empty_wishlist" className="navigationbar__account__empty__button">
                            <span>Your Wish List</span>
                        </a>
                    </div>
                    <a href="/gp/registry/wishlist?triggerElementID=createList" className="navigationbar__account__empty__link">
                        <span>Create a Wish List</span>
                    </a>
                    <a href="/gp/registry/search.html?type=wishlist" className="navigationbar__account__empty__link">
                        <span>Find a Wish List</span>
                    </a> 
                    <a href="/wishlist/universal?ref_=nav_ListFlyout_gno_listpop_uwl" className="navigationbar__account__empty__link">
                        <span>Wish from Any Website</span>
                    </a> 
                    <a href="/gcx/-/gfhz/?_encoding=UTF8&amp;ref_=nav_wishlist_gf" className="navigationbar__account__empty__link">
                        <span>Find a Gift</span>
                    </a>
                    <a href="/baby-reg/homepage?ref_=nav_ListFlyout_gno_listpop_br" className="navigationbar__account__empty__link">
                        <span>Baby Registry</span>
                    </a>
                    <a href="/wedding/home?ref_=nav_ListFlyout_wr" className="navigationbar__account__empty__link">
                        <span>Wedding Registry</span>
                    </a> 
                    <a href="/discover" className="navigationbar__account__empty__link">
                        <span>Discover Your Style</span>
                    </a> 
                    <a href="/showroom?ref_=nav_ListFlyout_srm_your_desk_wl_ca" className="navigationbar__account__empty__link">
                        <span>Explore Showroom</span>
                    </a>
                </div>
                <div className="navigationbar__your__account">
                    <h3 className="navigationbar__account__heading">Your Account</h3>
                    <a href="/gp/css/homepage.html?ref_=nav_AccountFlyout_ya" className="navigationbar__account__empty__link">
                        <span>Your Account</span>
                    </a> 
                    <a id="nav_prefetch_yourorders" href="/gp/css/order-history?ref_=nav_AccountFlyout_orders" className="navigationbar__account__empty__link">
                        <span>Your Orders</span>
                    </a>
                    <a href="/gp/yourstore?ref_=nav_AccountFlyout_recs" className="navigationbar__account__empty__link">
                        <span>Your Recommendations</span>
                    </a> 
                    <a href="/auto-deliveries?ref_=nav_AccountFlyout_sns" className="navigationbar__account__empty__link">
                        <span>Your Subscribe &amp; Save Items</span>
                    </a> 
                    <a href="/gp/primecentral?ref_=nav_AccountFlyout_prime" className="navigationbar__account__empty__link">
                        <span>Your Prime Membership</span>
                    </a> 
                    <a href="/hz5/yourmembershipsandsubscriptions?ref_=nav_AccountFlyout_digital_subscriptions" className="navigationbar__account__empty__link">
                        <span>Memberships &amp; Subscriptions</span>
                    </a> 
                    <a href="/dp/B07MJM4F44?plattr=CACBCCNAVACC&amp;ref_=nav_cbcc_ca_account" className="navigationbar__account__empty__link">
                        <span>Your Amazon Credit Card</span>
                    </a> 
                    <a href="/business/register/org/landing?ref_=nav_AccountFlyout_b2b_reg" className="navigationbar__account__empty__link">
                        <span>Register for a Business Account</span>
                    </a>
                    <a href="/hz/mycd/myx?ref_=nav_AccountFlyout_myk" className="navigationbar__account__empty__link">
                        <span>Manage Your Content and Devices</span>
                    </a>
                    <a href="https://music.amazon.ca?ref=nav_youraccount_cldplyr" className="navigationbar__account__empty__link">
                        <span>Your Music Library</span>
                    </a>
                    <a href="/gp/video/ssoredirect?pvp=/ref%3Dnav_youraccount_apv&amp;ref_=nav_AccountFlyout__apv" className="navigationbar__account__empty__link">
                        <span>Your Prime Video</span>
                    </a> 
                    <a href="/clouddrive?ref_=nav_AccountFlyout_clddrv" className="navigationbar__account__empty__link">
                        <span>Your Amazon Drive</span>
                    </a> 
                    <a href="/gp/mas/your-account/myapps?ref_=nav_AccountFlyout_aad" className="navigationbar__account__empty__link">
                        <span>Your Apps &amp; Devices </span>
                    </a>
                    <a id="nav-item-switch-account" href="#" className="navigationbar__account__empty__link">
                        <span>Switch Accounts</span>
                    </a> 
                    <a id="nav-item-signout" href="#" className="navigationbar__account__empty__link">
                        <span>Sign Out</span>
                    </a>
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
