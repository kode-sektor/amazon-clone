import React from 'react'

import { Link } from 'react-router-dom'


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

export { CardOne, CardTwo, CardThree, CardFour, CardFive, CardVideo, CardPrime }
