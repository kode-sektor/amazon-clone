import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Navbar, Nav, NavItem, NavLink, NavbarBrand, UncontrolledDropdown, 
        DropdownToggle, DropdownItem, DropdownMenu, NavbarText } from 'reactstrap'
import { IoClose, IoCloseSharp, IoHome } from 'react-icons/io5'
import { AiOutlineMail, AiOutlineExclamationCircle, AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai'
import { BsCompass } from 'react-icons/bs'
import { FaRegUserCircle, FaShoppingBasket, FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from 'react-icons/fa'
import { RiArrowDropDownLine, RiArrowDropUpLine, RiArrowDropRightLine } from 'react-icons/ri'

import CarouselBook from '../../components/UI/Carousel/CarouselBook'
import Slider from '../../components/UI/Carousel/Carousel'
import { BtnBook } from '../../components/UI/Button'

import { currencies } from '../../utilities/data'

import book_depository_logo from '../../images/book-depository-logo.svg'
import gift_guides from '../../images/gift-guides.jpg'
import stories_worth_sharing from '../../images/stories-worth-sharing.jpeg'
import blog_on from '../../images/blog-on.jpg'
import the_manga_store from '../../images/the-manga-store.jpg'
import taschen_hp from '../../images/taschen-hp.jpg'
import languages_sidebar_blank from '../../images/languages-sidebar-blank.jpg'
import a_clockwork_orange from '../../images/books/a-clockwork-orange.jpg'
import read_create from '../../images/banner/read-create.jpg'
import childrens_books from '../../images/childrens-books.png'
import fiction_books from '../../images/fiction-books.png'
import crime_thriller from '../../images/crime-thriller.png'
import graphic_novels_manga from '../../images/graphic-novels-manga.png'
import languages_blank from '../../images/languages-blank.jpg'
import newsletter_icon from '../../images/newsletter-icon.svg'
import payment_options from '../../images/payment-options.png'

import './index.css'

const AmazonBooks = () => {

    const [dropDownShopCategory, setDropDownShopCategory] = useState(false)

    const [bookList, setBookList] = useState(false)
    const [popularPages, setPopularPages] = useState(false)
    const [booksByLanguage, setBooksByLanguage] = useState(false)

    const megaMenuDropdown = (flip) => {
        setDropDownShopCategory(flip)
    }

    const showMore = (e, parent) => {
        e.preventDefault()
        if (parent === "bookList") { 
            setBookList(!bookList)
        }
        else if (parent === "popularPages") {
            setPopularPages(!popularPages)
        }
        else if (parent === "booksByLanguage") {
            setBooksByLanguage(!booksByLanguage)
        }
    }

    return (
        <div className="amazonBooks--page">
            <section className="amazonBooks__header">
                <section className="amazonBooks__cookie">
                    <section className="amazonBooks__notice">
                        <p>
                            We use cookies to give you the best possible experience. By using our website you agree to our 
                            <Link to="/" target="">&nbsp;use of cookies</Link>.
                        </p>
                    </section>
                    <button className="amazonBooks__cookieClose">
                        <IoClose />
                    </button>
                </section>
            </section>
            <main className="amazonBooks__layout">
                <header>
                    <section className="amazonBooks__navWrap">
                        <Navbar className="amazonBooks__nav amazonBooks__nav--pri" color="light" expand="md" light>
                            <Nav className="amazonBooks__mobileNav mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="/">
                                        <IoHome className="amazon__BooksHomeIcon" />
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">
                                        <AiOutlineMail />&nbsp;
                                        Contact Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">
                                        <AiOutlineExclamationCircle />&nbsp;
                                        Help
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="amazonBooks__twoPartBanner d-flex justify-space-between mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="/components/">
                                        FREE <br/>
                                        DELIVERY
                                    </NavLink>
                                </NavItem>
                                <NavItem className="amazonBooks__promotionBlock">
                                </NavItem>
                            </Nav>
                            <Nav className="amazonBooks__mobileNav pl-0" navbar>
                                <NavItem>
                                    <NavLink href="/" className="amazon__BooksCompassIcon">
                                        <BsCompass />&nbsp;
                                        Order Status
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">
                                        <AiOutlineHeart />&nbsp;
                                        Wishlist
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">
                                        <FaRegUserCircle />&nbsp;
                                        Sign in/ Join
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Navbar>
                        <Navbar className="amazonBooks__nav amazonBooks__nav--sec" color="light" expand="md" light>
                            <Nav className="amazonBooks__mobileNav mr-auto" navbar>
                                <NavItem className="amazonBooks__brandwrap">
                                    <NavbarBrand href="/">
                                        <img src={book_depository_logo} alt="book depository logo" />
                                    </NavbarBrand>
                                </NavItem>
                            </Nav>
                            <Nav className="amazonBooks__searchWrap d-flex justify-space-between mr-auto" navbar>
                                <form action="" className="amazonBooks__searchForm" autoComplete="off">
                                    <section className="amazonBooks__searchWrapper">
                                        <button className="amazonBooks__headerSearch">
                                            <AiOutlineSearch />
                                        </button>
                                        <input type="search" placeholder="Search for books by keyword / title / author / ISBN" name="searchTerm" value=""/>
                                        <button className="amazonBooks__headerSearchBtn">
                                            Search
                                        </button>
                                        <button className="amazonBooks__headerSearchBtnAdvanced">
                                            Advanced
                                        </button>
                                    </section>
                                </form>
                            </Nav>
                        </Navbar>
                        <Navbar className="amazonBooks__headerWrap">
                            <Nav navbar>
                                <NavItem className="position-relative">
                                    <NavLink>
                                        Shop by Category &nbsp;
                                        {
                                            !dropDownShopCategory && (
                                                <RiArrowDropDownLine 
                                                    onClick={() => megaMenuDropdown(true)}
                                                    className="amazonBooks__headerWrapDropdown"
                                                />
                                            )
                                        }
                                        {
                                            dropDownShopCategory && (
                                                <RiArrowDropUpLine
                                                    onClick={() => megaMenuDropdown(false)}
                                                    className="amazonBooks__headerWrapDropdown"
                                                />
                                            )
                                        }
                                    </NavLink>
                                    {
                                        dropDownShopCategory && (
                                            <section className="amazonBooks__headerCategDropdown">
                                                <button className="amazonBooks__headerCategClose"
                                                    onClick={() => megaMenuDropdown(false)}>
                                                    <IoCloseSharp />
                                                </button>
                                                <ul className="d-flex flex-wrap ml-0">
                                                    <li className="amazonBooks__topCategories">
                                                        <ul className="ml-0">
                                                            <li className="amazonBooks__topCategoriesHeader">
                                                                <h3 className="amazonBooks__topCategoriesHeading">
                                                                    Top Categories
                                                                </h3>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Art &amp; Photography</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Biography</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Children's Books</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Crafts &amp; Hobbies</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Crime &amp; Thriller</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Fiction</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Food &amp; Drink</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Graphic Novels, Anime &amp; Manga</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">History &amp; Archaeology</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Mind, Body &amp; Spirit</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Science Fiction, Fantasy &amp; Horror</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="d-flex">
                                                        <ul className="ml-0">
                                                            <li className="amazonBooks__topCategoriesHeader">
                                                                <h3 className="amazonBooks__topCategoriesHeading">
                                                                    More Categories
                                                                </h3>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Business, Finance &amp; Law</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Computing</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Dictionaries &amp; Languages</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Entertainment</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Health</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Home &amp; Garden</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Humour</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Medical</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Natural History</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Personal Development</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Medical</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Poetry &amp; Drama</Link>
                                                            </li>
                                                        </ul>
                                                        <ul className="amazonBooks__noHeader ml-0">
                                                            <li>
                                                                <Link to="/">Reference</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Religion</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Romance</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Science &amp; Geography</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Society &amp; Social Sciences</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Sport</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Stationery</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Teaching Resources &amp; Education</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Technology &amp; Engineering</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Teen &amp; Young Adult</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Transport</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Travel &amp; Holiday Guides</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="amazon__editableLinks d-flex">
                                                        <ul className="ml-0 amazonBooks__sidebar">
                                                            <li className="amazonBooks__topCategoriesHeader">
                                                                <h3 className="amazonBooks__topCategoriesHeading">
                                                                    Top Authors
                                                                </h3>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Roald Dahl</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Julia Donaldson</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Stephen King</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">David Walliams</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Dr. Seuss</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Andy Griffiths</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">James Patterson</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Sarah J. Maas</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Enid Blyton</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">John Green</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Brandon Sanderson</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/" className="text-underline">See all</Link>
                                                            </li>
                                                        </ul>
                                                        <ul className="ml-0 amazonBooks__sidebar">
                                                            <li className="amazonBooks__topCategoriesHeader">
                                                                <h3 className="amazonBooks__topCategoriesHeading">
                                                                    Bestselling Series
                                                                </h3>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Harry Potter</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Game of Thrones</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Lego</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Divergent</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Throne of Glass</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Star Wars</Link>
                                                            </li>
                                                            <li className="amazonBooks__topCategoriesHeader">
                                                                <h3 className="amazonBooks__topCategoriesHeading">
                                                                    Books By Language
                                                                </h3>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Books in Spanish</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Books in Polish</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Books in German</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Books in French</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Languages Bookshop</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="w-100 order-2">
                                                        <ul>
                                                            <li className="amazonBooks__topCategoriesHeader">
                                                                <h3 className="amazonBooks__topCategoriesHeading">
                                                                    Children's books by age range
                                                                </h3>
                                                            </li>
                                                            <li>
                                                                <ul className="amazonBooks__ageRange d-flex">
                                                                    <li>
                                                                        <Link to="/">Ages 0-2</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/">Ages 3-5</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/">Ages 6-8</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/">Ages 9-11</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/">Teen &amp; Young Adult</Link>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </section>
                                        )
                                    }
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">
                                        BestSellers
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">
                                        New Releases
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">
                                        Christmas FAQs
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="amazonBooks__headerWrapCurrency" navbar>
                                <NavItem>
                                    <UncontrolledDropdown>
                                        <DropdownToggle className="amazonBooks__headerWrapCurrencyDropdown" caret nav>
                                            English &nbsp;
                                            {/* <RiArrowDropDownLine 
                                                className="amazonBooks__headerWrapDropdown"
                                            /> */}
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <ul className="position-relative ml-0">
                                                <span className="ioclose">
                                                    <IoClose />
                                                </span>
                                                <li className="amazonBooks__topCategoriesHeader">
                                                    <h3 className="amazonBooks__topCategoriesHeading">
                                                        Languages
                                                    </h3>
                                                </li>
                                            </ul>
                                            <DropdownItem className="amazonBooks__topCategOption">
                                                English
                                            </DropdownItem>
                                            <DropdownItem className="amazonBooks__topCategOption">
                                                Spanish (Español)
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </NavItem>
                                <NavItem>
                                    <form action="" className="amazonBooks__selectCurrencyFrm">
                                        <div className="position-relative">
                                            <select className="amazonBooks__selectCurrency" name="" id="">
                                                {
                                                    currencies.map((item, index) => {
                                                        const { text, value } = item
                                                        return (
                                                            <option value={value}>{text}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                            <RiArrowDropDownLine 
                                                className="amazonBooks__headerWrapDropdown"
                                            />
                                        </div>
                                    </form>
                                </NavItem>
                                <ul className="amazonBooks__headerWrapCart">
                                    <NavItem>
                                        <NavbarText className="amazonBooks__total">
                                            C$0.00
                                        </NavbarText>
                                        <Link to="/" className="amazonBooks__basket">
                                            <span>0</span>&nbsp;&nbsp;
                                            <FaShoppingBasket />
                                        </Link>
                                    </NavItem>
                                </ul>
                            </Nav>
                        </Navbar>
                    </section>
                </header>
                <section className="amazonBooks__content">
                    <aside className="amazonBooks__sidebar">
                        <section className="amazonBooks__selection">
                            <Link to="/">
                                <img src={gift_guides} alt="gift guides" />
                                <div className="link__text">Click here to browse our selection of inspiring book gifts</div>
                            </Link>
                        </section>     
                        <section className="amazonBooks__selection">
                            <Link to="/">
                                <img src={stories_worth_sharing} alt="stories worth sharing" />
                                <div className="link__text">Sharing the books we love</div>
                            </Link>
                        </section>
                        <section className="amazonBooks__selection">
                            <Link to="/">
                                <img src={blog_on} alt="blog on" />
                                <div className="link__text">Check Out Our New Blog</div>
                            </Link>
                        </section>
                        <section className="amazonBooks__selection">
                            <h2 className="amazonBooks__selectionTitle">
                                Best Ever Book Lists
                            </h2>
                            <ul className={`amazonBooks__selectionLists ml-0 ${bookList && "show--all"}`}>
                                <li>
                                    <Link to="/">LGBTQIA</Link>
                                </li>
                                <li>
                                    <Link to="/">Best Books Ever</Link>
                                </li>
                                <li>
                                    <Link to="/">Best Cookbooks Ever</Link>
                                </li>
                                <li>
                                    <Link to="/">Best Crime &amp; Thriller Books</Link>
                                </li>
                                <li>
                                    <Link to="/">Best Romance Books</Link>
                                </li>
                                <li>
                                    <Link to="/">Best YA Books</Link>
                                </li>
                                <li>
                                    <Link to="/">Best Bedtime Reading Books</Link>
                                </li>
                                <li>
                                    <Link to="/">Best Autobiographies</Link>
                                </li>
                                <li>
                                    <Link to="/">Best History Books</Link>
                                </li>
                                <li>
                                    <Link to="/">Best Graphic Novels</Link>
                                </li>
                                <li>
                                    <Link to="/">Classic Fantasy Books</Link>
                                </li>
                                <li>
                                    <Link to="/">Best Fairytales and Folktales</Link>
                                </li>
                                <li>
                                    <Link to="/" className="amazonBooks__sidebarToggle"
                                        onClick={(e) => showMore(e, "bookList")}>
                                            {bookList ? "show less" : "show more" }
                                    </Link>
                                </li>
                            </ul>
                        </section>
                        <section className="amazonBooks__selection">
                            <h2 className="amazonBooks__selectionTitle">
                                Manga!
                            </h2>
                            <Link to="/">
                                <img src={the_manga_store} alt="the manga store" />
                                <div className="link__text">New Series Added!</div>
                            </Link>
                        </section>
                        <section className="amazonBooks__selection">
                            <h2 className="amazonBooks__selectionTitle">
                                Popular Pages
                            </h2>
                            <ul className={`amazonBooks__selectionLists ml-0 ${popularPages && "show--all"}`}>
                                <li>
                                    <Link to="/">Ask the Author</Link>
                                </li>
                                <li>
                                    <Link to="/">Star Wars</Link>
                                </li>
                                <li>
                                    <Link to="/">Literary Prizes</Link>
                                </li>
                                <li>
                                    <Link to="/">New Releases</Link>
                                </li>
                                <li>
                                    <Link to="/">Books by Language</Link>
                                </li>
                                <li>
                                    <Link to="/">Textbooks</Link>
                                </li>
                                <li>
                                    <Link to="/">Harry Potter Book Series</Link>
                                </li>
                                <li>
                                    <Link to="/">Game of Thrones</Link>
                                </li>
                                <li>
                                    <Link to="/">Book Club Classics</Link>
                                </li>
                                <li>
                                    <Link to="/">Books on Screen</Link>
                                </li>
                                <li>
                                    <Link to="/">Fantasy Books</Link>
                                </li>
                                <li>
                                    <Link to="/">Business Books</Link>
                                </li>
                                <li>
                                    <Link to="/">War History Books</Link>
                                </li>
                                <li>
                                    <Link to="/" className="amazonBooks__sidebarToggle"
                                        onClick={(e) => showMore(e, "popularPages")}>
                                            {popularPages ? "show less" : "show more" }
                                    </Link>
                                </li>
                            </ul>
                        </section>
                        <section className="amazonBooks__selection">
                            <Link to="/">
                                <img src={taschen_hp} alt="taschen hp" />
                                <div className="link__text">View Beautiful Art and Photography titles from TASCHEN</div>
                            </Link>
                        </section>
                        <section className="amazonBooks__selection">
                            <h2 className="amazonBooks__selectionTitle">
                                Books by Language
                            </h2>
                            <Link to="/">
                                <img src={languages_sidebar_blank} alt="bestsellers by language" />
                            </Link>
                            <ul className={`amazonBooks__selectionLists ml-0 ${booksByLanguage && "show--all"}`}>
                                <li>
                                    <Link to="/">Books in Spanish</Link>
                                </li>
                                <li>
                                    <Link to="/">Books in German</Link>
                                </li>
                                <li>
                                    <Link to="/">Books in French</Link>
                                </li>
                                <li>
                                    <Link to="/">Books in Polish</Link>
                                </li>
                                <li>
                                    <Link to="/">Books in Italian</Link>
                                </li>
                                <li>
                                    <Link to="/">Books in Finnish</Link>
                                </li>
                                <li>
                                    <Link to="/" className="amazonBooks__sidebarToggle"
                                        onClick={(e) => showMore(e, "booksByLanguage")}>
                                            {booksByLanguage ? "show less" : "show more" }
                                    </Link>
                                </li>
                            </ul>
                        </section>
                    </aside>
                    <section className="amazonBooks__main">
                        <CarouselBook 
                            heading={"Click the banner below for the full selection"}
                            slider={
                                    [
                                        <Slider 
                                            type={"books"}
                                            carouselClass={"book__carousel amzn__carousel"}
                                            count={6}
                                            items={
                                                    [
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        }
                                                        
                                                    ]
                                            }
                                        />
                                    ]
                            } 
                        />
                        <CarouselBook 
                            heading={"Bestselling Books"}
                            slider={
                                    [
                                        <Slider 
                                            type={"books"}
                                            carouselClass={"book__carousel amzn__carousel"}
                                            count={6}
                                            items={
                                                    [
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        }
                                                        
                                                    ]
                                            }
                                        />
                                    ]
                            } 
                        />
                        <section className="amazonBook__tab">
                            <Link to="/">
                                <img src={read_create} alt="#readcreate" />
                            </Link>
                        </section>
                        <CarouselBook 
                            heading={"Booker Prize Winner 2021"}
                            slider={
                                    [
                                        <Slider 
                                            type={"books"}
                                            carouselClass={"book__carousel amzn__carousel"}
                                            count={6}
                                            items={
                                                    [
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        }
                                                        
                                                    ]
                                            }
                                        />
                                    ]
                            } 
                        />
                        <CarouselBook 
                            heading={"New Releases and in the News"}
                            slider={
                                    [
                                        <Slider 
                                            type={"books"}
                                            carouselClass={"book__carousel amzn__carousel"}
                                            count={6}
                                            items={
                                                    [
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        }
                                                        
                                                    ]
                                            }
                                        />
                                    ]
                            } 
                        />
                        <section className="amazonBook__tab">
                            <section className="amazonBook__tabModule amazonBook__tabModule--thirds">
                                <Link className="amazonBook__tabLink" to="/">
                                    <img src={childrens_books} alt="Great Books for Children" />
                                    <div className="amazonBook__linkItem">
                                        Great Books for Children
                                        <span className="amazonBook__caret">
                                            <RiArrowDropRightLine />
                                        </span>
                                    </div>
                                </Link>
                                <Link className="amazonBook__tabLink" to="/">
                                    <img src={fiction_books} alt="Great Fiction Selection" />
                                    <div className="amazonBook__linkItem">
                                        Great Fiction Selection
                                        <span className="amazonBook__caret">
                                            <RiArrowDropRightLine />
                                        </span>
                                    </div>
                                </Link>
                                <Link className="amazonBook__tabLink" to="/">
                                    <img src={crime_thriller} alt="Page-turning Crime and Thriller" />
                                    <div className="amazonBook__linkItem">
                                        Page-turning Crime and Thriller
                                        <span className="amazonBook__caret">
                                            <RiArrowDropRightLine />
                                        </span>
                                    </div>
                                </Link>
                                <Link className="amazonBook__tabLink" to="/">
                                    <img src={graphic_novels_manga} alt="Brilliant Manga and Graphic Novels" />
                                    <div className="amazonBook__linkItem">
                                        Brilliant Manga and Graphic Novels
                                        <span className="amazonBook__caret">
                                            <RiArrowDropRightLine />
                                        </span>
                                    </div>
                                </Link>
                            </section>
                        </section>
                        <section className="amazonBook__tab">
                            <section className="amazonBook__tabModule amazonBook__tabModule--thirds">
                                <Link className="amazonBook__tabLink" to="/">
                                    <div className="amazonBook__linkItem">
                                        Our Bookmarks
                                        <span className="amazonBook__caret">
                                            <RiArrowDropRightLine />
                                        </span>
                                    </div>
                                </Link>
                                <Link className="amazonBook__tabLink" to="/">
                                    <div className="amazonBook__linkItem">
                                        New Releases
                                        <span className="amazonBook__caret">
                                            <RiArrowDropRightLine />
                                        </span>
                                    </div>
                                </Link>
                                <Link className="amazonBook__tabLink" to="/">
                                    <div className="amazonBook__linkItem">
                                        Most Popular Authors
                                        <span className="amazonBook__caret">
                                            <RiArrowDropRightLine />
                                        </span>
                                    </div>
                                </Link>
                            </section>
                        </section>
                        <CarouselBook 
                            heading={"Bestselling Preorders"}
                            slider={
                                    [
                                        <Slider 
                                            type={"books"}
                                            carouselClass={"book__carousel amzn__carousel"}
                                            count={6}
                                            items={
                                                    [
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        }
                                                        
                                                    ]
                                            }
                                        />
                                    ]
                            } 
                        />
                        <section className="amazonBook__tab">
                            <section className="amazonBook__tabModule amazonBook__tabModule--thirds">
                                <Link className="amazonBook__tabLink" to="/">
                                    <div className="amazonBook__linkItem">
                                        Book Club Classics
                                        <span className="amazonBook__caret">
                                            <RiArrowDropRightLine />
                                        </span>
                                    </div>
                                </Link>
                                <Link className="amazonBook__tabLink" to="/">
                                    <div className="amazonBook__linkItem">
                                        Fiction
                                        <span className="amazonBook__caret">
                                            <RiArrowDropRightLine />
                                        </span>
                                    </div>
                                </Link>
                                <Link className="amazonBook__tabLink" to="/">
                                    <div className="amazonBook__linkItem">
                                        Stationery
                                        <span className="amazonBook__caret">
                                            <RiArrowDropRightLine />
                                        </span>
                                    </div>
                                </Link>
                                <Link className="amazonBook__tabLink" to="/">
                                    <div className="amazonBook__linkItem">
                                        Harry Potter
                                        <span className="amazonBook__caret">
                                            <RiArrowDropRightLine />
                                        </span>
                                    </div>
                                </Link>
                            </section>
                        </section>
                        <CarouselBook 
                            heading={"Children's Bestselling Books"}
                            slider={
                                    [
                                        <Slider 
                                            type={"books"}
                                            carouselClass={"book__carousel amzn__carousel"}
                                            count={6}
                                            items={
                                                    [
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        }
                                                        
                                                    ]
                                            }
                                        />
                                    ]
                            } 
                        />
                        <CarouselBook 
                            heading={"Bestselling Food and Drink Books"}
                            slider={
                                    [
                                        <Slider 
                                            type={"books"}
                                            carouselClass={"book__carousel amzn__carousel"}
                                            count={6}
                                            items={
                                                    [
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        }
                                                        
                                                    ]
                                            }
                                        />
                                    ]
                            } 
                        />
                        <CarouselBook 
                            heading={"Bestsellers in Spanish"}
                            slider={
                                    [
                                        <Slider 
                                            type={"books"}
                                            carouselClass={"book__carousel amzn__carousel"}
                                            count={6}
                                            items={
                                                    [
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        },
                                                        {
                                                            href: '/',
                                                            src: a_clockwork_orange,
                                                            altText: "A clockwork orange",
                                                            caption: "A clockwork orange",
                                                            author: "Anthony Burgess",
                                                            rating: <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                                        <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                                    </i>
                                                            ,
                                                            price: "14.39",
                                                            oldPrice : "23.07",
                                                            discount: ""

                                                        }
                                                        
                                                    ]
                                            }
                                        />
                                    ]
                            } 
                        />
                        <section className="amazonBook__tab">
                            <Link to="/">
                                <img src={languages_blank} alt="Bestsellers by Language" />
                            </Link>
                        </section>
                        <section className="amazonBook__tab">
                            <section className="amazonBook__tabModule amazonBook__tabModule--thirds">
                                <Link className="amazonBook__tabLink" to="/">
                                    <div className="amazonBook__linkItem">
                                        Books in French
                                        <span className="amazonBook__caret">
                                            <RiArrowDropRightLine />
                                        </span>
                                    </div>
                                </Link>
                                <Link className="amazonBook__tabLink" to="/">
                                    <div className="amazonBook__linkItem">
                                        Books in German
                                        <span className="amazonBook__caret">
                                            <RiArrowDropRightLine />
                                        </span>
                                    </div>
                                </Link>
                                <Link className="amazonBook__tabLink" to="/">
                                    <div className="amazonBook__linkItem">
                                        Books in Polish
                                        <span className="amazonBook__caret">
                                            <RiArrowDropRightLine />
                                        </span>
                                    </div>
                                </Link>
                                <Link className="amazonBook__tabLink" to="/">
                                    <div className="amazonBook__linkItem">
                                        Books in Italian
                                        <span className="amazonBook__caret">
                                            <RiArrowDropRightLine />
                                        </span>
                                    </div>
                                </Link>
                            </section>
                        </section>
                        <section className="amazonBook__tab">
                            <section className="amazonBook__tabModule amazonBook__tabModule--thirds">
                                <Link className="amazonBook__tabLink" to="/">
                                    <div className="amazonBook__linkItem">
                                        Books in Finnish
                                        <span className="amazonBook__caret">
                                            <RiArrowDropRightLine />
                                        </span>
                                    </div>
                                </Link>
                                <Link className="amazonBook__tabLink" to="/">
                                    <div className="amazonBook__linkItem">
                                        Books in Spanish
                                        <span className="amazonBook__caret">
                                            <RiArrowDropRightLine />
                                        </span>
                                    </div>
                                </Link>
                            </section>
                        </section>
                        <section className="amazonBooks__selection text-center">
                            <p>
                                Welcome to Book Depository! We have more than 20 million titles and free delivery worldwide to <Link to="/">over 170 countries</Link>. We also really, really love books.
                            </p>
                            <p>
                                Looking for your new favourite book? Browse some of our top categories such as 
                                &nbsp;<Link to="/">Children's Books</Link>, 
                                &nbsp;<Link to="/">Fiction</Link>, 
                                &nbsp;<Link to="/">Graphic Novels, Anime &amp; Manga</Link>, 
                                &nbsp;<Link to="/">Food &amp; Drink books</Link>, 
                                &nbsp;<Link to="/">Crafts &amp; Hobbies</Link>, 
                                &nbsp;<Link to="/">Art &amp; Photography</Link>, 
                                &nbsp;<Link to="/">Biography</Link>, and 
                                &nbsp;<Link to="/">Crime &amp; Thriller</Link>. 
                                &nbsp;Our editors have created lovely features for you to explore: 
                                &nbsp;<Link to="/">Adult colouring books</Link>, 
                                &nbsp;<Link to="/">Harry Potter</Link>, 
                                &nbsp;<Link to="/">Roald Dahl</Link>, 
                                &nbsp;<Link to="/">Books on screen</Link>, 
                                &nbsp;<Link to="/">Man Booker Prize winners</Link>, 
                                &nbsp;<Link to="/">LEGO</Link>, 
                                &nbsp;<Link to="/">Minecraft</Link> and more. 
                            </p>
                        </section>
                    </section>
                </section>
            </main>
            <footer className="amazonBooks__footer">
                <section className="amazonBooks__footerTop">
                    <section className="amazonBooks__newsLetter">
                        <section className="amazonBooks__signupTxt">
                            <img src={newsletter_icon} alt="Sign up" />
                            <p>Learn about new offers and get more deals by joining our newsletter</p>
                        </section>
                        <section className="amazonBooks__newsForm">
                            <form action="">
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email Address" />
                                </div>
                                <div className="form-group">
                                    <BtnBook
                                        text={"Sign up now"}
                                        type="form"
                                    />
                                </div>
                            </form>
                        </section>
                    </section>
                </section>
                <section className="amazonBooks__social">
                    <h4>Follow us</h4>
                    <ul className="amazonBooks__socialBtns">
                        <li>
                            <Link to="/">
                                <FaFacebookF />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <FaTwitter />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <FaPinterestP />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <FaInstagram />
                            </Link>
                        </li>
                    </ul>
                </section>
                <section className="amazonBooks__mainFooter">
                    <section className="amazonBooks__mainFooterWrap ml-0">
                        <ul className="amazonBooks__mainFooterLinks ml-0">
                            <li>
                                <h4 className="amazonBooks__footerTitle">Explore</h4>
                                <ul className="ml-0">
                                    <li>
                                        <Link rel="nofollow" to="/">
                                            About us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            Sitemap
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/bookmarks">
                                            Bookmarks
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" class="footer-sign-in-link">
                                            Sign in/Join
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h4 className="amazonBooks__footerTitle">How can we help?</h4>
                                <ul className="ml-0">
                                    <li>
                                        <Link rel="nofollow" to="/">
                                            Help
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            Contact us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/bookmarks">
                                            Where's my stuff?
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" class="footer-sign-in-link">
                                            Where do you deliver?
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h4 className="amazonBooks__footerTitle">Join us</h4>
                                <ul className="ml-0">
                                    <li>
                                        <Link rel="nofollow" to="/">
                                            Affiliates
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            Jobs
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h4 className="amazonBooks__footerTitle">Important stuff</h4>
                                <ul className="ml-0">
                                    <li>
                                        <Link rel="nofollow" to="/">
                                            Cookies
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            Jobs
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <section className="amazonBooks__footerPayment">
                            <section className="amazonBooks__paymentMethods">
                                <p>We accept these payment methods </p>
                                <img src={payment_options} alt="payment methods" />
                            </section>
                            <div id="copyright" className="text" title="BdiMetadata{webserver='web-bdi-fulltime-1', requestTime='0.05 sec', userSessionCurrencyCode='CAD', userSessionCountry='CA', userIp='99.253.49.209', cacheParams=BdiCacheMetadata{cacheCountry='null', cacheCurrency='null', controllerName='null', actionName='null', moduleName='null', serverScheme='null', cacheNamespace='null', cacheKey='null', generatedOn=Mon Nov 29 09:21:09 UTC 2021, cacheEnabled=true}}">
                                © 2021&nbsp;
                                The Book Depository Ltd.UK.<br/>Registered company number: 5124926
                            </div>
                        </section>
                    </section>
                </section>
            </footer>
        </div>
    )
}
export default AmazonBooks
