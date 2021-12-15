import React from 'react'
import { Link } from 'react-router-dom'

import header_logo_goodreads from '../../images/header-logo-goodreads.png'
import jhumpa_lahiri_namesake from '../../images/jhumpa-lahiri-namesake.jpg'
import life_of_pi from '../../images/life-of-pi.jpg'
import cloud_atlas from '../../images/cloud-atlas.jpg'
import curious_incident_of_the_dog_in_the_night_time from '../../images/curious-incident-of-the-dog-in-the-night-time.jpg'
import a_suitable_boy from '../../images/a-suitable-boy.jpg'
import discovery_arrow from '../../images/discovery-arrow.png'
import animals_in_translation from '../../images/animals-in-translation.jpg'
import animals_make_us_human from '../../images/animals-make-us-human.jpg'
import some_we_love_some_we_hate_some_we_eat from '../../images/some-we-love-some-we-hate-some-we-eat.jpg'
import next_of_kin from '../../images/next-of-kin.jpg'
import oscar_wilde from '../../images/thumbnails/oscar-wilde.jpg'
import selfish_and_impatient from '../../images/thumbnails/selfish-and-impatient.jpg'
import albert_einstein from '../../images/thumbnails/albert-einstein.jpg'
import frank_zappa from '../../images/thumbnails/frank-zappa.jpg'
import marcus_tullius from '../../images/thumbnails/marcus-tullius.jpg'
import bernard_baruch from '../../images/thumbnails/bernard-baruch.jpg'
import william_purkey from '../../images/thumbnails/william-purkey.jpg'
import dr_seuss from '../../images/thumbnails/dr-seuss.jpg'
import mae_west from '../../images/thumbnails/mae-west.jpg'
import mahatma_gandhi from '../../images/thumbnails/mahatma-gandhi.jpg'
import robert_frost from '../../images/thumbnails/robert-frost.jpg'
import j_k_rowling from '../../images/thumbnails/j-k-rowling.jpg'
import albert_camus from '../../images/thumbnails/albert-camus.jpg'
import mark_twain from '../../images/thumbnails/mark-twain.jpg'
import friendship_born_at_the_moment from '../../images/thumbnails/friendship-born-at-the-moment.jpg'
import maya_angelou from '../../images/thumbnails/maya-angelou.jpg'
import elbart_hubbard from '../../images/thumbnails/elbart-hubbard.jpg'
import choice_logo_medium from '../../images/choice-logo-medium.png'
import five_great_books_hitting_the_shelves_this_week from '../../images/5-great-books-hitting-the-shelves-this-week.jpg'
import the_girl_with_the_dragon_tattoo from '../../images/thumbnails/the-girl-with-the-dragon-tattoo.jpg'
import and_then_there_were_none from '../../images/thumbnails/and-then-there-were-none.jpg'
import angels_and_demons from '../../images/thumbnails/angels-and-demons.jpg'
import rebecca from '../../images/thumbnails/rebecca.jpg'
import the_help from '../../images/thumbnails/the-help.jpg'
import the_kite_runner from '../../images/thumbnails/the-kite-runner.jpg'
import water_for_elephants from '../../images/thumbnails/water-for-elephants.jpg'
import the_book_thief from '../../images/thumbnails/the-book-thief.jpg'
import to_kill_a_mocking_bird from '../../images/thumbnails/to-kill-a-mocking-bird.jpg'
import nineteen_eightyfour from '../../images/thumbnails/1984.jpg'
import harry_potter_and_the_sorcerers_stone from '../../images/thumbnails/harry-potter-and-the-sorcerers-stone.jpg'
import the_great_gatsby from '../../images/thumbnails/the-great-gatsby.jpg'
import footer_facebook from '../../images/footer-facebook.svg'
import footer_twitter from '../../images/footer-twitter.svg'
import footer_linkedin from '../../images/footer-linkedin.svg'
import footer_instagram from '../../images/footer-instagram.svg'
import badge_ios_desktop_homepage from '../../images/badge-ios-desktop-homepage.svg'
import badge_android_desktop_home from '../../images/badge-android-desktop-home.png'

import './index.css'

