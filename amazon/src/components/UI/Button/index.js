import React from 'react'

import { Link } from 'react-router-dom'

const CancelBtnPrimary = () => {
    return (
        <span className="a__button a__spacing__top__mini">
            <span className="a__button__inner">
                <Link to="/ref=nav_logo" class="a__button__text" role="button">Cancel</Link>
            </span>
        </span>
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

export { CancelBtnPrimary, SaveBtnPrimary }
