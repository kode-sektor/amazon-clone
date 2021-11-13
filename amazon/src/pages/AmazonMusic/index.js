import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import CarouselMusic from '../../components/UI/Carousel/CarouselMusic'
import Slider from '../../components/UI/Carousel/Carousel'

import { BsChevronDown } from 'react-icons/bs'

import amazon_music from '../../images/amazon-music.svg'

import order from '../../images/order.png'
import security from '../../images/security.png'
import prime from '../../images/prime.png'
import address from '../../images/address.png'
import payment from '../../images/payment.png'
import gift_card from '../../images/gift-card.png'

import ameriwood_lumina from '../../images/products/ameriwood-home-lumina-fireplace-tv-stand-white.jpg'
import modern_cube from '../../images/products/baxton-studio-siskal-modern-cube-ottoman-white-set-of-2.jpg'
import monterey_tv_stand from '../../images/products/convenience-concepts-151401W-designs2Go-monterey-tv-stand.jpg'
import frosted_endtable from '../../images/products/global-furniture-clear-frosted-occasional-end-table.jpg'
import leather_swivel from '../../images/products/furmax-bar-stools-modern-pu-leather-swivel.jpg'
import faux_leather from '../../images/products/best-choice-products-faux-leather-modern-convertible.jpg'

import npr_news_now from '../../images/npr-news-now.jpg'
import sweet_home_alabama from '../../images/songs/sweet-home-alabama.jpg'

import './index.css'