const GoodReads = () => {
    return (
        <section className="goodreads--page">
            <header className="goodreads__header">
                <section className="goodreads__headerNav">
                    <section className="goodreads__signedOut">
                        <section className="goodreads__navTitle">
                            <Link to="/">
                                <img src={header_logo_goodreads} alt="Goodreads: Book reviews, recommendations, and discussion" />
                            </Link>
                        </section>
                        <section className="goodreads__mastHead">
                            <div className="goodreads__newAcct">
                                <h2>
                                    Discover &amp; read more
                                </h2>
                                <ul className="goodreads__newAcctSm">
                                    <li>
                                        <Link to="/" className="gr__button gr__button--facebook gr__button--dark gr__button--auth facebookConnectButton fbSignInButton">
                                            <i className="gr__button--facebook__icon"></i>&nbsp;
                                            Continue with Facebook
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="gr__button gr__button--amazon gr__button--fullWidth gr__button--auth">
                                            <i className="gr__button--amazon__icon"></i>&nbsp;
                                            Continue with Amazon
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="gr__button gr__button--apple gr__button--fullWidth  gr__button--auth">
                                            <i className="gr__button--apple__icon"></i>&nbsp;
                                            Continue with Apple
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="gr__button gr__button--fullWidth gr__button--dark gr__button--auth">
                                            Sign up with email
                                        </Link>
                                    </li>
                                </ul>
                                <section className="goodreads__legal">
                                    By creating an account, you agree to the Goodreads &nbsp;
                                    <Link to="/" className="gr__hyperlink" rel="noopener noreferrer" target="_blank">
                                        Terms of Service
                                    </Link> and
                                    <Link to="/" className="gr__hyperlink" rel="noopener noreferrer" target="_blank">
                                        Privacy Policy
                                    </Link>.
                                </section>
                                <section className="goodreads__signIn">
                                    Already a member? &nbsp;
                                    <Link to="/" className="gr__hyperlink">
                                        Sign In
                                    </Link>
                                </section>
                            </div>
                        </section>
                    </section>
                </section>
            </header>
            <main className="goodreads__page">
                <section className="goodreads__pageContent">
                    <section className="goodreads__pageContentPri">
                        <section className="d-flex">
                            <section className="goodreads__sellingPoint">
                                <h2>Deciding what to read next?</h2>
                                <p>
                                    You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.
                                </p>
                            </section>
                            <section className="goodreads__sellingPoint">
                                <h2>What are your friends reading?</h2>
                                <p>
                                    Chances are your friends are discussing their favorite (and least favorite) books on Goodreads.
                                </p>
                            </section>
                        </section>
                        <section className="goodreads__discovery">
                            <h2>What will <em>you</em> discover?</h2>
                            <section className="goodreads__discover d-flex justify-content-between">
                                <section className="goodreads__liked">
                                    <p>Because Brian liked…</p>
                                    <ul className="goodreads__discoveryImg d-flex ml-0">
                                        <li>
                                            <Link to="/">
                                                <img src={jhumpa_lahiri_namesake} alt="The Namesake by Jhumpa Lahiri" title="The Namesake by Jhumpa Lahiri" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <img src={life_of_pi} alt="Life of Pi by Yann Martel" title="Life of Pi by Yann Martel" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <img src={cloud_atlas} alt="Cloud Atlas by David Mitchell" title="Cloud Atlas by David Mitchell" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <img src={curious_incident_of_the_dog_in_the_night_time} alt="The Curious Incident of the Dog in the Night-Time by Mark Haddon" title="The Curious Incident of the Dog in the Night-Time by Mark Haddon" />
                                            </Link>
                                        </li>
                                    </ul>
                                </section>
                                <section className="goodreads__discovered">
                                    <p>He discovered:</p>
                                    <ul className="goodreads__discoveryImg d-flex ml-0">
                                        <li>
                                            <Link to="/">
                                                <img src={a_suitable_boy} alt="A Suitable Boy by Vikram Seth" title="A Suitable Boy by Vikram Seth" />
                                            </Link>
                                        </li>
                                        <li>
                                            <p>Contemporary, Classics</p>
                                        </li>
                                    </ul>
                                </section>
                            </section>
                            <section className="goodreads__discoveryBoxArrow">
                                <img src={discovery_arrow} alt="&rarr;" />
                            </section>
                            <section className="goodreads__discover d-flex justify-content-between align-items-center">
                                <section className="goodreads__liked">
                                    <p>Because Shomeret liked…</p>
                                    <ul className="goodreads__discoveryImg d-flex ml-0">
                                        <li>
                                            <Link to="/">
                                                <img src={animals_in_translation} alt="Animals in Translation by Temple Grandin" title="Animals in Translation by Temple Grandin" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <img src={animals_make_us_human} alt="Animals Make Us Human by Temple Grandin" title="Animals Make Us Human by Temple Grandin" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <img src={some_we_love_some_we_hate_some_we_eat} alt="Some We Love, Some We Hate, Some We Eat by Hal Herzog" title="Some We Love, Some We Hate, Some We Eat by Hal Herzog" />
                                            </Link>
                                        </li>
                                    </ul>
                                </section>
                                <section>
                                    <img src={discovery_arrow} alt="&rarr;" />
                                </section>
                                <section className="goodreads__discovered">
                                    <p>She discovered:</p>
                                    <ul className="goodreads__discoveryImg d-flex ml-0">
                                        <li>
                                            <Link to="/">
                                                <img src={next_of_kin} alt="Next of Kin by Roger Fouts" title="Next of Kin by Roger Fouts" />
                                            </Link>
                                        </li>
                                        <li>
                                            <p>Contemporary, Classics</p>
                                        </li>
                                    </ul>
                                </section>
                            </section>
                        </section>
                        <section className="goodreads__browseBox">
                            <h2>Search and browse books</h2>
                            <section className="goodreads__searchbox">
                                <form action="" className="goodreads__sitesearch">
                                    <div className="position-relative">
                                        <input type="text" className="goodreads__sitesearchField" placeholder="Title / Author / ISBN" />
                                    </div>
                                </form>
                            </section>
                        </section>
                        <section className="goodreads__category">
                            <ul className="ml-0 d-flex">
                                <li>
                                    <ul className="ml-0">
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Art</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Biography</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Business</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Children's</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Christian</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Classics</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Comics</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Cookbooks</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul className="ml-0">
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Ebooks</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Fantasy</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Fiction</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Graphic Novels's</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Historical Fiction</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">History</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Horror</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Memoir</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul className="ml-0">
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Music</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Mystery</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Nonfiction</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Poetry</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Psychology</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Romance</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Science</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Science Fiction</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul className="ml-0">
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Self Help</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Sports</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Thriller</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Travel</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Young Adult</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">More genres</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </section>
                        <section className="goodreads__teaserbox">
                            <h2>Quotes</h2>
                            <section class="goodreads__teaserSlider site-main d-flex">
                                <section class="goodreads__teaserSlide">
                                    <ul>
                                        <li>
                                            <Link to="/" className="goodreads__teasterTb">
                                                <img src={oscar_wilde} alt="oscar wilde" />
                                            </Link>
                                            <section className="goodreads__quoteTxt">
                                                “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
                                                <br />
                                                ―
                                                <span class="goodreads__author">
                                                    Oscar Wilde
                                                </span>
                                            </section>
                                        </li>
                                        <li>
                                            <Link to="/" className="goodreads__teasterTb">
                                                <img src={selfish_and_impatient} alt="I'm selfish, impatient and a little insecure. I make mistakes, I am out of control" />
                                            </Link>
                                            <section className="goodreads__quoteTxt">
                                                “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
                                                <br />
                                                ―
                                                <span class="goodreads__author">
                                                    Marilyn Monroe
                                                </span>
                                            </section>
                                        </li>
                                        <li>
                                            <Link to="/" className="goodreads__teasterTb">
                                                <img src={albert_einstein} alt="Albert Einstein" />
                                            </Link>
                                            <section className="goodreads__quoteTxt">
                                                “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
                                                <br />
                                                ―
                                                <span class="goodreads__author">
                                                    Albert Einstein
                                                </span>
                                            </section>
                                        </li>
                                        <li>
                                            <Link to="/" className="goodreads__teasterTb">
                                                <img src={frank_zappa} alt="Frank Zappa" />
                                            </Link>
                                            <section className="goodreads__quoteTxt">
                                                “So many books, so little time.”
                                                <br />
                                                ―
                                                <span class="goodreads__author">
                                                    Frank Zappa
                                                </span>
                                            </section>
                                        </li>
                                        <li>
                                            <Link to="/" className="goodreads__teasterTb">
                                                <img src={marcus_tullius} alt="Marcus Tullius Cicero" />
                                            </Link>
                                            <section className="goodreads__quoteTxt">
                                                “A room without books is like a body without a soul.”
                                                <br />
                                                ―
                                                <span class="goodreads__author">
                                                    Marcus Tullius Cicero
                                                </span>
                                            </section>
                                        </li>
                                        <li>
                                            <Link to="/" className="goodreads__teasterTb">
                                                <img src={bernard_baruch} alt="Bernard M. Baruch" />
                                            </Link>
                                            <section className="goodreads__quoteTxt">
                                                “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
                                                <br />
                                                ―
                                                <span class="goodreads__author">
                                                    Bernard M. Baruch
                                                </span>
                                            </section>
                                        </li>
                                        <li>
                                            <Link to="/" className="goodreads__teasterTb">
                                                <img src={william_purkey} alt="William W. Purkey" />
                                            </Link>
                                            <section className="goodreads__quoteTxt">
                                                “You've gotta dance like there's nobody watching,<br />
                                                Love like you'll never be hurt,<br />
                                                Sing like there's nobody listening,<br />
                                                And live like it's heaven on earth.”                                               <br />  
                                                ―
                                                <span class="goodreads__author">
                                                    William W. Purkey
                                                </span>
                                            </section>
                                        </li>
                                        <li>
                                            <Link to="/" className="goodreads__teasterTb">
                                                <img src={dr_seuss} alt="Dr. Seuss" />
                                            </Link>
                                            <section className="goodreads__quoteTxt">
                                                “You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
                                                <br />
                                                ―
                                                <span class="goodreads__author">
                                                    Dr. Seuss
                                                </span>
                                            </section>
                                        </li>
                                        <li>
                                            <Link to="/" className="goodreads__teasterTb">
                                                <img src={mae_west} alt="Mae West" />
                                            </Link>
                                            <section className="goodreads__quoteTxt">
                                                “You only live once, but if you do it right, once is enough.”
                                                <br />
                                                ―
                                                <span class="goodreads__author">
                                                    Mae West
                                                </span>
                                            </section>
                                        </li>
                                        <li>
                                            <Link to="/" className="goodreads__teasterTb">
                                                <img src={mahatma_gandhi} alt="Mahatma Gandhi" />
                                            </Link>
                                            <section className="goodreads__quoteTxt">
                                                “Be the change that you wish to see in the world.”
                                                <br />
                                                ―
                                                <span class="goodreads__author">
                                                    Mahatma Gandhi
                                                </span>
                                            </section>
                                        </li>
                                        <li>
                                            <Link to="/" className="goodreads__teasterTb">
                                                <img src={robert_frost} alt="Robert Frost" />
                                            </Link>
                                            <section className="goodreads__quoteTxt">
                                                “In three words I can sum up everything I've learned about life: it goes on.”
                                                <br />
                                                ―
                                                <span class="goodreads__author">
                                                    Robert Frost
                                                </span>
                                            </section>
                                        </li>
                                        <li>
                                            <Link to="/" className="goodreads__teasterTb">
                                                <img src={j_k_rowling} alt="J.K. Rowling" />
                                            </Link>
                                            <section className="goodreads__quoteTxt">
                                                “If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”
                                                <br />
                                                ―
                                                <span class="goodreads__author">
                                                    J.K. Rowling, &nbsp;
                                                </span>
                                                <Link to="/" className="link__default">Harry Potter and the Goblet of Fire</Link>
                                            </section>
                                        </li>
                                        <li>
                                            <Link to="/" className="goodreads__teasterTb">
                                                <img src={albert_camus} alt="Albert Camus" />
                                            </Link>
                                            <section className="goodreads__quoteTxt">
                                                “Don’t walk in front of me… I may not follow <br />
                                                Don’t walk behind me… I may not lead <br />
                                                Walk beside me… just be my friend”
                                                <br /> 
                                                ―
                                                <span class="goodreads__author">
                                                    Albert Camus
                                                </span>
                                            </section>
                                        </li>
                                        <li>
                                            <Link to="/" className="goodreads__teasterTb">
                                                <img src={mark_twain} alt="Mark Twain" />
                                            </Link>
                                            <section className="goodreads__quoteTxt">
                                                “If you tell the truth, you don't have to remember anything.”
                                                <br /> 
                                                ―
                                                <span class="goodreads__author">
                                                    Mark Twain
                                                </span>
                                            </section>
                                        </li>
                                        <li>
                                            <Link to="/" className="goodreads__teasterTb">
                                                <img src={friendship_born_at_the_moment} alt="Friendship ... is born at the moment when one man says to another What! You" />
                                            </Link>
                                            <section className="goodreads__quoteTxt">
                                                “Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”
                                                <br /> 
                                                ―
                                                <span class="goodreads__author">
                                                    C.S. Lewis,
                                                </span>
                                                <Link to="/" className="link__default">The Four Loves</Link>
                                            </section>
                                        </li>
                                        <li>
                                            <Link to="/" className="goodreads__teasterTb">
                                                <img src={maya_angelou} alt="Maya Angelou" />
                                            </Link>
                                            <section className="goodreads__quoteTxt">
                                                “I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”
                                                <br /> 
                                                ―
                                                <span class="goodreads__author">
                                                    Maya Angelou
                                                </span>
                                            </section>
                                        </li>
                                        <li>
                                            <Link to="/" className="goodreads__teasterTb">
                                                <img src={elbart_hubbard} alt="Elbert Hubbard" />
                                            </Link>
                                            <section className="goodreads__quoteTxt">
                                                “A friend is someone who knows all about you and still loves you.”
                                                <br /> 
                                                ―
                                                <span class="goodreads__author">
                                                    Elbert Hubbard
                                                </span>
                                            </section>
                                        </li>
                                        <li>
                                            <Link to="/" className="goodreads__teasterTb">
                                                <img src={oscar_wilde} alt="Oscar Wilde" />
                                            </Link>
                                            <section className="goodreads__quoteTxt">
                                                “Always forgive your enemies; nothing annoys them so much.”
                                                <br /> 
                                                ―
                                                <span class="goodreads__author">
                                                    Oscar Wilde
                                                </span>
                                            </section>
                                        </li>
                                        <li>
                                            <Link to="/" className="goodreads__teasterTb">
                                                <img src={oscar_wilde} alt="Oscar Wilde" />
                                            </Link>
                                            <section className="goodreads__quoteTxt">
                                                “To live is the rarest thing in the world. Most people exist, that is all.”
                                                <br /> 
                                                ―
                                                <span class="goodreads__author">
                                                    Oscar Wilde
                                                </span>
                                            </section>
                                        </li>
                                        <li>
                                            <Link to="/" className="goodreads__teasterTb">
                                                <img src={mahatma_gandhi} alt="Mahatma Gandhi" />
                                            </Link>
                                            <section className="goodreads__quoteTxt">
                                                “Live as if you were to die tomorrow. Learn as if you were to live forever.”
                                                <br />
                                                ―
                                                <span class="goodreads__author">
                                                    Mahatma Gandhi
                                                </span>
                                            </section>
                                        </li>
                                    </ul>
                                </section>
                                <section className="goodreads__quoteBoxLinks">
                                    <ul>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Best quotes</Link><br />
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Love quotes</Link><br />
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Inspirational quotes</Link><br />
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Funny quotes</Link><br />
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Motivational quotes</Link><br />
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Life quotes</Link><br />
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Friends quotes</Link><br />
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">Positive quotes</Link><br />
                                        </li>
                                        <li>
                                            <Link to="/" className="gr__hyperlink">More quotes</Link><br />
                                        </li>
                                    </ul>
                                </section>
                            </section>
                        </section>
                        <section className="goodreads__choiceAwards">
                            <h2>
                                Goodreads Choice Awards: The Best Books 2021
                            </h2>
                            <section className="d-flex goodreads__choiceLinks">
                                <section className="goodreads__choiceLogoContainer">
                                    <Link to="/">
                                        <img src={choice_logo_medium} alt="2021 Goodreads Choice Awards" title="2021 Goodreads Choice Awards" />
                                    </Link>
                                </section>
                                <ul className="goodreads__choiceLinkList">
                                    <li>
                                        <Link to="/" className="gr__hyperlink">Best Books 2021</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="gr__hyperlink">Best Fiction</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="gr__hyperlink">Best Mystery &amp; Thriller</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="gr__hyperlink">Best Historical Fiction</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="gr__hyperlink">Best Fantasy</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="gr__hyperlink">Best Romance</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="gr__hyperlink">Best Science Fiction</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="gr__hyperlink">Best Horror</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="gr__hyperlink">Best Humor</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="gr__hyperlink">Best Nonfiction</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="gr__hyperlink">Best Memoir &amp; Autobiography</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="gr__hyperlink">Best History &amp; Biography</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="gr__hyperlink">Best Graphic Novels &amp; Comics</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="gr__hyperlink">Best Poetry</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="gr__hyperlink">Best Debut Novel</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="gr__hyperlink">Best Young Adult Fiction</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="gr__hyperlink">Best Young Adult Fantasy &amp; Science Fiction</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="gr__hyperlink">Best Middle Grade &amp; Children's</Link>
                                    </li>
                                </ul>
                            </section>
                        </section>
                    </section>
                    <aside className="goodreads__pageContentSec">
                        <section className="goodreads__asideMain">
                            <h3>News &amp; Interviews</h3>
                            <Link to="/" className="goodreads__asideTitle">5 Great Books Hitting Shelves This Week</Link>
                            <Link>
                                <img className="w-100" src={five_great_books_hitting_the_shelves_this_week} alt="5 Great Books Hitting Shelves This Week" />
                            </Link>
                            <section className="goodreads__likesComments">
                                <span className="goodreads__metaText">14 likes</span>
                                &nbsp;.&nbsp;
                                <span className="goodreads__metaText">1 comment</span>
                            </section>
                        </section>
                        <section className="goodreads__featuredTeaserBox">
                            <h3>Love lists?</h3>
                            <section className="goodreads__featuredTeaserList">
                                <section className="goodreads__featuredTeaserImg">
                                    <Link to="/">
                                        <img src={the_girl_with_the_dragon_tattoo} alt="The Girl with the Dragon Tattoo by Stieg Larsson" title="The Girl with the Dragon Tattoo by Stieg Larsson" />
                                    </Link>
                                    <Link to="/">
                                        <img src={and_then_there_were_none} alt="And Then There Were None by Agatha Christie" title="And Then There Were None by Agatha Christie" />
                                    </Link>
                                    <Link to="/">
                                        <img src={angels_and_demons} alt="Angels & Demons by Dan Brown" title="Angels & Demons by Dan Brown" />
                                    </Link>
                                    <Link to="/">
                                        <img src={rebecca} alt="Rebecca by Daphne du Maurier" title="Rebecca by Daphne du Maurier" />
                                    </Link>
                                </section>
                                <section className="goodreads__featuredTeaserTitle">
                                    <div>
                                        <Link to="/">Best Crime &amp; Mystery Books</Link>
                                    </div>
                                    <footer className="goodreds__featuredTeaserMeta">
                                        6,673 books | 15,121 voters
                                    </footer>
                                </section>
                            </section>
                            <section className="goodreads__featuredTeaserList">
                                <section className="goodreads__featuredTeaserImg">
                                    <Link to="/">
                                        <img src={the_help} alt="The Help by Kathryn Stockett" title="The Help by Kathryn Stockett" />
                                    </Link>
                                    <Link to="/">
                                        <img src={the_kite_runner} alt="The Kite Runner by Khaled Hosseini" title="The Kite Runner by Khaled Hosseini" />
                                    </Link>
                                    <Link to="/">
                                        <img src={water_for_elephants} alt="Water for Elephants by Sara Gruen" title="Water for Elephants by Sara Gruen" />
                                    </Link>
                                    <Link to="/">
                                        <img src={the_book_thief} alt="The Book Thief by Markus Zusak" title="The Book Thief by Markus Zusak" />
                                    </Link>
                                </section>
                                <section className="goodreads__featuredTeaserTitle">
                                    <div>
                                        <Link to="/">Best for Book Clubs</Link>
                                    </div>
                                    <footer className="goodreds__featuredTeaserMeta">
                                        8,051 books | 14,650 voters
                                    </footer>
                                </section>
                            </section>
                            <section className="goodreads__featuredTeaserList">
                                <section className="goodreads__featuredTeaserImg">
                                    <Link to="/">
                                        <img src={to_kill_a_mocking_bird} alt="To Kill a Mockingbird by Harper Lee" title="To Kill a Mockingbird by Harper Lee" />
                                    </Link>
                                    <Link to="/">
                                        <img src={nineteen_eightyfour} alt="1984 by George Orwell" title="1984 by George Orwelle" />
                                    </Link>
                                    <Link to="/">
                                        <img src={harry_potter_and_the_sorcerers_stone} alt="Harry Potter and the Sorcerer's Stone by J.K. Rowling" title="Harry Potter and the Sorcerer's Stone by J.K. Rowling" />
                                    </Link>
                                    <Link to="/">
                                        <img src={the_great_gatsby} alt="The Great Gatsby by F. Scott Fitzgerald" title="The Great Gatsby by F. Scott Fitzgerald" />
                                    </Link>
                                </section>
                                <section className="goodreads__featuredTeaserTitle">
                                    <div>
                                        <Link to="/">Best Books of the 20th Century</Link>
                                    </div>
                                    <footer className="goodreds__featuredTeaserMeta">
                                        7,532 books | 50,048 voters
                                    </footer>
                                </section>
                            </section>
                            <p>
                                <Link to="/" className="gr__hyperlink">
                                    More book lists
                                </Link>
                            </p>
                        </section>
                        <section className="goodreads__featuredTeaserBox">
                            <h3>Are you an author or a publisher?</h3>
                            <p>
                                Gain access to a massive audience of book lovers.
                                Goodreads is a great place to promote your books.
                            </p>
                            <section className="text-center">
                                <Link to="/" className="gr__button gr__button--small">
                                    Author program
                                </Link>&nbsp;&nbsp;
                                <Link to="/" className="gr__button gr__button--small">
                                    Advertise
                                </Link>
                            </section>
                        </section>
                    </aside>
                </section>
            </main>
            <footer className="goodreads__footer">
                <div className="container">
                    <div className="row flex-nowrap">
                        <section className="col-md-8 col-lg-6">
                            <div className="row flex-nowrap">
                                <section className="col-md-3 col-lg-4">
                                    <h3 className="goodreads__footerHeading">Company</h3>
                                    <ul className="goodreads__footerListLinks">
                                        <li>
                                            <Link to="/">About us</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Careers</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Terms</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Privacy</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Interest Based Ads</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Ad Preferences</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Help</Link>
                                        </li>
                                    </ul>
                                </section>
                                <section className="col-md-3 col-lg-4">
                                    <h3 className="goodreads__footerHeading">Work with us</h3>
                                    <ul className="goodreads__footerListLinks">
                                        <li>
                                            <Link to="/">Authors</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Advertise</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Authors &amp; ads blog</Link>
                                        </li>
                                        <li>
                                            <Link to="/">API</Link>
                                        </li>
                                    </ul>
                                </section>
                                <section className="col-md-3 col-lg-4">
                                    <h3 className="goodreads__footerHeading">Connect</h3>
                                    <ul className="goodreads__footerSocials ml-0">
                                        <li>
                                            <Link to="/">
                                                <img src={footer_facebook} alt="Goodreads on Facebook" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <img src={footer_twitter} alt="Goodreads on Twitter" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <img src={footer_instagram} alt="Goodreads on Instagram" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <img src={footer_linkedin} alt="Goodreads on LinkedIn" />
                                            </Link>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                        </section>
                        <section className="col-md-4 col-lg-6 d-flex justify-content-end">
                            <section className="goodreads__footerAppStore d-inline-block ml-auto">
                                <ul className="ml-0 d-flex">
                                    <li>
                                        <Link to="/">
                                            <img src={badge_ios_desktop_homepage} alt="Download app for iOS" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <img src={badge_android_desktop_home} alt="Download app for Android" />
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="goodreads__footerAppCopy">
                                    <li>© 2021 Goodreads, Inc.</li>
                                    <li>
                                        <Link to="/">Mobile version</Link>
                                    </li>
                                </ul>
                            </section>
                        </section>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default GoodReads

