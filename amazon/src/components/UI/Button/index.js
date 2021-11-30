import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

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
const BtnPill = ({text="Learn more", stretch=""}) => (
    <Link className={`a__button a__button__rounded ${stretch === true && "w-100"}`} to="/">
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
const CartBtn = ({text="Proceed to Checkout", stretch="w-100"}) => {
    return (
        <button className={`a__button a__button__normal d-block ${stretch} a__button__primary a__button__cart`}>
            <span className="a__button__inner d-block">
                <input name="proceedToRetailCheckout" data-feature-id="proceed-to-checkout-action" className="a__button__input" type="submit" value="Proceed to checkout"/>
                <span className="a__button__text" aria-hidden="true">
                    <div className="d-block">
                        {text}
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

const SearchButton = ({text="Search Orders"}) => {
    return (
        <div className="button__container">
            <span class="a__button a__button__search search__order__input">
                <span class="a__button__inner">
                    <input class="a__button__input" type="submit"/>
                    <span class="a__button__text" aria-hidden="true">
                        {text}
                    </span>
                </span>
            </span>
        </div>
    )
}

// Grey-coloured
const OrderButton = ({link, text="Cancel items", width}) => {
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

const PrimaryBtn__ii = ({text="Register"}) => (
    <Link to="/" className="primary__btn__ii">
        {text}
    </Link>
)

// Grey Clip
const CouponBtn = ({text="Clip Coupon", slug, width="100%", mTop=""}) => {
    return (
        <span className={`clipCoupon ${mTop}`}>
            <span className={`a__button ${text==="Clip Coupon" ? "dashed" : ""} d-inline-block`} style={{width: width}}>
                <span className="a__button__inner">
                    <input type="submit" className="a__button__input"/>
                    <span className="a__button__text a__size__small__ii text-center">{text}</span>
                </span>
            </span>
        </span>
    )
}

const JoinPrimeBtn = () => (
    <span className="a__button a__button__primary prime__cta__signup__button">
        <span className="a__button__inner">
            <input className="a__button__input" type="submit" aria-labelledby="prime-header-CTA-announce"/>
            <span className="a__button__text">
                Join Prime
            </span>
        </span>
    </span>
)

const SeeAllResults = () => (
    <section className="a__box text-center seeAllResults h-auto">
        <div className="a__box__inner">
            <Link to="/">
                <span class="a__size__medium__ii a__color__link font-weight-bold">See all results</span>
            </Link>
        </div>
    </section>
)

const LocationButton = () => (
    <button className="location__submit form-control btn" type="submit">
        <span className="button__icon"></span>
    </button>
)

const SecondaryButton = () => (
    <button className="secondary__submit form-control btn w-auto" type="submit">
        Filter
    </button>
)

const BtnPillRounded = () => (
    <button className="btn__pillRounded" type="submit">
        Sign up
    </button>
)
const BtnPillRoundedSm = ({text="Sign up"}) => (
    <button className="a__button btn__pillRoundedSm a__button__oneclick w-100" type="submit">
        {text}
    </button>
)

const BtnPillRoundedLg = () => (
    <button className="btn__pillRoundedLg" type="submit">
        Sign up
    </button>
)

const BtnPillRoundedObscureLg = ({icon, text}) => (
    <button className={`btn__pillRoundedObscureLg btn__pillRoundedObscureLg--${icon}`} type="submit">
        {text}
    </button>
)

const BtnSquarePrimary = ({icon, text}) => (
    <span className="a__button a__button__primary">
        <span className="a__button__inner">
            <Link to="/" className="a__button__text">Sign up</Link>
        </span>
    </span>
)

const ApplyToSellBtn = ({size}) => {
    return (
        <Button className={`apply__to__sellBtn ${size}`}>
            Apply to sell
        </Button>
    )
}

const ReportAbuse = () => {
    return (
        <span>
            <i className="a__icon a__icon__text__separator" role="img" aria-label="|"></i>
            <Link to="/" className="a__size__base a__color__secondary a__text__normal">
                Report abuse
            </Link>
        </span>
    )
}

const MyxBtn = ({text, disabled=false, type, mode=""}) => {

    // mode === "sm" or "" 

    const [dropdownOpenMyx, setDropdownOpenMyx] = useState(false);
    const toggleMyx = () => setDropdownOpenMyx(prevState => !prevState);

    return (
        type==="dropdown" ? 
            (
                <Dropdown isOpen={dropdownOpenMyx} toggle={toggleMyx} tag="span" className={`${mode}`}>
                    <DropdownToggle className={`myx__button ${disabled && ("myx__button__disabled")} ${type==="dropdown" && ("myx__button__dropdown")}`}>
                        <span className="myx__button__inner">
                            <button className="myx__button__text">
                                <span>{text}</span>
                            </button>
                            {type==="dropdown" && (<i className="myx__icon myx__icon__dropdown"></i>)}
                        </span>
                    </DropdownToggle>
                    <DropdownMenu className="myx__popover myx__dropdown">
                        <DropdownItem>ON</DropdownItem>
                        <DropdownItem>OFF</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            )
            : 
            (
                <span className={`myx__button ${mode} ${disabled && ("myx__button__disabled")} ${type==="dropdown" && ("myx__button__dropdown")}`}>
                    <span className="myx__button__inner">
                        <button className="myx__button__text">
                            <span>{text}</span>
                        </button>
                    </span>
                </span>
            )
    )
}

const MusicBtn = ({ title }) => (
    <button className="music__btn" title={title}>
        SEE ALL
    </button>
)

const BookBtn = ({ text="Add to Basket", type }) => (
    <button className={`book__btn ${type==="form" && "book__btn--btn"}`}>
        {text}
    </button>
)

export { 
    BtnPill, BtnPrimary, CancelBtnLink, CancelBtnPrimary, SaveBtnPrimary, JoinPrimeBtn,
    SearchButton, OrderButton, BuyAgainBtn, PrimaryBtn, CartBtn, CartBtnSmall, CartBtnSecondary,
    CouponBtn, SeeAllResults, LocationButton, SecondaryButton, BtnPillRounded, BtnPillRoundedSm,
    BtnPillRoundedLg, BtnPillRoundedObscureLg, BtnSquarePrimary, ApplyToSellBtn, PrimaryBtn__ii, 
    ReportAbuse, MyxBtn, MusicBtn, BookBtn
}
