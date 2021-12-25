import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { TabContent, TabPane } from 'reactstrap'

import classnames from 'classnames'

import { BiMenu } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaDesktop, FaUserFriends } from 'react-icons/fa'
import { IoMdFilm } from 'react-icons/io'
import { BiBuildings } from 'react-icons/bi'
import { MdLabelOutline } from 'react-icons/md'
import { RiFileSearchLine, RiPlayCircleLine } from 'react-icons/ri'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { BiBookmarkPlus } from 'react-icons/bi'
import { HiTicket } from 'react-icons/hi'

import Slider from '../../components/UI/Carousel/Carousel'

import imdb from '../../images/imdb.png'
import imdbpro from '../../images/imdbpro.png'
import plus_ribbon from '../../images/plus-ribbon.png'
import the_gilded_age from '../../images/imdb/the-gilded-age.jpg'
import the_gilded_age_lg from '../../images/imdb/the-gilded-age-lg.jpg'
import the_witcher_stars_debate_the_scariest_monster_in_season_two from '../../images/imdb/the-witcher-stars-debate-the-scariest-monster-in-season-two.jpg'
import the_witcher from '../../images/imdb/the-witcher.jpg'
import imdbpro_navbar_menu from '../../images/imdb/imdbpro-navbar-menu.png'
import the_lost_city from '../../images/imdb/the-lost-city.jpg'
import most_memorable_spiderman_moments from '../../images/imdb/most-memorable-spiderman-moments.jpg'
import fantastic_beasts_the_secrets_of_dumbledore from '../../images/imdb/fantastic-beasts-the-secrets-of-dumbledore.jpg'
import house_of_the_dragon_poster from '../../images/imdb/house-of-the-dragon-poster.jpg'
import new_holiday_picks from '../../images/imdb/new-holiday-picks.jpg'
import spiderman_no_way_home from '../../images/imdb/spiderman-no-way-home.jpg'
import woman_in_white from '../../images/imdb/woman-in-white.jpg'
import sarah_jessica_parker from '../../images/imdb/sarah-jessica-parker.jpg'

import './index.css'

