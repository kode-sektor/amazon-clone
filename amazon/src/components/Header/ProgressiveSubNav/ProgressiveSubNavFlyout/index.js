import React from 'react'
import { Link } from 'react-router-dom'

import all_sales_and_deals from '../../../../images/all-sales-and-deals.jpg'
import shoes_women from '../../../../images/shoes-women.jpg'
import clothing_women from '../../../../images/clothing-women.jpg'
import shoes_men from '../../../../images/shoes-men.jpg'
import clothing_men from '../../../../images/clothing-men.jpg'
import shoes_girls from '../../../../images/shoes-girls.jpg'
import clothing_girls from '../../../../images/clothing-girls.jpg'
import clothing_boys from '../../../../images/clothing-boys.jpg'
import shoes_boys from '../../../../images/shoes-boys.jpg'

import amazon_essentials from '../../../../images/amazon-essentials.jpg'
import good_threads from '../../../../images/good-threads.jpg'
import core_10 from '../../../../images/core-10.jpg'
import mae from '../../../../images/mae.jpg'
import simple_joys from '../../../../images/simple-joys.jpg'
import the_fix from '../../../../images/the-fix.jpg'
import luggage from '../../../../images/luggage.png'

import './index.css'

const SalesAndDeals = ({show}) => {
    return (
        <section className={`progressiveFlyoutNav ${show}`}>
            <div className="progressiveFlyoutNav__content">
                <div className="progressiveFlyoutNav__megaMenu">
                    <ul className="progressiveFlyoutNav__columnNav">
                        <li>
                            <Link to="/">ALL SALES &amp; DEALS</Link>
                        </li>
                        <li>
                            <Link to="/">Women</Link>
                        </li>
                        <li>
                            <Link to="/">Men</Link>
                        </li>
                        <li>
                            <Link to="/">Kids &amp; Baby</Link>
                        </li>
                        <li>
                            <Link to="/">Watches</Link>
                        </li>
                        <li>
                            <Link to="/">Jewelry</Link>
                        </li>
                        <li>
                            <Link to="/">Luggage &amp; Travel Accessories</Link>
                        </li>
                    </ul>
                    <ul className="progressiveFlyoutNav__columnNav text-center">
                        <li>
                            <Link to="/">
                                <img src={all_sales_and_deals} alt="all sales and deals" />
                                <span className="d-block">SHOP ALL FASHION DEALS</span>
                                <span className="font-weight-normal">See more</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

const Women = ({show}) => {
    return (
        <section className={`progressiveFlyoutNav ${show}`}>
            <div className="progressiveFlyoutNav__content">
                <div className="progressiveFlyoutNav__megaMenu">
                    <section className="progressiveFlyoutNav__sectionNav">
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">CLOTHING</Link>
                            </li>
                            <li>
                                <Link to="/">Dresses</Link>
                            </li>
                            <li>
                                <Link to="/">Tops &amp; Tees</Link>
                            </li>
                            <li>
                                <Link to="/">Sweaters</Link>
                            </li>
                            <li>
                                <Link to="/">Jeans</Link>
                            </li>
                            <li>
                                <Link to="/">Pants</Link>
                            </li>
                            <li>
                                <Link to="/">Skirts</Link>
                            </li>
                            <li>
                                <Link to="/">Activewear</Link>
                            </li>
                            <li>
                                <Link to="/">Swimsuits &amp; Cover Ups</Link>
                            </li>
                            <li>
                                <Link to="/">Lingerie, Sleep &amp; Lounge</Link>
                            </li>
                            <li>
                                <Link to="/">Coats &amp; Jackets</Link>
                            </li>
                            <li>
                                <Link to="/">Suits &amp; Blazers</Link>
                            </li>
                            <li>
                                <Link to="/">Socks &amp; Hoisery</Link>
                            </li>
                        </ul>
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">WATCHES</Link>
                            </li>
                            <li>
                                <Link to="/">Luxury</Link>
                            </li>
                            <li>
                                <Link to="/">Sport</Link>
                            </li>
                        </ul>
                    </section>
                    <section className="progressiveFlyoutNav__sectionNav">
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">SHOES</Link>
                            </li>
                            <li>
                                <Link to="/">Athletic</Link>
                            </li>
                            <li>
                                <Link to="/">Boots</Link>
                            </li>
                            <li>
                                <Link to="/">Fashion Sneakers</Link>
                            </li>
                            <li>
                                <Link to="/">Flats</Link>
                            </li>
                            <li>
                                <Link to="/">Outdoor</Link>
                            </li>
                            <li>
                                <Link to="/">Slippers</Link>
                            </li>
                            <li>
                                <Link to="/">Pumps &amp; Heels</Link>
                            </li>
                            <li>
                                <Link to="/">Sandals</Link>
                            </li>
                        </ul>
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">JEWELRY</Link>
                            </li>
                            <li>
                                <Link to="/">Necklaces</Link>
                            </li>
                            <li>
                                <Link to="/">Rings</Link>
                            </li>
                            <li>
                                <Link to="/">Earrings</Link>
                            </li>
                            <li>
                                <Link to="/">Bracelets</Link>
                            </li>
                            <li>
                                <Link to="/">Wedding &amp; Engagement</Link>
                            </li>
                        </ul>
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">HANDBAGS &amp; WALLETS</Link>
                            </li>
                            <li>
                                <Link to="/">Cross-body bags</Link>
                            </li>
                            <li>
                                <Link to="/">Shoulder bags</Link>
                            </li>
                            <li>
                                <Link to="/">Wallets</Link>
                            </li>
                        </ul>
                    </section>
                    <section className="progressiveFlyoutNav__sectionNav">
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">ACCESSORIES</Link>
                            </li>
                            <li>
                                <Link to="/">Scarves &amp; Wraps</Link>
                            </li>
                            <li>
                                <Link to="/">Sunglasses</Link>
                            </li>
                            <li>
                                <Link to="/">Belts</Link>
                            </li>
                        </ul>
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">FEATURED SHOPS</Link>
                            </li>
                            <li>
                                <Link to="/">Petite</Link>
                            </li>
                            <li>
                                <Link to="/">Plus Size</Link>
                            </li>
                            <li>
                                <Link to="/">Maternity</Link>
                            </li>
                            <li>
                                <Link to="/">Resort &amp; Vacation Shop</Link>
                            </li>
                            <li>
                                <Link to="/">Weddings &amp; Special Occasions</Link>
                            </li>
                        </ul>
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">SALES &amp; DEALS</Link>
                            </li>
                        </ul>
                    </section>
                    <ul className="progressiveFlyoutNav__columnNav text-center">
                        <li>
                            <Link to="/">
                                <img src={all_sales_and_deals} alt="all sales and deals" />
                                <span className="d-block">SHOP ALL FASHION DEALS</span>
                                <span className="font-weight-normal">See more</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="progressiveFlyoutNav__columnNav text-center">
                        <li>
                            <Link to="/">
                                <img src={shoes_women} alt="shoes" />
                                <span className="d-block">SHOP ALL FASHION DEALS</span>
                                <span className="font-weight-normal">See more</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="progressiveFlyoutNav__columnNav text-center">
                        <li>
                            <Link to="/">
                                <img src={clothing_women} alt="clothing" />
                                <span className="d-block">SHOP ALL FASHION DEALS</span>
                                <span className="font-weight-normal">See more</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

const Men = ({show}) => {
    return (
        <section className={`progressiveFlyoutNav ${show}`}>
            <div className="progressiveFlyoutNav__content">
                <div className="progressiveFlyoutNav__megaMenu">
                    <section className="progressiveFlyoutNav__sectionNav">
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">CLOTHING</Link>
                            </li>
                            <li>
                                <Link to="/">Shirts</Link>
                            </li>
                            <li>
                                <Link to="/">Hoodies &amp; Sweatshirts</Link>
                            </li>
                            <li>
                                <Link to="/">Sweaters</Link>
                            </li>
                            <li>
                                <Link to="/">Coats &amp; Jackets</Link>
                            </li>
                            <li>
                                <Link to="/">Jeans</Link>
                            </li>
                            <li>
                                <Link to="/">Pants</Link>
                            </li>
                            <li>
                                <Link to="/">Activewear</Link>
                            </li>
                            <li>
                                <Link to="/">Swimwear</Link>
                            </li>
                            <li>
                                <Link to="/">Suits &amp; Sport Coats</Link>
                            </li>
                            <li>
                                <Link to="/">Shorts</Link>
                            </li>
                            <li>
                                <Link to="/">Coats &amp; Jackets</Link>
                            </li>
                            <li>
                                <Link to="/">Sleep &amp; Lounge</Link>
                            </li>
                            <li>
                                <Link to="/">Underwear</Link>
                            </li>
                            <li>
                                <Link to="/">Socks</Link>
                            </li>
                        </ul>
                    </section>
                    <section className="progressiveFlyoutNav__sectionNav">
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">SHOES</Link>
                            </li>
                            <li>
                                <Link to="/">Athletic</Link>
                            </li>
                            <li>
                                <Link to="/">Boots</Link>
                            </li>
                            <li>
                                <Link to="/">Fashion Sneakers</Link>
                            </li>
                            <li>
                                <Link to="/">Loafers &amp; Slip-Ons</Link>
                            </li>
                            <li>
                                <Link to="/">Outdoor</Link>
                            </li>
                            <li>
                                <Link to="/">Slippers</Link>
                            </li>
                            <li>
                                <Link to="/">Oxfords</Link>
                            </li>
                            <li>
                                <Link to="/">Sandals</Link>
                            </li>
                            <li>
                                <Link to="/">Work &amp; Safety</Link>
                            </li>
                        </ul>
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">WATCHES</Link>
                            </li>
                            <li>
                                <Link to="/">Luxury</Link>
                            </li>
                            <li>
                                <Link to="/">Sport</Link>
                            </li>
                            <li>
                                <Link to="/">Earrings</Link>
                            </li>
                        </ul>
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">JEWELRY</Link>
                            </li>
                        </ul>
                    </section>
                    <section className="progressiveFlyoutNav__sectionNav">
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">ACCESSORIES</Link>
                            </li>
                            <li>
                                <Link to="/">Scarves &amp; Wraps</Link>
                            </li>
                            <li>
                                <Link to="/">Sunglasses</Link>
                            </li>
                            <li>
                                <Link to="/">Belts</Link>
                            </li>
                        </ul>
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">FEATURED SHOPS</Link>
                            </li>
                            <li>
                                <Link to="/">Petite</Link>
                            </li>
                            <li>
                                <Link to="/">Plus Size</Link>
                            </li>
                            <li>
                                <Link to="/">Maternity</Link>
                            </li>
                            <li>
                                <Link to="/">Resort &amp; Vacation Shop</Link>
                            </li>
                            <li>
                                <Link to="/">Weddings &amp; Special Occasions</Link>
                            </li>
                        </ul>
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">SALES &amp; DEALS</Link>
                            </li>
                        </ul>
                    </section>
                    <ul className="progressiveFlyoutNav__columnNav text-center">
                        <li>
                            <Link to="/">
                                <img src={all_sales_and_deals} alt="all sales and deals" />
                                <span className="d-block">SHOP ALL FASHION DEALS</span>
                                <span className="font-weight-normal">See more</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="progressiveFlyoutNav__columnNav text-center">
                        <li>
                            <Link to="/">
                                <img src={clothing_men} alt="clothing" />
                                <span className="d-block">CLOTHING</span>
                                <span className="font-weight-normal">See more</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="progressiveFlyoutNav__columnNav text-center">
                        <li>
                            <Link to="/">
                                <img src={shoes_men} alt="shoes" />
                                <span className="d-block">SHOES</span>
                                <span className="font-weight-normal">See more</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

const Girls = ({show}) => {
    return (
        <section className={`progressiveFlyoutNav ${show}`}>
            <div className="progressiveFlyoutNav__content">
                <div className="progressiveFlyoutNav__megaMenu">
                    <section className="progressiveFlyoutNav__sectionNav">
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">CLOTHING</Link>
                            </li>
                            <li>
                                <Link to="/">Dresses</Link>
                            </li>
                            <li>
                                <Link to="/">Clothing Sets</Link>
                            </li>
                            <li>
                                <Link to="/">Tops &amp; Tees</Link>
                            </li>
                            <li>
                                <Link to="/">Sweaters</Link>
                            </li>
                            <li>
                                <Link to="/">Jeans</Link>
                            </li>
                            <li>
                                <Link to="/">Pants &amp; Capris</Link>
                            </li>
                            <li>
                                <Link to="/">Leggings</Link>
                            </li>
                            <li>
                                <Link to="/">Sleepwear &amp; Roses</Link>
                            </li>
                            <li>
                                <Link to="/">Coats &amp; Jackets</Link>
                            </li>
                            <li>
                                <Link to="/">Swim</Link>
                            </li>
                            <li>
                                <Link to="/">Underwear</Link>
                            </li>
                            <li>
                                <Link to="/">Socks &amp; Tights</Link>
                            </li>
                        </ul>
                    </section>
                    <section className="progressiveFlyoutNav__sectionNav">
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">SHOES</Link>
                            </li>
                            <li>
                                <Link to="/">Athletic</Link>
                            </li>
                            <li>
                                <Link to="/">Boots</Link>
                            </li>
                            <li>
                                <Link to="/">Flats</Link>
                            </li>
                            <li>
                                <Link to="/">Outdoor</Link>
                            </li>
                            <li>
                                <Link to="/">Slippers</Link>
                            </li>
                            <li>
                                <Link to="/">Clogs &amp; Mules</Link>
                            </li>
                            <li>
                                <Link to="/">Sneakers</Link>
                            </li>
                            <li>
                                <Link to="/">Sandals</Link>
                            </li>
                        </ul>
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">JEWELRY</Link>
                            </li>
                        </ul>
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">WATCHES</Link>
                            </li>
                        </ul>
                    </section>
                    <section className="progressiveFlyoutNav__sectionNav">
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">ACCESSORIES</Link>
                            </li>
                        </ul>
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">FEATURED SHOPS</Link>
                            </li>
                            <li>
                                <Link to="/">School Uniforms</Link>
                            </li>
                        </ul>
                    </section>
                    <ul className="progressiveFlyoutNav__columnNav text-center">
                        <li>
                            <Link to="/">
                                <img src={shoes_girls} alt="shoes girls" />
                                <span className="d-block">SHOES</span>
                                <span className="font-weight-normal">See more</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="progressiveFlyoutNav__columnNav text-center">
                        <li>
                            <Link to="/">
                                <img src={clothing_girls} alt="shoes" />
                                <span className="d-block">CLOTHING</span>
                                <span className="font-weight-normal">See more</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

const Boys = ({show}) => {
    return (
        <section className={`progressiveFlyoutNav ${show}`}>
            <div className="progressiveFlyoutNav__content">
                <div className="progressiveFlyoutNav__megaMenu">
                    <section className="progressiveFlyoutNav__sectionNav">
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">CLOTHING</Link>
                            </li>
                            <li>
                                <Link to="/">Clothing Sets</Link>
                            </li>
                            <li>
                                <Link to="/">Tops &amp; Tees</Link>
                            </li>
                            <li>
                                <Link to="/">Button-Down &amp; Dress Shirts</Link>
                            </li>
                            <li>
                                <Link to="/">Hoodies &amp; SweatShirts</Link>
                            </li>
                            <li>
                                <Link to="/">Jeans</Link>
                            </li>
                            <li>
                                <Link to="/">Pants</Link>
                            </li>
                            <li>
                                <Link to="/">Shorts</Link>
                            </li>
                            <li>
                                <Link to="/">Coats &amp; Jackets</Link>
                            </li>
                            <li>
                                <Link to="/">Sleepwear</Link>
                            </li>
                            <li>
                                <Link to="/">Swim</Link>
                            </li>
                            <li>
                                <Link to="/">Underwear</Link>
                            </li>
                            <li>
                                <Link to="/">Socks</Link>
                            </li>
                        </ul>
                    </section>
                    <section className="progressiveFlyoutNav__sectionNav">
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">SHOES</Link>
                            </li>
                            <li>
                                <Link to="/">Athletic</Link>
                            </li>
                            <li>
                                <Link to="/">Boots</Link>
                            </li>
                            <li>
                                <Link to="/">Loafers</Link>
                            </li>
                            <li>
                                <Link to="/">Outdoor</Link>
                            </li>
                            <li>
                                <Link to="/">Oxfords</Link>
                            </li>
                            <li>
                                <Link to="/">Sandals</Link>
                            </li>
                            <li>
                                <Link to="/">School Uniform Shoes</Link>
                            </li>
                        </ul>
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">JEWELRY</Link>
                            </li>
                        </ul>
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">WATCHES</Link>
                            </li>
                        </ul>
                    </section>
                    <section className="progressiveFlyoutNav__sectionNav">
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">ACCESSORIES</Link>
                            </li>
                        </ul>
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">FEATURED SHOPS</Link>
                            </li>
                            <li>
                                <Link to="/">School Uniforms</Link>
                            </li>
                        </ul>
                    </section>
                    <ul className="progressiveFlyoutNav__columnNav text-center">
                        <li>
                            <Link to="/">
                                <img src={shoes_boys} alt="shoes girls" />
                                <span className="d-block">SHOES</span>
                                <span className="font-weight-normal">See more</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="progressiveFlyoutNav__columnNav text-center">
                        <li>
                            <Link to="/">
                                <img src={clothing_boys} alt="clothing boys" />
                                <span className="d-block">CLOTHING</span>
                                <span className="font-weight-normal">See more</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

const Brands = ({show}) => {
    return (
        <section className={`progressiveFlyoutNav ${show}`}>
            <div className="progressiveFlyoutNav__content">
                <div className="progressiveFlyoutNav__megaMenu">
                    <ul className="progressiveFlyoutNav__columnNav text-center">
                        <li>
                            <Link to="/">
                                <img src={amazon_essentials} alt="amazon essentials" />
                                <span className="d-block">AMAZON ESSENTIALS</span>
                                <span className="font-weight-normal">See more</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="progressiveFlyoutNav__columnNav text-center">
                        <li>
                            <Link to="/">
                                <img src={good_threads} alt="good threads" />
                                <span className="d-block">GOODTHREADS</span>
                                <span className="font-weight-normal">See more</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="progressiveFlyoutNav__columnNav text-center">
                        <li>
                            <Link to="/">
                                <img src={core_10} alt="core_10" />
                                <span className="d-block">CORE 10</span>
                                <span className="font-weight-normal">See more</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="progressiveFlyoutNav__columnNav text-center">
                        <li>
                            <Link to="/">
                                <img src={simple_joys} alt="simple joys" />
                                <span className="d-block">SIMPLE JOYS</span>
                                <span className="font-weight-normal">See more</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="progressiveFlyoutNav__columnNav text-center">
                        <li>
                            <Link to="/">
                                <img src={mae} alt="mae" />
                                <span className="d-block">MAE</span>
                                <span className="font-weight-normal">See more</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="progressiveFlyoutNav__columnNav text-center">
                        <li>
                            <Link to="/">
                                <img src={the_fix} alt="mae" />
                                <span className="d-block">THE FIX</span>
                                <span className="font-weight-normal">See more</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

const Luggage = ({show}) => {
    return (
        <section className={`progressiveFlyoutNav ${show}`}>
            <div className="progressiveFlyoutNav__content">
                <div className="progressiveFlyoutNav__megaMenu">
                    <section className="progressiveFlyoutNav__sectionNav">
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">LUGGAGE</Link>
                            </li>
                            <li>
                                <Link to="/">Carry-Ons</Link>
                            </li>
                            <li>
                                <Link to="/">Suitcases</Link>
                            </li>
                            <li>
                                <Link to="/">Tote Bags</Link>
                            </li>
                            <li>
                                <Link to="/">Travel Duffels</Link>
                            </li>
                            <li>
                                <Link to="/">Garment Bags</Link>
                            </li>
                            <li>
                                <Link to="/">Luggage Sets</Link>
                            </li>
                            <li>
                                <Link to="/">Kid's Luggage</Link>
                            </li>
                        </ul>
                    </section>
                    <section className="progressiveFlyoutNav__sectionNav">
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">BACKPACKS</Link>
                            </li>
                            <li>
                                <Link to="/">Casual Daypacks</Link>
                            </li>
                            <li>
                                <Link to="/">Kid's Backpacks</Link>
                            </li>
                        </ul>
                    </section>
                    <section className="progressiveFlyoutNav__sectionNav">
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">BRIEFCASES</Link>
                            </li>
                        </ul>
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">GYM BAGS</Link>
                            </li>
                        </ul>
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">LAPTOP BAGS</Link>
                            </li>
                        </ul>
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">MESSENGER BAGS</Link>
                            </li>
                        </ul>
                        <ul className="progressiveFlyoutNav__columnNav">
                            <li>
                                <Link to="/">TRAVEL ACCESSORIES</Link>
                            </li>
                        </ul>
                    </section>
                    <ul className="progressiveFlyoutNav__columnNav text-center">
                        <li>
                            <Link to="/">
                                <img src={luggage} alt="luggage" />
                                <span className="d-block">SHOP ALL LUGGAGE</span>
                                <span className="font-weight-normal">See more</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export { SalesAndDeals, Women, Men, Girls, Boys, Brands, Luggage }
