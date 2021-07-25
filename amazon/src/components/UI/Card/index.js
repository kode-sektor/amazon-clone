import React from 'react'
import { Link } from 'react-router-dom'

import { CouponBtn } from '../Button'

import './index.css'


const CardOne = ({name, date, img, cardClass=""}) => {
    return (
        <section className={`sub__layout__card__grid ${cardClass}`}>
            <div className="sub__layout__inner">
                <h2 className="sub__layout__inner__header">
                    <Link href="/user-profile" className="sub__layout__inner__header__avatar">
                        <img className="user__avatar" src={img[0].avatar} alt={img[0].avatar} />
                    </Link>
                    <div className="sub__layout__inner__header__greeting">
                        <span className="sub__layout__inner__header__title">Hi, {name}</span>
                        <span className="sub__layout__inner__header__reg">Customer since {date}</span>
                    </div>
                </h2>
                <section className="sub__layout__inner__body">
                    <p className="sub__layout__inner__intro__text">Top links for you</p>
                    <section className="sub__layout__inner__frame">
                        <figure className="sub__layout__inner__categories">
                            <div className="sub__layout__inner__categories__wrap">
                                <div className="sub__layout__inner__innerwrap">
                                    <img src={img[0].img_one.img} alt={img[0].img_one.alt}/>
                                    <Link className="sub__layout__inner__imglink" aria-label="top categories recomendations" href={img[0].img_one.href}></Link>
                                </div>
                                <figcaption>Your Orders</figcaption>
                            </div>
                        </figure>
                        <figure className="sub__layout__inner__categories">
                            <div className="sub__layout__inner__categories__wrap">
                                <div className="sub__layout__inner__innerwrap">
                                    <img src={img[0].img_two.img} alt={img[0].img_two.alt}/>
                                    <Link className="sub__layout__inner__imglink" aria-label="top categories recomendations" href={img[0].img_two.href}></Link>
                                </div>
                                <figcaption>Gift Finder</figcaption>
                            </div>
                        </figure>
                        <figure className="sub__layout__inner__categories">
                            <div className="sub__layout__inner__categories__wrap">
                                <div className="sub__layout__inner__innerwrap">
                                    <img src={img[0].img_three.img} alt={img[0].img_three.alt}/>
                                    <Link className="sub__layout__inner__imglink" aria-label="top categories recomendations" href={img[0].img_three.href}></Link>
                                </div>
                                <figcaption>Electronics</figcaption>
                            </div>
                        </figure>
                        <figure className="sub__layout__inner__categories">
                            <div className="sub__layout__inner__categories__wrap">
                                <div className="sub__layout__inner__innerwrap">
                                    <img src={img[0].img_four.img} alt={img[0].img_four.alt}/>
                                    <Link className="sub__layout__inner__imglink" aria-label="top categories recomendations" href={img[0].img_four.href}></Link>
                                </div>
                                <figcaption>Home &amp; Kitchen</figcaption>
                            </div>
                        </figure>
                    </section>
                </section>
            </div>
        </section>
    )
}

const CardTwo = ({title, img, date, cardClass=""}) => {
    return (
        <section className={`sub__layout__card__grid ${cardClass}`}>
            <div className="sub__layout__inner">
                <h2 className="sub__layout__inner__header">
                    <span className="sub__layout__inner__header__title">{title}</span>
                </h2>
                <section className="sub__layout__inner__body">
                    <Link href={img[0].link}>
                        <div className="sub__layout__inner__body__fluid__img">
                            <img src={img[0].href} alt={img[0].alt} />
                        </div>
                    </Link>
                    <div className="sub__layout__inner__timeline">
                        <div class="sub__layout__inner__timelinedot"></div>
                        <div class="sub__layout__inner__timelineline"></div>

                        <p class="sub__layout__inner__timelinedate">{date}</p>
                    </div>
                </section>
                <footer className="sub__layout__inner__footer">
                    <p className="sub__layout__card__grid__footer">
                        <Link href="/history">See your browsing history</Link>
                    </p>
                </footer>
            </div>
        </section>
    )
}

