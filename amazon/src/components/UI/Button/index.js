import React from 'react'

import { Link } from 'react-router-dom'

const CancelBtnLink = ({text="Cancel"}) => {
    return (
        <span className="a__button a__spacing__top__mini">
            <span className="a__button__inner">
                <Link to="/" className="a__button__text" role="button">{text}</Link>
            </span>
        </span>
    )
}

const CancelBtnPrimary = ({text="Cancel", style="", toggle}) => {
    return (
        <button className={`a__button a__button__cancel ${style}`} onClick={toggle}>
            <span className="a__button__inner">
                <span className="a__button__text" role="button">{text}</span>
            </span>
        </button>
    )
}

const SaveBtnPrimary = () => {
    return(
        <span className="a__button a__spacing__top__mini a__button__primary">
            <span className="a__button__inner">
                <input className="a__button__input" type="submit" aria-labelledby="icp__btn__save__announce"/>
                <span className="a__button__text" aria-hidden="true">Save Changes</span>
            </span>
        </span>
    )
}

const SearchButton = () => {
    return (
        <div className="button__container">
            <span class="a__button a__button__search search__order__input">
                <span class="a__button__inner">
                    <input class="a__button__input" type="submit"/>
                    <span class="a__button__text" aria-hidden="true">
                        Search Orders
                    </span>
                </span>
            </span>
        </div>
    )
}

const OrderButton = ({link, text, flexWidth, width}) => {
    return (
        <span className="a__button a__spacing__mini align-self-end ml-0" style={{flexBasis: flexWidth, width: width}}>
            <span className="a__button__inner">
                <a href={link} className="a__button__text" role="button">
                    {text}
                </a>
            </span>
        </span>
    )
}

const BuyAgainBtn = () => {
    return (
        <span className="a__button a__spacing__mini a__button__primary a__button__icon reorder__modal__trigger__button">
            <span className="a__button__inner">
                <a href="#" aria-label="Buy it again" className="a__button__text" role="button">
                    <i className="reorder__modal__trigger__icon"></i>Buy it again
                </a>
            </span>
        </span>
    )
}

export { CancelBtnLink, CancelBtnPrimary, SaveBtnPrimary, SearchButton, OrderButton, BuyAgainBtn }
