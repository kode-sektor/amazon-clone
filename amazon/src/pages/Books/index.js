import React from 'react'
import { Link } from 'react-router-dom'

import PrimaryCarousel from '../../components/UI/Carousel/PrimaryCarousel'
import { BrowseBoxSimple, BrowseBoxPrimary, BrowseCheckbox, BrowseBoxPlain } from '../../components/UI/BrowseBox'
import Slider from '../../components/UI/Carousel/Carousel'
import { Grid_One } from '../../components/UI/Grid'
import { CardSix, CardSeven } from '../../components/UI/Card'
import SearchResult from '../../components/UI/SearchResult'
import { SeeAllResults } from '../../components/UI/Button'

import Layout from '../../components/Layout/index'

import white_usb_charger from '../../images/products/white-usb-charger.jpg'
import loreal_paris from "../../images/banner/l'oreal-paris.jpg"
import books_at_amazon from '../../images/books-at-amazon.png'

import sports_biggest_stage from '../../images/banner/sports-biggest-stage.png'
import shop_for_off_to_university from '../../images/banner/shop-for-off-to-university.jpg'
import cetaphil from '../../images/brand/cetaphil.jpg'

import arts_and_photography from '../../images/nav/arts-and-photography.jpg'
import biographies_and_memoirs from '../../images/nav/biographies-and-memoirs.png'
import business_and_investing from '../../images/nav/business-and-investing.jpg'
import comics_and_graphic_novels from '../../images/nav/comics-and-graphic-novels.png'
import childrens_books from '../../images/nav/childrens-books.jpg'
import cookbooks_food_and_wine from '../../images/nav/cookbooks-food-and-wine.jpg'
import history from '../../images/nav/history.jpg'
import literature_and_fiction from '../../images/nav/literature-and-fiction.jpg'
import mystery_and_suspense from '../../images/nav/mystery-and-suspense.jpg'
import sci_fi_and_fantasy from '../../images/nav/sci-fi-and-fantasy.png'
import teens_and_young_adult from '../../images/nav/teens-and-young-adult.jpg'

import prime_two_day_shipping from '../../images/prime-two-day-shipping.png'
import buy_a_book_give_a_book from '../../images/banner/buy-a-book-give-a-book.jpg'
import amazon_editors_best_books_of_august from '../../images/banner/amazon-editors-best-books-of-august.jpg'
import shop_by_series from '../../images/banner/shop-by-series.jpg'
import k_12_store from '../../images/k-12-store.jpg'
import best_of_canadian_books from '../../images/best-of-canadian-books.jpg'
import best_books_of_the_month from '../../images/best-books-of-the-month.jpg'
import amazon_charts from '../../images/amazon-charts.jpg'

import robert_munsch_books from '../../images/nav/robert-munsch-books.jpg'
import scholastic_early_learners from '../../images/nav/scholastic-early-learners.jpg'
import peppa_pig from '../../images/nav/peppa-pig.png'
import graphix from '../../images/nav/graphix.jpg'
import little_people_big_dreams from '../../images/nav/little-people-big-dreams.jpg'
import narwhal_and_jelly from '../../images/nav/narwhal-and-jelly.jpg'

import the_comfort_book from '../../images/banner/the-comfort-book.jpg'
import leading_at_a_distance from '../../images/books/leading-at-a-distance.jpg'
import one_two_three from '../../images/books/one-two-three.jpg'
import the_secret_keeper_of_jaipur from '../../images/books/the-secret-keeper-of-jaipur.jpg'
import blackout from '../../images/books/blackout.jpg'



import './index.css'
    