const IMDB = () => {

    const [imdbdropdownOpen, setImdbdropdownOpen] = useState(false)    // imdb dropdown
    const [imdbprodropdownOpen, setImdbprodropdownOpen] = useState(false)    // imdbpro dropdown
    const [activeTab, setActiveTab] = useState("prime-video")

    const imdbdropdown = () => setImdbdropdownOpen(imdbdropdownOpen => !imdbdropdownOpen) 
    const imdbprodropdown = () => setImdbprodropdownOpen(imdbprodropdownOpen => !imdbprodropdownOpen) 

    const imdbproEnter = () => setImdbprodropdownOpen(true)
    const imdbproLeave = () => setImdbprodropdownOpen(false)

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab)
    }

    return (
        <div className="imdb--page">
            <header>
                <nav className="imdb__header">
                    <section className="imdb__headerInner">
                        <label htmlFor="" className="imdb__headerMenu imdb__navItem ipc__button ipc__button--default-height ipc__text__button ipc__button--single-padding justify-content-center">
                            <span className="imdb__bars ipc__button__icon--pre ipc__icon">
                                <BiMenu />
                            </span>
                            <div className="ipc__button__text">Menu</div>
                        </label>
                        <Link to="/" className="imdb__navLogo">
                            <img src={imdb} alt="imdb logo" />
                        </Link>
                        <section className="imdb__search">
                            <form action="">
                                <div className="position-relative">
                                    <label htmlFor="" className="ipc__button ipc__text__button ipc__button--single-padding ipc__button--default-height justify-content-center">
                                        <Dropdown isOpen={imdbdropdownOpen} toggle={imdbdropdown}>
                                            <DropdownToggle caret tag="span">
                                                <div className="ipc__button__text">
                                                    All
                                                </div>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>
                                                    <span className="imdb__dropdownIcon d-inline-block">
                                                        <AiOutlineSearch />&nbsp;
                                                    </span>
                                                    All
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <span className="imdb__dropdownIcon d-inline-block">
                                                        <IoMdFilm />&nbsp;
                                                    </span>
                                                    Titles
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <span className="imdb__dropdownIcon d-inline-block">
                                                        <FaDesktop />&nbsp;
                                                    </span>
                                                    TV Episodes
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <span className="imdb__dropdownIcon d-inline-block">
                                                        <FaUserFriends />
                                                    </span>
                                                    Celebs
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <span className="imdb__dropdownIcon d-inline-block">
                                                        <BiBuildings />
                                                    </span>
                                                    Companies
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <span className="imdb__dropdownIcon d-inline-block">
                                                        <MdLabelOutline />
                                                    </span>
                                                    Keywords
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <span className="imdb__dropdownIcon d-inline-block">
                                                        <RiFileSearchLine />
                                                    </span>
                                                    Advanced Search &nbsp;&nbsp;&nbsp;
                                                    <span className="imdb__dropdownIcon d-inline-block">
                                                        <MdKeyboardArrowRight />
                                                    </span>
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </label>
                                </div>
                                <div className="imdb__searchBox">
                                    <input type="search" placeholder="Search IMDb" autoCapitalize="off" autoCorrect="off" />
                                </div>
                                <button className="imdb__lens">
                                    <AiOutlineSearch />
                                </button>
                            </form>
                        </section>
                        <div className="imdb__imdbPro imdb__navItem order-4">
                            <Dropdown isOpen={imdbprodropdownOpen} onMouseOver={imdbproEnter} onMouseLeave={imdbproLeave} toggle={imdbprodropdown}>
                                <DropdownToggle tag="span" className="ipc__button ipc__button--default-height ipc__text__button ipc__button--single-padding px-0">
                                    <div className="ipc__button__text">
                                        <img className="imdb__imdbproImg" src={imdbpro} alt="imdbpro" />
                                    </div>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <div>
                                        <Link to="/" className="imdb__proAdlink">
                                            <div className="d-inline-block">
                                                <img src={imdbpro_navbar_menu} className="imdb__proAdImage" alt="" />
                                            </div>
                                            <section className="imdb__proAdContent">
                                                <div className="imdb__proAdTitle">
                                                    The essential resource for entertainment professionals
                                                </div>
                                                <p>Find industry contacts &amp; talent representation</p>
                                                <p>Access in-development titles not available on IMDb</p>
                                                <p>Get the latest news from leading industry trades</p>
                                                <p>Claim your page and control your brand across IMDb &amp; Amazon</p>
                                                <div className="imdbpro__newBtn">
                                                    <button className="btn">
                                                        Try IMDbPro free
                                                    </button>
                                                </div>
                                            </section>
                                        </Link>
                                    </div>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                        <div className="imdb__navSeparator"></div>
                        <div className="imdb__navItem imdb__navWatchList">
                            <Link to="/" className="ipc__button ipc__button--default-height ipc__text__button ipc__button--single-padding justify-content-center">
                                <span className="ipc__button__icon--pre">
                                    <img src={plus_ribbon} alt="" />
                                </span>&nbsp;
                                <div className="ipc__button__text">
                                    Watchlist
                                </div>
                            </Link>
                        </div>
                        <div className="imdb__navItem order-7">
                            <Link to="/" className="ipc__button ipc__button--default-height ipc__text__button ipc__button--single-padding justify-content-center">
                                <div className="ipc__button__text">Sign In</div>
                            </Link>
                        </div>
                    </section>
                </nav>
            </header>
            <main className="imdb__main">
                <div className="imdb__mainContainer position-relative w-100 mx-auto">
                    <section className="imdb__carousel">
                        <div className="imdb__carouselContainer">
                            <section className="imdb__mainSlider">
                                <Slider 
                                    type={"imdb"}
                                    carouselClass={"amzn__carousel"}
                                    items={
                                            [
                                                {
                                                    href: '/',
                                                    img: <img src={the_gilded_age_lg} alt="the gilded age" />,
                                                    imgAppendix: <img src={the_gilded_age} alt="the gilded age" />,
                                                    caption: "The Gilded Age",
                                                    captionSubheading: "Watch the Trailer",
                                                    runtime: "2:07"
                                                },
                                                {
                                                    href: '/',
                                                    img: <img src={the_witcher_stars_debate_the_scariest_monster_in_season_two} alt="'The Witcher' Stars Debate the Scariest Monster in Season 2" />,
                                                    imgAppendix: <img src={the_witcher} alt="The Witcher" />,
                                                    caption: "'The Witcher' Stars Debate the Scariest Monster in Season 2",
                                                    captionSubheading: "See What's in Store For Ciri and Yennefer",
                                                    runtime: "3:31"
                                                }
                                            ]
                                    }
                                />
                            </section>
                            <section className="imdb__slideList">
                                <h3 className="imdb__slideListHeading imdb__upNext">
                                    Up Next
                                </h3>
                                <ul className="imdb__galleryList">
                                    <li>
                                        <figure className="ipc__media ipc__media--baseAlt">
                                            <img className="h-100" src={the_lost_city} alt="The Lost City" />
                                        </figure>
                                        <Link to="/" className="imdb__galleryListLink">
                                            <section className="imdb__galleryListPlay">
                                                <div className="imdb__carouselCirclePlay d-inline-flex display-5">
                                                    <RiPlayCircleLine />
                                                </div>
                                                <span className="imdb__galleryRuntime">
                                                    2:29
                                                </span>
                                            </section>
                                            <section className="imdb__galleryTitle">
                                                Sandra Bullock and Channing Tatum Team Up in 'The Lost City'
                                            </section>
                                            <section className="imdb__galleryCaption">
                                                Watch the Trailer
                                            </section>
                                        </Link>
                                    </li>
                                    <li>
                                        <figure className="ipc__media ipc__media--baseAlt">
                                            <img className="h-100" src={most_memorable_spiderman_moments} alt="Most Memorable Spider-Man Moments" />
                                        </figure>
                                        <Link to="/" className="imdb__galleryListLink">
                                            <section className="imdb__galleryListPlay">
                                                <div className="imdb__carouselCirclePlay d-inline-flex display-5">
                                                    <RiPlayCircleLine />
                                                </div>
                                                <span className="imdb__galleryRuntime">
                                                    2:26
                                                </span>
                                            </section>
                                            <section className="imdb__galleryTitle">
                                                Spider-Man's Greatest Movie Moments Ranked
                                            </section>
                                            <section className="imdb__galleryCaption">
                                                Count Down the 8 Best Franchise Moments
                                            </section>
                                        </Link>
                                    </li>
                                    <li>
                                        <figure className="ipc__media ipc__media--baseAlt">
                                            <img className="h-100" src={fantastic_beasts_the_secrets_of_dumbledore} alt="Fantastic Beasts: The Secrets of Dumbledore" />
                                        </figure>
                                        <Link to="/" className="imdb__galleryListLink">
                                            <section className="imdb__galleryListPlay">
                                                <div className="imdb__carouselCirclePlay d-inline-flex display-5">
                                                    <RiPlayCircleLine />
                                                </div>
                                                <span className="imdb__galleryRuntime">
                                                    2:25
                                                </span>
                                            </section>
                                            <section className="imdb__galleryTitle">
                                                'Fantastic Beasts: The Secrets of Dumbledore'
                                            </section>
                                            <section className="imdb__galleryCaption">
                                                Watch the Official Trailer
                                            </section>
                                        </Link>
                                    </li>
                                </ul>
                                <h3 className="imdb__browseTrailers">
                                    Browse trailers 
                                    <span>
                                        <MdKeyboardArrowRight /> 
                                    </span>
                                </h3>
                            </section>
                        </div>
                    </section>
                    <section className="imdb__carousel">
                        <h3 className="imdb__title">
                            Featured today
                        </h3>
                        <div className="imdb__carouselContainer justify-content-start">
                            <section className="imdb__sliderSec ipc__page-section--baseAlt m-0">
                                <section className="imdb__slideSec">
                                    <Slider 
                                         type={"imdb-secondary"}
                                         carouselClass={"amzn__carousel"}
                                         items={
                                                [
                                                    {
                                                        href: '/',
                                                        img: <img src={house_of_the_dragon_poster} alt="house of the dragon poster" />,
                                                        img_two: <img src={new_holiday_picks} alt="'new holiday picks" />,
                                                        list: true
                                                    },
                                                    {
                                                        href: '/',
                                                        img: <img src={house_of_the_dragon_poster} alt="house of the dragon poster" />,
                                                        img_two: <img src={new_holiday_picks} alt="'new holiday picks" />,
                                                        runtime: "1:23"
                                                    }
                                                ]
                                         }
                                    />
                                </section>
                            </section>
                        </div>
                    </section>
                    <section className="imdb__watchlist">
                        <header>
                            <h3 className="imdb__watchlistHeader imdb__title">What to Watch</h3>
                            <Link to="/" className="imdb__recommendation ipc__text__button ipc__button ipc__button--core-baseAlt ipc__button--on-accent2">
                                Get more recommendations
                                <MdKeyboardArrowRight />
                            </Link>
                        </header>
                        <section className="imdb__watchMain">
                            <Link to="/" className="ipc__title d-inline-block ipc__title--subsection-title ipc__title--baseAlt ipc__title__link__wrapper">
                                <h3 className="ipc__title__text">
                                    From your watchlist
                                    <span className="ipc__title__link__chevron">
                                        <MdKeyboardArrowRight />
                                    </span>
                                </h3>
                            </Link>
                            <section className="imdb__loggedState ipc__page__section ipc__page__section--baseAlt">
                                <div className="ipc__watchlist__ribbon ipc__watchlist__ribbon--baseAlt ipc__watchlist__ribbon--m">
                                    <BiBookmarkPlus />
                                </div>
                                <section className="imdb__signin">
                                    <div className="font-weight-bold">
                                        Sign in to access your Watchlist
                                    </div>
                                    <div>   
                                        Save shows and movies to keep track of what you want to watch.
                                    </div>
                                </section>
                                <Link to="/" className="imdb__signinBtn ipc__button ipc__button--double-padding ipc__button--default-height justify-content-center ipc__button ipc__button--core-accent1">
                                    <div className="ipc__button__text">Sign in to IMDb</div>
                                </Link>
                            </section>
                        </section>
                    </section>
                    <section className="imdb__classic">
                        <section className="ipc__page__section ipc__page__section--baseAlt ipc__page__grid__item ipc__page__grid__item--span-3">
                            <div>
                                <Link to="/" className="ipc__title d-inline-block ipc__title--subsection-title ipc__title--baseAlt ipc__title__link__wrapper">
                                    <h3 className="ipc__title__text">
                                        Fan Favorites
                                        <span className="ipc__title__link__chevron">
                                            <MdKeyboardArrowRight />
                                        </span>
                                    </h3>
                                    <div className="ipc__title__description">This week's top TV and movies</div>
                                </Link>
                            </div>
                            <section className="ipc__shoveler imdb__favSlider">
                                <Slider 
                                    type={"imdb-fav"}
                                    carouselClass="amzn__carousel"
                                    count={6}
                                    items={
                                            [
                                                {
                                                    href: '/',
                                                    title: 'Spider-Man: No Way Home',
                                                    src: spiderman_no_way_home,
                                                    alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    rating: "9.1"
                                                },
                                                {
                                                    href: '/',
                                                    title: 'Spider-Man: No Way Home',
                                                    src: spiderman_no_way_home,
                                                    alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    rating: "9.1"
                                                },
                                                {
                                                    href: '/',
                                                    title: 'Spider-Man: No Way Home',
                                                    src: spiderman_no_way_home,
                                                    alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    rating: "9.1"
                                                },
                                                {
                                                    href: '/',
                                                    title: 'Spider-Man: No Way Home',
                                                    src: spiderman_no_way_home,
                                                    alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    rating: "9.1"
                                                },
                                                {
                                                    href: '/',
                                                    title: 'Spider-Man: No Way Home',
                                                    src: spiderman_no_way_home,
                                                    alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    rating: "9.1"
                                                },
                                                {
                                                    href: '/',
                                                    title: 'Spider-Man: No Way Home',
                                                    src: spiderman_no_way_home,
                                                    alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    rating: "9.1"
                                                }
                                            ]
                                        }
                                />
                            </section>
                        </section>
                    </section>
                    <section className="imdb__classic">
                        <section className="ipc__page__section ipc__page__section--baseAlt ipc__page__grid__item ipc__page__grid__item--span-3">
                            <header className="ipc__title d-inline-block ipc__title--subsection-title ipc__title--baseAlt ">
                                <h3 className="ipc__title__text">
                                    More to watch
                                </h3>
                                <div className="ipc__title__description">IMDb helps you select the perfect next show or movie to watch.
                                </div>
                            </header>
                            <section className="ipc__sub__grid ipc__sub__grid--page-span-3">
                                <Link to="/" className="ipc__button ipc__button--single-padding ipc__button--default-height ipc__button--core-baseAlt ipc__button--theme-baseAlt ipc__outline__button ipc__sub__grid__item ipc__sub__grid__item--span-3 justify-content-center" role="button">
                                    <div className="ipc__button__text">Watch Guide</div>
                                </Link>
                                <Link to="/" className="ipc__button ipc__button--single-padding ipc__button--default-height ipc__button--core-baseAlt ipc__button--theme-baseAlt ipc__outline__button ipc__sub__grid__item ipc__sub__grid__item--span-3 justify-content-center" role="button">
                                    <div className="ipc__button__text">Most Popular</div>
                                </Link>
                            </section>
                        </section>
                    </section>
                    <section className="imdb__classic imdb__exclusiveVids">
                        <header>
                            <h3 className="imdb__watchlistHeader imdb__title">Exclusive videos</h3>
                        </header>
                        <section className="ipc__page__section ipc__page__section--baseAlt">
                            <section className="ipc__title d-inline-block ipc__title--subsection-title ipc__title--baseAlt ">
                                <h3 className="ipc__title__text">
                                    IMDb Originals
                                </h3>
                                <div className="ipc__title__description">
                                    Celebrity interviews, trending entertainment stories, and expert analysis
                                </div>
                            </section>
                            <section className="ipc__shoveler imdb__originalSlider">
                                <Slider 
                                    type={"imdb-originals"}
                                    carouselClass="amzn__carousel"
                                    count={6}
                                    items={
                                            [
                                                {
                                                    href: '/',
                                                    title: "The Rise of the 'The Lost Daughter' Star Olivia Colman",
                                                    src: woman_in_white,
                                                    alt: "Woman in white",
                                                    rating: "9.1",
                                                    runtime: "4:10"
                                                },
                                                {
                                                    href: '/',
                                                    title: "The Rise of the 'The Lost Daughter' Star Olivia Colman",
                                                    src: woman_in_white,
                                                    alt: "Woman in white",
                                                    rating: "9.1",
                                                    runtime: "4:10"
                                                },
                                                {
                                                    href: '/',
                                                    title: "The Rise of the 'The Lost Daughter' Star Olivia Colman",
                                                    src: woman_in_white,
                                                    alt: "Woman in white",
                                                    rating: "9.1",
                                                    runtime: "4:10"
                                                }
                                            ]
                                        }
                                />
                            </section>
                        </section>
                    </section>
                    <section className="imdb__classic imdb__exclusiveVids">
                        <header>
                            <h3 className="imdb__watchlistHeader imdb__title">
                                Explore what’s streaming
                            </h3>
                        </header>
                        <section className="ipc__page__section ipc__page__section--baseAlt pt-0">
                            <nav className="imdb__exploreTabs">
                                <ul className="ipc__tabs ipc__tabs--on-baseAlt ml-0">
                                    <li className="ipc__tab" className={classnames({ active: activeTab === "prime-video" }, "ipc__tab")}
                                        onClick={() => toggle("prime-video")} role="button">
                                        <span>PRIME VIDEO</span>
                                    </li>
                                    <li className="ipc__tab" className={classnames({ active: activeTab === "hayu" }, "ipc__tab")}
                                        onClick={() => toggle("hayu")} role="button">
                                        <span>HAYU</span>
                                    </li>
                                    <li className="ipc__tab" className={classnames({ active: activeTab === "stack-tv" }, "ipc__tab")}
                                        onClick={() => toggle("stack-tv")} role="button">
                                        <span>STACKTV</span>
                                    </li>
                                    <li className="ipc__tab" className={classnames({ active: activeTab === "super-channel" }, "ipc__tab")} 
                                        onClick={() => toggle("super-channel")} role="button">
                                        <span>SUPER CHANNEL</span>
                                    </li>
                                    <li className="ipc__tab" className={classnames({ active: activeTab === "acorn-tv" }, "ipc__tab")}
                                        onClick={() => toggle("acorn-tv")} role="button">
                                        <span>ACORN TV</span>
                                    </li>
                                    <li className="ipc__tab" className={classnames({ active: activeTab === "hollywood-suite" }, "ipc__tab")}
                                        onClick={() => toggle("hollywood-suite")} role="button">
                                        <span>HOLLYWOOD SUITE</span>
                                    </li>
                                </ul>
                            </nav>
                            <p className="imdb__exploreTabs">
                                included with Prime
                            </p>
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="prime-video" tag="section">
                                    <section className="ipc__shoveler imdb__favSlider">
                                        <Slider 
                                            type={"imdb-fav"}
                                            carouselClass="amzn__carousel"
                                            count={6}
                                            items={
                                                    [
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        },
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        },
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        },
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        },
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        },
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        }
                                                    ]
                                                }
                                        />
                                    </section>
                                </TabPane>
                                <TabPane tabId="hayu" tag="section">
                                    <section className="ipc__shoveler imdb__favSlider">
                                        <Slider 
                                            type={"imdb-fav"}
                                            carouselClass="amzn__carousel"
                                            count={6}
                                            items={
                                                    [
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        },
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        },
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        },
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        },
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        },
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        }
                                                    ]
                                                }
                                        />
                                    </section>
                                </TabPane>
                                <TabPane tabId="stack-tv" tag="section">
                                    <section className="ipc__shoveler imdb__favSlider">
                                        <Slider 
                                            type={"imdb-fav"}
                                            carouselClass="amzn__carousel"
                                            count={6}
                                            items={
                                                    [
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        },
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        },
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        },
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        },
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        },
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        }
                                                    ]
                                                }
                                        />
                                    </section>
                                </TabPane>
                                <TabPane tabId="super-channel" tag="section">
                                    <section className="ipc__shoveler imdb__favSlider">
                                        <Slider 
                                            type={"imdb-fav"}
                                            carouselClass="amzn__carousel"
                                            count={6}
                                            items={
                                                    [
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        },
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        },
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        },
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        },
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        },
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        }
                                                    ]
                                                }
                                        />
                                    </section>
                                </TabPane>
                                <TabPane tabId="acorn-tv" tag="section">
                                    <section className="ipc__shoveler imdb__favSlider">
                                        <Slider 
                                            type={"imdb-fav"}
                                            carouselClass="amzn__carousel"
                                            count={6}
                                            items={
                                                    [
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        },
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        },
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        },
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        },
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        },
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        }
                                                    ]
                                                }
                                        />
                                    </section>
                                </TabPane>
                                <TabPane tabId="hollywood-suite" tag="section">
                                    <section className="ipc__shoveler imdb__favSlider">
                                        <Slider 
                                            type={"imdb-fav"}
                                            carouselClass="amzn__carousel"
                                            count={6}
                                            items={
                                                    [
                                                        {
                                                            href: 'Spider-Man: No Way Home',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        },
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        },
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        },
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        },
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        },
                                                        {
                                                            href: '/',
                                                            title: 'Spider-Man: No Way Home',
                                                            src: spiderman_no_way_home,
                                                            alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                            rating: "9.1"
                                                        }
                                                    ]
                                                }
                                        />
                                    </section>
                                </TabPane>
                            </TabContent>
                        </section>
                    </section>
                    <section className="imdb__classic imdb__exclusiveVids ipc__page__grid__item--span-3">
                        <header className="ipc__page__grid__item--span-3">
                            <h3 className="imdb__watchlistHeader imdb__title">Explore Movies &amp; TV shows</h3>
                        </header>
                        <section className="ipc__page__section ipc__page__section--baseAlt ipc__page__grid__item ipc__page__grid__item--span-3">
                            <div>
                                <Link to="/" className="ipc__title d-inline-block ipc__title--subsection-title ipc__title--baseAlt ipc__title__link__wrapper">
                                    <h3 className="ipc__title__text">
                                        In theatres
                                        <span className="ipc__title__link__chevron">
                                            <MdKeyboardArrowRight />
                                        </span>
                                    </h3>
                                    <div className="ipc__title__description">Showtimes near you</div>
                                </Link>
                            </div>
                            <section className="ipc__shoveler imdb__favSlider">
                                <Slider 
                                    type={"imdb-fav"}
                                    carouselClass="amzn__carousel"
                                    count={6}
                                    items={
                                            [
                                                {
                                                    href: '/',
                                                    title: 'Spider-Man: No Way Home',
                                                    src: spiderman_no_way_home,
                                                    alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    rating: "9.1"
                                                },
                                                {
                                                    href: '/',
                                                    title: 'Spider-Man: No Way Home',
                                                    src: spiderman_no_way_home,
                                                    alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    rating: "9.1"
                                                },
                                                {
                                                    href: '/',
                                                    title: 'Spider-Man: No Way Home',
                                                    src: spiderman_no_way_home,
                                                    alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    rating: "9.1"
                                                },
                                                {
                                                    href: '/',
                                                    title: 'Spider-Man: No Way Home',
                                                    src: spiderman_no_way_home,
                                                    alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    rating: "9.1"
                                                },
                                                {
                                                    href: '/',
                                                    title: 'Spider-Man: No Way Home',
                                                    src: spiderman_no_way_home,
                                                    alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    rating: "9.1"
                                                },
                                                {
                                                    href: '/',
                                                    title: 'Spider-Man: No Way Home',
                                                    src: spiderman_no_way_home,
                                                    alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    rating: "9.1"
                                                }
                                            ]
                                        }
                                />
                            </section>
                        </section>
                        <section className="imdb__boxOffice ipc__page__section ipc__page__section--baseAlt ipc__page__grid__item--span-3">
                            <div>
                                <Link to="/" className="ipc__title d-inline-block ipc__title--subsection-title ipc__title--baseAlt ipc__title__link__wrapper">
                                    <h3 className="ipc__title__text">
                                        Top box office (US)
                                        <span className="ipc__title__link__chevron">
                                            <MdKeyboardArrowRight />
                                        </span>
                                    </h3>
                                    <div className="ipc__title__description">Weekend of December 17-19</div>
                                </Link>
                            </div>
                            <ul className="imdb__boxList ml-0">
                                <li>
                                    <div className="mt-auto mb-auto">1</div>
                                    <div className="imdb__stroke"></div>
                                    <div className="imdb__boxRibbon">
                                        <button className="ipc__watchlist__ribbon ipc__poster__watchlist__ribbon ipc__watchlist__ribbon--baseAlt ipc__watchlist__ribbon--m">
                                            <BiBookmarkPlus />
                                        </button>
                                    </div>
                                    <Link to="/" className="imdb__boxTitle">
                                        <section className="imdb__boxTitleText">
                                            Spider-Man: No Way Home
                                        </section>
                                        <section className="imdb__boxPrice">
                                            $260M
                                        </section>
                                    </Link>
                                    <span className="imdb__boxOfficeIcon">
                                        <Link to="/" className="ipc__icon__link ipc__icon__link--baseAlt ipc__icon__link--onAccent2" title="Spider-Man: No Way Homeshowtimes link" role="button">
                                            <HiTicket />
                                        </Link>
                                    </span>
                                </li>
                                <li>
                                    <div className="mt-auto mb-auto">2</div>
                                    <div className="imdb__stroke"></div>
                                    <div className="imdb__boxRibbon">
                                        <button className="ipc__watchlist__ribbon ipc__poster__watchlist__ribbon ipc__watchlist__ribbon--baseAlt ipc__watchlist__ribbon--m">
                                            <BiBookmarkPlus />
                                        </button>
                                    </div>
                                    <Link to="/" className="imdb__boxTitle">
                                        <section className="imdb__boxTitleText">
                                            Spider-Man: No Way Home
                                        </section>
                                        <section className="imdb__boxPrice">
                                            $260M
                                        </section>
                                    </Link>
                                    <span className="imdb__boxOfficeIcon">
                                        <Link to="/" className="ipc__icon__link ipc__icon__link--baseAlt ipc__icon__link--onAccent2" title="Spider-Man: No Way Homeshowtimes link" role="button">
                                            <HiTicket />
                                        </Link>
                                    </span>
                                </li>
                                <li>
                                    <div className="mt-auto mb-auto">3</div>
                                    <div className="imdb__stroke"></div>
                                    <div className="imdb__boxRibbon">
                                        <button className="ipc__watchlist__ribbon ipc__poster__watchlist__ribbon ipc__watchlist__ribbon--baseAlt ipc__watchlist__ribbon--m">
                                            <BiBookmarkPlus />
                                        </button>
                                    </div>
                                    <Link to="/" className="imdb__boxTitle">
                                        <section className="imdb__boxTitleText">
                                            Spider-Man: No Way Home
                                        </section>
                                        <section className="imdb__boxPrice">
                                            $260M
                                        </section>
                                    </Link>
                                    <span className="imdb__boxOfficeIcon">
                                        <Link to="/" className="ipc__icon__link ipc__icon__link--baseAlt ipc__icon__link--onAccent2" title="Spider-Man: No Way Homeshowtimes link" role="button">
                                            <HiTicket />
                                        </Link>
                                    </span>
                                </li>
                                <li>
                                    <div className="mt-auto mb-auto">4</div>
                                    <div className="imdb__stroke"></div>
                                    <div className="imdb__boxRibbon">
                                        <button className="ipc__watchlist__ribbon ipc__poster__watchlist__ribbon ipc__watchlist__ribbon--baseAlt ipc__watchlist__ribbon--m">
                                            <BiBookmarkPlus />
                                        </button>
                                    </div>
                                    <Link to="/" className="imdb__boxTitle">
                                        <section className="imdb__boxTitleText">
                                            Spider-Man: No Way Home
                                        </section>
                                        <section className="imdb__boxPrice">
                                            $260M
                                        </section>
                                    </Link>
                                    <span className="imdb__boxOfficeIcon">
                                        <Link to="/" className="ipc__icon__link ipc__icon__link--baseAlt ipc__icon__link--onAccent2" title="Spider-Man: No Way Homeshowtimes link" role="button">
                                            <HiTicket />
                                        </Link>
                                    </span>
                                </li>
                                <li>
                                    <div className="mt-auto mb-auto">5</div>
                                    <div className="imdb__stroke"></div>
                                    <div className="imdb__boxRibbon">
                                        <button className="ipc__watchlist__ribbon ipc__poster__watchlist__ribbon ipc__watchlist__ribbon--baseAlt ipc__watchlist__ribbon--m">
                                            <BiBookmarkPlus />
                                        </button>
                                    </div>
                                    <Link to="/" className="imdb__boxTitle">
                                        <section className="imdb__boxTitleText">
                                            Spider-Man: No Way Home
                                        </section>
                                        <section className="imdb__boxPrice">
                                            $260M
                                        </section>
                                    </Link>
                                    <span className="imdb__boxOfficeIcon">
                                        <Link to="/" className="ipc__icon__link ipc__icon__link--baseAlt ipc__icon__link--onAccent2" title="Spider-Man: No Way Homeshowtimes link" role="button">
                                            <HiTicket />
                                        </Link>
                                    </span>
                                </li>
                                <li>
                                    <div className="mt-auto mb-auto">6</div>
                                    <div className="imdb__stroke"></div>
                                    <div className="imdb__boxRibbon">
                                        <button className="ipc__watchlist__ribbon ipc__poster__watchlist__ribbon ipc__watchlist__ribbon--baseAlt ipc__watchlist__ribbon--m">
                                            <BiBookmarkPlus />
                                        </button>
                                    </div>
                                    <Link to="/" className="imdb__boxTitle">
                                        <section className="imdb__boxTitleText">
                                            Spider-Man: No Way Home
                                        </section>
                                        <section className="imdb__boxPrice">
                                            $260M
                                        </section>
                                    </Link>
                                    <span className="imdb__boxOfficeIcon">
                                        <Link to="/" className="ipc__icon__link ipc__icon__link--baseAlt ipc__icon__link--onAccent2" title="Spider-Man: No Way Homeshowtimes link" role="button">
                                            <HiTicket />
                                        </Link>
                                    </span>
                                </li>
                            </ul>
                        </section>
                        <section className="ipc__page__section ipc__page__section--baseAlt ipc__page__grid__item ipc__page__grid__item--span-3">
                            <div>
                                <Link to="/" className="ipc__title d-inline-block ipc__title--subsection-title ipc__title--baseAlt ipc__title__link__wrapper">
                                    <h3 className="ipc__title__text">
                                        Coming soon to theaters (US)
                                        <span className="ipc__title__link__chevron">
                                            <MdKeyboardArrowRight />
                                        </span>
                                    </h3>
                                    <div className="ipc__title__description">Trailers for upcoming reasons</div>
                                </Link>
                            </div>
                            <section className="ipc__shoveler">
                                <section className="imdb__originalSlider">
                                    <Slider 
                                        type={"imdb-originals"}
                                        carouselClass="amzn__carousel"
                                        count={6}
                                        items={
                                                [
                                                    {
                                                        href: '/',
                                                        title: "The Rise of the 'The Lost Daughter' Star Olivia Colman",
                                                        src: woman_in_white,
                                                        alt: "Woman in white",
                                                        rating: "9.1",
                                                        runtime: "4:10",
                                                        bookmark: true
                                                    },
                                                    {
                                                        href: '/',
                                                        title: "The Rise of the 'The Lost Daughter' Star Olivia Colman",
                                                        src: woman_in_white,
                                                        alt: "Woman in white",
                                                        rating: "9.1",
                                                        runtime: "4:10",
                                                        bookmark: true
                                                    },
                                                    {
                                                        href: '/',
                                                        title: "The Rise of the 'The Lost Daughter' Star Olivia Colman",
                                                        src: woman_in_white,
                                                        alt: "Woman in white",
                                                        rating: "9.1",
                                                        runtime: "4:10",
                                                        bookmark: true
                                                    }
                                                ]
                                            }
                                        />
                                    </section>
                                </section>
                        </section>                    
                    </section>
                    <section className="ipc__page__grid ipc__page__grid--bias-left imdb__exclusiveVids">
                        <section className="ipc__page__grid__item ipc__page__grid__item--span-3">
                            <header>
                                <h3 className="imdb__watchlistHeader imdb__title">More to explore</h3>
                            </header>
                            <section className="ipc__page__section ipc__page__section--baseAlt">
                                <section className="ipc__title d-inline-block ipc__title--subsection-title ipc__title--baseAlt ">
                                    <h3 className="ipc__title__text">
                                        Editor's picks
                                    </h3>
                                </section>
                                <div className="imdb__carouselContainer justify-content-start">
                                    
                                    {/* Add "imdb__slideSec--stretch" class if you want it to be in 3's */}
                                    <section className="imdb__sliderSec imdb__sliderSec--stretch ipc__page-section--baseAlt m-0">
                                        <section className="imdb__slideSec imdb__originalSlider">   
                                            <Slider 
                                                type={"imdb-secondary-regular"}
                                                carouselClass={"amzn__carousel"}
                                                count={3}
                                                items={
                                                        [
                                                            {
                                                                href: '/',
                                                                img: <img src={house_of_the_dragon_poster} alt="house of the dragon poster" />,
                                                                list: true,
                                                                caption: "Most Anticipated New TV Shows Coming in 2022"
                                                            },
                                                            {
                                                                href: '/',
                                                                img: <img src={house_of_the_dragon_poster} alt="house of the dragon poster" />,
                                                                caption: "Most Anticipated New TV Shows Coming in 2022"
                                                            },
                                                            {
                                                                href: '/',
                                                                img: <img src={house_of_the_dragon_poster} alt="house of the dragon poster" />,
                                                                vote: true,
                                                                caption: "Most Anticipated New TV Shows Coming in 2022"
                                                            }
                                                        ]
                                                }
                                            />
                                        </section>
                                    </section>
                                </div>
                            </section>
                        </section>
                        <section className="ipc__page__section ipc__page__section--baseAlt ipc__page__grid__item--span-3">
                            <div>
                                <Link to="/" className="ipc__title d-inline-block ipc__title--subsection-title ipc__title--baseAlt ipc__title__link__wrapper">
                                    <h3 className="ipc__title__text">
                                        Born Today
                                        <span className="ipc__title__link__chevron">
                                            <MdKeyboardArrowRight />
                                        </span>
                                    </h3>
                                    <div className="ipc__title__description">People born on December 22</div>
                                </Link>
                            </div>
                            <section className="imdb__slideSec imdb__spherical">
                                <Slider 
                                    type={"imdb-spheres"}
                                    carouselClass={"amzn__carousel"}
                                    count={6}
                                    items={
                                            [
                                                {
                                                    href: '/',
                                                    img: <img src={the_gilded_age_lg} alt="the gilded age" />,
                                                    caption: "The Gilded Age",
                                                    age: "85"
                                                },
                                                {
                                                    href: '/',
                                                    img: <img src={the_gilded_age_lg} alt="the gilded age" />,
                                                    caption: "The Gilded Age",
                                                    age: "85"
                                                },
                                                {
                                                    href: '/',
                                                    img: <img src={the_gilded_age_lg} alt="the gilded age" />,
                                                    caption: "The Gilded Age",
                                                    age: "85"
                                                },
                                                {
                                                    href: '/',
                                                    img: <img src={the_gilded_age_lg} alt="the gilded age" />,
                                                    caption: "The Gilded Age",
                                                    age: "85"
                                                },
                                                {
                                                    href: '/',
                                                    img: <img src={the_gilded_age_lg} alt="the gilded age" />,
                                                    caption: "The Gilded Age",
                                                    age: "85"
                                                },
                                                {
                                                    href: '/',
                                                    img: <img src={the_gilded_age_lg} alt="the gilded age" />,
                                                    caption: "The Gilded Age",
                                                    age: "85"
                                                }
                                            ]
                                    }
                                />
                            </section>
                        </section>
                        <section className="ipc__page__section ipc__page__section--baseAlt ipc__page__grid__item--span-3">
                            <div>
                                <Link to="/" className="ipc__title d-inline-block ipc__title--subsection-title ipc__title--baseAlt ipc__title__link__wrapper">
                                    <h3 className="ipc__title__text">
                                        Top News
                                        <span className="ipc__title__link__chevron">
                                            <MdKeyboardArrowRight />
                                        </span>
                                    </h3>
                                </Link>
                            </div>
                            <section className="ipc__shoveler">
                                <section className="imdb__news imdb__carousel">
                                    <Slider 
                                        type={"imdb-news"}
                                        carouselClass={"amzn__carousel"}
                                        count={3}
                                        items={
                                                [
                                                    {
                                                        href: '/',
                                                        img: <img className="ipc__image" src={sarah_jessica_parker} alt="Sarah Jessica Parker, Cynthia Nixon, Kristin Davis Address Chris Noth Sexual Assault Allegations" />,
                                                        caption: "Sarah Jessica Parker, Cynthia Nixon, Kristin Davis Address Chris Noth Sexual Assault Allegations",
                                                        source: "Variety - TV News",
                                                        date: "Dec 20"
                                                    },
                                                    {
                                                        href: '/',
                                                        img: <img className="ipc__image" src={sarah_jessica_parker} alt="Sarah Jessica Parker, Cynthia Nixon, Kristin Davis Address Chris Noth Sexual Assault Allegations" />,
                                                        caption: "Sarah Jessica Parker, Cynthia Nixon, Kristin Davis Address Chris Noth Sexual Assault Allegations",
                                                        source: "Variety - TV News",
                                                        date: "Dec 20"
                                                    },
                                                    {
                                                        href: '/',
                                                        img: <img className="ipc__image" src={sarah_jessica_parker} alt="Sarah Jessica Parker, Cynthia Nixon, Kristin Davis Address Chris Noth Sexual Assault Allegations" />,
                                                        caption: "Sarah Jessica Parker, Cynthia Nixon, Kristin Davis Address Chris Noth Sexual Assault Allegations",
                                                        source: "Variety - TV News",
                                                        date: "Dec 20"
                                                    }
                                                ]
                                        }
                                    />
                                </section>
                            </section>
                        </section>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default IMDB
