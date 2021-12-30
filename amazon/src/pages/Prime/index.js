import React, { createRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import PrimeDropdown from '../../components/UI/PrimeDropdown/index'

import CarouselPrime from '../../components/UI/Carousel/CarouselPrime'
import MiniSlider from '../../components/UI/Carousel/MiniSlider'
import Slider from '../../components/UI/Carousel/Carousel'
import Layout from '../../components/Layout/index'
import { JoinPrimeBtn } from '../../components/UI/Button'
import PrimeHeader from '../../components/UI/PrimeHeader'

import amzn_prime_faded from '../../images/prime-logo.png'

import originals_the_boys from '../../images/amazon-originals-the-boys.jpg'
import amazon_originals_hanna from '../../images/amazon-originals-hanna.jpg'
import amazon_originals_little from '../../images/amazon-originals-little-fires-everywhere.jpg'
import amazon_originals_upload from '../../images/amazon-originals-upload.jpg'

import shawn_mendes_illuminate from '../../images/amazon-music-shawn-mendes-illuminate.jpg'
import imagine_dragons_everything from '../../images/amazon-music-imagine-dragons-everything.jpg'
import amazon_music_everything_now from '../../images/amazon-music-everything-now.jpg'
import amazon_music_more_life from '../../images/amazon-music-more-life.jpg'

import sticky_nav_prime from '../../images/sticky-nav-prime.svg'
import arrow_down from '../../images/arrow-down.svg'

import './index.css'

const Prime = () => {

    const [isSticky, setIsSticky] = useState(false)
    const [slide, setSlide] = useState("")

    const slideUp = () => (slide === "slideUp" || slide === "") ? setSlide("slideDown") : setSlide("slideUp")

    function JoinPrimeDropdown ({ children, sticky=false, className="", ...rest }) {

        const ref = createRef()
    
        // mount 
        useEffect(() => {
            const cachedRef = ref.current,
                // set 'isSticky' state when in view
                observer = new IntersectionObserver(
                    ([e]) => setIsSticky(e.intersectionRatio < 1),
                    {threshold: [1]}
                )
    
            observer.observe(cachedRef)
            
            // unmount
            return function() {
                observer.unobserve(cachedRef)
            }
        }, [ref])
        
        return (
            <section ref={ref} {...rest}>
                {children}
            </section>
        )
    }

    const PrimePage = () => (
        <>
            <section className={`primeTop ${slide}`}>
                <PrimeDropdown
                    slide={slide}
                    slideUp={slideUp}
                />
                <div className={`prime__emergencyHeader ${isSticky ? "isSticky" : ""}`}>
                    <section className="prime__emergencyLogo">
                        <img src={sticky_nav_prime} className="sticky-nav-prime-logo" alt="sticky nav prime" />                
                    </section>
                    <div className="prime__seeMore align-self-end">
                        <div className="prime__emergencyMembership">See more plans</div>
                        <div className="text-center" onClick={slideUp}>
                            <div className="plan__expander__icon">
                                <img src={arrow_down} alt="arrow down"/>
                            </div>
                        </div>
                    </div>
                    <section className="prime__emergencyCtaJoin d-flex align-items-center">
                        <form action="/" method="post" className="prime__joinfrm d-flex justify-content-center mb-0">
                            <JoinPrimeBtn/>
                        </form>
                    </section>
                </div>
            </section>
            <section className="prime a__container px-0 py-0">
                <section className="prime__detail">
                    <section className="prime__emergency">
                        Some delivery times are longer than normal due to COVID-19 related operational disruptions
                    </section>
                </section>
                <section className="prime__detail">
                    <header className="prime__heroHeader">
                        <section className="prime__heroHeader__content">
                            <header className="prime__heroHeader__heading">
                                There's something for everyone with Prime!    
                            </header>
                            <p className="prime__heroHeader__subheadline">
                                Special offer: Try Amazon Prime for one week for just CDN$ 0.99.    
                            </p>
                            <JoinPrimeDropdown>
                                <form action="/" method="post" class="join__prime__form">
                                    <JoinPrimeBtn/>
                                </form>
                            </JoinPrimeDropdown>
                            <p className="cancel__anytime mb-0">
                                After your One-Week CDN$ 0.99 Trial, Amazon Prime is CDN$ 7.99/month (plus any applicable taxes). Cancel anytime. 
                            </p>
                            <ul className="header__links">
                                <li>
                                    <Link to="/joinstudent?ms3_c=c4d58dc57dbce44031e632127ffbd099" title="Are you a student?">
                                        Are you a student?
                                    </Link>
                                </li>
                            </ul>
                            <p className="mb-0 see__more">
                                See more plans
                                <div className="sprite white__arrow__small"></div>
                            </p>
                            <div className="prime__header__logo">
                                <img src={amzn_prime_faded} alt={amzn_prime_faded} />
                            </div>
                        </section>
                    </header>
                    <section className="prime__body">
                        <CarouselPrime
                            slider={
                                <Slider 
                                    type={"prime"}
                                    carouselClass={"primeSlider"}
                                    items={
                                            [
                                                {
                                                    heading: 'Prime Delivery',
                                                    tag: <>
                                                            <div className="carousel-cardHeadline">Free delivery on millions of items.</div>
                                                            <div className="carousel-cardBody">
                                                                Free shipping, millions of items, and flexible delivery options to fit your life
                                                            </div>
                                                            <Link className="carousel-link" to="/">
                                                                Explore Prime Delivery
                                                                <div className="sprite small-arrow"></div>
                                                            </Link>
                                                        </>, 
                                                    carouselStyle: 'ship'
                                                },
                                                {
                                                    heading: 'Prime Video',
                                                    tag: <>
                                                            <div className="carousel-cardHeadline">Stream or download hit movies, TV shows, and more</div>
                                                            <div className="carousel-cardBody">
                                                                As a Prime member, you can watch popular movies and TV shows at no extra cost. Watch on your TV, tablet, mobile device, or on the web. Stream online or download for offline watching.      
                                                            </div>
                                                            <Link className="carousel-link" to="/">
                                                                Explore Prime Video
                                                                <div className="sprite small-arrow"></div>
                                                            </Link>
                                                        </>,
                                                    carouselStyle: 'stream'
                                                },
                                                {
                                                    heading: 'Just With Prime',
                                                    tag: <>
                                                            <div className="carousel-cardHeadline">Exclusive deals available only to Prime members.</div>
                                                            <div className="carousel-cardBody">
                                                                As a Prime member get access to Lightning Deals on Amazon.ca 30 minutes before other customers can access these deals.
                                                            </div>
                                                            <Link className="carousel-link" to="/">
                                                                Shop Prime Member Exclusives
                                                                <div className="sprite small-arrow"></div>
                                                            </Link>
                                                        </>,
                                                    carouselStyle: 'shop'
                                                },
                                                {
                                                    heading: 'Prime Reading',
                                                    tag: <>
                                                            <div className="carousel-cardHeadline">Prime members read for no additional cost.</div>
                                                            <div className="carousel-cardBody">
                                                                As a Prime member, you can read as much as you like from a rotating selection of eBooks. Hundreds of romances, thrillers, children's books and more.
                                                            </div>
                                                            <Link className="carousel-link" to="/">
                                                                Explore Prime Reading
                                                                <div className="sprite small-arrow"></div>
                                                            </Link>
                                                        </>,
                                                    carouselStyle: 'more'
                                                }
                                            ]
                                    }
                                    carouselPanel={"ship"}
                                />
                            }
                        />
                    </section>
                </section>
                <section className="prime__benefits">
                    <header className="prime__benefitsHeadline">
                        Here's a little more about Prime that we think you'll love:
                    </header>
                    <section className="prime__benefitsDelivery">
                        <PrimeHeader
                            header={"Free delivery on millions of items"}
                            blurb={"Free shipping, millions of items, and flexible delivery options to fit your life."}
                            pane={"delivery"}
                        />
                    </section>
                    <section class="prime__originals">
                        <section className="prime__scroller">
                            <section className="prime__videoScroll">
                                <MiniSlider
                                    slider={
                                        <Slider 
                                            type={"mini"}
                                            carouselClass={"miniSlider"}
                                            interval={2000}
                                            items={
                                                    [
                                                        {
                                                            href: '/',
                                                            src: originals_the_boys,
                                                            altText: "Originals the Boys"
                                                        },
                                                        {
                                                            href: '/',
                                                            src: amazon_originals_hanna,
                                                            altText: "Amazon Originals Hanna"
                                                        },
                                                        {
                                                            href: '/',
                                                            src: amazon_originals_little,
                                                            altText: "Amazon Originals Little"
                                                        },
                                                        {
                                                            href: '/',
                                                            src: amazon_originals_upload,
                                                            altText: "Amazon Originals Upload",
                                                        }
                                                    ]
                                            }
                                        />
                                    }
                                />
                            </section>
                        </section>
                        <section className="prime__exclAcess">
                            <PrimeHeader
                                header={"Exclusive access to Amazon Originals"}
                                blurb={"Prime Video is the only place where you can watch Amazon Originals like The Boys, Little Fires Everywhere, Upload, and more."}
                                pane={"video"}
                            />
                        </section>
                    </section>
                    <section className="prime__stream">
                        <PrimeHeader
                            header={"Stream or download hit movies and TV shows"}
                            blurb={"As a Prime member, you can watch popular movies and TV shows at no extra cost, including Amazon Originals. Anytime, anywhere."}
                            pane={"video"}
                        />
                    </section>
                    <section class="prime__originals">
                        <section className="prime__scroller">
                            <section className="prime__videoScroll">
                                <MiniSlider
                                    slider={
                                        <Slider 
                                            type={"mini"}
                                            carouselClass={"miniSlider"}
                                            interval={2000}
                                            items={
                                                    [
                                                        {
                                                            href: '/',
                                                            src: shawn_mendes_illuminate,
                                                            altText: "Shawn Mendes Illuminate"
                                                        },
                                                        {
                                                            href: '/',
                                                            src: imagine_dragons_everything,
                                                            altText: "Imagine Dragons Everything"
                                                        },
                                                        {
                                                            href: '/',
                                                            src: amazon_music_everything_now,
                                                            altText: "Amazon Music Everything Now"
                                                        },
                                                        {
                                                            href: '/',
                                                            src: amazon_music_more_life,
                                                            altText: "Amazon Music More Life"
                                                        }
                                                    ]
                                            }
                                        />
                                    }
                                />
                            </section>
                        </section>
                        <section className="prime__exclAcess">
                            <PrimeHeader
                                header={"Stay on top of the hottest music"}
                                blurb={"These songs and artists are the cream of this month's crop of music new to Prime. Check out the latest from Imagine Dragons, Shawn Mendes, Drake, and Arcade Fire."}
                                pane={"music"}
                            />
                        </section>
                    </section>
                    <section className="prime__read">
                        <PrimeHeader
                            header={"Prime members read for no additional cost"}
                            blurb={"As a Prime member, you can read as much as you like from a rotating selection of eBooks. Hundreds of romances, thrillers, children's books and more."}
                            pane={"reading"}
                        />
                    </section>
                    <section className="prime__cta">
                        <section className="prime__ctaJoin">
                            <h2 className="prime__ctaHeader">There's something for everyone</h2>
                            <form action="/" method="post" className="prime__joinfrm">
                                <JoinPrimeBtn/>
                                <section className="prime__ctaLinks">
                                    <Link to="/">Are you a student? Check out Prime Student.</Link>&nbsp;|&nbsp; 
                                    <Link to="/">Enter a promo code</Link>
                                </section>
                            </form>
                        </section>
                    </section>
                </section>
            </section>
        </>
    )

    return (
        <Layout>
            <PrimePage />
        </Layout>
    )
}

export default Prime