const CardThree = ({title, img, alt, link, linktxt, rating, cardClass="", supportingTxt}) => {
    return (
        <section className={`sub__layout__card__grid ${cardClass}`}>
            <div className="sub__layout__inner">
                <h2 className="sub__layout__inner__header">
                    <span className="sub__layout__inner__header__title">{title}</span>
                </h2>
                <section className="sub__layout__inner__body">
                    <Link className={supportingTxt ? "sub__layout__inner__link supportingTxt" : "sub__layout__inner__link"} href="/gp/product/B07MM2RVM5">
                        <div className="sub__layout__inner__body__ui__card">
                            <img src={img} className="landscape-image" alt={alt} />
                        </div>
                    </Link>
                    {supportingTxt ? <p>{supportingTxt}</p> : ""}
                    { (rating) ? 
                        <section className="sub__layout__inner__rating">
                            {Array(rating).fill().map((_, i) => (
                                <a href="/"><i className="star__rating"></i></a>
                            ))}
                        </section> 
                        : 
                        ""  
                    }
                </section>
                <footer className="sub__layout__inner__footer">
                    <p className="sub__layout__card__grid__footer">
                        <Link href={link}>{linktxt}</Link>
                    </p>
                </footer>
            </div>
        </section>
    )
}

const CardFour = ({title, text, catLink}) => {
    return (
        <section className="sub__layout__card__grid gift block__card">
            <div className="sub__layout__inner">
                <h2 className="sub__layout__inner__header">
                    <span className="sub__layout__inner__header__title">{title}</span>
                </h2>
                <section className="sub__layout__inner__body">
                    <p>{text}</p>
                </section>
                <footer className="sub__layout__inner__footer">
                    <p className="sub__layout__card__grid__footer">
                        <Link href={catLink}>Explore Now</Link>
                    </p>
                </footer>
            </div>
        </section>
    )
}

const CardFive = ({img}) => {
    return (
        <section className="sub__layout__card__grid grid__card__ii">
            <div className="sub__layout__inner">
                <h2 className="sub__layout__inner__header">
                    <span className="sub__layout__inner__header__title">Save on Outlet deals</span>
                </h2>
                <section className="sub__layout__inner__body sub__layout__inner__frame">
                    <figure className="sub__layout__inner__categories">
                        <div className="sub__layout__inner__categories__wrap">
                            <Link className="sub__layout__inner__imglink" aria-label="top categories recomendations" href={img[0].img_one.href}>
                                <div className="sub__layout__inner__body__ui__card">
                                    <img className="sub__layout__inner__img" src={img[0].img_one.img} alt={img[0].img_one.alt}/>
                                </div>
                                <figcaption>{img[0].img_one.alt}</figcaption>
                            </Link>
                        </div>
                    </figure>
                    <figure className="sub__layout__inner__categories">
                        <div className="sub__layout__inner__categories__wrap">
                            <Link className="sub__layout__inner__imglink" aria-label="top categories recomendations" to={img[0].img_two.href}>
                                <div className="sub__layout__inner__body__ui__card">
                                    <img className="sub__layout__inner__img" src={img[0].img_two.img} alt={img[0].img_two.alt}/>
                                </div>
                                <figcaption>{img[0].img_two.alt}</figcaption>
                            </Link>
                        </div>
                    </figure>
                    <figure className="sub__layout__inner__categories">
                        <div className="sub__layout__inner__categories__wrap">
                            <Link className="sub__layout__inner__imglink" aria-label="top categories recomendations" to={img[0].img_three.href}>
                                <div className="sub__layout__inner__body__ui__card">
                                    <img className="sub__layout__inner__img" src={img[0].img_three.img} alt={img[0].img_three.alt}/>
                                </div>
                                <figcaption>{img[0].img_three.alt}</figcaption>
                            </Link>
                        </div>
                    </figure>
                    <figure className="sub__layout__inner__categories">
                        <div className="sub__layout__inner__categories__wrap">
                            <Link className="sub__layout__inner__imglink" aria-label="top categories recomendations" to={img[0].img_four.href}>
                                <div className="sub__layout__inner__body__ui__card">
                                    <img className="sub__layout__inner__img" src={img[0].img_four.img} alt={img[0].img_four.alt}/>
                                </div>
                                <figcaption>{img[0].img_four.alt}</figcaption>
                            </Link>
                        </div>
                    </figure>
                </section>
                <footer className="sub__layout__inner__footer">
                    <p className="sub__layout__card__grid__footer">
                        <Link to="/history">See more</Link>
                    </p>
                </footer>
            </div>
        </section>
    )
}