const Books = () => {
    return (
        <Layout>
             <section className="a__container">
                <section>
                    <div className="bxc__grid__spacing__large">
                        <div className="bxc__grid__container bxc__grid__container__width__1500">
                            <div className="bxc__grid__row bxc__grid__row__light">
                                <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                    <div className="bxc__grid__content bxc__grid__content__light">
                                        <div className="bxc__grid__image bxc__grid__image__light">
                                            <Link to="/">
                                                <img src={shop_for_off_to_university} alt="Off to University Personal Care"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-center">
                    <img src={books_at_amazon} alt="Books at Amazon" />
                </section>
                <section className="bookNav">
                    <header className="a__spacing__small a__spacing__top__base bookNav__title">
                        <h5 className="a__size__large">
                            Shop by Category
                        </h5>
                    </header>
                    <section className="a__spacing__small bookNav__menu">
                        <section className="bookNav__menuItems">
                            <figure className="bookNav__menuTile">
                                <Link to="/">
                                    <div className="bookNav__menuSingleTile a__spacing__mini">
                                        <div className="bookNav__menuImgContainer">
                                            <img src={arts_and_photography} alt="arts and photography" />
                                        </div>
                                        <div className="bookNav__tileOverlay"></div>
                                    </div>
                                    <div>
                                        <span className="bookNav__faceoutText position-relative a__color__base gb__size__small">
                                            Arts &amp; Photography
                                        </span>
                                    </div>
                                </Link>
                            </figure>
                            <figure className="bookNav__menuTile">
                                <Link to="/">
                                    <div className="bookNav__menuSingleTile a__spacing__mini">
                                        <div className="bookNav__menuImgContainer">
                                            <img src={biographies_and_memoirs} alt="biographies and memoirs" />
                                        </div>
                                        <div className="bookNav__tileOverlay"></div>
                                    </div>
                                    <div>
                                        <span className="bookNav__faceoutText position-relative a__color__base gb__size__small">
                                            Biographies &amp; Memoirs
                                        </span>
                                    </div>
                                </Link>
                            </figure>
                            <figure className="bookNav__menuTile">
                                <Link to="/">
                                    <div className="bookNav__menuSingleTile a__spacing__mini">
                                        <div className="bookNav__menuImgContainer">
                                            <img src={business_and_investing} alt="business and investing" />
                                        </div>
                                        <div className="bookNav__tileOverlay"></div>
                                    </div>
                                    <div>
                                        <span className="bookNav__faceoutText position-relative a__color__base gb__size__small">
                                            Business &amp; Investing
                                        </span>
                                    </div>
                                </Link>
                            </figure>
                            <figure className="bookNav__menuTile">
                                <Link to="/">
                                    <div className="bookNav__menuSingleTile a__spacing__mini">
                                        <div className="bookNav__menuImgContainer">
                                            <img src={comics_and_graphic_novels} alt="comics and graphic novels" />
                                        </div>
                                        <div className="bookNav__tileOverlay"></div>
                                    </div>
                                    <div>
                                        <span className="bookNav__faceoutText position-relative a__color__base gb__size__small">
                                            Comics &amp; graphic novels
                                        </span>
                                    </div>
                                </Link>
                            </figure>
                            <figure className="bookNav__menuTile">
                                <Link to="/">
                                    <div className="bookNav__menuSingleTile a__spacing__mini">
                                        <div className="bookNav__menuImgContainer">
                                            <img src={childrens_books} alt="childrens books" />
                                        </div>
                                        <div className="bookNav__tileOverlay"></div>
                                    </div>
                                    <div>
                                        <span className="bookNav__faceoutText position-relative a__color__base gb__size__small">
                                            Childrens Books
                                        </span>
                                    </div>
                                </Link>
                            </figure>
                            <figure className="bookNav__menuTile">
                                <Link to="/">
                                    <div className="bookNav__menuSingleTile a__spacing__mini">
                                        <div className="bookNav__menuImgContainer">
                                            <img src={cookbooks_food_and_wine} alt="cookbooks food and wine" />
                                        </div>
                                        <div className="bookNav__tileOverlay"></div>
                                    </div>
                                    <div>
                                        <span className="bookNav__faceoutText position-relative a__color__base gb__size__small">
                                            Cookbooks Food &amp; Wine
                                        </span>
                                    </div>
                                </Link>
                            </figure>
                            <figure className="bookNav__menuTile">
                                <Link to="/">
                                    <div className="bookNav__menuSingleTile a__spacing__mini">
                                        <div className="bookNav__menuImgContainer">
                                            <img src={history} alt="history" />
                                        </div>
                                        <div className="bookNav__tileOverlay"></div>
                                    </div>
                                    <div>
                                        <span className="bookNav__faceoutText position-relative a__color__base gb__size__small">
                                            History
                                        </span>
                                    </div>
                                </Link>
                            </figure>
                            <figure className="bookNav__menuTile">
                                <Link to="/">
                                    <div className="bookNav__menuSingleTile a__spacing__mini">
                                        <div className="bookNav__menuImgContainer">
                                            <img src={literature_and_fiction} alt="literature and fiction" />
                                        </div>
                                        <div className="bookNav__tileOverlay"></div>
                                    </div>
                                    <div>
                                        <span className="bookNav__faceoutText position-relative a__color__base gb__size__small">
                                            Literature &amp; Fiction
                                        </span>
                                    </div>
                                </Link>
                            </figure>
                            <figure className="bookNav__menuTile">
                                <Link to="/">
                                    <div className="bookNav__menuSingleTile a__spacing__mini">
                                        <div className="bookNav__menuImgContainer">
                                            <img src={mystery_and_suspense} alt="mystery and suspense" />
                                        </div>
                                        <div className="bookNav__tileOverlay"></div>
                                    </div>
                                    <div>
                                        <span className="bookNav__faceoutText position-relative a__color__base gb__size__small">
                                            Mystery &amp; Suspense
                                        </span>
                                    </div>
                                </Link>
                            </figure>
                            <figure className="bookNav__menuTile">
                                <Link to="/">
                                    <div className="bookNav__menuSingleTile a__spacing__mini">
                                        <div className="bookNav__menuImgContainer">
                                            <img src={sci_fi_and_fantasy} alt="sci_fi and fantasy" />
                                        </div>
                                        <div className="bookNav__tileOverlay"></div>
                                    </div>
                                    <div>
                                        <span className="bookNav__faceoutText position-relative a__color__base gb__size__small">
                                            Sci_Fi &amp; Fantasy
                                        </span>
                                    </div>
                                </Link>
                            </figure>
                            <figure className="bookNav__menuTile">
                                <Link to="/">
                                    <div className="bookNav__menuSingleTile a__spacing__mini">
                                        <div className="bookNav__menuImgContainer">
                                            <img src={teens_and_young_adult} alt="teens and young adult" />
                                        </div>
                                        <div className="bookNav__tileOverlay"></div>
                                    </div>
                                    <div>
                                        <span className="bookNav__faceoutText position-relative a__color__base gb__size__small">
                                            Teens &amp; Young Adult
                                        </span>
                                    </div>
                                </Link>
                            </figure>
                        </section>
                    </section>
                </section>
                <section className="d-flex mx-0 flex-fill pet">
                    <section className="fashion__browsebox browserBox">
                        <BrowseBoxSimple
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "English Books"
                                    },
                                    {
                                        href : "/",
                                        text : "French Books"
                                    },
                                    {
                                        href : "/",
                                        text : "Kindle Books"
                                    }
                                ]
                            }
                        />
                        <BrowseBoxSimple
                            title={"Textbooks"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "New & Used Textbooks"
                                    },
                                    {
                                        href : "/",
                                        text : "Prime Student"
                                    },
                                    {
                                        href : "/",
                                        text : "K-12 Textbook Store"
                                    }
                                ]
                            }
                        />
                        <BrowseBoxSimple
                            title={"Editors' Picks"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Best Books of the Year"
                                    },
                                    {
                                        href : "/",
                                        text : "Best Books of the Month"
                                    },
                                    {
                                        href : "/",
                                        text : "Best Books of the Year for Children and Teens"
                                    }
                                ]
                            }
                        />
                        <BrowseBoxSimple
                            title={"Popular Features"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Today's Deals"
                                    },
                                    {
                                        href : "/",
                                        text : "Canadian Books"
                                    },
                                    {
                                        href : "/",
                                        text : "From Page to Screen"
                                    },
                                    {
                                        href : "/",
                                        text : "First Novel Awards"
                                    },
                                    {
                                        href : "/",
                                        text : "Bargains in Books"
                                    }
                                ]
                            }
                        />
                        <BrowseBoxSimple
                            title={"Featured Stores"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Book to Screen Store"
                                    },
                                    {
                                        href : "/",
                                        text : "Globe and Mail Bestsellers"
                                    },
                                    {
                                        href : "/",
                                        text : "DaNew York Times Best Sellersrts"
                                    },
                                    {
                                        href : "/",
                                        text : "Black Voices in Books"
                                    },
                                    {
                                        href : "/",
                                        text : "For Dummies Store"
                                    },
                                    {
                                        href : "/",
                                        text : "Wiley's Professional Central"
                                    },
                                    {
                                        href : "/",
                                        text : "Jenny Han Books"
                                    }
                                ]
                            }
                        />
                        <BrowseBoxSimple
                            title={"Kindle"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Kindle eBooks"
                                    },
                                    {
                                        href : "/",
                                        text : "Kindle Deals"
                                    },
                                    {
                                        href : "/",
                                        text : "Kindle Reading Apps"
                                    },
                                    {
                                        href : "/",
                                        text : "Kindle Unlimited"
                                    }
                                ]
                            }
                        />
                        <BrowseBoxSimple
                            title={"Audible Audiobooks"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Audiobooks"
                                    },
                                    {
                                        href : "/",
                                        text : "Audible Membership"
                                    }
                                ]
                            }
                        />
                        <BrowseBoxPrimary
                            title={"Department"}
                            links={
                                [
                                    {
                                        text : "Books",
                                        indentClass : "a__indent__1"
                                    },
                                    {
                                        href : "/",
                                        text : "Arts & Photography",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Biographies & Memoirs",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Business & Investing",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Calendars",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Children's Books",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Christian Books & Bibles",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Comics & Graphic Novels",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Computers & Technology",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Cookbooks, Food & Wine",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Crafts, Hobbies & Home",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Education & Reference",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Erotica",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Health, Fitness & Dieting",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "History",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Humour & Entertainment",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Law",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "LGBTQ2S+",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Literature & Fiction",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Medical Books",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Mystery, Thriller & Suspense",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Parenting & Relationships",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Politics & Social Sciences",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Professional & Technical",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Religion & Spirituality",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Romance",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Science & Math",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Science Fiction & Fantasy",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Self-Help",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Sports & Outdoors",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Teen & Young Adult",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Textbooks",
                                        indentClass : "a__indent__2"
                                    },
                                    {
                                        href : "/",
                                        text : "Travel",
                                        indentClass : "a__indent__2"
                                    }
                                ]
                            }
                        />
                        <BrowseCheckbox
                            title={"Language"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "English"
                                    },
                                    {
                                        href : "/",
                                        text : "French"
                                    },
                                    {
                                        href : "/",
                                        text : "Spanish"
                                    },
                                    {
                                        href : "/",
                                        text : "Japanese"
                                    }
                                ]
                            }
                        />
                        <BrowseBoxPlain
                            title={"Format"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Kindle Edition"
                                    },
                                    {
                                        href : "/",
                                        text : "Paperback"
                                    },
                                    {
                                        href : "/",
                                        text : "Hardcover"
                                    },
                                    {
                                        href : "/",
                                        text : "Board Book"
                                    },
                                    {
                                        href : "/",
                                        text : "Audible Audio Edition"
                                    },
                                    {
                                        href : "/",
                                        text : "Large Print"
                                    },
                                    {
                                        href : "/",
                                        text : "Spiral-bound"
                                    },
                                    {
                                        href : "/",
                                        text : "Loose Leaf"
                                    },
                                    {
                                        href : "/",
                                        text : "Audio CD"
                                    }
                                ]
                            }
                        />
                        <BrowseBoxPlain
                            title={"Author"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Dk"
                                    },
                                    {
                                        href : "/",
                                        text : "Peter Pauper Press"
                                    },
                                    {
                                        href : "/",
                                        text : "James Patterson"
                                    },
                                    {
                                        href : "/",
                                        text : "James W. Patterson"
                                    },
                                    {
                                        href : "/",
                                        text : "Nora Roberts"
                                    },
                                    {
                                        href : "/",
                                        text : "Stephen King"
                                    },
                                    {
                                        href : "/",
                                        text : "Stephen Michael King"
                                    }
                                ]
                            }
                        />
                        <BrowseCheckbox
                            title={"Book Series"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Breakthrough"
                                    },
                                    {
                                        href : "/",
                                        text : "Abby Kane FBI Thriller"
                                    },
                                    {
                                        href : "/",
                                        text : "The NightShade Forensic Files"
                                    },
                                    {
                                        href : "/",
                                        text : "Second Chance Series"
                                    },
                                    {
                                        href : "/",
                                        text : "FBI Thriller"
                                    },
                                    {
                                        href : "/",
                                        text : "The Water Series"
                                    },
                                    {
                                        href : "/",
                                        text : "Fallen Immortals"
                                    }
                                ]
                            }
                        />
                        <BrowseCheckbox
                            title={"Amazon Prime"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : <>
                                                    <i className="a__icon a__icon__prime a__icon__medium apb__browse__refinements__icon" role="presentation"></i>
                                               </>
                                    }
                                ]
                            }
                        />
                        <BrowseBoxPlain
                            title={"Shipping Option"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "FREE Shipping"
                                    }
                                ]
                            }
                        />
                        <BrowseBoxPlain
                            title={"Avg. Customer Review"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : <>
                                                    <div aria-label="4 Stars &amp; Up">
                                                        <i className="a__icon a__icon__star__medium a__star__medium__4">
                                                            <span className="a__icon__alt">4 Stars &amp; Up</span>
                                                        </i>
                                                        <span className="a__size__small a__color__base" dir="auto"> &amp; Up</span>
                                                    </div>
                                               </>
                                    },
                                    {
                                        href : "/",
                                        text : <>
                                                    <div aria-label="4 Stars &amp; Up">
                                                        <i className="a__icon a__icon__star__medium a__star__medium__3">
                                                            <span className="a__icon__alt">3 Stars &amp; Up</span>
                                                        </i>
                                                        <span className="a__size__small a__color__base" dir="auto"> &amp; Up</span>
                                                    </div>
                                               </>
                                    },
                                    {
                                        href : "/",
                                        text : <>
                                                    <div aria-label="4 Stars &amp; Up">
                                                        <i className="a__icon a__icon__star__medium a__star__medium__2">
                                                            <span className="a__icon__alt">2 Stars &amp; Up</span>
                                                        </i>
                                                        <span className="a__size__small a__color__base" dir="auto"> &amp; Up</span>
                                                    </div>
                                               </>
                                    },
                                    {
                                        href : "/",
                                        text : <>
                                                    <div aria-label="4 Stars &amp; Up">
                                                        <i className="a__icon a__icon__star__medium a__star__medium__1">
                                                            <span className="a__icon__alt">1 Stars &amp; Up</span>
                                                        </i>
                                                        <span className="a__size__small a__color__base" dir="auto"> &amp; Up</span>
                                                    </div>
                                               </>
                                    }
                                ]
                            }
                        />
                        <BrowseBoxPlain
                            title={"New Releases"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Last 30 days",
                                    },
                                    {
                                        href : "/",
                                        text : "Last 90 days",
                                    },
                                    {
                                        href : "/",
                                        text : "Coming Soon",
                                    }
                                ]
                            }
                        />
                        <BrowseCheckbox
                            title={"Deals"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Today's Deals"
                                    }
                                ]
                            }
                        />
                        <BrowseCheckbox
                            title={"Availability"}
                            ticked={true}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Include Out of Stock"
                                    }
                                ]
                            }
                        />
                        <section className="a__row">
                            <Link to="/">
                                <img src={prime_two_day_shipping} alt="prime two day shipping" />
                            </Link>
                        </section>
                    </section>
                    <section className="apBrowse flex-fill">
                        <section className="bxc__grid__spacing__large">
                            <div className="bxc__grid__container bxc__grid__container__width__1500">
                                <div className="bxc__grid__row bxc__grid__row__light">
                                    <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={buy_a_book_give_a_book} alt="buy a book give a book"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="bxc__grid__spacing__large">
                            <div className="bxc__grid__container bxc__grid__container__width__1500">
                                <div className="bxc__grid__row bxc__grid__row__light">
                                    <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={amazon_editors_best_books_of_august} alt="amazon editors best books of august"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="bxc__grid__spacing__large">
                            <div className="bxc__grid__container bxc__grid__container__width__1500">
                                <div className="bxc__grid__row bxc__grid__row__light">
                                    <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <hr className="a__divider__normal" />
                                        </div>
                                    </div>
                                </div>
                                <div className="bxc__grid__row bxc__grid__row__light">
                                    <div className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={k_12_store} alt="k 12 store"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={best_books_of_the_month} alt="best books of the month"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={best_of_canadian_books} alt="best of canadian books"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__3__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={amazon_charts} alt="amazon charts"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bxc__grid__row bxc__grid__row__light">
                                    <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={shop_by_series} alt="shop by series"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bxc__grid__row bxc__grid__row__light">
                                    <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={robert_munsch_books} alt="robert munsch books"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={scholastic_early_learners} alt="scholastic early learners"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={peppa_pig} alt="peppa pig"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={graphix} alt="graphix"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={little_people_big_dreams} alt="little people big dreams"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__2__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={narwhal_and_jelly} alt="narwhal and jelly"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bxc__grid__row bxc__grid__row__light">
                                    <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <hr className="a_divider_normal" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bxc__grid__row bxc__grid__row__light">
                                    <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={the_comfort_book} alt="the comfort book"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bxc__grid__row bxc__grid__row__light">
                                    <div className="bxc__grid__column bxc__grid__column__6__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={leading_at_a_distance} alt="leading at a distance"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__6__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={one_two_three} alt="one two three"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bxc__grid__row bxc__grid__row__light">
                                    <div className="bxc__grid__column bxc__grid__column__6__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={the_secret_keeper_of_jaipur} alt="the secret keeper of jaipur"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxc__grid__column bxc__grid__column__6__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <Link to="/">
                                                    <img src={blackout} alt="blackout"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bxc__grid__row bxc__grid__row__light">
                                    <div className="bxc__grid__column bxc__grid__column__6__of__12 bxc__grid__column__light">
                                        <div className="bxc__grid__content bxc__grid__content__light">
                                            <div className="bxc__grid__image bxc__grid__image__light">
                                                <hr className="a__divider__normal" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <Grid_One   
                                title={"Featured categories"}
                                item={  /* Usually in 5's */
                                    [
                                        {
                                            img : white_usb_charger,
                                            caption : 
                                                <>
                                                    Accessories &amp; Supplies
                                                </>
                                            ,
                                            categories: [
                                                    {
                                                        link : "/",
                                                        caption : "Cell Phone Accessories"
                                                    },
                                                    {
                                                        link : "/",
                                                        caption : "Computer Accessories"
                                                    },
                                                    {
                                                        link : "/",
                                                        caption : "Home Audio &amp; Video Accessories"
                                                    }
                                            ]
                                        },
                                        {
                                            img : white_usb_charger,
                                            caption : 
                                                <>
                                                    Accessories &amp; Supplies
                                                </>
                                            ,
                                            categories: [
                                                    {
                                                        link : "/",
                                                        caption : "Cell Phone Accessories"
                                                    },
                                                    {
                                                        link : "/",
                                                        caption : "Computer Accessories"
                                                    },
                                                    {
                                                        link : "/",
                                                        caption : "Home Audio &amp; Video Accessories"
                                                    }
                                            ]
                                        },
                                        {
                                            img : white_usb_charger,
                                            caption : 
                                                <>
                                                    Accessories &amp; Supplies
                                                </>
                                            ,
                                            categories: [
                                                    {
                                                        link : "/",
                                                        caption : "Cell Phone Accessories"
                                                    },
                                                    {
                                                        link : "/",
                                                        caption : "Computer Accessories"
                                                    },
                                                    {
                                                        link : "/",
                                                        caption : "Home Audio & Video Accessories"
                                                    }
                                            ]
                                        },
                                        {
                                            img : white_usb_charger,
                                            caption : 
                                                <>
                                                    Accessories &amp; Supplies
                                                </>
                                            ,
                                            categories: [
                                                    {
                                                        link : "/",
                                                        caption : "Cell Phone Accessories"
                                                    },
                                                    {
                                                        link : "/",
                                                        caption : "Computer Accessories"
                                                    },
                                                    {
                                                        link : "/",
                                                        caption : "Home Audio & Video Accessories"
                                                    }
                                            ]
                                        },
                                        {
                                            img : white_usb_charger,
                                            caption : 
                                                <>
                                                    Accessories &amp; Supplies
                                                </>
                                            ,
                                            categories: [
                                                    {
                                                        link : "/",
                                                        caption : "Cell Phone Accessories"
                                                    },
                                                    {
                                                        link : "/",
                                                        caption : "Computer Accessories"
                                                    },
                                                    {
                                                        link : "/",
                                                        caption : "Home Audio & Video Accessories"
                                                    }
                                            ]
                                        }
                                    ]
                                }
                            />
                        </section>
                        <section>   
                            <CardSix
                                title={"Featured Deals"}
                                link={"/"}
                                type={"featured"}
                                items={ 
                                    [   
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817",
                                                bestSeller : 1,
                                                percentage_off : 20
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817",
                                                bestSeller : 2
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817",
                                                bestSeller : 3
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817"
                                            }
                                        },
                                        {
                                            item : {
                                                img : white_usb_charger,
                                                alt : "Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release",
                                                title : "Apple AirPods with Charging Case",
                                                price : 159,
                                                price_fraction : 98,
                                                old_price : 177.00,
                                                rating : "4__5",
                                                count : "2,817"
                                            }
                                        }
                                    ]
                                }
                            />
                        </section>
                        <section className="book__appendage">
                            <h2>About Books at Amazon.ca</h2>
                            <p>Amazon.ca is committed to providing the best online shopping experience for books throughout Canada.  Find your next great read at Amazon.ca.  Fiction-lovers will find the bestselling books in literature & fiction, mysteries & thrillers, science fiction & fantasy, and romance. Amazon.ca has a great selection of children’s books and books for teens—from classic storybooks to popular series.</p>
                            <p>Those who are more into facts and figures will discover popular nonfiction books covering a vast array of topics like current events, economics, history, politics, and the latest biographies and memoirs.  And let’s not forget young readers.  Students can discover great textbook deals on millions of new and used titles in our Textbook Store, as well as test prep resources, study guides, and dictionaries. Amazon.ca also carries professional reference books on everything from the national electric code to business law.  No matter your profession, Amazon.ca strives to carry the books you need.</p>
                            <p>Amazon.ca also has an extensive selection of cookbooks, craft books, and home improvement manuals for home chefs and do-it-yourself enthusiasts. Whether you looking for a specific textbook on quantum physics, an irresistible new cookbook, or the next title on your book club’s reading list, with everyday low prices on millions of titles, Amazon.ca is sure to have the book you’re looking for at a great price.</p>
                        </section>
                    </section>
                </section>
            </section>
        </Layout>
    )
}

export default Books
