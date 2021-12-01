import React from 'react'
import { Link } from 'react-router-dom'

import { BrowseBoxPrimary, BrowseCheckbox, BrowseBoxPlain } from '../../components/UI/BrowseBox'
import CarouselDetailed from '../../components/UI/Carousel/CarouselDetailed'
import Slider from '../../components/UI/Carousel/Carousel'
import { Grid_One } from '../../components/UI/Grid'
import { CardSix, CardSeven, CardEight } from '../../components/UI/Card'
import SearchResult from '../../components/UI/SearchResult'
import { SeeAllResults } from '../../components/UI/Button'
import BirthForm from '../../components/UI/BirthForm'
import Rating from '../../components/UI/Rating'  

import Layout from '../../components/Layout/index'

import shop_baby_store from '../../images/banner/shop-baby-store.png'
import baby_registry_and_amazon_family from '../../images/baby-registry-and-amazon-family.png'

import university_personal_care from '../../images/banner/university-personal-care.jpg'
import white_usb_charger from '../../images/products/white-usb-charger.jpg'
import loreal_paris from "../../images/banner/l'oreal-paris.jpg"

import cetaphil from '../../images/brand/cetaphil.jpg'
import duracell_coppertop from '../../images/products/duracell-coppertop-aa-alkaline-batteries.jpg'
import shop_cat from '../../images/shop-cat.jpg'
import laptops_and_tablets from '../../images/laptops-and-tablets.jpg'
import kitchen from '../../images/kitchen.jpg'
import home_improvement from '../../images/home-improvement.jpg'
import vacuums from '../../images/vacuums.jpg'
import digital_camera from '../../images/digital-camera.jpg'
import video_games from '../../images/video-games.jpg'
import automative from '../../images/automative.jpg'
import musical_instruments from '../../images/musical-instruments.jpg'
import tv from '../../images/tv.jpg'
import baby from '../../images/baby.jpg'
import clothing_accessories from '../../images/clothing-accessories.jpg'
import lawn_garden from '../../images/lawn-garden.jpg'
import amazon_warehouse_deals from '../../images/amazon-warehouse-deals.jpg'

import './index.css'
    
