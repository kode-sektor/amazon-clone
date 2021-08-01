import React from 'react'
import { Link } from 'react-router-dom'


import { PrimaryBtn } from '../../UI/Button'

import babytoddler from '../../../images/baby-toddler.png'

import './index.css'

const BirthForm = () => {
    return (
        <section className="birthForm">
            <div className="a__row a__spacing__large">
                <header className="birthForm__headerTxt">
                    Enter your child's birthdate for age-based recommendations, exclusive offers, and more.
                </header>
                <section className="a__spacing__top__small">
                    <img src={babytoddler} className="birthForm__img" alt="baby toddler vector" />
                </section>
                <section className="a__row a__spacing__top__small">
                    <span className="birthForm__headerTxt">
                        Birthdate
                    </span>
                </section>
                <section className="a__row a__spacing__top__small">
                    <form action="#">
                        <div className="a__input__text__addon__group__wrapper">
                            <div className="a__input__text__addon__group a__width__medium">
                                <span className="a__input__text__addon">
                                    <i className="a__icon a__icon__calendar"></i>
                                </span>
                                <input type="text" maxlength="10" placeholder="dd/mm/yyyy" data-action="a-cal-input" data-input="start" className="a__input__text a__cal__input a__declarative" aria-label="Date with format m m/d d/y y y y"></input>
                            </div>
                        </div>
                    </form>
                    <section className="birthForm__cta a__spacing__top__small">
                        <div className="d-inline-block">
                            <PrimaryBtn
                                text={"Create"}
                            />
                        </div>
                    </section>
                </section>
            </div>
            <section className="a__size__small">
                <Link to="/">
                    This is not relevant to me
                </Link>
            </section>
        </section>
    )
}

export default BirthForm
