import React from 'react'

const Card_One = ({title, img, alt, link, linktxt}) => {
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

export { Card_One }