const CardSix = ({items, title, link, type=""}) => {

    return (
        <section className="octopus__pc__card mb-0">
            <header>
                <span className="a__size__extra__large__ii font-weight-bold">{title}</span>
                {
                    link && (
                        <Link to={link} className="a__link__normal">
                            <span className="a__size__base__plus a__color__button__link octopus__pc__card__title__seeMore">
                                &nbsp; See more
                            </span>
                        </Link>
                    )
                }
            </header>
            <section className="octopus__pc__card__content">
                <ul className={`octopus__pc__card__list octopus__pc__card__height__v3 ${type}`}>
                {
                    items.map((entry, index) => {
                        const {item} = entry
                        return (
                            <li className="octopus__pc__item octopus__pc__item__v3 d-inline-block">
                                <div className="octopus__pc__item__block octopus__pc__asin__block a__spacing__none">
                                    <Link to="/" className="octopus__pc__item__link">
                                        <section className="octopus__pc__item__image__section octopus__pc__item__image__section__v3">
                                            <section className="octopus__pc__item__hue__shield octopus__pc__item__image__background__v3">
                                                <img src={item.img} alt={item.alt} className="octopus__pc__item__image octopus__pc__item__image__v3"/>
                                                {
                                                    item.bestSeller && (
                                                        <div className="octopus__pc__item__best__seller__badge">
                                                            <span className="a__size__mini octopus__pc__item__best__seller__badge__text">
                                                                #{item.bestSeller}
                                                            </span>
                                                        </div>
                                                    )
                                                }
                                            </section>
                                        </section>
                                        <section className="octopus__pc__asin__info__section">
                                            <div className={`a__spacing__none octopus__pc__asin__price__section ${type}`}>
                                                <section className="octopus__pc__asin__price">
                                                    <span className={`a__price  ${type}`} data-a-size="l" data-a-color="base">
                                                        <span className="a__price__symbol">$</span>
                                                        {
                                                            item.price && (
                                                                <span className="a__price__whole">{item.price}
                                                                    <span className="a__price__decimal">.</span>
                                                                </span>
                                                            )
                                                        }
                                                        {
                                                            item.price_fraction && (
                                                                <span className="a__price__fraction">{item.price_fraction}</span>
                                                            )
                                                        }&nbsp;
                                                    </span>
                                                </section>
                                                <span>
                                                    {
                                                        item.old_price && (
                                                            <span className="a__size__mini__ii a__color__tertiary a__text__strike">
                                                                &nbsp;${item.old_price}
                                                            </span>
                                                        )
                                                    }
                                                </span>
                                                {
                                                    item.percentage_off && (
                                                        <span className="a__size__base a__color__price font-weight-bold">
                                                            &nbsp;{item.percentage_off}&#37; off
                                                        </span>
                                                    )
                                                }
                                            </div>
                                            {
                                                item.deal && (
                                                    <section className="octopus__pc__deal__info__section">
                                                        <div className="octopus__pc__deal__progbarWrapper">
                                                            <div className="a__section a__spacing__none octopus__pc__deal__progbar" style={{width : "43%"}}>
                                                            </div>
                                                        </div>
                                                        <div className="a__section a__spacing__top__mini octopus__pc__deal__claimPercent">
                                                            43% claimed
                                                        </div>
                                                        <div className="a__section a__spacing__top__mini octopus__pc__deal__claimDate float-right d-inline-block">
                                                            Deal has ended
                                                        </div>
                                                    </section>
                                                )
                                            }
                                            {
                                                item.title && (
                                                    <section className="octopus__pc__asin__title">
                                                        <span className="a__size__base__ii a__color__base">
                                                            {item.title}
                                                        </span>
                                                    </section>
                                                )
                                            }
                                            <section className="octopus__pc__asin__review__star text-left">
                                                {
                                                    item.rating && (
                                                        <>
                                                            <i className={`a__icon a__icon__star__mini a__star__mini__${item.rating}`}></i>&nbsp;
                                                        </>
                                                    )
                                                }
                                                {
                                                    item.count && (
                                                        <span className="a__size__mini__ii a__color__tertiary">{item.count}</span>
                                                    )
                                                }
                                            </section>
                                        </section>
                                    </Link>
                                    {
                                        (type !== "lightning" && type !== "featured") ? (
                                            <span className="octopus__quick__look__btn">
                                                <CouponBtn
                                                    text={"Quick Look"}
                                                />
                                            </span>
                                        ) : ""
                                    }
                                </div>
                            </li>
                        )
                    })
                }
                </ul>

            </section>
        </section>
    )
}

