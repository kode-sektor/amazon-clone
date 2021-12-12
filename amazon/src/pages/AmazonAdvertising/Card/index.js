import React from 'react'
import { Link } from 'react-router-dom'

import { HiOutlineArrowCircleRight } from 'react-icons/hi'

import './index.css'

const Card = ({ img, title, link, linkTxt, type }) => {
    return (
        <figure className="amazonAdvertising__card">
            <div className="amazonAdvertising__cardFrame text-center">
                {img}
            </div>
            {
                type === "alt" || type === "alternate" ? 
                (
                    <>
                        <section className="padding__top__minibase p__bottom">
                            <Link to={link} className="link__type__button__secondary">
                                {linkTxt}
                            </Link>
                        </section>
                        <p className="a__spacing__medium w-100 text color__normal text__size--normal">
                            {title}
                        </p>
                        <Link to="/" className="link__type__normal__new display-4">
                            <HiOutlineArrowCircleRight />
                        </Link>
                    </>
                ) : 
                (
                    <>
                        <p className="padding__top__minibase p__bottom w-100 text color__normal text__size--normal">
                            {title}
                        </p>
                        <section>
                            <Link to={link} className="link__type__button__secondary">
                                {linkTxt}
                                <HiOutlineArrowCircleRight />
                            </Link>
                        </section>
                    </>
                )
            }
            
        </figure>
    )
}

const CardTwo = ({ img, title, link, linkTxt }) => {
    return (
        <section className="columns__container columns__container--33-66 columns__container--limit-width d-grid">
            <figure className="amazonAdvertising__card amazonAdvertising__card--secondary">
                <div className="amazonAdvertising__cardFrame text-center">
                    {img}
                </div>
            </figure>
            <section className="container">
                <section className="column column--default">
                    <Link to={link} className="link__type__button__secondary">
                        {linkTxt}
                        <HiOutlineArrowCircleRight />
                    </Link>
                    <p className="padding__top__minibase p__bottom w-100 text color__normal text__size--normal">
                        {title}
                    </p>
                </section>
            </section>
        </section>
    )
}

const CardThree = ({ img, link, linkTxt }) => {
    return (
        <figure className="amazonAdvertising__card">
            <div className="column">
                <div className="amazonAdvertising__cardFrame text-center">
                    {img}
                </div>
                <section className="amazonAdvertising__cardLink padding__left__mini">
                    <div className="column">
                        <Link to={link} className="link__type__button__secondary">
                            {linkTxt}&nbsp;
                            <HiOutlineArrowCircleRight />
                        </Link>
                    </div>
                </section>
            </div>
        </figure>
    )
}

export { Card, CardTwo, CardThree }
