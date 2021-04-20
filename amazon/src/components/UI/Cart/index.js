import React from 'react'

import { BtnPrimary } from '../../UI/Button'

const Cart = ({img, title, altTitle, price, date}) => {
    return (
        <li className="a__spacing__medium">
            <div className="d-flex position-relative">
                <a href="/" className="cart__imgLink d-inline-block" src="">
                    <img src={img} alt={img}/>
                </a>
                <div className="cart__details">
                    <a className="d-block" href="/">
                        <div aria-hidden="true" data-rows="2" title={altTitle}>{title}</div>
                    </a>
                    <a className="a__color__price a__size__base d-block" href="/">CDN${price}</a>
                    <span className="a__size__small a__color__secondary d-block" href="/">Purchased {date}</span>
                    <div className="a__section a__spacing__top__micro">
                        <BtnPrimary/>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Cart
