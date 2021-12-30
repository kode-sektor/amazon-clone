import React from 'react'

import { Link } from 'react-router-dom'

import './index.css'

const GridOne = ({title, item}) => {
    return (
        <section className="octopus__pc__category__card__v2">
            <header>
                <span className="a__size__extra__large font-weight-bold">{title}</span>
            </header>
            <section className="grid octopus__pc__category__card__v2__content">
                <ul className="a__unordered__list a__nostyle a__horizontal a__spacing__none d-flex">
                    {
                        item.map((item, index) => {
                            return(
                                <li className="octopus__pc__category__card__v2__item">
                                    <section className="octopus__pc__category__card__v2__item__block">
                                        <Link to="/" className="octopus__pc__category__card__v2__category__link">
                                            <div className="octopus__pc__category__card__v2__category">
                                                <div class="octopus__pc__category__card__v2__shield"></div>
                                                <img className="octopus__pc__category__card__v2__image" alt="Accessories &amp; Supplies" src={item.img} height="130px" width="130px"/>
                                            </div>
                                            <div className="octopus__pc__category__card__v2__category__title">
                                                <span className="a__size__medium__ii a__color__base font-weight-bold">{item.caption}</span>
                                            </div>
                                        </Link>
                                        <section className="octopus__pc__category__card__v2__subcategory">
                                            {
                                                item.categories.map((item, i) => (
                                                    <Link to={item.link} className="octopus__pc__category__card__v2__subcategory__link">
                                                        <div className="octopus__pc__category__card__v2__subcategory__title">
                                                            <span className="a__size__base a__color__base">{item.caption}</span>
                                                        </div>
                                                    </Link>
                                                ))
                                            }
                                        </section>
                                    </section>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </section>
    )
}

export { GridOne }