const CardSeven = ({items, link, type=""}) => {
    return (
        <ul className="octopus__pc__card__list octopus__pc__card__height__v3 spread d-flex text-left">
        {
            items.map((entry, index) => {
                const {item} = entry
                return (
                    <li className="octopus__pc__item octopus__pc__item__v3 d-inline-block">
                        {
                            item.bestSeller && (
                                <div className="a__spacing__micro apb__grid__status__badge__container">
                                    <Link to={link} className="a__badge" data-a-badge-supplementary-position="right" data-a-badge-type="status">
                                        <span className="a__badge__label" data-a-badge-color="apb-orange">
                                            <span className="a__badge__label__inner a__text__ellipsis">
                                                <span className="a__badge__text" data-a-badge-color="apb-cloud">
                                                    BestSeller 
                                                </span>
                                            </span>
                                        </span>
                                        <span className="a__badge__supplementary__text a__text__ellipsis">
                                            in {item.category}
                                        </span>
                                    </Link>
                                </div>
                            )
                        }
                        <div className={`${!item.bestSeller ? "octopus__pc__item__block a__spacing__medium" : ""} octopus__pc__asin__block`}>
                            <div className="apb__browse__searchresults__product">
                                <Link to="/" className="octopus__pc__item__link">
                                    <div className="a__image__container">
                                        <img src={item.img} alt={item.alt} className="octopus__pc__item__image octopus__pc__item__image__v3"/>
                                    </div>
                                </Link>
                                {
                                item.title && (
                                    <>
                                        <section className="a__spacing__top__small">
                                            <Link to="/">
                                                <h2 className="a__size__mini__ii a__color__base apb__line__clamp__3 font-weight-normal">
                                                    {item.title}
                                                </h2>
                                            </Link>
                                        </section>
                                        <div className="a__spacing__none apb__browse__searchresults__product__byline">
                                            <span className="a__size__base__ii a__color__secondary font-weight-normal">
                                                by {item.manufacturer}
                                            </span> 
                                        </div>
                                    </>
                                )
                                }
                                <section className="a__spacing__none a__spacing__top__micro text-left">
                                    {
                                        item.rating && (
                                            <>
                                                <i className={`a__icon a__icon__star__small a__star__small__${item.rating}`}></i>&nbsp;
                                            </>
                                        )
                                    }
                                    {
                                        item.count && (
                                            <span className="a__size__mini__ii a__color__tertiary">{item.count}</span>
                                        )
                                    }
                                </section>
                                <section className="a__spacing__none a__spacing__top__small">
                                    <section>
                                        <span className={`a__price  ${type}`} data-a-size="l" data-a-color="base">
                                            <span className="a__price__symbol">$</span>
                                            {
                                                item.price && (
                                                    <span className="a__price__whole">{item.price}
                                                        <span className="a__price__decimal">.</span>
                                                    </span>
                                                )
                                            }
                                            {
                                                item.price_fraction && (
                                                    <span className="a__price__fraction">{item.price_fraction}</span>
                                                )
                                            }&nbsp;
                                        </span>
                                        {
                                            item.old_price && (
                                                <span className="a__price a__text__strike" data-a-size="b" data-a-color="secondary" data-a-strike="true">
                                                    ${item.old_price}
                                                </span>
                                            )
                                        }&nbsp;
                                        &amp; <strong>FREE Shipping.</strong>&nbsp;
                                        <Link to={item.shipping_link}>Details</Link>
                                    </section>
                                </section>
                                <section className="a__spacing__none a__spacing__top__micro">
                                    Arrives : <strong>{item.arrival_date}</strong>&nbsp;
                                    <Link to={item.arrival_link}>Details</Link>
                                </section>
                            </div>
                        </div>
                    </li>
                )
            })
        }
        </ul>
    )
}

