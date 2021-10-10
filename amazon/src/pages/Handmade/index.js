import React from 'react'
import { Link } from 'react-router-dom'

import { Navbar, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';

import Layout from '../../components/Layout'
import { ApplyToSellBtn } from '../../components/UI/Button'
import Accordian from '../../components/Footer/ModalLang/Accordion'

import { StickHeader } from '../../utilities/functions'

import amazon_handmade from '../../images/amazon-handmade.svg'
import marketplace_illustrations from '../../images/marketplace-illustrations.svg'
import entrepreneurs_bulb from '../../images/entrepreneurs-bulb.svg'
import enhanced_content from '../../images/enhanced-content.png'
import special_product from '../../images/special-product.svg'
import marketplace_spotlight from '../../images/marketplace-creative-illustrations-spotlight.svg'
import handmade_globe from '../../images/handmade-globe.svg'

import './index.css'

const Handmade = () => {

    const HandmadePage = () => (
        <div className="amazon__handmade a__container">
            {/* Do not make the 'StickHeader' function wrapper wrap the whole page */}
            <StickHeader>
                <Navbar color="light" light expand="md" className={`amazon__handmadeHeader`}>
                    <div className="has__max__width">
                        <h1 className="amazon__handmadeHeading">
                            <NavbarText>Amazon Handmade</NavbarText>
                        </h1>
                        <Nav className="amazon__handmadeNavlinks" navbar>
                            <NavItem>
                                <NavLink href="/">Benefits</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">FAQs</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Explore our store</NavLink>
                            </NavItem>
                        </Nav>
                        <div className="amazon__applyToSell">
                            <ApplyToSellBtn/>
                        </div>
                    </div>
                </Navbar>
            </StickHeader>
            <main>
                <section className="amazon__handmadeCta">
                    <section className="amazon__amazon__handmadeLogo">
                        <img src={amazon_handmade} alt="amazon handmade logo" />
                    </section>
                    <section>
                        <div className="has__max__width flex-grow-1">
                            <h1 className="amazon__handmadeTitle">
                                Reach millions of customers with Amazon Handmade
                            </h1>
                        </div>
                    </section>
                    <p className="amazon__handmadeText text-center w-100">
                        Join our Artisan-only community on Amazon and sell your handcrafted goods online 
                    </p>
                    <div className="amazon__handmadeCtaBtn text-center w-100">
                        <ApplyToSellBtn
                            size={"large"}
                        />
                    </div>
                </section>
                <section className="amazon__handmadeWhy">
                    <div className="has__max__width flex-grow-1">
                        <section className="amazon__handmadeWhyPara col-6 has__max__width mx-0">
                            <h2 className="amazon__handmadeHeading">
                                Why Handmade?
                            </h2>
                            <p className="amazon__handmadeWhyLead">
                                At Amazon, we obsess over Customers and their desire for a trusted destination for handcrafted goods, which is what prompted us to start Handmade. Artisans from over 80 countries are following their passion and selling their craft on Amazon. Together, we are growing craft communities and successful businesses.
                            </p>
                        </section>
                    </div>
                </section>
                <section className="amazon__handmadeContent">
                    <div className="has__max__width">
                        <section className="amazon__handmadeBenefits">
                            <h2 className="amazon__handmadeHeading">
                                Handmade benefits
                            </h2>
                            <section className="amazon__handmadeCards">
                                <section className="amazon__handmadeCard col-4 text-center">
                                    <div className="amazon__handmadeCardImg">
                                        <img src={marketplace_illustrations} title={"marketplace illustrations"}/>
                                    </div>
                                    <h3 className="amazon__handmadeCardHead">
                                        Artisan only
                                    </h3>
                                    <p className="amazon__handmadeCardPara">
                                        We have an Artisan application and audit process to ensure we're building a shop of genuinely handcrafted goods.
                                    </p>
                                </section>
                                <section className="amazon__handmadeCard col-4 text-center">
                                    <div className="amazon__handmadeCardImg">
                                        <img src={entrepreneurs_bulb} title={"entrepreneurs bulb"}/>
                                    </div>
                                    <h3 className="amazon__handmadeCardHead">
                                        No hidden fees
                                    </h3>
                                    <p className="amazon__handmadeCardPara">
                                        Joining Handmade, creating your shop, and listing products is free. When you make a sale, Handmade will deduct a 12% referral fee.
                                    </p>
                                </section>
                                <section className="amazon__handmadeCard col-4 text-center">
                                    <div className="amazon__handmadeCardImg">
                                        <img src={enhanced_content} title={"enhanced content"}/>
                                    </div>
                                    <h3 className="amazon__handmadeCardHead">
                                        Custom Profile
                                    </h3>
                                    <p className="amazon__handmadeCardPara">
                                        Your Artisan profile has a custom URL to make it easy for Customers to find your shop.
                                    </p>
                                </section>
                            </section>
                        </section>
                        <section className="amazon__handmadePrograms">
                            <div className="amazon__handmadeProgramsHeading">
                                <h4 className="amazon__handmadeHeading">
                                    Programs available to help your business thrive
                                </h4>
                            </div>
                            <section className="amazon__programRow amazon__fulfilment d-flex align-items-center">
                                <section className="fulfilmentText">
                                    <div className="fulfilmentTextHeading">
                                        <h4 className="amazon__handmadeHeading">
                                            <span>
                                                Fulfillment by Amazon (FBA)
                                            </span>
                                        </h4>
                                    </div>
                                    <p className="amazon__handmadeCardPara">
                                        Get a Prime badge on your listings and scale your business to reach more customers. Amazon has one of the most advanced fulfillment networks in the world. Let Amazon ship your orders with FBA so you can focus on creating your products.
                                    </p>
                                </section>
                                <section className="amazon__fulfilmentImg">
                                    <img src={special_product} alt="marketplace creative illustration special product"/>
                                </section>
                            </section>
                            <section className="amazon__programRow d-flex align-items-center">
                                <section className="amazon__fulfilmentImg">
                                    <img src={marketplace_spotlight} alt="marketplace creative illustration spotlight"/>
                                </section>
                                <section className="fulfilmentText">
                                    <div className="fulfilmentTextHeading">
                                        <h4 className="amazon__handmadeHeading">
                                            <span>
                                                Sponsored Ads
                                            </span>
                                        </h4>
                                    </div>
                                    <p className="amazon__handmadeCardPara">
                                        Our advertising solutions let you reach and engage with Customers at every stage of their journey—from awareness to purchase and beyond. Ads appear right where customers will see them, such as the first page of search results or product detail pages.
                                    </p>
                                </section>
                            </section>
                            <section className="amazon__sellNAmerica amazon__programRow d-flex align-items-center">
                                <section className="fulfilmentText">
                                    <div className="fulfilmentTextHeading">
                                        <h4 className="amazon__handmadeHeading">
                                            <span>
                                                Sell across North America
                                            </span>
                                        </h4>
                                    </div>
                                    <p className="amazon__handmadeCardPara">
                                        You have the option to sign up once and sell on all three of Amazon's North American stores. Manage your business from a single account.
                                    </p>
                                </section>
                                <section className="amazon__fulfilmentImg">
                                    <img src={handmade_globe} alt="globe"/>
                                </section>
                            </section>
                            <section className="amazon__programRow d-flex align-items-center">
                                <section className="amazon__fulfilmentImg">
                                    <img src={marketplace_spotlight} alt="marketplace creative illustration spotlight"/>
                                </section>
                                <section className="fulfilmentText">
                                    <div className="fulfilmentTextHeading">
                                        <h4 className="amazon__handmadeHeading">
                                            <span>
                                                Sponsored Ads
                                            </span>
                                        </h4>
                                    </div>
                                    <p className="amazon__handmadeCardPara">
                                        Our advertising solutions let you reach and engage with Customers at every stage of their journey—from awareness to purchase and beyond. Ads appear right where customers will see them, such as the first page of search results or product detail pages.
                                    </p>
                                </section>
                            </section>
                        </section>
                    </div>
                </section>
                <section className="amazon__readyToJoin">
                    <div className="has__max__width">
                        <section className="amazon__ready d-flex align-items-center">
                            <section className="amazon__readySteps col-6 offset-6">
                                <h4 className="amazon__readyHeading">
                                    Ready to join?
                                </h4>
                                <section>
                                    <section className="amazon__readyList">
                                        <strong className="amazon__readyListSteps">STEP ONE</strong>
                                        <Link to="/" className="popup__link d-block">
                                            Apply now to become an Artisan
                                        </Link>
                                    </section>
                                    <section className="amazon__readyList">
                                        <strong className="amazon__readyListSteps">STEP TWO</strong>
                                        <Link to="/" className="popup__link d-block disabled">
                                            Create a Seller Central account and complete registration
                                        </Link>
                                    </section>
                                    <section className="amazon__readyList">
                                        <strong className="amazon__readyListSteps">STEP THREE</strong>
                                        <Link to="/" className="popup__link d-block disabled">
                                            List your products
                                        </Link>
                                    </section>
                                    <section className="amazon__readyList">
                                        <strong className="amazon__readyListSteps">STEP FOUR</strong>
                                        <Link to="/" className="popup__link d-block disabled">
                                            Leverage programs to manage and grow your business
                                        </Link>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </div>
                </section>
                <section className="amazon__handmadeFaq">
                    <div className="has__max__width">
                        <h4 className="amazon__readyHeading">
                            Frequently asked questions
                        </h4>
                        <Accordian 
                            items={
                                    [
                                        {
                                            heading: "Who can sell on Handmade?",
                                            panel: 
                                                    <p>
                                                        The Handmade store is available for Artisans to sell their handcrafted products to millions of Amazon customers all over the world. Amazon uses an application process to add new Artisans to the Handmade category to ensure customers are able to buy with confidence. Learn more about our <Link to="/">Handmade guidelines here.</Link>
                                                    </p>
                                        },
                                        {
                                            heading: "How do your fees work?",
                                            panel: 
                                                    <p>
                                                        During registration, you will register with a Professional Selling plan that provides you with Handmade specific tools and support to grow your business. While the Professional Selling plan costs CAD $29.99 per month for an Amazon Seller, this monthly fee is waived for Handmade Artisans. <Link to="/">Learn more about our fees here.</Link>
                                                    </p>
                                        },
                                        {
                                            heading: "What do I need to do to create a Handmade shop?",
                                            panel: 
                                                    <p>
                                                        When you're approved to sell your handcrafted goods, we’ll need some information from you in order to complete registration and list a product. You will register with a Professional Selling plan (if you don’t have one already), set up your shop location, choose your business name, set up your payment method and provide a credit card number (so that we can verify your identity). Once you’ve completed your registration, resources are available to create your first listing, set up your Artisan profile, and manage your business.
                                                    </p>
                                        },
                                        {
                                            heading: "What categories are available on Handmade?",
                                            panel: 
                                                    <p>
                                                        Handmade is open to Artisans who make Accessories, Artwork, Baby, Beauty & Personal Care, Clothing, Shoes & Handbags, Home, Outdoor & Home Care, Jewellery & Watches, Kitchen & Dining, Pet Supplies, Sporting Goods, Stationery & Party Supplies and Toys & Games. If you don’t see your category listed, this means we do not allow the sale of those items in the Handmade store. Popular categories not currently available include Digital or Downloadable Products, Food & Grocery items, and Electronics. You may consider registering to sell and listing your products in another Amazon store, or check back in the future to see if the category becomes available on Handmade.
                                                    </p>
                                        },
                                        {
                                            heading: "What if I already sell online?",
                                            panel: 
                                                    <p>
                                                        No problem! You can list your products with Handmade too! If you already sell with Amazon as a Professional or Individual seller, instructions will be provided to add Handmade to your account once you complete your application and are approved to sell.
                                                    </p>
                                        },
                                        {
                                            heading: "Do I have to reapply if I already sell with Handmade in another country?",
                                            panel: 
                                                    <p>
                                                        If you already sell with Handmade on Amazon.com, you can also sell on all three North American stores (Amazon.com, Amazon.ca, Amazon.com.mx) without reapplying. Log in to Seller Central and choose your desired country from the drop down menu on the upper right corner of your screen. In addition, you can register to sell on our five European stores (Amazon.co.uk, Amazon.de, Amazon.fr, Amazon.it, Amazon.es). Please note, you will be responsible for complying with all rules and regulations for each country that you do business in. <Link to="/">Learn more about global selling here.</Link>
                                                    </p>
                                        },
                                        {
                                            heading: "I already applied. What's the status of my application?",
                                            panel: 
                                                    <p>
                                                        <Link to="/">You can check your application status with your email and confirmation code here.</Link>
                                                    </p>
                                        }
                                    ]
                            }
                        />
                        <section className="amazon__handMadeFaqCta">
                            <h5 className="amazon__handMadeFaqTitle">
                                Have a craft you're ready to share with the world? 
                                Submit your application & join Handmade!
                            </h5>
                            <section className="amazon__handMadeFaqBtn">
                                <ApplyToSellBtn
                                    size="lg"
                                />
                            </section>
                        </section>
                    </div>                    
                </section>
            </main>
        </div>
    )

    return (
        <Layout>
            <HandmadePage />
        </Layout>
    )
}

export default Handmade