const WarehouseDeals = () => {
    
    const WarehouseDealPage = () => (
        <>
             <section className="a__container">
                <section className="d-flex mx-0 flex-fill">
                    <section className="fashion__browsebox browserBox">
                        <BrowseBoxPlain
                            title={"Department"}
                            links={
                                [
                                    {
                                        text : "Home & Kitchen",
                                        indentClass : "a__indent__1"
                                    },
                                    {
                                        href : "/",
                                        text : "Tools & Home Improvement",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Automotive",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Electronics",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Sports & Outdoors",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Industrial & Scientific",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Clothing, Shoes & Jewellery",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Patio, Lawn & Garden",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Books",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Office Products",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Pet Supplies",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Music",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Health & Personal Care",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Musical Instruments, State & Studio",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Toys & Games",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Baby",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Beauty",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Video Games",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Everything Else",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Movies & TV",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Grocery",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Classical",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "VHS",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Apps & Games",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Software",
                                        indentClass : "a__indent__2"
                                    }
                                ]
                            }
                        />
                    </section>
                    <section className="warehouse__category apBrowse flex-fill">
                        <h1><b>Amazon Warehouse | Great deals on quality used products</b></h1>
                        <p>Shop millions of pre-owned, used, and open box items including: used computers and tablets, used home and kitchen, used digital cameras, used Amazon devices, used unlocked cell phones and used TVs.</p>
                        <div className="bxc__grid__container bxc__grid__container__width__1500">
                            <section className="bxc__grid__row bxc__grid__row__light">
                                <section className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light">
                                            <img src={shop_cat} alt="Amazon Warehouse Shop by Category"/>
                                        </div>
                                    </div>
                                </section>
                            </section>
                            <section className="bxc__grid__row bxc__grid__row__light">
                                <section className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light text-center position-relative">
                                            <img src={laptops_and_tablets} alt="Laptops &amp; Tablets"/>
                                            <div className="bxc__grid__overlay">
                                                <Link to="/" className="bxc__grid__overlay__link">
                                                    <div className="bxc__grid__overlay__content">
                                                        <div className="bxc__grid__text text-center bxc__grid__overlay--background">
                                                            <h4>Laptops &amp; Tablets</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light text-center position-relative">
                                            <img src={kitchen} alt="Home &amp; Kitchen"/>
                                            <div className="bxc__grid__overlay">
                                                <Link to="/" className="bxc__grid__overlay__link">
                                                    <div className="bxc__grid__overlay__content">
                                                        <div className="bxc__grid__text text-center bxc__grid__overlay--background">
                                                            <h4>Home &amp; Kitchen</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light text-center position-relative">
                                            <img src={home_improvement} alt="Home Improvement"/>
                                            <div className="bxc__grid__overlay">
                                                <Link to="/" className="bxc__grid__overlay__link">
                                                    <div className="bxc__grid__overlay__content">
                                                        <div className="bxc__grid__text text-center bxc__grid__overlay--background">
                                                            <h4>Home Improvement</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light text-center position-relative">
                                            <img src={vacuums} alt="Vacuums and floor care"/>
                                            <div className="bxc__grid__overlay">
                                                <Link to="/" className="bxc__grid__overlay__link">
                                                    <div className="bxc__grid__overlay__content">
                                                        <div className="bxc__grid__text text-center bxc__grid__overlay--background">
                                                            <h4>Vacuums</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </section>
                            <section className="bxc__grid__row bxc__grid__row__light">
                                <section className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light text-center position-relative">
                                            <img src={digital_camera} alt="Digital Camera"/>
                                            <div className="bxc__grid__overlay">
                                                <Link to="/" className="bxc__grid__overlay__link">
                                                    <div className="bxc__grid__overlay__content">
                                                        <div className="bxc__grid__text text-center bxc__grid__overlay--background">
                                                            <h4>Digital Camera</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light text-center position-relative">
                                            <img src={video_games} alt="Video Games"/>
                                            <div className="bxc__grid__overlay">
                                                <Link to="/" className="bxc__grid__overlay__link">
                                                    <div className="bxc__grid__overlay__content">
                                                        <div className="bxc__grid__text text-center bxc__grid__overlay--background">
                                                            <h4>Home &amp; Kitchen</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light text-center position-relative">
                                            <img src={automative} alt="Automotive"/>
                                            <div className="bxc__grid__overlay">
                                                <Link to="/" className="bxc__grid__overlay__link">
                                                    <div className="bxc__grid__overlay__content">
                                                        <div className="bxc__grid__text text-center bxc__grid__overlay--background">
                                                            <h4>Automotive</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light text-center position-relative">
                                            <img src={musical_instruments} alt="Musical Instruments"/>
                                            <div className="bxc__grid__overlay">
                                                <Link to="/" className="bxc__grid__overlay__link">
                                                    <div className="bxc__grid__overlay__content">
                                                        <div className="bxc__grid__text text-center bxc__grid__overlay--background">
                                                            <h4>Musical Instruments</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </section>
                            <section className="bxc__grid__row bxc__grid__row__light">
                                <section className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light text-center position-relative">
                                            <img src={tv} alt="Television"/>
                                            <div className="bxc__grid__overlay">
                                                <Link to="/" className="bxc__grid__overlay__link">
                                                    <div className="bxc__grid__overlay__content">
                                                        <div className="bxc__grid__text text-center bxc__grid__overlay--background">
                                                            <h4>TV</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light text-center position-relative">
                                            <img src={baby} alt="Baby Products"/>
                                            <div className="bxc__grid__overlay">
                                                <Link to="/" className="bxc__grid__overlay__link">
                                                    <div className="bxc__grid__overlay__content">
                                                        <div className="bxc__grid__text text-center bxc__grid__overlay--background">
                                                            <h4>Baby Products</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light text-center position-relative">
                                            <img src={clothing_accessories} alt="Clothing &amp; Accessories"/>
                                            <div className="bxc__grid__overlay">
                                                <Link to="/" className="bxc__grid__overlay__link">
                                                    <div className="bxc__grid__overlay__content">
                                                        <div className="bxc__grid__text text-center bxc__grid__overlay--background">
                                                            <h4>Clothing &amp; Accessories</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light text-center position-relative">
                                            <img src={lawn_garden} alt="Lawn &amp; Garden"/>
                                            <div className="bxc__grid__overlay">
                                                <Link to="/" className="bxc__grid__overlay__link">
                                                    <div className="bxc__grid__overlay__content">
                                                        <div className="bxc__grid__text text-center bxc__grid__overlay--background">
                                                            <h4>Lawn &amp; Garden</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </section>
                            <section className="bxc__grid__row bxc__grid__row__light">
                                <section className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__divider">
                                            <hr />
                                        </div>
                                    </div>
                                </section>
                            </section>
                            <section className="bxc__grid__row bxc__grid__row__light">
                                <section className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light text-center position-relative">
                                            <img src={amazon_warehouse_deals} alt="How Amazon Warehouse Deals Works"/>
                                        </div>
                                    </div>
                                </section>
                            </section>
                            <section className="bxc__grid__row bxc__grid__row__light">
                                <section className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__divider">
                                            <hr />
                                        </div>
                                    </div>
                                </section>
                            </section>
                        </div>
                        <section class="text__appendage mt-4">
                            <h2>Frequently Asked Questions About Warehouse Deals</h2>
                            <p>
                                <b>What is Amazon Warehouse Deals?</b>
                            </p>
                            <p>
                                We offer deep discounts on open-box items like TVs, laptops, tablets, home audio, kitchen &amp; dining, home goods, outdoors, and more.
                            </p>
                            <p><b>How do we fit in with Amazon?</b></p>
                            <p>
                                Amazon Warehouse Deals is a part of Amazon.com that specializes in offering great deals on returned, warehouse-damaged, used, or refurbished products that are in good condition but do not meet Amazon.com rigorous standards as "new." We also offer products in new and open-box condition.
                            </p>
                            <p><b>Do Amazon Warehouse Deals' products qualify for Prime or FREE Shipping?</b></p>
                            <p>
                                Yes. Eligible items sold by Amazon Warehouse Deals qualify for Prime or FREE Shipping. 
                            </p>
                            <p><b>Do products come with a warranty?</b></p>
                            <p>
                                No. Used products generally do not come with a manufacturer's warranty but all of our items are backed by Amazon’s return policy. If you would like additional protection, you can purchase a warranty from Square Trade to cover certain items.
                            </p>
                            <p><b>How do you evaluate a product's condition?</b></p>
                            <p>
                                We thoroughly test the functional and physical condition of each item and give the product a specific grade before selling it.
                            </p>
                            <p><b>Your inventory keeps changing, is this normal?</b></p>
                            <p>
                                Yes. Since we specialize in returned, warehouse damaged, used or refurbished products, we can't predict future availability for any item, so check back often and order quickly. 
                            </p>
                        </section>
                        <section>
                            <section className="a__spacing__medium">
                                <div className="a__cardui">
                                    <div className="a__cardui__body">
                                        <SearchResult
                                            range={"1-12"}
                                            total={"40,000"}
                                            title={"Amazon Warehouse Deals"}
                                        />
                                    </div>
                                </div>
                            </section>
                        </section>
                        
                        <section>
                            <CardEight
                                title={"Best Sellers"}
                                link={"/"}
                                items={
                                    [
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                // amazonChoice : true,
                                                dealOftheDay : "Deal of the Day", // Value could also be "Limited Time Deal"
                                                author : "Adele",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                couponDiscount : 8.04,
                                                rating : "4__5",
                                                ratingGraph : <Rating
                                                                dropdown={true}     // dropdown===true shows the footer
                                                                avgRating={4.3}
                                                                totalRating={5}
                                                                globalRatings={"3,670"}
                                                                starFive={85}
                                                                starFour={6}
                                                                starThree={3}
                                                                starTwo={1}
                                                                starOne={4}
                                                            />,
                                                count : "2,817",
                                                prime : true,
                                                buyingPrice : 55.79,
                                                offers : 3,
                                                manufacturer : "Apple",
                                                shipping_link : "/",
                                                arrival_link : "/"
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                // amazonChoice : true,
                                                dealOftheDay : "Deal of the Day", // Value could also be "Limited Time Deal"
                                                author : "Adele",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                couponDiscount : 8.04,
                                                rating : "4__5",
                                                ratingGraph : <Rating
                                                                dropdown={true}     // dropdown===true shows the footer
                                                                avgRating={4.3}
                                                                totalRating={5}
                                                                globalRatings={"3,670"}
                                                                starFive={85}
                                                                starFour={6}
                                                                starThree={3}
                                                                starTwo={1}
                                                                starOne={4}
                                                            />,
                                                count : "2,817",
                                                prime : true,
                                                buyingPrice : 55.79,
                                                offers : 3,
                                                manufacturer : "Apple",
                                                shipping_link : "/",
                                                arrival_link : "/"
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                // amazonChoice : true,
                                                dealOftheDay : "Deal of the Day", // Value could also be "Limited Time Deal"
                                                author : "Adele",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                couponDiscount : 8.04,
                                                rating : "4__5",
                                                ratingGraph : <Rating
                                                                dropdown={true}     // dropdown===true shows the footer
                                                                avgRating={4.3}
                                                                totalRating={5}
                                                                globalRatings={"3,670"}
                                                                starFive={85}
                                                                starFour={6}
                                                                starThree={3}
                                                                starTwo={1}
                                                                starOne={4}
                                                            />,
                                                count : "2,817",
                                                prime : true,
                                                buyingPrice : 55.79,
                                                offers : 3,
                                                manufacturer : "Apple",
                                                shipping_link : "/",
                                                arrival_link : "/"
                                            }
                                        }
                                    ]
                                }
                            />
                        </section>
                        <section>
                            <CardEight
                                title={"Best Sellers"}
                                link={"/"}
                                items={
                                    [
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                // amazonChoice : true,
                                                dealOftheDay : "Deal of the Day", // Value could also be "Limited Time Deal"
                                                author : "Adele",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                couponDiscount : 8.04,
                                                rating : "4__5",
                                                ratingGraph : <Rating
                                                                dropdown={true}     // dropdown===true shows the footer
                                                                avgRating={4.3}
                                                                totalRating={5}
                                                                globalRatings={"3,670"}
                                                                starFive={85}
                                                                starFour={6}
                                                                starThree={3}
                                                                starTwo={1}
                                                                starOne={4}
                                                            />,
                                                count : "2,817",
                                                prime : true,
                                                buyingPrice : 55.79,
                                                offers : 3,
                                                manufacturer : "Apple",
                                                shipping_link : "/",
                                                arrival_link : "/"
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                // amazonChoice : true,
                                                dealOftheDay : "Deal of the Day", // Value could also be "Limited Time Deal"
                                                author : "Adele",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                couponDiscount : 8.04,
                                                rating : "4__5",
                                                ratingGraph : <Rating
                                                                dropdown={true}     // dropdown===true shows the footer
                                                                avgRating={4.3}
                                                                totalRating={5}
                                                                globalRatings={"3,670"}
                                                                starFive={85}
                                                                starFour={6}
                                                                starThree={3}
                                                                starTwo={1}
                                                                starOne={4}
                                                            />,
                                                count : "2,817",
                                                prime : true,
                                                buyingPrice : 55.79,
                                                offers : 3,
                                                manufacturer : "Apple",
                                                shipping_link : "/",
                                                arrival_link : "/"
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                // amazonChoice : true,
                                                dealOftheDay : "Deal of the Day", // Value could also be "Limited Time Deal"
                                                author : "Adele",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                couponDiscount : 8.04,
                                                rating : "4__5",
                                                ratingGraph : <Rating
                                                                dropdown={true}     // dropdown===true shows the footer
                                                                avgRating={4.3}
                                                                totalRating={5}
                                                                globalRatings={"3,670"}
                                                                starFive={85}
                                                                starFour={6}
                                                                starThree={3}
                                                                starTwo={1}
                                                                starOne={4}
                                                            />,
                                                count : "2,817",
                                                prime : true,
                                                buyingPrice : 55.79,
                                                offers : 3,
                                                manufacturer : "Apple",
                                                shipping_link : "/",
                                                arrival_link : "/"
                                            }
                                        }
                                    ]
                                }
                            />
                        </section>
                        <section>
                            <CardEight
                                title={"Best Sellers"}
                                link={"/"}
                                items={
                                    [
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                // amazonChoice : true,
                                                dealOftheDay : "Deal of the Day", // Value could also be "Limited Time Deal"
                                                author : "Adele",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                couponDiscount : 8.04,
                                                rating : "4__5",
                                                ratingGraph : <Rating
                                                                dropdown={true}     // dropdown===true shows the footer
                                                                avgRating={4.3}
                                                                totalRating={5}
                                                                globalRatings={"3,670"}
                                                                starFive={85}
                                                                starFour={6}
                                                                starThree={3}
                                                                starTwo={1}
                                                                starOne={4}
                                                            />,
                                                count : "2,817",
                                                prime : true,
                                                buyingPrice : 55.79,
                                                offers : 3,
                                                manufacturer : "Apple",
                                                shipping_link : "/",
                                                arrival_link : "/"
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                // amazonChoice : true,
                                                dealOftheDay : "Deal of the Day", // Value could also be "Limited Time Deal"
                                                author : "Adele",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                couponDiscount : 8.04,
                                                rating : "4__5",
                                                ratingGraph : <Rating
                                                                dropdown={true}     // dropdown===true shows the footer
                                                                avgRating={4.3}
                                                                totalRating={5}
                                                                globalRatings={"3,670"}
                                                                starFive={85}
                                                                starFour={6}
                                                                starThree={3}
                                                                starTwo={1}
                                                                starOne={4}
                                                            />,
                                                count : "2,817",
                                                prime : true,
                                                buyingPrice : 55.79,
                                                offers : 3,
                                                manufacturer : "Apple",
                                                shipping_link : "/",
                                                arrival_link : "/"
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                // amazonChoice : true,
                                                dealOftheDay : "Deal of the Day", // Value could also be "Limited Time Deal"
                                                author : "Adele",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                couponDiscount : 8.04,
                                                rating : "4__5",
                                                ratingGraph : <Rating
                                                                dropdown={true}     // dropdown===true shows the footer
                                                                avgRating={4.3}
                                                                totalRating={5}
                                                                globalRatings={"3,670"}
                                                                starFive={85}
                                                                starFour={6}
                                                                starThree={3}
                                                                starTwo={1}
                                                                starOne={4}
                                                            />,
                                                count : "2,817",
                                                prime : true,
                                                buyingPrice : 55.79,
                                                offers : 3,
                                                manufacturer : "Apple",
                                                shipping_link : "/",
                                                arrival_link : "/"
                                            }
                                        }
                                    ]
                                }
                            />
                        </section>
                        <section className="last">
                            <CardEight
                                title={"Best Sellers"}
                                link={"/"}
                                items={
                                    [
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                // amazonChoice : true,
                                                dealOftheDay : "Deal of the Day", // Value could also be "Limited Time Deal"
                                                author : "Adele",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                couponDiscount : 8.04,
                                                rating : "4__5",
                                                ratingGraph : <Rating
                                                                dropdown={true}     // dropdown===true shows the footer
                                                                avgRating={4.3}
                                                                totalRating={5}
                                                                globalRatings={"3,670"}
                                                                starFive={85}
                                                                starFour={6}
                                                                starThree={3}
                                                                starTwo={1}
                                                                starOne={4}
                                                            />,
                                                count : "2,817",
                                                prime : true,
                                                buyingPrice : 55.79,
                                                offers : 3,
                                                manufacturer : "Apple",
                                                shipping_link : "/",
                                                arrival_link : "/"
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                // amazonChoice : true,
                                                dealOftheDay : "Deal of the Day", // Value could also be "Limited Time Deal"
                                                author : "Adele",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                couponDiscount : 8.04,
                                                rating : "4__5",
                                                ratingGraph : <Rating
                                                                dropdown={true}     // dropdown===true shows the footer
                                                                avgRating={4.3}
                                                                totalRating={5}
                                                                globalRatings={"3,670"}
                                                                starFive={85}
                                                                starFour={6}
                                                                starThree={3}
                                                                starTwo={1}
                                                                starOne={4}
                                                            />,
                                                count : "2,817",
                                                prime : true,
                                                buyingPrice : 55.79,
                                                offers : 3,
                                                manufacturer : "Apple",
                                                shipping_link : "/",
                                                arrival_link : "/"
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                // amazonChoice : true,
                                                dealOftheDay : "Deal of the Day", // Value could also be "Limited Time Deal"
                                                author : "Adele",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                couponDiscount : 8.04,
                                                rating : "4__5",
                                                ratingGraph : <Rating
                                                                dropdown={true}     // dropdown===true shows the footer
                                                                avgRating={4.3}
                                                                totalRating={5}
                                                                globalRatings={"3,670"}
                                                                starFive={85}
                                                                starFour={6}
                                                                starThree={3}
                                                                starTwo={1}
                                                                starOne={4}
                                                            />,
                                                count : "2,817",
                                                prime : true,
                                                buyingPrice : 55.79,
                                                offers : 3,
                                                manufacturer : "Apple",
                                                shipping_link : "/",
                                                arrival_link : "/"
                                            }
                                        }
                                    ]
                                }
                            />
                        </section>
                        <SeeAllResults />
                    </section>
                </section>
            </section>
        </>
    )

    return (
        <Layout>
            <WarehouseDealPage />
        </Layout>
    )
}

export default WarehouseDeals
