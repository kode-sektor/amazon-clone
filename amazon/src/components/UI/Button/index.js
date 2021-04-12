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

export { CancelBtnLink, CancelBtnPrimary, SaveBtnPrimary }
