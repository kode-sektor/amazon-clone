import React from 'react'

import { Link } from 'react-router-dom'

import './index.css'

// Small 'Add to Cart' button found in Account Menu (Header Top)
const BtnPrimary = ({text="Add to Cart"}) => (
    <button className="a__button a__button__primary a__button__small">
        <span className="a__button__inner">
            <input name="submit.addToCart" className="a__button__input" type="submit" value="Add to Cart" />
            <span className="a__button__text" aria-hidden="true">{text}</span>
        </span>
    </button>
)

// White Pill Button. 'Learn More' found in /nav_cart page
const BtnPill = ({text="Learn more"}) => (
    <Link className="a__button a__button__rounded" to="/">
        <span className="a__button__inner a__button__pillWhite">
            <span className="a__button__input" type="submit"></span>
            <span className="a__button__text text-center" aria-hidden="true">
                {text}
            </span>
        </span>
    </Link>
)

// Yellow Cart Button
// style can be "a__button__cart" or "add__to__cart"
const CartBtn = ({stretch="w-100"}) => {
    return (
        <button className={`a__button a__button__normal d-block ${stretch} a__button__primary a__button__cart`}>
            <span className="a__button__inner d-block">
                <input name="proceedToRetailCheckout" data-feature-id="proceed-to-checkout-action" className="a__button__input" type="submit" value="Proceed to checkout"/>
                <span className="a__button__text" aria-hidden="true">
                    <div className="d-block">
                        Proceed to Checkout
                    </div>
                </span>
            </span>
        </button>
    )
}

// Small Yellow Cart Button
const CartBtnSmall = () => {
    return (
        <span class="a__button a__button__normal a__button__primary a__button__small a__button__cart">
            <span class="a__button__inner">
                <input name="submit.addToCart" class="a__button__input" type="submit" value="Buy it again (2)"/>
                <span class="a__button__text" aria-hidden="true">Buy it again (2)</span>
            </span>
        </span>
    )
}

// White Cart Button. Identical to CartBtn.
// Found in /nav_cart route
const CartBtnSecondary = () => {
    return (
        <span className="a__button a__button__normal a__button__small a__button__white">
            <span className="a__button__inner">
                <input name="submit.addToCart" className="a__button__input" type="submit" value="Buy it again (2)"/>
                <span className="a__button__text" aria-hidden="true">Add To Cart</span>
            </span>
        </span>
    )
}

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

// Grey-coloured
const OrderButton = ({link, text, width}) => {
    return (
        <span className="a__button a__spacing__mini ml-0" style={{width: width}}>
            <span className="a__button__inner">
                <Link to={link} className="a__button__text" role="button">
                    {text}
                </Link>
            </span>
        </span>
    )
}

const BuyAgainBtn = ({grey=false}) => {
    return (
        <span className={`a__button a__spacing__mini ${grey === false ? "a__button__primary" : "" } a__button__icon reorder__modal__trigger__button`}>
            <span className="a__button__inner">
                <Link to="#" aria-label="Buy it again" className="a__button__text" role="button">
                    <i className="reorder__modal__trigger__icon"></i>Buy it again
                </Link>
            </span>
        </span>
    )
}

// Orange-coloured
const PrimaryBtn = ({text="Add to Cart", slug, width="100%", mTop=""}) => {

    if (text === ("See buying options") || text === ("Similar items")) {
        return (
            <Link className={`addToCartBtn ${mTop}`} to={`/${slug}`}>
                <span className={`a__button d-inline-block`} style={{width: width}}>
                    <span className="a__button__inner">
                        <input type="submit" className="a__button__input"/>
                        <span className="a__button__text text-center">{text}</span>
                    </span>
                </span>
            </Link>
        ) 
    } else {
        return (
            <span className={`addToCartBtn ${mTop}`}>
                <span className={`a__button d-inline-block a__button__primary`} style={{width: width}}>
                    <span className="a__button__inner">
                        <input type="submit" className="a__button__input"/>
                        <span className="a__button__text text-center">{text}</span>
                    </span>
                </span>
            </span>
        )
    }
}

export { BtnPill, BtnPrimary, CancelBtnLink, CancelBtnPrimary, SaveBtnPrimary, 
    SearchButton, OrderButton, BuyAgainBtn, PrimaryBtn, CartBtn, CartBtnSmall, CartBtnSecondary}