const BxcGrid = ({img, link, alt, column="bxc__grid__column__1__of__5"}) => (
    <div className={`bxc__grid__column ${column} bxc__grid__column__light`}>
        <div className="bxc__grid__content bxc__grid__content__light">
            <div className="bxc__grid__image bxc__grid__image__light">
                <Link to={link}>
                    <img src={img} alt={alt}/>
                </Link>
            </div>
        </div>
    </div>
)


const CardVideo = ({title, img, slug }) => {
    return (
        <section className="sub__layout__card__grid grid__half">
            <div className="prime__video">
                <h2 className="prime__video__header">
                    <span className="prime__video__title">Prime Video: Recommended for you</span>
                    <span className="prime__video__maintitle">{title}</span>
                </h2>
                <section className="prime__video__ui__card">
                    <div className="prime__video__img"></div>
                    <Link to="/">
                        <div className="prime__video__imgLink">
                            <img className="prime__video__image" src={img} alt={title}/>
                        </div>
                        <div className="prime__gradient"></div>
                    </Link>
                </section>
                <div className="sub__layout__inner__timeline">
                    <p className="sub__layout__card__grid__footer">
                        <Link to={`/prime-video/${slug}`}>Start watching on Prime Video</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

const CardPrime = ({heading, price, duration, note, checked, select, primeSelect, primeID}) => {
    return (
        <section className={`primeSticky__cardAlign ${primeSelect}`}>
            <input type="radio" id="primeSticky__primeMonthlyCard" className="primeSticky__primeMonthlyCard d-none" name="primeSticky__primeMonthly__card" value="0" checked={checked}/>
            <label for="primeSticky__primeMonthlyCard" className="primeSticky__plan" 
                onClick={select} id={`prime-${primeID}`}>
                <div className="primeSticky__primeMonthlyShadow">
                    <div className="primeSticky__cardHeading">{heading}</div>
                    <div className="primeSticky__cardPrice">
                        <div className="primeSticky__cardAmount">CDN$ {price}</div>
                        <div className="primeSticky__cardDuration">/{duration}</div>
                    </div>
                    <div className="plan-equivalent-price">
                        {note}
                    </div>
                </div>
            </label>
            <div class="amzn__prime__radio"></div>
        </section>
    )
}

export { CardOne, CardTwo, CardThree, CardFour, CardFive, CardSix, CardSeven, BxcGrid, CardVideo, CardPrime }
