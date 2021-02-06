import React from 'react'

const AccountMenu = () => {
    return (
        <section className="nav-coreFlyout nav-flyout" style={{display: "none", position: "absolute", top: "-5px", left: "791.516px"}}>
            <div class="nav-arrow null" style={{position: "absolute", left: "361.531px"}}>
                <div class="nav-arrow-inner"></div>
            </div>
            <div class="nav-template nav-flyout-content">
                <div id="nav-al-container">
                    <div id="nav-al-wishlist" class="nav-al-column nav-tpl-itemList nav-flyout-content nav-flyout-accessibility">
                        <div class="nav-title" id="nav-al-title">Your Lists</div>
                        <div class="nav-template have-bot-border nav-tpl-flyoutError" id="nav-flyout-wl-items" style={{display: "none"}}>
                            <span class="nav-title">Oops!</span>
                            <p class="nav-paragraph">Your list is empty</p>
                            <a href="/gp/registry/wishlist/?ref_=nav_err_empty_wishlist" class="nav-action-button">
                                <span class="nav-action-inner">Your Wish List</span>
                            </a>
                        </div>
                        <a href="/gp/registry/wishlist?triggerElementID=createList&amp;ref_=nav_ListFlyout_gno_createwl" class="nav-link nav-item">
                            <span class="nav-text">Create a Wish List</span>
                        </a>
                        <a href="/gp/registry/search.html?type=wishlist&amp;ref_=nav_ListFlyout_gno_listpop_find" class="nav-link nav-item">
                            <span class="nav-text">Find a Wish List</span>
                        </a> 
                        <a href="/wishlist/universal?ref_=nav_ListFlyout_gno_listpop_uwl" class="nav-link nav-item">
                            <span class="nav-text">Wish from Any Website</span></a> <a href="/gcx/-/gfhz/?_encoding=UTF8&amp;ref_=nav_wishlist_gf" class="nav-link nav-item"><span class="nav-text">Find a Gift</span>
                        </a>
                        <a href="/baby-reg/homepage?ref_=nav_ListFlyout_gno_listpop_br" class="nav-link nav-item">
                            <span class="nav-text">Baby Registry</span>
                        </a>
                        <a href="/wedding/home?ref_=nav_ListFlyout_wr" class="nav-link nav-item">
                            <span class="nav-text">Wedding Registry</span>
                        </a> 
                        <a href="/discover" class="nav-link nav-item">
                            <span class="nav-text">Discover Your Style</span>
                        </a> 
                        <a href="/showroom?ref_=nav_ListFlyout_srm_your_desk_wl_ca" class="nav-link nav-item">
                            <span class="nav-text">Explore Showroom</span>
                        </a>
                    </div>
                    <div id="nav-al-your-account" class="nav-al-column nav-template nav-flyout-content nav-tpl-itemList nav-flyout-accessibility">
                        <div class="nav-title">Your Account</div>
                        <a href="/gp/css/homepage.html?ref_=nav_AccountFlyout_ya" class="nav-link nav-item">
                            <span class="nav-text">Your Account</span>
                        </a> 
                        <a id="nav_prefetch_yourorders" href="/gp/css/order-history?ref_=nav_AccountFlyout_orders" class="nav-link nav-item">
                            <span class="nav-text">Your Orders</span></a>
                            <a href="/gp/yourstore?ref_=nav_AccountFlyout_recs" class="nav-link nav-item">
                                <span class="nav-text">Your Recommendations</span>
                            </a> 
                            <a href="/auto-deliveries?ref_=nav_AccountFlyout_sns" class="nav-link nav-item">
                                <span class="nav-text">Your Subscribe &amp; Save Items</span>
                            </a> 
                            <a href="/gp/primecentral?ref_=nav_AccountFlyout_prime" class="nav-link nav-item">
                                <span class="nav-text">Your Prime Membership</span>
                            </a> 
                            <a href="/hz5/yourmembershipsandsubscriptions?ref_=nav_AccountFlyout_digital_subscriptions" class="nav-link nav-item">
                                <span class="nav-text">Memberships &amp; Subscriptions</span>
                            </a> 
                            <a href="/dp/B07MJM4F44?plattr=CACBCCNAVACC&amp;ref_=nav_cbcc_ca_account" class="nav-link nav-item">
                                <span class="nav-text">Your Amazon Credit Card</span>
                            </a> 
                            <a href="/business/register/org/landing?ref_=nav_AccountFlyout_b2b_reg" class="nav-link nav-item">
                                <span class="nav-text">Register for a Business Account</span>
                            </a>
                            <a href="/hz/mycd/myx?ref_=nav_AccountFlyout_myk" class="nav-link nav-item">
                                <span class="nav-text">Manage Your Content and Devices</span>
                            </a>
                            <a href="https://music.amazon.ca?ref=nav_youraccount_cldplyr" class="nav-link nav-item">
                                <span class="nav-text">Your Music Library</span>
                            </a>
                            <a href="/gp/video/ssoredirect?pvp=/ref%3Dnav_youraccount_apv&amp;ref_=nav_AccountFlyout__apv" class="nav-link nav-item">
                                <span class="nav-text">Your Prime Video</span>
                            </a> 
                            <a href="/clouddrive?ref_=nav_AccountFlyout_clddrv" class="nav-link nav-item">
                                <span class="nav-text">Your Amazon Drive</span>
                            </a> 
                            <a href="/gp/mas/your-account/myapps?ref_=nav_AccountFlyout_aad" class="nav-link nav-item">
                                <span class="nav-text">Your Apps &amp; Devices </span>
                            </a>
                            <a id="nav-item-switch-account" href="#" class="nav-link nav-item">
                                <span class="nav-text">Switch Accounts</span>
                            </a> 
                            <a id="nav-item-signout" href="#" class="nav-link nav-item">
                                <span class="nav-text">Sign Out</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="nav-flyout-buffer-left" style={{left: "-276px"}}></div>
                <div class="nav-flyout-buffer-right"></div>
                <div class="nav-flyout-buffer-top" style={{left: "-266px"}}></div>
                <div class="nav-flyout-buffer-bottom" style={{left: "-266px"}}></div>
                <div class="nav-flyout-sidePanel" style={{width: "240px", display: "block", overflow: "hidden"}}>
                    <div class="nav-template nav-flyout-sidePanel-content">
                        <div id="bia-hcb-widget">
                            <div class="celwidget" cel_widget_id="nav-high-confidence-slot">
                                <h3 class="a-spacing-base">Buy it again</h3>
                                <div class="a-section a-spacing-micro logged-list static-list">
                                    <div class="a-section p13n-sc-list-cells-container">
                                        <ul class="a-unordered-list a-nostyle a-vertical p13n-sc-list-cells">
                                            <li data-fling-container="true" class="a-spacing-medium p13n-sc-list-item">
                                                <span class="a-list-item">
                                                    <div class="a-fixed-left-grid">
                                                        <div class="a-fixed-left-grid-inner" style={{paddingLeft: "87px"}}>
                                                            <div class="a-fixed-left-grid-col" style={{width: "87px", marginLeft: "-87px", float: "left"}}>
                                                                <a class="a-link-normal" href="#">
                                                                    <img alt="" src="" class="a-dynamic-image" height="75" width="75"/>
                                                                </a>
                                                            </div>
                                                            <div class="a-fixed-left-grid-col a-col-right" style={{paddingLeft: "0", float: "left"}}>
                                                                <a class="a-link-normal" href="#">
                                                                    <div class="p13n-sc-truncate-desktop-type2 p13n-sc-truncated" aria-hidden="true" data-rows="3" title="Listerine Cool Mint Antiseptic Mouthwash for Gingivitis and Bad Breath, 1.5L">Listerine Cool Mint Antiseptic Mouthwash for Gingivitis and Bad…</div>
                                                                </a>
                                                                <div class="a-icon-row a-spacing-none">
                                                                    <a class="a-link-normal" title="4.8 out of 5 stars" href="/product-reviews/B00PQKRJY4/ref=pd_nav_hcs">
                                                                        <i class="a-icon a-icon-star a-star-5">
                                                                            <span class="a-icon-alt">4.8 out of 5 stars</span>
                                                                        </i>
                                                                    </a>
                                                                    <a class="a-size-small a-link-normal" href="/product-reviews/B00PQKRJY4">811</a>
                                                                </div>
                                                                <div class="a-row">
                                                                    <a class="a-link-normal a-text-normal" href="/Listerine-Antiseptic-Mouthwash-Gingivitis-Breath/dp/B00PQKRJY4/ref=pd_nav">
                                                                        <span class="a-size-base a-color-price">
                                                                            <span class="p13n-sc-price">CDN$7.96</span>
                                                                        </span>
                                                                    </a>   
                                                                </div>
                                                                <div class="a-section a-spacing-top-micro">
                                                                    <form method="post" action="/gp/item-dispatch/ref=pd_nav" class="a-spacing-none">
                                                                        <input type="hidden" name="session-id" value="138-430-95" />
                                                                        <input type="hidden" name="quantity.B00PQKRJY4" value="1" /> 
                                                                        <input type="hidden" name="asin.B00PQKRJY4" value="B00PQKRJY4" /> 
                                                                        <input type="hidden" name="offeringID.B00PQKRJY4" value="" /> 
                                                                        <input type="hidden" name="discoveredAsins.1" value="B00PQKRJY4" /> 
                                                                        <input type="hidden" name="CSRF" value="" />
                                                                        
                                                                        <span class="a-button a-spacing-top-none a-button-primary a-button-small">
                                                                            <span class="a-button-inner">
                                                                                <input name="submit.addToCart" class="a-button-input" type="submit" value="Add to Cart" />
                                                                                <span class="a-button-text" aria-hidden="true">Add to Cart</span>
                                                                            </span>
                                                                        </span>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </span>
                                            </li>
                                            <li data-fling-container="true" class="a-spacing-medium p13n-sc-list-item">
                                                <span class="a-list-item">
                                                    <div class="a-fixed-left-grid">
                                                        <div class="a-fixed-left-grid-inner" style={{paddinLeft: "87px"}}>
                                                            <div class="a-fixed-left-grid-col a-col-left" style={{width: "87px", marginLeft: "-87px", float: "left"}}>
                                                                <a class="a-link-normal" href="">
                                                                    <img alt="" src="" class="a-dynamic-image p13n-sc-dynamic-image" height="64" width="75">
                                                                </a>
                                                            </div>
                                                            <div class="a-fixed-left-grid-col a-col-right" style={{paddingLeft: "0%", float: "left"}}>
                                                                <a class="a-link-normal" href="#">
                                                                    <div class="p13n-sc-truncated" aria-hidden="true" title="">Hilroy Coil 1-subject Wide Ruled Notebook, 10.5 X 8 Inches, 3 Hole…</div>
                                                                </a>
                                                                <div class="a-icon-row a-spacing-none">
                                                                    <a class="a-link-normal" title="4.7 out of 5 stars" href="/product-reviews/B003M5PCVC/ref=pd_nav_hcs">
                                                                        <i class="a-icon a-icon-star a-star-4-5 aok-align-top">
                                                                            <span class="a-icon-alt">4.7 out of 5 stars</span>
                                                                        </i>
                                                                    </a>
                                                                    <a class="a-size-small a-link-normal" href="/product-reviews/B003M5PCVC/ref=pd_nav_hcs">1,747</a>
                                                                </div>
                                                                <div class="a-row">
                                                                    <a class="a-link-normal a-text-normal" href="#">
                                                                        <span class="a-size-base a-color-price">
                                                                            <span class="p13n-sc-price">CDN$2.27</span>
                                                                        </span>
                                                                    </a>   
                                                                </div>
                                                                <div class="a-section a-spacing-top-micro">
                                                                    <form method="post" action="/gp/item-dispatch/ref=pd_nav_hcs" class="a-spacing-none">
                                                                        <input type="hidden" name="session-id" value="138-4635930-9054335" /> 
                                                                        <input type="hidden" name="quantity.B003M5PCVC" value="2" /> 
                                                                        <input type="hidden" name="asin.B003M5PCVC" value="" />
                                                                        <input type="hidden" name="offeringID.B003M5PCVC" value="" /> 
                                                                        <input type="hidden" name="discoveredAsins.1" value="B003M5PCVC" /> 
                                                                        <input type="hidden" name="CSRF" value="" />
                                                                        <div>Minimum quantity of 2 required.</div>
                                                                        <span class="a-button a-spacing-top-none a-button-primary a-button-small">
                                                                            <span class="a-button-inner">
                                                                                <input name="submit.addToCart" class="a-button-input" type="submit" value="Buy it again (2)" />
                                                                                <span class="a-button-text" aria-hidden="true">Buy it again (2)
                                                                                </span>
                                                                            </span>
                                                                        </span>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="hcb-see-more-link">
                                <a href="http://www.amazon.ca/gp/buyagain">View All &amp; Manage</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AccountMenu
