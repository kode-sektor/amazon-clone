import React, { useState } from 'react'


const Card_One = ({name, date, img} ) => {
    return (
        <section className="sub__layout__card__grid">
            <div className="sub__layout__inner">
                <h2 className="sub__layout__inner__header">
                    <a href="/user-profile" className="sub__layout__inner__header__avatar">
                        <img className="user__avatar" src={img[0].avatar} alt="profile image" />
                    </a>
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
                                    <a aria-label="top categories recomendations" href={img[0].img_one.href}></a>
                                </div>
                                <figcaption>Your Orders</figcaption>
                            </div>
                        </figure>
                        <figure className="sub__layout__inner__categories">
                            <div className="sub__layout__inner__categories__wrap">
                                <div className="sub__layout__inner__innerwrap">
                                    <img src={img[0].img_two.img} alt={img[0].img_two.alt}/>
                                    <a aria-label="top categories recomendations" href={img[0].img_two.href}></a>
                                </div>
                                <figcaption>Gift Finder</figcaption>
                            </div>
                        </figure>
                        <figure className="sub__layout__inner__categories">
                            <div className="sub__layout__inner__categories__wrap">
                                <div className="sub__layout__inner__innerwrap">
                                    <img src={img[0].img_three.img} alt={img[0].img_three.alt}/>
                                    <a aria-label="top categories recomendations" href={img[0].img_three.href}></a>
                                </div>
                                <figcaption>Electronics</figcaption>
                            </div>
                        </figure>
                        <figure className="sub__layout__inner__categories">
                            <div className="sub__layout__inner__categories__wrap">
                                <div className="sub__layout__inner__innerwrap">
                                    <img src={img[0].img_four.img} alt={img[0].img_four.alt}/>
                                    <a aria-label="top categories recomendations" href={img[0].img_four.href}></a>
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

const Card_Two = ({title, img, date}) => {
    return (
        <section className="sub__layout__card__grid">
            <div className="sub__layout__inner">
                <h2 className="sub__layout__inner__header">
                    <span className="sub__layout__inner__header__title">{title}</span>
                </h2>
                <section className="sub__layout__inner__body">
                    <a href={img[0].link}>
                        <div className="sub__layout__inner__body__fluid__img">
                            <img src={img[0].href} alt={img[0].alt} />
                        </div>
                    </a>
                    <div className="sub__layout__inner__timeline">
                        <div class="sub__layout__inner__timelinedot"></div>
                        <div class="sub__layout__inner__timelineline"></div>

                        <p class="sub__layout__inner__timelinedate">{date}</p>
                        <p className="sub__layout__card__grid__footer">
                            <a href="/history">See your browsing history</a>
                        </p>
                    </div>
                </section>
            </div>
        </section>
    )
}

const Card_Three = ({title, img, alt, link, linktxt}) => {
    return (
        <section className="sub__layout__card__grid">
            <div className="sub__layout__inner">
                <h2 className="sub__layout__inner__header">
                    <span className="sub__layout__inner__header__title">{title}</span>
                </h2>
                <section className="sub__layout__inner__body ui__card">
                    <a href="/gp/product/B07MM2RVM5">
                        <div className="sub__layout__inner__body__ui__card">
                            <img src={img} className="landscape-image" alt={alt} />
                        </div>
                    </a>
                </section>
                <div className="sub__layout__inner__timeline">
                    <p className="sub__layout__card__grid__footer">
                        <a href={link}>{linktxt}</a>
                    </p>
                </div>
            </div>
        </section>
    )
}

const Card_Four = ({title, text, catLink}) => {
    return (
        <section className="sub__layout__card__grid gift">
            <div className="sub__layout__inner">
                <h2 className="sub__layout__inner__header">
                    <span className="sub__layout__inner__header__title">{title}</span>
                </h2>
                <section className="sub__layout__inner__body">
                    <p>{text}</p>
                    <p className="sub__layout__card__grid__footer">
                        <a href={catLink}>Explore Now</a>
                    </p>
                </section>
            </div>
        </section>
    )
}


const Card_Video = ({title, img, slug }) => {
    return (
        <section className="sub__layout__card__grid grid__half">
            <div className="prime__video">
                <h2 className="prime__video__header">
                    <span className="prime__video__title">Prime Video: Recommended for you</span>
                    <span className="prime__video__maintitle">{title}</span>
                </h2>
                <section className="prime__video__ui__card">
                    <div className="prime__video__img"></div>
                    <a href="/">
                        <div className="prime__video__imgLink">
                            <img className="prime__video__image" src={img} alt={title}/>
                        </div>
                        <div className="prime__gradient"></div>
                    </a>
                </section>
                <div className="sub__layout__inner__timeline">
                    <p className="sub__layout__card__grid__footer">
                        <a href={`/prime-video/${slug}`}>Start watching on Prime Video</a>
                    </p>
                </div>
            </div>
        </section>
    )
}



export { Card_One, Card_Two, Card_Three, Card_Four, Card_Video }
