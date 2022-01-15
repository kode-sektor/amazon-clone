import React from 'react'
import { Link } from 'react-router-dom'

import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'

import rebrand_hearts from '../../images/rebrand-hearts.png'
import shopbop_bag from '../../images/shopbop-bag.png'
import rebrand_shopbop_logo from '../../images/rebrand-shopbop-logo.png'
import shopbop_welcome from '../../images/shopbop-welcome.jpg'
import arrow_transparent from '../../images/arrow-transparent.gif'

import './index.css'

const Shopbop = () => {
    return (
        <div className="shopbop--page">
            <header className="shopbop__header">
                <section className="shopbop__headerContainer">
                    <section className="shopbop__headerBar">
                        <section className="shopbop__headerCurrency">
                            <section className="shopbop__util">
                                <span className="shopbop__utilMarker">
                                    <FaMapMarkerAlt />
                                </span> CA<MdKeyboardArrowDown />
                            </section>
                            <section className="shopbop__util">
                                EN<MdKeyboardArrowDown />
                            </section>
                            <section className="shopbop__util">
                                $CAD<MdKeyboardArrowDown />
                            </section>
                        </section>
                        <section className="shopbop__headerFree">
                            <Link to="/">
                                FREE shipping + FREE returns to Canada                    
                            </Link>
                        </section>
                        <section className="shopbop__headerRegister">
                            <section className="shopbop__signin">
                                <Link to="/">Sign In / Register</Link> <MdKeyboardArrowDown />
                            </section>
                            <section className="shopbop__hearts">
                                <Link to="/">
                                    <img src={rebrand_hearts} alt="My Hearts" />
                                </Link>
                            </section>
                        </section>
                        <section className="shopbop__cart">
                            <img src={shopbop_bag} alt="shopbop bag" />
                            <div className="shopbop__cartCount">0</div>
                        </section>
                    </section>
                </section>
                <section className="shopbop__nav">
                    <section className="shopbop__logo">
                        <Link to="/">
                            <img src={rebrand_shopbop_logo} alt="rebrand shopbop logo" />
                        </Link>
                    </section>
                    <nav className="shopbop__navList">
                        <ul>
                            <li>
                                <Link to="/">
                                    What's New
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Our Favorites
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Designers
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Clothing
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Active
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Shoes
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Bags
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Accessories
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Men
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Sale
                                </Link>
                            </li>
                            <li>
                                <button className="shopbop__search">
                                    <AiOutlineSearch />
                                </button>
                            </li>
                        </ul>
                    </nav>
                </section>
            </header>
            <main className="shopbop__body">
                <section className="shopbop__welcome">
                    <section className="shopbop__welcomeTo">
                        <header className="shopbop__welcomeHeader">
                            Welcome To
                            <section className="shopbop__welcomeLogo">
                                <img src={rebrand_shopbop_logo} alt="" />
                            </section>
                        </header>
                        <section className="shopbop__container">
                            <p>
                                We're the ultimate destination for style inspiration and discovery, offering the latest from 1,000+ established and emerging designers, daily new arrivals, and can't-miss styling tips. Your perfect wardrobe starts (and ends) here.
                            </p>
                        </section>
                        <section className="shopbop__container">
                            <p>
                                Get emails about new arrivals from designers you love, and when your favorite items are selling out or going on sale.
                            </p>
                        </section>
                        <section className="shopbop__container text-center">
                            <form action="" className="shopbob__mailing">
                                <input type="email" placeholder="Enter your email address" value={""} />
                                <input type="submit" value="Subscribe" />
                            </form>
                        </section>
                        <ul className="shopbop__containerLinks">
                            <li>
                                <Link to="/">What's New</Link>
                            </li>
                            <li>
                                <Link to="/">Customer Service</Link>
                            </li>
                            <li>
                                <Link to="/">Size Guide</Link>
                            </li>
                            <li>
                                <Link to="/">Account</Link>
                            </li>
                        </ul>
                    </section>
                    <section className="shopbop__posterImg">
                        <img src={shopbop_welcome} alt="shopbop welcome" />
                    </section>
                </section>
                <section className="shopbop__seo">
                    <p>
                        Free shipping and easy returns to Canada. Featured Shopbop Designers for Canada
                        &nbsp;
                        <img src={arrow_transparent} alt="arrow transparent" />
                    </p>
                    <ul className="seoLinks ml-0">
                        <li><Link to="/">Vince</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Citizens of Humanity</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">AGOLDE</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">MOTHER</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Rag &amp; Bone</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Dr. Martens</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Veronica Beard</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Honeydew Intimates</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Levi's</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">R13</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Madewell</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Z Supply</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Tory Burch</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Free People</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">FRAME</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Eberjey</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">PAIGE</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Ulla Johnson</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">ANINE BING</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">FREECITY</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Nili Lotan</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Isabel Marant</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">J Brand</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">GANNI</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">adidas by Stella McCartney</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Rag &amp; Bone/JEAN</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Sam Edelman</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Isabel Marant Etoile</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Reformation</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">THE GREAT.</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Loeffler Randall</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Alexander Wang</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">STAUD</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Veja</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">alice + olivia</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Golden Goose</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Line &amp; Dot</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">See by Chloe</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">BB Dakota</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">APL: Athletic Propulsion Labs</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Theory</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Shashi</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">White + Warren</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Acne Studios</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">L'AGENCE</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">PJ Salvage</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Zimmermann</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">RE/DONE</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Rebecca Minkoff</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Stuart Weitzman</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Velvet</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Brochu Walker</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Sablyn</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Sea</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Commando</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">A.L.C.</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Zoe Chicco</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">BY FAR</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">3.1 Phillip Lim</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">AG</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">MANU Atelier</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">The Marc Jacobs</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Hanky Panky</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Schutz</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">SAM.</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Beyond Yoga</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">STAND STUDIO</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">MOUSSY VINTAGE</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Plush</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">RAILS</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Black Halo</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Cosabella</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">What Goes Around Comes Around</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">IRO</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Equipment</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">XIRENA</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Villa Rouge</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">MONROW</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">ENGLISH FACTORY</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">SPANX</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">525</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Jacquemus</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Splits59</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">James Perse</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Lioness</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Rachel Comey</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Mackage</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Canada Goose</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">WAYF</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">SUNDRY</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Good American</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">One Teaspoon</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">DL1961</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Veronica Beard Jean</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Enza Costa</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Suzanne Kalan</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Cult Gaia</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Tibi</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Roller Rabbit</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Mansur Gavriel</Link>&nbsp;&nbsp;</li>
                    </ul>
                    <p>
                        Canadian Fashion Trends - Mode Canada
                        &nbsp;
                        <img src={arrow_transparent} alt="arrow transparent" />
                    </p>
                    <ul className="seoLinks ml-0">
                        <li><Link to="/">Add down</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Mini dresses</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Trench coats</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Knee high boots</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Puffy jackets</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Denim glossary</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Handbags sale</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">New designers this season</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Designer cashmere</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Designer cardigans</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Women's knit sweaters</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Designer cardigans</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">Bikini tops</Link>&nbsp;&nbsp;</li>
                    </ul>
                    <p>
                        Canadian Dress Trends
                        &nbsp;
                        <img src={arrow_transparent} alt="arrow transparent" />
                    </p>
                    <ul className="seoLinks ml-0">
                        <li><Link to="/">stylish ruffle dresses</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">cocktaill resses</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">wedding guest dresses</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">green dresses</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">tunic dresses</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">green dresses</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">strapless dresses</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">crochet dresses</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">blush dresses</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">dance dresses</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">swing dresses</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">long bridesmaid dresses</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">blue maxi dresses</Link>&nbsp;&nbsp;</li>
                        <li><Link to="/">plum dresses</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">grecian dresses</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">blue maxi dresses</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">coral maxi dresses</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">silk dresses</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">navy blue maxi dresses</Link>&nbsp;&nbsp;</li>
                        <li><Link to="/">boat neck dresses</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">blue long sleeve dresses</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">blue strapless dresses</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">blue wrap dresses</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">formal maxi dresses</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">metallic gold dresses</Link>&nbsp;&nbsp;</li>
                        <li><Link to="/">red long sleeve maxi dresses</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">short sleeve white dresses</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">two tone dresses</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">blue and orange dresses</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">ivory long dresses</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">orange and black dresses</Link>&nbsp;&nbsp;</li>
                        <li><Link to="/">black and white print dresses</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">black sequin mini dresses</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">dress belts</Link>&nbsp;&nbsp;</li>
                    </ul>
                    <p>
                        Canadian Women's Shoes Trends
                        &nbsp;
                        <img src={arrow_transparent} alt="arrow transparent" />
                    </p>
                    <ul className="seoLinks ml-0">
                        <li><Link to="/">Platform Shoes</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">High Heel Shoes</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">ballet flat slippers</Link>&nbsp;/&nbsp;</li>
                        <Link to="/">yellow flats</Link>&nbsp;/&nbsp;
                        <li><Link to="/">navy blue flats</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">red ballet flats</Link>&nbsp;/&nbsp;</li>
                        <Link to="/">cheetah flats</Link>&nbsp;/&nbsp;
                        <Link to="/">tan flats</Link>&nbsp;/&nbsp;
                        <li><Link to="/">flat ankle booties</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">blue ballet flats</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">navy ballet flats</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">flats with bows</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">espadrilles flats</Link>&nbsp;/&nbsp;</li>
                        <Link to="/">striped flats</Link>&nbsp;/&nbsp;
                        <li><Link to="/">embellished flats</Link>&nbsp;/&nbsp;</li>
                        <Link to="/">sneaker flats</Link>&nbsp;/&nbsp;
                        <li><Link to="/">beige ballet flats</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">tory burch red flats</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">gold wedding flats</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">flat ballet shoes</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">black flats with strap</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">ferragamo jelly flats</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">flats with strap</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">flats shoes for sale</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">brown tory burch flats</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">stuart weitzman flat sandals</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">yellow shoes flats</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">lace black flats</Link>&nbsp;/&nbsp;</li>
                        <Link to="/">leather boots</Link>&nbsp;/&nbsp;
                        <li><Link to="/">knee high black boots</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">black fur boots</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">black and white boots</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">boots with heels</Link>&nbsp;/&nbsp;</li>
                        <Link to="/">pink pumps</Link>&nbsp;/&nbsp;
                        <Link to="/">green pumps</Link>&nbsp;/&nbsp;
                        <Link to="/">suede pumps</Link>&nbsp;/&nbsp;
                        <li><Link to="/">nude suede pumps</Link>&nbsp;/&nbsp;</li>
                        <Link to="/">lace up pumps</Link>&nbsp;/&nbsp;
                        <li><Link to="/">black open toe pumps</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">salvatore ferragamo pumps vara</Link>&nbsp;/&nbsp;</li>
                        <Link to="/">high pumps</Link>&nbsp;/&nbsp;
                        <Link to="/">wedges shoes</Link>&nbsp;/&nbsp;
                        <li><Link to="/">polka dot shoes</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">nude wedges shoes</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">silver heels shoes</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">red suede shoes</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">blue tennis shoes</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">flat ballet shoes</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">wedges shoes sale</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">flats shoes for sale</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">black and green shoes</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">yellow shoes flats</Link>&nbsp;/&nbsp;</li>
                        <Link to="/">wedge sandals</Link>&nbsp;/&nbsp;
                        <li><Link to="/">wedges sandals</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">black strappy sandals</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">black sandal heels</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">black thong sandals</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">black heeled sandals</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">gold thong sandals</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">stuart weitzman flat sandals</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">ipanema flip flops</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">tan flip flops</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">gold flip flops</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">bow flip flops</Link>&nbsp;/&nbsp;</li>
                        <Link to="/">gold heels</Link>&nbsp;/&nbsp;
                        <Link to="/">booties heels</Link>&nbsp;/&nbsp;
                        <li><Link to="/">black sandal heels</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">gold and black heels</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">silver heels shoes</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">high heels pumps</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">black heeled sandals</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">stuart weitzman heels</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">blue pumps heels</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">boots with heels</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">heels with laces</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">rachel zoe heels</Link>&nbsp;&nbsp;</li>
                    </ul>
                    <p>
                        Canadian Women's Clothing Trends
                        &nbsp;
                        <img src={arrow_transparent} alt="arrow transparent" />
                    </p>
                    <ul className="seoLinks ml-0">
                        <li><Link to="/">white tops and blouses</Link>&nbsp;/</li>
                        <li><Link to="/">satin blouse</Link>&nbsp;/</li>
                        <li><Link to="/">navy blue blouses</Link>&nbsp;/</li>
                        <li><Link to="/">navy blue blouse</Link>&nbsp;/</li>
                        <li><Link to="/">short sleeve blouses</Link>&nbsp;/</li>
                        <li><Link to="/">white long sleeve blouse</Link>&nbsp;/</li>
                        <li><Link to="/">tan blouses</Link>&nbsp;/</li>
                        <li><Link to="/">coral blouses</Link>&nbsp;/</li>
                        <li><Link to="/">white tops and blouses</Link>&nbsp;/</li>
                        <li><Link to="/">polka dots blouses</Link>&nbsp;/</li>
                        <li><Link to="/">blouses with tie neck</Link>&nbsp;/</li>
                        <li><Link to="/">sleeveless blouses</Link>&nbsp;/</li>
                        <li><Link to="/">designer white blouses</Link>&nbsp;/</li>
                        <li><Link to="/">white sleeveless blouses</Link>&nbsp;/</li>
                        <li><Link to="/">pleated blouses</Link>&nbsp;/</li>
                        <li><Link to="/">equipment blouses on sale</Link>&nbsp;/</li>
                        <li><Link to="/">silver blouses</Link>&nbsp;/</li>
                        <li><Link to="/">hippie blouses</Link>&nbsp;/</li>
                        <li><Link to="/">vintage high waisted jeans</Link>&nbsp;/</li>
                        <li><Link to="/">light blue skinny jeans</Link>&nbsp;/</li>
                        <li><Link to="/">color skinny jeans</Link>&nbsp;/</li>
                        <li><Link to="/">printed skinny jeans</Link>&nbsp;/</li>
                        <li><Link to="/">boho jeans</Link>&nbsp;/</li>
                        <li><Link to="/">mother skinny jeans</Link>&nbsp;/</li>
                        <li><Link to="/">paige denim skinny jeans</Link>&nbsp;/</li>
                        <li><Link to="/">denim high waisted skirts</Link>&nbsp;/</li>
                        <li><Link to="/">paige denim skinny jeans</Link>&nbsp;/</li>
                        <li><Link to="/">patterned pants</Link>&nbsp;/</li>
                        <li><Link to="/">draped pants</Link>&nbsp;/</li>
                        <li><Link to="/">pants pocket</Link>&nbsp;/</li>
                        <li><Link to="/">pants with skirts</Link>&nbsp;/</li>
                        <li><Link to="/">only hearts panties</Link>&nbsp;/</li>
                        <li><Link to="/">sweater cardigans</Link>&nbsp;/</li>
                        <li><Link to="/">only hearts panties</Link>&nbsp;/</li>
                        <li><Link to="/">maternity leggings</Link>&nbsp;/</li>
                        <li><Link to="/">grey leggings</Link>&nbsp;/</li>
                        <li><Link to="/">camo leggings</Link>&nbsp;/</li>
                        <li><Link to="/">spanx leggings</Link>&nbsp;/</li>
                        <li><Link to="/">splendid leggings</Link>&nbsp;</li>
                    </ul>
                    <p>
                        Canadian Women's Swimwear &amp; Bikini Trends
                        &nbsp;
                        <img src={arrow_transparent} alt="arrow transparent" />
                    </p>
                    <ul className="seoLinks ml-0">
                        <li><Link to="/">black bikinis</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">underwire bikinis</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">bikinis underwear</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">high waisted bikinis swimwear</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">black bikinis bottom</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">marc jacobs bikinis</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">black bikinis panties</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">calvin klein bikinis underwear</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">pink bikinis panties</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">green bikinis tops</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">royal blue bikinis</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">bikinis tops with underwire</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">low bikinis</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">coral bikinis bottoms</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">white bandeau bikinis tops</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">gingham bikinis</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">high waist bikinis bottom</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">bikinis ruffle tops</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">white swimsuit</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">one piece black swimsuit</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">bustier swimwear</Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/">high waisted bikinis swimwear</Link>&nbsp; &nbsp;</li>
                    </ul>
                    <p>
                        What's New
                        &nbsp;
                        <img src={arrow_transparent} alt="arrow transparent" />
                    </p>
                    <ul className="seoLinks ml-0">
                        <li><Link to="/"> Alison Lou  </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Ankle Pants </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Assets By Spanx </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Ballet Flats Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Belt Bags </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Belts And Accessories </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Bikinis Green </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Black And Pink Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Black And Silver Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Black And White Pumps Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Black And White Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Black Ballet Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Black Bikinis Sale </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Black Booties Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Black Bottom </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Black Flats Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Black Leggings </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Black Pants </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Black Pumps Sale </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Black Pumps Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Black Wedge Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Blouses Clothing </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Blouses On Sale </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Blouses With Ruffles </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Blouses With Tie </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Blue And White Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Blue Bottom </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Blue Flats Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Blue Heels Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Blue Platform Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Blue Pumps Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Boys + Arrows </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Buffalo London </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Cashmere </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> CF Goldman </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Clutches </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Collars </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Cross Body Bags </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Swim Cover-Up </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Dresses For Wedding Guests </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Dresses Styles </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Dresses With Sleeves </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> E.L.V. Denim </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Embellished Fashion </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Embellished Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Embroidered </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Eywasouls Malibu </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Farm Rio </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Fascinators </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Flares </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Flat Ballet Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Flat White Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Flats Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Flats Shoes For Sale </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Floral-Dresses </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Frayed Hem Clothing </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Glitter Accessories </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Glitter Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Gold And Black Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Gold Earings </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Gold Flat Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Gold Heel Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Gold High Heels Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Gold Jewelry </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Gold Pumps Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Gowns For Sale </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Gucci </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Heeled Boots </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> High Heel Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Hofmann Copenhagen </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Joggers </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Jumpers </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Kardashian Clothes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Kate Spade Outlet </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Keyrings </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Knit Tops </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Lariats </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Layered Dresses </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Leather Boots </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Long Dresses </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Louis Vuitton </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Loungewear </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Low Heel Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Low Wedge Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> macgraw </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Maxi Cover Ups </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Metallic Pumps Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Metallic Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Michael Kors Outlet </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Mules </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Nanushka </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Neon Dresses </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> One Pieces Swimwear </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Party Dresses </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Pink Flats Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Pink Pumps Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Platform Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Platform Tennis Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Platform Wedges Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Polly Plume </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Pool Floats </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Present Ideas </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Printed Tops </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Pump Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Pumps Heels For Sale </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Pumps Heels Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Pumps Nude </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Purple Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Purses </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Racing Fashion </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Ray Ban Aviators </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Ray Ban Round Glasses </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Red Bottom </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Red Dresses </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Red Flat Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Red For Sale </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Red Pumps Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Romper Cover Ups </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Ruffle Dresses </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Rosetta Getty </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Saddle Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Sheer Dresses </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Shoe Wedges On Sale </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Side Tie Bottom </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Silver Flats Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Silver Heels Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Silver Jewelry </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Silver Metallic Pumps Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Slide Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Skirt Dresses </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Sportswear </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Sunnies </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Tan Pumps Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Tassel Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> The Script </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Tees </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Tops And Blouses On Sale </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Travel Accessories </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> TRE by Natalie Ratabesi </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Trendy Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Trendy Boots </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Tunic Cover Ups </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Turtlenecks Sale </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Uni Clothes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Utility Jackets </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Veronica Beard </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Wedge Black Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Wedges Black </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Wedges Sale </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Wedges Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Wedges White </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> White Bottom </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> White Pumps Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> White Swimsuits </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> White Wedges Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Work Clothes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Work Shoes </Link>&nbsp;/&nbsp;</li>
                        <li><Link to="/"> Yoga Clothing </Link>&nbsp;&nbsp;</li>
                    </ul>
                </section>
            </main>
        </div>
    )
}

export default Shopbop
