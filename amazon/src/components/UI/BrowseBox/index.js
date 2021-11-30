import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

const BrowseBoxSimple = ({title, links, style=""}) => { // style = "squished"
    return (
        <section className="browsebox">
            <h3 className="browsebox__title">{title}</h3>
            <ul className={style}>  
                {
                    links.map((item, i) => (
                        <li key={i} className={item.carat && ("seeMore")}>
                            {item.carat && <span className="carat">&#8250;</span>}
                            <Link to={item.href}>{item.text}</Link>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

const BrowseCheckbox = ({title, links, ticked=false}) => {
    ticked = ticked === true ? "ticked" : ""
    return (
        <section>
            <h3 className="a__spacing__small">
                <span className="a__size__base a__color__base a__text__bold">
                    {title}
                </span>
            </h3>
            <ul className="sideMenu a__unordered__list a__nostyle a__spacing__medium">
                {
                    links.map((item, i) => (
                        <>
                            <li key={i} className="a__spacing__micro">
                                <span className="a__list__item">
                                    <Link to={item.href}>
                                        <div className="sideMenuCheckbox a__checkbox a__checkbox__fancy d-inline-block">
                                            <label>
                                                <input type="checkbox" name="" value=""/>
                                                <i className={`a__icon a__icon__checkbox ${ticked}`}></i>
                                                <span className="a__label a__checkbox__label"></span>
                                            </label>
                                        </div>
                                        <span className="a__size__base a__color__base">{item.text}</span>
                                    </Link>
                                </span>
                            </li>
                        </>
                    ))
                }
            </ul>
        </section>
    )
}


const BrowseBoxPrimary = ({title, links}) => {

    let browseBox

    return (
        <section>
            <h3 className="a__spacing__small">
                <span className="a__size__base a__color__base a__text__bold">
                    {title}
                </span>
            </h3>
            <ul className="a__unordered__list a__nostyle a__spacing__medium">
                {
                    links.map((item, i) => {
                        browseBox = item.href ? 
                            (
                                <li key={i} className={`a__spacing__micro ${item.indentClass}`}>
                                    <span className="a__list__item">
                                        <Link to={item.href} className="a__color__base a__link__normal">
                                            <span>{item.text}</span>
                                        </Link>
                                    </span>
                                </li>
                            ) 
                            : 
                            (
                                <li key={i} className="a__spacing__micro">
                                    <span dir="auto" className={`a__list__item a__size__base a__color__base font-weight-bold ${item.indentClass}`}>
                                        {item.text}
                                    </span>
                                </li>
                            )
                        return browseBox
                        }
                    )
                }
            </ul>
        </section>
    )
}

const BrowseBoxPlain = ({title, links}) => {
    return (
        <section>
            <h3 className="a__spacing__small">
                <span className="a__size__base a__color__base a__text__bold">
                    {title}
                </span>
            </h3>
            <ul className="giftCards__lang a__unordered__list a__nostyle a__spacing__medium">
                {
                    links.map((item, i) => (
                        <li key={i} className="a__spacing__micro">
                            <span className="a__list__item">
                                <span className="browse__back" dir="auto"></span>&nbsp;
                                <Link to={item.href} className="a__size__base a__color__base a__link__normal">
                                    <span>{item.text}</span>
                                </Link>
                            </span>
                        </li>
                        )
                    )
                }
            </ul>
        </section>
    )
}


export { BrowseBoxSimple, BrowseCheckbox, BrowseBoxPrimary, BrowseBoxPlain }
