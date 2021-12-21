import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { BiMenu } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaDesktop, FaUserFriends } from 'react-icons/fa'
import { IoMdFilm } from 'react-icons/io'
import { BiBuildings } from 'react-icons/bi'
import { MdLabelOutline } from 'react-icons/md'
import { RiFileSearchLine, RiPlayCircleLine } from 'react-icons/ri'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { BiBookmarkPlus } from 'react-icons/bi'

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

import './index.css'

const IMDB = () => {

    const [imdbdropdownOpen, setImdbdropdownOpen] = useState(false)    // imdb dropdown
    const [imdbprodropdownOpen, setImdbprodropdownOpen] = useState(false)    // imdbpro dropdown

    const imdbdropdown = () => setImdbdropdownOpen(imdbdropdownOpen => !imdbdropdownOpen) 
    const imdbprodropdown = () => setImdbprodropdownOpen(imdbprodropdownOpen => !imdbprodropdownOpen) 

    const imdbproEnter = () => setImdbprodropdownOpen(true)
    const imdbproLeave = () => setImdbprodropdownOpen(false)

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
                                         type={"imdbSecondary"}
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
                            <Link to="/" className="ipc__title d-inline-block ipc__title--subsection-title ipc__title--baseAlt ">
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
                    <section className="imdb__favourites">
                        <section className="ipc__page__section ipc__page__section--baseAlt ipc__page__grid__item ipc__page__grid__item--span-3">
                            <div>
                                <Link to="/" className="ipc__title d-inline-block ipc__title--subsection-title ipc__title--baseAlt ">
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
                                    type={"imdbFav"}
                                    count={6}
                                    items={
                                            [
                                                {
                                                    href: '/',
                                                    title: '/',
                                                    src: spiderman_no_way_home,
                                                    alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    rating: "9.1"
                                                },
                                                {
                                                    href: '/',
                                                    title: '/',
                                                    src: spiderman_no_way_home,
                                                    alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    rating: "9.1"
                                                },
                                                {
                                                    href: '/',
                                                    title: '/',
                                                    src: spiderman_no_way_home,
                                                    alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    rating: "9.1"
                                                },
                                                {
                                                    href: '/',
                                                    title: '/',
                                                    src: spiderman_no_way_home,
                                                    alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    rating: "9.1"
                                                },
                                                {
                                                    href: '/',
                                                    title: '/',
                                                    src: spiderman_no_way_home,
                                                    alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    rating: "9.1"
                                                },
                                                {
                                                    href: '/',
                                                    title: '/',
                                                    src: spiderman_no_way_home,
                                                    alt: "Amazon.ca Gift Cards in a Premium Greeting Card (Various Designs)",
                                                    rating: "9.1"
                                                },
                                            ]
                                        }
                                />
                            </section>
                        </section>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default IMDB