const AmazonMusic = () => {

    const [dropdown, setDropdown] = useState(false)

    const toggleDropdown = (e) => {
        e.preventDefault()
        setDropdown(!dropdown)
    }

    return (
        <section className="amazonMusic--page">
            <header className="amazon__music">
                <nav className="amazon__musicNav">
                    <ul>
                        <li>
                            <Link to="/" className="amazon__musicNavHome d-block">
                                <img src={amazon_music} alt="Amazon Music" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="amazon__musicBtn">
                                <span className="amazon__musicBtn__homeIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="rgba(26, 210, 251, 0.75)" id="ic_navigation_home" d="M21.343,8.661 L13.448,1.556 C12.625,0.815 11.375,0.815 10.552,1.556 L2.657,8.661 C2.238,9.039 2,9.564 2,10.113 L2,20 C2,21.105 2.943,22 4.105,22 L9,22 L9,13 L15,13 L15,22 L19.895,22 C21.057,22 22,21.105 22,20 L22,10.113 C22,9.564 21.762,9.039 21.343,8.661 Z"></path>
                                    </svg>
                                </span>
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="amazon__musicBtn">
                                <span className="amazon__musicBtn__homeIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" version="1.1" viewBox="0 0 24 24">
                                        <path fill="#fff" d="M12,9.68863193 C13.1573913,9.68863193 14.1134972,10.6020281 14.1944489,11.7492889 L14.2,11.9071193 L14.2,17.4533378 C14.2,18.5475987 13.4037717,19.463433 12.3667003,19.6407885 L12.3665112,21.1558585 C13.3394287,21.1807028 14.1004206,21.3049072 14.1909654,21.4962817 L14.2,21.5350631 L14.2,22.6161974 C14.2,22.8540469 13.21,23 12,23 C10.8572222,23 9.91067901,22.8698134 9.80903464,22.6549788 L9.8,22.6161974 L9.8,21.5350631 C9.8,21.321744 10.5963251,21.1823434 11.6334888,21.1558585 L11.6332997,19.6407885 C10.6465065,19.4720314 9.87776986,18.634664 9.80555108,17.6111682 L9.8,17.4533378 L9.8,11.9071193 C9.8,10.6869513 10.79,9.68863193 12,9.68863193 Z M12,1 C18.0654,1 23,5.97495798 23,12.092437 C23,14.2976134 22.3587,16.4295798 21.1465,18.255395 C20.8088,18.7645378 20.1257,18.9009748 19.6208,18.560437 C19.1159,18.2187899 18.9806,17.5299496 19.3183,17.0208067 C20.2874,15.5621513 20.8,13.8561345 20.8,12.092437 C20.8,7.19956303 16.8521,3.21848739 12,3.21848739 C7.1479,3.21848739 3.2,7.19956303 3.2,12.092437 C3.2,13.8550252 3.7126,15.561042 4.6828,17.0208067 C5.0205,17.5299496 4.8852,18.2187899 4.3814,18.560437 C4.1933,18.6868908 3.9799,18.7478992 3.7698,18.7478992 C3.4156,18.7478992 3.0669,18.5748571 2.8546,18.255395 C1.6413,16.4284706 1,14.2965042 1,12.092437 C1,5.97495798 5.9346,1 12,1 Z M12,5.43697479 C15.6399,5.43697479 18.6,8.42194958 18.6,12.092437 C18.6,13.0186555 18.4141,13.9138151 18.0489,14.7557311 C17.8685,15.1716975 17.4648,15.4201681 17.0402,15.4201681 C16.8928,15.4201681 16.7432,15.3902185 16.6002,15.3269916 C16.0436,15.0807395 15.7895,14.4262857 16.0337,13.8650084 C16.2768,13.3059496 16.4,12.7091765 16.4,12.092437 C16.4,9.64544538 14.4266,7.65546218 12,7.65546218 C9.5734,7.65546218 7.6,9.64544538 7.6,12.092437 C7.6,12.7091765 7.7232,13.3059496 7.9652,13.8661176 C8.2094,14.427395 7.9553,15.0818487 7.3976,15.3269916 C6.8421,15.5754622 6.1931,15.3170084 5.9489,14.7546218 C5.5848,13.9127059 5.4,13.0175462 5.4,12.092437 C5.4,8.42194958 8.3601,5.43697479 12,5.43697479 Z"></path>
                                    </svg>
                                </span>
                                PODCASTS
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="amazon__musicBtn" onClick={(e) => toggleDropdown(e)}>
                                <span className="amazon__musicBtn__homeIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="#fff" id="ic_navigation_mymusic" fill-rule="nonzero" d="M9,15 L9,20 C9,21.105 8.105,22 7,22 C5.895,22 5,21.105 5,20 L5,15 C5,13.895 5.895,13 7,13 C8.105,13 9,13.895 9,15 Z M17,13 C15.895,13 15,13.895 15,15 L15,20 C15,21.105 15.895,22 17,22 C18.105,22 19,21.105 19,20 L19,15 C19,13.895 18.105,13 17,13 Z M22,15 L22,13 C22,7.486 17.514,3 12,3 C6.486,3 2,7.486 2,13 L2,15 C1.36,15.64 1,16.509 1,17.414 L1,17.586 C1,18.491 1.36,19.36 2,20 C2,20.553 2.448,21 3,21 C3.552,21 4,20.553 4,20 L4,13 C4,8.589 7.589,5 12,5 C16.411,5 20,8.589 20,13 L20,20 C20,20.553 20.447,21 21,21 C21.553,21 22,20.553 22,20 C22.64,19.36 23,18.491 23,17.586 L23,17.414 C23,16.509 22.64,15.64 22,15 Z"></path>
                                    </svg>
                                </span>
                                LIBRARY
                                <span className="amazon__musicBtnCaret">
                                    <BsChevronDown />
                                </span>
                            </Link>
                            {
                                dropdown && (
                                    <ul className="amazon__musicBtn__dropdown">
                                        <li onClick={(e) => toggleDropdown(e)}>
                                            Music
                                        </li>  
                                        <li onClick={(e) => toggleDropdown(e)}>
                                            Podcasts
                                        </li>  
                                    </ul>
                                )
                            }
                        </li>
                    </ul>
                    <section className="amazon__musicSearch">
                        <form action="">
                            <input type="search" placeholder="Search" />
                            <span className="amazon__musicLens">
                                <svg xmlns="http://www.w3.org/2000/svg"width="24" height="24" viewBox="0 0 24 24">
                                    <path id="ic_navigation_search" fill-rule="nonzero" d="M22.707,21.293 L17.025,15.611 C18.258,14.071 19,12.122 19,10 C19,5.038 14.963,1 10,1 C5.038,1 1,5.038 1,10 C1,14.963 5.038,19 10,19 C12.122,19 14.071,18.258 15.611,17.025 L21.293,22.707 C21.488,22.902 21.744,23 22,23 C22.256,23 22.512,22.902 22.707,22.707 C23.098,22.316 23.098,21.684 22.707,21.293 Z M10,17 C6.14,17 3,13.859 3,10 C3,6.14 6.14,3 10,3 C13.859,3 17,6.14 17,10 C17,13.859 13.859,17 10,17 Z">
                                    </path>
                                </svg>
                            </span>
                        </form>
                    </section>
                    <section className="amazon__settings">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#fff" fill-rule="nonzero" d="M12,8 C9.791,8 8,9.791 8,12 C8,14.209 9.791,16 12,16 C14.209,16 16,14.209 16,12 C16,9.791 14.209,8 12,8 Z M12,14 C10.895,14 10,13.105 10,12 C10,10.895 10.895,10 12,10 C13.105,10 14,10.895 14,12 C14,13.105 13.105,14 12,14 Z" opacity=".5"></path><path fill="#fff" fill-rule="nonzero" d="M22.967,11.224 C22.931,10.79 22.595,10.439 22.168,10.354 L19.702,9.862 C19.552,9.321 19.35,8.803 19.096,8.315 L20.52,6.181 C20.759,5.823 20.754,5.342 20.479,5.01 C20.109,4.562 19.704,4.143 19.268,3.759 C18.937,3.467 18.441,3.453 18.074,3.699 L16.003,5.081 C15.48,4.778 14.924,4.528 14.335,4.348 L13.837,1.851 C13.75,1.416 13.388,1.09 12.946,1.047 C12.634,1.018 12.319,1 12,1 C11.778,1 11.558,1.009 11.34,1.024 C10.88,1.057 10.491,1.377 10.401,1.83 L9.911,4.285 C9.28,4.456 8.678,4.696 8.119,5.007 L6.027,3.611 C5.664,3.368 5.175,3.378 4.843,3.663 C4.42,4.026 4.026,4.421 3.663,4.843 C3.378,5.175 3.368,5.663 3.611,6.027 L5.007,8.119 C4.696,8.678 4.456,9.28 4.285,9.911 L1.83,10.401 C1.377,10.491 1.057,10.88 1.024,11.34 C1.009,11.558 1,11.778 1,12 C1,12.319 1.018,12.634 1.048,12.945 C1.091,13.387 1.416,13.75 1.852,13.836 L4.349,14.334 C4.529,14.923 4.779,15.48 5.082,16.002 L3.7,18.073 C3.455,18.441 3.468,18.936 3.76,19.267 C4.145,19.703 4.563,20.108 5.011,20.478 C5.343,20.752 5.823,20.757 6.182,20.519 L8.316,19.095 C8.804,19.349 9.322,19.551 9.863,19.701 L10.355,22.167 C10.44,22.594 10.791,22.93 11.225,22.966 C11.48,22.988 11.739,23 12,23 C12.336,23 12.667,22.981 12.994,22.948 C13.435,22.903 13.797,22.579 13.884,22.145 L14.384,19.639 C14.886,19.483 15.366,19.278 15.82,19.031 L17.921,20.433 C18.283,20.675 18.77,20.666 19.102,20.385 C19.564,19.993 19.992,19.565 20.384,19.103 C20.665,18.771 20.674,18.284 20.432,17.922 L19.03,15.821 C19.277,15.367 19.482,14.887 19.638,14.385 L22.144,13.885 C22.579,13.798 22.903,13.436 22.947,12.995 C22.981,12.667 23,12.336 23,12 C23,11.739 22.988,11.48 22.967,11.224 Z M12,17 C9.238,17 7,14.762 7,12 C7,9.238 9.238,7 12,7 C14.762,7 17,9.238 17,12 C17,14.762 14.762,17 12,17 Z"></path>
                            </svg>
                        </button>
                    </section>
                </nav>
            </header>
            <main className="amazonMusic--main">
                <CarouselMusic
                    heading={"Popular Podcasts"}
                    slider={
                            [
                                <Slider 
                                    type={"music"}
                                    carouselClass={"music__carousel amzn__carousel"}
                                    count={6}
                                    items={
                                            [
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                            ]
                                    }
                                />
                            ]
                    }               
                />
                <CarouselMusic
                    heading={"Most Popular Podcasts"}
                    slider={
                            [
                                <Slider 
                                    type={"music"}
                                    carouselClass={"music__carousel amzn__carousel"}
                                    count={6}
                                    items={
                                            [
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                            ]
                                    }
                                />
                            ]
                    }               
                />
                <CarouselMusic
                    heading={"Top True Crime Podcasts"}
                    slider={
                            [
                                <Slider 
                                    type={"music"}
                                    carouselClass={"music__carousel amzn__carousel"}
                                    count={6}
                                    items={
                                            [
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                            ]
                                    }
                                />
                            ]
                    }               
                />
                <CarouselMusic
                    heading={"Top Comedy Podcasts"}
                    slider={
                            [
                                <Slider 
                                    type={"music"}
                                    carouselClass={"music__carousel amzn__carousel"}
                                    count={6}
                                    items={
                                            [
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                            ]
                                    }
                                />
                            ]
                    }               
                />
                <CarouselMusic
                    heading={"Top Fiction Podcasts"}
                    slider={
                            [
                                <Slider 
                                    type={"music"}
                                    carouselClass={"music__carousel amzn__carousel"}
                                    count={6}
                                    items={
                                            [
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                            ]
                                    }
                                />
                            ]
                    }               
                />
                <CarouselMusic
                    heading={"Top Health & Fitness Podcasts"}
                    slider={
                            [
                                <Slider 
                                    type={"music"}
                                    carouselClass={"music__carousel amzn__carousel"}
                                    count={6}
                                    items={
                                            [
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                            ]
                                    }
                                />
                            ]
                    }               
                />
                <CarouselMusic
                    heading={"Top Leisure Podcasts"}
                    slider={
                            [
                                <Slider 
                                    type={"music"}
                                    carouselClass={"music__carousel amzn__carousel"}
                                    count={6}
                                    items={
                                            [
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                            ]
                                    }
                                />
                            ]
                    }               
                />
                <CarouselMusic
                    heading={"Top Stations"}
                    slider={
                            [
                                <Slider 
                                    type={"music"}
                                    carouselClass={"music__carousel amzn__carousel"}
                                    count={6}
                                    items={
                                            [
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                                {
                                                    href: '/',
                                                    src: npr_news_now,
                                                    altText: "NPR News Now",
                                                    caption: "NPR News Now",
                                                    tags: "NPR"
                                                },
                                            ]
                                    }
                                />
                            ]
                    }               
                />
                <section>
                    <CarouselMusic
                        heading={"Top Songs"}
                        type={"music-nonagon"}
                        slider={
                                [
                                    <Slider 
                                        type={"music-nonagon"}
                                        items={
                                                [
                                                    {
                                                        href: '/',
                                                        src: sweet_home_alabama,
                                                        altText: "Sweet Home Alabama",
                                                        caption: "Sweet Home Alabama",
                                                        tags: "Lynyrd Skynyrd"
                                                    },
                                                    {
                                                        href: '/',
                                                        src: sweet_home_alabama,
                                                        altText: "Sweet Home Alabama",
                                                        caption: "Sweet Home Alabama",
                                                        tags: "Lynyrd Skynyrd"
                                                    },
                                                    {
                                                        href: '/',
                                                        src: sweet_home_alabama,
                                                        altText: "Sweet Home Alabama",
                                                        caption: "Sweet Home Alabama",
                                                        tags: "Lynyrd Skynyrd"
                                                    },
                                                    {
                                                        href: '/',
                                                        src: sweet_home_alabama,
                                                        altText: "Sweet Home Alabama",
                                                        caption: "Sweet Home Alabama",
                                                        tags: "Lynyrd Skynyrd"
                                                    },
                                                    {
                                                        href: '/',
                                                        src: sweet_home_alabama,
                                                        altText: "Sweet Home Alabama",
                                                        caption: "Sweet Home Alabama",
                                                        tags: "Lynyrd Skynyrd"
                                                    },
                                                    {
                                                        href: '/',
                                                        src: sweet_home_alabama,
                                                        altText: "Sweet Home Alabama",
                                                        caption: "Sweet Home Alabama",
                                                        tags: "Lynyrd Skynyrd"
                                                    },
                                                    {
                                                        href: '/',
                                                        src: sweet_home_alabama,
                                                        altText: "Sweet Home Alabama",
                                                        caption: "Sweet Home Alabama",
                                                        tags: "Lynyrd Skynyrd"
                                                    },
                                                    {
                                                        href: '/',
                                                        src: sweet_home_alabama,
                                                        altText: "Sweet Home Alabama",
                                                        caption: "Sweet Home Alabama",
                                                        tags: "Lynyrd Skynyrd"
                                                    },
                                                    {
                                                        href: '/',
                                                        src: sweet_home_alabama,
                                                        altText: "Sweet Home Alabama",
                                                        caption: "Sweet Home Alabama",
                                                        tags: "Lynyrd Skynyrd"
                                                    },
                                                    {
                                                        href: '/',
                                                        src: sweet_home_alabama,
                                                        altText: "Sweet Home Alabama",
                                                        caption: "Sweet Home Alabama",
                                                        tags: "Lynyrd Skynyrd"
                                                    },
                                                    {
                                                        href: '/',
                                                        src: sweet_home_alabama,
                                                        altText: "Sweet Home Alabama",
                                                        caption: "Sweet Home Alabama",
                                                        tags: "Lynyrd Skynyrd"
                                                    },
                                                    {
                                                        href: '/',
                                                        src: sweet_home_alabama,
                                                        altText: "Sweet Home Alabama",
                                                        caption: "Sweet Home Alabama",
                                                        tags: "Lynyrd Skynyrd"
                                                    },
                                                    {
                                                        href: '/',
                                                        src: sweet_home_alabama,
                                                        altText: "Sweet Home Alabama",
                                                        caption: "Sweet Home Alabama",
                                                        tags: "Lynyrd Skynyrd"
                                                    },
                                                    {
                                                        href: '/',
                                                        src: sweet_home_alabama,
                                                        altText: "Sweet Home Alabama",
                                                        caption: "Sweet Home Alabama",
                                                        tags: "Lynyrd Skynyrd"
                                                    },
                                                    {
                                                        href: '/',
                                                        src: sweet_home_alabama,
                                                        altText: "Sweet Home Alabama",
                                                        caption: "Sweet Home Alabama",
                                                        tags: "Lynyrd Skynyrd"
                                                    },
                                                    {
                                                        href: '/',
                                                        src: sweet_home_alabama,
                                                        altText: "Sweet Home Alabama",
                                                        caption: "Sweet Home Alabama",
                                                        tags: "Lynyrd Skynyrd"
                                                    },
                                                    {
                                                        href: '/',
                                                        src: sweet_home_alabama,
                                                        altText: "Sweet Home Alabama",
                                                        caption: "Sweet Home Alabama",
                                                        tags: "Lynyrd Skynyrd"
                                                    },
                                                    {
                                                        href: '/',
                                                        src: sweet_home_alabama,
                                                        altText: "Sweet Home Alabama",
                                                        caption: "Sweet Home Alabama",
                                                        tags: "Lynyrd Skynyrd"
                                                    }
                                                ]
                                        }
                                    />
                                ]
                        }               
                    />
                </section>
            </main>
        </section>
    )
}

export default AmazonMusic
