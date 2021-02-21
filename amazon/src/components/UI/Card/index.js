import React, { useState } from 'react'


const Card_One = ({name, date, img} ) => {

    return (
        <section className="sub__layout__card__grid">
            <div className="sub__layout__inner">
                <h2 className="sub__layout__inner__header">
                    <a className="sub__layout__inner__header__avatar">
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


const Card_Two = ({title, img, alt, link, linktxt}) => {
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

export { Card_One, Card_Two }
